"use server";

import connectDb from "@/db/connectDb";
import UserModel from '@/models/user.model';
import bcrypt from 'bcrypt';
import { redirect } from "next/navigation";
import { SendOTP } from "@/utils/OTPSender";
import jwt from 'jsonwebtoken'
import { isRedirectError } from "next/dist/client/components/redirect-error";

export const handleForgotPassword = async (prevState, formData) => {
    try {
        // Simulate sending a password reset email
        await connectDb();

        const email = formData.get('email');
        if (!email) {
            return { success: false, message: 'Email is required.' };
        }
        const user = await UserModel.findOne({ email })
        if (!user || user.length === 0) {
            return { success: false, message: 'Email not found.' };
        }
        const OTP = Math.floor(100000 + Math.random() * 900000).toString();
        const hashedOTP = await bcrypt.hash(OTP, 10);
        user.otp = hashedOTP;
        await user.save();
        // 💌 1. Send OTP Email
        const token = jwt.sign(
            { email },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '5m' }
        );
        await SendOTP(email, OTP);
        // 🚪 5. Redirect (must be LAST)
        redirect(`/auth/otp-verification?token=${token}&process=forgot-password`);
    } catch (error) {
        if (isRedirectError(error)) throw error;
        console.error('Error sending password reset email:', error);
        return { success: false, message: 'Failed to send password reset email.' };
    }
}