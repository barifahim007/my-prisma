import { Request, Response } from "express";
import { postService } from "./post.service";

const postIntoDb = async (req: Request, res: Response) => {
  try {
    const result = await postService.postIntoDb(req.body);
    res.send({
      success: true,
      message: "data send successed!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const postController = {
  postIntoDb,
};
