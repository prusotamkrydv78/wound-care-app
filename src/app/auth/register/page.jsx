'use client';
import Link from 'next/link';
import { useActionState, useState } from 'react';
import RegisterUser from '@/actions/auth/register.auth';
import { MdPerson, MdEmail, MdPhone, MdLock, MdVisibility, MdVisibilityOff, MdArrowForward, MdArrowBack, MdCheck, MdSecurity, MdSpeed, MdVerifiedUser, MdCalendarToday, MdWc } from 'react-icons/md';

export default function Register() {
  const [state, formAction] = useActionState(RegisterUser, { error: null });
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Mock form data for demo
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    gender: '',
    dateOfBirth: '',
    role: '',
    termsAccepted: false,
    marketingConsent: false
  });

  const steps = [
    { id: 1, title: 'Personal Info', description: 'Basic details' },
    { id: 2, title: 'Account Setup', description: 'Security & preferences' },
    { id: 3, title: 'Verification', description: 'Complete registration' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate loading for demo
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen flex overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Left Section - Enhanced AssistIQ Theme */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 bg-gradient-to-br from-[#56E0A0] via-[#4ECDC4] to-[#45B7D1] p-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 w-full flex flex-col justify-center max-w-lg mx-auto text-white">
          {/* Enhanced Logo */}
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

          {/* Hero Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Join the Future of
                <span className="block bg-gradient-to-r from-white via-white/95 to-white/90 bg-clip-text text-transparent">
                  Professional Work
                </span>
              </h2>
              <p className="text-white/80 text-xl leading-relaxed">
                Create your account and unlock the power of AI-driven productivity tools
                designed for modern professionals.
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
                    <h3 className="text-white font-bold text-lg">Secure Registration</h3>
                    <p className="text-white/70 text-sm">Enterprise-grade data protection</p>
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
                    <h3 className="text-white font-bold text-lg">Quick Setup</h3>
                    <p className="text-white/70 text-sm">Get started in under 3 minutes</p>
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
                    <h3 className="text-white font-bold text-lg">Instant Access</h3>
                    <p className="text-white/70 text-sm">Start using AI tools immediately</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Statistics */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/20">
              <div className="text-center group">
                <div className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">50K+</div>
                <div className="text-white/70 text-sm">Professionals</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">99.9%</div>
                <div className="text-white/70 text-sm">Uptime</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-white/70 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Enhanced Registration Form */}
      <div className="w-full lg:w-1/2   overflow-y-auto min-h-screen bg-white relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#56E0A0]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#4ECDC4]/5 to-transparent rounded-full blur-3xl"></div>

        <div className="w-full max-w-lg mx-auto p-8 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#56E0A0] to-[#4ECDC4]
                           rounded-2xl shadow-2xl mb-6 transform hover:scale-105 transition-all duration-300
                           hover:shadow-3xl hover:rotate-3">
              <span className="text-white text-2xl font-bold">A</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Account</h1>
            <p className="text-gray-600 text-lg">Join thousands of professionals using AI</p>
          </div>

          {/* Step Indicator */}
          <div className="flex items-center justify-center mb-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300
                  ${currentStep >= step.id
                    ? 'bg-[#56E0A0] border-[#56E0A0] text-white shadow-lg'
                    : 'border-gray-300 text-gray-400 bg-white'}`}>
                  {currentStep > step.id ? (
                    <MdCheck className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-medium">{step.id}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-2 transition-all duration-300
                    ${currentStep > step.id ? 'bg-[#56E0A0]' : 'bg-gray-300'}`} />
                )}
              </div>
            ))}
          </div>

          {/* Step Title */}
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-gray-900">{steps[currentStep - 1]?.title}</h2>
            <p className="text-gray-600">{steps[currentStep - 1]?.description}</p>
          </div>
          {/* Enhanced Multi-Step Form */}
          <form action={formAction} onSubmit={handleSubmit} className="space-y-6">
            {state?.error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-600 text-sm font-medium">{state.error}</p>
              </div>
            )}

            {/* Step 1: Personal Info */}
            {currentStep === 1 && (
              <div className="space-y-5">
                <div className="group">
                  <label className="text-gray-700 font-semibold block mb-3 text-sm uppercase tracking-wide">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none
                                   group-focus-within:text-[#56E0A0] transition-colors duration-200">
                      <MdPerson className="h-5 w-5 text-gray-400 group-focus-within:text-[#56E0A0]" />
                    </div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200
                               bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10
                               transition-all duration-300 text-gray-900 placeholder-gray-400
                               hover:border-gray-300 focus:outline-none text-lg"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="text-gray-700 font-semibold block mb-3 text-sm uppercase tracking-wide">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none
                                   group-focus-within:text-[#56E0A0] transition-colors duration-200">
                      <MdEmail className="h-5 w-5 text-gray-400 group-focus-within:text-[#56E0A0]" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200
                               bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10
                               transition-all duration-300 text-gray-900 placeholder-gray-400
                               hover:border-gray-300 focus:outline-none text-lg"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="text-gray-700 font-semibold block mb-3 text-sm uppercase tracking-wide">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none
                                   group-focus-within:text-[#56E0A0] transition-colors duration-200">
                      <MdPhone className="h-5 w-5 text-gray-400 group-focus-within:text-[#56E0A0]" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200
                               bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10
                               transition-all duration-300 text-gray-900 placeholder-gray-400
                               hover:border-gray-300 focus:outline-none text-lg"
                      placeholder="(123) 456-7890"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="text-gray-700 font-semibold block mb-3 text-sm uppercase tracking-wide">
                      Date of Birth
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none
                                     group-focus-within:text-[#56E0A0] transition-colors duration-200">
                        <MdCalendarToday className="h-5 w-5 text-gray-400 group-focus-within:text-[#56E0A0]" />
                      </div>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200
                                 bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10
                                 transition-all duration-300 text-gray-900
                                 hover:border-gray-300 focus:outline-none text-lg"
                        required
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="text-gray-700 font-semibold block mb-3 text-sm uppercase tracking-wide">
                      Gender
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none
                                     group-focus-within:text-[#56E0A0] transition-colors duration-200">
                        <MdWc className="h-5 w-5 text-gray-400 group-focus-within:text-[#56E0A0]" />
                      </div>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200
                                 bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10
                                 transition-all duration-300 text-gray-900
                                 hover:border-gray-300 focus:outline-none text-lg"
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Account Setup */}
            {currentStep === 2 && (
              <div className="space-y-5">
                <div className="group">
                  <label className="text-gray-700 font-semibold block mb-3 text-sm uppercase tracking-wide">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none
                                   group-focus-within:text-[#56E0A0] transition-colors duration-200">
                      <MdLock className="h-5 w-5 text-gray-400 group-focus-within:text-[#56E0A0]" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-12 py-4 rounded-xl border-2 border-gray-200
                               bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10
                               transition-all duration-300 text-gray-900 placeholder-gray-400
                               hover:border-gray-300 focus:outline-none text-lg"
                      placeholder="Create a strong password"
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

                <div className="group">
                  <label className="text-gray-700 font-semibold block mb-3 text-sm uppercase tracking-wide">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none
                                   group-focus-within:text-[#56E0A0] transition-colors duration-200">
                      <MdLock className="h-5 w-5 text-gray-400 group-focus-within:text-[#56E0A0]" />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-12 py-4 rounded-xl border-2 border-gray-200
                               bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10
                               transition-all duration-300 text-gray-900 placeholder-gray-400
                               hover:border-gray-300 focus:outline-none text-lg"
                      placeholder="Confirm your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400
                               hover:text-gray-600 transition-colors duration-200"
                    >
                      {showConfirmPassword ? (
                        <MdVisibilityOff className="h-5 w-5" />
                      ) : (
                        <MdVisibility className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="group">
                  <label className="text-gray-700 font-semibold block mb-3 text-sm uppercase tracking-wide">
                    Role
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300
                        ${formData.role === 'patient'
                          ? 'border-[#56E0A0] bg-[#56E0A0]/5 shadow-lg'
                          : 'border-gray-200 hover:border-[#56E0A0]/50'}`}
                      onClick={() => setFormData(prev => ({ ...prev, role: 'patient' }))}
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 bg-[#56E0A0]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <MdPerson className="w-6 h-6 text-[#56E0A0]" />
                        </div>
                        <h4 className="font-semibold text-gray-900">Patient</h4>
                        <p className="text-sm text-gray-600">Access AI health assistance</p>
                      </div>
                    </div>

                    <div
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300
                        ${formData.role === 'doctor'
                          ? 'border-[#56E0A0] bg-[#56E0A0]/5 shadow-lg'
                          : 'border-gray-200 hover:border-[#56E0A0]/50'}`}
                      onClick={() => setFormData(prev => ({ ...prev, role: 'doctor' }))}
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 bg-[#56E0A0]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <MdVerifiedUser className="w-6 h-6 text-[#56E0A0]" />
                        </div>
                        <h4 className="font-semibold text-gray-900">Healthcare Professional</h4>
                        <p className="text-sm text-gray-600">Provide AI-enhanced care</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Verification */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#56E0A0]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MdCheck className="w-8 h-8 text-[#56E0A0]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Almost Done!</h3>
                  <p className="text-gray-600">Please review and accept our terms to complete your registration.</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleInputChange}
                      className="mt-1 w-5 h-5 text-[#56E0A0] border-2 border-gray-300 rounded
                               focus:ring-[#56E0A0] focus:ring-2"
                      required
                    />
                    <div>
                      <label className="text-sm font-medium text-gray-900">
                        Terms of Service & Privacy Policy *
                      </label>
                      <p className="text-sm text-gray-600">
                        I agree to the Terms of Service and Privacy Policy
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="marketingConsent"
                      checked={formData.marketingConsent}
                      onChange={handleInputChange}
                      className="mt-1 w-5 h-5 text-[#56E0A0] border-2 border-gray-300 rounded
                               focus:ring-[#56E0A0] focus:ring-2"
                    />
                    <div>
                      <label className="text-sm font-medium text-gray-900">
                        Marketing Communications
                      </label>
                      <p className="text-sm text-gray-600">
                        I would like to receive updates about new features and services (optional)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F8F9FF] border border-[#DDE1EC] rounded-xl p-4">
                  <h4 className="font-medium text-gray-900 mb-2">What happens next?</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Email verification will be sent to your registered email</li>
                    <li>• You can start using basic features immediately</li>
                    <li>• Complete your profile for full access</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all
                  ${currentStep === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
              >
                <MdArrowBack className="w-5 h-5" />
                Previous
              </button>

              {currentStep < steps.length ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center gap-2 px-6 py-3 bg-[#56E0A0] text-white rounded-xl
                           font-medium hover:bg-[#56E0A0]/90 transition-all shadow-lg hover:shadow-xl"
                >
                  Next
                  <MdArrowForward className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading || !formData.termsAccepted}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#56E0A0] to-[#4ECDC4]
                           text-white rounded-xl font-medium hover:shadow-xl
                           focus:outline-none focus:ring-4 focus:ring-[#56E0A0]/30
                           transform transition-all duration-300 hover:scale-[1.02]
                           disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none
                           relative overflow-hidden shadow-lg"
                >
                  <span className="relative z-10 flex items-center">
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Creating Account...
                      </>
                    ) : (
                      <>
                        Complete Registration
                        <MdCheck className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </span>
                </button>
              )}
            </div>
          </form>

          {/* Enhanced Footer */}
          <div className="mt-8 text-center space-y-4">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link
                href="/auth/login"
                className="text-[#56E0A0] hover:text-[#4ECDC4] font-semibold transition-colors duration-200
                         hover:underline decoration-2 underline-offset-2"
              >
                Sign in
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
