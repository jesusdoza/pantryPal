const express = require("express");
const rootRouter = express.Router();
const apiRouter = require("./api");

//! remove me after testing

rootRouter.get("/test", (req, res) => {
    const jwt = require("jsonwebtoken");
    console.log(req.cookies);

    const { token } = req.cookies;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("decoded: ", decoded);
    res.status(200).json({ message: "good test /test" });
});

rootRouter.use("/api", apiRouter);

module.exports = rootRouter;
