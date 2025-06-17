'use client';
import { useActionState, useState } from 'react';
import Link from 'next/link'; 
import { useSearchParams } from 'next/navigation';
import { createNewPassword } from '@/actions/auth/create-password.auth';

export default function CreateNewPassword() {
  const [form, formAction] = useActionState(createNewPassword);
  const searchParams = useSearchParams()
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    // Handle password reset logic
  };

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Left Section */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 p-6 fixed h-screen">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>

        <div className="relative z-10 w-full flex flex-col justify-between h-full">
          {/* Logo and Title */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h2 className="text-white text-xl font-bold">Reset Password</h2>
            </div>

            <div className="pt-4">
              <h1 className="text-3xl font-bold text-white">Create New Password</h1>
              <p className="text-blue-100 text-lg mt-2">
                Your new password must be different from previously used passwords
              </p>
            </div>

            {/* Password Requirements */}
            <div className="mt-8 space-y-4">
              <h3 className="text-white font-semibold">Password Requirements:</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '✓', text: 'Minimum 8 characters' },
                  { icon: '✓', text: 'At least one uppercase letter' },
                  { icon: '✓', text: 'At least one number' },
                  { icon: '✓', text: 'At least one special character' }
                ].map((req, i) => (
                  <div key={i} className="flex items-center space-x-2 text-blue-100">
                    <span className="text-green-300">{req.icon}</span>
                    <span className="text-sm">{req.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🛡️</span>
              <p className="text-white text-sm">
                Your password is encrypted with industry-leading security standards
              </p>
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
            <h2 className="text-3xl font-bold text-gray-900">Create New Password</h2>
            <p className="mt-3 text-gray-600">
              Please create a strong password for your account
            </p>
          </div>

          <form action={formAction} className="mt-8 space-y-6">
            <div>
              <label className="text-gray-700 font-medium block mb-2">New Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 
                           bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 
                           transition-all text-gray-900"
                  placeholder="Enter new password"
                  name="newPassword"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-700 font-medium block mb-2">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 
                           bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 
                           transition-all text-gray-900"
                  placeholder="Confirm new password"
                  name='confirmPassword' />
              </div>
            </div>
            <input type="hidden" name="emailToken" value={searchParams.get("token")} />

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-600 text-center">{error}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full p-4 bg-gradient-to-r from-blue-600 to-cyan-500 
                       text-white rounded-xl font-medium text-lg
                       hover:from-blue-700 hover:to-cyan-600
                       focus:outline-none focus:ring-4 focus:ring-blue-100
                       transform transition-all duration-200 hover:scale-[1.01]
                       shadow-xl"
            >
              Reset Password
            </button>
          </form>

          <div className="text-center">
            <Link
              href="/auth/login"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
