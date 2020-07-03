const express = require('express');
const api = express();
const port = process.env.PORT || 4000;
require('dotenv').config()
const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect();
client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  client.end();
});

api.get('/', (req, res) => res.send('hello world'));

api.get('/todos', (req, routeRes) => {
  let client2 = new Client({ database: process.env.POSTGRES_NAME});
  client2.connect()
  let response;
  client2.query('SELECT * FROM todos', async (err, res) => {
    if (err) {
      console.log('Failed to query todos')
      routeRes.send('Failure')
    } else {
      console.log(res.rows[0])
      console.log(res.rows)
      response = res.rows
      console.log('sending response')
      routeRes.send(response);
    }
  })
})

api.listen(port, () => console.log(`Listening on port ${port}`));
