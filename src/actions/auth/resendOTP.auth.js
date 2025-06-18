"use server"

import connectDb from "@/db/connectDb"
import UserModel from "@/models/user.model";
import { SendOTP } from "@/utils/OTPSender";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { isRedirectError } from "next/dist/client/components/redirect-error";


export const ResendOTP = async (prevState, formData) => {
    await connectDb()
    try {

        const emailToken = formData.get('emailToken');
        const decoded = jwt.verify(emailToken, process.env.JWT_SECRET_KEY);
        const email = decoded.email;

        const user = await UserModel.findOne({ email })

        const OTP = Math.floor(100000 + Math.random() * 900000).toString();

        // 💌 1. Send OTP Email
        await SendOTP(email, OTP);
        const hashOTP = await bcrypt.hash(OTP, 10)
        user.otp = hashOTP;
        await user.save()
    } catch (error) {
        if (isRedirectError(error)) throw error;
        console.error('Error verifying OTP, my love:', error);
        return { error: 'Something went wrong, darling 😢 Please try again.' };

    }
} 