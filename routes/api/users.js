const express = require("express");
const router = express.Router();

const User = require("../../models/user");

//get api/items
router.get("/", (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then((users) => res.json(users));
});

router.post("/", (req, res) => {
  console.log(req.body);
  User.create(req.body).then((user) => res.json(user));
});

router.delete("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => user.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
