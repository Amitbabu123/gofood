// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");
// const { body, validationResult } = require("express-validator");
// const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken")
// const jwtSecret ="mynameIsAmitKumarGautamandThisis"

// router.post(
//   "/createuser",
//   [
//     body("name", "Name is more than 5 charecter").isLength({ min: 5 }),
//     body("email", "Please fill correct email").isEmail(),
//     body("password", "Please fill correct Password").isLength({ min: 5 }),
//   ],
//   async (req, res) => {
//     let success =false;
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const salt = await bcrypt.genSalt(10);
//     let secPassword = await bcrypt.hash(req.body.password, salt)

//     try {
//       await User.create({
//         name: req.body.name,
//         password: secPassword,
//         email: req.body.email,
//         location: req.body.location,
//       });
//       res.json({ success: true });
//     } catch (error) {
//       console.log(error);
//       res.json({ success: false });
//     }
//   }
// );

// router.post(
//   "/loginuser",
//   [
//     body("email", "Please fill correct email").isEmail(),
//     body("password", "Please fill correct Password").isLength({ min: 5 }),
//   ],
//   async (req, res) => {
//     let success = false;
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     let email = req.body.email;
//     try {
//       let userData = await User.findOne({ email });
//       if (!userData) {
//         return res
//           .status(400)
//           .json({ errors: "Try Login with correct credentials" });
//       }
//       const pwdCompare = await bcrypt.compare(req.body.password, userData.password);
//       if (!pwdCompare) {
//         return res
//           .status(400)
//           .json({ errors: "Try Login with correct credentials" });
//       }
//       const data ={
//         user:{
//            id:userData.id
//         }
//       }
//       const authToken = jwt.sign(data,jwtSecret)
//       return res.json({ success: true, authToken:authToken });
//     } catch (error) {
//       console.log(error);
//       res.json({ success: false });
//     }
//   }
// );
// module.exports = router;


const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = "mynameIsAmitKumarGautamandThisis";

// router.post(
//   "/createuser",
//   [
//     body("name", "Name is more than 5 characters").isLength({ min: 5 }),
//     body("email", "Please fill correct email").isEmail(),
//     body("password", "Please fill correct Password").isLength({ min: 5 }),
//   ],
//   async (req, res) => {
//     let success = false; // Default value is false
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array(), success });
//     }

//     const salt = await bcrypt.genSalt(10);
//     const secPassword = await bcrypt.hash(req.body.password, salt);

//     try {
//       await User.create({
//         name: req.body.name,
//         password: secPassword,
//         email: req.body.email,
//         location: req.body.location,
//       });
//       success = true; // Set to true if successful
//       res.json({ success });
//     } catch (error) {
//       console.log(error);
//       res.json({ success });
//     }
//   }
// );
router.post('/createuser', [
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
  body('name')
], async (req, res) => {
  let success = false;

  try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({ success, errors: errors.array() });
      }

      const { name, email, password, location } = req.body;

      if(name.length <= 3){
        return res.status(400).json({success: false, errors: [{ msg: 'Length of name should be greater than 3' }]})
      }
      console.log(name, email, password, location)
      // Check if the user already exists with the provided email
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ success, errors: [{ msg: 'User with this email already exists' }] });
      }
      
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      console.log(hashedPassword)

      // Create a new user
      const newUser = new User({
          name,
          email,
          password: hashedPassword,
          location
      });

      // Save the user to the database
      await newUser.save();

      // Create and sign a JWT token
      const tokenPayload = { user: { id: newUser.id } };
      const authToken = jwt.sign(tokenPayload, jwtSecret);

      success = true;
      res.json({ success, authToken });
  } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Errors');
  }
});

router.post(
  "/loginuser",
  [
    body("email", "Please fill correct email").isEmail(),
    body("password", "Please fill correct Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = false; // Default value is false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array(), success });
    }

    const email = req.body.email;
    try {
      const userData = await User.findOne({ email });
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try Login with correct credentials", success });
      }
      const pwdCompare = await bcrypt.compare(
        req.body.password,
        userData.password
      );
      if (!pwdCompare) {
        return res
          .status(400)
          .json({ errors: "Try Login with correct credentials", success });
      }
      const data = {
        user: {
          id: userData.id,
        },
      };
      const authToken = jwt.sign(data, jwtSecret);
      success = true; // Set to true if successful
      return res.json({ success, authToken });
    } catch (error) {
      console.log(error);
      res.json({ success });
    }
  }
);


module.exports = router;

