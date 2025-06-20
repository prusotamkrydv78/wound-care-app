import Link from 'next/link';
import Image from "next/image";
import { MdShield, MdAnalytics, MdArrowForward, MdCheck, MdStar, MdPlayArrow, MdTrendingUp, MdSecurity, MdSpeed } from 'react-icons/md';
import { RiFirstAidKitLine, RiTeamLine, RiStethoscopeLine, RiHeartPulseLine, RiUserHeartLine, RiAwardLine, RiTimeLine } from 'react-icons/ri';
import { HiOutlineChartBar, HiOutlineUsers, HiOutlineShieldCheck } from 'react-icons/hi';
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
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Why Hire People<br/>
                <span className="text-gray-900">When You Can Hire AI?</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                Cut Costs, Save Time, Let AI Do the Work!
              </p>
              <div className="flex justify-center mb-16">
                <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium
                               hover:bg-gray-800 transition-colors flex items-center gap-2">
                  <span>⚡</span>
                  Hire Your AI Expert!
                </button>
              </div>

              {/* Hero Image with Professional Avatars */}
              <div className="relative">
                <div className="bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 rounded-3xl p-8 shadow-2xl">
                  <div className="flex justify-center items-center gap-8 flex-wrap">
                    {/* Professional Avatars */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-white text-2xl">👩‍⚖️</span>
                      </div>
                      <div className="text-white text-left">
                        <div className="font-medium">Lawyer</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-white text-2xl">👨‍💻</span>
                      </div>
                      <div className="text-white text-left">
                        <div className="font-medium">Civil Engineer</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-white text-2xl">👩‍⚕️</span>
                      </div>
                      <div className="text-white text-left">
                        <div className="font-medium">Doctor</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-white text-2xl">👨‍🎨</span>
                      </div>
                      <div className="text-white text-left">
                        <div className="font-medium">Designer</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-white text-2xl">👨‍💼</span>
                      </div>
                      <div className="text-white text-left">
                        <div className="font-medium">37 Professions to Hire</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trusted by organizations */}
                <div className="mt-16 text-center">
                  <p className="text-sm text-gray-600 mb-8">Relied upon by the world's best product teams.</p>
                  <div className="flex justify-center items-center gap-8 flex-wrap opacity-60">
                    <div className="text-lg font-medium text-gray-900">Nietzsche</div>
                    <div className="text-lg font-medium text-gray-900">FocalPoint</div>
                    <div className="text-lg font-medium text-gray-900">Command+R</div>
                    <div className="text-lg font-medium text-gray-900">GlobalBank</div>
                    <div className="text-lg font-medium text-gray-900">Alt+Shift</div>
                    <div className="text-lg font-medium text-gray-900">Luminous</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Features Section */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1C243C] mb-4">
                Clinical Features That Transform Patient Care
              </h2>
              <p className="text-[#8F96AA] max-w-2xl mx-auto">
                Evidence-based tools designed by clinicians, for clinicians. Improve outcomes while reducing documentation burden.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Feature cards */}
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#F8F9FF] p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-[#6B7AFF]/10 rounded-xl flex items-center justify-center mb-4">
                      <RiFirstAidKitLine className="w-6 h-6 text-[#6B7AFF]"/>
                    </div>
                    <h3 className="font-semibold text-[#1C243C] mb-2">Wound Assessment Metrics</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-[#8F96AA]">Measurement Accuracy</span>
                        <span className="text-[#1C243C]">95.2%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#8F96AA]">Documentation Time</span>
                        <span className="text-[#1C243C]">-60%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#8F96AA]">Clinical Compliance</span>
                        <span className="text-[#1C243C]">100%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#F8F9FF] p-6 rounded-2xl">
                    <h3 className="font-semibold text-[#1C243C] mb-4">Healing Progress Analytics</h3>
                    <p className="text-sm text-[#8F96AA] mb-4">Real-time wound healing visualization and predictive outcomes.</p>
                    <div className="bg-white p-4 rounded-xl">
                      <div className="text-2xl font-bold text-[#1C243C]">92.4%</div>
                      <div className="text-sm text-[#56E0A0]">Healing Rate</div>
                      <div className="mt-2 h-16 bg-gradient-to-r from-[#56E0A0] to-[#6B7AFF] rounded opacity-20"></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-[#F8F9FF] p-6 rounded-2xl text-center">
                    <h4 className="font-semibold text-[#1C243C] mb-2">EHR Integration</h4>
                    <p className="text-sm text-[#8F96AA]">Seamlessly connects with Epic, Cerner, and 50+ healthcare systems.</p>
                  </div>

                  <div className="bg-[#F8F9FF] p-6 rounded-2xl text-center">
                    <h4 className="font-semibold text-[#1C243C] mb-2">Clinical Decision Support</h4>
                    <p className="text-sm text-[#8F96AA]">Evidence-based treatment recommendations and care protocols.</p>
                  </div>

                  <div className="bg-[#F8F9FF] p-6 rounded-2xl text-center">
                    <h4 className="font-semibold text-[#1C243C] mb-2">Real-Time Alerts</h4>
                    <p className="text-sm text-[#8F96AA]">Instant notifications for critical wound changes and care milestones.</p>
                  </div>
                </div>
              </div>

              {/* Right side - Clinical Analytics dashboard */}
              <div className="bg-[#F8F9FF] p-8 rounded-3xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#FF6B9D] rounded-full flex items-center justify-center">
                      <RiFirstAidKitLine className="text-white text-sm"/>
                    </div>
                    <div>
                      <div className="font-medium text-[#1C243C]">Acute Wounds</div>
                      <div className="text-sm text-[#8F96AA]">24 cases</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#56E0A0] rounded-full flex items-center justify-center">
                      <RiHeartPulseLine className="text-white text-sm"/>
                    </div>
                    <div>
                      <div className="font-medium text-[#1C243C]">Chronic Wounds</div>
                      <div className="text-sm text-[#8F96AA]">18 cases</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#FFB547] rounded-full flex items-center justify-center">
                      <RiAwardLine className="text-white text-sm"/>
                    </div>
                    <div>
                      <div className="font-medium text-[#1C243C]">Healed Cases</div>
                      <div className="text-sm text-[#8F96AA]">156 this month</div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-semibold text-[#1C243C] mb-4">Healing Progress</h3>
                    <div className="text-sm text-[#8F96AA] mb-2">01 - 30 November, 2024</div>
                    <div className="h-32 bg-white rounded-xl p-4 flex items-end justify-between">
                      {[40, 60, 30, 80, 50, 70, 45].map((height, i) => (
                        <div key={i} className={`w-4 bg-[#6B7AFF] rounded-t`} style={{height: `${height}%`}}></div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl">
                    <div className="text-sm text-[#8F96AA] mb-2">Trusted by</div>
                    <div className="text-2xl font-bold text-[#6B7AFF] mb-2">50,000+ Healthcare Professionals</div>
                    <div className="flex -space-x-2">
                      {[1,2,3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-[#6B7AFF]/20 border-2 border-white flex items-center justify-center">
                          <RiStethoscopeLine className="w-4 h-4 text-[#6B7AFF]"/>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1C243C] mb-4">
                Trusted by Leading <br/>
                Healthcare Professionals
              </h2>
              <p className="text-[#8F96AA] max-w-2xl mx-auto">
                See how our AI-powered platform is transforming wound care across medical specialties
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Mayo Clinic Testimonial */}
              <div className="bg-white p-8 rounded-2xl border border-[#DDE1EC] shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#0066CC] rounded flex items-center justify-center">
                    <RiStethoscopeLine className="text-white text-sm"/>
                  </div>
                  <span className="font-bold text-[#1C243C]">Mayo Clinic</span>
                </div>
                <blockquote className="text-[#1C243C] mb-6 leading-relaxed">
                  "WoundCare AI has revolutionized our wound assessment protocols. The 95% accuracy rate and seamless EHR integration have significantly improved our clinical workflows and patient outcomes."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-[#1C243C]">Dr. Sarah Mitchell, MD</div>
                    <div className="text-sm text-[#8F96AA]">Chief of Wound Care</div>
                  </div>
                  <div className="flex gap-1 text-[#56E0A0]">
                    {[...Array(5)].map((_, i) => (
                      <MdStar key={i} className="w-4 h-4"/>
                    ))}
                  </div>
                </div>
                <div className="mt-4 text-sm text-[#8F96AA]">5.00 • Exceptional Clinical Tool</div>
              </div>

              {/* Johns Hopkins Testimonial */}
              <div className="bg-white p-8 rounded-2xl border border-[#DDE1EC] shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#002D72] rounded flex items-center justify-center">
                    <RiUserHeartLine className="text-white text-sm"/>
                  </div>
                  <span className="font-bold text-[#1C243C]">Johns Hopkins</span>
                </div>
                <blockquote className="text-[#1C243C] mb-6 leading-relaxed">
                  "The AI-powered measurements and predictive analytics have transformed how we track healing progress. Our documentation time has decreased by 60% while maintaining the highest clinical standards."
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-[#1C243C]">Dr. Michael Chen, MD</div>
                    <div className="text-sm text-[#8F96AA]">Plastic Surgery Department</div>
                  </div>
                  <div className="flex gap-1 text-[#56E0A0]">
                    {[...Array(5)].map((_, i) => (
                      <MdStar key={i} className="w-4 h-4"/>
                    ))}
                  </div>
                </div>
                <div className="mt-4 text-sm text-[#8F96AA]">5.00 • Game-Changing Technology</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-[#F8F9FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#6B7AFF]/10 text-[#6B7AFF] text-sm mb-4">
                Pricing Plan
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1C243C] mb-4">
                Clinical Plans for <br/>
                Every Healthcare Setting
              </h2>
              <p className="text-[#8F96AA] max-w-2xl mx-auto">
                From individual practitioners to large health systems - choose the plan that fits your clinical needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Individual Practitioner Plan */}
              <div className="bg-white p-8 rounded-2xl border border-[#DDE1EC] relative">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-xl font-bold text-[#1C243C]">Individual Practice</h3>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#1C243C]">$299</span>
                  <span className="text-[#8F96AA]">/month</span>
                </div>
                <p className="text-[#8F96AA] mb-6">
                  Perfect for individual practitioners and small clinics. Get essential AI-powered wound care tools.
                </p>
                <button className="w-full bg-[#1C243C] text-white py-3 rounded-xl font-medium hover:bg-[#2A3441] transition-colors mb-6">
                  Start Clinical Trial
                </button>
                <div>
                  <h4 className="font-semibold text-[#1C243C] mb-4">What's included</h4>
                  <ul className="space-y-3 text-sm text-[#8F96AA]">
                    <li className="flex items-center gap-2">
                      <MdCheck className="w-4 h-4 text-[#56E0A0]"/>
                      AI wound assessment
                    </li>
                    <li className="flex items-center gap-2">
                      <MdCheck className="w-4 h-4 text-[#56E0A0]"/>
                      Up to 500 assessments/month
                    </li>
                    <li className="flex items-center gap-2">
                      <MdCheck className="w-4 h-4 text-[#56E0A0]"/>
                      Basic EHR integration
                    </li>
                    <li className="flex items-center gap-2">
                      <MdCheck className="w-4 h-4 text-[#56E0A0]"/>
                      Clinical support
                    </li>
                    <li className="flex items-center gap-2">
                      <MdCheck className="w-4 h-4 text-[#56E0A0]"/>
                      HIPAA compliance
                    </li>
                  </ul>
                </div>
              </div>

              {/* Hospital Department Plan */}
              <div className="bg-white p-8 rounded-2xl border border-[#6B7AFF] relative">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-xl font-bold text-[#1C243C]">Hospital Department</h3>
                  <span className="bg-[#FFB547] text-white text-xs px-2 py-1 rounded-full">Most Popular</span>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#1C243C]">$899</span>
                  <span className="text-[#8F96AA]">/month</span>
                </div>
                <p className="text-[#8F96AA] mb-6">
                  Ideal for hospital departments and multi-provider clinics. Advanced analytics and team collaboration.
                </p>
                <button className="w-full bg-[#1C243C] text-white py-3 rounded-xl font-medium hover:bg-[#2A3441] transition-colors mb-6">
                  Start Clinical Trial
                </button>
                <div>
                  <h4 className="font-semibold text-[#1C243C] mb-4">What's included</h4>
                  <ul className="space-y-3 text-sm text-[#8F96AA]">
                    <li className="flex items-center gap-2">
                      <MdCheck className="w-4 h-4 text-[#56E0A0]"/>
                      Unlimited assessments
                    </li>
                    <li className="flex items-center gap-2">
                      <MdCheck className="w-4 h-4 text-[#56E0A0]"/>
                      Advanced analytics dashboard
                    </li>
                    <li className="flex items-center gap-2">
                      <MdCheck className="w-4 h-4 text-[#56E0A0]"/>
                      Multi-provider collaboration
                    </li>
                    <li className="flex items-center gap-2">
                      <MdCheck className="w-4 h-4 text-[#56E0A0]"/>
                      24/7 clinical support
                    </li>
                    <li className="flex items-center gap-2">
                      <MdCheck className="w-4 h-4 text-[#56E0A0]"/>
                      Custom EHR integration
                    </li>
                  </ul>
                </div>
              </div>

              {/* Health System Plan */}
              <div className="bg-white p-8 rounded-2xl border border-[#DDE1EC] relative">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-xl font-bold text-[#1C243C]">Health System</h3>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#1C243C]">Custom</span>
                  <span className="text-[#8F96AA]"> pricing</span>
                </div>
                <p className="text-[#8F96AA] mb-6">
                  Enterprise-grade solution for large health systems. Custom implementation and dedicated support.
                </p>
                <button className="w-full bg-[#1C243C] text-white py-3 rounded-xl font-medium hover:bg-[#2A3441] transition-colors mb-6">
                  Contact Sales
                </button>
                <div>
                  <h4 className="font-semibold text-[#1C243C] mb-4">What's included</h4>
                  <ul className="space-y-3 text-sm text-[#8F96AA]">
                    <li className="flex items-center gap-2">
                      <MdCheck className="w-4 h-4 text-[#56E0A0]"/>
                      Enterprise-wide deployment
                    </li>
                    <li className="flex items-center gap-2">
                      <MdCheck className="w-4 h-4 text-[#56E0A0]"/>
                      Custom AI model training
                    </li>
                    <li className="flex items-center gap-2">
                      <MdCheck className="w-4 h-4 text-[#56E0A0]"/>
                      Dedicated implementation team
                    </li>
                    <li className="flex items-center gap-2">
                      <MdCheck className="w-4 h-4 text-[#56E0A0]"/>
                      White-label options
                    </li>
                    <li className="flex items-center gap-2">
                      <MdCheck className="w-4 h-4 text-[#56E0A0]"/>
                      SLA guarantees
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#6B7AFF]/10 text-[#6B7AFF] text-sm mb-4">
                Frequently Asked
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1C243C] mb-4">
                Clinical Support When <br/>
                You Need It Most
              </h2>
              <p className="text-[#8F96AA] max-w-2xl mx-auto">
                Get answers to common questions about implementing AI-powered wound care in your practice
              </p>
            </div>

            <div className="space-y-6">
              <div className="border border-[#DDE1EC] rounded-xl p-6">
                <h3 className="font-semibold text-[#1C243C] mb-2">How accurate is the AI wound assessment technology?</h3>
                <p className="text-[#8F96AA]">
                  Our FDA-cleared AI technology achieves 95% accuracy in wound measurements and tissue classification,
                  validated through clinical trials with over 10,000 wound assessments across multiple healthcare institutions.
                  The system continuously learns and improves with each assessment.
                </p>
              </div>

              <div className="border border-[#DDE1EC] rounded-xl p-6">
                <h3 className="font-semibold text-[#1C243C] mb-2">How does the platform integrate with our existing EHR system?</h3>
                <p className="text-[#8F96AA]">
                  WoundCare AI seamlessly integrates with 50+ EHR systems including Epic, Cerner, and Allscripts through
                  HL7 FHIR standards. Our implementation team provides white-glove setup and training to ensure smooth
                  integration with your existing clinical workflows.
                </p>
              </div>

              <div className="border border-[#DDE1EC] rounded-xl p-6">
                <h3 className="font-semibold text-[#1C243C] mb-2">What clinical evidence supports the platform's effectiveness?</h3>
                <p className="text-[#8F96AA]">
                  Our platform is backed by peer-reviewed studies published in the Journal of Wound Care and Advances in
                  Wound Care, demonstrating 40% faster healing times and 60% reduction in documentation burden. Clinical
                  outcomes data is available from our research partnerships with leading medical institutions.
                </p>
              </div>

              <div className="border border-[#DDE1EC] rounded-xl p-6">
                <h3 className="font-semibold text-[#1C243C] mb-2">How do you ensure HIPAA compliance and data security?</h3>
                <p className="text-[#8F96AA]">
                  We maintain SOC 2 Type II certification and HIPAA compliance with end-to-end encryption, role-based
                  access controls, and audit logging. All data is stored in HITRUST-certified data centers with 99.9%
                  uptime SLA and regular third-party security assessments.
                </p>
              </div>

              <div className="border border-[#DDE1EC] rounded-xl p-6">
                <h3 className="font-semibold text-[#1C243C] mb-2">What training and support do you provide for clinical staff?</h3>
                <p className="text-[#8F96AA]">
                  We provide comprehensive onboarding including live training sessions, clinical workflow optimization,
                  and 24/7 technical support. Our clinical success team includes certified wound care specialists who
                  provide ongoing education and best practice guidance.
                </p>
              </div>

              <div className="border border-[#DDE1EC] rounded-xl p-6">
                <h3 className="font-semibold text-[#1C243C] mb-2">Can the platform be customized for different medical specialties?</h3>
                <p className="text-[#8F96AA]">
                  Yes, our platform supports customizable protocols for various specialties including plastic surgery,
                  dermatology, podiatry, and general surgery. We offer specialty-specific templates, assessment criteria,
                  and reporting features tailored to your clinical practice requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1C243C] via-[#2A3441] to-[#1C243C]">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"/>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Transform Your Clinical Practice Today
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Join 50,000+ healthcare professionals who trust our FDA-cleared AI platform.
                Start your 30-day clinical trial and experience the future of wound care management.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/auth/register"
                  className="inline-flex items-center bg-white text-[#1C243C] px-8 py-4 rounded-xl font-medium
                           hover:bg-gray-100 transition-all"
                >
                  <RiStethoscopeLine className="mr-2"/>
                  Start Clinical Trial
                </Link>
                <Link
                  href="/local/contact"
                  className="inline-flex items-center border border-white/20 text-white px-8 py-4 rounded-xl font-medium
                           hover:bg-white/10 transition-all"
                >
                  Schedule Medical Demo
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">FDA</div>
                  <div className="text-sm text-white/60">Cleared</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">HIPAA</div>
                  <div className="text-sm text-white/60">Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">SOC 2</div>
                  <div className="text-sm text-white/60">Certified</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-white/60">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>  
    </>
  );
}
