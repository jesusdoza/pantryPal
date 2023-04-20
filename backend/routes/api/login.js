const loginRouter = require("express").Router();
const { login } = require("../../controllers/userController");

loginRouter.post("/", login);
// loginRouter.get("/", (req, res) => {
//     res.status(200).json({ message: "/api/login" });
// });

module.exports = loginRouter;
