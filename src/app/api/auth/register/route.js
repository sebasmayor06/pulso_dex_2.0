import { db } from "../../../../libs/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getUserEmail } from "../data/user";

export async function POST(request) {
  try {
    const { username, email, password, totalAmout } = await request.json();
    if (!username || !email || !password || !totalAmout) {
      return NextResponse.json({ error: "dato ingresado invalido" }, 400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingEmail = await getUserEmail(email);

    console.log(existingEmail, "existingEmail");

    if (existingEmail) {
      return NextResponse.json({ error: "Email en uso" }, 409);
    }
    console.log(username, email, password, totalAmout, "llegoo");

    const existing = await db.user.create({
      data: {
        name: username,
        email: email,
        password: hashedPassword,
        totalAmout: totalAmout,
      },
    });

    return NextResponse.json("correcto");
  } catch (error) {
    console.log(error, "err");
    return NextResponse.json({ error: "error en el servidor" }, 500);
  }
}
