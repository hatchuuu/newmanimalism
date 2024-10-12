
import Carousel from "@/components/carousel"
import Carouselhome from "@/components/carousel-home"
import { getTopAnime, getRandomAnime } from "@/lib/action"


const HomePage = async () => {
  let topAnime = await getTopAnime()
  topAnime = topAnime.slice(0, 10)

  const randomAnime = await getRandomAnime()

  return (
    <div className="sm:mx-10 mx-2 sm:mt-20 mt-16">
      <div className="max-h-screen">
        <Carouselhome data={topAnime}/>
      </div>
      <Carousel label="Top Anime" data={topAnime} link="/top" />
      <Carousel label="Recommended Anime" data={randomAnime} link="/recommended" />
    </div>
  )
}

export default HomePage