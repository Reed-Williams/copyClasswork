require('dotenv').config();
const express = require('express');
const usersController = require('./controllers/users');
const app = express()
const port = process.env.PORT || 3000
app
    //lets us serve the static files in the public folder(which should be the dist folder)
    .use('/', express.static(__dirname + '/public/'))
    //lets the server parse incomming json text
    .use(express.json())
    //we will have /api/ in the url when we are using the api
    .get('/api/', (req, res) => {
        res.send('You are at the root of the api for the best class ever - ' + process.env.BEST_CLASS_EVER);
    })
    //call the users controller file to return user info
    .use('/api/users', usersController)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})