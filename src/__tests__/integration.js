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

    beforeEach(() => {
      userAPI.store.prisma.users.findMany.mockReturnValueOnce([superadmin_user, admin_user]);
    });

    it('fetches a list of users', async () => {
      const returnUsers = [
        { id: '1', username: 'lysha', admin: 2, token: null },
        { id: '2', username: 'eric', admin: 1, token: null }
      ];
            
      const res = await query( { query: GET_USERS } );
      expect(res).toMatchSnapshot();
      expect(res.data.getUsers).toEqual(returnUsers);
    });
  });
  
  describe('getUser', () => {
    const GET_USER = gql`
      query getUser($input: ID!){
        getUser(input: $input){
          id, username, admin
        }
      }
    `;

    beforeEach(() => {
      userAPI.store.prisma.users.findOne.mockReturnValueOnce(superadmin_user);
    });

    it('queries the prisma client once with appropriate arguments and returns the user', async () => {
      const res = await query( { query: GET_USER, variables: { input: 1 } } );
      expect(res).toMatchSnapshot();
      expect(userAPI.store.prisma.users.findOne.mock.calls[0][0]).toEqual({ where: { id: 1 } });
      expect(userAPI.store.prisma.users.findOne.mock.calls[0].length).toEqual(1);
      expect(res.data.getUser).toEqual({ id: '1', username: 'lysha', admin: 2 });
    });
  });
});

describe('Mutations', () => {
  describe('createUser', () => {
    const CREATE_USER = gql`
      mutation createUser($input: CreateUserInput){
        createUser(input: $input){
          id, username, admin
        }
      }
    `;

    beforeEach(() => {
      userAPI.store.prisma.users.create.mockReturnValueOnce(superadmin_user);
    });

    it('accesses the prisma client one time with appropriate arguments to create a user and returns the newly created user', async () => {
      const res = await mutate( { mutation: CREATE_USER, variables: { input: { admin: 2, username: 'lysha' } } } );
      expect(res).toMatchSnapshot();
      expect(userAPI.store.prisma.users.create.mock.calls[0][0]).toEqual({ data: { admin: 2, username: 'lysha' } });
      expect(userAPI.store.prisma.users.create.mock.calls[0].length).toEqual(1);
      expect(res.data.createUser).toEqual({ id: '1', username: 'lysha', admin: 2 });
    });
  });
  
  describe('updateUser', () => {
    const UPDATE_USER = gql`
      mutation updateUser($input: ModifyUserInput){
        updateUser(input: $input){
          id, username, admin
        }
      }
    `;

    const adjusted_superadmin_user = JSON.parse(JSON.stringify(superadmin_user));
    adjusted_superadmin_user.username = 'lysha smith';

    beforeEach(() => {
      userAPI.store.prisma.users.findOne.mockReturnValueOnce(superadmin_user);
      userAPI.store.prisma.users.update.mockReturnValueOnce(adjusted_superadmin_user);
    });

    it('accesses the prisma client with the proper variables and returns the updated user', async () => {
      const query_data = { id: 1, username: 'lysha smith' }
      const res = await mutate( { mutation: UPDATE_USER, variables: { input: query_data } } );
      expect(res).toMatchSnapshot();
      const { username } = query_data;
      expect(userAPI.store.prisma.users.update.mock.calls[0][0]).toEqual({ where: { id: query_data.id }, data: { username } });
      expect(res.data.updateUser).toEqual({ id: '1', username: 'lysha smith', admin: 2 });
    });
  });

  describe('deleteUser', () => {
    const DELETE_USER = gql`
      mutation deleteUser($input: ID!){
        deleteUser(input: $input){
          id
        }
      }
    `;

    beforeEach(() => {
      userAPI.store.prisma.users.delete.mockReturnValueOnce(superadmin_user);
    });

    it('accesses the prisma client with the proper variables and returns the deleted user', async () => {
      const query_data = 1;
      const res = await mutate({ mutation: DELETE_USER, variables: { input: query_data } });
      expect(res).toMatchSnapshot();
      expect(userAPI.store.prisma.users.delete.mock.calls[0][0]).toEqual({ where: { id: query_data } });
      expect(res.data.deleteUser).toEqual({ id: '1' });
    });
    
    
  });

  describe('loginUser', () => {

  });
});
