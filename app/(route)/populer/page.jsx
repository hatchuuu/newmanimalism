'use client'
import Card from '@/components/card'
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
            <div className='sm:mt-20 mt-10 mb-2 sm:mb-10'>
                <div className="py-3 sm:py-0 flex flex-col items-center w-full text-gray-300 font-semibold sm:font-bold text-base sm:text-2xl mb-10 sm:static bg-base-100 sticky top-16 z-10">
                    <h1 className='uppercase text-lime-300'>Anime Populer</h1>
                </div>
                <div className='w-full grid grid-cols-3 md:grid-cols-5 gap-3 mb-4'>
                    {
                        anime?.map((data, index) => (
                            <Card data = {data} key={index} />
                        ))
                    }
                </div>
                <div className="flex w-full justify-center items-center flex-col">
                    <div className="flex sm:gap-5 gap-2 justify-center items-center ">
                        <button onClick={() => handlePage(page - 1)} className="join-item btn" disabled={page <= 1}>«</button>
                        <button className="sm:hidden block join-item btn" >{page} of {totalPage}</button>
                        <Dropdown totalPage={totalPage} handlePage={handlePage} title={`${page} of ${totalPage}`}/>
                        <button onClick={() => handlePage(page + 1)} className="join-item btn" disabled={page >= totalPage}>»</button>
                    </div>
                </div>
            </div >
            :
            <Loading />
    )
}

export default PopulerPage
