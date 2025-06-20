import Link from 'next/link';
import { MdArrowForward, MdCheck, MdPlayArrow, MdMessage, MdNotifications } from 'react-icons/md';
import { RiTeamLine, RiStethoscopeLine, RiUserHeartLine, RiChatLine } from 'react-icons/ri';
import { HiOutlineUsers, HiOutlineShare } from 'react-icons/hi';

const features = [
  {
    title: 'Real-time Messaging',
    description: 'Secure, HIPAA-compliant messaging for care team coordination',
    icon: RiChatLine,
    benefits: ['Instant messaging', 'File sharing', 'Voice messages', 'Group conversations']
  },
  {
    title: 'Case Sharing',
    description: 'Share wound cases and collaborate on treatment plans',
    icon: HiOutlineShare,
    benefits: ['Case presentations', 'Image sharing', 'Treatment notes', 'Progress tracking']
  },
  {
    title: 'Multi-provider Access',
    description: 'Coordinate care across multiple healthcare providers',
    icon: HiOutlineUsers,
    benefits: ['Role-based access', 'Provider networks', 'Referral management', 'Care transitions']
  }
];

const collaborationMetrics = [
  { metric: '85%', label: 'Faster Consultations', description: 'Reduced time to specialist input' },
  { metric: '92%', label: 'Care Coordination', description: 'Improved team communication' },
  { metric: '67%', label: 'Reduced Readmissions', description: 'Better care continuity' },
  { metric: '24/7', label: 'Team Access', description: 'Always-on collaboration' }
];

const teamRoles = [
  {
    role: 'Wound Care Specialist',
    description: 'Lead wound assessment and treatment planning',
    icon: RiStethoscopeLine,
    responsibilities: ['Treatment protocols', 'Progress monitoring', 'Specialist consultations', 'Quality assurance']
  },
  {
    role: 'Registered Nurse',
    description: 'Daily wound care and patient monitoring',
    icon: RiUserHeartLine,
    responsibilities: ['Daily assessments', 'Dressing changes', 'Patient education', 'Progress documentation']
  },
  {
    role: 'Care Coordinator',
    description: 'Manage care transitions and team communication',
    icon: RiTeamLine,
    responsibilities: ['Care planning', 'Team coordination', 'Patient scheduling', 'Outcome tracking']
  }
];

