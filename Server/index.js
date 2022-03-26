const express = require('express');
const usersController = require('./controllers/users');
const app = express()
const port = 3000
app
    //lets us serve the static files in the public folder(which should be the dist folder)
    .use('/', express.static(__dirname + '/public/'))
    //lets the server parse incomming json text
    .use(express.json())
    //we will have /api/ in the url when we are using the api
    .get('/api/', (req, res) => {
        res.send('You are on the homepage');
    })
    //call the users controller file to return user info
    .use('/api/users', usersController)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})