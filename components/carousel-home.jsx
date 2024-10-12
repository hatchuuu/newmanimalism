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
            <div className="carousel rounded-box w-full sm:h-[65vh]  h-[40vh] relative border-4 ">
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className="carousel-item w-full transition-transform ease-in-out duration-1000"
                                style={{ transform: `translateX(-${curr * 100}%)` }}
                            >
                                <div className="grid grid-cols-2 w-full">

                                    <div className="flex flex-col justify-center h-full p-16 gap-4">
                                        <h1 className="text-4xl font-bold text-lime-300 ">{item.title}</h1>
                                        <p className="text-xl text-gray-400 line-clamp-4">{item.synopsis}</p>
                                        <Link href={`/anime/${item.mal_id}`} className="text-white rounded-lg border-2 border-lime-300 text-xl py-2 px-4 w-max
                                            hover:bg-lime-300 btn hover:text-black hover:border-lime-300
                                            ">Detail Anime
                                        </Link>
                                    </div>

                                    <div className="p-10 overflow-hidden relative rounded-r-xl bg-blue-200 w-full h-full">
                                        <Image
                                            src={item.images.webp.large_image_url}
                                            fill
                                            className="object-cover"
                                            style={{ objectPosition: '50% 40%' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
            <div className="absolute bottom-12 left-[52px] flex flex-row gap-5">
                <button onClick={prev} className=" btn btn-circle border-0  bg-lime-300 text-black">
                    <IoChevronBackOutline size={15} />
                </button>
                <button onClick={next} className=" btn btn-circle border-0  bg-lime-300 text-black">
                    <IoChevronForwardOutline size={15} />
                </button>
            </div>
        </div>
    )
}

export default Carouselhome