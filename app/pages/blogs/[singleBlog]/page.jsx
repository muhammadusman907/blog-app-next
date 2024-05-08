import dynamic from "next/dynamic";

const MyComponent = dynamic(
  async () =>  import("./singleBlog"),
  { ssr: false }
);
const SingleBlogs = ({ params }) => {


  return (
    <>
      <MyComponent />
    </>
  );
};
export default SingleBlogs;
