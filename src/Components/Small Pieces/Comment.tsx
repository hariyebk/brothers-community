'use client'

import { useState } from "react"
import Avatar from "./Avatar"

interface CommentProps {
    postId?: string,
    blogCatagoryName?: string 
}

export default function Comment({postId, blogCatagoryName} : CommentProps){

    const [commentInput, setCommentInput] = useState<string>("")

    async function handleSubmit(){
        if(!postId && !blogCatagoryName) return
        if(postId){
            //TODO: Make an HTTP request to add the comment to the post. we have the post

        }
        if(blogCatagoryName){
            //TODO: add the comment into the blog catagory
        }
    }

    return (
        <section className='flex flex-col justify-start gap-6 mt-16'>
            <form onSubmit={handleSubmit} className="flex items-start gap-5">
                <span className="max-sm:hidden">
                    <Avatar />
                </span>
                <div className="flex flex-col items-start">
                    <textarea placeholder="Make a comment" className="bg-button rounded-md border border-gray-500 w-[400px] h-[200px] p-4 focus:outline-none" />
                    <button className="bg-orangeRed mt-6 text-base text-white rounded-md focus-visible:outline-none px-4 py-2"> submit </button>
                </div>
            </form>
        </section>
    )
}
