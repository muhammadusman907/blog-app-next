 "use client"

//  import dynamic from "next/dynamic";
// const BlogPage = dynamic(() => {
//   import("./pages/blogs/page")
//   import("./pages/blogs/[singleBlog]/page") 
// }, {
//   ssr: false,
// });
 import Image from "next/image";
import Blogs from "./pages/blogs/page";
  import { useRouter } from "next/navigation";
  import React, { useEffect } from "react";
  import SingleBlog from './pages/blogs/[singleBlog]/singleBlog';


export default function Home() {
  const router = useRouter();

  useEffect(()=>{
      router.push("/pages/login");
  } , [])
  return (
    <>
    hello
    {/* <Blog />
    <SingleBlog/> */}
    </>
  );
}
