const userQueries = require('./datasources/userQueries');
const { dataSources } = require('./server');

module.exports = {
  Query:{
    getUsers: async (_, __, { dataSources }) => {
      console.log('getting users')
      let users = await dataSources.userAPI.getUsers();
      return users;
    },
    getUser: async (_, { input }, { dataSources }) => {
      let user = await dataSources.userAPI.getUser({ id: input });
      return user;
    }
  },
  Mutation: {
    loginUser: async (_, { input }, { dataSources }) => {
      console.log('logging in');
      const user = await dataSources.userAPI.findOrCreateUser({ username: input });
      if (user) {
        user.token = new Buffer(input).toString('base64');
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
      let updatedUser = await dataSources.userAPI.updateUser(input);
      return updatedUser
    },
    deleteUser: async ({input}) => {
      console.log('deleting user')
      let deletedUser = await userQueries.deleteUser(input)
      return deletedUser
    }
  }  
};
