const express = require("express");
const profileRouter = express.Router();
const userController = require("../../../controllers/userController");

//todo get user profile
profileRouter.get("/", (req, res) => {
    // console.log(req.body, req.cookies);
    res.status(200).json({ profileGET: true });
});

profileRouter.put("/password", userController.updatePassword);
profileRouter.put("/email", (req, res) => {
    // console.log(req.body, req.cookies);
    // console.log(req.body);
    res.status(200).json({ profileGET: true });
});
profileRouter.put("/caloricpref", (req, res) => {
    // console.log(req.cookies);
    res.status(200).json({ profileGET: true });
});
profileRouter.put("/dietpref", (req, res) => {
    // console.log(req.body, req.cookies);
    res.status(200).json({ profileGET: true });
});

module.exports = profileRouter;
