"use client";
import dynamic from "next/dynamic";
const Blog = dynamic(() => import("./blog"), {
  ssr: false,
});
const Blogs = () => {

return(  
  <>
 <Blog />
  </>
)
}
export default Blogs ; 
