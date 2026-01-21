const express = require("express");
const { register, login } = require("../controllers/authController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("https://student-app-2-vwtx.onrender.com/register", register);
router.post("https://student-app-2-vwtx.onrender.com/login", login);

router.get("https://student-app-2-vwtx.onrender.com/dashboard", auth, (req, res) => {
  res.json({ message: "Welcome to Dashboard" });
});

module.exports = router;
