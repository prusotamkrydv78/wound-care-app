'use client';
import { useActionState, useState } from 'react';
import Link from 'next/link';
import { loginUser } from '@/actions/auth/login.auth';
import { MdVisibility, MdVisibilityOff, MdEmail, MdLock, MdArrowForward, MdSecurity, MdSpeed, MdVerifiedUser } from 'react-icons/md';

export default function Login() {
  const [state, formAction] = useActionState(loginUser);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    // Simulate loading state for demo
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen flex overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Left Section - Enhanced AssistIQ Theme */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 bg-gradient-to-br from-[#6B7AFF] via-[#8B6DFF] to-[#5698FF] p-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 w-full flex flex-col justify-center max-w-lg mx-auto text-white">
          {/* Logo with enhanced animation */}
          <div className="flex items-center space-x-4 mb-12 group">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center
                           shadow-2xl border border-white/20 transform group-hover:scale-105 transition-all duration-500
                           group-hover:rotate-3 group-hover:shadow-3xl">
              <span className="text-white text-3xl font-bold">A</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                AssistIQ
              </h1>
              <p className="text-white/70 text-lg font-medium">AI-Powered Professional Platform</p>
            </div>
          </div>

          {/* Hero Content with enhanced styling */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Welcome Back to the
                <span className="block bg-gradient-to-r from-white via-white/95 to-white/90 bg-clip-text text-transparent">
                  Future of Work
                </span>
              </h2>
              <p className="text-white/80 text-xl leading-relaxed">
                Continue your journey with AI-powered tools designed to enhance productivity
                and streamline professional workflows.
              </p>
            </div>

            {/* Enhanced Features Grid */}
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
                    <p className="text-white/70 text-sm">Bank-grade encryption & compliance</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20
                             hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center
                                 group-hover:scale-110 transition-transform duration-300">
                    <MdSpeed className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Lightning Fast</h3>
                    <p className="text-white/70 text-sm">AI responses in milliseconds</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20
                             hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center
                                 group-hover:scale-110 transition-transform duration-300">
                    <MdVerifiedUser className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Trusted by 50K+</h3>
                    <p className="text-white/70 text-sm">Professionals worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Statistics */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/20">
              <div className="text-center group">
                <div className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">99.9%</div>
                <div className="text-white/70 text-sm">Uptime</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-white/70 text-sm">Support</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">50K+</div>
                <div className="text-white/70 text-sm">Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Enhanced Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#6B7AFF]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#56E0A0]/5 to-transparent rounded-full blur-3xl"></div>

        <div className="w-full max-w-md relative z-10">
          {/* Enhanced Logo Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#6B7AFF] to-[#8B6DFF]
                           rounded-2xl shadow-2xl mb-6 transform hover:scale-105 transition-all duration-300
                           hover:shadow-3xl hover:rotate-3">
              <span className="text-white text-2xl font-bold">A</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600 text-lg">Continue your AI-powered journey</p>
          </div>

          {/* Enhanced Form */}
          <form action={formAction} onSubmit={handleSubmit} className="space-y-6">
            {state?.error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-600 text-sm font-medium">{state.error}</p>
              </div>
            )}

            <div className="space-y-5">
              <div className="group">
                <label className="text-gray-700 font-semibold block mb-3 text-sm uppercase tracking-wide">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none
                                 group-focus-within:text-[#6B7AFF] transition-colors duration-200">
                    <MdEmail className="h-5 w-5 text-gray-400 group-focus-within:text-[#6B7AFF]" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200
                             bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10
                             transition-all duration-300 text-gray-900 placeholder-gray-400
                             hover:border-gray-300 focus:outline-none text-lg"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <div className="group">
                <label className="text-gray-700 font-semibold block mb-3 text-sm uppercase tracking-wide">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none
                                 group-focus-within:text-[#6B7AFF] transition-colors duration-200">
                    <MdLock className="h-5 w-5 text-gray-400 group-focus-within:text-[#6B7AFF]" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-12 py-4 rounded-xl border-2 border-gray-200
                             bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10
                             transition-all duration-300 text-gray-900 placeholder-gray-400
                             hover:border-gray-300 focus:outline-none text-lg"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400
                             hover:text-gray-600 transition-colors duration-200"
                  >
                    {showPassword ? (
                      <MdVisibilityOff className="h-5 w-5" />
                    ) : (
                      <MdVisibility className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Enhanced Remember Me & Forgot Password */}
            <div className="flex items-center justify-between py-2">
              <label className="flex items-center group cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-5 h-5 rounded-lg border-2 border-gray-300 text-[#6B7AFF]
                           focus:ring-4 focus:ring-[#6B7AFF]/20 transition-all duration-200
                           group-hover:border-[#6B7AFF]"
                />
                <span className="ml-3 text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                  Remember me for 30 days
                </span>
              </label>
              <Link
                href="/auth/forgot-password"
                className="text-[#6B7AFF] hover:text-[#5A6AFF] font-semibold transition-colors duration-200
                         hover:underline decoration-2 underline-offset-2"
              >
                Forgot password?
              </Link>
            </div>

            {/* Enhanced Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
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
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign in to AssistIQ
                    <MdArrowForward className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#5A6AFF] to-[#7B5DFF] opacity-0
                             group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>

          {/* Enhanced Footer */}
          <div className="mt-8 text-center space-y-4">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link
                href="/auth/register"
                className="text-[#6B7AFF] hover:text-[#5A6AFF] font-semibold transition-colors duration-200
                         hover:underline decoration-2 underline-offset-2"
              >
                Create Account
              </Link>
            </p>

            <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-100">
              <Link
                href="/local/privacy"
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/local/terms"
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/local/support"
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
