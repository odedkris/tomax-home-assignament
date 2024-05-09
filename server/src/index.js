const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const newsRouter = require("./routes/newsRoute");

dotenv.config();
const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  next();
});
server.use(newsRouter);

server.use((error, req, res, next) => {
  console.log(error);
  const message = error.message;
  const status = error.statusCode || 500;
  res.status(status).json({ message: message });
});

server.use((req, res) => {
  res.status(404).send('<h1>Page not found</h1>');
});

server.listen(process.env.SERVER_PORT || 8080);
console.log("Server is running on port " + process.env.SERVER_PORT || 8080);