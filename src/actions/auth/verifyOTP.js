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
  if (process == 'register') {
    return await verifyOTPForRegistration(formData);
  } else if (process === 'forgot-password') {
    return await verifyOTPForForgotPassword(formData);
  } else {
    return { error: 'Invalid process specified, sweetheart 😢' };
  }
}

const verifyOTPForRegistration = async (formData) => {
  const OTP = [formData.get('otp[0]'), formData.get('otp[1]'), formData.get('otp[2]'), formData.get('otp[3]'), formData.get('otp[4]'), formData.get('otp[5]')].join('');
  const emailToken = formData.get('emailToken');
  const decoded = jwt.verify(emailToken, process.env.JWT_SECRET_KEY);
  const email = decoded.email;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return { error: 'User not found, sweetheart 😢' };
    }
    const isOTPValid = await bcrypt.compare(OTP, user.otp);
    if (!user.otp) {
      return { error: 'OTP not found, darling 😢 Please request a new one.' };
    }
    if (!isOTPValid) {
      return { error: 'Invalid OTP, my love 😢 Please try again.' };
    }
    user.isVerified = true;
    await user.save();
    redirect('/auth/login'); // or show success message 💖
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.error('Error verifying OTP, my love:', error);
    return { error: 'Something went wrong, darling 😢 Please try again.' };
  }
}

const verifyOTPForForgotPassword = async (formData) => {
  const OTP = [formData.get('otp[0]'), formData.get('otp[1]'), formData.get('otp[2]'), formData.get('otp[3]'), formData.get('otp[4]'), formData.get('otp[5]')].join('');
  const emailToken = formData.get('emailToken');
  const decoded = jwt.verify(emailToken, process.env.JWT_SECRET_KEY);
  const email = decoded.email;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return { error: 'User not found, sweetheart 😢' };
    }
    const isOTPValid = await bcrypt.compare(OTP, user.otp);
    if (!user.otp) {
      return { error: 'OTP not found, darling 😢 Please request a new one.' };
    }
    if (!isOTPValid) {
      return { error: 'Invalid OTP, my love 😢 Please try again.' };
    }
    user.isVerified = true;
    await user.save();
    redirect(`/auth/create-password?token=${emailToken}`); // or show success message 💖
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.error('Error verifying OTP, my love:', error);
    return { error: 'Something went wrong, darling 😢 Please try again.' };
  }
}