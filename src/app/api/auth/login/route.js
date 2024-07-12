"use server";

import { AuthError } from "next-auth";
import { signIn } from "../../../../auth";
import { NextResponse } from "next/server";
// import { LoginSchema } from "../../../validations/usersSchema";
import { DEFAULT_LOGIN_REDIRECT } from "../../../../routes";

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "Invalid credentials!",
          };
        default:
          return {
            error: "Sommething went wrong!",
          };
      }
    }
    throw error;
  }
}
