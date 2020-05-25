const express = require("express");
const router = express.Router();
const passport = require("../../config/passport");
const User = require("../../models/user");

router.post('/login', (req, res, next) => {
  passport.authenticate('local',
  (err, user) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.redirect('/login');
    }

    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      console.log("logged in: ", user)
      // return res.redirect('/');
      return res.json(req.user);
    });

  })(req, res, next);
});


router.get('/', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch(err => res.status(422).json(err));
});

// router.get('/:_id', (req, res) => {
//   console.log(res)
//   User.findById(req.param._id)
//     .then((users) => res.json(users))
//     .catch(err => res.status(422).json(err));
// });

//end 

//get api/items
router.get("/login", (req, res) => {
  console.log(req.user,"3");
  User.find()
    .sort({ date: -1 })
    .then((users) => res.json(users))
    .catch((err) => res.status(404).json({ success: false }));
});


router.post("/signup", (req, res) => {
  console.log(req.body,"Signup");
  User.create(req.body)
  .then((user) => res.json(user))
  .catch((err) => res.status(404).json({ success: false }));;
});

router.delete("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => user.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});


module.exports = router;
