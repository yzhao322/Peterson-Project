const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passportLocalMongoose = require('passport-local-mongoose');

var bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    allowNull: true,

  },
  address: {
    type: String,
    allowNull: true,

  },
  title: {
    type: String,
    allowNull: true,
    required: true,
    default: "member"
  },
  password: {
    type: String,
    allowNull: false,
    required: true,
  },
  address: {
    type: String,

  },
  isLoggedIn: {
    type: Boolean,
    default: false
  }
});

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.pre('save', function (next) {
  let user = this;

  //only hash the password if it has been modified ( or is new)

  if (!user.isModified('password')) return next();

  //generate a salt
  bcrypt.genSalt(10, function (err, salt) {

    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database


  UserSchema.plugin(passportLocalMongoose);


});

module.exports = User = mongoose.model("user", UserSchema);
