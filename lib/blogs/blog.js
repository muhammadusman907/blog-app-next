import { NextResponse } from "next/server";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllBlogs = async () => {
  try{
    const allBlogs = await prisma.blog.findMany(); 
    return NextResponse.json({message : "response sucessfully" , allBlogs});
  }
  catch(error){
    console.log(error)
    return NextResponse.json({message : "internal server error" , error});
  }
 
};

const addBlog = async (req) => {
  console.log(req);
  try {
    const { title, description, userId } = req;
    console.log(title, description, userId);
    const blog = await prisma.blog.create({
      data: {
        title,
        description,
        userId,
      },
    });
  console.log(blog)
    return blog ;
  } catch (error) {
    console.log(error);
  }
};
export { addBlog  , getAllBlogs};
