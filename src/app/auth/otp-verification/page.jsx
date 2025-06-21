'use client';
import { useState, useRef, useEffect, useActionState } from 'react';
import Link from 'next/link';
import { VerifyOTP } from '@/actions/auth/verifyOTP';
import { useSearchParams } from 'next/navigation';
import { ResendOTP } from '@/actions/auth/resendOTP.auth';
import { MdEmail, MdRefresh, MdArrowBack, MdCheck, MdSecurity, MdTimer, MdContentCopy } from 'react-icons/md';

export default function Verifyotp() {
  const [state, formState] = useActionState(VerifyOTP);
  const [resendOTPState, formResendOTPAction] = useActionState(ResendOTP);
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const email = searchParams.get('email') || 'user@example.com';
  const type = searchParams.get('type') || 'registration';

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');


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

    const newOtp = [...otp.map((d, idx) => (idx === index ? element.value : d))];
    setOtp(newOtp);

    // Auto-focus next input
    if (element.value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all fields are filled
    if (newOtp.every(digit => digit !== '') && index === 5) {
      setTimeout(() => handleSubmit(), 100);
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace') {
      // Clear current field and focus previous
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);

      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    const pastedArray = pastedData.split('').slice(0, 6);
    const newOtp = [...pastedArray, ...new Array(6 - pastedArray.length).fill("")];

    setOtp(newOtp);

    // Focus the next empty input or the last input
    const nextEmptyIndex = newOtp.findIndex(digit => digit === '');
    const focusIndex = nextEmptyIndex !== -1 ? nextEmptyIndex : 5;
    inputRefs.current[focusIndex]?.focus();

    // Auto-submit if all fields are filled
    if (pastedArray.length === 6) {
      setTimeout(() => handleSubmit(), 100);
    }
  };

  const handleResend = async () => {
    if (!canResend) return;

    setTimer(60);
    setCanResend(false);
    setError('');

    try {
      // Mock API call - replace with actual resend
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess('Verification code sent successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      setError('Failed to resend code. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    const otpString = otp.join('');

    if (otpString.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Mock API call - replace with actual verification
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSuccess('Email verified successfully! Redirecting...');

      // Redirect after success
      setTimeout(() => {
        window.location.href = type === 'registration' ? '/auth/login' : '/dashboard';
      }, 2000);
    } catch (error) {
      setError('Invalid verification code. Please try again.');
      // Clear OTP on error
      setOtp(new Array(6).fill(""));
      inputRefs.current[0]?.focus();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#6B7AFF]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#56E0A0]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8B6DFF]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 backdrop-blur-sm">
          {/* Enhanced Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#6B7AFF] to-[#8B6DFF]
                           rounded-2xl shadow-2xl mb-6 transform hover:scale-105 transition-all duration-300">
              <MdEmail className="text-white text-2xl" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Verify Your Email</h1>
            <p className="text-gray-600 text-lg mb-2">
              We've sent a 6-digit code to
            </p>
            <p className="text-[#6B7AFF] font-semibold text-lg break-all">{email}</p>

            {/* Timer Display */}
            <div className="flex items-center justify-center mt-4 p-3 bg-gray-50 rounded-xl">
              <MdTimer className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-sm text-gray-600">
                Code expires in <span className="font-semibold text-gray-900">{Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}</span>
              </span>
            </div>
          </div>

          {/* Status Messages */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center">
              <div className="w-5 h-5 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
              <p className="text-red-600 text-sm font-medium">{error}</p>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center">
              <MdCheck className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
              <p className="text-green-600 text-sm font-medium">{success}</p>
            </div>
          )}

          <form action={formState} onSubmit={handleSubmit} className="w-full">
            <div className="text-gray-600 mb-6">
              <input type="hidden" name="emailToken" value={token} />
              <input type="hidden" name='process' value={searchParams.get('process')} />
            </div>

            {/* Enhanced OTP Input */}
            <div className="flex justify-center space-x-3 mb-8">
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
                  className={`w-14 h-16 text-center text-2xl font-bold rounded-xl border-2
                           transition-all duration-300 shadow-lg hover:shadow-xl
                           ${digit
                             ? 'border-[#6B7AFF] bg-[#6B7AFF]/5 text-[#6B7AFF]'
                             : 'border-gray-200 bg-white text-gray-900'
                           }
                           focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/20
                           focus:outline-none hover:border-[#6B7AFF]/50`}
                  name={`otp[${idx}]`}
                  autoComplete="off"
                />
              ))}
            </div>

            {/* Enhanced Submit Button */}
            <button
              type="submit"
              disabled={isLoading || otp.join('').length !== 6}
              className="group w-full p-4 bg-gradient-to-r from-[#6B7AFF] to-[#8B6DFF] text-white
                       rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl
                       focus:outline-none focus:ring-4 focus:ring-[#6B7AFF]/30
                       transform transition-all duration-300 hover:scale-[1.02]
                       disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none
                       relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                    Verifying...
                  </>
                ) : (
                  <>
                    Verify Email
                    <MdCheck className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#5A6AFF] to-[#7B5DFF] opacity-0
                             group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>

          {/* Enhanced Footer */}
          <div className="mt-8 text-center space-y-6">
            {/* Resend Section */}
            <div className="p-4 bg-gray-50 rounded-xl">
              <form action={formResendOTPAction}>
                <input type="hidden" name="emailToken" value={token} />
                <input type="hidden" name='process' value={searchParams.get('process')} />

                <p className="text-gray-600 mb-3">
                  Didn't receive the code?
                </p>

                {canResend ? (
                  <button
                    type="button"
                    onClick={handleResend}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200
                             text-gray-700 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-300
                             transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <MdRefresh className="w-4 h-4" />
                    Resend Code
                  </button>
                ) : (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-500
                                 rounded-lg font-medium">
                    <MdTimer className="w-4 h-4" />
                    Resend in {timer}s
                  </div>
                )}
              </form>
            </div>

            {/* Help Text */}
            <div className="text-sm text-gray-500 space-y-2">
              <p>Check your spam folder if you don't see the email</p>
              <p>The verification code is valid for 10 minutes</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-100">
              <Link
                href="/auth/login"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900
                         font-medium transition-colors duration-200"
              >
                <MdArrowBack className="w-4 h-4" />
                Back to Login
              </Link>

              <Link
                href="/local/support"
                className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200"
              >
                Need Help?
              </Link>
            </div>

            {/* Security Notice */}
            <div className="flex items-center justify-center gap-2 text-xs text-gray-400 pt-2">
              <MdSecurity className="w-4 h-4" />
              <span>Your information is protected with enterprise-grade security</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
