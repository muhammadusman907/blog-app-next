"use client"
import SingleBlog from './singleBlog';
const SingleBlogs = ({params}) =>{
  //  if (typeof window !== undefined) {
  //    return;
  //  }
  return(
    <SingleBlog params={params}/>
  )
}
export default SingleBlogs ;