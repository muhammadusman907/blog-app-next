import { addBlog, getAllBlogs } from "@/lib/blogs/blog";
import { NextResponse , NextRequest} from "next/server";

const GET = async(request) =>{
  // console.log(request) 
   return getAllBlogs()
}

const POST = async (request) =>{
      const data = await request.json();
      return  NextResponse.json( await addBlog(data)) 
}

export { POST , GET}