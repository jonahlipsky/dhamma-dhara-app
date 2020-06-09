const express = require('express');
const api = express();
const port = 3000;

api.get('/', (req, res) => res.send('hello world'));

api.listen(port, () => console.log(`Listening on port ${port}`));
