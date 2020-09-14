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
    console.log(input)
    const user = await this.store.prisma.users.create({
      data: input
    });
    return user;
  }
}

module.exports = UserAPI;
