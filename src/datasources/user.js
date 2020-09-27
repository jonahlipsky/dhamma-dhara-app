const { DataSource } = require('apollo-datasource');

class UserAPI extends DataSource{
  constructor({ store }){
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getUser({ username } = {}){
    let user = await this.store.prisma.users.findOne({ 
      where: {
        username
      }
    });
    return user;
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
      const updatedUser = await this.store.prisma.users.update({
        where: { id: user.id },
        data: { username, admin }
      });
      
      return updatedUser;
    } else {
      return null;
    }
  }

  async logoutUser({ username }){
    const loggedOutUser = await this.store.prisma.users.update({
      where: { username },
      data: { sessionToken: '' }
    });
    return loggedOutUser;
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
