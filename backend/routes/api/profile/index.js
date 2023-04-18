const express = require("express");
const profileRouter = express.Router();
const userController = require("../../../controllers/userController");

profileRouter.get("/update", (req, res) => {
    res.status(200).json({ profileGET: true });
});
profileRouter.put("/update", (req, res) => {
    res.status(200).json({ profileGET: true });
});

module.exports = profileRouter;
