import { RiFirstAidKitLine, RiTeamLine, RiStethoscopeLine, RiUserHeartLine, RiShieldCheckLine, RiTimeLine } from 'react-icons/ri';
import { MdAnalytics, MdOutlineSupport, MdSecurity, MdSpeed, MdCheck, MdArrowForward } from 'react-icons/md';
import { HiOutlineChartBar, HiOutlineUsers, HiOutlineShieldCheck } from 'react-icons/hi';
import Link from 'next/link';

const mainServices = [
	{
		icon: RiFirstAidKitLine,
		title: 'AI-Powered Wound Assessment',
		description: 'Advanced computer vision technology provides instant, accurate wound measurements and analysis with 95% clinical accuracy.',
		features: ['Automated measurement', 'Tissue classification', 'Progress tracking', 'Clinical documentation'],
		color: 'text-[#6B7AFF]',
		bgColor: 'bg-[#6B7AFF]/10',
		borderColor: 'border-[#6B7AFF]/20'
	},
	{
		icon: MdAnalytics,
		title: 'Smart Analytics & Insights',
		description: 'Comprehensive healing metrics and predictive analytics help optimize treatment plans and improve patient outcomes.',
		features: ['Healing predictions', 'Treatment recommendations', 'Outcome analytics', 'Performance metrics'],
		color: 'text-[#56E0A0]',
		bgColor: 'bg-[#56E0A0]/10',
		borderColor: 'border-[#56E0A0]/20'
	},
	{
		icon: RiTeamLine,
		title: 'Team Collaboration Platform',
		description: 'Seamless communication and case sharing between healthcare providers, enabling coordinated care delivery.',
		features: ['Real-time messaging', 'Case sharing', 'Multi-provider access', 'Care coordination'],
		color: 'text-[#8B6DFF]',
		bgColor: 'bg-[#8B6DFF]/10',
		borderColor: 'border-[#8B6DFF]/20'
	}
];

const additionalServices = [
	{
		icon: MdOutlineSupport,
		title: '24/7 Clinical Support',
		description: 'Dedicated technical and clinical support',
		color: 'text-[#FFB547]',
		bgColor: 'bg-[#FFB547]/10'
	},
	{
		icon: RiShieldCheckLine,
		title: 'HIPAA Compliance',
		description: 'Enterprise-grade security and privacy',
		color: 'text-[#56E0A0]',
		bgColor: 'bg-[#56E0A0]/10'
	},
	{
		icon: RiTimeLine,
		title: 'Real-time Monitoring',
		description: 'Continuous patient progress tracking',
		color: 'text-[#6B7AFF]',
		bgColor: 'bg-[#6B7AFF]/10'
	},
	{
		icon: MdSecurity,
		title: 'Data Security',
		description: 'Bank-level encryption and protection',
		color: 'text-[#8B6DFF]',
		bgColor: 'bg-[#8B6DFF]/10'
	}
];

const processSteps = [
	{
		step: '01',
		title: 'Capture',
		description: 'Take a photo of the wound using any smartphone or tablet camera',
		icon: RiFirstAidKitLine
	},
	{
		step: '02',
		title: 'Analyze',
		description: 'Our AI instantly processes the image and provides detailed measurements',
		icon: MdAnalytics
	},
	{
		step: '03',
		title: 'Track',
		description: 'Monitor healing progress with automated documentation and insights',
		icon: HiOutlineChartBar
	},
	{
		step: '04',
		title: 'Collaborate',
		description: 'Share findings with your care team and coordinate treatment plans',
		icon: RiTeamLine
	}
];

export default function Services() {
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
							<span className="text-sm text-[#6B7AFF] font-semibold">Our Clinical Services</span>
						</div>

						<h1 className="text-6xl lg:text-8xl font-bold text-[#1C243C] mb-8 leading-[0.9] tracking-tight">
							Comprehensive <br/>
							<span className="bg-gradient-to-r from-[#6B7AFF] via-[#8B6DFF] to-[#5698FF] bg-clip-text text-transparent">
								Wound Care
							</span> <br/>
							<span className="text-5xl lg:text-6xl text-[#8F96AA]">Solutions</span>
						</h1>

						<p className="text-xl lg:text-2xl text-[#8F96AA] mb-12 leading-relaxed max-w-4xl mx-auto font-light">
							Our comprehensive suite of <span className="text-[#6B7AFF] font-semibold">FDA-cleared clinical tools</span> transforms wound care delivery through
							AI-powered assessments, predictive analytics, and seamless EHR integration - designed specifically
							for healthcare professionals who demand <span className="text-[#56E0A0] font-semibold">clinical excellence</span>.
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

			{/* Main Services Section */}
			<section className="py-20 bg-[#F8F9FF]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-[#1C243C] mb-4">
							Core Platform Features
						</h2>
						<p className="text-[#8F96AA] max-w-2xl mx-auto">
							Powerful tools designed specifically for healthcare professionals
						</p>
					</div>

					<div className="grid lg:grid-cols-3 gap-8">
						{mainServices.map((service, i) => (
							<div key={i} className={`group p-8 bg-white rounded-2xl border ${service.borderColor} hover:border-[#6B7AFF]/40 transition-all hover:shadow-lg`}>
								<div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
									<service.icon className={`w-8 h-8 ${service.color}`}/>
								</div>
								<h3 className="text-2xl font-semibold text-[#1C243C] mb-4">{service.title}</h3>
								<p className="text-[#8F96AA] mb-6 leading-relaxed">{service.description}</p>
								<ul className="space-y-3">
									{service.features.map((feature, idx) => (
										<li key={idx} className="flex items-center gap-3">
											<MdCheck className={`w-5 h-5 ${service.color}`}/>
											<span className="text-[#8F96AA]">{feature}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-[#1C243C] mb-4">
							How It Works
						</h2>
						<p className="text-[#8F96AA] max-w-2xl mx-auto">
							Simple, streamlined workflow that integrates seamlessly into your practice
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{processSteps.map((step, i) => (
							<div key={i} className="text-center group">
								<div className="relative mb-6">
									<div className="w-20 h-20 bg-gradient-to-br from-[#6B7AFF] to-[#8B6DFF] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
										<step.icon className="w-10 h-10 text-white"/>
									</div>
									<div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FFB547] rounded-full flex items-center justify-center">
										<span className="text-sm font-bold text-white">{step.step}</span>
									</div>
								</div>
								<h3 className="text-xl font-semibold text-[#1C243C] mb-3">{step.title}</h3>
								<p className="text-[#8F96AA] leading-relaxed">{step.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Additional Services */}
			<section className="py-20 bg-[#F8F9FF]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-[#1C243C] mb-4">
							Additional Benefits
						</h2>
						<p className="text-[#8F96AA] max-w-2xl mx-auto">
							Everything you need for comprehensive wound care management
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{additionalServices.map((service, i) => (
							<div key={i} className="group p-6 bg-white rounded-2xl border border-[#DDE1EC] hover:border-[#6B7AFF]/20 transition-all text-center">
								<div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
									<service.icon className={`w-8 h-8 ${service.color}`}/>
								</div>
								<h3 className="text-lg font-semibold text-[#1C243C] mb-3">{service.title}</h3>
								<p className="text-[#8F96AA]">{service.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-br from-[#6B7AFF] to-[#8B6DFF]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-4xl font-bold text-white mb-6">
						Ready to Advance Your Clinical Practice?
					</h2>
					<p className="text-white/90 mb-8 max-w-2xl mx-auto">
						Join 50,000+ healthcare professionals across 15+ specialties who trust our FDA-cleared platform
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
