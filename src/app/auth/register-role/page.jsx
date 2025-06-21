'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MdPerson, MdLocalHospital, MdArrowForward, MdCheck, MdSecurity } from 'react-icons/md';

export default function RoleSelectionPage() {
  const [selectedRole, setSelectedRole] = useState('');

  const roles = [
    {
      id: 'patient',
      title: 'Patient',
      subtitle: 'Access AI Health Assistance',
      description: 'Get personalized health insights, track your wellness journey, and connect with healthcare professionals.',
      icon: MdPerson,
      color: 'from-[#56E0A0] to-[#4ECDC4]',
      features: [
        'AI-powered health insights',
        'Symptom tracking & analysis',
        'Secure health record management',
        'Direct communication with doctors',
        'Appointment scheduling',
        'Medication reminders'
      ],
      registrationTime: '2-3 minutes',
      verificationRequired: false,
      href: '/auth/register/patient'
    },
    {
      id: 'doctor',
      title: 'Healthcare Professional',
      subtitle: 'Provide AI-Enhanced Care',
      description: 'Leverage advanced AI tools to enhance patient care, streamline workflows, and improve clinical outcomes.',
      icon: MdLocalHospital,
      color: 'from-[#6B7AFF] to-[#8B6DFF]',
      features: [
        'Advanced diagnostic AI tools',
        'Patient management dashboard',
        'Clinical decision support',
        'Secure patient communication',
        'Analytics & reporting',
        'Continuing education resources'
      ],
      registrationTime: '5-7 minutes',
      verificationRequired: true,
      href: '/auth/register/doctor'
    }
  ];

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
              Choose Your <br />
              <span className="text-white/90">Professional Path</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Join thousands of healthcare professionals and patients who trust AssistIQ 
              for their AI-powered healthcare needs.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                <MdSecurity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">HIPAA Compliant</h3>
                <p className="text-white/80 text-sm">Enterprise-grade security for healthcare data</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                <span className="text-white">🤖</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">AI-Powered</h3>
                <p className="text-white/80 text-sm">Advanced artificial intelligence for better outcomes</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                <span className="text-white">⚡</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Instant Access</h3>
                <p className="text-white/80 text-sm">Start using basic features immediately</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-white/80 text-sm">Users</div>
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

      {/* Right Section - Role Selection */}
      <div className="w-full lg:w-1/2 lg:ml-[50%] xl:ml-[60%] overflow-y-auto min-h-screen bg-white">
        <div className="w-full max-w-4xl mx-auto p-6">
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B9D] to-[#C44569] rounded-xl 
                           flex items-center justify-center shadow-lg mb-4">
              <span className="text-white text-2xl font-bold">A</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Join AssistIQ</h1>
            <p className="text-gray-600">Choose your role to get started</p>
          </div>

          <div className="space-y-6">
            {roles.map((role) => {
              const IconComponent = role.icon;
              return (
                <div
                  key={role.id}
                  className={`relative p-8 rounded-xl border-2 cursor-pointer transition-all
                    ${selectedRole === role.id
                      ? 'border-[#6B7AFF] bg-[#6B7AFF]/5 shadow-lg'
                      : 'border-[#DDE1EC] hover:border-[#6B7AFF]/50 hover:shadow-md'}`}
                  onClick={() => setSelectedRole(role.id)}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${role.color} rounded-xl 
                                     flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{role.title}</h3>
                        <p className="text-[#6B7AFF] font-medium">{role.subtitle}</p>
                        <p className="text-gray-600 mt-2">{role.description}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm text-gray-500 mb-1">Registration time</div>
                      <div className="text-sm font-medium text-gray-900">{role.registrationTime}</div>
                      {role.verificationRequired && (
                        <div className="text-xs text-[#FFE27A] bg-[#FFE27A]/10 px-2 py-1 rounded mt-2">
                          Verification Required
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {role.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <MdCheck className="w-4 h-4 text-[#56E0A0] flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <Link
                      href={role.href}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium 
                               transition-all ${selectedRole === role.id
                                 ? 'bg-[#6B7AFF] text-white hover:bg-[#6B7AFF]/90'
                                 : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                      Register as {role.title}
                      <MdArrowForward className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8 pt-6 border-t border-[#DDE1EC]">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link href="/auth/login" className="text-gray-900 hover:text-gray-700 font-medium">
                Sign in
              </Link>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Need help choosing?{' '}
              <Link href="/local/contact" className="text-gray-700 hover:text-gray-900 font-medium">
                Contact our team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
