import { Request, Response } from "express";
import { userService } from "./user.service";

const insertIntoDb = async (req: Request, res: Response) => {
  try {
    const result = await userService.insertIntoDb(req.body);
    res.send({
      success: true,
      message: "data send successed!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const inserOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await userService.inserOrUpdateProfile(req.body);
    res.send({
      success: true,
      message: "data send successed!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const userController = {
  insertIntoDb,
  inserOrUpdateProfile,
};
