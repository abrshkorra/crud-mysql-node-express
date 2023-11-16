const express = require('express');
const db = require('./db');

const app = express();
const port = 3000;

db.query("SELECT * FROM users")
  .then(data => console.log(data))
  .catch(err => console.log(err))
  .finally(() => {
    app.listen(port, () => console.log('Server started at ' + port));
  });
