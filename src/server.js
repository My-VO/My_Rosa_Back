const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes");

const { notFoundHandler, errorLogger, errorHandler } = require("./middlewares");

const server = express();

server.use(helmet());
server.use(logger("dev"));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());

server.use("/api", routes);

server.use(notFoundHandler);
server.use(errorLogger);
server.use(errorHandler);

module.exports = server;
