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
  // console.log(req);
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
  // console.log( "blog ---->" , blog)
    return blog ;
  } catch (error) {
    console.log(error);
  }
};
const deleteBlog = async (id) =>{ 
return await prisma.blog.delete({
  where: { id },
});
}
const updateBlog = async( req, id) =>{

  try {
const updateBlog = await prisma.blog.update({
  where: { id },
  data: { ...req },
});

  return  updateBlog ;
  } catch (error) {
    console.log(error)
  }
}
const getBlog = async (id) => {
    try{
    const singleBlog = await prisma.blog.findUnique({where : { 
      id 
    }})
    console.log("sigle blog" , singleBlog)
    return NextResponse.json({message : "response sucessfully" , singleBlog});
  }
  catch(error){
    console.log(error)
    return NextResponse.json({message : "internals server error" , error});
  }
}


export { addBlog, getAllBlogs, updateBlog, deleteBlog  , getBlog};
