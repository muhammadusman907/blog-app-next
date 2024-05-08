"use client";

import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { BlogData } from "@/app/context/context";
import axios from "axios";
// import DOMPurify from "dompurify";
// import DOMPurify from "isomorphic-dompurify";
import Loader from "@/app/component/loader/loader";
import { useSearchParams } from 'next/navigation'
const SingleBlog = () => {
  const [blogValue, setBlogValue] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  console.log(params)

  const getSingleBlog = async () => {
    try {
      const data = await axios.get(
        `https://blog-app-next-chi.vercel.app/api/blogs/${params?.singleBlog}`
      );
      setBlogValue(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getSingleBlog();
    // if (typeof window !== undefined) {
    //   return;
    // }
  }, []);
  return (
    <>
      {!loading ? (
        <div
          key={blogValue?.data?.singleBlog?.id}
          className="border p-3 box-shadow mt-3 h-[100px] container m-auto w-[70%] rounded-md "
        >
          <div className="flex justify-between ">
            <h3 className="font-bold text-[1.2rem] ">
              {" "}
              {blogValue?.data?.singleBlog?.title}
            </h3>
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

          <div
            dangerouslySetInnerHTML={{
              __html: blogValue?.data?.singleBlog?.description,
            }}
          ></div>

          {/* <div
                dangerouslySetInnerHTML={createMarkup(blogValue?.data?.singleBlog?.description)}
              ></div> */}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
export default SingleBlog;
