import resolvers from './graphql_root';
import queries from './queries/userQueries';

describe('getUsers', () => {
  it('gets all users', async () => {
    const users = resolvers.getUsers();
    await expect(users).resolves.toEqual(await queries.getUsers())
  });
});
