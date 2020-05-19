const express = require("express");
const router = express.Router();
var passport = require("../../config/passport");
const User = require("../../models/user");


// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
router.post("/api/login", passport.authenticate("local"), function (req, res) {
  res.json(req.user);
});

//get api/items
router.get("/", (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then((users) => res.json(users));
});

router.post("/", (req, res) => {
  User.create(req.body).then((user) => res.json(user));
});

router.delete("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => user.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
