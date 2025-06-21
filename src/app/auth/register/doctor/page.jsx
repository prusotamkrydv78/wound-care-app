'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { MdLocalHospital, MdArrowBack, MdArrowForward, MdCheck, MdVerifiedUser } from 'react-icons/md';

export default function DoctorRegistrationPage() {
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

    // Professional Info
    specialization: '',
    licenseNumber: '',
    licenseState: '',
    npiNumber: '',
    yearsOfExperience: '',
    medicalSchool: '',
    hospitalAffiliations: '',

    // Consent
    termsConsent: false,
    hipaaConsent: false,
    marketingConsent: false
  });

  const steps = [
    { id: 1, title: 'Basic Info', description: 'Personal details' },
    { id: 2, title: 'Professional', description: 'Medical credentials' },
    { id: 3, title: 'Verification', description: 'Consent & verification' }
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
        role: 'doctor',
        consents: {
          terms: formData.termsConsent,
          hipaa: formData.hipaaConsent,
          marketing: formData.marketingConsent,
          timestamp: new Date().toISOString()
        }
      };

      const response = await fetch('/api/auth/register-doctor', {
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
              ? 'bg-[#6B7AFF] border-[#6B7AFF] text-white'
              : 'border-[#DDE1EC] text-gray-400'}`}>
            {currentStep > step.id ? (
              <MdCheck className="w-5 h-5" />
            ) : (
              <span className="text-sm font-medium">{step.id}</span>
            )}
          </div>
          {index < steps.length - 1 && (
            <div className={`w-16 h-0.5 mx-2 
              ${currentStep > step.id ? 'bg-[#6B7AFF]' : 'bg-[#DDE1EC]'}`} />
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
                     bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10 
                     transition-all text-gray-900"
            placeholder="Dr. Sarah Johnson"
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
                     bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10 
                     transition-all text-gray-900"
            placeholder="doctor@hospital.com"
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
                     bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10 
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
                     bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10 
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
                     bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10 
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
                     bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10 
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
                     bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10 
                     transition-all text-gray-900"
            placeholder="••••••••"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderProfessionalInfo = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Information</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Medical Specialization *</label>
          <select
            name="specialization"
            value={formData.specialization}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10 
                     transition-all text-gray-900"
            required
          >
            <option value="">Select Specialization</option>
            <option value="family-medicine">Family Medicine</option>
            <option value="internal-medicine">Internal Medicine</option>
            <option value="cardiology">Cardiology</option>
            <option value="dermatology">Dermatology</option>
            <option value="emergency-medicine">Emergency Medicine</option>
            <option value="orthopedics">Orthopedics</option>
            <option value="pediatrics">Pediatrics</option>
            <option value="psychiatry">Psychiatry</option>
            <option value="surgery">Surgery</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience *</label>
          <select
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10 
                     transition-all text-gray-900"
            required
          >
            <option value="">Select Experience</option>
            <option value="0-2">0-2 years</option>
            <option value="3-5">3-5 years</option>
            <option value="6-10">6-10 years</option>
            <option value="11-15">11-15 years</option>
            <option value="16-20">16-20 years</option>
            <option value="20+">20+ years</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">License Number *</label>
          <input
            type="text"
            name="licenseNumber"
            value={formData.licenseNumber}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10 
                     transition-all text-gray-900"
            placeholder="MD123456"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">License State *</label>
          <input
            type="text"
            name="licenseState"
            value={formData.licenseState}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10 
                     transition-all text-gray-900"
            placeholder="CA"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">NPI Number</label>
          <input
            type="text"
            name="npiNumber"
            value={formData.npiNumber}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10 
                     transition-all text-gray-900"
            placeholder="1234567890"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Medical School</label>
          <input
            type="text"
            name="medicalSchool"
            value={formData.medicalSchool}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10 
                     transition-all text-gray-900"
            placeholder="Harvard Medical School"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Hospital Affiliations</label>
          <textarea
            name="hospitalAffiliations"
            value={formData.hospitalAffiliations}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10 
                     transition-all text-gray-900"
            placeholder="List your hospital affiliations..."
          />
        </div>
      </div>
    </div>
  );
  const renderVerificationStep = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Consent & Verification</h3>
      <div className="bg-[#F6F8FF] p-6 rounded-xl border border-[#DDE1EC]">
        <div className="flex items-start mb-4">
          <input
            type="checkbox"
            name="termsConsent"
            id="termsConsent"
            checked={formData.termsConsent}
            onChange={handleInputChange}
            className="mt-1 accent-[#6B7AFF] w-5 h-5"
            required
          />
          <label htmlFor="termsConsent" className="ml-3 text-gray-700 text-sm">
            I agree to the{' '}
            <Link href="/terms" className="text-[#6B7AFF] underline hover:text-[#4B5AFF]" target="_blank">
              Terms of Service
            </Link>
            {' '}and{' '}
            <Link href="/privacy" className="text-[#6B7AFF] underline hover:text-[#4B5AFF]" target="_blank">
              Privacy Policy
            </Link>
            . <span className="text-red-500">*</span>
          </label>
        </div>
        <div className="flex items-start mb-4">
          <input
            type="checkbox"
            name="hipaaConsent"
            id="hipaaConsent"
            checked={formData.hipaaConsent}
            onChange={handleInputChange}
            className="mt-1 accent-[#6B7AFF] w-5 h-5"
            required
          />
          <label htmlFor="hipaaConsent" className="ml-3 text-gray-700 text-sm">
            I consent to the processing of my information in accordance with HIPAA regulations. <span className="text-red-500">*</span>
          </label>
        </div>
        <div className="flex items-start">
          <input
            type="checkbox"
            name="marketingConsent"
            id="marketingConsent"
            checked={formData.marketingConsent}
            onChange={handleInputChange}
            className="mt-1 accent-[#6B7AFF] w-5 h-5"
          />
          <label htmlFor="marketingConsent" className="ml-3 text-gray-700 text-sm">
            I would like to receive updates and marketing communications from AssistIQ.
          </label>
        </div>
      </div>
      <div className="bg-[#FFF9E6] border border-[#FFE6A6] rounded-xl p-4 flex items-start mt-4">
        <span className="text-2xl mr-3">🔒</span>
        <div>
          <h4 className="font-semibold text-gray-800 mb-1">Your Data is Secure</h4>
          <p className="text-gray-600 text-sm">
            All information is encrypted and handled in compliance with HIPAA and industry standards.
          </p>
        </div>
      </div>
    </div>
  );
  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Left Section - Doctor Theme */}
      <div className="hidden lg:flex lg:w-1/2  bg-gradient-to-br from-[#6B7AFF] via-[#8B6DFF] to-[#5698FF] p-8 fixed h-screen">
        <div className="relative z-10 w-full flex flex-col justify-center max-w-lg mx-auto text-white">
          {/* Logo */}
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl 
                           flex items-center justify-center mr-3">
              <MdLocalHospital className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Doctor Registration</h1>
              <p className="text-white/80">Join AssistIQ as a Healthcare Professional</p>
            </div>
          </div>

          {/* Hero Content */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Enhance Your Practice <br />
              <span className="text-white/90">with AI</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Join thousands of healthcare professionals using AI to improve patient
              outcomes, streamline workflows, and advance medical care.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                <MdVerifiedUser className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Professional Verification</h3>
                <p className="text-white/80 text-sm">Credentials verified within 24-48 hours</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                <span className="text-white">🤖</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Advanced AI Tools</h3>
                <p className="text-white/80 text-sm">Clinical decision support and diagnostic assistance</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                <span className="text-white">📊</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Analytics & Insights</h3>
                <p className="text-white/80 text-sm">Comprehensive patient analytics and reporting</p>
              </div>
            </div>
          </div>

          {/* Verification Notice */}
          <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm mt-8">
            <h4 className="font-medium text-white mb-2">Verification Process</h4>
            <ul className="text-sm text-white/80 space-y-1">
              <li>• Professional credentials review</li>
              <li>• License verification</li>
              <li>• Background check</li>
              <li>• Account activation within 24-48 hours</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Section - Registration Form */}
      <div className="w-full l] xl:ml-[50%] pt overflow-y-auto min-h-screen bg-white">
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
            {currentStep === 2 && renderProfessionalInfo()}
            {currentStep === 3 && renderVerificationStep()}
            {/* Verification step would be implemented here */}

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
                  className="flex items-center gap-2 px-6 py-3 bg-[#6B7AFF] text-white rounded-xl 
                           font-medium hover:bg-[#6B7AFF]/90 transition-all"
                >
                  Next
                  <MdArrowForward className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center gap-2 px-6 py-3 bg-[#6B7AFF] text-white rounded-xl 
                           font-medium hover:bg-[#6B7AFF]/90 transition-all disabled:opacity-50"
                >
                  {isLoading ? 'Creating Account...' : 'Submit for Verification'}
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
