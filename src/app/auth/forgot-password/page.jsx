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
            <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 bg-gradient-to-br from-[#FF6B9D] via-[#C44569] to-[#8B6DFF] p-8 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>

                <div className="relative z-10 w-full flex flex-col justify-center max-w-lg mx-auto text-white">
                    {/* Enhanced Header */}
                    <div className="flex items-center space-x-4 mb-12 group">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center
                                       shadow-2xl border border-white/20 transform group-hover:scale-105 transition-all duration-500
                                       group-hover:rotate-3 group-hover:shadow-3xl">
                            <MdLock className="text-white text-2xl" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                                Account Recovery
                            </h1>
                            <p className="text-white/70 text-lg font-medium">Secure Password Reset</p>
                        </div>
                    </div>

                    {/* Hero Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-5xl font-bold mb-6 leading-tight">
                                Secure Password
                                <span className="block bg-gradient-to-r from-white via-white/95 to-white/90 bg-clip-text text-transparent">
                                    Recovery Process
                                </span>
                            </h2>
                            <p className="text-white/80 text-xl leading-relaxed">
                                Don't worry! We'll help you regain access to your account with our
                                secure, enterprise-grade password recovery system.
                            </p>
                        </div>

                        {/* Enhanced Recovery Steps */}
                        <div className="space-y-4 mt-12">
                            {[
                                { number: '01', title: 'Enter Email', desc: 'Provide your registered email address', icon: MdEmail },
                                { number: '02', title: 'Verify Code', desc: 'Enter the secure code sent to your email', icon: MdTimer },
                                { number: '03', title: 'New Password', desc: 'Create a strong new password', icon: MdLock }
                            ].map((stepItem, i) => {
                                const IconComponent = stepItem.icon;
                                return (
                                    <div key={i} className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20
                                                           hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center
                                                           group-hover:scale-110 transition-transform duration-300">
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <span className="text-white/60 font-mono text-sm">{stepItem.number}</span>
                                                    <h3 className="text-white font-bold text-lg">{stepItem.title}</h3>
                                                </div>
                                                <p className="text-white/80 text-sm">{stepItem.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Enhanced Security Features */}
                        <div className="grid grid-cols-1 gap-6 mt-12">
                            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20
                                           hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center
                                                   group-hover:scale-110 transition-transform duration-300">
                                        <MdSecurity className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg">Enterprise Security</h3>
                                        <p className="text-white/70 text-sm">Bank-grade encryption & protection</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20
                                           hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center
                                                   group-hover:scale-110 transition-transform duration-300">
                                        <MdRefresh className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg">Quick Recovery</h3>
                                        <p className="text-white/70 text-sm">Reset your password in under 2 minutes</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Success Rate */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mt-8">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-green-400/20 rounded-xl flex items-center justify-center">
                                    <MdCheck className="w-6 h-6 text-green-300" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">99.9% Success Rate</h3>
                                    <p className="text-white/70 text-sm">Trusted by thousands of professionals</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section - Enhanced Form */}
            <div className="bg-white w-full lg:w-1/2 lg:ml-[50%] xl:ml-[60%] flex items-center justify-center p-8 relative overflow-hidden">
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
