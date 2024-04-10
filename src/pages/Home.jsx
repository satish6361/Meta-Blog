// import React, {useEffect, useState} from 'react'
// import{useSelector} from 'react-redux'
// import { Link } from 'react-router-dom'
// import appwriteService from "../appwrite/config";
// import {Button, Container, PostCard} from '../components'

// function Home() {
//     const [posts, setPosts] = useState([])
//     const userData = useSelector(state => state.auth.userData)

//     useEffect(() => {
//         appwriteService.getPosts().then((posts) => {
//             if (posts) {
//                 setPosts(posts.documents)
//             }
//         })
//     }, [])
  
//     // if (posts.length === 0) {
//     //     return (
//     //         <div className="w-full py-8 mt-4 text-center">
//     //             <Container>
//     //                 <div className="flex flex-wrap">
//     //                     <div className="p-2 w-full">
//     //                         <h1 className="text-2xl font-bold hover:text-gray-500">
//     //                             Login to read posts
//     //                         </h1>
//     //                     </div>
//     //                 </div>
//     //             </Container>
//     //         </div>
//     //     )
//     // }
//     // return (
//     //     <div className='w-full py-8'>
//     //         <Container>
//     //             <div className='flex flex-wrap'>
//     //                 {posts.map((post) => (
//     //                     <div key={post.$id} className='p-2 w-1/4'>
//     //                         <PostCard {...post} />
//     //                     </div>
//     //                 ))}
//     //             </div>
//     //         </Container>
//     //     </div>
//     // )


//     return(
//         <div className='w-full bg-white '>
//             <Container>
//                 <section className='Header flex text-left items-center gap-10'>
//                     <div className='header-left h-full w-6/12 py-10'>
//                         <h1 className='text-black text-5xl font-bold'>Lorem ipsum dolor sit amet</h1>
//                         <p className='py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum magnam natus fugit quasi vero mollitia totam quae illum culpa? Laboriosam.</p>
//                         <Link to={userData ? '/blogs': '/create-account'}><Button 
//                         className=' bg-transparent border-2 rounder-lg'
//                         children={userData ? 'All posts' : 'Signup'} /></Link>
//                     </div>
//                     <div className='header-right w-6/12 py-10 justify-end '>
//                     {/* <img src={headerImage} alt="" className='float-right'/> */}
//                     Logo Here
//                     </div>
                    
//                 </section>
//                 <section className='py-10'>
//                     {userData && <div className='w-full py-8'>
//              <Container>
//                          <div className='flex flex-wrap'>
//                              {posts.map((post) => (
//                                  <div key={post.$id} className='p-2 w-1/4'>
//                                      <PostCard {...post} />
//                                  </div>
//                              ))}
//                          </div>
//                         </Container>
//                  </div>}
//                 </section>
//             </Container>
//         </div>
//     )


// }

// export default Home




// // import React, {useState, useEffect} from 'react'
// // import {Button, Container, PostCard} from '../compnents'
// // import appwriteService from '../appwrite/configure'
// // import headerImage from '../assets/blog-header.jpg'
// // import { Link } from 'react-router-dom'
// // import { useSelector } from 'react-redux'

// // export function Home() {
// //     const [posts, setPosts] = useState([])
// //     const userData = useSelector(state => state.auth.userData)
// //     useEffect(() => {
// //         appwriteService.getPosts([]).then((posts) => {
// //             if (posts) {
// //                 setPosts(posts.documents)
// //             }
// //         })
// //     }, [])
// // //   console.log(posts);
// //     // if (posts.length === 0) {
// //     //     return (
// //     //         <div className="w-full py-8 mt-4 text-center">
// //     //             <Container>
// //     //                 <div className="flex flex-wrap">
// //     //                     <div className="p-2 w-full">
// //     //                         <h1 className="text-2xl font-bold hover:text-gray-500">
// //     //                             Login to read posts
// //     //                         </h1>
// //     //                     </div>
// //     //                 </div>
// //     //             </Container>
// //     //         </div>
// //     //     )
// //     // }
// //     // return (
// //     //     <div className='w-full py-8'>
// //     //         <Container>
// //     //             <div className='flex flex-wrap'>
// //     //                 {posts.map((post) => (
// //     //                     <div key={post.$id} className='p-2 w-1/4'>
// //     //                         <PostCard {...post} />
// //     //                     </div>
// //     //                 ))}
// //     //             </div>
// //     //         </Container>
// //     //     </div>
// //     // )

// //     return (
// //         <div className='w-full '>
// //             <Container>
// //                 <section className='Header flex text-left items-center gap-10'>
// //                     <div className='header-left h-full w-6/12 py-10'>
// //                         <h1 className='text-black text-5xl font-bold'>Lorem ipsum dolor sit amet</h1>
// //                         <p className='py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum magnam natus fugit quasi vero mollitia totam quae illum culpa? Laboriosam.</p>
// //                         <Link to={userData ? '/blogs': '/create-account'}><Button 
// //                         className=' bg-transparent border-2 rounder-lg'
// //                         children={userData ? 'All posts' : 'Signup'} /></Link>
// //                     </div>
// //                     <div className='header-right w-6/12 py-10 justify-end '>
// //                     <img src={headerImage} alt="" className='float-right'/>

// //                     </div>
                    
// //                 </section>
// //                 <section className='py-10'>
// //                     {userData && <div className='w-full py-8'>
// //              <Container>
// //                          <div className='flex flex-wrap'>
// //                              {posts.map((post) => (
// //                                  <div key={post.$id} className='p-2 w-1/4'>
// //                                      <PostCard {...post} />
// //                                  </div>
// //                              ))}
// //                          </div>
// //                         </Container>
// //                  </div>}
// //                 </section>
// //             </Container>
// //         </div>
// //     )
// // }

// // export default Home


import React from "react";
import { Container } from "../components/index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  // const [name, setName] = useState("User");
  // useEffect(() => {
  //   authService.getCurrentUser().then((result) => setName(result.name));
  // }, []);

  const name = useSelector((state) => state.auth.userData?.name);
  const status = useSelector((state) => state.auth.status);
  return (
    <div className="w-full h-[92vh]" >
      {/* <div className="area pb-12">
        <div className="circles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div> */}
      <Container>
        <div className="container mx-auto flex flex-col items-center px-4 pb-10 pt-12 sm:py-16 text-center md:py-24 md:px-10 lg:px-32 xl:max-w-3xl ">
          <h1 className="text-4xl text-white font-semibold leading-none sm:text-5xl ">
            <span className="text-cyan-400 capitalize font-bold ">
              {" "}
              Hi {status ? name : "Stranger"}!
            </span>{" "}
            <br />
            Welcome to META BLOG
          </h1>
          <p className="px-8 mt-8 mb-12 font-semibold text-lg text-gray-300">
            Meta Blog, A sleek and all-in-one blog app, take your blogging to the
            next level!
          </p>
          <div className="flex flex-wrap justify-center text-cyan-400">
            <Link
              to={status ? "/all-posts" : "/signup"}
              className="px-8 py-3 m-2 border-2 hover:border-gray-500 duration-200 text-lg font-semibold rounded  "
            >
              {status ? "Read Blog" : "SignUp"}
            </Link>
            <Link
              to={status ? "/add-post" : "/login"}
              className="px-8 py-3 m-2 text-lg font-semibold text-blue-900 hover:text-cyan-200 rounded bg-cyan-400 hover:bg-cyan-600"
            >
              {status ? "Post Blog" : "Login"}
            </Link>
          </div>
          {!status && (
            <p className="text-gray-300">Login to Read, Share and Post Blogs</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Home;
