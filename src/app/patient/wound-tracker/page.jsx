import Link from 'next/link';
import { MdCameraAlt, MdTimeline, MdAnalytics, MdTrendingUp } from 'react-icons/md';
import { RiCameraLine, RiRulerLine, RiHeartPulseLine, RiCalendarEventLine } from 'react-icons/ri';

export default function WoundTracker() {
  const quickActions = [
    {
      title: 'Upload Photo',
      description: 'Take or upload a new wound photo',
      icon: MdCameraAlt,
      href: '/patient/wound-tracker/upload',
      color: 'bg-[#8B6DFF]',
      bgColor: 'bg-[#8B6DFF]/10'
    },
    {
      title: 'View Timeline',
      description: 'See your healing progress over time',
      icon: MdTimeline,
      href: '/patient/wound-tracker/timeline',
      color: 'bg-[#5698FF]',
      bgColor: 'bg-[#5698FF]/10'
    },
    {
      title: 'Measurements',
      description: 'Track wound size and measurements',
      icon: RiRulerLine,
      href: '/patient/wound-tracker/measurements',
      color: 'bg-[#56E0A0]',
      bgColor: 'bg-[#56E0A0]/10'
    },
    {
      title: 'Analytics',
      description: 'View detailed healing analytics',
      icon: MdAnalytics,
      href: '/patient/wound-tracker/analytics',
      color: 'bg-[#6B7AFF]',
      bgColor: 'bg-[#6B7AFF]/10'
    }
  ];

  const currentStats = [
    {
      label: 'Current Size',
      value: '1.8 cm²',
      change: '-22%',
      changeType: 'improvement',
      icon: RiRulerLine
    },
    {
      label: 'Healing Progress',
      value: '78%',
      change: '+12%',
      changeType: 'improvement',
      icon: RiHeartPulseLine
    },
    {
      label: 'Days in Treatment',
      value: '22',
      change: '+1',
      changeType: 'neutral',
      icon: RiCalendarEventLine
    },
    {
      label: 'Last Photo',
      value: '2 days ago',
      change: 'Due today',
      changeType: 'warning',
      icon: RiCameraLine
    }
  ];

  const recentPhotos = [
    {
      id: 1,
      date: '2024-02-05',
      thumbnail: '/api/placeholder/150/100',
      stage: 'Maturation',
      quality: 95
    },
    {
      id: 2,
      date: '2024-01-29',
      thumbnail: '/api/placeholder/150/100',
      stage: 'Proliferative',
      quality: 88
    },
    {
      id: 3,
      date: '2024-01-22',
      thumbnail: '/api/placeholder/150/100',
      stage: 'Proliferative',
      quality: 92
    }
  ];

  const upcomingTasks = [
    {
      task: 'Take daily photo',
      dueTime: 'Due now',
      priority: 'high',
      type: 'photo'
    },
    {
      task: 'Clean and dress wound',
      dueTime: 'In 4 hours',
      priority: 'medium',
      type: 'care'
    },
    {
      task: 'Follow-up appointment',
      dueTime: 'Tomorrow 2:00 PM',
      priority: 'high',
      type: 'appointment'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#1C243C]">Wound Tracking</h1>
        <p className="text-[#8F96AA] mt-1">Monitor and document your healing progress</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions.map((action, index) => (
          <Link
            key={index}
            href={action.href}
            className="bg-white rounded-xl border border-[#DDE1EC] p-6 hover:border-[#6B7AFF]/20 transition-all duration-200 group"
          >
            <div className={`w-12 h-12 ${action.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <action.icon className={`w-6 h-6 ${action.color.replace('bg-', 'text-')}`} />
            </div>
            <h3 className="font-semibold text-[#1C243C] mb-2">{action.title}</h3>
            <p className="text-sm text-[#8F96AA]">{action.description}</p>
          </Link>
        ))}
      </div>

      {/* Current Status */}
      <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
        <h2 className="text-lg font-semibold text-[#1C243C] mb-6">Current Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-[#F8F9FF] rounded-lg flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-[#6B7AFF]" />
              </div>
              <div className="text-2xl font-bold text-[#1C243C] mb-1">{stat.value}</div>
              <div className="text-sm text-[#8F96AA] mb-2">{stat.label}</div>
              <div className={`text-xs font-medium ${
                stat.changeType === 'improvement' ? 'text-[#56E0A0]' :
                stat.changeType === 'warning' ? 'text-[#FFE27A]' :
                'text-[#8F96AA]'
              }`}>
                {stat.change}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Recent Photos */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-[#DDE1EC]">
          <div className="flex items-center justify-between p-6 border-b border-[#DDE1EC]">
            <h2 className="font-semibold text-[#1C243C]">Recent Photos</h2>
            <Link href="/patient/wound-tracker/timeline" className="text-[#6B7AFF] text-sm hover:underline">
              View All
            </Link>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recentPhotos.map((photo) => (
                <div key={photo.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg border border-[#DDE1EC] mb-3">
                    <img
                      src={photo.thumbnail}
                      alt={`Wound photo from ${photo.date}`}
                      className="w-full h-24 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
                      <span className="text-xs font-medium text-[#1C243C]">{photo.quality}%</span>
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-[#1C243C] mb-1">
                      {new Date(photo.date).toLocaleDateString()}
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full inline-block ${
                      photo.stage === 'Maturation' ? 'bg-[#56E0A0]/10 text-[#56E0A0]' :
                      photo.stage === 'Proliferative' ? 'bg-[#FFE27A]/10 text-[#FFE27A]' :
                      'bg-[#FF5656]/10 text-[#FF5656]'
                    }`}>
                      {photo.stage}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-white rounded-xl border border-[#DDE1EC]">
          <div className="flex items-center justify-between p-6 border-b border-[#DDE1EC]">
            <h2 className="font-semibold text-[#1C243C]">Upcoming Tasks</h2>
            <Link href="/patient/tasks" className="text-[#6B7AFF] text-sm hover:underline">
              View All
            </Link>
          </div>
          <div className="p-6 space-y-4">
            {upcomingTasks.map((task, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-[#F8F9FF] rounded-lg">
                <div className={`w-3 h-3 rounded-full ${
                  task.priority === 'high' ? 'bg-[#FF5656]' :
                  task.priority === 'medium' ? 'bg-[#FFE27A]' :
                  'bg-[#56E0A0]'
                }`}></div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[#1C243C] text-sm">{task.task}</p>
                  <p className="text-xs text-[#8F96AA]">{task.dueTime}</p>
                </div>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  task.type === 'photo' ? 'bg-[#8B6DFF]/10' :
                  task.type === 'care' ? 'bg-[#56E0A0]/10' :
                  'bg-[#5698FF]/10'
                }`}>
                  {task.type === 'photo' ? <RiCameraLine className="w-4 h-4 text-[#8B6DFF]" /> :
                   task.type === 'care' ? <RiHeartPulseLine className="w-4 h-4 text-[#56E0A0]" /> :
                   <RiCalendarEventLine className="w-4 h-4 text-[#5698FF]" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Healing Progress Chart */}
      <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-semibold text-[#1C243C]">Healing Progress</h2>
          <Link href="/patient/wound-tracker/analytics" className="text-[#6B7AFF] text-sm hover:underline">
            View Analytics
          </Link>
        </div>
        <div className="h-64 bg-[#F8F9FF] rounded-lg flex items-center justify-center">
          <div className="text-center">
            <MdTrendingUp className="w-12 h-12 text-[#56E0A0] mx-auto mb-4" />
            <p className="text-[#1C243C] font-medium mb-2">78% Healed</p>
            <p className="text-[#8F96AA] text-sm">Excellent progress! Keep up the good work.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
