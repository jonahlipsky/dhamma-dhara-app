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

api.listen(port, () => console.log(`Listening on port ${port}`));
