
import Carousel from "@/components/carousel"
import Carouselhome from "@/components/carousel-home"
import { getTopAnime, getRandomAnime } from "@/lib/action"


const HomePage = async () => {
  let {anime : topAnime} = await getTopAnime()
  topAnime = topAnime.slice(0, 10)

  const randomAnime = await getRandomAnime()

  return (
    <div className="">
      <div className="max-h-screen">
        <Carouselhome data={topAnime}/>
      </div>
      <Carousel label="Top Anime" data={topAnime} link="/populer" />
      <Carousel label="Recommended Anime" data={randomAnime} link="/recommended" />
    </div>
  )
}

export default HomePage