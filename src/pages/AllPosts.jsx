// import React, {useState, useEffect} from 'react'
// import { Container, PostCard } from '../components'
// import appwriteService from "../appwrite/config";

// function AllPosts() {
//     const [posts, setPosts] = useState([])
//     useEffect(() => {}, [])
//     appwriteService.getPosts([]).then((posts) => {
//         if (posts) {
//             setPosts(posts.documents)
//         }
//     })
//   return (
//     <div className='w-full py-8'>
//         <Container>
//             <div className='flex flex-wrap'>
//                 {posts.map((post) => (
//                     <div key={post.$id} className='p-2 w-1/4'>
//                         <PostCard {...post} />
//                     </div>
//                 ))}
//             </div>
//             </Container>
//     </div>
//   )
// }

// export default AllPosts



import React, { useEffect, useState } from "react";
import { Posts } from "../components/index";
import appwriteService from "../Appwrite/config.js";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return <Posts posts={posts} page={"All Posts"} />;
};

export default AllPosts;
