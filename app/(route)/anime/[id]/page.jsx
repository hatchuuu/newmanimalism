
import Collectionsbutton from '@/components/collections-button'
import CommentsText from '@/components/comments-text'
import VideoPlayer from '@/components/video-youtube'
import { getAnime } from '@/lib/data'
import { getUserSession } from '@/lib/login'
import prisma from '@/lib/prisma'
import Image from 'next/image'
import Link from 'next/link'
import { IoRibbon, IoStar, IoStatsChart } from 'react-icons/io5'

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
        <div className=' mx-4 md:mx-10 mt-20 mb-10 sm:mb-0'>
            <div className="border-4 border-white p-10 mb-10 rounded-2xl">
                <div className='flex justify-between'>
                    <h1 className='text-2xl text-gray-100 text-bold uppercase'>
                        {data.data.title}
                    </h1>
                    {
                        user &&
                            collection ?
                            <button className='btn btn-disabled'>
                                Collection Added
                            </button>
                            :
                            <Collectionsbutton animeId={id} animeImage={data.data.images.webp.large_image_url} animeTitle={data.data.title} userEmail={user?.email} />
                    }
                </div>
                <div className="flex md:flex-row flex-col py-4 gap-8 relative mb-5">
                    <Image src={data.data.images.webp.large_image_url} width={1080} height={1080} alt={data.title} className='max-h-[60vh] max-w-[35vw]' />
                    <div>
                        <div className='flex gap-3 mb-5'>
                            <Link href='/recommended'
                                className='rounded-md px-3 py-2 border-0 flex flex-col justify-center items-center bg-lime-300 hover:bg-lime-200 text-gray-900 font-semibold text-sm sm:text-md'>
                                <div className='flex items-center gap-2 text-base'>
                                    <IoRibbon />
                                    <p>Rekomendasi</p>
                                </div>
                                <p>{data.data.rank}</p>
                            </Link>
                            <button
                                className='rounded-md px-3 py-2 border-0 flex flex-col justify-center items-center bg-lime-300 hover:bg-lime-200 text-gray-900 font-semibold text-sm sm:text-md'>
                                <div className='flex items-center gap-2 text-base'>
                                    <IoStar />
                                    <p>Score</p>
                                </div>
                                <p>{data.data.score}</p>
                            </button>
                            <button
                                className='rounded-md px-3 py-2 border-0 flex flex-col justify-center items-center bg-lime-300 hover:bg-lime-200 text-gray-900 font-semibold text-sm sm:text-md'>
                                <div className='flex items-center gap-2 text-base'>
                                    <IoStatsChart />
                                    <p>Polularitas</p>
                                </div>
                                <p>{data.data.popularity}</p>
                            </button>
                        </div>
                        <h1 className='text-md text-justify text-gray-400'>
                            {data.data.synopsis}
                        </h1>
                    </div>

                    <div className="md:absolute bottom-0 right-0 items-end flex flex-col">
                        <VideoPlayer youtubeId={data.data.trailer.youtube_id} />
                    </div>
                </div>
                <div className='my-5 flex flex-col justify-center gap-3 w-full'>
                    <p className='pb-2 text-xl font-semibold'>Komentar</p>
                    {
                        comment?.map((items, index) => {
                            return (
                                <div key={index} className='p-4 rounded-md border border-gray-500'>
                                    <h1 className='font-bold mb-2 text-lime-300'>{items.userName}</h1>
                                    <p className='text-gray-400'>{items.userComment}</p>
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

