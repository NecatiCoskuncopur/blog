import express from "express";

import {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

//GET USERS
router.get("/getUsers", verifyToken, getUsers);

//GET USER
router.get("/:userId", getUser);

//UPDATE USER
router.put("/updateUser/:userId", verifyToken, updateUser);

//DELETE USER
router.delete("/deleteUser/:userId", verifyToken, deleteUser);

export default router;
