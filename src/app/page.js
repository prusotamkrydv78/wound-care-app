import Link from 'next/link';
import Image from "next/image";
import { MdShield, MdAnalytics, MdArrowForward } from 'react-icons/md';
import { RiFirstAidKitLine, RiTeamLine, RiUserLine, RiHospitalLine } from 'react-icons/ri';
import LandingWrapper from '@/components/landing/LandingWrapper';

const features = [
  {
    icon: RiFirstAidKitLine,
    title: 'Smart Assessment',
    description: 'AI-powered analysis',
    color: '#8B6DFF',
    bgColor: 'bg-[#8B6DFF]/10',
  },
  {
    icon: MdAnalytics,
    title: 'Advanced Analytics',
    description: 'Comprehensive healing metrics and progress visualization',
    color: '#5698FF',
    bgColor: 'bg-[#5698FF]/10',
  },
  {
    icon: MdShield,
    title: 'HIPAA Compliant',
    description: 'Secure, encrypted, and compliant with healthcare standards',
    color: '#56E0A0',
    bgColor: 'bg-[#56E0A0]/10',
  },
  {
    icon: RiTeamLine,
    title: 'Team Collaboration',
    description: 'Seamless communication between healthcare providers',
    color: '#6B7AFF',
    bgColor: 'bg-[#6B7AFF]/10',
  }
];

export default function Home() {
  return (
    <LandingWrapper>
      <div className="min-h-screen">
        {/* Hero Section - Enhanced */}
        <div className="relative bg-gradient-to-br from-[#6B7AFF] via-[#8B6DFF] to-[#506EFF] px-6 lg:px-8 py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"/>
          <div className="relative max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left space-y-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm">
                  <span className="bg-white/20 rounded-full w-4 h-4 flex items-center justify-center mr-2">✨</span>
                  HIPAA Compliant Platform
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Revolutionize Your <br/>
                  <span className="text-blue-100">Wound Care Practice</span>
                </h1>
                <p className="text-xl text-blue-100 max-w-xl">
                  Advanced digital solution for healthcare professionals with AI-powered assessment and seamless collaboration.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/auth/register" 
                        className="bg-white text-[#6B7AFF] px-8 py-4 rounded-xl font-medium 
                                 hover:bg-blue-50 transition-all duration-200 shadow-lg shadow-blue-500/20">
                    Start Free Trial
                  </Link>
                  <Link href="/auth/login" 
                        className="bg-white/10 text-white px-8 py-4 rounded-xl font-medium 
                                 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm">
                    Login to Dashboard
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block relative">
                {/* Add hero image here */}
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[140%] aspect-square 
                              bg-gradient-to-br from-[#6B7AFF]/20 to-transparent rounded-full blur-3xl"/>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Section - New */}
        <div className="bg-[#F8F9FF] py-16 border-y border-[#DDE1EC]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-center text-[#8F96AA] mb-8">Trusted by leading healthcare institutions</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-50">
              {/* Add partner logos here */}
            </div>
          </div>
        </div>

        {/* Stats Section - Enhanced */}
        <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                ['50k+', 'Healthcare Professionals', 'bg-[#8B6DFF]/10', 'text-[#8B6DFF]'],
                ['2M+', 'Assessments Made', 'bg-[#5698FF]/10', 'text-[#5698FF]'],
                ['98%', 'Satisfaction Rate', 'bg-[#56E0A0]/10', 'text-[#56E0A0]'],
                ['24/7', 'Expert Support', 'bg-[#6B7AFF]/10', 'text-[#6B7AFF]']
              ].map(([stat, label, bgColor, textColor]) => (
                <div key={stat} className="bg-white p-6 rounded-xl border border-[#DDE1EC] hover:border-[#6B7AFF]/20 transition-all">
                  <div className={`w-12 h-12 rounded-xl ${bgColor} flex items-center justify-center mb-4`}>
                    <span className={`text-xl font-bold ${textColor}`}>{stat.charAt(0)}</span>
                  </div>
                  <div className="text-3xl font-bold text-[#1C243C] mb-1">{stat}</div>
                  <div className="text-[#8F96AA]">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section - Enhanced */}
        <div className="py-24 bg-[#F8F9FF]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1C243C] mb-4">
                Everything You Need for Modern Wound Care
              </h2>
              <p className="text-[#8F96AA] max-w-2xl mx-auto">
                Comprehensive tools and features designed specifically for healthcare professionals
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-[#DDE1EC] hover:border-[#6B7AFF]/20 transition-all">
                  <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1C243C] mb-2">{feature.title}</h3>
                  <p className="text-[#8F96AA]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section - Enhanced */}
        <div className="bg-[#F8F9FF] py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6B7AFF]/5 to-transparent"/>
          <div className="relative max-w-4xl mx-auto text-center px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-[#1C243C] mb-4">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-[#8F96AA] mb-12 text-lg">
              Join thousands of healthcare professionals using WoundCare Pro
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register" 
                    className="group bg-gradient-to-r from-[#6B7AFF] to-[#506EFF] 
                             text-white px-8 py-4 rounded-xl font-medium 
                             hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                Get Started Now
                <MdArrowForward className="inline ml-2 group-hover:translate-x-1 transition-transform"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LandingWrapper>
  );
}
