'use client';

import Link from 'next/link';
import { MdLogin, MdPersonAdd, MdEmail, MdLock, MdDashboard, MdArrowForward, MdCheck, MdSecurity, MdSpeed, MdDesignServices } from 'react-icons/md';

export default function AuthShowcase() {
  const authPages = [
    {
      title: 'Enhanced Login',
      description: 'Modern login form with improved visual design, animations, and better UX',
      href: '/auth/login',
      icon: MdLogin,
      color: 'from-[#6B7AFF] to-[#8B6DFF]',
      features: [
        'Modern gradient backgrounds with animations',
        'Enhanced form validation and feedback',
        'Password visibility toggle',
        'Remember me functionality',
        'Improved visual hierarchy'
      ]
    },
    {
      title: 'Multi-Step Registration',
      description: 'Progressive registration flow with step indicators and role-based forms',
      href: '/auth/register',
      icon: MdPersonAdd,
      color: 'from-[#56E0A0] to-[#4ECDC4]',
      features: [
        'Multi-step form with progress indicators',
        'Role-based registration (Patient/Doctor)',
        'Real-time validation',
        'Enhanced visual design',
        'Improved user experience'
      ]
    },
    {
      title: 'OTP Verification',
      description: 'Enhanced email verification with modern OTP input and better feedback',
      href: '/auth/otp-verification?email=demo@example.com&type=registration',
      icon: MdEmail,
      color: 'from-[#FFE27A] to-[#FFC107]',
      features: [
        'Auto-focus and paste support',
        'Visual feedback for entered digits',
        'Resend functionality with cooldown',
        'Timer display',
        'Enhanced error handling'
      ]
    },
    {
      title: 'Password Recovery',
      description: 'Streamlined forgot password flow with step-by-step guidance',
      href: '/auth/forgot-password',
      icon: MdLock,
      color: 'from-[#FF6B9D] to-[#C44569]',
      features: [
        'Two-step recovery process',
        'Clear visual feedback',
        'Security feature highlights',
        'Enhanced form design',
        'Success state management'
      ]
    },
    {
      title: 'Admin Dashboard',
      description: 'Mock admin dashboard with doctor verification and modern UI components',
      href: '/admin/dashboard',
      icon: MdDashboard,
      color: 'from-[#8B6DFF] to-[#5698FF]',
      features: [
        'Doctor verification workflow',
        'Mock data integration',
        'Modern sidebar navigation',
        'Responsive design',
        'Interactive components'
      ]
    }
  ];

  const designFeatures = [
    {
      icon: MdDesignServices,
      title: 'Modern Design System',
      description: 'Consistent AssistIQ design language with proper color palette and typography'
    },
    {
      icon: MdSpeed,
      title: 'Enhanced UX',
      description: 'Improved user flows with better feedback, animations, and micro-interactions'
    },
    {
      icon: MdSecurity,
      title: 'Professional UI',
      description: 'Healthcare-focused design with enterprise-grade visual aesthetics'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#6B7AFF] to-[#8B6DFF] 
                           rounded-2xl shadow-2xl mb-6">
              <span className="text-white text-2xl font-bold">A</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Enhanced Authentication System</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern, professional authentication components with improved UX/UI design, 
              built specifically for healthcare professionals using the AssistIQ design system.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Design Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {designFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#56E0A0] to-[#4ECDC4] 
                               rounded-xl mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Authentication Pages */}
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enhanced Authentication Components</h2>
            <p className="text-lg text-gray-600">
              Explore the modernized authentication flow with improved design and functionality
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {authPages.map((page, index) => {
              const IconComponent = page.icon;
              return (
                <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${page.color} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{page.title}</h3>
                        <p className="text-gray-600">{page.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {page.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <MdCheck className="w-4 h-4 text-[#56E0A0] flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={page.href}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl 
                             font-medium hover:bg-gray-800 transition-all duration-200 group"
                  >
                    View Component
                    <MdArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Implementation */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Implementation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Frontend Technologies</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Next.js 14 with App Router</li>
                <li>• React 18 with modern hooks</li>
                <li>• Tailwind CSS for styling</li>
                <li>• React Icons for iconography</li>
                <li>• CSS animations and transitions</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Design Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• AssistIQ design system integration</li>
                <li>• Responsive mobile-first design</li>
                <li>• Accessibility considerations</li>
                <li>• Modern gradient backgrounds</li>
                <li>• Micro-interactions and animations</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Improvements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#6B7AFF] mb-1">100%</div>
                <div className="text-sm text-gray-600">Frontend Only</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#56E0A0] mb-1">5</div>
                <div className="text-sm text-gray-600">Enhanced Components</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FF6B9D] mb-1">Modern</div>
                <div className="text-sm text-gray-600">Design System</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            All components use mock data and demonstrate frontend functionality only.
          </p>
          <div className="flex items-center justify-center space-x-6 mt-4">
            <Link href="/auth/login" className="text-[#6B7AFF] hover:text-[#5A6AFF] font-medium">
              Start with Login
            </Link>
            <Link href="/auth/register" className="text-[#56E0A0] hover:text-[#4ECDC4] font-medium">
              Try Registration
            </Link>
            <Link href="/admin/dashboard" className="text-[#FF6B9D] hover:text-[#E55A87] font-medium">
              View Admin Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
