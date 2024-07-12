import { db } from "../../../../libs/db";

export const createVerificationByToken = async (token) => {
  try {
    const verificationToken = await db.verificationToken.create({ token });
    return verificationToken;
  } catch (error) {
    return null;
  }
};

export const getVerificationTokenByEmail = async (email) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: {
        email,
      },
    });
    return verificationToken;
  } catch (error) {
    return null;
  }
};
