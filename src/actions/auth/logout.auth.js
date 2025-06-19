"use server"

import { getSession } from "@/utils/getSessions"
import { redirect } from "next/navigation"

export const Logout = async () => {
    const session = await getSession()

    session.destroy()
    session.isLogin = false
    session.save()
    redirect("/local")
}