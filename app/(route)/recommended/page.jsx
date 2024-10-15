'use client'
import Card from '@/components/card'
import Loading from '@/components/loading'
import { getRecommendedAnime } from '@/lib/action'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoChevronForwardCircleOutline } from 'react-icons/io5'

const RecomendedPage = () => {
    const [anime, setAnime] = useState([])
    const totalData = 200
    const lengthData = 20
    const [range, setRange] = useState(0)
    const [lastRange, setLastRange] = useState(20)

    const fetchReqAnime = async () => {
        let anime = await getRecommendedAnime()
        anime = anime.slice(range, lastRange)
        setAnime(anime)
    }
console.log(anime);
    useEffect(() => {
        fetchReqAnime()
    }, [range, lastRange])

    const prevPage = () => {
        if (range > 0) {
            setRange((range) => range - lengthData)
            setLastRange((lastRange) => lastRange - lengthData)
        }
    }
    const nextPage = () => {
        if (lastRange < totalData) {
            setRange((range) => range + lengthData)
            setLastRange((lastRange) => lastRange + lengthData)
        }
    }


    return (
        anime ?
            <div className='sm:mt-20 mt-10 mb-2 sm:mb-10'>
                <div className="py-3 sm:py-0 flex flex-col items-center w-full text-gray-300 font-semibold sm:font-bold text-base sm:text-2xl mb-10 sm:static bg-base-100 sticky top-16 z-10">
                    <h1 className='uppercase text-lime-300'>Anime Rekomendasi</h1>
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
                        <button onClick={prevPage} className="join-item btn">«</button>
                        <button className="join-item btn"> {lastRange / lengthData} of {totalData / lengthData}</button>
                        <button onClick={nextPage} className="join-item btn" >»</button>
                    </div>
                </div>
            </div >
            :
            <Loading />
    )
}

export default RecomendedPage
