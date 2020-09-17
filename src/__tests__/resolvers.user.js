const resolvers = require('../resolvers');

describe('Users', () => {
  const mockContext = {
    dataSources: {
      userAPI: { 
        getUser: jest.fn()
      }
    },
    user: { id: 1 }
  };
  const { getUser } = mockContext.dataSources.userAPI;
  const user = { id: 1, username: 'testuser', admin: 0 }
  it('uses the user id from the input to query dataSources', async () => {
    getUser.mockReturnValueOnce(user);
    const res = await resolvers.Query.getUser(null, 1, mockContext);
    expect(res).toEqual(user);
  });
});
