'use client';
import Link from 'next/link';
import {
  MdTrendingUp, MdWarning, MdCheckCircle, MdPeople,
  MdVerifiedUser, MdSettings
} from 'react-icons/md';
import {
  RiUserHeartLine, RiStethoscopeLine, RiBarChartLine,
  RiCustomerServiceLine, RiFileTextLine
} from 'react-icons/ri';

export default function AdminDashboard() {
  // Dashboard metrics matching doctor portal style
  const dashboardMetrics = [
    {
      title: 'Total Users',
      value: '2,847',
      change: '+12%',
      trend: 'up',
      icon: MdPeople,
      color: 'text-[#6B7AFF]',
      bgColor: 'bg-[#6B7AFF]/10'
    },
    {
      title: 'Pending Approvals',
      value: '23',
      change: '+5',
      trend: 'up',
      icon: MdVerifiedUser,
      color: 'text-[#FFE27A]',
      bgColor: 'bg-[#FFE27A]/10'
    },
    {
      title: 'System Health',
      value: '99.8%',
      change: '+0.2%',
      trend: 'up',
      icon: MdCheckCircle,
      color: 'text-[#56E0A0]',
      bgColor: 'bg-[#56E0A0]/10'
    },
    {
      title: 'Critical Alerts',
      value: '3',
      change: '-2',
      trend: 'down',
      icon: MdWarning,
      color: 'text-[#FF5656]',
      bgColor: 'bg-[#FF5656]/10'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-[#6B7AFF] to-[#8B6DFF] rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Admin</h1>
        <p className="text-white/90">Here's your system overview for today</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl border border-[#DDE1EC] p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg ${metric.bgColor} flex items-center justify-center`}>
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
              {metric.trend === 'up' && <MdTrendingUp className="w-5 h-5 text-[#56E0A0]" />}
              {metric.trend === 'down' && <MdTrendingUp className="w-5 h-5 text-[#FF5656] rotate-180" />}
            </div>
            <h3 className="text-sm text-[#8F96AA] mb-1">{metric.title}</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#1C243C]">{metric.value}</span>
              {metric.change !== '0' && (
                <span className={`text-sm font-medium ${
                  metric.trend === 'up' ? 'text-[#56E0A0]' : 'text-[#FF5656]'
                }`}>
                  {metric.change}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/admin/doctors" className="bg-white rounded-xl border border-[#DDE1EC] p-6 hover:border-[#6B7AFF]/20 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#6B7AFF]/10 rounded-lg flex items-center justify-center">
              <RiStethoscopeLine className="w-6 h-6 text-[#6B7AFF]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#1C243C]">Doctor Verification</h3>
              <p className="text-sm text-[#8F96AA]">23 pending applications</p>
            </div>
          </div>
        </Link>

        <Link href="/admin/users" className="bg-white rounded-xl border border-[#DDE1EC] p-6 hover:border-[#6B7AFF]/20 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#56E0A0]/10 rounded-lg flex items-center justify-center">
              <RiUserHeartLine className="w-6 h-6 text-[#56E0A0]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#1C243C]">User Management</h3>
              <p className="text-sm text-[#8F96AA]">Manage all users</p>
            </div>
          </div>
        </Link>

        <Link href="/admin/analytics" className="bg-white rounded-xl border border-[#DDE1EC] p-6 hover:border-[#6B7AFF]/20 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#8B6DFF]/10 rounded-lg flex items-center justify-center">
              <RiBarChartLine className="w-6 h-6 text-[#8B6DFF]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#1C243C]">Analytics</h3>
              <p className="text-sm text-[#8F96AA]">System insights</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Additional Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link href="/admin/content" className="bg-white rounded-xl border border-[#DDE1EC] p-6 hover:border-[#6B7AFF]/20 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#5698FF]/10 rounded-lg flex items-center justify-center">
              <RiFileTextLine className="w-6 h-6 text-[#5698FF]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#1C243C]">Content</h3>
              <p className="text-sm text-[#8F96AA]">12 pending approval</p>
            </div>
          </div>
        </Link>

        <Link href="/admin/patients" className="bg-white rounded-xl border border-[#DDE1EC] p-6 hover:border-[#6B7AFF]/20 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#FFE27A]/10 rounded-lg flex items-center justify-center">
              <RiUserHeartLine className="w-6 h-6 text-[#FFE27A]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#1C243C]">Patients</h3>
              <p className="text-sm text-[#8F96AA]">Patient oversight</p>
            </div>
          </div>
        </Link>

        <Link href="/admin/support" className="bg-white rounded-xl border border-[#DDE1EC] p-6 hover:border-[#6B7AFF]/20 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#FF5656]/10 rounded-lg flex items-center justify-center">
              <RiCustomerServiceLine className="w-6 h-6 text-[#FF5656]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#1C243C]">Support</h3>
              <p className="text-sm text-[#8F96AA]">Help desk</p>
            </div>
          </div>
        </Link>

        <Link href="/admin/settings" className="bg-white rounded-xl border border-[#DDE1EC] p-6 hover:border-[#6B7AFF]/20 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#8B6DFF]/10 rounded-lg flex items-center justify-center">
              <MdSettings className="w-6 h-6 text-[#8B6DFF]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#1C243C]">Settings</h3>
              <p className="text-sm text-[#8F96AA]">System config</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
