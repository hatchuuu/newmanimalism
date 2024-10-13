import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoChevronForwardCircleOutline } from 'react-icons/io5'

const Carouselitems = ({ item,  curr }) => {
    return (
        <div
            className="carousel-item transisi h-full  md:w-1/6  w-1/3"
            style={{ transform: `translateX(-${curr * 100}%)` }}
        >
            <Link href={`/anime/${item.mal_id}`} className="group overflow-hidden relative h-full w-full mx-1 sm:mx-2 p-2 rounded-lg">
                <Image
                    src={item.images.webp.large_image_url}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                />

                <div className="absolute bottom-0 left-0 group-hover:bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 h-full w-full flex justify-center items-center flex-col gap-2 break-words">
                    <p className="
                    font-bold  text-lime-300 text-center relative line-clamp-2 w-full px-4 text-xs
                    sm:text-xl
                    ">
                        {item.title}
                    </p>
                    <div >
                        <IoChevronForwardCircleOutline  color="white" className="sm:h-14 sm:w-14 h-8 w-8 cursor-pointer" />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Carouselitems