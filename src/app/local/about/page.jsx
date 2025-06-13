import { MdShield, MdPeople, MdTrendingUp } from 'react-icons/md';
import Image from 'next/image';

const stats = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Healthcare Providers', value: '50K+' },
  { label: 'Patient Assessments', value: '2M+' },
  { label: 'Success Rate', value: '98%' },
];

const team = [
  {
    name: 'Dr. Sarah Miller',
    role: 'Chief Medical Officer',
    image: '/team/member1.jpg'
  },
  // ...more team members
];

export default function About() {
  return (
    <main className="bg-[#F8F9FF]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#6B7AFF] via-[#8B6DFF] to-[#506EFF]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-6">
              Revolutionizing Wound Care Management
            </h1>
            <p className="text-xl text-blue-100">
              Empowering healthcare professionals with advanced technology for better patient outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-[#6B7AFF] mb-2">{stat.value}</div>
                <div className="text-[#8F96AA]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1C243C] mb-4">Our Leadership Team</h2>
            <p className="text-[#8F96AA] max-w-2xl mx-auto">
              Meet the experts behind WoundCare's innovation and success
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white p-6 rounded-xl border border-[#DDE1EC] 
                                              hover:border-[#6B7AFF]/20 transition-all">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#1C243C]">{member.name}</h3>
                <p className="text-[#8F96AA]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
