import Card from '@/components/card'
import { getAnimeByName } from '@/lib/action'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoChevronForwardCircleOutline } from 'react-icons/io5'

const SearchPage = async ({ params }) => {
    const { name } = params
    const animeName = await getAnimeByName(name)
    return (
        <div className='sm:mt-20 mt-10 mb-2 sm:mb-10'>
                <div className="py-3 sm:py-0 flex flex-col items-center w-full text-gray-300 font-semibold sm:font-bold text-base sm:text-2xl mb-10 sm:static bg-base-100 sticky top-16 z-10">
                    <h1>Hasil Pencarian:</h1>
                    <h1 className='uppercase text-lime-300'>{name}</h1>
                </div>
                <div className='w-full grid grid-cols-3 md:grid-cols-5  gap-3 mb-4'>
                    {
                        animeName.data
                            .map((data, index) => {
                                return (
                                    <Card key={index} data={data} />
                                )
                            })
                    }
                </div>

            </div>
    )
}

export default SearchPage