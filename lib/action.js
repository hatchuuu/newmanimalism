import { getAnime } from "@/lib/data"

export const getTopAnime = async() =>{
    const anime = await getAnime("top/anime")
    const response = anime?.data.map(item => item)
    return response
}

export const getRecommendedAnime = async()=>{
    const anime = await getAnime("recommendations/anime")
    const response = anime?.data.flatMap(item=> item.entry)
    return response
}

export const getRandomAnime = async()=>{
    const anime = await getRecommendedAnime()
    let first = ~~(Math.random() * (anime.length - 10) + 1)
    let last = first + 10;
    const response = anime.slice(first, last)
    return response
}

export const getAnimeByName = async(resourse)=>{
     return await getAnime(`anime?q=${resourse}`)
     
}