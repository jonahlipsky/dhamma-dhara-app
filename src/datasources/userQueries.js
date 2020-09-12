module.exports = {

  updateUser: async function updateUser (input) {
    let client = new Client({ database: process.env.POSTGRES_NAME});
    client.connect();
    console.log(input)
    let data = await client.query('UPDATE users SET login = $1 WHERE id = $2 RETURNING *', [input.login, input.id])
    return data.rows[0]
  },
  deleteUser: async function deleteUser (input) {
    let client = new Client({ database: process.env.POSTGRES_NAME});
    client.connect();
    console.log(input)
    let data = await client.query('DELETE FROM users WHERE id = $1 RETURNING *', [input.id])
    return data.rows[0]  
  }
}
