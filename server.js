const express = require("express");
const session = require("express-session");


const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const produces = require("./routes/api/produces");
const order = require("./routes/api/order");
const users = require("./routes/api/users");
const orders = require("./routes/api/orders");


const app = express();

app.use(bodyParser.json());

// Requiring our routes 

app.use("/api/produces", produces);
app.use("/api/order", order);
app.use("/api/users", users);






const db = require("./config/keys").mongoURI;

mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected");
});

// mongoose
//   .connect(db)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server started on ${port}`));
