require('express-async-errors')

const express = require('express'),
bodyparser = require('body-parser'),
userRoutes = require('./controllers/user-controller') 

const app = express();
const port = 3000;

// middleware
app.use(bodyparser.json())
app.use('/api/users', userRoutes)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something went wrong!')
})

app.listen(port, () => console.log('Server started at ' + port));