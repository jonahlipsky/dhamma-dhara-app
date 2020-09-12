const userQueries = require('./datasources/userQueries');

module.exports = {
  Query:{
    getUsers: async (_, __, { dataSources }) => {
      console.log('getting users')
      let users = await dataSources.userAPI.getUsers();
      return users;
    },
  },
  Mutation: {
    loginUser: async (_, { input }, { dataSources }) => {
      console.log('logging in');
      const user = await dataSources.userAPI.findOrCreateUser({ username: input });
      if (user) {
        user.token = new Buffer(username).toString('base64');
        return user;
      }
    },
    createUser: async (_, { input }, { dataSources }) => {
      console.log('creating user')
      let newUser = await dataSources.userAPI.createUser(input)
      return newUser
    },
    updateUser: async ({input}) => {
      console.log('updating user')
      let updatedUser = await userQueries.updateUser(input)
      return updatedUser
    },
    deleteUser: async ({input}) => {
      console.log('deleting user')
      let deletedUser = await userQueries.deleteUser(input)
      return deletedUser
    }
  }  
};
