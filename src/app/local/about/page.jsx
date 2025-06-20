import { MdShield, MdPeople, MdTrendingUp, MdCheck, MdArrowForward } from 'react-icons/md';
import { RiFirstAidKitLine, RiTeamLine, RiStethoscopeLine, RiHeartPulseLine, RiAwardLine, RiUserHeartLine } from 'react-icons/ri';
import { HiOutlineChartBar, HiOutlineUsers, HiOutlineShieldCheck } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { label: 'Healthcare Professionals', value: '50K+', icon: RiUserHeartLine, color: 'text-[#6B7AFF]' },
  { label: 'Patient Assessments', value: '2M+', icon: RiFirstAidKitLine, color: 'text-[#56E0A0]' },
  { label: 'Success Rate', value: '98%', icon: RiAwardLine, color: 'text-[#8B6DFF]' },
  { label: 'Countries Served', value: '150+', icon: HiOutlineUsers, color: 'text-[#FFB547]' },
];

const values = [
  {
    icon: RiHeartPulseLine,
    title: 'Patient-Centered Care',
    description: 'Every decision we make is guided by what\'s best for patient outcomes and healing.',
    color: 'text-[#6B7AFF]',
    bgColor: 'bg-[#6B7AFF]/10'
  },
  {
    icon: RiStethoscopeLine,
    title: 'Clinical Excellence',
    description: 'We partner with leading medical professionals to ensure our solutions meet the highest standards.',
    color: 'text-[#56E0A0]',
    bgColor: 'bg-[#56E0A0]/10'
  },
  {
    icon: MdShield,
    title: 'Data Security',
    description: 'HIPAA-compliant infrastructure with enterprise-grade security protecting sensitive medical data.',
    color: 'text-[#8B6DFF]',
    bgColor: 'bg-[#8B6DFF]/10'
  },
  {
    icon: MdTrendingUp,
    title: 'Continuous Innovation',
    description: 'We constantly evolve our AI algorithms and features based on real-world clinical feedback.',
    color: 'text-[#FFB547]',
    bgColor: 'bg-[#FFB547]/10'
  }
];

const team = [
  {
    name: 'Dr. Sarah Miller',
    role: 'Chief Medical Officer',
    description: 'Leading wound care specialist with 15+ years of clinical experience.',
    image: '/team/member1.jpg'
  },
  {
    name: 'Alex Johnson',
    role: 'Chief Technology Officer',
    description: 'AI and machine learning expert, former Google Health engineer.',
    image: '/team/member2.jpg'
  },
  {
    name: 'Maria Rodriguez',
    role: 'Head of Clinical Research',
    description: 'PhD in Biomedical Engineering, published researcher in wound healing.',
    image: '/team/member3.jpg'
  }
];

