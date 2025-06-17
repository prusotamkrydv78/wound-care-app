'use client';
import { useState, useRef, useEffect, useActionState } from 'react';
import Link from 'next/link';
import { VerifyOTP } from '@/actions/auth/verifyOTP';

import { useSearchParams } from 'next/navigation';

export default function Verifyotp() {

  const [state, formState] = useActionState(VerifyOTP);
  const searchParams = useSearchParams();
  const token = searchParams.get('token');


  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);


  useEffect(() => {
    if (timer > 0 && !canResend) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setCanResend(true);
    }
  }, [timer, canResend]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace') {
      // Focus previous input
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    const pastedArray = pastedData.split('').slice(0, 6);

    setOtp([...pastedArray, ...new Array(6 - pastedArray.length).fill("")]);
    inputRefs.current[Math.min(pastedArray.length, 5)].focus();
  };

  const handleResend = () => {
    setTimer(30);
    setCanResend(false);
    // Add your resend OTP logic here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpString = otp.join('');
    // Add your verification logic here
    console.log('OTP Submitted:', otpString);
  };

  return (
    <div className="min-h-screen flex bg-white">
      <div className="w-full bg-white max-w-md mx-auto flex flex-col justify-center p-6">
        <div className="flex flex-col items-center mb-8">
          {/* Logo */}
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl 
                         flex items-center justify-center shadow-xl mb-6">
            <span className="text-white text-3xl font-bold">+</span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Email</h1>
          <p className="text-gray-600 text-center mb-6">
            We've sent a verification code to<br />
            <span className="font-medium text-gray-900">example@hospital.com</span>
          </p>

          <form action={formState} className="w-full">
            <div className="text-gray-600 mb-4">
              <input type="hidden" name="emailToken" value={token} />
              <input type="hidden" name='process' value={searchParams.get('process')} />
            </div>
            <div className="flex justify-center space-x-3 mb-6">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  ref={(ref) => inputRefs.current[idx] = ref}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e.target, idx)}
                  onKeyDown={(e) => handleBackspace(e, idx)}
                  onPaste={handlePaste}
                  className="w-12 h-14 text-center text-xl font-semibold rounded-xl border-2 
                           border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 
                           transition-all shadow-sm text-gray-400"
                  name={`otp[${idx}]`}
                />
              ))}
            </div>
            <button
              type="submit"
              className="w-full p-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white 
                       rounded-xl font-medium text-lg shadow-xl hover:from-blue-700 
                       hover:to-cyan-600 focus:outline-none focus:ring-4 focus:ring-blue-100 
                       transform transition-all duration-200 hover:scale-[1.01]"
            >
              Verify Email
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-4">
              Didn't receive the code?{' '}
              {canResend ? (
                <button
                  onClick={handleResend}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Resend Code
                </button>
              ) : (
                <span className="text-gray-400">
                  Resend in {timer}s
                </span>
              )}
            </p>

            <Link
              href="/auth/login"
              className="text-gray-600 hover:text-gray-700 font-medium"
            >
              ← Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
