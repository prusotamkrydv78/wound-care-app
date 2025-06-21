'use client';
import { useActionState, useState } from 'react';
import Link from 'next/link';
import { handleForgotPassword } from '@/actions/auth/forgot-password.auth';
import { MdEmail, MdArrowBack, MdSecurity, MdTimer, MdCheck, MdLock, MdRefresh } from 'react-icons/md';

export default function ForgotPassword() {
    const [form, formAction] = useActionState(handleForgotPassword);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [step, setStep] = useState(1); // 1: Enter email, 2: Success message

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Mock API call
        setTimeout(() => {
            setIsLoading(false);
            setStep(2);
        }, 2000);
    };

    return (
        <div className="min-h-screen flex overflow-hidden bg-gradient-to-br from-gray-50 to-white">
            {/* Left Section - Enhanced Design */}
           

            {/* Right Section - Enhanced Form */}
            <div className="bg-white w-full  flex items-center justify-center p-8 relative overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FF6B9D]/5 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#8B6DFF]/5 to-transparent rounded-full blur-3xl"></div>

                <div className="w-full max-w-md space-y-8 relative z-10">
                    {step === 1 ? (
                        <>
                            {/* Step 1: Enter Email */}
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF6B9D] to-[#C44569]
                                               rounded-2xl shadow-2xl mb-6 transform hover:scale-105 transition-all duration-300
                                               hover:shadow-3xl hover:rotate-3">
                                    <MdLock className="text-white text-2xl" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Forgot Password?</h2>
                                <p className="text-gray-600 text-lg">
                                    No worries! Enter your email and we'll send you secure reset instructions.
                                </p>
                            </div>

                            {/* Enhanced Form */}
                            <form action={formAction} onSubmit={handleSubmit} className="mt-8 space-y-6">
                                {form?.error && (
                                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                                        <p className="text-red-600 text-sm font-medium">{form.error}</p>
                                    </div>
                                )}

                                <div className="group">
                                    <label className="text-gray-700 font-semibold block mb-3 text-sm uppercase tracking-wide">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none
                                                       group-focus-within:text-[#FF6B9D] transition-colors duration-200">
                                            <MdEmail className="h-5 w-5 text-gray-400 group-focus-within:text-[#FF6B9D]" />
                                        </div>
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200
                                                     bg-white focus:border-[#FF6B9D] focus:ring-4 focus:ring-[#FF6B9D]/10
                                                     transition-all duration-300 text-gray-900 placeholder-gray-400
                                                     hover:border-gray-300 focus:outline-none text-lg"
                                            placeholder="Enter your email address"
                                            name='email'
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading || !email}
                                    className="group w-full p-4 bg-gradient-to-r from-[#FF6B9D] to-[#C44569] text-white
                                             rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl
                                             focus:outline-none focus:ring-4 focus:ring-[#FF6B9D]/30
                                             transform transition-all duration-300 hover:scale-[1.02]
                                             disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none
                                             relative overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center justify-center">
                                        {isLoading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                                                Sending Reset Code...
                                            </>
                                        ) : (
                                            <>
                                                Send Reset Code
                                                <MdEmail className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                            </>
                                        )}
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#E55A87] to-[#B73E56] opacity-0
                                                   group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            </form>

                            {/* Enhanced Footer */}
                            <div className="mt-8 text-center space-y-6">
                                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                                    <p className="text-blue-800 text-sm">
                                        If an account exists with this email, you'll receive password reset instructions within a few minutes.
                                    </p>
                                </div>

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
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Step 2: Success Message */}
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#56E0A0] to-[#4ECDC4]
                                               rounded-2xl shadow-2xl mb-6 transform hover:scale-105 transition-all duration-300">
                                    <MdCheck className="text-white text-2xl" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Check Your Email</h2>
                                <p className="text-gray-600 text-lg mb-6">
                                    We've sent password reset instructions to
                                </p>
                                <p className="text-[#FF6B9D] font-semibold text-lg break-all mb-8">{email}</p>

                                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                                    <h3 className="font-semibold text-gray-900 mb-3">What's next?</h3>
                                    <ul className="text-sm text-gray-600 space-y-2 text-left">
                                        <li className="flex items-center">
                                            <div className="w-2 h-2 bg-[#FF6B9D] rounded-full mr-3"></div>
                                            Check your email inbox (and spam folder)
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-2 h-2 bg-[#FF6B9D] rounded-full mr-3"></div>
                                            Click the reset link in the email
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-2 h-2 bg-[#FF6B9D] rounded-full mr-3"></div>
                                            Create your new password
                                        </li>
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <button
                                        onClick={() => setStep(1)}
                                        className="w-full p-3 bg-gray-100 text-gray-700 rounded-xl font-medium
                                                 hover:bg-gray-200 transition-all duration-200"
                                    >
                                        Try Different Email
                                    </button>

                                    <Link
                                        href="/auth/login"
                                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900
                                                 font-medium transition-colors duration-200"
                                    >
                                        <MdArrowBack className="w-4 h-4" />
                                        Back to Login
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
