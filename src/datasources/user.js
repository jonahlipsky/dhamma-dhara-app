const { DataSource } = require('apollo-datasource');
const { login } = require('./userQueries');

class UserAPI extends DataSource{
  constructor(){
    super();
  }

  async findOrCreateUser({ userName: userNameArg } = {}){
    const userName = this.context && this.context.user ? this.context.user.userName : userNameArg;
    if (!userName) return null;

    // const user = await login();
  }

}
