const express = require("express");
const rootRouter = express.Router();
const apiRouter = require("./api");
const path = require("path");

rootRouter.use("/api", apiRouter);
rootRouter.get("*", (req, res) => {
    res.sendFile(path.resolve("./public/index.html"));
    // res.status(200).json({
    //     "home route": path.resolve("./public/home/index.html"),
    // });
});

module.exports = rootRouter;
