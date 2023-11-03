import { PrismaClient, Profile, User } from "@prisma/client";

const prisma = new PrismaClient();

const insertIntoDb = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};

const inserOrUpdateProfile = async (data: Profile): Promise<Profile> => {
  const isExist = await prisma.profile.findUnique({
    where: {
      userId: data.userId,
    },
  });

  if (isExist) {
    const result = await prisma.profile.update({
      where: {
        userId: data.userId,
      },
      data: {
        bio: data.bio,
      },
    });
    return result;
  }
  const notExist = await prisma.profile.create({
    data,
  });
  return notExist;
};
// get all user
const getAllUser = async () => {
  const result = await prisma.user.findMany({
    include: {
      Profile: true,
      Post: true,
    },
  });
  return result;
};
// get single user
const getSingleUser = async (id: number) => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      Profile: true,
      Post: true,
    },
  });
  return result;
};

export const userService = {
  insertIntoDb,
  inserOrUpdateProfile,
  getAllUser,
  getSingleUser,
};
