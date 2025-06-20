import { MdTrendingUp, MdCalendarToday, MdPeople, MdMoreVert, MdArrowForward, MdWarning, MdEmergency, MdAssignment, MdAnalytics } from 'react-icons/md';
import { RiFirstAidKitLine, RiPulseLine, RiMessage2Line, RiBookReadLine, RiAlarmWarningLine, RiStethoscopeLine, RiTimeLine, RiUserHeartLine } from 'react-icons/ri';
import Link from 'next/link';

export default function Dashboard() {
  // Enhanced clinical metrics with AI-powered insights
  const clinicalStats = [
    {
      title: 'Critical Patients',
      value: '3',
      change: '+1',
      icon: MdWarning,
      bgColor: 'bg-[#FF5656]/10',
      iconColor: 'text-[#FF5656]',
      priority: 'critical',
      description: 'Require immediate attention'
    },
    {
      title: 'Active Patients',
      value: '24',
      change: '+2',
      icon: MdPeople,
      bgColor: 'bg-[#5698FF]/10',
      iconColor: 'text-[#5698FF]',
      priority: 'normal',
      description: 'Under active care'
    },
    {
      title: 'Healing Rate',
      value: '92%',
      change: '+5%',
      icon: RiPulseLine,
      bgColor: 'bg-[#56E0A0]/10',
      iconColor: 'text-[#56E0A0]',
      priority: 'positive',
      description: 'Above benchmark (87%)'
    },
    {
      title: 'Avg Healing Time',
      value: '18 days',
      change: '-3 days',
      icon: RiTimeLine,
      bgColor: 'bg-[#6B7AFF]/10',
      iconColor: 'text-[#6B7AFF]',
      priority: 'positive',
      description: 'Faster than average'
    },
  ];

  // Performance metrics for clinical efficiency
  const performanceMetrics = [
    {
      title: 'Documentation Rate',
      value: '98%',
      target: '95%',
      icon: MdAssignment,
      bgColor: 'bg-[#56E0A0]/10',
      iconColor: 'text-[#56E0A0]'
    },
    {
      title: 'Patient Satisfaction',
      value: '4.8/5',
      target: '4.5/5',
      icon: RiUserHeartLine,
      bgColor: 'bg-[#8B6DFF]/10',
      iconColor: 'text-[#8B6DFF]'
    },
    {
      title: 'Consultation Time',
      value: '12 min',
      target: '15 min',
      icon: RiStethoscopeLine,
      bgColor: 'bg-[#5698FF]/10',
      iconColor: 'text-[#5698FF]'
    },
  ];

  // Enhanced quick actions with clinical priorities
  const quickActions = [
    { name: 'Critical Alerts', icon: MdEmergency, href: '/doctor/patients?filter=critical', color: '#FF5656', badge: '3' },
    { name: 'New Assessment', icon: RiFirstAidKitLine, href: '/doctor/wound-tracker/assessment', color: '#8B6DFF' },
    { name: 'Add Patient', icon: MdPeople, href: '/doctor/patients/new', color: '#5698FF' },
    { name: 'Analytics', icon: MdAnalytics, href: '/doctor/analytics', color: '#6B7AFF' },
  ];

  // Priority-based patient alerts
  const priorityAlerts = [
    {
      id: 1,
      patient: 'Sarah Connor',
      condition: 'Diabetic Foot Ulcer',
      priority: 'critical',
      alert: 'Signs of infection detected',
      time: '15 min ago',
      action: 'Immediate assessment required',
      riskScore: 85
    },
    {
      id: 2,
      patient: 'John Smith',
      condition: 'Post-surgical wound',
      priority: 'high',
      alert: 'Delayed healing progression',
      time: '2 hours ago',
      action: 'Review treatment plan',
      riskScore: 72
    },
    {
      id: 3,
      patient: 'Maria Garcia',
      condition: 'Pressure ulcer',
      priority: 'medium',
      alert: 'Missed appointment',
      time: '4 hours ago',
      action: 'Schedule follow-up',
      riskScore: 58
    }
  ];

  // AI-powered task prioritization
  const aiPrioritizedTasks = [
    {
      id: 1,
      task: 'Review critical patient alerts',
      priority: 'urgent',
      estimatedTime: '15 min',
      aiReason: 'High-risk patients require immediate attention',
      patients: 3
    },
    {
      id: 2,
      task: 'Complete pending documentation',
      priority: 'high',
      estimatedTime: '20 min',
      aiReason: 'Compliance deadline approaching',
      patients: 5
    },
    {
      id: 3,
      task: 'Review healing progress reports',
      priority: 'medium',
      estimatedTime: '30 min',
      aiReason: 'Weekly assessment due',
      patients: 12
    }
  ];

  // Helper functions for priority and risk assessment
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'bg-[#FF5656]/10 text-[#FF5656] border-[#FF5656]/20';
      case 'urgent': return 'bg-[#FF5656]/10 text-[#FF5656] border-[#FF5656]/20';
      case 'high': return 'bg-[#FFE27A]/10 text-[#FFE27A] border-[#FFE27A]/20';
      case 'medium': return 'bg-[#5698FF]/10 text-[#5698FF] border-[#5698FF]/20';
      case 'low': return 'bg-[#56E0A0]/10 text-[#56E0A0] border-[#56E0A0]/20';
      default: return 'bg-[#DDE1EC] text-[#8F96AA] border-[#DDE1EC]';
    }
  };

  const getRiskScoreColor = (score) => {
    if (score >= 80) return 'text-[#FF5656]';
    if (score >= 60) return 'text-[#FFE27A]';
    return 'text-[#56E0A0]';
  };

  return (
     <div className="max-w-7xl mx-auto space-y-6">
        {/* Enhanced Header Section with Clinical Quick Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-[#1C243C] text-2xl font-bold">Welcome back, Dr. Johnson</h1>
            <p className="text-[#8F96AA] mt-1">3 critical patients need attention • 12 tasks pending</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            {quickActions.map((action, i) => (
              <Link
                key={i}
                href={action.href}
                className={`relative flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-[#DDE1EC]
                         hover:border-[#6B7AFF]/20 transition-all duration-200 ${
                           action.name === 'Critical Alerts' ? 'border-red-200 hover:border-red-300' : ''
                         }`}
              >
                <action.icon style={{color: action.color}} className="w-5 h-5" />
                <span className="text-sm font-medium text-[#1C243C]">{action.name}</span>
                {action.badge && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#FF5656] text-white text-xs rounded-full flex items-center justify-center">
                    {action.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Enhanced Clinical Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {clinicalStats.map((stat, index) => (
            <div key={index} className={`bg-white rounded-xl p-6 shadow-sm border transition-colors ${
              stat.priority === 'critical' ? 'border-[#FF5656]/20 hover:border-[#FF5656]/40' : 'border-[#DDE1EC] hover:border-[#6B7AFF]/20'
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold mt-1 text-gray-900">{stat.value}</p>
                  <p className="text-xs text-[#8F96AA] mt-1">{stat.description}</p>
                </div>
                <div className={`${stat.bgColor} p-3 rounded-lg`}>
                  <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <MdTrendingUp className={`w-4 h-4 mr-1 ${
                  stat.priority === 'critical' ? 'text-[#FF5656]' : 'text-[#56E0A0]'
                }`} />
                <span className={`mr-2 ${
                  stat.priority === 'critical' ? 'text-[#FF5656]' : 'text-[#56E0A0]'
                }`}>{stat.change}</span>
                <span className="text-gray-500">vs last week</span>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {performanceMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl p-4 border border-[#DDE1EC] hover:border-[#6B7AFF]/20 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`${metric.bgColor} p-2 rounded-lg`}>
                  <metric.icon className={`w-5 h-5 ${metric.iconColor}`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#8F96AA]">{metric.title}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-bold text-[#1C243C]">{metric.value}</p>
                    <span className="text-xs text-[#56E0A0]">Target: {metric.target}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Clinical Dashboard Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 [&>*]:break-inside-avoid-column">

          {/* Priority Patient Alerts Card */}
          <div className="bg-white rounded-xl border border-[#DDE1EC] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[#DDE1EC]">
              <div className="flex items-center gap-2">
                <RiAlarmWarningLine className="w-5 h-5 text-[#FF5656]" />
                <h2 className="font-semibold text-[#1C243C]">Priority Alerts</h2>
              </div>
              <Link href="/doctor/patients?filter=alerts" className="text-[#6B7AFF] text-xs hover:underline">View All</Link>
            </div>
            <div className="p-3 space-y-3">
              {priorityAlerts.map((alert) => (
                <div key={alert.id} className={`p-3 rounded-lg border-l-4 ${getPriorityColor(alert.priority)}`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-medium text-[#1C243C] text-sm">{alert.patient}</h3>
                      <p className="text-xs text-[#8F96AA]">{alert.condition}</p>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs font-medium ${getRiskScoreColor(alert.riskScore)}`}>
                        Risk: {alert.riskScore}%
                      </span>
                      <p className="text-xs text-[#8F96AA]">{alert.time}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#1C243C] mb-2">{alert.alert}</p>
                  <p className="text-xs text-[#6B7AFF] font-medium">{alert.action}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI-Powered Task Prioritization Card */}
          <div className="bg-white rounded-xl border border-[#DDE1EC] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[#DDE1EC]">
              <div className="flex items-center gap-2">
                <MdAnalytics className="w-5 h-5 text-[#6B7AFF]" />
                <h2 className="font-semibold text-[#1C243C]">AI Task Priority</h2>
              </div>
              <span className="text-xs bg-[#6B7AFF]/10 text-[#6B7AFF] px-2 py-1 rounded-full">Smart</span>
            </div>
            <div className="p-3 space-y-3">
              {aiPrioritizedTasks.map((task) => (
                <div key={task.id} className={`p-3 rounded-lg ${getPriorityColor(task.priority)}`}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-[#1C243C] text-sm flex-1">{task.task}</h3>
                    <span className="text-xs text-[#8F96AA] ml-2">{task.estimatedTime}</span>
                  </div>
                  <p className="text-xs text-[#8F96AA] mb-2">{task.aiReason}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#6B7AFF]">{task.patients} patients</span>
                    <button className="text-xs bg-[#6B7AFF] text-white px-2 py-1 rounded hover:bg-[#506EFF] transition-colors">
                      Start
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Today's Schedule Card */}
          <div className="bg-white rounded-xl border border-[#DDE1EC] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[#DDE1EC]">
              <div className="flex items-center gap-2">
                <MdCalendarToday className="w-5 h-5 text-[#5698FF]" />
                <h2 className="font-semibold text-[#1C243C]">Today's Schedule</h2>
              </div>
              <Link href="/doctor/calendar" className="text-[#6B7AFF] text-xs hover:underline">Full Calendar</Link>
            </div>
            <div className="p-3 space-y-3">
              {[
                { time: '09:00 AM', patient: 'Sarah Connor', type: 'Critical Assessment', status: 'urgent', priority: 'critical' },
                { time: '10:30 AM', patient: 'John Smith', type: 'Follow-up', status: 'confirmed', priority: 'normal' },
                { time: '02:00 PM', patient: 'Maria Garcia', type: 'Initial Consultation', status: 'confirmed', priority: 'normal' }
              ].map((appointment, i) => (
                <div key={i} className={`p-3 bg-[#F8F9FF] rounded-lg border-l-4 ${
                  appointment.priority === 'critical' ? 'border-[#FF5656]' : 'border-[#5698FF]'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-[#6B7AFF]">{appointment.time}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      appointment.status === 'urgent' ? 'bg-[#FF5656]/10 text-[#FF5656]' : 'bg-[#56E0A0]/10 text-[#56E0A0]'
                    }`}>
                      {appointment.status}
                    </span>
                  </div>
                  <p className="font-medium text-[#1C243C] text-sm">{appointment.type}</p>
                  <p className="text-xs text-[#8F96AA]">Patient: {appointment.patient}</p>
                  {appointment.priority === 'critical' && (
                    <p className="text-xs text-[#FF5656] font-medium mt-1">⚠ High Priority</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Performance Insights Card */}
          <div className="bg-white rounded-xl border border-[#DDE1EC] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[#DDE1EC]">
              <div className="flex items-center gap-2">
                <MdAnalytics className="w-5 h-5 text-[#8B6DFF]" />
                <h2 className="font-semibold text-[#1C243C]">Performance Insights</h2>
              </div>
              <Link href="/doctor/analytics" className="text-[#6B7AFF] text-xs hover:underline">View Details</Link>
            </div>
            <div className="p-3 space-y-3">
              <div className="p-3 bg-[#F8F9FF] rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#8F96AA]">This Week</span>
                  <span className="text-xs bg-[#56E0A0]/10 text-[#56E0A0] px-2 py-1 rounded-full">+15%</span>
                </div>
                <p className="text-lg font-bold text-[#1C243C]">28 Patients Treated</p>
                <p className="text-xs text-[#8F96AA]">Above weekly average</p>
              </div>
              <div className="p-3 bg-[#F8F9FF] rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#8F96AA]">Healing Success</span>
                  <span className="text-xs bg-[#56E0A0]/10 text-[#56E0A0] px-2 py-1 rounded-full">Excellent</span>
                </div>
                <p className="text-lg font-bold text-[#1C243C]">94% Success Rate</p>
                <p className="text-xs text-[#8F96AA]">Top 10% nationally</p>
              </div>
            </div>
          </div>

          {/* Enhanced Clinical Messages Card */}
          <div className="bg-white rounded-xl border border-[#DDE1EC] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[#DDE1EC]">
              <div className="flex items-center gap-2">
                <RiMessage2Line className="w-5 h-5 text-[#5698FF]" />
                <h2 className="font-semibold text-[#1C243C]">Clinical Messages</h2>
              </div>
              <Link href="/doctor/messages" className="text-[#6B7AFF] text-xs hover:underline">View All</Link>
            </div>
            <div className="p-3 space-y-3">
              {[
                { from: 'Dr. Sarah Wilson', type: 'Consultation', message: 'Diabetic foot ulcer case review needed', time: '15 min ago', urgent: true },
                { from: 'Nurse Jennifer', type: 'Update', message: 'Patient vitals updated for room 204', time: '1 hour ago', urgent: false },
                { from: 'Lab Results', type: 'Results', message: 'Culture results available for review', time: '2 hours ago', urgent: false }
              ].map((msg, i) => (
                <div key={i} className={`flex items-start gap-3 p-3 rounded-lg ${
                  msg.urgent ? 'bg-[#FF5656]/5 border border-[#FF5656]/20' : 'bg-[#F8F9FF]'
                }`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    msg.urgent ? 'bg-[#FF5656]/10' : 'bg-[#5698FF]/10'
                  }`}>
                    <RiMessage2Line className={`w-4 h-4 ${
                      msg.urgent ? 'text-[#FF5656]' : 'text-[#5698FF]'
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-[#1C243C] text-sm">{msg.from}</p>
                      <span className="text-xs bg-[#6B7AFF]/10 text-[#6B7AFF] px-2 py-1 rounded-full">
                        {msg.type}
                      </span>
                    </div>
                    <p className="text-sm text-[#8F96AA] mb-1">{msg.message}</p>
                    <p className="text-xs text-[#8F96AA]">{msg.time}</p>
                  </div>
                  {msg.urgent && (
                    <div className="w-2 h-2 bg-[#FF5656] rounded-full shrink-0 mt-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> 
  );
}
