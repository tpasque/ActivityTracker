require('dotenv').load()
var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var request = require('request');
var jwt = require('jsonwebtoken');

function Users(){
  return knex('users')
}



function Posts(){
  return knex('posts')
}

function createToken(user){
  return jwt.sign(user, process.env.TOKEN_SECRET)
}
function verifyToken(user){
  return jwt.verify(user, process.env.TOKEN_SECRET)
}



router.post('/auth/facebook', function(req,res){
  var fields = ['id', 'email', 'first_name', 'last_name', 'name'];
  var accessTokenUrl = 'https://graph.facebook.com/v2.5/oauth/access_token';
  var graphApiUrl = 'https://graph.facebook.com/v2.5/me?fields=' + fields.join(',');
  var params = {
  code: req.body.code,
  client_id: req.body.clientId,
  client_secret: process.env.FACEBOOK_CLIENT_SECRET,
  redirect_uri: req.body.redirectUri
 };
   request.get({ url: accessTokenUrl, qs: params, json: true }, function(err, response, accessToken) {
      if (response.statusCode !== 200) {
        return res.status(500).send({ message: accessToken.error.message });
      }
      request.get({ url: graphApiUrl, qs: accessToken, json: true }, function(err, response, profile) {
        if (response.statusCode !== 200) {
          return res.status(500).send({ message: profile.error.message });
        }
          var user = {}
          user.facebook_id = profile.id
          user.profile_image_url = 'https://graph.facebook.com/'+profile.id+'/picture?type=large'
          user.email = profile.email
          user.first_name = profile.first_name
          user.last_name = profile.last_name
          user.name = profile.name;
          console.log("**********");
          console.log(user);
          var token = createToken(user)
          Users().insert(user)
            .catch(function(error){
              console.log(error);
            }).then(function(){
              res.send({token: token})
              // console.log("Successfull insert. Token is: "+token);
            })

      })
    });
})

router.get('/posts', function(req,res,next){
  Posts().select().then(function(response){
    res.send(response)
  })
})

router.post('/user', function(req, res){
  var token = req.body.token
  var user = verifyToken(token)
  res.send(user)
})

router.post('/post', function(req, res, next){
  var post ={}
post.facebook_id = req.body.facebook_id
post.author = req.body.author
post.title = req.body.title
post.author = req.body.author
post.address = address
post.picture_url = req.body.picture_url
post.description = req.body.description

})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
