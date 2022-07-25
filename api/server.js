const express = require("express");
const server = express();
const cors = require("cors");

server.use(cors('*'));
server.use(express.json());

const connectDB = require("./db/connect");
const authRouter = require("./routes/auth");

server.use(cors("*"));
server.use(express.json());

server.use("/auth", authRouter);

server.get("/", (req, res) => res.json({ message: "Welcome" }));

module.exports = { server, connectDB };
