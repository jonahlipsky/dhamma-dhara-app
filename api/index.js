const express = require('express');
const api = express();
const port = 3000;
const { Client } = require('pg');
const client = new Client({ database: 'devDB'});

client.connect();
client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  client.end();
});

api.get('/', (req, res) => res.send('hello world'));

api.get('/todos', (req, res) => {
  let client2 = new Client({ database: 'devDB'});
  client2.connect()
  let response;
  client2.query('SELECT * FROM todos', (err, res) => {
    if (err) {
      console.log('Failed to query todos')
    } else {
      console.log(res.rows[0])
      console.log(res.rows)
      response = res.row[0]
    }
  })
  res.send(response);
})

api.listen(port, () => console.log(`Listening on port ${port}`));
