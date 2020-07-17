const userQueries = require('./queries/userQueries');

module.exports = {
  hello: () => {
    return 'Hello World!';
  },
  getUsers: async () => {
    console.log('getting users')
    let users = await userQueries.getUsers()
    return users
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
};
