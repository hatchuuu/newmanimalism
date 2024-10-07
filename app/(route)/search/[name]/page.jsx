import { getAnimeByName } from '@/lib/action'
import Image from 'next/image'
import React from 'react'

const SearchPage = async ({ params }) => {
    const { name } = params
    const animeName = await getAnimeByName(name)
    return (
        animeName ?
            <div className=' mx-4 md:mx-10 mt-20 mb-10 sm:mb-0'>
                <div className="md:max-h-screen w-full">
                    <div className="flex flex-col justify-center items-center w-full text-gray-300 font-bold text-2xl mb-5">
                        <h1>Menampilkan hasil pencarian untuk: </h1>
                        <h1>{name}</h1>
                    </div>
                    <div className='w-full flex flex-wrap gap-3 justifey-center items-center'>
                        {
                            animeName.data
                            .map((data, index) => {
                                return (
                                    <div key={index} className='relative group p-4 rounded-md border border-gray-100 w-max max-w-[50vh] flex justify-center items-center'>
                                        <Image src={data.images.webp.image_url} width={200} height={250} alt={data.title} />
                                        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-90 hidden group-hover:flex flex-col justify-center items-center p-4 z-10 transition-all duration-300">
                                            <h1 className='font-semibold text-center w-full my-2'>{data.title}</h1>
                                            <h1 className='font-semibold text-center w-full my-2'>{data.year}</h1>
                                            <p className='text-sm line-clamp-2'>{data.synopsis}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
            : <p> Sabar ya masbro</p>
    )
}

export default SearchPage