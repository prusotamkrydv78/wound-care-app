'use client';
import { MdTrendingUp, MdCalendarToday, MdPeople } from 'react-icons/md';
import { RiFirstAidKitLine, RiPulseLine } from 'react-icons/ri';

export default function Dashboard() {
  const stats = [
    { 
      title: 'Active Patients', 
      value: '24', 
      change: '+2', 
      icon: MdPeople, 
      bgColor: 'bg-[#5698FF]/10',  // secondary.blueA
      iconColor: 'text-[#5698FF]'
    },
    { 
      title: 'Appointments', 
      value: '12', 
      change: '+5', 
      icon: MdCalendarToday, 
      bgColor: 'bg-[#8B6DFF]/10',  // secondary.purpleA
      iconColor: 'text-[#8B6DFF]'
    },
    { 
      title: 'Wound Cases', 
      value: '38', 
      change: '-3', 
      icon: RiFirstAidKitLine, 
      bgColor: 'bg-[#56E0A0]/10',  // secondary.greenA
      iconColor: 'text-[#56E0A0]'
    },
    { 
      title: 'Recovery Rate', 
      value: '92%', 
      change: '+2%', 
      icon: RiPulseLine, 
      bgColor: 'bg-[#6B7AFF]/10',  // brand.purple
      iconColor: 'text-[#6B7AFF]'
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8F9FF] pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-[#6B7AFF] via-[#8B6DFF] to-[#506EFF] rounded-2xl p-6">
          <h1 className="text-2xl font-bold text-white">Welcome back, Dr. John</h1>
          <p className="mt-1 text-blue-100">Here's what's happening with your patients today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-[#DDE1EC] hover:border-[#6B7AFF]/20 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold mt-1 text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.bgColor} p-3 rounded-lg`}>
                  <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <MdTrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-green-500 mr-2">{stat.change}</span>
                <span className="text-gray-500">vs last week</span>
              </div>
            </div>
          ))}
        </div>

        {/* Activity Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Patients Card */}
          <div className="bg-white rounded-xl shadow-sm border border-[#DDE1EC] p-6">
            <h2 className="text-[#1C243C] text-lg font-semibold mb-4">Recent Patients</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-[#F8F9FF] rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#8B6DFF]/10 flex items-center justify-center">
                      <RiFirstAidKitLine className="w-5 h-5 text-[#8B6DFF]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#1C243C]">Patient #{i + 1}</p>
                      <p className="text-sm text-[#8F96AA]">Wound Assessment</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Appointments Card */}
          <div className="bg-white rounded-xl shadow-sm border border-[#DDE1EC] p-6">
            <h2 className="text-[#1C243C] text-lg font-semibold mb-4">Upcoming Appointments</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-[#F8F9FF] rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#56E0A0]/10 flex items-center justify-center">
                      <MdCalendarToday className="w-5 h-5 text-[#56E0A0]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#1C243C]">Follow-up Visit</p>
                      <p className="text-sm text-[#8F96AA]">10:00 AM</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                    Confirmed
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
