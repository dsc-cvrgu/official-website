const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(cors());
// const User = require("./models/user");

// const uri = process.env.ATLAS_URI;

// mongoose
//   .connect(uri, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   })
//   .then((result) => console.log("mongodb connected"))
//   .catch((err) => console.log(err));

if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
    })
  );
  app.use(morgan("dev"));
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
  app.use(
    cors({
      origin: "https://dsccvrgu.herokuapp.com",
    })
  );
}

app.use((req, res) => {
  res.status(404).json({
    success: false,
    msg: "Page not found",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
