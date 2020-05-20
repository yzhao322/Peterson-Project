const express = require("express");
const router = express.Router();
const passport = require("../../config/passport");
const User = require("../../models/user");

const connectEnsureLogin = require('connect-ensure-login');

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

router.get('/login',
  (req, res) => res.sendFile('html/login.html',
  { root: __dirname })
);

router.get('/member',
  connectEnsureLogin.ensureLoggedIn(),
  (req, res) => 
  {
     console.log(res) 
    if (!req.user) {
      // The user is not logged in, send back an empty object
      console.log(res);
      res.json({});
  } else {
      console.log(res);
  }
});

router.get('/private',
  connectEnsureLogin.ensureLoggedIn(),
  (req, res) => res.sendFile('html/private.html', {root: __dirname})
);

router.get('/user',
  connectEnsureLogin.ensureLoggedIn(),
  (req, res) => res.send({user: req.user})
);


//end 

//get api/items
router.get("/login", (req, res) => {
  console.log(req.user,"3");
  User.find()
    .sort({ date: -1 })
    .then((users) => res.json(users));
});


router.post("/signup", (req, res) => {
  console.log(req.body,"Signup");
  User.create(req.body).then((user) => res.json(user));
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


router.get("/api/user/:username", function (req, res) {
  User.findAll({
    where: {
      username: req.params.username
    }
  })
    .then(function (data) {
      console.log(data,"loggin in User: ")
      let userdetails = data[0].dataValues;
      res.json(userdetails);
    }).catch(function (error) {
      console.error(error);
    });
});

module.exports = router;
