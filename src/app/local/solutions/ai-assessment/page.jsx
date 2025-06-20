import Link from 'next/link';
import { MdArrowForward, MdCheck, MdPlayArrow, MdStar } from 'react-icons/md';
import { RiFirstAidKitLine, RiStethoscopeLine, RiAwardLine, RiTimeLine } from 'react-icons/ri';

const features = [
  {
    title: 'Instant Wound Measurement',
    description: 'AI-powered computer vision provides precise measurements in seconds',
    icon: RiFirstAidKitLine,
    benefits: ['95% clinical accuracy', 'Sub-millimeter precision', 'Automated documentation', 'Real-time results']
  },
  {
    title: 'Tissue Classification',
    description: 'Advanced algorithms identify and classify different tissue types',
    icon: RiStethoscopeLine,
    benefits: ['Granulation tissue detection', 'Necrotic tissue identification', 'Epithelialization tracking', 'Infection indicators']
  },
  {
    title: 'Progress Tracking',
    description: 'Comprehensive healing analytics and trend monitoring',
    icon: RiTimeLine,
    benefits: ['Healing velocity metrics', 'Comparative analysis', 'Predictive insights', 'Outcome forecasting']
  }
];

const clinicalBenefits = [
  { metric: '95%', label: 'Clinical Accuracy', description: 'Validated across 10,000+ assessments' },
  { metric: '60%', label: 'Time Savings', description: 'Reduced documentation burden' },
  { metric: '40%', label: 'Faster Healing', description: 'Improved patient outcomes' },
  { metric: '100%', label: 'HIPAA Compliant', description: 'Enterprise-grade security' }
];

const testimonials = [
  {
    quote: "The AI assessment has revolutionized our wound care protocols. The accuracy and speed are remarkable.",
    author: "Dr. Sarah Mitchell, MD",
    role: "Chief of Wound Care, Mayo Clinic",
    rating: 5
  },
  {
    quote: "We've seen a 40% improvement in healing times since implementing the AI assessment technology.",
    author: "Dr. Michael Chen, MD",
    role: "Plastic Surgery, Johns Hopkins",
    rating: 5
  }
];

export default function AIAssessment() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FAFBFF] via-white to-[#F8F9FF]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"/>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#6B7AFF]/10 via-[#8B6DFF]/10 to-[#5698FF]/10 backdrop-blur-sm mb-8 border border-[#6B7AFF]/20">
              <RiFirstAidKitLine className="w-5 h-5 text-[#6B7AFF] mr-3"/>
              <span className="text-sm text-[#6B7AFF] font-semibold">AI Wound Assessment</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold text-[#1C243C] mb-8 leading-[0.9] tracking-tight">
              FDA-Cleared <br/>
              <span className="bg-gradient-to-r from-[#6B7AFF] via-[#8B6DFF] to-[#5698FF] bg-clip-text text-transparent">
                AI Assessment
              </span> <br/>
              <span className="text-5xl lg:text-6xl text-[#8F96AA]">Technology</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-[#8F96AA] mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              Transform wound care with <span className="text-[#6B7AFF] font-semibold">95% accurate AI technology</span> that provides 
              instant measurements, tissue classification, and healing predictions - all from a simple smartphone photo.
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
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Benefits */}
      <section className="py-20 bg-[#F8F9FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C243C] mb-4">
              Proven Clinical Results
            </h2>
            <p className="text-[#8F96AA] max-w-2xl mx-auto">
              Validated through extensive clinical trials and real-world implementation
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {clinicalBenefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl border border-[#DDE1EC] hover:border-[#6B7AFF]/20 transition-all">
                <div className="text-4xl font-bold text-[#6B7AFF] mb-2">{benefit.metric}</div>
                <div className="font-semibold text-[#1C243C] mb-2">{benefit.label}</div>
                <div className="text-sm text-[#8F96AA]">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C243C] mb-4">
              Advanced AI Capabilities
            </h2>
            <p className="text-[#8F96AA] max-w-2xl mx-auto">
              Comprehensive wound assessment powered by cutting-edge artificial intelligence
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border border-[#DDE1EC]/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6B7AFF]/10 to-[#8B6DFF]/10 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-[#6B7AFF]"/>
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

      {/* Testimonials */}
      <section className="py-20 bg-[#F8F9FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C243C] mb-4">
              Trusted by Leading Healthcare Professionals
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-[#DDE1EC] shadow-sm">
                <div className="flex gap-1 text-[#56E0A0] mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <MdStar key={i} className="w-5 h-5"/>
                  ))}
                </div>
                <blockquote className="text-[#1C243C] mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-medium text-[#1C243C]">{testimonial.author}</div>
                  <div className="text-sm text-[#8F96AA]">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#6B7AFF] to-[#8B6DFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience AI-Powered Wound Assessment
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of healthcare professionals using our FDA-cleared AI technology 
            to improve patient outcomes and streamline clinical workflows.
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
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
