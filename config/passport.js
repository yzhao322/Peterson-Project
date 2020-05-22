const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

var User = require("../models/user");


passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "username"
  },
  function (username, password, done) {

    // When a user tries to sign in this code runs
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { 
        console.log("Incorrect email");
        
        return done(null, false,{
        message: "Incorrect email."
      }); 
      
    }
      if (!user.validPassword(password)) {

        console.log("Incorrect password");
        alert("Incorrect email")
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      console.log(null,user)
      return done(null, user);
    });
  }
))



// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
