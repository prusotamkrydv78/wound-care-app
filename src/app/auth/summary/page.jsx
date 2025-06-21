'use client';

import Link from 'next/link';
import { MdCheck, MdArrowForward, MdSecurity, MdVerifiedUser, MdPeople, MdDashboard } from 'react-icons/md';

export default function AuthSummaryPage() {
  const features = [
    {
      title: 'Enhanced Registration',
      description: 'Multi-step registration with role-specific fields',
      status: 'completed',
      items: [
        'Basic information collection',
        'Role selection (Patient/Doctor)',
        'Professional credentials for doctors',
        'Patient medical information',
        'HIPAA consent tracking',
        'Email verification with OTP'
      ]
    },
    {
      title: 'Professional Verification',
      description: 'Comprehensive doctor verification system',
      status: 'completed',
      items: [
        'License number validation',
        'Medical specialization tracking',
        'NPI number collection',
        'Medical school information',
        'Hospital affiliations',
        'Admin verification dashboard'
      ]
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security features',
      status: 'completed',
      items: [
        'Password strength validation',
        'Secure password hashing (bcrypt)',
        'JWT token-based OTP verification',
        'Session management',
        'HIPAA compliance tracking',
        'Audit logging'
      ]
    },
    {
      title: 'User Experience',
      description: 'Modern, accessible authentication UI',
      status: 'completed',
      items: [
        'AssistIQ design system integration',
        'Responsive multi-step forms',
        'Real-time validation',
        'Progress indicators',
        'Error handling',
        'Mobile-friendly design'
      ]
    }
  ];

  const authPages = [
    {
      title: 'Basic Registration',
      description: 'Simple registration form',
      href: '/auth/register',
      type: 'basic'
    },
    {
      title: 'Enhanced Registration',
      description: 'Multi-step professional registration',
      href: '/auth/register-enhanced',
      type: 'enhanced'
    },
    {
      title: 'Login',
      description: 'User authentication',
      href: '/auth/login',
      type: 'basic'
    },
    {
      title: 'OTP Verification',
      description: 'Email verification system',
      href: '/auth/otp-verification',
      type: 'basic'
    },
    {
      title: 'Forgot Password',
      description: 'Password recovery',
      href: '/auth/forgot-password',
      type: 'basic'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-[#DDE1EC]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Authentication System</h1>
              <p className="text-gray-600 mt-2">Enhanced healthcare authentication with professional verification</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-[#56E0A0]/10 border border-[#56E0A0]/20 rounded-xl px-4 py-2">
                <span className="text-[#56E0A0] font-medium">✓ All Features Complete</span>
              </div>
              <Link
                href="/admin/dashboard"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl 
                         font-medium hover:bg-gray-800 transition-all"
              >
                <MdDashboard className="w-5 h-5" />
                Admin Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Features Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl border border-[#DDE1EC] p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 mt-1">{feature.description}</p>
                </div>
                <div className="bg-[#56E0A0]/10 rounded-lg p-2">
                  <MdCheck className="w-6 h-6 text-[#56E0A0]" />
                </div>
              </div>
              
              <div className="space-y-2">
                {feature.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-3">
                    <MdCheck className="w-4 h-4 text-[#56E0A0] flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Authentication Pages */}
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Authentication Pages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {authPages.map((page, index) => (
              <Link
                key={index}
                href={page.href}
                className="group p-6 border border-[#DDE1EC] rounded-xl hover:border-[#6B7AFF] 
                         hover:bg-[#6B7AFF]/5 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#6B7AFF]">
                    {page.title}
                  </h3>
                  <div className={`px-2 py-1 rounded text-xs font-medium
                    ${page.type === 'enhanced' 
                      ? 'bg-[#6B7AFF]/10 text-[#6B7AFF]' 
                      : 'bg-gray-100 text-gray-600'}`}>
                    {page.type}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{page.description}</p>
                <div className="flex items-center text-[#6B7AFF] text-sm font-medium">
                  View Page
                  <MdArrowForward className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Technical Implementation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
            <div className="flex items-center space-x-3 mb-4">
              <MdSecurity className="w-8 h-8 text-[#6B7AFF]" />
              <h3 className="text-lg font-semibold text-gray-900">Security</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• bcrypt password hashing</li>
              <li>• JWT token verification</li>
              <li>• Session management</li>
              <li>• Input validation</li>
              <li>• CSRF protection</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
            <div className="flex items-center space-x-3 mb-4">
              <MdVerifiedUser className="w-8 h-8 text-[#56E0A0]" />
              <h3 className="text-lg font-semibold text-gray-900">Verification</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Email OTP verification</li>
              <li>• Professional credential checks</li>
              <li>• Admin approval workflow</li>
              <li>• License validation</li>
              <li>• Document upload support</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
            <div className="flex items-center space-x-3 mb-4">
              <MdPeople className="w-8 h-8 text-[#FFE27A]" />
              <h3 className="text-lg font-semibold text-gray-900">User Management</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Role-based access control</li>
              <li>• Profile completeness tracking</li>
              <li>• Account status management</li>
              <li>• Consent tracking</li>
              <li>• Audit logging</li>
            </ul>
          </div>
        </div>

        {/* Database Schema */}
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Enhanced Database Schema</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Core User Fields</h3>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                <div className="space-y-1 text-gray-700">
                  <div>fullName: String</div>
                  <div>email: String (unique)</div>
                  <div>phone: String</div>
                  <div>password: String (hashed)</div>
                  <div>gender: Enum</div>
                  <div>dateOfBirth: Date</div>
                  <div>role: Enum</div>
                  <div>accountStatus: Enum</div>
                  <div>isEmailVerified: Boolean</div>
                  <div>consents: Object</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Profiles</h3>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                <div className="space-y-1 text-gray-700">
                  <div className="text-[#6B7AFF]">doctorProfile:</div>
                  <div className="ml-4">specialization, licenseNumber</div>
                  <div className="ml-4">npiNumber, education</div>
                  <div className="ml-4">verificationStatus</div>
                  <div className="text-[#56E0A0] mt-2">patientProfile:</div>
                  <div className="ml-4">address, emergencyContact</div>
                  <div className="ml-4">insurance, medical</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
