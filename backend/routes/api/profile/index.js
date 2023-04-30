const express = require("express");
const profileRouter = express.Router();
const userController = require("../../../controllers/userController");

//todo get user profile
profileRouter.get("/", (req, res) => {
    // console.log(req.body, req.cookies);
    res.status(200).json({ profileGET: true });
});

profileRouter.put("/password", userController.updatePassword);
profileRouter.put("/email", userController.updateEmail);
profileRouter.put("/caloricpref", userController.updateCaloricPref);
// profileRouter.put("/dietpref", userController.updateDietPref);

module.exports = profileRouter;
