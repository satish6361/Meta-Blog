// import React from 'react'
// import appwriteService from "../Appwrite/config"
// import {Link} from 'react-router-dom'

// function PostCard({$id, title, featuredImage}) {
    
//   return (
//     <Link to={`/post/${$id}`}>
//         <div className='w-full bg-gray-100 rounded-xl p-4'>
//             <div className='w-full justify-center mb-4'>
//                 <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
//                 className='rounded-xl' />

//             </div>
//             <h2
//             className='text-xl font-bold'
//             >{title}</h2>
//         </div>
//     </Link>
//   )
// }


// export default PostCard



import React from 'react';
import appwriteService from "../Appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  return (//md:w-1/3
    <Link to={`/post/${$id}`} className='w-full  p-4'>
      <div className='bg-gray-100 rounded-xl shadow-xl h-full'>
        <div className='h-56 mb-4'>
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className='w-full h-full object-cover rounded-t-xl'
          />
        </div>
        <h2 className='text-lg font-bold p-4'>{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
