'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { IoSendSharp } from 'react-icons/io5'

const CommentsText = ({animeId, animeTitle, userName, userEmail}) => {
    const router = useRouter()
    const [userComment, setUserComment] = useState()
    const handleClick = async (event) => {
        event.preventDefault()
        const data = {animeId, animeTitle, userName, userEmail, userComment}

        const response = await fetch(`/api/v1/comment`,{
            method : "POST",
            body : JSON.stringify(data)
        })
        const comment = await response.json()
        if (comment.isCreated) {
            router.refresh()
        }
    }
    const handleChange = (event) => {
        setUserComment(event.target.value)
    }
    return (
        <div className='flex w-full flex-col justify-end'>
            <textarea
                rows="5"
                placeholder='Masukkan komentar...'
                onChange={handleChange}
                className='w-full p-2  textarea-bordered textarea text-sm sm:text-base'>
            </textarea>
            <button
                className='sm:mt-2 mt-1 text-sm sm:text-base  self-end btn-sm sm:btn-md w-max btn bg-lime-300 text-gray-900 hover:bg-gray-900 hover:text-lime-300'
                onClick={handleClick}
            >
                <IoSendSharp />
                Kirim
            </button>
        </div>
    )
}

export default CommentsText