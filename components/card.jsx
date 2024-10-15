import Image from "next/image"
import Link from "next/link"
import { IoChevronForwardCircleOutline } from "react-icons/io5"

const Card = ({ data }) => {
    return (
        <Link href={`/anime/${data.mal_id}`} className='group relative sm:p-2 p-1 rounded-md border border-gray-100 overflow-hidden flex justify-center items-center '>
            <Image src={data.images.webp.image_url} priority height={350} width={350} alt={data.title} className=' object-cover group-hover:scale-105 transition-transform duration-300 ease-out' />
            <div className="absolute bottom-0 left-0 group-hover:bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 h-full w-full flex justify-center items-center flex-col gap-2 break-words">
                <p className="font-bold  text-lime-300 text-center relative line-clamp-2 w-full px-4 text-xs sm:text-xl">
                    {data.title}
                </p>
                <div >
                    <IoChevronForwardCircleOutline color="white" className="sm:h-14 sm:w-14 h-8 w-8 cursor-pointer" />
                </div>
            </div>
        </Link>
    )
}

export default Card