export default function About() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FAFBFF] via-white to-[#F8F9FF]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"/>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#6B7AFF]/10 to-[#8B6DFF]/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-[#56E0A0]/10 to-[#5698FF]/10 rounded-full blur-xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#6B7AFF]/10 via-[#8B6DFF]/10 to-[#5698FF]/10 backdrop-blur-sm mb-8 border border-[#6B7AFF]/20">
              <span className="flex h-2 w-2 rounded-full bg-[#56E0A0] mr-3 animate-pulse"/>
              <span className="text-sm text-[#6B7AFF] font-semibold">About WoundCare AI</span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-bold text-[#1C243C] mb-8 leading-[0.9] tracking-tight">
              Revolutionizing <br/>
              <span className="bg-gradient-to-r from-[#6B7AFF] via-[#8B6DFF] to-[#5698FF] bg-clip-text text-transparent">
                Healthcare
              </span> <br/>
              <span className="text-5xl lg:text-6xl text-[#8F96AA]">Technology</span>
            </h1>

            <p className="text-xl lg:text-2xl text-[#8F96AA] mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              Founded by leading clinicians and AI researchers, we're revolutionizing wound care through
              <span className="text-[#6B7AFF] font-semibold"> FDA-cleared artificial intelligence</span> that delivers
              clinical-grade accuracy and improves patient outcomes across <span className="text-[#56E0A0] font-semibold">15+ medical specialties</span>.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-20">
              <Link href="/auth/register"
                    className="group bg-gradient-to-r from-[#6B7AFF] via-[#8B6DFF] to-[#5698FF] text-white
                             px-10 py-5 rounded-2xl font-semibold text-lg hover:shadow-2xl
                             hover:shadow-[#6B7AFF]/25 transition-all duration-300 hover:scale-105
                             flex items-center gap-3">
                <RiStethoscopeLine className="text-xl"/>
                Join Our Mission
                <MdArrowForward className="group-hover:translate-x-1 transition-transform duration-200"/>
              </Link>
              <Link href="/local/contact"
                    className="px-10 py-5 rounded-2xl text-[#1C243C] border-2 border-[#DDE1EC] font-semibold text-lg
                             hover:bg-[#F8F9FF] hover:border-[#6B7AFF]/30 transition-all duration-300
                             hover:shadow-lg flex items-center gap-3">
                <MdPlayArrow className="text-xl"/>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#F8F9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C243C] mb-4">
              Trusted by Healthcare Leaders Worldwide
            </h2>
            <p className="text-[#8F96AA] max-w-2xl mx-auto">
              Our platform serves medical professionals across the globe, delivering measurable results
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center bg-white p-8 rounded-2xl border border-[#DDE1EC] hover:border-[#6B7AFF]/20 transition-all">
                <div className={`w-16 h-16 rounded-2xl ${stat.color.replace('text-', 'bg-')}/10 flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`}/>
                </div>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-[#8F96AA] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#6B7AFF]/10 text-[#6B7AFF] text-sm mb-6">
                Our Mission
              </div>
              <h2 className="text-4xl font-bold text-[#1C243C] mb-6">
                Transforming Wound Care Through Innovation
              </h2>
              <p className="text-[#8F96AA] mb-8 leading-relaxed">
                Founded in 2019 by a team of wound care specialists and AI researchers from Stanford and Johns Hopkins,
                we recognized the critical need for objective, standardized wound assessment tools. Our FDA-cleared platform
                combines computer vision, machine learning, and clinical expertise to deliver the most accurate wound
                measurement and healing prediction technology available to healthcare professionals.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#56E0A0]/10 flex items-center justify-center mt-1">
                    <MdCheck className="w-4 h-4 text-[#56E0A0]"/>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C243C] mb-1">Clinical Research Foundation</h3>
                    <p className="text-[#8F96AA]">Validated through peer-reviewed studies with 95.2% accuracy across 10,000+ wound assessments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#56E0A0]/10 flex items-center justify-center mt-1">
                    <MdCheck className="w-4 h-4 text-[#56E0A0]"/>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C243C] mb-1">EHR Integration Excellence</h3>
                    <p className="text-[#8F96AA]">Seamlessly integrates with Epic, Cerner, and 50+ healthcare systems via HL7 FHIR</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#56E0A0]/10 flex items-center justify-center mt-1">
                    <MdCheck className="w-4 h-4 text-[#56E0A0]"/>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C243C] mb-1">FDA-Cleared AI Technology</h3>
                    <p className="text-[#8F96AA]">Class II medical device with continuous learning algorithms approved for clinical use</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#6B7AFF]/10 to-[#8B6DFF]/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <div className="w-12 h-12 bg-[#6B7AFF]/10 rounded-xl flex items-center justify-center mb-4">
                      <RiFirstAidKitLine className="w-6 h-6 text-[#6B7AFF]"/>
                    </div>
                    <h4 className="font-semibold text-[#1C243C] mb-2">AI Assessment</h4>
                    <p className="text-sm text-[#8F96AA]">Instant wound analysis with 95% accuracy</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <div className="w-12 h-12 bg-[#56E0A0]/10 rounded-xl flex items-center justify-center mb-4">
                      <HiOutlineChartBar className="w-6 h-6 text-[#56E0A0]"/>
                    </div>
                    <h4 className="font-semibold text-[#1C243C] mb-2">Progress Tracking</h4>
                    <p className="text-sm text-[#8F96AA]">Real-time healing metrics and insights</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <div className="w-12 h-12 bg-[#8B6DFF]/10 rounded-xl flex items-center justify-center mb-4">
                      <RiTeamLine className="w-6 h-6 text-[#8B6DFF]"/>
                    </div>
                    <h4 className="font-semibold text-[#1C243C] mb-2">Team Collaboration</h4>
                    <p className="text-sm text-[#8F96AA]">Seamless communication tools</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <div className="w-12 h-12 bg-[#FFB547]/10 rounded-xl flex items-center justify-center mb-4">
                      <MdShield className="w-6 h-6 text-[#FFB547]"/>
                    </div>
                    <h4 className="font-semibold text-[#1C243C] mb-2">HIPAA Compliant</h4>
                    <p className="text-sm text-[#8F96AA]">Enterprise-grade security</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-[#F8F9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C243C] mb-4">
              Our Core Values
            </h2>
            <p className="text-[#8F96AA] max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-[#DDE1EC] hover:border-[#6B7AFF]/20 transition-all group">
                <div className={`w-16 h-16 rounded-2xl ${value.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <value.icon className={`w-8 h-8 ${value.color}`}/>
                </div>
                <h3 className="text-xl font-semibold text-[#1C243C] mb-4">{value.title}</h3>
                <p className="text-[#8F96AA] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C243C] mb-4">Meet Our Leadership Team</h2>
            <p className="text-[#8F96AA] max-w-2xl mx-auto">
              The visionaries and experts driving innovation in digital wound care
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-[#DDE1EC] hover:border-[#6B7AFF]/20 transition-all group">
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden mb-6 mx-auto bg-gradient-to-br from-[#6B7AFF]/10 to-[#8B6DFF]/10">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#6B7AFF]">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-[#1C243C] mb-2">{member.name}</h3>
                  <p className="text-[#6B7AFF] font-medium mb-3">{member.role}</p>
                  <p className="text-[#8F96AA] leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#6B7AFF] to-[#8B6DFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Advance Your Clinical Practice?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join 50,000+ healthcare professionals across 15+ specialties who trust our FDA-cleared platform
            to improve patient outcomes and streamline wound care documentation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/auth/register"
              className="bg-white text-[#6B7AFF] px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-all"
            >
              Start Clinical Trial
            </Link>
            <Link
              href="/local/contact"
              className="border border-white/20 text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-all"
            >
              Schedule Medical Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
