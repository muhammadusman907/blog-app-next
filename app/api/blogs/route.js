import { addBlog, getAllBlogs, updateBlog , deleteBlog} from "@/lib/blogs/blog";
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

const GET = async(request) =>{
  
   return getAllBlogs()
}

const POST = async (request) =>{
      const data = await request.json();
      return  NextResponse.json( await addBlog(data)) 
}

export { POST , GET}