import { getAnimeByName } from '@/lib/action'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoChevronForwardCircleOutline } from 'react-icons/io5'

const SearchPage = async ({ params }) => {
    const { name } = params
    const animeName = await getAnimeByName(name)
    return (
        <div className=' mx-4 md:mx-10 mt-20 mb-10 sm:mb-0'>
            <div className="md:max-h-screen w-full">
                <div className="flex flex-col items-center w-full text-gray-300 font-bold text-2xl mb-10">
                    <h1>Hasil Pencarian:</h1>
                    <h1 className='uppercase text-lime-300'>{name}</h1>
                </div>
                <div className='w-full grid grid-cols-3 md:grid-cols-5  gap-3 '>
                    {
                        animeName.data
                            .map((data, index) => {
                                return (
                                    <div key={index} className='group relative group p-2 rounded-md border border-gray-100 overflow-hidden  flex justify-center items-center '>
                                        <Image src={data.images.webp.image_url} height={350} width={350} alt={data.title} className=' object-cover group-hover:scale-105 transition-transform duration-300 ease-out' />
                                        <div className="absolute bottom-0 left-0 group-hover:bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 h-full w-full flex justify-center items-center flex-col gap-2 break-words">
                                            <p className="font-bold text-xl text-lime-300 text-center relative line-clamp-2 w-full px-4">
                                                {data.title}
                                            </p>
                                            <Link href={`/anime/${data.mal_id}`} >
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
    )
}

export default SearchPage