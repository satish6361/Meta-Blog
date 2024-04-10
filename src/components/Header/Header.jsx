// import React from 'react'
// import {Container, Logo, LogoutBtn} from '../index'
// import { Link } from 'react-router-dom'
// import {useSelector} from 'react-redux'
// import { useNavigate } from 'react-router-dom'


// function Header() {
//   const authStatus = useSelector((state) => state.auth.status)
//   const navigate = useNavigate()

//   const navItems = [
//     {
//       name: 'Home',
//       slug: "/",
//       active: true
//     }, 
//     {
//       name: "Login",
//       slug: "/login",
//       active: !authStatus,
//   },
//   {
//       name: "Signup",
//       slug: "/signup",
//       active: !authStatus,
//   },
//   {
//       name: "All Posts",
//       slug: "/all-posts",
//       active: authStatus,
//   },
//   {
//       name: "Add Post",
//       slug: "/add-post",
//       active: authStatus,
//   },
//   ]


//   return (
//     <header className='py-3 shadow bg-blue-900 text-white font-sans' >
//       <Container>
//         <nav className='flex backdrop-filter backdrop-blur-lg '>
//           <div className='mr-4 mt-2'>
//             <Link to='/'>
//               <Logo  className="h-8 w-auto"  />

//               </Link>
//           </div>
//           <ul className='flex ml-auto'>
//             {navItems.map((item) => 
//             item.active ? (
//               <li key={item.name}>
//                 <button
//                 onClick={() => navigate(item.slug)}
//                 className='inline-bock mr-5 px-6 py-2 duration-200 hover:bg-blue-950 font-semibold rounded'
//                 >{item.name}</button>
//               </li>
//             ) : null
//             )}
//             {authStatus && (
//               <li>
//                 <LogoutBtn />
//               </li>
//             )}
//           </ul>
//         </nav>
//         </Container>
//     </header>
//   )
// }

// export default Header

// // import React from 'react'

// // function Header() {
// //   const authStatus = useSelector((state) => state.auth.status)
// //   const navigate = useNavigate()

// //   const navItems = [
// //     {
// //       name: 'Home',
// //       slug: "/",
// //       active: true
// //     }, 
// //     {
// //       name: "Login",
// //       slug: "/login",
// //       active: !authStatus,
// //   },
// //   {
// //       name: "Signup",
// //       slug: "/signup",
// //       active: !authStatus,
// //   },
// //   {
// //       name: "All Posts",
// //       slug: "/all-posts",
// //       active: authStatus,
// //   },
// //   {
// //       name: "Add Post",
// //       slug: "/add-post",
// //       active: authStatus,
// //   },
// //   ]

// //   return (
// //     <nav class="bg-gray-800">
// //   <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
// //     <div class="relative flex h-16 items-center justify-between">
// //       <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
// //         {/* <!-- Mobile menu button--> */}
// //         <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
// //           <span class="absolute -inset-0.5"></span>
// //           <span class="sr-only">Open main menu</span>
// //           {/* <!--
// //             Icon when menu is closed.

// //             Menu open: "hidden", Menu closed: "block"
// //           --> */}
// //           <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
// //             <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
// //           </svg>
// //           {/* <!--
// //             Icon when menu is open.

// //             Menu open: "block", Menu closed: "hidden"
// //           --> */}
// //           <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
// //             <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
// //           </svg>
// //         </button>
// //       </div>
// //       <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
// //         <div class="flex flex-shrink-0 items-center">
// //           {/* <img class="h-8 w-auto" src="Logo.png" alt="meta-blog-image" /> */}
// //           <Link to='/'>
// //             <Logo  className="h-8 w-auto"  />

// //           </Link>
// //         </div>
// //         <div class="hidden sm:ml-6 sm:block">
// //           <div class="flex space-x-4">
// //             {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
// //             <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
// //             <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
// //             <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
// //             <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
// //           </div>
// //         </div>
// //       </div>
// //       <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
// //         <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
// //           <span class="absolute -inset-1.5"></span>
// //           <span class="sr-only">View notifications</span>
// //           <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
// //             <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
// //           </svg>
// //         </button>

// //         {/* <!-- Profile dropdown --> */}
// //         <div class="relative ml-3">
// //           <div>
// //             <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
// //               <span class="absolute -inset-1.5"></span>
// //               <span class="sr-only">Open user menu</span>
// //               <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
// //             </button>
// //           </div>

// //           {/* <!--
// //             Dropdown menu, show/hide based on menu state.

// //             Entering: "transition ease-out duration-100"
// //               From: "transform opacity-0 scale-95"
// //               To: "transform opacity-100 scale-100"
// //             Leaving: "transition ease-in duration-75"
// //               From: "transform opacity-100 scale-100"
// //               To: "transform opacity-0 scale-95"
// //           --> */}
// //           <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
// //             {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
// //             <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
// //             <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
// //             <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   </div>

// //   {/* <!-- Mobile menu, show/hide based on menu state. --> */}
// //   <div class="sm:hidden" id="mobile-menu">
// //     <div class="space-y-1 px-2 pb-3 pt-2">
// //       {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
// //       <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
// //       <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
// //       <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
// //       <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
// //     </div>
// //   </div>
// // </nav>
// //   )
// // }

// // export default Header



import React, { useState } from "react";
import { Logo, LogoutBtn, ToggleBtn } from "../index";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const [toggle, setToggle] = useState(false);

  const navItems = [
    {
      name: "HOME",
      slug: "/",
      active: true,
    },
    {
      name: "LOGIN",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "SIGNUP",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "ALL POSTS",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "ADD POST",
      slug: "/add-post",
      active: authStatus,
    },
    {
      name: "MY BLOGS",
      slug: "/my-blogs",
      active: authStatus,
    },
  ];

  return (
    <header>
      <nav className="">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-14 sm:h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <ToggleBtn
                toggle={toggle}
                onClick={() => setToggle((prev) => !prev)}
              />
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex sm:ml-0 -ml-8 select-none text-lg text-white font-bold flex-shrink-0 items-center">
                <Logo width="50" />
                META BLOG
              </div>
              <div className="hidden sm:ml-6 sm:flex items-center">
                <ul className="flex ml-auto">
                  {navItems.map(
                    (item) =>
                      item.active && (
                        <li key={item.name}>
                          <NavLink
                          
                            to={`${item.slug}`}
                            className=" text-white p-3 text-sm font-semibold hover:pointer "
                            aria-current="page"
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      )
                  )}
                </ul>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {authStatus && <LogoutBtn />}
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        <div
          className={`${
            toggle && "max-h-44"
          }  sm:hidden max-h-1 overflow-hidden transition-all duration-500`}
          id="mobile-menu"
        >
          <div className="px-2 py-3">
            {navItems.map(
              (item) =>
                item.active && (
                  <li className="list-none" key={item.name}>
                    <NavLink
                      to={`${item.slug}`}
                      className=" text-white  block rounded-md hover:pointer px-3 py-2  text-base font-medium"
                      aria-current="page"
                    >
                      {item.name}
                    </NavLink>
                  </li>
                )
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
