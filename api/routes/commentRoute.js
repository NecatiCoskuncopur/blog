import express from "express";

import { verifyToken } from "../utils/verifyUser.js";
import {
  getComments,
  getPostComments,
  createComment,
  likeComment,
  editComment,
  deleteComment,
} from "../controllers/commentController.js";

const router = express.Router();

//GET COMMENTS
router.get("/getComments", verifyToken, getComments);

// GET POST COMMENTS
router.get("/getPostComments/:postId", getPostComments);

//CREATE COMMENT
router.post("/createComment", verifyToken, createComment);

//LIKE COMMENT
router.put("/likeComment/:commentId", verifyToken, likeComment);

//EDIT COMMENT
router.put("/editComment/:commentId", verifyToken, editComment);

//DELETE COMMENT
router.delete("/deleteComment/:commentId", verifyToken, deleteComment);

export default router;
