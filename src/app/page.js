import Link from 'next/link';
import Image from "next/image";
import { MdShield, MdAnalytics, MdSpeed, MdDevices } from 'react-icons/md';
import { RiTeamLine, RiFirstAidKitLine } from 'react-icons/ri';
import LandingWrapper from '@/components/landing/LandingWrapper';

const features = [
  {
    icon: RiFirstAidKitLine,
    title: 'Smart Wound Assessment',
    description: 'AI-powered wound measurement and analysis for accurate tracking'
  },
  {
    icon: MdAnalytics,
    title: 'Advanced Analytics',
    description: 'Comprehensive healing metrics and progress visualization'
  },
  {
    icon: MdShield,
    title: 'HIPAA Compliant',
    description: 'Secure, encrypted, and compliant with healthcare standards'
  },
  {
    icon: RiTeamLine,
    title: 'Team Collaboration',
    description: 'Seamless communication between healthcare providers'
  }
];

export default function Home() {
  return (
    <LandingWrapper>
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#6B7AFF] to-[#506EFF] px-6 lg:px-8 py-24 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:16px_16px]"/>
          <div className="relative max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Wound Care Practice
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Advanced digital solution for healthcare professionals to streamline wound assessment, 
              treatment planning, and patient care management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/register" 
                    className="bg-white text-[#6B7AFF] px-8 py-3 rounded-xl font-medium 
                             hover:bg-blue-50 transition-colors">
                Start Free Trial
              </Link>
              <Link href="/auth/login" 
                    className="bg-white/10 text-white px-8 py-3 rounded-xl font-medium 
                             hover:bg-white/20 transition-colors">
                Login
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                ['50k+', 'Healthcare Professionals'],
                ['2M+', 'Assessments Made'],
                ['98%', 'Satisfaction Rate'],
                ['24/7', 'Expert Support']
              ].map(([stat, label]) => (
                <div key={stat} className="text-center">
                  <div className="text-4xl font-bold text-[#1C243C] mb-2">{stat}</div>
                  <div className="text-[#8F96AA]">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
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
                  <div className={`w-12 h-12 rounded-xl bg-[#6B7AFF]/10 flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-[#6B7AFF]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1C243C] mb-2">{feature.title}</h3>
                  <p className="text-[#8F96AA]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white py-24">
          <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1C243C] mb-4">
              Ready to Elevate Your Practice?
            </h2>
            <p className="text-[#8F96AA] mb-8">
              Join thousands of healthcare professionals using WoundCare Pro
            </p>
            <Link href="/auth/register" 
                  className="inline-block bg-gradient-to-r from-[#6B7AFF] to-[#506EFF] 
                           text-white px-8 py-3 rounded-xl font-medium 
                           hover:from-[#506EFF] hover:to-[#6B7AFF] transition-all">
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </LandingWrapper>
  );
}
