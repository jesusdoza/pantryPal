const express = require("express");
const rootRouter = express.Router();
const apiRouter = require("./api");

rootRouter.use("/api", apiRouter);

module.exports = rootRouter;
