"use client";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import MyButton from "@/app/component/button/button";
import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useMemo,
} from "react";
// import Navbar from "@/app/component/navbar/navbar";
import { convertToHTML, convertFromHTML } from "draft-convert";
import { Editor } from "react-draft-wysiwyg";
// import DOMPurify from "dompurify";
// import DOMPurify from "isomorphic-dompurify";
import "draft-js/dist/Draft.css";
import Input from "@/app/component/input/input";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import MyModal from "@/app/component/modal/modal";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/navigation";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Loader from "@/app/component/loader/loader";
const Blog = () => {
  const router = useRouter();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [convertedContent, setConvertedContent] = useState(null);
  const [blog, setBlog] = useState();
  const [blogList, setBlogList] = useState([]);
  const [title, setTitle] = useState("");

  //*************** */ default content in draft js ************************
  const [selectedBlogEditorState, setSelectedBlogEditorState] = useState(null);
  const [addUpdate, setAddUpdate] = useState();
  const [loading, setLoading] = useState(true);
  //************************** */ blog value*******************************
  const [blogValue, setBlogValue] = useState({});

  const BlogData = createContext();
  // console.log(blogValue , BlogData)
  // modal *************************************
  const local_storage_data = localStorage.getItem("userData");

  const getData =
    local_storage_data !== "undefined"
      ? local_storage_data
      : localStorage.setItem("userData", "");
  const userData = JSON.parse(getData);
  const [open, setOpen] = React.useState(false);
  if (typeof window == "undefined") {
    console.log(window);
  }
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setAddUpdate("");
    setOpen(false);
  };
  const getAllBlogs = async () => {
    try {
      const blogData = await axios.get("http://localhost:3000/api/blogs");
      console.log(blogData);
      setBlogList(blogData?.data?.allBlogs);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const addBlog = async (event) => {
    try {
      event.preventDefault();
      const values = new FormData(event.currentTarget);
      const title = values.get("title");

      const blogData = {
        title,
        description: convertedContent,
        userId: userData.id,
      };
      const add_data = await axios.post("http://localhost:3000/api/blogs", {
        ...blogData,
      });
      // resetValue()
      setBlogList([...blogList, add_data?.data]);

      getAllBlogs();
      setEditorState(EditorState.createEmpty());
      setTitle("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const editBlog = (value) => {
    setAddUpdate("update");
    setBlogValue(value);
    handleOpen();
  };
  const updateBlog = async (event) => {
    try {
      event.preventDefault();
      const values = new FormData(event.currentTarget);
      const title = values.get("update_title");

      const blogData = {
        title,
        description: convertedContent,
        userId: userData.id,
      };
      console.log(blogData);
      const updateData = await axios.put(
        `http://localhost:3000/api/blogs/${blogValue.id}`,
        { ...blogData }
      );
      setBlogList([...blogList, updateData?.data]);
      console.log(updateData);
      getAllBlogs();
      setEditorState(EditorState.createEmpty());
      setTitle("");
      handleClose();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const deleteBlog = async (id) => {
    try {
      const updateData = await axios.delete(
        `http://localhost:3000/api/blogs/${id}`
      );
      getAllBlogs();
    } catch (error) {
      consoe.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);

  // function createMarkup(html) {
  //   return {
  //     __html: DOMPurify.sanitize(html),
  //   };
  // }

  //   useEffect(() => {
  //   // DOMPurify ko client-side mein load karein
  //   if (typeof window !== "undefined" ){
  //         const loadDOMPurify = async () => {
  //     const DOMPurify = await import('dompurify');
  //     // DOMPurify ka use karein yahan
  //   };
  //   loadDOMPurify();
  //   }
  // }, []);

  useEffect(() => {
    getAllBlogs();
    let token = localStorage.getItem("token");
    if (!token) {
      router.push(`/pages/login`);
      if (typeof window !== undefined) {
        return;
      }
    }
  }, []);
  return (
    <>
      {loading && <Loader />}

      {/* <Navbar /> */}
      <MyModal open={open} handleClose={handleClose}>
        <Box
          sx={{
            maxWidth: "100%",
          }}
          component="form"
          onSubmit={updateBlog}
        >
          <div className="border-2 container m-auto mt-10 px-3 rounded-md">
            <div className="container mt-2">
              <label>
                {addUpdate === "update" && (
                  <TextField
                    fullWidth
                    label="Update Title"
                    id="fullWidth"
                    name="update_title"
                  />
                )}
              </label>
            </div>
            <div className="h-[200px]">
              {addUpdate === "update" && (
                <Editor
                  editorState={editorState}
                  onEditorStateChange={setEditorState}
                  wrapperClassName="wrapper-class"
                  editorClassName="editor-class"
                  toolbarClassName="toolbar-class"
                />
              )}
            </div>
          </div>{" "}
          <div className="flex justify-center mt-3">
            <MyButton
              type="submit"
              btnName={addUpdate === "update" ? "Update Blog" : "Blog Post"}
              variant="contained"
              onClick={() => {
                setBlog(convertedContent);
                // updateBlog();
              }}
            />
          </div>{" "}
        </Box>
      </MyModal>
      <Box
        sx={{
          // width: 500,
          maxWidth: "100%",
        }}
        component="form"
        onSubmit={addBlog}
      >
        {" "}
        <div className="border-2 container m-auto mt-10 px-3 rounded-md">
          <div className="container mt-2">
            {addUpdate !== "update" && (
              <TextField
                fullWidth
                value={title}
                label="Title"
                id="fullWidth"
                name="title"
              />
            )}
          </div>
          <div className="h-[200px] mt-2">
            {addUpdate !== "update" && (
              <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
              />
            )}
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <MyButton
            type="submit"
            btnName="Blog Post"
            variant="contained"
            onClick={() => {
              setBlog(convertedContent);
              // addBlog();
            }}
          />
        </div>
      </Box>
      <div className="flex flex-col-reverse">
        {blogList.map((value, index) => (
          <div key={value.id}>
            <div className="border p-3 box-shadow mt-3 h-[100px] container m-auto w-[70%] rounded-md">
              <div className="flex justify-between ">
                <h3 className="font-bold text-[1.2rem] "> {value.title}</h3>
                <div>
                  {" "}
                  <DeleteIcon
                    className="cursor-pointer"
                    onClick={() => deleteBlog(value.id)}
                  />
                  {/* ******************** update button ****************** */}
                  <ModeEditOutlineIcon
                    className="cursor-pointer"
                    onClick={() => editBlog(value)}
                  ></ModeEditOutlineIcon>
                </div>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: value?.description }}
              ></div>

              <div
                className="text-blue-500 cursor-pointer"
                onClick={() => {
                  router.push(`/pages/blogs/${value.id}`);
                  setBlogValue(value);
                }}
              >
                show more{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default typeof window !== "undefined" && Blog;
