import { MdEmail, MdPhone, MdLocationOn, MdArrowForward, MdSupport, MdSchedule } from 'react-icons/md';
import { RiCustomerServiceLine, RiTimeLine, RiMapPinLine } from 'react-icons/ri';
import Link from 'next/link';

const contactMethods = [
  {
    icon: MdEmail,
    title: 'Clinical Support',
    description: 'Get help from our clinical specialists',
    contact: 'clinical@woundcare.ai',
    action: 'Contact Clinical Team',
    color: 'text-[#6B7AFF]',
    bgColor: 'bg-[#6B7AFF]/10'
  },
  {
    icon: MdPhone,
    title: 'Technical Support',
    description: '24/7 technical assistance for healthcare professionals',
    contact: '+1 (555) 123-4567',
    action: 'Call Technical Support',
    color: 'text-[#56E0A0]',
    bgColor: 'bg-[#56E0A0]/10'
  },
  {
    icon: MdSchedule,
    title: 'Medical Demo',
    description: 'Book a personalized clinical demonstration',
    contact: 'Available for healthcare professionals',
    action: 'Schedule Medical Demo',
    color: 'text-[#8B6DFF]',
    bgColor: 'bg-[#8B6DFF]/10'
  }
];

const offices = [
  {
    city: 'San Francisco',
    address: '123 Healthcare Blvd, Suite 100',
    zipcode: 'San Francisco, CA 94105',
    phone: '+1 (555) 123-4567'
  },
  {
    city: 'New York',
    address: '456 Medical Center Dr, Floor 15',
    zipcode: 'New York, NY 10001',
    phone: '+1 (555) 987-6543'
  },
  {
    city: 'Austin',
    address: '789 Innovation Way, Building C',
    zipcode: 'Austin, TX 78701',
    phone: '+1 (555) 456-7890'
  }
];

export default function Contact() {
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
              <span className="text-sm text-[#6B7AFF] font-medium">Contact Us</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-[#1C243C] mb-8 leading-tight">
              Get in Touch <br/>
              <span className="bg-gradient-to-r from-[#6B7AFF] to-[#8B6DFF] bg-clip-text text-transparent">
                With Our Team
              </span>
            </h1>
            <p className="text-xl text-[#8F96AA] mb-12 leading-relaxed max-w-3xl mx-auto">
              Have questions about our FDA-cleared platform? Need clinical support? Want to schedule a medical demo?
              Our team of healthcare professionals and technical experts is here to help you transform your wound care practice.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-[#F8F9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C243C] mb-4">
              How Can We Help You?
            </h2>
            <p className="text-[#8F96AA] max-w-2xl mx-auto">
              Choose the best way to reach us based on your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-[#DDE1EC] hover:border-[#6B7AFF]/20 transition-all group text-center">
                <div className={`w-16 h-16 rounded-2xl ${method.bgColor} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <method.icon className={`w-8 h-8 ${method.color}`}/>
                </div>
                <h3 className="text-xl font-semibold text-[#1C243C] mb-3">{method.title}</h3>
                <p className="text-[#8F96AA] mb-4">{method.description}</p>
                <p className="font-medium text-[#1C243C] mb-6">{method.contact}</p>
                <button className={`w-full ${method.color.replace('text-', 'bg-')} text-white py-3 rounded-xl font-medium hover:opacity-90 transition-all`}>
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-[#1C243C] mb-4">
                  Send us a Message
                </h2>
                <p className="text-[#8F96AA]">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#1C243C] font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-[#DDE1EC] focus:border-[#6B7AFF] focus:ring-2 focus:ring-[#6B7AFF]/20 outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-[#1C243C] font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-[#DDE1EC] focus:border-[#6B7AFF] focus:ring-2 focus:ring-[#6B7AFF]/20 outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#1C243C] font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-[#DDE1EC] focus:border-[#6B7AFF] focus:ring-2 focus:ring-[#6B7AFF]/20 outline-none transition-all"
                    placeholder="john.doe@hospital.com"
                  />
                </div>

                <div>
                  <label className="block text-[#1C243C] font-medium mb-2">Organization</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-[#DDE1EC] focus:border-[#6B7AFF] focus:ring-2 focus:ring-[#6B7AFF]/20 outline-none transition-all"
                    placeholder="General Hospital"
                  />
                </div>

                <div>
                  <label className="block text-[#1C243C] font-medium mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-[#DDE1EC] focus:border-[#6B7AFF] focus:ring-2 focus:ring-[#6B7AFF]/20 outline-none transition-all">
                    <option>Clinical Inquiry</option>
                    <option>Technical Support</option>
                    <option>EHR Integration</option>
                    <option>Medical Demo Request</option>
                    <option>Implementation Support</option>
                    <option>Clinical Training</option>
                    <option>Healthcare Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#1C243C] font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-[#DDE1EC] focus:border-[#6B7AFF] focus:ring-2 focus:ring-[#6B7AFF]/20 outline-none transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1C243C] text-white py-4 rounded-xl font-medium hover:bg-[#2A3441] transition-all group"
                >
                  Send Message
                  <MdArrowForward className="inline ml-2 group-hover:translate-x-1 transition-transform"/>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-[#1C243C] mb-4">
                  Visit Our Offices
                </h2>
                <p className="text-[#8F96AA]">
                  We have offices across the country to better serve our healthcare partners.
                </p>
              </div>

              <div className="space-y-8">
                {offices.map((office, index) => (
                  <div key={index} className="bg-[#F8F9FF] p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold text-[#1C243C] mb-3">{office.city}</h3>
                    <div className="space-y-2 text-[#8F96AA]">
                      <div className="flex items-start gap-3">
                        <MdLocationOn className="w-5 h-5 text-[#6B7AFF] mt-0.5"/>
                        <div>
                          <p>{office.address}</p>
                          <p>{office.zipcode}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MdPhone className="w-5 h-5 text-[#6B7AFF]"/>
                        <p>{office.phone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-12 bg-gradient-to-br from-[#6B7AFF] to-[#8B6DFF] p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-white/80 text-sm">Support Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">&lt;2hr</div>
                    <div className="text-white/80 text-sm">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50K+</div>
                    <div className="text-white/80 text-sm">Happy Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">99.9%</div>
                    <div className="text-white/80 text-sm">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F8F9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#1C243C] mb-6">
            Ready to Advance Your Clinical Practice?
          </h2>
          <p className="text-[#8F96AA] mb-8 max-w-2xl mx-auto">
            Don't wait to experience the future of wound care. Start your 30-day clinical trial today
            and see how our FDA-cleared platform can improve patient outcomes in your practice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/auth/register"
              className="bg-[#1C243C] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#2A3441] transition-all"
            >
              Start Clinical Trial
            </Link>
            <button className="border border-[#DDE1EC] text-[#1C243C] px-8 py-4 rounded-xl font-medium hover:bg-[#F8F9FF] transition-all">
              Schedule Medical Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
