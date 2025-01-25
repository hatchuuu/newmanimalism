
import Collectionsbutton from '@/components/collections-button'
import CommentsText from '@/components/comments-text'
import VideoPlayer from '@/components/video-youtube'
import { getAnime } from '@/lib/data'
import { getUserSession } from '@/lib/login'
import prisma from '@/lib/prisma'
import Image from 'next/image'
import Link from 'next/link'
import { IoCheckmark, IoRibbon, IoStar, IoStatsChart } from 'react-icons/io5'

const AnimePage = async ({ params }) => {
    const { id } = params
    const data = await getAnime(`anime/${id}`)
    const user = await getUserSession()

    const collection = await prisma.collection.findFirst({
        where: {
            animeId: id,
            userEmail: user?.email
        }
    })

    const comment = await prisma.comment.findMany({
        where: {
            animeId: id
        }
    })

    return (
        <div className=' sm:mb-10 mb-5 '>
            <div className="sm:border-4 border-[2px] border-gray-300 sm:p-10 p-4 mb-10 rounded-2xl">
                <div className='flex justify-between items-center sm:mb-5'>
                    <h1 className='sm:text-2xl text-lg text-gray-100 text-bold uppercase'>
                        {data?.data?.title}
                    </h1>
                    {
                        user ?
                            (
                                collection ?
                                    <button className='btn sm:rounded-md btn-disabled rounded-full'>
                                        <div className="hidden sm:flex sm:gap-2">
                                            <IoCheckmark size={15} /><span>Anime Added</span>
                                        </div>
                                        <div className="sm:hidden block">
                                            <IoCheckmark size={15} />
                                        </div>
                                    </button>
                                    :
                                    <Collectionsbutton animeId={id} animeImage={data?.data?.images.webp.large_image_url} animeTitle={data.data.title} userEmail={user?.email} />
                            )
                            : null
                    }
                </div>
                <div className="flex md:flex-row flex-col sm:justify-start justify-center py-4 sm:gap-8 gap-4 relative sm:mb-5 mb-3">
                    <Image src={data.data.images.webp.large_image_url} width={1080} height={1080} alt={data.title} className='self-center max-h-[60vh] sm:max-w-[35vw] max-w-[60vw]' />
                    <div>
                        <div className='flex gap-3 mb-5 sm:justify-normal justify-center'>
                            <Link href='/populer'
                                className='rounded-md px-3 py-2   border-0 flex sm:flex-col justify-center items-center bg-lime-300 hover:bg-lime-200 text-gray-900 font-semibold sm:text-base text-sm gap-1 sm:gap-0'>
                                <div className='hidden sm:block'>
                                    <div className='flex items-center gap-2 sm:text-base text-sm'>
                                        <IoRibbon />
                                        <p>Rekomendasi</p>
                                    </div>
                                </div>
                                <IoRibbon className='sm:hidden block' />
                                <p> {data.data.rank}</p>
                            </Link>
                            <Link href='#'
                                className='rounded-md px-3 py-2   border-0 flex sm:flex-col justify-center items-center bg-lime-300 hover:bg-lime-200 text-gray-900 font-semibold sm:text-base text-sm gap-1 sm:gap-0'>
                                <div className='hidden sm:block'>
                                    <div className='flex items-center gap-2 sm:text-base text-sm'>
                                        <IoStar />
                                        <p>Rating</p>
                                    </div>
                                </div>
                                <IoStar className='sm:hidden block' />
                                <p>{data.data.score}</p>
                            </Link>
                            <Link href='#'
                                className='rounded-md px-3 py-2  border-0 flex sm:flex-col justify-center items-center bg-lime-300 hover:bg-lime-200 text-gray-900 font-semibold sm:text-base text-sm gap-1 sm:gap-0'>
                                <div className='hidden sm:block'>
                                    <div className='flex items-center gap-2 sm:text-base text-sm'>
                                        <IoStatsChart />
                                        <p>Popularitas</p>
                                    </div>
                                </div>
                                <IoStatsChart className='sm:hidden block' />
                                <p>{data.data.popularity}</p>
                            </Link>
                        </div>
                        <h1 className='sm:text-base text-sm text-justify text-gray-400'>
                            {data.data.synopsis}
                        </h1>
                    </div>

                    <div className="md:absolute bottom-0 right-0 items-end flex flex-col">
                        <VideoPlayer youtubeId={data.data.trailer.youtube_id} />
                    </div>
                </div>
                <div className='my-5 flex flex-col justify-center sm:gap-3 gap-1.5 w-full'>
                    <p className='sm:pb-2 pb-0 sm:text-xl text-base font-semibold'>Komentar</p>
                    {
                        comment?.map((items, index) => {
                            return (
                                <div key={index} className='sm:p-4 p-2 rounded-md border border-gray-500'>
                                    <h1 className='font-bold sm:mb-2 mb-1 text-lime-300 text-sm sm:text-base'>{items.userName}</h1>
                                    <p className='text-gray-400 sm:text-base text-sm'>{items.userComment}</p>
                                </div>
                            )
                        })
                    }
                </div>
                {

                    user && <CommentsText animeId={id} animeTitle={data.data.title} userEmail={user?.email} userName={user?.name} />
                }
            </div>


        </div>

    )
}

export default AnimePage

