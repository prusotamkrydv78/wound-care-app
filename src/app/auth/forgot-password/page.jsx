'use client';
import { useActionState } from 'react';
import Link from 'next/link';
import { handleForgotPassword } from '@/actions/auth/forgot-password.auth';

export default function ForgotPassword() {
    const [form, formAction] = useActionState(handleForgotPassword)
 
    return (
        <div className="min-h-screen flex overflow-hidden">
            {/* Left Section */}
            <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 p-6 fixed h-screen">
                <div className="absolute inset-0 bg-pattern opacity-10"></div>

                <div className="relative z-10 w-full flex flex-col justify-between h-full">
                    {/* Top Content */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                <span className="text-white text-2xl font-bold">🔒</span>
                            </div>
                            <h2 className="text-white text-xl font-bold">Account Recovery</h2>
                        </div>

                        <div>
                            <h1 className="text-4xl font-bold text-white mb-4">Reset Your Password</h1>
                            <p className="text-blue-100 text-lg">Secure password recovery process for medical professionals</p>
                        </div>

                        {/* Recovery Steps */}
                        <div className="space-y-4 mt-8">
                            {[
                                { number: '01', title: 'Enter Email', desc: 'Provide your registered email address' },
                                { number: '02', title: 'Verify OTP', desc: 'Enter the code sent to your email' },
                                { number: '03', title: 'New Password', desc: 'Create a strong new password' }
                            ].map((step, i) => (
                                <div key={i} className="flex items-start space-x-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                                    <span className="text-cyan-300 font-mono font-bold">{step.number}</span>
                                    <div>
                                        <h3 className="text-white font-semibold">{step.title}</h3>
                                        <p className="text-blue-100 text-sm">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Security Features */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: '🔐', title: 'Secure Reset', desc: 'End-to-end encrypted process' },
                                { icon: '⚡', title: 'Quick Process', desc: 'Takes less than 2 minutes' },
                                { icon: '🛡️', title: 'HIPAA Compliant', desc: 'Medical-grade security' },
                                { icon: '📱', title: 'Mobile Friendly', desc: 'Reset from any device' }
                            ].map((feature, i) => (
                                <div key={i} className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-2xl">{feature.icon}</span>
                                        <div>
                                            <h3 className="text-white text-sm font-semibold">{feature.title}</h3>
                                            <p className="text-blue-100 text-xs">{feature.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center">
                                    <span className="text-green-300 text-xl">✓</span>
                                </div>
                                <p className="text-white text-sm">
                                    <span className="font-semibold">99.9% Success Rate</span> in password recovery
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section - Form */}
            <div className=" bg-white w-full lg:w-1/2 lg:ml-[50%] xl:ml-[60%] flex items-center justify-center p-6">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl 
                           flex items-center justify-center shadow-xl mb-6">
                            <span className="text-white text-3xl">🔑</span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Forgot Password?</h2>
                        <p className="mt-3 text-gray-600">
                            No worries! Enter your email and we'll send you reset instructions.
                        </p>
                    </div>

                    <form action={formAction} className="mt-8 space-y-6">
                        <div>
                            <label className="text-gray-700 font-medium block mb-2">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    required
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 
                           bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 
                           transition-all text-gray-900"
                                    placeholder="Enter your email"

                                    name='email'
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full p-4 bg-gradient-to-r from-blue-600 to-cyan-500 
                       text-white rounded-xl font-medium text-lg
                       hover:from-blue-700 hover:to-cyan-600
                       focus:outline-none focus:ring-4 focus:ring-blue-100
                       transform transition-all duration-200 hover:scale-[1.01]
                       shadow-xl"
                        >
                            Send Reset Code
                        </button>
                    </form>

                        <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                            <p className="text-green-800 text-center">
                                If an account exists with this email, you'll receive password reset instructions shortly.
                            </p>
                        </div>
                 

                    <div className="text-center space-y-4">
                        <p className="text-gray-600">
                            Remember your password?{' '}
                            <Link href="/auth/login" className="text-blue-600 hover:text-blue-700 font-medium">
                                Back to Login
                            </Link>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}
