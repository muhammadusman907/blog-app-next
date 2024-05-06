"use client"

import React from 'react'
import { useRouter } from 'next/router'
import { useContext, useState ,useEffect } from 'react';
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

import { BlogData } from '@/app/context/context';
  import axios from "axios"
  import DOMPurify from "dompurify";
import Loader from '@/app/component/loader/loader';

const SingleBlog = ({params}) => {
  const [blogValue , setBlogValue] = useState ({}) ;
  const [loading , setLoading] = useState (true )
  const getSingleBlog = async () =>{
    try { 
      const data = await axios.get(`http://localhost:3000/api/blogs/${params?.singleBlog}`)
       setBlogValue(data)
       console.log(data)
      
    } catch (error) {
      console.log(error)
    }finally {
   setLoading(false)
    }
  
    
  }
  //  console.log(blogValue?.data?.singleBlog?.description)
   
//   useEffect(()=>{
// function createMarkup(html) {
//     return {
//       __html: DOMPurify.sanitize(html),
//     };
//   }
//   },
// [])
  useEffect(() => {
    // DOMPurify ko client-side mein load karein
    const loadDOMPurify = async () => {
      const DOMPurify = await import("dompurify");
      // DOMPurify ka use karein yahan
    };
    loadDOMPurify();
  }, []);

useEffect(() =>{
getSingleBlog()

}, [])

  return (
    <>
   { !loading ?
     
     <div
              key={blogValue?.data?.singleBlog?.id}
              className="border p-3 box-shadow mt-3 h-[100px] container m-auto w-[70%] rounded-md "
              // onClick={() =>  {
              //   router.push(`/pages/blogs/${blogValue?.data?.singleBlog?.id}`, { scroll: false })
              //   // setblogValue?.data?.singleBlog?(blogValue?.data?.singleBlog?)
              // }}
            >
              <div className="flex justify-between ">
                <h3 className="font-bold text-[1.2rem] "> {blogValue?.data?.singleBlog?.title}</h3>
                <div>
                  {" "}
                  {/* <DeleteIcon className="cursor-pointer"
                  //  onClick={ () => deleteBlog(blogValue?.data?.singleBlog?.id)}
                    /> */}
                  {/* ******************** update button ****************** */}
                  {/* <ModeEditOutlineIcon
                    className="cursor-pointer"
                    // onClick={() => editBlog(blogValue?.data?.singleBlog?)}
                  ></ModeEditOutlineIcon> */}
                </div>
              </div>
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blogValue?.data?.singleBlog?.description) }}></div>
              {/* <div
                dangerouslySetInnerHTML={createMarkup(blogValue?.data?.singleBlog?.description)}
              ></div> */}
              
            </div>
            : <Loader/> }
            </>
            )
          }
export default SingleBlog ;