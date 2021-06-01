const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

const eventRoute = require("./routes/eventRoute");

const app = express();

app.use(express.static(__dirname + "/public"));

const db = require("./db/dbConnect");

app.use(cors());

dotenv.config({ path: "./config.env" });

app.use(express.json());

app.use("/api/event", eventRoute);
// app.use("/api/ticket", ticketRoute);

const port = process.env.PORT || 4004;

app.listen(port, () => {
  console.log("Process start in 4004");
});
