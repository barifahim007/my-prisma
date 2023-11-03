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
// get all user
const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUser();
    res.send({
      success: true,
      message: "fetching single data successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};
// get single user
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getSingleUser(parseFloat(req.params.id));
    res.send({
      success: true,
      message: "fetching single data successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const userController = {
  insertIntoDb,
  inserOrUpdateProfile,
  getAllUser,
  getSingleUser,
};
