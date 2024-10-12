import prisma from "@/lib/prisma"

export async function POST(request) {

    const { malId, email } = await request.json()
    const data = { malId, email }

    const createCollection = await prisma.collection.create({ data })

    if (!createCollection) {
        return Response.json({ status: 400, isCreated: false })
    }
    else {
        return Response.json({ status: 200, isCreated: true })
    }
}