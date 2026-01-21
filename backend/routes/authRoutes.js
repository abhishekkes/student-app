const express = require("express");
const { register, login } = require("../controllers/authController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/dashboard", auth, (req, res) => {
  res.json({ message: "Welcome to Dashboard" });
});

module.exports = router;
