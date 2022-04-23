require('dotenv').config();
const express = require('express');

const userModel = require('./models/users');
const usersController = require('./controllers/users');
const postsController = require('./controllers/posts');
const { requireAuth } = require( './models/auth') ;

const app = express()
const port = process.env.PORT || 3000
app
    //lets us serve the static files in the public folder(which should be the dist folder)
    .use('/', express.static(__dirname + '/public/'))
    //corse thing is middleware
    .use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
      next();
    })
    //lets the server parse incomming json text
    .use(express.json())
    .use((req, res, next) => {
      const auth = req.headers.authorization;
      if(auth){
        //splitting string and taking sexond element
        const token = auth.split(' ')[1];
        //fromToken returns a promise, se we need to use the then and the next
        userModel.fromToken(token)
        .then(user => {
          req.user = user;
          next();
        }).catch(next)
      }
      else{
        next();
      }
    })

    //we will have /api/ in the url when we are using the api
    .get('/api/', (req, res) => {
        res.send('You are at the root of the api for the best class ever - ' + process.env.BEST_CLASS_EVER);
    })
    //call the users controller file to return user info
    .use('/api/users', usersController)
    .use('/api/posts', /*requireAuth,*/ postsController)
    .use((err, req, res, next)=>{
      console.error(err);

      res.status(err.statusCode || 500 )
         .send({ errors: [err.message ?? 'Internal server error']})
    })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})