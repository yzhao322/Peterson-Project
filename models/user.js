const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// var bcrypt = require("bcryptjs");

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
  password: {
    type: String,
    allowNull: false,
    required: true,

  }
});

// UserSchema.prototype.valPassword = function (password) {
//   console.log(bcrypt.compareSync(password, this.password));
//   return bcrypt.compareSync(password, this.password);
// }

// // Hooks are automatic methods that run during various phases of the User Model lifecycle
// // In this case, before a User is created, we will automatically hash their password
// UserSchema.addHook("beforeCreate", function (user) {
//   UserSchema.password = bcrypt.hashSync(Schema.password, bcrypt.genSaltSync(10), null);
// });

module.exports = User = mongoose.model("user", UserSchema);
