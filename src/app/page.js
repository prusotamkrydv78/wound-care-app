import Link from 'next/link';
import Image from "next/image";
import { MdShield, MdAnalytics, MdArrowForward, MdCheck, MdStar } from 'react-icons/md';
import { RiFirstAidKitLine, RiTeamLine, RiStethoscopeLine, RiHeartPulseLine } from 'react-icons/ri';
 
import Footer from '@/components/publicUi/Footer';

const benefits = [
  {
    icon: RiHeartPulseLine,
    title: 'Improved Patient Outcomes',
    description: 'Track healing progress with precision',
    color: '#8B6DFF',
  },
  {
    icon: RiStethoscopeLine,
    title: 'Clinical Excellence',
    description: 'Evidence-based wound care protocols',
    color: '#5698FF',
  },
  {
    icon: MdAnalytics,
    title: 'Advanced Analytics',
    description: 'Comprehensive healing metrics and progress visualization',
    color: '#5698FF',
  },
  {
    icon: MdShield,
    title: 'HIPAA Compliant',
    description: 'Secure, encrypted, and compliant with healthcare standards',
    color: '#56E0A0',
  },
  {
    icon: RiTeamLine,
    title: 'Team Collaboration',
    description: 'Seamless communication between healthcare providers',
    color: '#6B7AFF',
  }
];
const features = [
  {
    icon: RiFirstAidKitLine,
    title: 'AI-Driven Assessments',
    description: 'Automated wound assessments using advanced AI algorithms',
    bgColor: 'bg-[#6B7AFF]/10',
    color: '#6B7AFF',
  },
  {
    icon: MdAnalytics,
    title: 'Real-Time Analytics',
    description: 'Track healing progress with comprehensive metrics',
    bgColor: 'bg-[#8B6DFF]/10',
    color: '#8B6DFF',
  },
  {
    icon: MdShield,
    title: 'HIPAA Compliant',
    description: 'Secure and compliant platform for healthcare professionals',
    bgColor: 'bg-[#56E0A0]/10',
    color: '#56E0A0',
  },
  {
    icon: RiTeamLine,
    title: 'Collaborative Care',
    description: 'Enhance teamwork with real-time communication tools',
    bgColor: 'bg-[#5698FF]/10',
    color: '#5698FF',
  },
];

export default function Home() {
  return (
    <>
      <div className="relative">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6B7AFF] via-[#8B6DFF] to-[#506EFF]"/>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"/>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-8">
                  <span className="flex h-2 w-2 rounded-full bg-[#56E0A0] mr-2"/>
                  <span className="text-sm text-white font-medium">HIPAA Compliant Platform</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                  The Future of <br/>
                  <span className="text-blue-100">Wound Care</span>
                </h1>
                <p className="text-xl text-blue-100/90 mb-12 leading-relaxed">
                  Empower your practice with AI-driven assessments, real-time collaboration, 
                  and intelligent healing insights.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/auth/register" 
                        className="group bg-white px-8 py-4 rounded-xl font-medium text-[#6B7AFF]
                                 hover:shadow-xl hover:shadow-blue-500/20 transition-all">
                    Start Free Trial
                    <MdArrowForward className="inline ml-2 group-hover:translate-x-1 transition-transform"/>
                  </Link>
                  <Link href="#demo" 
                        className="px-8 py-4 rounded-xl text-white border border-white/20
                                 hover:bg-white/10 transition-all">
                    Watch Demo
                  </Link>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative z-10 bg-white rounded-2xl shadow-xl p-2">
                  <Image
                    src="/hero.png"
                    alt="Dashboard Preview"
                    width={800}
                    height={600}
                    className="rounded-xl"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#6B7AFF]/20 to-transparent 
                              rounded-full blur-3xl -z-10 animate-pulse"/>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="group p-8 rounded-2xl border border-[#DDE1EC] 
                                     hover:border-[#6B7AFF]/20 transition-all">
                  <div className={`w-12 h-12 rounded-xl bg-[${benefit.color}]/10 
                                 flex items-center justify-center mb-6 
                                 group-hover:scale-110 transition-transform`}>
                    <benefit.icon style={{color: benefit.color}} className="w-6 h-6"/>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1C243C] mb-3">{benefit.title}</h3>
                  <p className="text-[#8F96AA] leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

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

        {/* Updated Testimonials Section */}
        <section className="py-20 bg-[#F8F9FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1C243C] mb-4">
                Trusted by Healthcare Professionals
              </h2>
              <p className="text-[#8F96AA] max-w-2xl mx-auto">
                See what medical professionals are saying about our platform
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-[#DDE1EC]">
                  <div className="flex gap-1 text-[#FFB547] mb-6">
                    {[...Array(5)].map((_, i) => (
                      <MdStar key={i} className="w-5 h-5"/>
                    ))}
                  </div>
                  <blockquote className="text-[#1C243C] mb-6 leading-relaxed">
                    "The AI-powered measurements and analytics have transformed how we track wound healing progress."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#6B7AFF]/10"/>
                    <div>
                      <div className="font-medium text-[#1C243C]">Dr. Sarah Miller</div>
                      <div className="text-sm text-[#8F96AA]">Wound Care Specialist</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Final CTA Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6B7AFF] via-[#8B6DFF] to-[#506EFF]"/>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"/>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm mb-8">
                  <span className="flex h-2 w-2 rounded-full bg-[#56E0A0] mr-2"/>
                  <span>Limited Time Offer</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Start Your Digital <br/>
                  Transformation Today
                </h2>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-lg bg-white/10 mt-1">
                      <MdCheck className="w-4 h-4 text-[#56E0A0]"/>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">30-Day Free Trial</h3>
                      <p className="text-blue-100">Full access to all features with no commitments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-lg bg-white/10 mt-1">
                      <MdCheck className="w-4 h-4 text-[#56E0A0]"/>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Dedicated Support</h3>
                      <p className="text-blue-100">Personal onboarding and 24/7 technical assistance</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/auth/register"
                    className="group bg-white px-8 py-4 rounded-xl font-medium text-[#6B7AFF] 
                             hover:shadow-xl hover:shadow-blue-500/20 transition-all"
                  >
                    Start Free Trial
                    <MdArrowForward className="inline ml-2 group-hover:translate-x-1 transition-transform"/>
                  </Link>
                  <Link 
                    href="/contact"
                    className="px-8 py-4 rounded-xl text-white border border-white/20 
                             hover:bg-white/10 transition-all backdrop-blur-sm"
                  >
                    Schedule Demo
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                  <div className="text-white text-center p-4 border border-white/10 rounded-xl">
                    <div className="font-bold text-3xl mb-1">50,000+</div>
                    <div className="text-blue-100">Healthcare Professionals</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 border border-white/10 rounded-xl">
                      <div className="font-bold text-2xl text-white mb-1">98%</div>
                      <div className="text-sm text-blue-100">Satisfaction Rate</div>
                    </div>
                    <div className="text-center p-4 border border-white/10 rounded-xl">
                      <div className="font-bold text-2xl text-white mb-1">24/7</div>
                      <div className="text-sm text-blue-100">Expert Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}
