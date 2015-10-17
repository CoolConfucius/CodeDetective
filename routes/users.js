'use strict';

var express = require('express');
var router = express.Router();
var passport = require('passport');

var User = require('../models/user');

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/register', function(req, res, next){
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Missing required fields username and password.'});
  }

  var user = new User();
  console.log("users.js REQ BODY", req.body);
  user.username = req.body.username;
  user.setPassword(req.body.password);
  user.symbol = req.body.symbol;
  user.level = "wakingup";
  user.achievements = []; 
  
  user.save(function (err){
    if(err){ 
      // return next(err); 
      return res.status(400).json({error: err}); 
    }

    return res.json({token: user.generateJWT()})
  });
});

router.post('/login', function(req, res, next){
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Missing required fields username and password.'});
  }

  passport.authenticate('local', function(err, user, info){
    if(err){ 
      // return next(err); 
      return res.status(400).json({error: err}); 
    }

    if(user){
      return res.json({token: user.generateJWT()});
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});

router.post('/save', function(req, res, next){
  console.log('SAVE reqbody: ', req.body);
  User.find({ _id: req.body._id}, function(err, user){
    user.symbol = req.body.symbol; 
    user.levels = req.body.levels; 
    user.achievements = req.body.achievements; 
    user.save(function(err, savedUser){
      if (err) {
        res.send(err); 
      } else {
        res.send(savedUser); 
      }    
    });  
  });   
});

module.exports = router;
