import { MdTrendingUp, MdBarChart, MdPieChart, MdTimeline } from 'react-icons/md';

export default function Analytics() {
  const metrics = [
    { title: 'Total Patients', value: '156', trend: '+12%', period: 'vs last month' },
    { title: 'Recovery Rate', value: '92%', trend: '+5%', period: 'vs last month' },
    { title: 'Avg Treatment Time', value: '21d', trend: '-2d', period: 'vs last month' },
    { title: 'Success Rate', value: '89%', trend: '+3%', period: 'vs last month' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#1C243C]">Analytics Overview</h1>
        <select className="border border-[#DDE1EC] rounded-lg px-4 py-2 text-sm">
          <option>Last 30 days</option>
          <option>Last 90 days</option>
          <option>Last year</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-[#DDE1EC]">
            <h3 className="text-[#8F96AA] text-sm">{metric.title}</h3>
            <p className="text-2xl font-bold text-[#1C243C] mt-2">{metric.value}</p>
            <div className="flex items-center mt-2 text-sm">
              <MdTrendingUp className="text-[#56E0A0] mr-1" />
              <span className="text-[#56E0A0] mr-1">{metric.trend}</span>
              <span className="text-[#8F96AA]">{metric.period}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-[#DDE1EC]">
          <h2 className="text-[#1C243C] font-semibold mb-4">Treatment Progress</h2>
          <div className="h-[300px] flex items-center justify-center">
            <span className="text-[#8F96AA]">Chart Component Here</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-[#DDE1EC]">
          <h2 className="text-[#1C243C] font-semibold mb-4">Patient Distribution</h2>
          <div className="h-[300px] flex items-center justify-center">
            <span className="text-[#8F96AA]">Chart Component Here</span>
          </div>
        </div>
      </div>
    </div>
  );
}
