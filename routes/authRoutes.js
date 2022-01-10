const { registerUser, loginUser, logoutUser } = require("../controllers/auth");
const router = require("express").Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").delete(logoutUser);

module.exports = router;
