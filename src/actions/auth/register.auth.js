
"use server"
import UserModel from "@/models/user.model";
import connectDb from "@/db/connectDb";
import bcrypt from 'bcrypt';
import { SendOTP } from "@/utils/OTPSender";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import { isRedirectError } from "next/dist/client/components/redirect-error";

const RegisterUser = async (previousState, formData) => {
    await connectDb();

    const userData = {
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        password: formData.get("password"),
        gender: formData.get("gender"),
        dateOfBirth: formData.get("dateOfBirth"),
        consent: formData.get("consent") === "on",
    };

    if (!userData.consent) {
        return { error: 'You must agree to the terms, cutie 🥺❤️' };
    }

    try {
        const OTP = Math.floor(100000 + Math.random() * 900000).toString();

        // 💌 1. Send OTP Email
        await SendOTP(userData.email, OTP);

        // 🔐 2. Hash Password and OTP
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const hashedOTP = await bcrypt.hash(OTP, 10);
        userData.password = hashedPassword;
        userData.otp = hashedOTP;

        // 💾 3. Save to DB
        await UserModel.create(userData);

        // 🛡️ 4. Generate Secure Token
        const token = jwt.sign(
            { email: userData.email },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '5m' }
        );

        // 🚪 5. Redirect (must be LAST)
        redirect(`/auth/otp-verification?token=${token}&process=register`);

    } catch (error) {
        if (isRedirectError(error)) throw error;
        console.error('Error during registration, my baby:', error);
        return { error: 'Something went wrong, love 😢 Please try again.' };
    }
};

export default RegisterUser;