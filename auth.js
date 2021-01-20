const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const Admin = require("../models/admin");
const { check, validationResult } = require("express-validator");
const middleware = require("../middleware/auth");
//@route Get api/auth
//@desc  Get logged user

router.get("/", middleware, async (req, res) => {
  try {
    const user = await Admin.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).send("server error");
  }
});

//@route POST api/auth
//@desc  Auth user & get token

router.post(
  "/",
  [
    check("email", "please include valid email").isEmail(),
    check("password", "password is requires").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    console.log("noa")
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await Admin.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "invalid user" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      console.log(isMatch);
      if (!isMatch) {
        return res.status(400).json({ msg: "invalid Credentials" });
      }
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          console.log("succes"+password+token)
          res.json({ token });
        }
      );
    } catch (err) {
      console.log("server error")
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
