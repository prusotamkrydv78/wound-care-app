'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import MultiStepRegistration from '@/components/auth/MultiStepRegistration';

export default function EnhancedRegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegistration = async (formData) => {
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

      // Prepare data for API
      const registrationData = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        gender: formData.gender,
        dateOfBirth: formData.dateOfBirth,
        role: formData.role,
        
        // Role-specific data
        ...(formData.role === 'patient' && {
          patientInfo: {
            address: formData.address,
            city: formData.city,
            state: formData.state,
            zipCode: formData.zipCode,
            emergencyContact: {
              name: formData.emergencyContactName,
              phone: formData.emergencyContactPhone,
              relation: formData.emergencyContactRelation
            },
            insurance: {
              provider: formData.insuranceProvider,
              policyNumber: formData.insurancePolicyNumber,
              groupNumber: formData.insuranceGroupNumber
            },
            medical: {
              conditions: formData.medicalConditions,
              medications: formData.currentMedications,
              allergies: formData.allergies,
              primaryCarePhysician: formData.primaryCarePhysician,
              preferredHospital: formData.preferredHospital
            }
          }
        }),
        
        ...(formData.role === 'doctor' && {
          doctorInfo: {
            specialization: formData.specialization,
            licenseNumber: formData.licenseNumber,
            licenseState: formData.licenseState,
            npiNumber: formData.npiNumber,
            deaNumber: formData.deaNumber,
            education: {
              medicalSchool: formData.medicalSchool,
              graduationYear: formData.graduationYear,
              residencyProgram: formData.residencyProgram,
              fellowshipProgram: formData.fellowshipProgram
            },
            certifications: formData.boardCertifications,
            affiliations: formData.hospitalAffiliations,
            experience: formData.yearsOfExperience,
            practiceType: formData.practiceType
          }
        }),
        
        // Consent tracking
        consents: {
          terms: formData.termsConsent,
          hipaa: formData.hipaaConsent,
          marketing: formData.marketingConsent,
          timestamp: new Date().toISOString()
        }
      };

      const response = await fetch('/api/auth/register-enhanced', {
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

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Left Section - AssistIQ Theme */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 p-8 fixed h-screen">
        <div className="relative z-10 w-full flex flex-col justify-center max-w-lg mx-auto text-white">
          {/* Logo */}
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl 
                           flex items-center justify-center mr-3">
              <span className="text-white text-2xl font-bold">A</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">AssistIQ</h1>
              <p className="text-white/80">AI-Powered Professional Platform</p>
            </div>
          </div>

          {/* Hero Content */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Complete Professional <br />
              <span className="text-white/90">Registration</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Join thousands of professionals who trust AssistIQ for their AI assistance needs. 
              Complete registration with role-specific verification.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                <span className="text-white">🔒</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Secure Verification</h3>
                <p className="text-white/80 text-sm">Professional credentials verified within 24-48 hours</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                <span className="text-white">⚡</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Instant Access</h3>
                <p className="text-white/80 text-sm">Start using basic features immediately after registration</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                <span className="text-white">🛡️</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">HIPAA Compliant</h3>
                <p className="text-white/80 text-sm">Enterprise-grade security for healthcare professionals</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-white/80 text-sm">Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-white/80 text-sm">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-white/80 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Registration Form */}
      <div className="w-full lg:w-1/2 lg:ml-[50%] xl:ml-[60%] overflow-y-auto min-h-screen bg-white">
        <div className="w-full max-w-4xl mx-auto p-6 bg-white">
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B9D] to-[#C44569] rounded-xl 
                           flex items-center justify-center shadow-lg mb-4">
              <span className="text-white text-2xl font-bold">A</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Enhanced Registration</h1>
            <p className="text-gray-600">Complete professional registration with verification</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-[#FF5656]/10 border border-[#FF5656]/20 rounded-xl">
              <p className="text-[#FF5656] text-sm font-medium">{error}</p>
            </div>
          )}

          <MultiStepRegistration 
            onSubmit={handleRegistration}
            disabled={isLoading}
          />

          <div className="text-center mt-8 pt-6 border-t border-[#DDE1EC]">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-gray-900 hover:text-gray-700 font-medium">
                Sign in
              </Link>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Prefer simple registration?{' '}
              <Link href="/auth/register" className="text-gray-700 hover:text-gray-900 font-medium">
                Use basic form
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
