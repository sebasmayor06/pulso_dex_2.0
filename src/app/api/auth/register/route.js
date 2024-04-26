import prisma from "@/app/libs/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    const existUser = await prisma.user.findFirst({
      where: {
        OR: [{ email: data.email }],
      },
    });
    const newUser = await prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: data.password,
      },
    });
    console.log(newUser);
    return NextResponse.json("correcto");
  } catch (error) {}
}
