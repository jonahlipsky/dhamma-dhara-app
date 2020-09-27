const jwt = require('jsonwebtoken')

module.exports = {
  Query:{
    getUsers: async (_, __, { dataSources }) => {
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
      const sessionToken = await dataSources.userAPI.signupUser(input);
      return { token: jwt.sign(sessionToken, process.env.SECRET_TOKEN) };
    },
    loginUser: async (_, { input }, { dataSources }) => {
      console.log('logging in');
      const sessionToken = await dataSources.userAPI.loginUser(input);
      return { token: jwt.sign(sessionToken, process.env.SECRET_TOKEN) };
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
