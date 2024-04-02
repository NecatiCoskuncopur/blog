import express from "express";

import {
  signup,
  signin,
  google,
  signout,
} from "../controllers/authController.js";

const router = express.Router();

//SIGNUP
router.post("/signup", signup);

//SIGNIN
router.post("/signin", signin);

//GOOGLE
router.post("/google", google);

//SIGNOUT
router.post("/signout", signout);

export default router;
