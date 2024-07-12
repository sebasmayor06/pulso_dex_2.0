"use server";
import { auth } from "../../../../auth";

async function RenderLine() {
  const session = await auth();

  console.log(session, "session");

  return <div className="flex justify-between items-center"></div>;
}

export default RenderLine;
