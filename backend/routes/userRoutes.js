const router = require("express").Router();
const { registerUser, loginUser } = require("../controller/userController");

// route for register a user
router.post("/register", registerUser)
router.post("/login", loginUser)

module.exports = router;