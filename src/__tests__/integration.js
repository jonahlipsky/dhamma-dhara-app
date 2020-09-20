const {createTestClient} = require('apollo-server-testing');
const gql = require('graphql-tag');
// const nock = require('nock');

const { constructTestServer } = require('../__test_helpers__/__utils');

// the mocked SQL DataSource store
const { mockStore } = require('../__test_helpers__/__mock_store');

const { server, userAPI } = constructTestServer({
  context: () => ({ user: { id: 1, username: 'lysha' } }),
});

userAPI.store = mockStore;
const now = new Date('August 19, 1975 23:15:30 UTC')
const superadmin_user = { id: 1, username: 'lysha', admin: 2, token: null, passwordDigest: 'abc', sessionToken: 'abc', createdAt: now, updatedAt: now};
const admin_user = { id: 2, username: 'eric', admin: 1, token: null, passwordDigest: 'abc', sessionToken: 'abc', createdAt: now, updatedAt: now};
const { query, mutate } = createTestClient(server);

describe('Queries', () => {
  
  describe('getUsers', () => {
    const GET_USERS = gql`
      query getUsers {
        getUsers{
          id, username, admin, token
        }
      }
    `;

    it('fetches a list of users', async () => {
      
      const mockServerResponse = [superadmin_user, admin_user];
  
      const returnUsers = [
        { id: '1', username: 'lysha', admin: 2, token: null },
        { id: '2', username: 'eric', admin: 1, token: null }
      ];
  
      userAPI.store.prisma.users.findMany.mockReturnValueOnce(mockServerResponse);
      
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
  
    const CREATE_USER = gql`
      mutation createUser($input: UserInput){
        createUser(input: $input){
          id, username, admin
        }
      }
    `;

    it('accesses the prisma client one time with appropriate arguments to create a user and returns the newly created user', async () => {
      const mockServerResponse = superadmin_user;

      userAPI.store.prisma.users.create.mockReturnValueOnce(mockServerResponse);
      const returnUser = { id: '1', username: 'lysha', admin: 2 };
      const res = await mutate( { mutation: CREATE_USER, variables: { input: { admin: 2, username: 'lysha' } } } );
      expect(res).toMatchSnapshot();
      expect(userAPI.store.prisma.users.create.mock.calls[0][0]).toEqual({ data: { admin: 2, username: 'lysha' } });
      expect(userAPI.store.prisma.users.create.mock.calls[0].length).toEqual(1);
      expect(res.data.createUser).toEqual(returnUser);
    });
  });
  
  describe('updateUser', () => {

  });
  describe('deleteUser', () => {

  });
  describe('loginUser', () => {

  });
});
