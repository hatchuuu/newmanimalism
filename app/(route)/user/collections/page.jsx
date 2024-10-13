import { getUserSession } from '@/lib/login'
import prisma from '@/lib/prisma'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoArrowBackOutline, IoBookmarksOutline, IoChevronForwardCircleOutline } from 'react-icons/io5'

const CollectionPage = async () => {
    const user = await getUserSession()
    const collection = await prisma.collection.findMany({
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
                <div className='w-full grid grid-cols-3 md:grid-cols-5 gap-3 mb-4'>
                    {
                        collection?.map((data, index) => (
                            <div key={index} className='group relative sm:p-2 rounded-md border border-gray-100 overflow-hidden flex justify-center items-center '>
                                <Image src={data.animeImage} height={350} width={350} alt={data.animeTitle} className=' object-cover group-hover:scale-105 transition-transform duration-300 ease-out' />
                                <div className="absolute bottom-0 left-0 group-hover:bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 h-full w-full flex justify-center items-center flex-col gap-2 break-words">
                                    <p className="font-bold  text-lime-300 text-center relative line-clamp-2 w-full px-4 text-xs sm:text-xl">
                                        {data.animeTitle}
                                    </p>
                                    <div >
                                        <IoChevronForwardCircleOutline color="white" className="sm:h-14 sm:w-14 h-8 w-8 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CollectionPage