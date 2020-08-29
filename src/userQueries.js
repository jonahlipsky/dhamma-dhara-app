const { Client } = require('pg');
require('dotenv').config()

let connection_string;

module.exports = {
  getUsers: async function getUsers () {
    let client = new Client();
    console.log(process.env.DATABASE_URL)
    console.log(process.env.NODE_ENV)
    client.connect()
    let data = await client.query('SELECT * FROM users')
    return data.rows
  },
  createUser: async function createUser (input) {
    let client = new Client();
    client.connect();
    let data = await client.query('INSERT INTO users(login) VALUES($1) RETURNING *', [input.login])
    return data.rows[0]
  },
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
