const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const { signout, signup, signin } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("Name must be atleast 3 chars long"),
    check("email").isEmail().withMessage("Email is required"),
    check("password")
      .isLength({ min: 3 })
      .withMessage("Password must be atleast 3 chars long"),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email").isEmail().withMessage("Email is required"),
    check("password").isLength({ min: 1 }).withMessage("Password is required"),
  ],
  signin
);

router.get("/signout", signout);

module.exports = router;
