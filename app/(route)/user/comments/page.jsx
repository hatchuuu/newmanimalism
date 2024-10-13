import { getUserSession } from '@/lib/login'
import prisma from '@/lib/prisma'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoArrowBackOutline, IoBookmarksOutline } from 'react-icons/io5'

const CommentPage = async () => {
    const user = await getUserSession()
    const comment = await prisma.comment.findMany({
        where: {
            userEmail: user?.email
        }
    })
    return (
        <div className='sm:mt-20 mt-10 mb-2 sm:mb-10'>
            <div className="py-3 sm:py-0 flex flex-col items-center w-full text-gray-300 font-semibold sm:font-bold text-base sm:text-2xl mb-10 sm:static bg-base-100 sticky top-16 z-10">
                <div className="flex w-full mt-5  justify-center items-center relative">
                    <div className='flex gap-2 sm:text-2xl text-base mb-2 font-semibold text-lime-300 item-center text-center'>
                        <IoBookmarksOutline />
                        My Collections
                    </div>
                    <Link href='/user/dashboard' className='btn btn-sm sm:btn-md text-lg sm:text-2xl absolute text-bold left-0 top-0  border rounded-md border-gray-500'>
                        <IoArrowBackOutline />
                    </Link>
                </div>
                <hr className='bg-gray-600 h-1 rounded-xl border-0 w-full sm:my-8 my-3' />
                <div className='w-full grid grid-cols-1 md:grid-cols-3  gap-4 '>
                    {
                        comment.map((data, index) => {
                            return (
                                <Link href={`/anime/${data.animeId}`} key={index} className='cursor-pointer sm:p-4 p-2 rounded-md border border-gray-100 flex flex-col hover:bg-base-300 hover:border-lime-300'>
                                    <h1 className='font-bold sm:mb-2 mb-1 text-lime-300 text-sm sm:text-base'>{data.userName}</h1>
                                    <p className='text-gray-400 sm:text-base text-sm'>{data.userComment}</p>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        




    )
}

export default CommentPage