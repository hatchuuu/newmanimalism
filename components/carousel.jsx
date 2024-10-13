"use client"
import Image from "next/image"
import Link from "next/link"
import { IoChevronForwardOutline, IoChevronBackOutline, IoChevronForwardCircleOutline } from "react-icons/io5"
import { useState } from "react"
import Carouselitems from "./carousel-items"

const Carousel = ({ data, label, link }) => {
    const [curr, setCurr] = useState(0)

    const prev = () => {
        setCurr((curr) => curr === 0 ? data.length - 6 : curr - 1)
    }
    const next = () => {
        setCurr((curr) => curr === data.length - 6 ? 0 : curr + 1)
    }

    return (
        <div className="sm:mb-10 mb-7">
            <div className="flex justify-between sm:my-6 my-3">
                <h1 className=" font-semibold text-base ml-1 sm:text-xl ">{label}</h1>
                <Link href={link} className="font-semibold text-xl">
                    <span className="hidden md:inline">Lihat Selengkapnya</span>
                    <span className="inline md:hidden">
                        <IoChevronForwardOutline size={20} />
                    </span>
                </Link>
            </div>

            <div className="relative flex">
                <div className="carousel rounded-box w-full sm:h-80 h-44 relative">
                    {
                        data.map((item, index) => {
                            return (
                                <Carouselitems item={item} curr={curr} key={index} />
                            )
                        })
                    }
                </div>
                <div className="sm:block hidden">
                    <div className="flex flex-col gap-5 justify-center m-3">
                        <button onClick={prev} className=" btn w-16 h-32 bg-lime-300 group text-black">
                            <IoChevronBackOutline size={30} className="group-hover:text-lime-300" />
                        </button>
                        <button onClick={next} className=" btn w-16 h-32 bg-lime-300 group text-black">
                            <IoChevronForwardOutline size={30} className="group-hover:text-lime-300" />
                        </button>
                    </div>
                </div>

            </div>
            <hr className="bg-gray-500 sm:h-1 h-[2px] sm:mt-10 mt-4" />
        </div>
    )
}

export default Carousel;
