// import React from 'react'

// const List = ( {getAllBlogs} ) => {
//      console.log(getAllBlogs)
//   return (
//     <div>List</div>
//   )
// }

// export default List ;

//  async function getServerSideProps() {
//   // Fetch data from external API
//   const getAllBlogs = async() =>{
//     try {
//        const blogData = await axios.get("http://localhost:3000/api/blogs") ;
//        console.log(blogData)
//        setBlogList (blogData?.data?.allBlogs)
//     } catch (error) {
//       console.log(error) 
//     }
//   }
  
//   // Pass data to the page via props
//   return { props: { getAllBlogs } }
// }
 

// export {getServerSideProps}