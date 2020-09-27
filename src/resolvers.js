const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
  Query:{
    getUsers: async (_, __, { dataSources }) => {
      console.log('getting users');
      console.log(`secret token`)
      console.log(`${process.env.SECRET_TOKEN}`)
      let users = await dataSources.userAPI.getUsers();
      return users;
    },
    getUser: async (_, { input }, { dataSources }) => {
      let user = await dataSources.userAPI.getUser({ id: input });
      return user;
    }
  },
  Mutation: {
    signupUser: async (_, { input }, { dataSources }) => {
      const { username, password } = input;
      let admin;
      if (input.admin){
        admin = input.admin;
      } else {
        admin = 0;
      }
      const passwordDigest = bcrypt.hashSync(password, 3);
      const newUser = await dataSources.userAPI.createUser({ admin, username, passwordDigest });
      return { token: jwt.sign(newUser, process.env.SECRET_TOKEN) };
    },
    loginUser: async (_, { input }, { dataSources }) => {
      console.log('logging in');
      const { username, password } = input;
      const user = await dataSources.userAPI.getUser({ username });
      if (!user) throw new Error('Unable to log in');
      const isMatch = bcrypt.compareSync(password, user.passwordDigest);
      if (!isMatch) throw new Error('Unable to log in');
      return { token: jwt.sign(user, process.env.SECRET_TOKEN) };
    },
    logoutUser: async (_, __, { user, dataSources }) => {
      const { username } = user;
      const databaseUser = await dataSources.userAPI.getUser({ username });
      if (databaseUser) {
        await dataSources.userAPI.logoutUser({ username });
        return { token: '' };
      }
    },
    createUser: async (_, { input }, { dataSources }) => {
      console.log('creating user')
      let newUser = await dataSources.userAPI.createUser(input)
      return newUser;
    },
    updateUser: async (_, { input }, { dataSources }) => {
      console.log('updating user')
      let updatedUser = await dataSources.userAPI.updateUser(input);
      return updatedUser;
    },
    deleteUser: async (_, { input }, { dataSources }) => {
      console.log('deleting user')
      let deletedUser = await dataSources.userAPI.deleteUser(input);
      return deletedUser;
    }
  }  
};
