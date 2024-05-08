import dynamic from "next/dynamic";

import SingleBlog from "./singleBlog";
const MyComponent = dynamic(
  async () => {
    const module = await import("./singleBlog");
    return module.MyComponent;
  },
  { ssr: false }
);
const SingleBlogs = ({ params }) => {
  //  if (typeof window !== undefined) {
  //    return;
  //  }

  return (
    <>
      {/* <SingleBlog params={params} /> */}
      <MyComponent />
    </>
  );
};
export default SingleBlogs;
