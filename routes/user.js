const express = require("express");
const router = express.Router();
const { read, update } = require("../controllers/user");
const {
  requireSignIn,
  authMiddleware,
  adminMiddleware,
} = require("../controllers/auth");
const { userUpdateValidator } = require("../validators/auth");
const { runValidation } = require("../validators");

router.get("/user", requireSignIn, authMiddleware, read);
router.get("/admin", requireSignIn, adminMiddleware, read);
router.put(
  "/user",
  userUpdateValidator,
  runValidation,
  requireSignIn,
  authMiddleware,
  update
);

module.exports = router;
