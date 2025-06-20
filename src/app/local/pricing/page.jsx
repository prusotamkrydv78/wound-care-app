import Link from 'next/link';
import { MdCheck, MdArrowForward, MdStar } from 'react-icons/md';
import { RiFirstAidKitLine, RiTeamLine, RiStethoscopeLine } from 'react-icons/ri';

const plans = [
  {
    name: 'Standard',
    price: '$199',
    period: '/month',
    description: 'Get key community-building features, all in one place. Scale and community with workflows.',
    features: [
      'Advanced administration',
      'Unlimited projects creation',
      'Up to 1,000 members',
      'Priority support',
      'Enhanced email sending'
    ],
    highlight: false,
    popular: true
  },
  {
    name: 'Growth',
    price: '$275',
    period: '/month',
    description: 'Get key community-building features, all in one place. Scale and community with workflows.',
    features: [
      'Advanced data enrichment',
      'Unlimited projects creation',
      'Up to 5,000 members',
      'Priority support',
      'Enhanced email sending'
    ],
    highlight: true,
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$389',
    period: '/month',
    description: 'Get key community-building features, all in one place. Scale and community with workflows.',
    features: [
      'Advanced data enrichment',
      'Unlimited projects creation',
      'Up to 10,000 members',
      'Priority support',
      'Enhanced email sending'
    ],
    highlight: false,
    popular: true
  }
];

const testimonials = [
  {
    company: 'Mayo Clinic',
    logo: 'M',
    text: 'WoundCare AI has transformed our wound assessment protocols. The 95% accuracy rate and seamless EHR integration have significantly improved our clinical workflows and patient outcomes.',
    author: 'Dr. Sarah Mitchell, MD',
    role: 'Chief of Wound Care',
    rating: 5,
    score: '5.00 • Exceptional Clinical Tool'
  },
  {
    company: 'Johns Hopkins',
    logo: 'JH',
    text: 'The AI-powered measurements and predictive analytics have revolutionized how we track healing progress. Documentation time decreased by 60% while maintaining the highest clinical standards.',
    author: 'Dr. Michael Chen, MD',
    role: 'Plastic Surgery Department',
    rating: 5,
    score: '5.00 • Game-Changing Technology'
  }
];

const faqs = [
  {
    question: 'What clinical evidence supports the platform\'s effectiveness?',
    answer: 'Our platform is backed by peer-reviewed studies published in the Journal of Wound Care and Advances in Wound Care, demonstrating 40% faster healing times and 60% reduction in documentation burden. Clinical outcomes data is available from our research partnerships with leading medical institutions.'
  },
  {
    question: 'How does the platform integrate with our existing EHR system?',
    answer: 'WoundCare AI seamlessly integrates with 50+ EHR systems including Epic, Cerner, and Allscripts through HL7 FHIR standards. Our implementation team provides white-glove setup and training to ensure smooth integration with your existing clinical workflows.'
  },
  {
    question: 'What training and support do you provide for clinical staff?',
    answer: 'We provide comprehensive onboarding including live training sessions, clinical workflow optimization, and 24/7 technical support. Our clinical success team includes certified wound care specialists who provide ongoing education and best practice guidance.'
  },
  {
    question: 'How do you ensure HIPAA compliance and data security?',
    answer: 'We maintain SOC 2 Type II certification and HIPAA compliance with end-to-end encryption, role-based access controls, and audit logging. All data is stored in HITRUST-certified data centers with 99.9% uptime SLA and regular third-party security assessments.'
  },
  {
    question: 'Can the platform be customized for different medical specialties?',
    answer: 'Yes, our platform supports customizable protocols for various specialties including plastic surgery, dermatology, podiatry, and general surgery. We offer specialty-specific templates, assessment criteria, and reporting features tailored to your clinical practice requirements.'
  },
  {
    question: 'What is the implementation timeline for our healthcare facility?',
    answer: 'Implementation typically takes 2-4 weeks depending on your facility size and EHR complexity. This includes system integration, staff training, workflow optimization, and go-live support. Our dedicated implementation team ensures minimal disruption to your clinical operations.'
  }
];

export default function Pricing() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8F9FF] via-white to-[#F0F4FF]"/>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#6B7AFF]/10 backdrop-blur-sm mb-8">
              <span className="flex h-2 w-2 rounded-full bg-[#56E0A0] mr-2"/>
              <span className="text-sm text-[#6B7AFF] font-medium">Pricing Plans</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-[#1C243C] mb-8 leading-tight">
              Find the Right Plan for <br/>
              <span className="bg-gradient-to-r from-[#6B7AFF] to-[#8B6DFF] bg-clip-text text-transparent">
                Your Organization
              </span>
            </h1>
            <p className="text-xl text-[#8F96AA] mb-12 leading-relaxed max-w-3xl mx-auto">
              Choose the perfect clinical plan for your healthcare practice. All plans include our FDA-cleared AI technology,
              HIPAA-compliant infrastructure, and 24/7 clinical support - with scalable options for every healthcare setting.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C243C] mb-4">
              Testimonials from our <br/>
              valued clients.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-[#DDE1EC] shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-8 h-8 ${testimonial.company === 'slack' ? 'bg-[#4A154B]' : 'bg-[#0070BA]'} rounded flex items-center justify-center`}>
                    <span className="text-white text-sm font-bold">{testimonial.logo}</span>
                  </div>
                  <span className="font-bold text-[#1C243C]">{testimonial.company}</span>
                </div>
                <blockquote className="text-[#1C243C] mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-[#1C243C]">{testimonial.author}</div>
                    <div className="text-sm text-[#8F96AA]">{testimonial.role}</div>
                  </div>
                  <div className="flex gap-1 text-[#56E0A0]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <MdStar key={i} className="w-4 h-4"/>
                    ))}
                  </div>
                </div>
                <div className="mt-4 text-sm text-[#8F96AA]">{testimonial.score}</div>
              </div>
            ))}
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
              Find the Right Plan for <br/>
              Your Organization
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-[#DDE1EC] relative">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-xl font-bold text-[#1C243C]">{plan.name}</h3>
                  {plan.popular && (
                    <span className="bg-[#FFB547] text-white text-xs px-2 py-1 rounded-full">Most Popular</span>
                  )}
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#1C243C]">{plan.price}</span>
                  <span className="text-[#8F96AA]">{plan.period}</span>
                </div>
                <p className="text-[#8F96AA] mb-6">
                  {plan.description}
                </p>
                <button className="w-full bg-[#1C243C] text-white py-3 rounded-xl font-medium hover:bg-[#2A3441] transition-colors mb-6">
                  Try for free trial
                </button>
                <div>
                  <h4 className="font-semibold text-[#1C243C] mb-4">What's included</h4>
                  <ul className="space-y-3 text-sm text-[#8F96AA]">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <MdCheck className="w-4 h-4 text-[#56E0A0]"/>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
              We'll be There When <br/>
              You Need us
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-[#DDE1EC] rounded-xl p-6">
                <h3 className="font-semibold text-[#1C243C] mb-2">{faq.question}</h3>
                {faq.answer && (
                  <p className="text-[#8F96AA]">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#6B7AFF] to-[#8B6DFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
