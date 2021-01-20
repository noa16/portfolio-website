const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const router = express.Router();
const Admin = require("../models/admin");

const admin = require("../models/admin");
//@route POST api/users
//@desc  Login

router.post(
  "/",
  [
    check("email", "email is required").not().isEmpty(),
    check(
      "password",
      "please enter password with 6 or more characters"
    ).isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let admin = await Admin.findOne({ email });
      if (admin) {
        return res.status(400).json({ msg: "user already exists" });
      }
      admin = new Admin({
        email,
        password,
      });
      const salt = await bcrypt.genSalt(10);
      admin.password = await bcrypt.hash(password, salt);

      await admin.save();
      res.send("user saved");
    } catch (err) {
      console.log(err.message);
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
