const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const produces = require("./routes/api/produces");
const order = require("./routes/api/order");
const users = require("./routes/api/users");
const orders = require("./routes/api/orders");
const orderhistory = require("./routes/api/orderhistory")
const app = express();
// Creating express app and configuring middleware needed for authentication

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());

app.use("/api/orderhistory", orderhistory);
app.use("/api/produces", produces);
app.use("/api/orders", orders);
app.use("/api/users", users);

// require("./routes/api/users")(app);
// require("./routes/html-routes.js")(app);

const db = require("./config/keys").mongoURI;

mongoose.connect(process.env.MONGODB_URI || db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected");
});


const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server started on ${port}`));
