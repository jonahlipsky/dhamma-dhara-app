const userQueries = require('./datasources/userQueries');

module.exports = {
  Query:{
    getUsers: async () => {
      console.log('getting users')
      let users = await userQueries.getUsers();
      return users;
    },
  },
  Mutation: {
    login: async (_, { userName }, { dataSources }) => {
      console.log('logging in');
      const user = await dataSources.userAPI.findOrCreateUser({ userName });
      if (user) {
        user.token = new Buffer(userName).toString('base64');
        return user;
      }
    },
    createUser: async ({input}) => {
      console.log('creating user')
      let newUser = await userQueries.createUser(input)
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
