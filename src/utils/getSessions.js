"use server"
import { getIronSession } from "iron-session"
import { cookies } from "next/headers"


const sessionOptions = {
    password: process.env.SESSION_SECRET,
    cookieName: "user",
    cookieOptions: {
        httpOlny: true,
        secure: false
    }
}

export const getSession = async () => {
    return await getIronSession(await cookies(), sessionOptions)

}