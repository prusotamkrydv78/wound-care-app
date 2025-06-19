'use server';
import jwt from 'jsonwebtoken';
import { redirect } from 'next/navigation';
import UserModel from '@/models/user.model';
import connectDb from '@/db/connectDb';
import bcrypt from 'bcrypt';
import { isRedirectError } from 'next/dist/client/components/redirect-error';

export const VerifyOTP = async (prevState, formData) => {
  await connectDb();

  const process = formData.get('process');
  const OTP = [
    formData.get('otp[0]'),
    formData.get('otp[1]'),
    formData.get('otp[2]'),
    formData.get('otp[3]'),
    formData.get('otp[4]'),
    formData.get('otp[5]')
  ].join('');

  const emailToken = formData.get('emailToken');

  try {
    const decoded = jwt.verify(emailToken, process.env.JWT_SECRET_KEY);
    const email = decoded.email;
    const user = await UserModel.findOne({ email });

    if (!user) return { error: 'User not found, sweetheart 😢' };
    if (!user.otp) return { error: 'OTP not found, darling 😢 Please request a new one.' };

    const isOTPValid = await bcrypt.compare(OTP, user.otp);
    if (!isOTPValid) return { error: 'Invalid OTP, my love 😢 Please try again.' };

    user.isVerified = true;
    await user.save();

    if (process === 'register') {
      redirect('/auth/login');
    } else if (process === 'forgot-password') {
      redirect(`/auth/create-password?token=${emailToken}`);
    } else {
      return { error: 'Invalid process specified, sweetheart 😢' };
    }
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.error('OTP Verification Error, baby 💔:', error);
    return { error: 'Something went wrong, love 😢 Please try again.' };
  }
};
