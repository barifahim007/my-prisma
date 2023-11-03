import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const postIntoDb = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
    data,
    include: {
      author: true,
      category: true,
    },
  });
  return result;
};

// get posted data
const getAllPost = async () => {
  const result = await prisma.post.findMany({
    include: {
      author: true,
      category: true,
    },
  });
  return result;
};
// get single post data
const getSinglePost = async (id: number) => {
  const result = await prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      author: true,
      category: true,
    },
  });
  return result;
};

export const postService = {
  postIntoDb,
  getAllPost,
  getSinglePost,
};
