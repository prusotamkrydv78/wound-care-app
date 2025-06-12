'use client';
import { useState, useEffect } from 'react';
import { MdTrendingUp, MdCalendarToday, MdPeople, MdMoreVert, MdArrowForward } from 'react-icons/md';
import { RiFirstAidKitLine, RiPulseLine, RiMessage2Line, RiBookReadLine } from 'react-icons/ri';
import Link from 'next/link';

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

  const quickActions = [
    { name: 'New Assessment', icon: RiFirstAidKitLine, href: '/wound-tracker/assessment', color: '#8B6DFF' },
    { name: 'Add Patient', icon: MdPeople, href: '/patients/new', color: '#5698FF' },
    { name: 'Schedule', icon: MdCalendarToday, href: '/calendar', color: '#56E0A0' },
  ];

  const recentActivities = [
    {
      type: 'wound',
      title: 'Wound Assessment Updated',
      patient: 'Sarah Connor',
      time: '2 hours ago',
      status: 'Healing',
      statusColor: 'bg-[#56E0A0]/10 text-[#56E0A0]'
    },
    {
      type: 'appointment',
      title: 'New Appointment',
      patient: 'John Smith',
      time: '3 hours ago',
      status: 'Scheduled',
      statusColor: 'bg-[#5698FF]/10 text-[#5698FF]'
    },
  ];

  return (
     <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section with Quick Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-[#1C243C] text-2xl font-bold">Welcome back, Dr. John</h1>
            <p className="text-[#8F96AA] mt-1">Here's what's happening in your practice</p>
          </div>
          <div className="flex gap-3">
            {quickActions.map((action, i) => (
              <Link
                key={i}
                href={action.href}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-[#DDE1EC] 
                         hover:border-[#6B7AFF]/20 transition-all duration-200"
              >
                <action.icon style={{color: action.color}} className="w-5 h-5" />
                <span className="text-sm font-medium text-[#1C243C]">{action.name}</span>
              </Link>
            ))}
          </div>
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

        {/* Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 [&>*]:break-inside-avoid-column">
          {/* Active Treatments Card */}
          <div className="bg-white rounded-xl border border-[#DDE1EC] flex flex-col">
            <div className="flex items-center justify-between p-3 border-b border-[#DDE1EC]">
              <h2 className="font-semibold text-[#1C243C]">Active Treatments</h2>
              <Link href="/wound-tracker" className="text-[#6B7AFF] text-xs hover:underline">View All</Link>
            </div>
            <div className="p-2 space-y-2">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="p-2.5 bg-[#F8F9FF] rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#8B6DFF]/10 flex items-center justify-center shrink-0">
                      <RiFirstAidKitLine className="w-4.5 h-4.5 text-[#8B6DFF]" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-[#1C243C] text-sm">Patient #{i + 1}</p>
                      <p className="text-xs text-[#8F96AA]">Stage 2 Healing</p>
                    </div>
                  </div>
                  <MdArrowForward className="w-4 h-4 text-[#8F96AA] shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Today's Schedule Card */}
          <div className="bg-white rounded-xl border border-[#DDE1EC] flex flex-col">
            <div className="flex items-center justify-between p-3 border-b border-[#DDE1EC]">
              <h2 className="font-semibold text-[#1C243C]">Today's Schedule</h2>
              <Link href="/calendar" className="text-[#6B7AFF] text-xs hover:underline">Full Calendar</Link>
            </div>
            <div className="p-2 space-y-2">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="p-2.5 bg-[#F8F9FF] rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-[#6B7AFF]">09:00 AM</p>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#56E0A0]/10 text-[#56E0A0]">
                      Confirmed
                    </span>
                  </div>
                  <p className="font-medium text-[#1C243C] text-sm">Follow-up Assessment</p>
                  <p className="text-xs text-[#8F96AA]">Patient: John Doe</p>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Resources Card */}
          <div className="bg-white rounded-xl border border-[#DDE1EC] flex flex-col">
            <div className="flex items-center justify-between p-3 border-b border-[#DDE1EC]">
              <h2 className="font-semibold text-[#1C243C]">Learning Resources</h2>
              <Link href="/education" className="text-[#6B7AFF] text-xs hover:underline">Browse All</Link>
            </div>
            <div className="p-2 space-y-2">
              {[1, 2].map((_, i) => (
                <div key={i} className="p-2.5 bg-[#F8F9FF] rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#6B7AFF]/10 flex items-center justify-center">
                      <RiBookReadLine className="w-4.5 h-4.5 text-[#6B7AFF]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#1C243C] text-sm">Advanced Wound Care</p>
                      <p className="text-xs text-[#8F96AA]">5 min read • New</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Messages Card */}
          <div className="bg-white rounded-xl border border-[#DDE1EC] flex flex-col">
            <div className="flex items-center justify-between p-3 border-b border-[#DDE1EC]">
              <h2 className="font-semibold text-[#1C243C]">Recent Messages</h2>
              <Link href="/messages" className="text-[#6B7AFF] text-xs hover:underline">View All</Link>
            </div>
            <div className="p-2 space-y-2">
              {[1, 2].map((_, i) => (
                <div key={i} className="flex items-center gap-2 p-2 bg-[#F8F9FF] rounded-lg">
                  <div className="w-8 h-8 rounded-lg bg-[#5698FF]/10 flex items-center justify-center shrink-0">
                    <RiMessage2Line className="w-4 h-4 text-[#5698FF]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-[#1C243C] text-sm truncate">New message from Dr. Sarah</p>
                    <p className="text-xs text-[#8F96AA] truncate">Regarding patient case #123</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> 
  );
}
