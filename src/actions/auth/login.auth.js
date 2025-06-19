"use server";

import connectDb from "@/db/connectDb";
import UserModel from "@/models/user.model";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { getSession } from "@/utils/getSessions";

export const loginUser = async (prevState, formData) => {
    try {
        const session = await getSession()
        connectDb();
        const userData = {
            email: formData.get('email'),
            password: formData.get('password'),
        };
        console.log("Trying to login with User Data:", userData);
        const isUserExists = await UserModel.findOne({ email: userData.email });

        if (!isUserExists) {
            console.error("User does not exist:", userData.email);
            return { success: false, message: "User does not exist. Please register." };
        }
        const isPasswordValid = await bcrypt.compare(userData.password, isUserExists.password);
        if (!isPasswordValid) {
            console.error("Invalid password for user:", userData.email);
            return { success: false, message: "Invalid password. Please try again." };
        }
        console.log("User logged in successfully:", isUserExists.email);

        session.fullName = isUserExists.fullName
        session.email = isUserExists.email
        session.role = isUserExists.role
        session.isVerify = isUserExists.isVerify
        await session.save()

        redirect("/local");
    } catch (error) {
        if (isRedirectError(error)) throw error;
        console.error("Login failed:", error);
        return { success: false, message: "Login failed. Please try again." };

    }
}