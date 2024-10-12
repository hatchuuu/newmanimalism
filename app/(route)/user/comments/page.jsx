import { getUserSession } from '@/lib/login'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoArrowBackOutline, IoBookmarksOutline, IoChevronForwardCircleOutline } from 'react-icons/io5'

const CommentPage = async () => {
    const user = await getUserSession()
    const comment = await prisma.comment.findMany({
        where: {
            userEmail: user?.email
        }
    })
    return (
        <div className=' mx-4 md:mx-10 mt-20 mb-10 sm:mb-0'>
            <div className="md:max-h-screen w-full">
                <div className="border-4 border-white p-10 mb-10 rounded-2xl">
                    <div className="flex w-full mt-5  justify-center items-center relative">
                        <div className='flex gap-2 text-2xl mb-2 font-semibold text-lime-300 '>
                            <IoBookmarksOutline size={20} />
                            My Comments
                        </div>
                        <Link href='/user/dashboard' className='btn absolute text-bold left-0 top-0  border rounded-md border-gray-500'>
                            <IoArrowBackOutline size={20} />
                        </Link>
                    </div>
                    <hr className='bg-gray-600 h-[4px] rounded-xl border-0 w-full my-8' />
                    <div className='w-full grid grid-cols-1 md:grid-cols-3  gap-4 '>
                        {
                            comment.map((data, index) => {
                                return (
                                    <Link href={`/anime/${data.animeId}`} key={index} className='cursor-pointer p-5 rounded-md border border-gray-100 flex flex-col hover:bg-gray-700 hover:border-lime-300'>
                                        <h1 className='font-semibold text-lime-300 text-lg mb-2'>{data.animeTitle}</h1>
                                        <p className='text-gray-500'>{data.userComment}</p>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>




    )
}

export default CommentPage