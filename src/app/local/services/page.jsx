import { RiFirstAidKitLine, RiTeamLine } from 'react-icons/ri';
import { MdAnalytics, MdOutlineSupport } from 'react-icons/md';

const services = [
	{
		icon: RiFirstAidKitLine,
		title: 'AI-Powered Assessment',
		description:
			'Precise wound measurement and analysis using advanced computer vision',
		color: '#8B6DFF',
	},
	{
		icon: MdAnalytics,
		title: 'Smart Analytics',
		description:
			'Comprehensive healing metrics and predictive insights for better outcomes',
		color: '#5698FF',
	},
	{
		icon: RiTeamLine,
		title: 'Team Collaboration',
		description: 'Seamless communication and case sharing between providers',
		color: '#6B7AFF',
	},
	{
		icon: MdOutlineSupport,
		title: '24/7 Support',
		description: 'Dedicated technical and clinical support for all users',
		color: '#56E0A0',
	},
];

export default function Services() {
	return (
		<main className="bg-[#F8F9FF]">
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h1 className="text-4xl font-bold text-[#1C243C] mb-4">
							Our Services
						</h1>
						<p className="text-[#8F96AA] max-w-2xl mx-auto">
							Comprehensive wound care management solutions for healthcare
							providers
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{services.map((service, i) => (
							<div
								key={i}
								className="group p-6 bg-white rounded-xl border border-[#DDE1EC] hover:border-[#6B7AFF]/20 transition-all"
							>
								<div
									className={`w-12 h-12 rounded-xl`}
									style={{
										backgroundColor: `${service.color}20`,
									}}
								>
									<service.icon
										style={{ color: service.color }}
										className="w-6 h-6 mx-auto my-3"
									/>
								</div>
								<h3 className="text-xl font-semibold text-[#1C243C] mb-3">
									{service.title}
								</h3>
								<p className="text-[#8F96AA]">{service.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
