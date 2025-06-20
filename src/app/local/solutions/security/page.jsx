import Link from 'next/link';
import { MdArrowForward, MdCheck, MdPlayArrow, MdSecurity, MdShield } from 'react-icons/md';
import { RiShieldCheckLine, RiStethoscopeLine, RiLockLine, RiEyeLine } from 'react-icons/ri';

const securityFeatures = [
  {
    title: 'HIPAA Compliance',
    description: 'Full HIPAA compliance with comprehensive safeguards and controls',
    icon: RiShieldCheckLine,
    benefits: ['Administrative safeguards', 'Physical safeguards', 'Technical safeguards', 'Breach notification']
  },
  {
    title: 'Data Encryption',
    description: 'End-to-end encryption for data at rest and in transit',
    icon: RiLockLine,
    benefits: ['AES-256 encryption', 'TLS 1.3 transport', 'Key management', 'Zero-knowledge architecture']
  },
  {
    title: 'Audit & Monitoring',
    description: 'Comprehensive audit trails and real-time security monitoring',
    icon: RiEyeLine,
    benefits: ['Access logging', 'Activity monitoring', 'Anomaly detection', 'Compliance reporting']
  }
];

const complianceStandards = [
  { standard: 'HIPAA', description: 'Health Insurance Portability and Accountability Act', status: 'Certified' },
  { standard: 'SOC 2 Type II', description: 'Service Organization Control 2', status: 'Certified' },
  { standard: 'HITRUST', description: 'Health Information Trust Alliance', status: 'Certified' },
  { standard: 'ISO 27001', description: 'Information Security Management', status: 'Certified' }
];

const securityMetrics = [
  { metric: '99.9%', label: 'Uptime SLA', description: 'Guaranteed availability' },
  { metric: '256-bit', label: 'AES Encryption', description: 'Military-grade security' },
  { metric: '<1 sec', label: 'Threat Detection', description: 'Real-time monitoring' },
  { metric: '24/7', label: 'Security Operations', description: 'Continuous protection' }
];

const securityControls = [
  'Multi-factor authentication',
  'Role-based access control',
  'Session management',
  'Data loss prevention',
  'Intrusion detection',
  'Vulnerability scanning',
  'Penetration testing',
  'Security awareness training'
];

