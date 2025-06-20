import Link from 'next/link';
import { MdArrowForward, MdCheck, MdPlayArrow, MdStar } from 'react-icons/md';
import { RiBarChartLine, RiStethoscopeLine, RiLineChartLine } from 'react-icons/ri';
import { HiOutlineChartBar, HiOutlineTrendingUp } from 'react-icons/hi';

const features = [
  {
    title: 'Healing Predictions',
    description: 'AI-powered forecasting for wound healing timelines and outcomes',
    icon: HiOutlineTrendingUp,
    benefits: ['Predictive modeling', 'Timeline forecasting', 'Risk assessment', 'Outcome probability']
  },
  {
    title: 'Performance Analytics',
    description: 'Comprehensive metrics and KPIs for clinical performance tracking',
    icon: RiBarChartLine,
    benefits: ['Clinical KPIs', 'Provider performance', 'Department metrics', 'Benchmarking data']
  },
  {
    title: 'Real-time Dashboards',
    description: 'Interactive dashboards with live data visualization and insights',
    icon: HiOutlineChartBar,
    benefits: ['Live data feeds', 'Custom dashboards', 'Interactive charts', 'Mobile access']
  }
];

const analyticsMetrics = [
  { metric: '92%', label: 'Prediction Accuracy', description: 'For healing timeline forecasts' },
  { metric: '45%', label: 'Improved Outcomes', description: 'With data-driven decisions' },
  { metric: '70%', label: 'Faster Insights', description: 'Compared to manual analysis' },
  { metric: '24/7', label: 'Real-time Monitoring', description: 'Continuous data tracking' }
];

const dashboardFeatures = [
  'Patient outcome trends',
  'Healing velocity metrics',
  'Treatment effectiveness',
  'Resource utilization',
  'Quality indicators',
  'Cost analysis',
  'Risk stratification',
  'Comparative analytics'
];

export default function Analytics() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#FAFBFF] via-white to-[#F8F9FF]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"/>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#56E0A0]/10 via-[#5698FF]/10 to-[#6B7AFF]/10 backdrop-blur-sm mb-8 border border-[#56E0A0]/20">
              <RiBarChartLine className="w-5 h-5 text-[#56E0A0] mr-3"/>
              <span className="text-sm text-[#56E0A0] font-semibold">Clinical Analytics</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold text-[#1C243C] mb-8 leading-[0.9] tracking-tight">
              Advanced <br/>
              <span className="bg-gradient-to-r from-[#56E0A0] via-[#5698FF] to-[#6B7AFF] bg-clip-text text-transparent">
                Clinical Analytics
              </span> <br/>
              <span className="text-5xl lg:text-6xl text-[#8F96AA]">Platform</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-[#8F96AA] mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              Transform clinical decision-making with <span className="text-[#56E0A0] font-semibold">AI-powered analytics</span> that provide 
              predictive insights, real-time dashboards, and comprehensive performance metrics for superior patient outcomes.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-20">
              <Link href="/auth/register" 
                    className="group bg-gradient-to-r from-[#56E0A0] via-[#5698FF] to-[#6B7AFF] text-white 
                             px-10 py-5 rounded-2xl font-semibold text-lg hover:shadow-2xl 
                             hover:shadow-[#56E0A0]/25 transition-all duration-300 hover:scale-105 
                             flex items-center gap-3">
                <RiStethoscopeLine className="text-xl"/>
                Start Clinical Trial
                <MdArrowForward className="group-hover:translate-x-1 transition-transform duration-200"/>
              </Link>
              <Link href="/local/contact" 
                    className="px-10 py-5 rounded-2xl text-[#1C243C] border-2 border-[#DDE1EC] font-semibold text-lg
                             hover:bg-[#F8F9FF] hover:border-[#56E0A0]/30 transition-all duration-300 
                             hover:shadow-lg flex items-center gap-3">
                <MdPlayArrow className="text-xl"/>
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Metrics */}
      <section className="py-20 bg-[#F8F9FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C243C] mb-4">
              Data-Driven Clinical Excellence
            </h2>
            <p className="text-[#8F96AA] max-w-2xl mx-auto">
              Proven results from healthcare institutions using our analytics platform
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {analyticsMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl border border-[#DDE1EC] hover:border-[#56E0A0]/20 transition-all">
                <div className="text-4xl font-bold text-[#56E0A0] mb-2">{metric.metric}</div>
                <div className="font-semibold text-[#1C243C] mb-2">{metric.label}</div>
                <div className="text-sm text-[#8F96AA]">{metric.description}</div>
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
              Comprehensive Analytics Suite
            </h2>
            <p className="text-[#8F96AA] max-w-2xl mx-auto">
              Advanced analytics tools designed for modern healthcare environments
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border border-[#DDE1EC]/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-[#56E0A0]/10 to-[#5698FF]/10 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-[#56E0A0]"/>
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

      {/* Dashboard Preview */}
      <section className="py-20 bg-[#F8F9FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1C243C] mb-6">
                Real-time Clinical Dashboards
              </h2>
              <p className="text-[#8F96AA] mb-8 leading-relaxed">
                Access comprehensive analytics through intuitive dashboards that provide actionable insights 
                for clinical decision-making and performance optimization.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {dashboardFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <MdCheck className="w-4 h-4 text-[#56E0A0]"/>
                    <span className="text-sm text-[#1C243C] font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/auth/register" 
                    className="inline-flex items-center bg-gradient-to-r from-[#56E0A0] to-[#5698FF] text-white 
                             px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                View Live Demo
                <MdArrowForward className="ml-2"/>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-[#DDE1EC]/50">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#1C243C]">Clinical Dashboard</h3>
                  <div className="w-3 h-3 bg-[#56E0A0] rounded-full animate-pulse"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-[#56E0A0]/10 to-[#5698FF]/10 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-[#56E0A0]">94.2%</div>
                    <div className="text-sm text-[#8F96AA]">Healing Rate</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#6B7AFF]/10 to-[#8B6DFF]/10 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-[#6B7AFF]">12.5</div>
                    <div className="text-sm text-[#8F96AA]">Avg Days</div>
                  </div>
                </div>
                
                <div className="h-32 bg-gradient-to-br from-[#F8F9FF] to-[#F0F4FF] rounded-xl p-4 flex items-end justify-between">
                  {[65, 78, 45, 89, 67, 92, 88, 95].map((height, i) => (
                    <div key={i} className="bg-gradient-to-t from-[#56E0A0] to-[#5698FF] rounded-t-lg flex-1 mx-1" style={{height: `${height}%`}}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#56E0A0] to-[#5698FF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transform Your Clinical Analytics
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Unlock the power of data-driven healthcare with our advanced analytics platform. 
            Make informed decisions and improve patient outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/auth/register"
              className="bg-white text-[#56E0A0] px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-all"
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
