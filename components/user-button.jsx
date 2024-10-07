'use client'
import React, { useState } from 'react'
import UserCollections from '@/components/user-collection'
import UserComments from '@/components/user-comment'
import { IoBookmarksOutline, IoReaderOutline } from "react-icons/io5";

const UserButton = () => {
    const [open, setOpen] = useState(null) // ubah open menjadi null untuk keadaan awal
    const [isFirstClick, setIsFirstClick] = useState(false) // lacak apakah tombol sudah ditekan

    const handleClick = (option) => {
        setOpen(option)
        open === option ?
            setIsFirstClick((prevState) => !prevState)
            :
            setIsFirstClick(true)
    }

    return (
        <div>
            <div className="flex flex-wrap gap-4 justify-center mb-10">
                <button
                    onClick={() => handleClick('collection')}
                    className={`btn border-0 font-semibold 
                    ${(open === 'collection' && isFirstClick === true)
                            ? 'text-lime-300 bg-slate-950'
                            : 'hover:text-lime-300 text-gray-900 bg-lime-300'}`
                    }
                >
                    <IoBookmarksOutline size={15}/>
                    My Collection
                </button>
                <button
                    onClick={() => handleClick('comments')}
                    className={`btn border-0 font-semibold 
                    ${(open === 'comments' && isFirstClick === true)
                            ? 'text-lime-300 bg-slate-950'
                            : 'hover:text-lime-300 text-gray-900 bg-lime-300'}`
                    }
                >
                    <IoReaderOutline size={15}/>
                    My Comments
                </button>

            </div>
            {isFirstClick && (
                open === 'collection' ?
                    <>
                        <hr className='bg-gray-700 border-0 h-1 w-full mb-10' />
                        <UserCollections />
                    </>
                    :
                    <>
                        <hr className='bg-gray-700 border-0 h-1 w-full mb-10' />
                        <UserComments />
                    </>
            )}
        </div>
    )
}

export default UserButton
