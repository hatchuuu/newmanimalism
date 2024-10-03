"use client"
import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"
import { useState } from "react"

const Carousel = ({ data, label, link }) => {
    const [translateX, setTranslateX] = useState(0); // State to track the translation position
    const itemWidth = 184; // Width of each item
    const maxTranslateX = -(itemWidth * (data?.length - 6)); // Maximum translation (for 4 visible items)

    const handleNext = () => {
        if (translateX > maxTranslateX) {
            setTranslateX((prev) => prev - itemWidth); // Translate left
        }
    };

    const handlePrev = () => {
        if (translateX < 0) {
            setTranslateX((prev) => prev + itemWidth); // Translate right
        }
    };

    return (
        <div className="mb-10">
            <div className="flex justify-between my-6">
                <h1 className="font-semibold text-xl">{label}</h1>
                <Link href={link} className="font-semibold text-xl">Lihat Selengkapnya</Link>
            </div>
            <div className="flex">
                <div className="carousel carousel-center carousel-box gap-5">
                    {
                        data?.map((item, index) => {
                            return (
                                <div key={index} className="ease-in-out duration-1000 transition-all carousel-item relative max-w-full"
                                style={{ transform: `translateX(${translateX}px)` }}
                                >
                                    <Image
                                        src={item.images.webp.image_url}
                                        alt={item.title}
                                        width={172}
                                        height={200}
                                        className="object-cover rounded-xl"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent rounded-b-xl"></div>
                                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center p-2">
                                        <h1 className="text-white text-sm font-bold truncate">{item.title}</h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="m-3 flex flex-col items-center justify-center gap-5">
                    <button 
                        onClick={handlePrev} 
                        disabled={translateX === 0} 
                        className={clsx("btn font-bold bg-gray-200 h-2/5 w-16", { 'opacity-50 cursor-not-allowed': translateX === 0 })}
                    >
                        {'<'}
                    </button>
                    <button 
                        onClick={handleNext} 
                        disabled={translateX <= maxTranslateX} 
                        className={clsx("btn font-bold bg-gray-200 h-2/5 w-16", { 'opacity-50 cursor-not-allowed': translateX <= maxTranslateX })}
                    >
                        {'>'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Carousel;
