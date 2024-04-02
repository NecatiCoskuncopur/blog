import express from "express";

import { verifyToken } from "../utils/verifyUser.js";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";

const router = express.Router();

//GET POSTS
router.get("/getPosts", getPosts);

//CREATE POST
router.post("/createPost", verifyToken, createPost);

//UPDATE POST
router.put("/updatePost/:postId/:userId", verifyToken, updatePost);

//DELETE POST
router.delete("/deletePost/:postId/:userId", verifyToken, deletePost);

export default router;
