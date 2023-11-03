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
// get all post
const getAllPost = async (req: Request, res: Response) => {
  try {
    const result = await postService.getAllPost();
    res.send({
      success: true,
      message: "fetching all data successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

// get single post
const getSinglePost = async (req: Request, res: Response) => {
  try {
    const result = await postService.getSinglePost(parseFloat(req.params.id));
    res.send({
      success: true,
      message: "fetching single post successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const postController = {
  postIntoDb,
  getAllPost,
  getSinglePost,
};
