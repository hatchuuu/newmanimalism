'use client'
import Loading from '@/components/loading'
import Dropdown from '@/components/pagination-dropdown'
import { getTopAnime } from '@/lib/action'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { IoChevronForwardCircleOutline } from 'react-icons/io5'

const PopulerPage = () => {

    const searchParams = useSearchParams()
    const router = useRouter()

    // Ambil nilai page dari searchParams, jika tidak ada, default ke 1
    const page = parseInt(searchParams.get('page')) || 1

    const [anime, setAnime] = useState([])
    const [totalPage, setTotalPage] = useState([])

    const fetchTopAnime = async () => {
        const { anime, totalPage } = await getTopAnime(page)
        setAnime(anime)
        setTotalPage(totalPage)
    }

    useEffect(() => {
        fetchTopAnime()
    }, [page])


    const handlePage = (newPage) => {
        if (newPage < 1 || newPage > totalPage) {
            return
        }
        const newParams = new URLSearchParams(searchParams)
        newParams.set('page', newPage)
        router.push(`?${newParams.toString()}`)
    }

    return (
        anime ?
            <div className=' mx-4 md:mx-10 mt-20 mb-2 sm:mb-10'>
                <div className="flex flex-col items-center w-full text-gray-300 font-bold text-2xl mb-10">
                    <h1 className='uppercase text-lime-300'>Anime Populer</h1>
                </div>
                <div className='w-full grid grid-cols-3 md:grid-cols-5 gap-3 sm:mb-4'>
                    {
                        anime?.map((data, index) => (
                            <div key={index} className='group relative p-2 rounded-md border border-gray-100 overflow-hidden flex justify-center items-center '>
                                <Image src={data.images.webp.image_url} height={350} width={350} alt={data.title} className=' object-cover group-hover:scale-105 transition-transform duration-300 ease-out' />
                                <div className="absolute bottom-0 left-0 group-hover:bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 h-full w-full flex justify-center items-center flex-col gap-2 break-words">
                                    <p className="font-bold text-xl text-lime-300 text-center relative line-clamp-2 w-full px-4">
                                        {data.title}
                                    </p>
                                    <Link href={`/anime/${data.mal_id}`}>
                                        <IoChevronForwardCircleOutline size={50} color="white" className="cursor-pointer" />
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex w-full justify-center items-center gap-5 flex-col">
                    <div className="flex gap-5 justify-center items-center ">
                        <button onClick={() => handlePage(page - 1)} className="join-item btn" disabled={page <= 1}>«</button>
                        <Dropdown totalPage={totalPage} handlePage={handlePage} title={`${page} of ${totalPage}`} />
                        <button onClick={() => handlePage(page + 1)} className="join-item btn" disabled={page >= totalPage}>»</button>
                    </div>
                </div>
            </div >
            :
            <Loading />
    )
}

export default PopulerPage
