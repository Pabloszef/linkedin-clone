import React from 'react'
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {axiosInstance} from "../lib/axios.js";
import Sidebar from "../components/Sidebar.jsx";
import Post from "../components/Post.jsx";
import PostNoFound from "../components/PostNoFound.jsx";

const PostPage = () => {
    const {postId} = useParams();
    const { data: authUser } = useQuery({ queryKey: ["authUser"] })

    const { data: post, isPending: postLoading} = useQuery({
        queryKey: ["post", postId],
        queryFn: () => axiosInstance.get(`/posts/${postId}`)
    });

    if (postLoading) return <div className="text-center translate-y-[35vh] text-3xl font-semibold text-primary">Loading post...</div>;
    if (!post?.data) return <PostNoFound />
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="hidden lg:block lg:col-span-1">
                <Sidebar user={authUser}/>
            </div>

            <div className="col-span-1 lg:col-span-3">
                <Post post={post.data}/>
            </div>
        </div>
    )
}
export default PostPage
