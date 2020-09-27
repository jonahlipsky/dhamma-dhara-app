const { DataSource } = require('apollo-datasource');
const bcrypt = require('bcrypt')

class UserAPI extends DataSource{
  constructor({ store }){
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getUser({ username } = {}){
    const user = await this.store.prisma.users.findOne({ 
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

  async deleteUser(input){
    const user = await this.store.prisma.users.delete({
      where: {
        id: parseInt(input)
      }
    });
    return user;
  }

  // auth functions

  async signupUser(input){
    const { username, password } = input;
      let admin;
      if (input.admin){
        admin = input.admin;
      } else {
        admin = 0;
      }
      const salt = await this.generateToken();
      const passwordDigest = bcrypt.hashSync(password, salt);
      await this.createUser({ admin, username, passwordDigest, salt });
      const sessionToken = await this.loginUser(input);
      return sessionToken;
  }

  async loginUser({ username, password }){
    const user = await this.getUser({ username });
    if (!user) throw new Error('Unable to log in');
    const passwordDigest = bcrypt.hashSync(password, user.salt);
    const isMatch = passwordDigest == user.passwordDigest;
    if (!isMatch) throw new Error('Unable to log in');
    const sessionToken = await this.generateToken(1);
    await this.store.prisma.users.update({
      where: { id: user.id },
      data: { sessionToken }
    });
    return sessionToken;
  }

  async logoutUser({ username }){
    const loggedOutUser = await this.store.prisma.users.update({
      where: { username },
      data: { sessionToken: null }
    });
    return loggedOutUser;
  }

  async getUserBySessionToken({ sessionToken }) {
    const user = await this.store.prisma.users.findOne({ 
      where: {
        sessionToken
      }
    });
    return user;
  }

  async generateToken(rounds = 10){
    return bcrypt.genSalt(rounds);
  }
}

module.exports = UserAPI;
