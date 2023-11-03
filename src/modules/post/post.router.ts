import express from "express";
import { postController } from "./post.controller";
const router = express.Router();

router.post("/post-create", postController.postIntoDb);
router.get("/", postController.getAllPost);
router.get("/:id", postController.getSinglePost);

export const postRouter = {
  router,
};
