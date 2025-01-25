"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5"

const Carouselhome = ({ data, autoSlide = true, autoSlideInterval = 3000 }) => {
    const [curr, setCurr] = useState(0)

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])

    const prev = () => {
        setCurr((curr) => curr === 0 ? data.length - 1 : curr - 1)
    }
    const next = () => {
        setCurr((curr) => curr === data.length - 1 ? 0 : curr + 1)
    }

    return (

        <div className="relative">
            <div className="carousel carousel-center rounded-box w-full sm:h-[65vh] h-[40vh] relative sm:border-4 "

            >
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className="carousel-item w-full transisi"
                                style={{ transform: `translateX(-${curr * 100}%)` }}
                            >
                                <div className="flex justify-between relative w-full  overflow-hidden">
                                    <div className="w-1/2">
                                        <div className="flex flex-col justify-center h-full sm:p-16 p-3 gap-4">
                                            <h1 className="sm:text-4xl text-lg font-bold text-lime-300 ">{item.title}</h1>
                                            <p className="sm:text-xl text-sm text-gray-400 sm:line-clamp-4 line-clamp-2">{item.synopsis}</p>
                                            <Link href={`/anime/${item.mal_id}`} className="text-white rounded-lg border-2 sm:border-lime-300 sm:text-xl text-sm py-2 px-4 w-max
                                            hover:bg-lime-300 btn hover:text-black hover:border-lime-300 bg-slate-900
                                            ">Detail Anime
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex justify-end  w-1/2 overflow-hidden">
                                        <Image src={item.images.webp.large_image_url} width={1080} height={1080} alt={item.title} className='max-w-[50vw] object-cover'
                                            style={{ objectPosition: '50% 40%' }} />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
            <div className="sm:block hidden">
                <div className="absolute bottom-12 left-[52px] flex flex-row gap-5">
                    <button onClick={prev} className=" btn btn-circle border-0  bg-lime-300 text-black">
                        <IoChevronBackOutline size={15} />
                    </button>
                    <button onClick={next} className=" btn btn-circle border-0  bg-lime-300 text-black">
                        <IoChevronForwardOutline size={15} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Carouselhome