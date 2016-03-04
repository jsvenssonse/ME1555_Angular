'use strict';

let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
let auth = require('./auth');
let User = require('../models/db').User;

module.exports = function(passport){
    passport.serializeUser(function(user, done){
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done){
        User.findById(id, function(err, user){
            console.log('Deserialize: ' + err);
            done(err, user);
        });
    });

    passport.use(new GoogleStrategy({
        clientID: auth.clientID,
        clientSecret: auth.clientSecret,
        callbackURL: auth.callbackURL,
        profileFields: ['id', 'emails', 'name']
    },
   function(accessToken, refreshToken, profile, done) {
       process.nextTick(function(){
           User.findOne({'user.id': profile.id}, function(err, user){
               if(err)
                   return done(err);
               if(user)
                   return done(err, user);
               else {
                   let newUser = new User();
                   newUser.user.id = profile.id;
                   newUser.user._token = accessToken;
                   newUser.display_name = profile.displayName;
                   newUser.email = profile.emails[0].value;
                   newUser.save(function(err){
                       if(err)
                           throw err;
                       return done(err, newUser);
                   });
               }
           });
       });
   }));
};
