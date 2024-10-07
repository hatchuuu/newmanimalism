"use client"
import Image from "next/image"
import Link from "next/link"
import { IoChevronForwardOutline, IoChevronBackOutline, IoChevronForwardCircleOutline } from "react-icons/io5"
import { useState } from "react"

const Carousel = ({ data, label, link }) => {
    const [curr, setCurr] = useState(0)

    const prev = () => {
        setCurr((curr) => curr === 0 ? data.length - 6 : curr - 1)
    }
    const next = () => {
        setCurr((curr) => curr === data.length - 6 ? 0 : curr + 1)
    }

    return (
        <div className="mb-10">
            <div className="flex justify-between my-6">
                <h1 className="font-semibold text-xl">{label}</h1>
                <Link href={link} className="font-semibold text-xl">
                    <span className="hidden md:inline">Lihat Selengkapnya</span>
                    <span className="inline md:hidden">
                        <IoChevronForwardOutline size={20} />
                    </span>
                </Link>
            </div>


            <div className="relative flex">
                <div className="carousel rounded-box w-full h-80 relative">
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index}
                                    className="carousel-item transition-transform ease-in-out duration-1000 h-full md:w-1/6 sm:w-1/4 w-1/2"
                                    style={{ transform: `translateX(-${curr * 100}%)` }}
                                >
                                    <div className="group overflow-hidden relative h-full w-full mx-2 p-2 rounded-lg">
                                        <Image
                                            src={item.images.webp.large_image_url}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                                        />
                                        <div className="absolute bottom-0 left-0 group-hover:bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 h-full w-full flex justify-center items-center flex-col gap-2 break-words">
                                            <p className="font-bold text-xl text-lime-300 text-center relative line-clamp-2 w-full px-4">
                                                {item.title}
                                            </p>
                                            <Link href={`/anime/${item.mal_id}`} >
                                                <IoChevronForwardCircleOutline size={50} color="white" className="cursor-pointer"  />
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
                <div className="flex flex-col gap-5 justify-center m-3">
                    <button onClick={prev} className=" btn w-16 h-32 bg-lime-300 group text-black">
                        <IoChevronBackOutline size={30} className="group-hover:text-lime-300"/>
                    </button>
                    <button onClick={next} className=" btn w-16 h-32 bg-lime-300 group text-black">
                        <IoChevronForwardOutline size={30} className="group-hover:text-lime-300"/>
                    </button>
                   

                </div>

            </div>
            <hr className="bg-white h-1 mt-10" />
        </div>
    )
}

export default Carousel;
