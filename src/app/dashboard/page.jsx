'use client';
import { MdTrendingUp, MdCalendarToday, MdPeople } from 'react-icons/md';
import { RiFirstAidKitLine, RiPulseLine } from 'react-icons/ri';

export default function Dashboard() {
  const stats = [
    { title: 'Active Patients', value: '24', change: '+2', icon: MdPeople, color: 'blue' },
    { title: 'Appointments', value: '12', change: '+5', icon: MdCalendarToday, color: 'green' },
    { title: 'Wound Cases', value: '38', change: '-3', icon: RiFirstAidKitLine, color: 'purple' },
    { title: 'Recovery Rate', value: '92%', change: '+2%', icon: RiPulseLine, color: 'cyan' },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-6 text-white">
          <h1 className="text-2xl font-bold">Welcome back, Dr. John</h1>
          <p className="mt-1 text-blue-100">Here's what's happening with your patients today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold mt-1 text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`bg-${stat.color}-100 p-3 rounded-lg`}>
                    <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm">
                  <MdTrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-500 mr-2">{stat.change}</span>
                  <span className="text-gray-500">vs last week</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Recent Patients */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Patients</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <RiFirstAidKitLine className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Patient #{i + 1}</p>
                      <p className="text-sm text-gray-500">Wound Assessment</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">2h ago</span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Appointments */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <MdCalendarToday className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Follow-up Visit</p>
                      <p className="text-sm text-gray-500">10:00 AM</p>
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
