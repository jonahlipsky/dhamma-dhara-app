const {createTestClient} = require('apollo-server-testing');
const gql = require('graphql-tag');
// const nock = require('nock');

const { constructTestServer } = require('../__test_helpers__/__utils');

// the mocked SQL DataSource store
const { mockStore } = require('../__test_helpers__/__mock_store');

const GET_USERS = gql`
  query getUsers {
    getUsers{
      id, username, admin, token
    }
  }
`;

describe('Queries', () => {
  describe('getUsers', () => {
    it('fetches a list of users', async () => {
      const { server, userAPI } = constructTestServer({
        context: () => ({ user: { id: 1, username: 'lysha' } }),
      });
  
      const now = new Date('August 19, 1975 23:15:30 UTC')
      const mockUsers = [
        { id: 1, username: 'lysha', admin: 2, token: null, passwordDigest: 'abc', sessionToken: 'abc', createdAt: now, updatedAt: now},
        { id: 2, username: 'eric', admin: 1, token: null, passwordDigest: 'abc', sessionToken: 'abc', createdAt: now, updatedAt: now}
      ];
  
      const returnUsers = [
        { id: "1", username: 'lysha', admin: 2, token: null },
        { id: "2", username: 'eric', admin: 1, token: null }
      ];
  
      userAPI.store = mockStore;
      userAPI.store.prisma.users.findMany.mockReturnValueOnce(mockUsers);
      const { query } = createTestClient(server);
      const res = await query( { query: GET_USERS } );
      expect(res).toMatchSnapshot();
      expect(res.data.getUsers).toEqual(returnUsers);
    });
  });
  
  describe('getUser', () => {

  });
});

describe('Mutations', () => {
  describe('createUser', () => {

  });
  describe('updateUser', () => {

  });
  describe('deleteUser', () => {

  });
  describe('loginUser', () => {

  });
});
