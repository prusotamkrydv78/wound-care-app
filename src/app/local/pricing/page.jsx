import Link from 'next/link';
import { MdCheck } from 'react-icons/md';

const plans = [
  {
    name: 'Starter',
    price: '$49/mo',
    features: [
      'Up to 50 assessments/month',
      'Basic analytics',
      'Email support'
    ],
    highlight: false
  },
  {
    name: 'Professional',
    price: '$99/mo',
    features: [
      'Unlimited assessments',
      'Advanced analytics',
      '24/7 priority support'
    ],
    highlight: true
  }
];

export default function Pricing() {
  return (
    <main className="bg-[#F8F9FF]">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-[#1C243C] mb-4">Pricing Plans</h1>
          <p className="text-[#8F96AA] mb-12">
            Choose the plan that fits your practice. No hidden fees, cancel anytime.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {plans.map((plan, i) => (
              <div key={plan.name} className={`bg-white rounded-xl border border-[#DDE1EC] p-8 text-left
                ${plan.highlight ? 'shadow-lg border-[#6B7AFF]' : ''}`}>
                <h2 className="text-xl font-semibold text-[#1C243C] mb-2">{plan.name}</h2>
                <div className="text-3xl font-bold text-[#6B7AFF] mb-4">{plan.price}</div>
                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[#1C243C]">
                      <MdCheck className="text-[#56E0A0]"/>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/auth/register" className="inline-block bg-gradient-to-r from-[#6B7AFF] to-[#506EFF] text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
