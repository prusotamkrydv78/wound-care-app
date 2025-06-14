'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    specialization: '',
    licenseNumber: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Medical Theme */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        
        <div className="relative z-10 w-full flex flex-col justify-between h-full">
          {/* Top Section - More Compact */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-bold">+</span>
                </div>
                <h2 className="text-white text-lg font-bold">WoundCare Pro</h2>
              </div>
              {/* Trust Badges */}
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">HIPAA Compliant</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">FDA Registered</span>
              </div>
            </div>

            <div className="pt-2">
              <h1 className="text-3xl font-bold text-white">Join Our Medical Network</h1>
              <p className="text-blue-100 text-base mt-2">Advanced wound care management platform for healthcare professionals</p>
            </div>

            {/* Quick Stats - Compact Row */}
            <div className="flex space-x-4 py-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-white text-sm">2000+ Active Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <span className="text-white text-sm">50+ Hospitals</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                <span className="text-white text-sm">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Middle Section - Features Grid */}
          <div className="grid grid-cols-2 gap-3 py-4">
            {[
              { icon: '🏥', title: 'Smart Care', desc: 'AI-powered diagnostics' },
              { icon: '📊', title: 'Analytics', desc: 'Real-time insights' },
              { icon: '🔒', title: 'Security', desc: 'End-to-end encryption' },
              { icon: '👥', title: 'Team Work', desc: 'Collaborative care' },
              { icon: '📱', title: 'Mobile App', desc: 'Work on the go' },
              { icon: '🎓', title: 'Training', desc: 'Continuous learning' }
            ].map((feature, i) => (
              <div key={i} className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">{feature.icon}</span>
                  <div>
                    <h3 className="text-white text-sm font-semibold">{feature.title}</h3>
                    <p className="text-blue-100 text-xs">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section - Compact Social Proof */}
          <div className="flex items-center justify-between bg-white/10 p-3 rounded-lg backdrop-blur-sm">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white/20 bg-blue-400"></div>
              ))}
            </div>
            <p className="text-white text-sm">
              <span className="font-semibold">500+</span> medical professionals joined this month
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Registration Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl 
                           flex items-center justify-center shadow-lg mb-4">
              <span className="text-white text-2xl font-bold">+</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
            <p className="text-gray-600">Join as a medical professional</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-700 font-medium block mb-2">First Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 
                             bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 
                             transition-all text-gray-900"
                    placeholder="John"
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-700 font-medium block mb-2">Last Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 
                             bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 
                             transition-all text-gray-900"
                    placeholder="Doe"
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>
            </div>

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
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="text-gray-700 font-medium block mb-2">Medical Specialization</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <select
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 
                           bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 
                           transition-all text-gray-900"
                  onChange={(e) => setFormData({...formData, specialization: e.target.value})}
                >
                  <option value="">Select Specialization</option>
                  <option value="wound-care">Wound Care Specialist</option>
                  <option value="surgeon">Surgeon</option>
                  <option value="nurse">Nurse Practitioner</option>
                  <option value="dermatologist">Dermatologist</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-gray-700 font-medium block mb-2">License Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 
                           bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 
                           transition-all text-gray-900"
                  placeholder="License number"
                  onChange={(e) => setFormData({...formData, licenseNumber: e.target.value})}
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
                  placeholder="••••••••"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
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
              Create Account
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-blue-600 hover:text-blue-700 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
