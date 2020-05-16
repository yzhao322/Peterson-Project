const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  title: {
    type: String,
    required: false
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    allowNull: true,
    required: true,
  },
  address: {
    type: String,
    allowNull: true,
    required: true,
  },
  title: {
    type: String,
    allowNull: true,
    required: true,
  },
  password: {
    type: String,
    allowNull: false,
    required: true,
  },
  address: {
    type: String,
    required: false
  }
});

UserSchema.pre('save', function (next) {
  let user = this;

  //only hash the password if it has been modified ( or is new)

  if (!user.isModified('password')) return next();

  //generate a salt
  bcrypt.genSalt(10, function (err, salt) {

    if(err) return next(err);

    bcrypt.hash(user.password, salt,function(err,hash){
      if(err) return next(err);
      user.password = hash;
      next();
    });
  });

  UserSchema.methods.comparePassword = function (candidatePassword,cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if(err) return next(err);
      cb(null,isMatch);
    });
  };
});

module.exports = User = mongoose.model("user", UserSchema);
