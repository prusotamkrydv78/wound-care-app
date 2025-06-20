import Link from 'next/link';
import { MdArrowForward, MdCheck, MdPlayArrow } from 'react-icons/md';
import { RiFirstAidKitLine, RiBarChartLine, RiSettings4Line, RiTeamLine, RiShieldCheckLine, RiStethoscopeLine } from 'react-icons/ri';

const solutions = [
  {
    id: 'ai-assessment',
    title: 'AI Wound Assessment',
    description: 'FDA-cleared AI technology for precise wound measurement and tissue classification',
    icon: RiFirstAidKitLine,
    color: 'from-[#6B7AFF] to-[#8B6DFF]',
    features: ['95% clinical accuracy', 'Instant measurements', 'Tissue classification', 'Progress tracking'],
    href: '/local/solutions/ai-assessment'
  },
  {
    id: 'analytics',
    title: 'Clinical Analytics',
    description: 'Advanced healing insights and predictive analytics for better patient outcomes',
    icon: RiBarChartLine,
    color: 'from-[#56E0A0] to-[#5698FF]',
    features: ['Healing predictions', 'Outcome analytics', 'Performance metrics', 'Clinical insights'],
    href: '/local/solutions/analytics'
  },
  {
    id: 'integration',
    title: 'EHR Integration',
    description: 'Seamless workflow integration with 50+ healthcare systems',
    icon: RiSettings4Line,
    color: 'from-[#8B6DFF] to-[#6B7AFF]',
    features: ['Epic & Cerner support', 'HL7 FHIR standards', 'Real-time sync', 'Custom workflows'],
    href: '/local/solutions/integration'
  },
  {
    id: 'collaboration',
    title: 'Team Collaboration',
    description: 'Multi-provider care coordination and communication tools',
    icon: RiTeamLine,
    color: 'from-[#5698FF] to-[#56E0A0]',
    features: ['Real-time messaging', 'Case sharing', 'Care coordination', 'Multi-provider access'],
    href: '/local/solutions/collaboration'
  },
  {
    id: 'security',
    title: 'Compliance & Security',
    description: 'HIPAA-compliant platform with enterprise-grade security',
    icon: RiShieldCheckLine,
    color: 'from-[#FFB547] to-[#FF8A47]',
    features: ['HIPAA compliance', 'SOC 2 certified', 'End-to-end encryption', 'Audit logging'],
    href: '/local/solutions/security'
  }
];

export default function Solutions() {
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
              <span className="text-sm text-[#6B7AFF] font-semibold">Clinical Solutions</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold text-[#1C243C] mb-8 leading-[0.9] tracking-tight">
              Comprehensive <br/>
              <span className="bg-gradient-to-r from-[#6B7AFF] via-[#8B6DFF] to-[#5698FF] bg-clip-text text-transparent">
                Clinical
              </span> <br/>
              <span className="text-5xl lg:text-6xl text-[#8F96AA]">Solutions</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-[#8F96AA] mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              Discover our complete suite of <span className="text-[#6B7AFF] font-semibold">FDA-cleared AI tools</span> designed 
              to transform wound care delivery and improve patient outcomes across all healthcare settings.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-20">
              <Link href="/auth/register" 
                    className="group bg-gradient-to-r from-[#6B7AFF] via-[#8B6DFF] to-[#5698FF] text-white 
                             px-10 py-5 rounded-2xl font-semibold text-lg hover:shadow-2xl 
                             hover:shadow-[#6B7AFF]/25 transition-all duration-300 hover:scale-105 
                             flex items-center gap-3">
                <RiStethoscopeLine className="text-xl"/>
                Start Clinical Trial
                <MdArrowForward className="group-hover:translate-x-1 transition-transform duration-200"/>
              </Link>
              <Link href="/local/contact" 
                    className="px-10 py-5 rounded-2xl text-[#1C243C] border-2 border-[#DDE1EC] font-semibold text-lg
                             hover:bg-[#F8F9FF] hover:border-[#6B7AFF]/30 transition-all duration-300 
                             hover:shadow-lg flex items-center gap-3">
                <MdPlayArrow className="text-xl"/>
                Schedule Medical Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-32 bg-gradient-to-br from-white via-[#FAFBFF] to-[#F8F9FF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-[#1C243C] mb-6">
              Choose Your <span className="bg-gradient-to-r from-[#6B7AFF] to-[#8B6DFF] bg-clip-text text-transparent">Clinical Solution</span>
            </h2>
            <p className="text-xl text-[#8F96AA] max-w-3xl mx-auto">
              Each solution is designed to address specific clinical needs while integrating seamlessly with your existing workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={solution.id} 
                   className="bg-white p-8 rounded-3xl border border-[#DDE1EC]/50 shadow-lg hover:shadow-2xl 
                            transition-all duration-300 hover:scale-105 group relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${solution.color}`}></div>
                
                <div className={`w-16 h-16 bg-gradient-to-br ${solution.color.replace('from-', 'from-').replace('to-', 'to-')}/10 rounded-2xl 
                               flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className={`w-8 h-8 bg-gradient-to-br ${solution.color} bg-clip-text text-transparent`}/>
                </div>
                
                <h3 className="text-2xl font-bold text-[#1C243C] mb-4">{solution.title}</h3>
                <p className="text-[#8F96AA] mb-6 leading-relaxed">{solution.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-[#56E0A0]/10 rounded-full flex items-center justify-center">
                        <MdCheck className="w-3 h-3 text-[#56E0A0]"/>
                      </div>
                      <span className="text-[#1C243C] font-medium text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href={solution.href}
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${solution.color} text-white 
                               px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group`}>
                  Learn More
                  <MdArrowForward className="group-hover:translate-x-1 transition-transform duration-200"/>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#6B7AFF] to-[#8B6DFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Clinical Practice?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join 50,000+ healthcare professionals who trust our FDA-cleared platform 
            for superior patient outcomes and streamlined clinical workflows.
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
