import bcrypt from "bcryptjs";

import Credentials from "next-auth/providers/credentials";
// import Google from "next-auth/providers/google";

import { loginSchema } from "./validations/usersSchema";
import { getUserEmail } from "./app/api/auth/data/user";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  providers: [
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),

    Credentials({
      async authorize(credentials) {
        const validateFields = loginSchema.safeParse(credentials);

        if (validateFields.success) {
          const { email, password } = validateFields.data;

          const user = await getUserEmail(email);
          if (!user || !user.password) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
};
