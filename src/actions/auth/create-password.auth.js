'use server';
import connectDb from "@/db/connectDb";
import UserModel from "@/models/user.model";
import bcrypt from 'bcrypt';
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import jwt from "jsonwebtoken";


export const createNewPassword = async (prevState, formData) => {
    await connectDb();

    const emailToken = formData.get('emailToken');
    const newPassword = formData.get('newPassword');
    const confirmPassword = formData.get('confirmPassword');

    // if (newPassword !== confirmPassword) {
    //     return { error: 'Passwords do not match, sweetheart 😢' };
    // }

    try {
        const decoded = jwt.verify(emailToken, process.env.JWT_SECRET_KEY);
        const email = decoded.email;
        console.log("Decoded email from token:", email);
        console.log("Decoded new password from token:", newPassword);
        console.log("Decoded confirm password from token:", confirmPassword);

        const user = await UserModel.findOne({ email });
        if (!user) {
            return { error: 'User not found, darling 😢' };
        }

        user.password = await bcrypt.hash(newPassword, 10);
        user.otp = null; // Clear OTP after password reset
        await user.save();

        redirect('/auth/login'); // Redirect to login after password creation
    } catch (error) {
        if (isRedirectError(error)) throw error;
        console.error('Error creating password, my love:', error);
        return { error: 'Something went wrong, darling 😢 Please try again.' };
    }
}