'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { MdPerson, MdArrowBack, MdArrowForward, MdCheck } from 'react-icons/md';

export default function PatientRegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const [formData, setFormData] = useState({
    // Basic Info
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    gender: '',
    dateOfBirth: '',
    
    // Contact Info
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Emergency Contact
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelation: '',
    
    // Medical Info (Optional)
    medicalConditions: '',
    allergies: '',
    currentMedications: '',
    
    // Consent
    termsConsent: false,
    hipaaConsent: false,
    marketingConsent: false
  });

  const steps = [
    { id: 1, title: 'Basic Info', description: 'Personal details' },
    { id: 2, title: 'Contact', description: 'Address & emergency contact' },
    { id: 3, title: 'Medical', description: 'Health information (optional)' },
    { id: 4, title: 'Consent', description: 'Terms & privacy' }
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
    setError('');

    try {
      // Validate passwords match
      if (formData.password !== formData.confirmPassword) {
        throw new Error('Passwords do not match');
      }

      // Validate required consents
      if (!formData.termsConsent || !formData.hipaaConsent) {
        throw new Error('Required consents must be accepted');
      }

      const registrationData = {
        ...formData,
        role: 'patient',
        consents: {
          terms: formData.termsConsent,
          hipaa: formData.hipaaConsent,
          marketing: formData.marketingConsent,
          timestamp: new Date().toISOString()
        }
      };

      const response = await fetch('/api/auth/register-patient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Registration failed');
      }

      // Redirect to OTP verification
      router.push(`/auth/otp-verification?email=${encodeURIComponent(formData.email)}&type=registration`);
      
    } catch (error) {
      console.error('Registration error:', error);
      setError(error.message || 'An error occurred during registration');
    } finally {
      setIsLoading(false);
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 
            ${currentStep >= step.id 
              ? 'bg-[#56E0A0] border-[#56E0A0] text-white' 
              : 'border-[#DDE1EC] text-gray-400'}`}>
            {currentStep > step.id ? (
              <MdCheck className="w-5 h-5" />
            ) : (
              <span className="text-sm font-medium">{step.id}</span>
            )}
          </div>
          {index < steps.length - 1 && (
            <div className={`w-16 h-0.5 mx-2 
              ${currentStep > step.id ? 'bg-[#56E0A0]' : 'bg-[#DDE1EC]'}`} />
          )}
        </div>
      ))}
    </div>
  );

  const renderBasicInfo = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 
                     transition-all text-gray-900"
            placeholder="John Doe"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 
                     transition-all text-gray-900"
            placeholder="john@example.com"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 
                     transition-all text-gray-900"
            placeholder="(123) 456-7890"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 
                     transition-all text-gray-900"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 
                     transition-all text-gray-900"
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 
                     transition-all text-gray-900"
            placeholder="••••••••"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password *</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#56E0A0] focus:ring-4 focus:ring-[#56E0A0]/10 
                     transition-all text-gray-900"
            placeholder="••••••••"
            required
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Left Section - Patient Theme */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 bg-gradient-to-br from-[#56E0A0] via-[#4ECDC4] to-[#45B7D1] p-8 fixed h-screen">
        <div className="relative z-10 w-full flex flex-col justify-center max-w-lg mx-auto text-white">
          {/* Logo */}
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl 
                           flex items-center justify-center mr-3">
              <MdPerson className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Patient Registration</h1>
              <p className="text-white/80">Join AssistIQ as a Patient</p>
            </div>
          </div>

          {/* Hero Content */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Your Health Journey <br />
              <span className="text-white/90">Starts Here</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Get personalized AI health insights, track your wellness, and connect 
              with healthcare professionals in a secure, HIPAA-compliant platform.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                <span className="text-white">🤖</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">AI Health Insights</h3>
                <p className="text-white/80 text-sm">Personalized recommendations based on your health data</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                <span className="text-white">🔒</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Secure & Private</h3>
                <p className="text-white/80 text-sm">Your health data is protected with enterprise-grade security</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                <span className="text-white">👨‍⚕️</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Connect with Doctors</h3>
                <p className="text-white/80 text-sm">Direct communication with verified healthcare professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Registration Form */}
      <div className="w-full lg:w-1/2 lg:ml-[50%] xl:ml-[60%] overflow-y-auto min-h-screen bg-white">
        <div className="w-full max-w-2xl mx-auto p-6">
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/auth/register-role"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all"
            >
              <MdArrowBack className="w-5 h-5" />
              Back to role selection
            </Link>
            <div className="text-sm text-gray-500">
              Step {currentStep} of {steps.length}
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-[#FF5656]/10 border border-[#FF5656]/20 rounded-xl">
              <p className="text-[#FF5656] text-sm font-medium">{error}</p>
            </div>
          )}

          {renderStepIndicator()}

          <form onSubmit={handleSubmit} className="space-y-6">
            {currentStep === 1 && renderBasicInfo()}
            {/* Additional steps would be implemented here */}
            
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
                           font-medium hover:bg-[#56E0A0]/90 transition-all"
                >
                  Next
                  <MdArrowForward className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center gap-2 px-6 py-3 bg-[#56E0A0] text-white rounded-xl 
                           font-medium hover:bg-[#56E0A0]/90 transition-all disabled:opacity-50"
                >
                  {isLoading ? 'Creating Account...' : 'Complete Registration'}
                  <MdCheck className="w-5 h-5" />
                </button>
              )}
            </div>
          </form>

          <div className="text-center mt-8 pt-6 border-t border-[#DDE1EC]">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-gray-900 hover:text-gray-700 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
