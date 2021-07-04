import resolvers from './graphql_root';
import queries from './queries/userQueries';

describe('getUsers', () => {
  it('gets all users', async () => {
    console.log(`node test env: ${process.env.NODE_ENV}`)
    const users = resolvers.getUsers();
    await expect(users).resolves.toEqual(await queries.getUsers())
  });
});
