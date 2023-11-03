import express from "express";
import { postController } from "./post.controller";
const router = express.Router();

router.post("/post-create", postController.postIntoDb);

export const postRouter = {
  router,
};
