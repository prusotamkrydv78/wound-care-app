'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MdTrendingUp, MdWarning, MdCheckCircle, MdSchedule, MdNotifications, MdAnalytics } from 'react-icons/md';
import { RiStethoscopeLine, RiUserHeartLine, RiAlarmWarningLine, RiTimeLine, RiAwardLine, RiFirstAidKitLine } from 'react-icons/ri';

export default function DoctorDashboard() {
  // Dashboard metrics
  const dashboardMetrics = [
    {
      title: 'Active Cases',
      value: '24',
      change: '+3',
      trend: 'up',
      icon: RiFirstAidKitLine,
      color: 'text-[#6B7AFF]',
      bgColor: 'bg-[#6B7AFF]/10'
    },
    {
      title: 'Critical Alerts',
      value: '2',
      change: '-1',
      trend: 'down',
      icon: RiAlarmWarningLine,
      color: 'text-[#FF5656]',
      bgColor: 'bg-[#FF5656]/10'
    },
    {
      title: 'Healing Rate',
      value: '92%',
      change: '+5%',
      trend: 'up',
      icon: RiAwardLine,
      color: 'text-[#56E0A0]',
      bgColor: 'bg-[#56E0A0]/10'
    },
    {
      title: 'Appointments Today',
      value: '8',
      change: '0',
      trend: 'stable',
      icon: MdSchedule,
      color: 'text-[#8B6DFF]',
      bgColor: 'bg-[#8B6DFF]/10'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-[#6B7AFF] to-[#8B6DFF] rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Dr. Johnson</h1>
        <p className="text-white/90">Here's your clinical overview for today</p>
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
        <Link href="/doctor/wound-tracker" className="bg-white rounded-xl border border-[#DDE1EC] p-6 hover:border-[#6B7AFF]/20 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#6B7AFF]/10 rounded-lg flex items-center justify-center">
              <RiStethoscopeLine className="w-6 h-6 text-[#6B7AFF]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#1C243C]">Wound Tracker</h3>
              <p className="text-sm text-[#8F96AA]">Manage active cases</p>
            </div>
          </div>
        </Link>

        <Link href="/doctor/patients" className="bg-white rounded-xl border border-[#DDE1EC] p-6 hover:border-[#6B7AFF]/20 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#56E0A0]/10 rounded-lg flex items-center justify-center">
              <RiUserHeartLine className="w-6 h-6 text-[#56E0A0]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#1C243C]">Patients</h3>
              <p className="text-sm text-[#8F96AA]">View patient records</p>
            </div>
          </div>
        </Link>

        <Link href="/doctor/analytics" className="bg-white rounded-xl border border-[#DDE1EC] p-6 hover:border-[#6B7AFF]/20 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#8B6DFF]/10 rounded-lg flex items-center justify-center">
              <MdAnalytics className="w-6 h-6 text-[#8B6DFF]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#1C243C]">Analytics</h3>
              <p className="text-sm text-[#8F96AA]">Performance insights</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}