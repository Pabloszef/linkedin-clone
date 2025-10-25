import React from 'react'
import {BadgeQuestionMark} from "lucide-react";
import {Link} from "react-router-dom";

const PostNoFound = () => {
    return (
        <div className="bg-white rounded-lg shadow p-4 w-[50vh] justify-center items-center mx-auto
        hover:shadow-md transition-all translate-y-[35vh] space-y-2 block">
            <div className="flex gap-4 justify-center items-center">
                <BadgeQuestionMark className="size-10 text-primary"/>
            </div>
            <div className="flex justify-center items-center">
                <h2 className='text-lg font-bold'>Post not found</h2>
            </div>
            <p className="justify-center flex text-gray-600">Go back to the home page and try again</p>
            <div className="flex items-center justify-center w-full">
                <Link
                    to="/"
                    className="bg-primary px-4 py-2 rounded hover:bg-blue-500 transition-colors duration-150"
                >
                    Home
                </Link>
            </div>
        </div>
    )
}
export default PostNoFound
