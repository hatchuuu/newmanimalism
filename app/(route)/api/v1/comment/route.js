import prisma from "@/lib/prisma"

export async function POST(request){

    const {animeId, animeTitle, userEmail, userName, userComment} = await request.json()
    const data = {animeId, animeTitle, userEmail, userName, userComment}


    const createComment = await prisma.comment.create({data})
    if(!createComment){
        return Response.json({status: 400, isCreated: false })
    }
    else{
        return Response.json({status: 200, isCreated: true })
    }
}