export default function Security() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FAFBFF] via-white to-[#F8F9FF]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"/>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#FFB547]/10 via-[#FF8A47]/10 to-[#6B7AFF]/10 backdrop-blur-sm mb-8 border border-[#FFB547]/20">
              <RiShieldCheckLine className="w-5 h-5 text-[#FFB547] mr-3"/>
              <span className="text-sm text-[#FFB547] font-semibold">Compliance & Security</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold text-[#1C243C] mb-8 leading-[0.9] tracking-tight">
              Enterprise-Grade <br/>
              <span className="bg-gradient-to-r from-[#FFB547] via-[#FF8A47] to-[#6B7AFF] bg-clip-text text-transparent">
                Security &
              </span> <br/>
              <span className="text-5xl lg:text-6xl text-[#8F96AA]">Compliance</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-[#8F96AA] mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              Protect patient data with <span className="text-[#FFB547] font-semibold">enterprise-grade security</span> and comprehensive 
              compliance frameworks including <span className="text-[#6B7AFF] font-semibold">HIPAA, SOC 2, and HITRUST</span> certifications.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-20">
              <Link href="/auth/register" 
                    className="group bg-gradient-to-r from-[#FFB547] via-[#FF8A47] to-[#6B7AFF] text-white 
                             px-10 py-5 rounded-2xl font-semibold text-lg hover:shadow-2xl 
                             hover:shadow-[#FFB547]/25 transition-all duration-300 hover:scale-105 
                             flex items-center gap-3">
                <RiStethoscopeLine className="text-xl"/>
                Secure Your Data
                <MdArrowForward className="group-hover:translate-x-1 transition-transform duration-200"/>
              </Link>
              <Link href="/local/contact" 
                    className="px-10 py-5 rounded-2xl text-[#1C243C] border-2 border-[#DDE1EC] font-semibold text-lg
                             hover:bg-[#F8F9FF] hover:border-[#FFB547]/30 transition-all duration-300 
                             hover:shadow-lg flex items-center gap-3">
                <MdPlayArrow className="text-xl"/>
                Security Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Security Metrics */}
      <section className="py-20 bg-[#F8F9FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C243C] mb-4">
              Enterprise Security Standards
            </h2>
            <p className="text-[#8F96AA] max-w-2xl mx-auto">
              Industry-leading security measures protecting healthcare data
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {securityMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl border border-[#DDE1EC] hover:border-[#FFB547]/20 transition-all">
                <div className="text-4xl font-bold text-[#FFB547] mb-2">{metric.metric}</div>
                <div className="font-semibold text-[#1C243C] mb-2">{metric.label}</div>
                <div className="text-sm text-[#8F96AA]">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C243C] mb-4">
              Compliance Certifications
            </h2>
            <p className="text-[#8F96AA] max-w-2xl mx-auto">
              Comprehensive compliance with healthcare industry standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceStandards.map((compliance, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border border-[#DDE1EC]/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFB547]/10 to-[#FF8A47]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MdShield className="w-8 h-8 text-[#FFB547]"/>
                </div>
                <h3 className="text-xl font-bold text-[#1C243C] mb-2">{compliance.standard}</h3>
                <p className="text-[#8F96AA] mb-4 text-sm">{compliance.description}</p>
                <div className="inline-flex items-center gap-2 bg-[#56E0A0]/10 text-[#56E0A0] px-3 py-1 rounded-full text-sm font-semibold">
                  <MdCheck className="w-4 h-4"/>
                  {compliance.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-[#F8F9FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C243C] mb-4">
              Advanced Security Features
            </h2>
            <p className="text-[#8F96AA] max-w-2xl mx-auto">
              Comprehensive security controls protecting patient data and clinical workflows
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border border-[#DDE1EC]/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFB547]/10 to-[#FF8A47]/10 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-[#FFB547]"/>
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

      {/* Security Controls */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1C243C] mb-6">
                Comprehensive Security Controls
              </h2>
              <p className="text-[#8F96AA] mb-8 leading-relaxed">
                Our multi-layered security approach ensures the highest level of protection 
                for patient data and clinical information across all touchpoints.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {securityControls.map((control, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <MdCheck className="w-4 h-4 text-[#56E0A0]"/>
                    <span className="text-sm text-[#1C243C] font-medium">{control}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/auth/register" 
                    className="inline-flex items-center bg-gradient-to-r from-[#FFB547] to-[#FF8A47] text-white 
                             px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                Security Assessment
                <MdArrowForward className="ml-2"/>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-[#DDE1EC]/50">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#1C243C]">Security Dashboard</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#56E0A0] rounded-full"></div>
                    <span className="text-sm text-[#56E0A0] font-medium">Secure</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-[#56E0A0]/10 to-[#5698FF]/10 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-[#56E0A0]">100%</div>
                    <div className="text-sm text-[#8F96AA]">Compliance Score</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#FFB547]/10 to-[#FF8A47]/10 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-[#FFB547]">0</div>
                    <div className="text-sm text-[#8F96AA]">Security Incidents</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-[#F8F9FF] rounded-xl">
                    <div className="flex items-center gap-3">
                      <MdSecurity className="w-5 h-5 text-[#56E0A0]"/>
                      <span className="text-sm font-medium text-[#1C243C]">Data Encryption</span>
                    </div>
                    <span className="text-sm text-[#56E0A0] font-semibold">Active</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-[#F8F9FF] rounded-xl">
                    <div className="flex items-center gap-3">
                      <RiEyeLine className="w-5 h-5 text-[#56E0A0]"/>
                      <span className="text-sm font-medium text-[#1C243C]">Audit Logging</span>
                    </div>
                    <span className="text-sm text-[#56E0A0] font-semibold">Active</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-[#F8F9FF] rounded-xl">
                    <div className="flex items-center gap-3">
                      <RiShieldCheckLine className="w-5 h-5 text-[#56E0A0]"/>
                      <span className="text-sm font-medium text-[#1C243C]">Access Control</span>
                    </div>
                    <span className="text-sm text-[#56E0A0] font-semibold">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFB547] to-[#FF8A47]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Secure Your Healthcare Data Today
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Protect patient information with enterprise-grade security and comprehensive 
            compliance frameworks designed for healthcare organizations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/auth/register"
              className="bg-white text-[#FFB547] px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-all"
            >
              Start Secure Trial
            </Link>
            <Link 
              href="/local/contact"
              className="border border-white/20 text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-all"
            >
              Security Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
