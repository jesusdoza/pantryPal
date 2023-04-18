const express = require("express");
const profileRouter = express.Router();
const userController = require("../../../controllers/userController");

//todo get user profile
profileRouter.get("/", (req, res) => {
    res.status(200).json({ profileGET: true });
});

profileRouter.put("/:id/password", (req, res) => {
    res.status(200).json({ profileGET: true });
});
profileRouter.put("/:id/email", (req, res) => {
    res.status(200).json({ profileGET: true });
});
profileRouter.put("/:id/caloricpref", (req, res) => {
    res.status(200).json({ profileGET: true });
});
profileRouter.put("/:id/dietpref", (req, res) => {
    res.status(200).json({ profileGET: true });
});

module.exports = profileRouter;
