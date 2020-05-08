const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const produces = require("./routes/api/produces");

const app = express();

app.use(bodyParser.json());

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

app.use("/api/produces", produces);

const port = process.nextTick.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));