export default function Collaboration() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FAFBFF] via-white to-[#F8F9FF]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"/>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#5698FF]/10 via-[#56E0A0]/10 to-[#6B7AFF]/10 backdrop-blur-sm mb-8 border border-[#5698FF]/20">
              <RiTeamLine className="w-5 h-5 text-[#5698FF] mr-3"/>
              <span className="text-sm text-[#5698FF] font-semibold">Team Collaboration</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold text-[#1C243C] mb-8 leading-[0.9] tracking-tight">
              Enhanced <br/>
              <span className="bg-gradient-to-r from-[#5698FF] via-[#56E0A0] to-[#6B7AFF] bg-clip-text text-transparent">
                Team Collaboration
              </span> <br/>
              <span className="text-5xl lg:text-6xl text-[#8F96AA]">Platform</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-[#8F96AA] mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              Streamline care coordination with <span className="text-[#5698FF] font-semibold">real-time collaboration tools</span> that connect 
              your entire care team, improve communication, and enhance patient outcomes through coordinated care.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-20">
              <Link href="/auth/register" 
                    className="group bg-gradient-to-r from-[#5698FF] via-[#56E0A0] to-[#6B7AFF] text-white 
                             px-10 py-5 rounded-2xl font-semibold text-lg hover:shadow-2xl 
                             hover:shadow-[#5698FF]/25 transition-all duration-300 hover:scale-105 
                             flex items-center gap-3">
                <RiStethoscopeLine className="text-xl"/>
                Start Collaborating
                <MdArrowForward className="group-hover:translate-x-1 transition-transform duration-200"/>
              </Link>
              <Link href="/local/contact" 
                    className="px-10 py-5 rounded-2xl text-[#1C243C] border-2 border-[#DDE1EC] font-semibold text-lg
                             hover:bg-[#F8F9FF] hover:border-[#5698FF]/30 transition-all duration-300 
                             hover:shadow-lg flex items-center gap-3">
                <MdPlayArrow className="text-xl"/>
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Metrics */}
      <section className="py-20 bg-[#F8F9FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C243C] mb-4">
              Improved Care Coordination
            </h2>
            <p className="text-[#8F96AA] max-w-2xl mx-auto">
              Measurable improvements in team communication and patient outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {collaborationMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl border border-[#DDE1EC] hover:border-[#5698FF]/20 transition-all">
                <div className="text-4xl font-bold text-[#5698FF] mb-2">{metric.metric}</div>
                <div className="font-semibold text-[#1C243C] mb-2">{metric.label}</div>
                <div className="text-sm text-[#8F96AA]">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Roles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C243C] mb-4">
              Coordinated Care Team
            </h2>
            <p className="text-[#8F96AA] max-w-2xl mx-auto">
              Enable seamless collaboration across all members of your care team
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamRoles.map((team, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border border-[#DDE1EC]/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-[#5698FF]/10 to-[#56E0A0]/10 rounded-2xl flex items-center justify-center mb-6">
                  <team.icon className="w-8 h-8 text-[#5698FF]"/>
                </div>
                <h3 className="text-2xl font-bold text-[#1C243C] mb-4">{team.role}</h3>
                <p className="text-[#8F96AA] mb-6 leading-relaxed">{team.description}</p>
                <ul className="space-y-3">
                  {team.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <MdCheck className="w-5 h-5 text-[#56E0A0]"/>
                      <span className="text-[#1C243C] font-medium">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Features */}
      <section className="py-20 bg-[#F8F9FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C243C] mb-4">
              Advanced Collaboration Tools
            </h2>
            <p className="text-[#8F96AA] max-w-2xl mx-auto">
              Comprehensive communication and coordination features for healthcare teams
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border border-[#DDE1EC]/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-[#5698FF]/10 to-[#56E0A0]/10 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-[#5698FF]"/>
                </div>
                <h3 className="text-2xl font-bold text-[#1C243C] mb-4">{feature.title}</h3>
                <p className="text-[#8F96AA] mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <MdCheck className="w-5 h-5 text-[#56E0A0]"/>
                      <span className="text-[#1C243C] font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Dashboard */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1C243C] mb-6">
                Unified Communication Hub
              </h2>
              <p className="text-[#8F96AA] mb-8 leading-relaxed">
                Centralize all team communications in one secure, HIPAA-compliant platform. 
                Share cases, coordinate care, and ensure everyone stays informed.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <MdMessage className="w-6 h-6 text-[#5698FF]"/>
                  <span className="text-[#1C243C] font-medium">Secure messaging with end-to-end encryption</span>
                </div>
                <div className="flex items-center gap-3">
                  <MdNotifications className="w-6 h-6 text-[#56E0A0]"/>
                  <span className="text-[#1C243C] font-medium">Smart notifications for critical updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <HiOutlineShare className="w-6 h-6 text-[#6B7AFF]"/>
                  <span className="text-[#1C243C] font-medium">Easy case sharing and consultation requests</span>
                </div>
              </div>
              
              <Link href="/auth/register" 
                    className="inline-flex items-center bg-gradient-to-r from-[#5698FF] to-[#56E0A0] text-white 
                             px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Try Collaboration Tools
                <MdArrowForward className="ml-2"/>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-[#DDE1EC]/50">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#1C243C]">Team Messages</h3>
                  <div className="w-3 h-3 bg-[#56E0A0] rounded-full animate-pulse"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#5698FF] to-[#56E0A0] rounded-full flex items-center justify-center text-white text-sm font-bold">
                      SM
                    </div>
                    <div className="flex-1 bg-[#F8F9FF] p-3 rounded-xl">
                      <div className="text-sm font-medium text-[#1C243C]">Dr. Sarah Mitchell</div>
                      <div className="text-sm text-[#8F96AA]">Patient shows 15% improvement in healing rate</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#6B7AFF] to-[#8B6DFF] rounded-full flex items-center justify-center text-white text-sm font-bold">
                      JN
                    </div>
                    <div className="flex-1 bg-[#F8F9FF] p-3 rounded-xl">
                      <div className="text-sm font-medium text-[#1C243C]">Nurse Johnson</div>
                      <div className="text-sm text-[#8F96AA]">Dressing changed, no signs of infection</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 p-3 bg-[#F8F9FF] rounded-xl">
                  <MdMessage className="w-5 h-5 text-[#8F96AA]"/>
                  <input type="text" placeholder="Type a message..." className="flex-1 bg-transparent text-sm outline-none"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#5698FF] to-[#56E0A0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transform Your Team Collaboration
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Enhance care coordination and improve patient outcomes with our comprehensive 
            collaboration platform designed for healthcare teams.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/auth/register"
              className="bg-white text-[#5698FF] px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-all"
            >
              Start Collaborating
            </Link>
            <Link 
              href="/local/contact"
              className="border border-white/20 text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-all"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
