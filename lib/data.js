export const getAnime = async(resouce) =>{
    const anime = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/${resouce}`)
    const response = await anime.json()
    return response
}

