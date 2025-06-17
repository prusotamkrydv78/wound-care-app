'use client';
import { useActionState, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { loginUser } from '@/actions/auth/login.auth';

export default function Login() {
  const [state, formAction] = useActionState(loginUser);




  return (
    <div className="min-h-screen flex">
      {/* Left Section - Medical Theme */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>

        <div className="relative z-10 w-full flex flex-col justify-between h-full">
          {/* Top Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">+</span>
              </div>
              <h2 className="text-white text-xl font-bold">WoundCare Pro</h2>
            </div>

            <div>
              <h1 className="text-4xl font-bold text-white mb-3">
                Advanced Healthcare<br />Management Platform
              </h1>
              <p className="text-blue-100 text-lg max-w-xl">
                Streamline your medical practice with our comprehensive wound care system.
              </p>
            </div>

            {/* Statistics - More Compact */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-blue-100 text-sm">Patient Satisfaction</div>
              </div>
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-blue-100 text-sm">Care Available</div>
              </div>
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-white mb-1">50k+</div>
                <div className="text-blue-100 text-sm">Medical Professionals</div>
              </div>
            </div>
          </div>

          {/* Middle Section - Features */}
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">Real-time Monitoring</h3>
              </div>
              <p className="text-blue-100 text-sm">Advanced imaging and documentation tools</p>
            </div>

            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">Smart Treatment</h3>
              </div>
              <p className="text-blue-100 text-sm">AI-powered treatment recommendations</p>
            </div>
          </div>

          {/* Bottom Section - Compact Testimonial */}
          <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
            <p className="text-blue-50 text-sm italic mb-3">
              "This platform has revolutionized how we manage wound care and improved our patient outcomes significantly."
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-white/20"></div>
              <div>
                <div className="text-white text-sm font-medium">Dr. Sarah Mitchell</div>
                <div className="text-blue-200 text-xs">Chief of Surgery</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Logo - More Compact */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl 
                          flex items-center justify-center shadow-lg mb-4">
              <span className="text-white text-2xl font-bold">+</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your medical account</p>
          </div>

          {/* Form - More Compact */}
          <form action={formAction} className="space-y-4">
            <div className="space-y-4">
              <div>
                <label className="text-gray-700 font-medium block mb-2">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 
                             bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 
                             transition-all text-gray-900"
                    placeholder="doctor@hospital.com"
                    name='email'
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-700 font-medium block mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    type="password"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 
                             bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 
                             transition-all text-gray-900"
                    placeholder="Enter your password"
                    name='password'
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-2 border-gray-300 
                           text-blue-500 focus:ring-4 focus:ring-blue-100"
                />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <Link
                href="/auth/forgot-password"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Forgot password?
              </Link>
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
              Sign in
            </button>
          </form>

          <p className="text-center text-gray-600">
            Don't have an account?{' '}
            <Link href="/auth/register" className="text-blue-600 hover:text-blue-700 font-medium">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
