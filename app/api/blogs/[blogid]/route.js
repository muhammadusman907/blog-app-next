import { deleteBlog , updateBlog , getBlog } from "@/lib/blogs/blog";
import { NextResponse , NextRequest} from "next/server";

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

const GET = async(request , {params}) =>{
      console.log(params)
      return  await getBlog(params.blogid);
}

const PUT = async(request , {params}) => {
      const data = await request.json();
      console.log(data)
      return NextResponse.json(await updateBlog(data  , params.blogid ));
}

const DELETE = async (request , {params}) => {
  return NextResponse.json(await deleteBlog(params.blogid) );
};
export {  DELETE , PUT , GET  }