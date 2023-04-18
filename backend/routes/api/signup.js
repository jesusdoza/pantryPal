const signupRouter = require("express").Router();
const { createUser } = require("../../controllers/userController");

signupRouter.post("/", createUser);

module.exports = signupRouter;
