import dynamic from "next/dynamic";
import axios from "axios";

const Blog = dynamic(() => import("./blog"), {
  ssr: false,
});
// console.log(process.env)
// console.log(process.env.DB_LOCAL)
// console.log(process.env.DB_HOST)
// console.log(process.env.NODE_ENV)
// const DB = process.env.NODE_ENV == "development" ? process.env.DB_LOCAL : process.env.DB_HOST ;
// console.log(DB)
 const getBlogData = async () => {
      const blogData = await axios.get(`/api/blogs`);
      return blogData
 }  
const addBlogData = async (blogData) => {
     const add_data = await axios.post("/api/blogs",  { ...blogData, });
      return add_data ;
  } 


const deleteBlogData = async ( id ) => {
    const updateData = await axios.delete(
      `/api/blogs/${id}`
    );
    return updateData ;
}

const updateBlogData = async ( blogData , id ) =>{
      const updateData = await axios.put(`/api/blogs/${id}`, { ...blogData } )
      return updateData ; 
}


const Blogs = () => {

return (
  <>
    <Blog />
  </>
);
}
export default Blogs ; 
export { getBlogData , addBlogData , deleteBlogData , updateBlogData } ;