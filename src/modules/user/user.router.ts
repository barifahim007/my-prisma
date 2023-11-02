import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/create-user", userController.insertIntoDb);
router.post("/update/profile", userController.inserOrUpdateProfile);

export const userRouter = {
  router,
};
