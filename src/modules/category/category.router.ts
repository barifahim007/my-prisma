import express from "express";
import { categoryController } from "./category.controller";

const router = express.Router();

router.post("/post", categoryController.insertIntoCategory);

export const categoryRouter = {
  router,
};
