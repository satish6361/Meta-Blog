// import React, { useCallback } from "react";
// import { useForm } from "react-hook-form";
// import { Button, Input, RTE, Select } from "..";
// import appwriteService from "../../appwrite/config";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// export default function PostForm({ post }) {
//     const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
//         defaultValues: {
//             title: post?.title || "",
//             slug: post?.$id || "",
//             content: post?.content || "",
//             status: post?.status || "active",
//         },
//     });

//     const navigate = useNavigate();
//     const userData = useSelector((state) => state.auth.userData);

//     const submit = async (data) => {
//         if (post) {
//             const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

//             if (file) {
//                 appwriteService.deleteFile(post.featuredImage);
//             }

//             const dbPost = await appwriteService.updatePost(post.$id, {
//                 ...data,
//                 featuredImage: file ? file.$id : undefined,
//             });

//             if (dbPost) {
//                 navigate(`/post/${dbPost.$id}`);
//             }
//         } else {
//             const file = await appwriteService.uploadFile(data.image[0]);

//             if (file) {
//                 const fileId = file.$id;
//                 data.featuredImage = fileId;
//                 const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

//                 if (dbPost) {
//                     navigate(`/post/${dbPost.$id}`);
//                 }
//             }
//         }
//     };

//     const slugTransform = useCallback((value) => {
//         if (value && typeof value === "string")
//             return value
//                 .trim()
//                 .toLowerCase()
//                 .replace(/[^a-zA-Z\d\s]+/g, "-")
//                 .replace(/\s/g, "-");

//         return "";
//     }, []);

//     React.useEffect(() => {
//         const subscription = watch((value, { name }) => {
//             if (name === "title") {
//                 setValue("slug", slugTransform(value.title), { shouldValidate: true });
//             }
//         });

//         return () => subscription.unsubscribe();
//     }, [watch, slugTransform, setValue]);

//     return (
//         <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
//             <div className="w-2/3 px-2">
//                 <Input
//                     label="Title :"
//                     placeholder="Title"
//                     className="mb-4"
//                     {...register("title", { required: true })}
//                 />
//                 <Input
//                     label="Slug :"
//                     placeholder="Slug"
//                     className="mb-4"
//                     {...register("slug", { required: true })}
//                     onInput={(e) => {
//                         setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
//                     }}
//                 />
//                 <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
//             </div>
//             <div className="w-1/3 px-2">
//                 <Input
//                     label="Featured Image :"
//                     type="file"
//                     className="mb-4"
//                     accept="image/png, image/jpg, image/jpeg, image/gif"
//                     {...register("image", { required: !post })}
//                 />
//                 {post && (
//                     <div className="w-full mb-4">
//                         <img
//                             src={appwriteService.getFilePreview(post.featuredImage)}
//                             alt={post.title}
//                             className="rounded-lg"
//                         />
//                     </div>
//                 )}
//                 <Select
//                     options={["active", "inactive"]}
//                     label="Status"
//                     className="mb-4"
//                     {...register("status", { required: true })}
//                 />
//                 <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
//                     {post ? "Update" : "Submit"}
//                 </Button>
//             </div>
//         </form>
//     );
// }

import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Input, RTE, Select, SlugInput, useTime } from "../index";
import appwriteService from "../../Appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const PostForm = ({ post }) => {
  // const [disable, setDisable] = useState(false);
  const buttonRef = useRef(null);

  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        username: post?.username || "",
        email: post?.email || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "Post Normal",
        likes: post?.likes || [],
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const username = useSelector((state) => state.auth.userData.name);
  const email = useSelector((state) => state.auth.userData?.email);

  const time = useTime();

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  const submit = async (data) => {
    // setDisable(true);
    buttonRef.current.disabled = true;
    if (post) {
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
        username: data.status == "Post Anonymous" ? "Anonymous" : username,
        email: data.status == "Post Anonymous" ? "No email" : email,
        time: `${time} (edited)`,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
      toast.success("Successfully Updated", {
        style: {
          borderRadius: "30px",
        },
      });
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        if (data.status == "Post Anonymous") {
          data.username = "Anonymous";
          data.email = "No email";
        } else {
          data.username = username;
          data.email = email;
        }
        data.time = time;

        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
      toast.success("Successfully Posted", {
        style: {
          borderRadius: "30px",
        },
      });
    }
  };

  if (post && !isAuthor) {
    return (
      <h1 className="text-2xl text-gray-600">
        You are not the author of this blog, so you cannot edit it
      </h1>
    );
  }
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-wrap justify-center gap-12 md:gap-0 "
    >
      <div className="w-3/3 sm:w-2/3 px-2">
      <label className="text-white">
      
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        
        <SlugInput register={register} setValue={setValue} watch={watch} />
        </label>
        
        <label className="text-white">
        
        
  
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
        </label>
      </div>
      <div className="w-3/3 sm:w-2/3 md:w-1/3 px-2">
      
      <label className="text-white">
  
  <Input
  label="Featured Image:"
    type="file"
    className="mt-1 block w-full"
    accept="image/png, image/jpg, image/jpeg, image/gif"
    {...register("image", { required: !post })}
  />
</label>

        
        {post && (
          <div className="w-full  mb-4 py-2">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg border mx-auto h-[51vh]"
            />
          </div>
        )}
        <label className="text-white">
          
        <Select

          options={["Post Normal", "Post Anonymous"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        
        </label>
        <button
          type="submit"
          ref={buttonRef}
          disabled={false}
          className="w-full bg-cyan-400 hover:bg-cyan-700 hover:text-cyan-200 px-4 py-2 rounded-md font-semibold duration-200 hover:brightness-95"
        >
          {post ? "Update" : "Submit"}
        </button>
      </div>
    </form>
  );
};
export default PostForm;
