import { NextResponse } from "next/server";
import { db } from "../../../../libs/db";
import { auth } from "../../../../auth";

export async function GET() {
  const session = await auth();

  console.log(session.user.email, "session");

  const users = await db.user.findFirst({
    where: {
      email: session.user.email,
    },
  });

  console.log(users, "users");
  return NextResponse.json({
    totalAmout: users.totalAmout,
    Date: users.createdAt,
  });
}
