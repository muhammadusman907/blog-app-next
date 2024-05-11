import dynamic from "next/dynamic";
import axios from "axios"
const MyComponent = dynamic(
  async () =>  import("./singleBlog"),
  { ssr: false }
);

const getData = async (id) => {
      const getSingleBlog = await axios.get(`/api/blogs/${id}`)
      return getSingleBlog ;
}

const SingleBlogs = ({ params }) => {
  return (
    <>
      <MyComponent />
    </>
  );
};
export default SingleBlogs;
export { getData };