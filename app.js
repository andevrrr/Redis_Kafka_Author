require('dotenv').config();
const mongoose = require("mongoose");

const express = require("express");

const app = express();

app.use(express.json());

app.get("*", (req, res, next) => {
    res.status(200).send("Hello, no route with this is defined");
});

const mongo = process.env.MONGO_URL;
const port = process.env.SERVICE_PORT;

start = async () => {
    await mongoose.connect(mongo);
    await app.listen(port);
    console.log("Author Index Welcomes You, listening to port: " + port);

}

start();