import { authOptions } from "@/app/(route)/api/auth/[...nextauth]/route";

const { getServerSession } = require("next-auth");

export const getUserSession= async()=>{
    const session = await getServerSession(authOptions)
    return session?.user
}