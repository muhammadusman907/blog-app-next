"use client";

import { EditorState, ContentState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import MyButton from "@/app/component/button/button";
import React, { useState, useEffect } from "react";
import Navbar from "@/app/component/navbar/navbar";
import { convertToHTML } from "draft-convert";
import { Editor } from "react-draft-wysiwyg";
import DOMPurify from "dompurify";
import "draft-js/dist/Draft.css";
import Input from "@/app/component/input/input";
const Blog = () => {

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [convertedContent, setConvertedContent] = useState(null);
  const [blog , setBlog] = useState(null) ;
  const [list , setList] = useState([]) ;
  const [title , setTitle] = useState(null) ;
   useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
 
  }, [editorState]);

   function createMarkup(html) {
  return {
    __html: DOMPurify.sanitize(html),
  };
}

  return (
    <>
      <Navbar />
      <div className="border-2 container m-auto mt-10 px-3 rounded-md">
        <div className="container">
          <label> Title :
        
      <Input classAdd="container mb-5 " placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
          </label>
        </div>
        <div className="h-[200px]">

        
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
        />
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <MyButton
          btnName="Blog Post"
          variant="contained"
          onClick={() => {
            setBlog(convertedContent);
              
             setList([ ...list  ,{title ,  convertedContent}])
          }}
        />
      </div>

    { list.map ((value)=>(
        <>
        <div className="border p-3 box-shadow mt-3 h-[100px] container m-auto w-[70%] rounded-md">
          
        <h3 className="font-bold text-[1.2rem]"> {value.title}</h3>
        <MyButton btnName="Edit"/>
       <div
        // className=" border p-3 box-shadow mt-3 h-[100px] container m-auto w-[70%] rounded-md"
        dangerouslySetInnerHTML={createMarkup(value.convertedContent)}
      >
      </div></div>
      </>
    ))}

    </>
  );
};
export default Blog;
