const { DataSource } = require('apollo-datasource');

class UserAPI extends DataSource{
  constructor({ store }){
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async findOrCreateUser({ userName: userNameArg } = {}){
    const userName = this.context && this.context.user ? this.context.user.userName : userNameArg;
    if (!userName) return null;

    let user = await this.store.user.findOne({ 
      where: {
        userName
      }
     });
    if(!user){
      user = await this.store.user.create({
        data: {
          userName 
        }
      });
    }
    return user ? user : null;
  }
}

module.exports = UserAPI;
