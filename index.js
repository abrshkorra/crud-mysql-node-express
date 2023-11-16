const express = require('express'),
db = require('./db'),
userRoutes = require('./controllers/user-controller') 

const app = express();
const port = 3000;

// middleware
app.use('/api/users', userRoutes)

db.query("SELECT * FROM users")
  .then(data => console.log(data))
  .catch(err => console.log(err))
  .finally(() => {
    app.listen(port, () => console.log('Server started at ' + port));
  });
