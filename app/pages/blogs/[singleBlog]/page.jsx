"use client"
import SingleBlog from './singleBlog';
const SingleBlogs = ({params}) =>{
  //  if (typeof window !== undefined) {
  //    return;
  //  }
  return(
    <>
    {
      typeof window === undefined &&  <SingleBlog params={params}/>
    }
 
  </>
   )
}
export default SingleBlogs ;