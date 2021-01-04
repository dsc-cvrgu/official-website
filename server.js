const express = require("express");
const path = require("path");
require("dotenv").config();
const cors = require("cors");

let port = process.env.PORT || 5000;
const app = express();
app.use(cors({ origin: true }));

// if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
// }

app.listen(port, () => console.log("server running on port: ", port));
