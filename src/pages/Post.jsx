// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import appwriteService from "../Appwrite/config";
// import { Button, Container } from "../components";
// import parse from "html-react-parser";
// import { useSelector } from "react-redux";

// export default function Post() {
//   const [post, setPost] = useState(null);
//   const { slug } = useParams();
//   const navigate = useNavigate();

//   const userData = useSelector((state) => state.auth.userData);

//   const isAuthor = post && userData ? post.userId === userData.$id : false;

//   useEffect(() => {
//     if (slug) {
//       appwriteService.getPost(slug).then((post) => {
//         if (post) setPost(post);
//         else navigate("/");
//       });
//     } else navigate("/");
//   }, [slug, navigate]);

//   const deletePost = () => {
//     appwriteService.deletePost(post.$id).then((status) => {
//       if (status) {
//         appwriteService.deleteFile(post.featuredImage);
//         navigate("/");
//       }
//     });
//   };

//   return post ? (
//     <div className="py-8">
//       <Container>
//         <div className="w-full flex justify-center mb-4 relative rounded-xl p-2">
//           <div>
//             <img
//               src={appwriteService.getFilePreview(post.featuredImage)}
//               alt={post.title}
//               className="rounded-xl h-[60vh] drop-shadow-lg"
//             />
//           </div>
//           <div className="flex flex-col">
//             <div className="w-full mb-6">
//               <h1 className="text-2xl text-white font-bold">{post.title}</h1>
//             </div>

//             {isAuthor && (
//               <div className="absolute right-6 top-6">
//                 <Link to={`/edit-post/${post.$id}`}>
//                   <Button bgColor="bg-green-500" className="mr-3">
//                     Edit
//                   </Button>
//                 </Link>
//                 <Button bgColor="bg-red-500" onClick={deletePost}>
//                   Delete
//                 </Button>
//               </div>
//             )}
//           </div>
//         </div>
//         {/* <div className="w-full mb-6">
//                     <h1 className="text-2xl text-white font-bold">{post.title}</h1>
//                 </div> */}
//         <div className="browser-css text-white">{parse(post.content)}</div>
//       </Container>
//     </div>
//   ) : null;
// }



import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../Appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8">
      <Container>
        <div className="flex items-start mb-4 relative rounded-xl p-2">
          <div className="mr-6">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-xl h-[60vh] drop-shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl text-white font-bold mb-4">{post.title}</h1>
            {isAuthor && (
              <div className="mb-4">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button bgColor="bg-green-500" className="mr-3">
                    Edit
                  </Button>
                </Link>
                <Button bgColor="bg-red-500" onClick={deletePost}>
                  Delete
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className="browser-css text-white">{parse(post.content)}</div>
      </Container>
    </div>
  ) : null

}
