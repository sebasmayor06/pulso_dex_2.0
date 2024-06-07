import { db } from "../../libs/db";

export const getUserEmail = async (email) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });


    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  } catch (error) {
    return null;
  }
};
