import Link from 'next/link';
import { MdTrendingUp, MdCalendarToday, MdCameraAlt, MdMessage, MdSchedule, MdEmergency } from 'react-icons/md';
import { RiFirstAidKitLine, RiMessage2Line, RiHeartPulseLine, RiCameraLine, RiCalendarEventLine } from 'react-icons/ri';

export default function PatientDashboard() {
  const healingStats = [
    { 
      title: 'Healing Progress', 
      value: '78%', 
      change: '+12%', 
      icon: RiHeartPulseLine, 
      bgColor: 'bg-[#56E0A0]/10',
      iconColor: 'text-[#56E0A0]',
      status: 'On Track'
    },
    { 
      title: 'Days in Treatment', 
      value: '24', 
      change: '+1', 
      icon: MdCalendarToday, 
      bgColor: 'bg-[#5698FF]/10',
      iconColor: 'text-[#5698FF]',
      status: 'Active'
    },
    { 
      title: 'Photos Uploaded', 
      value: '18', 
      change: '+2', 
      icon: RiCameraLine, 
      bgColor: 'bg-[#8B6DFF]/10',
      iconColor: 'text-[#8B6DFF]',
      status: 'Recent'
    },
    { 
      title: 'Next Appointment', 
      value: '3 days', 
      change: 'Upcoming', 
      icon: RiCalendarEventLine, 
      bgColor: 'bg-[#6B7AFF]/10',
      iconColor: 'text-[#6B7AFF]',
      status: 'Scheduled'
    },
  ];

  const quickActions = [
    { name: 'Upload Photo', icon: MdCameraAlt, href: '/patient/wound-tracker/upload', color: '#8B6DFF' },
    { name: 'Message Team', icon: MdMessage, href: '/patient/messages', color: '#5698FF' },
    { name: 'Schedule Visit', icon: MdSchedule, href: '/patient/appointments/schedule', color: '#56E0A0' },
    { name: 'Emergency', icon: MdEmergency, href: '/patient/emergency', color: '#FF5656' },
  ];

  const upcomingTasks = [
    {
      type: 'medication',
      title: 'Take Antibiotic',
      time: 'In 2 hours',
      status: 'Pending',
      statusColor: 'bg-[#FFE27A]/10 text-[#FFE27A]',
      priority: 'high'
    },
    {
      type: 'photo',
      title: 'Daily Wound Photo',
      time: 'Due today',
      status: 'Pending',
      statusColor: 'bg-[#8B6DFF]/10 text-[#8B6DFF]',
      priority: 'medium'
    },
    {
      type: 'appointment',
      title: 'Follow-up Visit',
      time: 'Tomorrow 2:00 PM',
      status: 'Confirmed',
      statusColor: 'bg-[#56E0A0]/10 text-[#56E0A0]',
      priority: 'high'
    },
  ];

  const recentMessages = [
    {
      from: 'Dr. Sarah Johnson',
      message: 'Your wound is healing well. Continue current treatment.',
      time: '2 hours ago',
      unread: false
    },
    {
      from: 'Nurse Mary',
      message: 'Reminder: Please upload today\'s photo',
      time: '4 hours ago',
      unread: true
    },
  ];

  return (
     <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section with Quick Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-[#1C243C] text-2xl font-bold">Welcome back, John</h1>
            <p className="text-[#8F96AA] mt-1">Here's your wound care progress today</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            {quickActions.map((action, i) => (
              <Link
                key={i}
                href={action.href}
                className={`flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-[#DDE1EC] 
                         hover:border-[#6B7AFF]/20 transition-all duration-200 ${
                           action.name === 'Emergency' ? 'border-red-200 hover:border-red-300' : ''
                         }`}
              >
                <action.icon style={{color: action.color}} className="w-5 h-5" />
                <span className="text-sm font-medium text-[#1C243C]">{action.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Healing Progress Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {healingStats.map((stat, index) => (
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
                <span className="text-gray-500">{stat.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Cards Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 [&>*]:break-inside-avoid-column">
          
          {/* Healing Progress Chart Card */}
          <div className="bg-white rounded-xl border border-[#DDE1EC] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[#DDE1EC]">
              <h2 className="font-semibold text-[#1C243C]">Healing Progress</h2>
              <Link href="/patient/progress" className="text-[#6B7AFF] text-xs hover:underline">View Details</Link>
            </div>
            <div className="p-4">
              <div className="relative w-32 h-32 mx-auto">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#DDE1EC"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#56E0A0"
                    strokeWidth="2"
                    strokeDasharray="78, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#1C243C]">78%</div>
                    <div className="text-xs text-[#8F96AA]">Healed</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-[#8F96AA]">Expected completion in</p>
                <p className="text-lg font-semibold text-[#1C243C]">12-15 days</p>
              </div>
            </div>
          </div>

          {/* Upcoming Tasks Card */}
          <div className="bg-white rounded-xl border border-[#DDE1EC] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[#DDE1EC]">
              <h2 className="font-semibold text-[#1C243C]">Today's Tasks</h2>
              <Link href="/patient/tasks" className="text-[#6B7AFF] text-xs hover:underline">View All</Link>
            </div>
            <div className="p-3 space-y-3">
              {upcomingTasks.map((task, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-[#F8F9FF] rounded-lg">
                  <div className={`w-3 h-3 rounded-full ${
                    task.priority === 'high' ? 'bg-[#FF5656]' : 
                    task.priority === 'medium' ? 'bg-[#FFE27A]' : 'bg-[#56E0A0]'
                  }`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-[#1C243C] text-sm">{task.title}</p>
                    <p className="text-xs text-[#8F96AA]">{task.time}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${task.statusColor}`}>
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Messages Card */}
          <div className="bg-white rounded-xl border border-[#DDE1EC] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[#DDE1EC]">
              <h2 className="font-semibold text-[#1C243C]">Recent Messages</h2>
              <Link href="/patient/messages" className="text-[#6B7AFF] text-xs hover:underline">View All</Link>
            </div>
            <div className="p-3 space-y-3">
              {recentMessages.map((message, i) => (
                <div key={i} className={`flex items-start gap-3 p-3 rounded-lg ${
                  message.unread ? 'bg-[#6B7AFF]/5 border border-[#6B7AFF]/20' : 'bg-[#F8F9FF]'
                }`}>
                  <div className="w-8 h-8 rounded-lg bg-[#5698FF]/10 flex items-center justify-center shrink-0">
                    <RiMessage2Line className="w-4 h-4 text-[#5698FF]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-[#1C243C] text-sm">{message.from}</p>
                    <p className="text-sm text-[#8F96AA] truncate">{message.message}</p>
                    <p className="text-xs text-[#8F96AA] mt-1">{message.time}</p>
                  </div>
                  {message.unread && (
                    <div className="w-2 h-2 bg-[#6B7AFF] rounded-full shrink-0"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Care Reminders Card */}
          <div className="bg-white rounded-xl border border-[#DDE1EC] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[#DDE1EC]">
              <h2 className="font-semibold text-[#1C243C]">Care Reminders</h2>
              <Link href="/patient/reminders" className="text-[#6B7AFF] text-xs hover:underline">Manage</Link>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#56E0A0]/10 flex items-center justify-center">
                  <RiFirstAidKitLine className="w-4 h-4 text-[#56E0A0]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1C243C]">Clean wound daily</p>
                  <p className="text-xs text-[#8F96AA]">Every morning at 8:00 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#8B6DFF]/10 flex items-center justify-center">
                  <RiCameraLine className="w-4 h-4 text-[#8B6DFF]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1C243C]">Take progress photo</p>
                  <p className="text-xs text-[#8F96AA]">Daily after cleaning</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
  );
}
