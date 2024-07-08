import { v4 as uuid } from "uuid";
import { getVerificationTokenByEmail } from "../app/api/auth/data/verification-token";
import { db } from "./db";

export const generateVerificationToken = async (email) => {
  const token = uuid();

  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = getVerificationTokenByEmail(email);
  if (existingToken) {
    await db.verificationToken.delte({
      where: {
        id: existingToken.id,
      },
    });
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verificationToken;
};
