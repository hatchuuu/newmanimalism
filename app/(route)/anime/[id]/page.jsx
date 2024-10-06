
import VideoPlayer from '@/components/video-youtube'
import { getAnime } from '@/lib/data'
import Image from 'next/image'


const AnimePage = async ({ params }) => {
    const { id } = params
    const data = await getAnime(`anime/${id}`)
    return (
        data ?
            <div className=' mx-4 md:mx-10 mt-20 mb-10 sm:mb-0'>
                <div className="md:max-h-screen w-full">
                    <div className="border-4 border-white p-10 mb-10 rounded-2xl">
                        <div className='flex justify-between'>
                            <h1 className='text-2xl text-gray-100 text-bold uppercase'>
                                {data.data.title}
                            </h1>
                            {
                                data.data.year &&
                                <button className='rounded-md px-4 py-2 border-0 bg-lime-300 hover:bg-lime-200
                                text-gray-900 font-semibold text-sm sm:text-md'>{data.data.year}</button>

                            }
                        </div>
                        <div className="flex md:flex-row flex-col py-4 gap-8 relative">
                            <Image src={data.data.images.webp.large_image_url} width={1080} height={1080} alt={data.title} className='max-h-[60vh]' />
                            <div>
                                <div className='flex gap-3 mb-5'>
                                    <button className='rounded-md w-32 py-2 border-0 flex flex-col justify-center items-center bg-lime-300 hover:bg-lime-200
                                    text-gray-900 font-semibold text-sm sm:text-md'>
                                        <p>Rekomendasi</p>
                                        <p>#{data.data.rank}</p>
                                    </button>
                                    <button className='rounded-md w-32 py-2 border-0 flex flex-col justify-center items-center bg-lime-300 hover:bg-lime-200
                                    text-gray-900 font-semibold text-sm sm:text-md'>
                                        <p>Score</p>
                                        <p>{data.data.score}</p>
                                    </button>
                                    <button className='rounded-md w-32 py-2 border-0 flex flex-col justify-center items-center bg-lime-300 hover:bg-lime-200
                                    text-gray-900 font-semibold text-sm sm:text-md'>
                                        <p>Popularity</p>
                                        <p>#{data.data.popularity}</p>
                                    </button>
                                </div>
                                <h1 className='text-md text-justify text-gray-400'>
                                    {data.data.synopsis}
                                </h1>
                            </div>

                            <div className="md:absolute bottom-0 right-0 items-end flex flex-col">
                                <VideoPlayer youtubeId={data.data.trailer.youtube_id}/>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
            : <p> Sabar Masbroooo</p>

    )
}

export default AnimePage

