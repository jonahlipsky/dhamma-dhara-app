const { DataSource } = require('apollo-datasource');

class UserAPI extends DataSource{
  constructor({ store }){
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getUser({ id } = {}){
    let user = await this.store.prisma.users.findOne({ 
      where: {
        id: parseInt(id)
      }
    });
    return user;
  }

  async findOrCreateUser({ username } = {}){
    const usernameArg = this.context && this.context.user ? this.context.user.username : username;
    if (!usernameArg) return null;

    let user = await this.store.prisma.users.findOne({ 
      where: {
        username: usernameArg
      }
    });

    if(!user){
      user = await this.store.prisma.users.create({
        data: {
          username: usernameArg 
        }
      });
    }
    
    return user ? user : null;
  }

  async getUsers(){
    const users = await this.store.prisma.users.findMany();
    return users;
  }

  async createUser(input){
    const user = await this.store.prisma.users.create({
      data: input
    });
    return user;
  }

  async updateUser(input){
    const user = await this.store.prisma.users.findOne({ 
      where: {
        id: parseInt(input.id)
      }
    });
    console.log(`test: ${user}`);
    const { username, admin } = input;
    if(user){
      const updated_user = await this.store.prisma.users.update({
        where: { id: user.id },
        data: { username, admin }
      });
      
      return updated_user;
    } else {
      return null;
    }
  }

  async deleteUser(input){
    const user = await this.store.prisma.users.delete({
      where: {
        id: parseInt(input)
      }
    });
    return user;
  }
}

module.exports = UserAPI;
