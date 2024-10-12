import { getUserSession } from '@/lib/login'
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
        <div className=' mx-4 md:mx-10 mt-20 mb-10 sm:mb-0'>
            <div className="md:max-h-screen w-full">
                <div className="border-4 border-white p-10 mb-10 rounded-2xl">
                    <div className="flex w-full mt-5  justify-center items-center relative">
                        <div className='flex gap-2 text-2xl mb-2 font-semibold text-lime-300 '>
                            <IoBookmarksOutline size={20} />
                            My Collections
                        </div>
                        <Link href='/user/dashboard' className='btn absolute text-bold left-0 top-0  border rounded-md border-gray-500'>
                            <IoArrowBackOutline size={20} />
                        </Link>
                    </div>
                    <hr className='bg-gray-600 h-[4px] rounded-xl border-0 w-full my-8' />
                    <div className='w-full grid grid-cols-3 md:grid-cols-5  gap-4 '>
                        {
                            collection?.map((data, index) => {
                                return (
                                    <div key={index} className='group relative group p-2 rounded-md border border-gray-100 overflow-hidden  flex justify-center items-center '>
                                        <Image src={data.animeImage} height={350} width={350} alt={data.animeTitle} className=' object-cover group-hover:scale-105 transition-transform duration-300 ease-out' />
                                        <div className="absolute bottom-0 left-0 group-hover:bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 h-full w-full flex justify-center items-center flex-col gap-2 break-words">
                                            <p className="font-bold text-xl text-lime-300 text-center relative line-clamp-2 w-full px-4">
                                                {data.animeTitle}
                                            </p>
                                            <Link href={`/anime/${data.animeId}`} >
                                                <IoChevronForwardCircleOutline size={50} color="white" className="cursor-pointer" />
                                            </Link>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>




    )
}

export default CollectionPage