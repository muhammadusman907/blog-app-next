import { userLogin, userRegister } from "@/lib/users/user";
import { NextResponse } from "next/server";
// export async function GET(request) {
//   return new Response('Hello, Next.js!', {
//     status: 200,
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//       'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//     }
//   });
// }
const GET = async (Request) => {
  return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
};
const POST = async (request) => {
  
  const data = await request.json();
  return userLogin(data);
};

export { GET, POST };
