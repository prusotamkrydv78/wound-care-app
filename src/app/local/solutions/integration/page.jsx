import Link from 'next/link';
import { MdArrowForward, MdCheck, MdPlayArrow, MdStar } from 'react-icons/md';
import { RiSettings4Line, RiStethoscopeLine, RiShieldCheckLine } from 'react-icons/ri';

const integrations = [
  {
    name: 'Epic',
    description: 'Seamless integration with Epic EHR systems',
    logo: 'E',
    color: 'from-[#6B7AFF] to-[#8B6DFF]',
    features: ['Real-time sync', 'Custom workflows', 'SMART on FHIR', 'Single sign-on']
  },
  {
    name: 'Cerner',
    description: 'Native integration with Cerner PowerChart',
    logo: 'C',
    color: 'from-[#56E0A0] to-[#5698FF]',
    features: ['Direct embedding', 'Automated documentation', 'Clinical decision support', 'Data exchange']
  },
  {
    name: 'Allscripts',
    description: 'Comprehensive Allscripts integration',
    logo: 'A',
    color: 'from-[#8B6DFF] to-[#6B7AFF]',
    features: ['API integration', 'Workflow optimization', 'Data synchronization', 'User authentication']
  }
];

const integrationBenefits = [
  { metric: '50+', label: 'EHR Systems', description: 'Supported integrations' },
  { metric: '99.9%', label: 'Uptime SLA', description: 'Guaranteed availability' },
  { metric: '<2 sec', label: 'Sync Speed', description: 'Real-time data exchange' },
  { metric: '100%', label: 'HL7 FHIR', description: 'Standards compliant' }
];

const features = [
  {
    title: 'Seamless Workflow Integration',
    description: 'Embed wound care tools directly into existing clinical workflows',
    icon: RiSettings4Line,
    benefits: ['Native EHR embedding', 'Single sign-on', 'Contextual launch', 'Workflow optimization']
  },
  {
    title: 'Real-time Data Sync',
    description: 'Bidirectional data exchange with automatic synchronization',
    icon: RiSettings4Line,
    benefits: ['Instant updates', 'Conflict resolution', 'Data validation', 'Audit trails']
  },
  {
    title: 'Standards Compliance',
    description: 'Built on industry standards for maximum interoperability',
    icon: RiShieldCheckLine,
    benefits: ['HL7 FHIR R4', 'SMART on FHIR', 'OAuth 2.0', 'HIPAA compliant']
  }
];

export default function Integration() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FAFBFF] via-white to-[#F8F9FF]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"/>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#8B6DFF]/10 via-[#6B7AFF]/10 to-[#5698FF]/10 backdrop-blur-sm mb-8 border border-[#8B6DFF]/20">
              <RiSettings4Line className="w-5 h-5 text-[#8B6DFF] mr-3"/>
              <span className="text-sm text-[#8B6DFF] font-semibold">EHR Integration</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold text-[#1C243C] mb-8 leading-[0.9] tracking-tight">
              Seamless <br/>
              <span className="bg-gradient-to-r from-[#8B6DFF] via-[#6B7AFF] to-[#5698FF] bg-clip-text text-transparent">
                EHR Integration
              </span> <br/>
              <span className="text-5xl lg:text-6xl text-[#8F96AA]">Platform</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-[#8F96AA] mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              Integrate wound care AI seamlessly into your existing EHR workflow with 
              <span className="text-[#8B6DFF] font-semibold"> 50+ supported systems</span>, real-time data sync, 
              and <span className="text-[#6B7AFF] font-semibold">HL7 FHIR compliance</span>.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-20">
              <Link href="/auth/register" 
                    className="group bg-gradient-to-r from-[#8B6DFF] via-[#6B7AFF] to-[#5698FF] text-white 
                             px-10 py-5 rounded-2xl font-semibold text-lg hover:shadow-2xl 
                             hover:shadow-[#8B6DFF]/25 transition-all duration-300 hover:scale-105 
                             flex items-center gap-3">
                <RiStethoscopeLine className="text-xl"/>
                Start Integration
                <MdArrowForward className="group-hover:translate-x-1 transition-transform duration-200"/>
              </Link>
              <Link href="/local/contact" 
                    className="px-10 py-5 rounded-2xl text-[#1C243C] border-2 border-[#DDE1EC] font-semibold text-lg
                             hover:bg-[#F8F9FF] hover:border-[#8B6DFF]/30 transition-all duration-300 
                             hover:shadow-lg flex items-center gap-3">
                <MdPlayArrow className="text-xl"/>
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-20 bg-[#F8F9FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C243C] mb-4">
              Enterprise-Grade Integration
            </h2>
            <p className="text-[#8F96AA] max-w-2xl mx-auto">
              Proven reliability and performance across healthcare institutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationBenefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl border border-[#DDE1EC] hover:border-[#8B6DFF]/20 transition-all">
                <div className="text-4xl font-bold text-[#8B6DFF] mb-2">{benefit.metric}</div>
                <div className="font-semibold text-[#1C243C] mb-2">{benefit.label}</div>
                <div className="text-sm text-[#8F96AA]">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported EHR Systems */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C243C] mb-4">
              Supported EHR Systems
            </h2>
            <p className="text-[#8F96AA] max-w-2xl mx-auto">
              Native integrations with leading electronic health record systems
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border border-[#DDE1EC]/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-br ${integration.color} rounded-2xl flex items-center justify-center mb-6 text-white text-2xl font-bold`}>
                  {integration.logo}
                </div>
                <h3 className="text-2xl font-bold text-[#1C243C] mb-4">{integration.name}</h3>
                <p className="text-[#8F96AA] mb-6 leading-relaxed">{integration.description}</p>
                <ul className="space-y-3">
                  {integration.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <MdCheck className="w-5 h-5 text-[#56E0A0]"/>
                      <span className="text-[#1C243C] font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="py-20 bg-[#F8F9FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C243C] mb-4">
              Advanced Integration Features
            </h2>
            <p className="text-[#8F96AA] max-w-2xl mx-auto">
              Comprehensive tools for seamless healthcare system integration
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border border-[#DDE1EC]/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B6DFF]/10 to-[#6B7AFF]/10 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-[#8B6DFF]"/>
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

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C243C] mb-4">
              Simple Implementation Process
            </h2>
            <p className="text-[#8F96AA] max-w-2xl mx-auto">
              Get up and running with minimal disruption to your clinical workflows
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Assessment', description: 'Evaluate your current EHR setup and requirements' },
              { step: '2', title: 'Configuration', description: 'Configure integration settings and data mappings' },
              { step: '3', title: 'Testing', description: 'Comprehensive testing in your environment' },
              { step: '4', title: 'Go-Live', description: 'Launch with full support and monitoring' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B6DFF] to-[#6B7AFF] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#1C243C] mb-2">{item.title}</h3>
                <p className="text-[#8F96AA]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#8B6DFF] to-[#6B7AFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Integrate with Your EHR?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Our integration specialists will work with your team to ensure a smooth, 
            seamless implementation that enhances your existing workflows.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/auth/register"
              className="bg-white text-[#8B6DFF] px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-all"
            >
              Start Integration
            </Link>
            <Link 
              href="/local/contact"
              className="border border-white/20 text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-all"
            >
              Contact Integration Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
