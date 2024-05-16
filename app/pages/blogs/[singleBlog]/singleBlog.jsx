"use client";
import React, { useState, useEffect } from "react";
import { useParams , usePathname } from "next/navigation";
import Loader from "@/app/component/loader/loader";
import { Alert } from "flowbite-react";
import { getData } from "./page";
import Navbar from "@/app/component/navbar/navbar"
const SingleBlog = () => {
  const [blogValue, setBlogValue] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const pathname = usePathname() ;
  console.log(params)

  const getSingleBlog = async () => {
    try {
      const getBlog = await getData(params?.singleBlog)
      setBlogValue(getBlog);
      console.log(getBlog);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getSingleBlog();
  }, []);
  return (
    <>
      <Navbar dynamicId={params?.singleBlog} />
      {!loading ? (
        <div
          key={blogValue?.data?.singleBlog?.id}
          className="border p-3 box-shadow mt-3 min-h-[100px] container m-auto w-[70%] rounded-md "
        >
          <div className="flex justify-between ">
            <h3 className="font-bold text-[1.2rem] ">
              {" "}
              {blogValue?.data?.singleBlog?.title}
            </h3>
          </div>

          <div
            dangerouslySetInnerHTML={{
              __html: blogValue?.data?.singleBlog?.description,
            }}
          ></div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
export default SingleBlog;
