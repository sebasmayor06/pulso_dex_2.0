import { db } from "../../../libs/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getUserEmail } from "../../../(auth)/data/user";

export async function POST(request) {
  try {
    const { username, email, password } = await request.json();

    if (!username || !email || !password) {
      return NextResponse.json({ error: "dato ingresado invalido" }, 400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingEmail = await getUserEmail(email);

    if (existingEmail) {
      return NextResponse.json({ error: "Email en uso" }, 409);
    }

    const existing = await db.user.create({
      data: {
        name: username,
        email: email,
        password: hashedPassword,
      },
    });

    return NextResponse.json("correcto");
  } catch (error) {
    console.log(error, "err");
    return NextResponse.json({ error: "error en el servidor" }, 500);
  }
}
