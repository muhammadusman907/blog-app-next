import { userLogin, userRegister } from "@/lib/users/user";
import { NextResponse } from "next/server";

const GET = async (Request) => {
  return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
};
const POST = async (request) => {
  
  const data = await request.json();
  return userLogin(data);
};

export { GET, POST };
