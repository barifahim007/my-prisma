import { Request, Response } from "express";
import { categoryService } from "./category.service";

const insertIntoCategory = async (req: Request, res: Response) => {
  try {
    const result = await categoryService.insertIntoCategory(req.body);
    res.send({
      success: true,
      message: "data send successed!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const categoryController = {
  insertIntoCategory,
};
