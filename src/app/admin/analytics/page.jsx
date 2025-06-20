'use client';
import { useState } from 'react';
import { 
  MdTrendingUp, MdTrendingDown, MdAnalytics, MdDownload, MdDateRange,
  MdPeople, MdVisibility, MdTimer, MdDevices, MdLocationOn
} from 'react-icons/md';
import { 
  RiUserHeartLine, RiStethoscopeLine, RiFirstAidKitLine, RiTimeLine,
  RiBarChartLine, RiPieChartLine, RiLineChartLine, RiFileTextLine
} from 'react-icons/ri';

export default function AnalyticsReports() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('overview');

  // Mock analytics data
  const systemMetrics = {
    overview: {
      totalUsers: { value: 2847, change: 12.5, trend: 'up' },
      activeUsers: { value: 1923, change: 8.3, trend: 'up' },
      newRegistrations: { value: 156, change: -2.1, trend: 'down' },
      sessionDuration: { value: '24m 32s', change: 15.7, trend: 'up' }
    },
    clinical: {
      activeWounds: { value: 1247, change: -5.2, trend: 'down' },
      healingRate: { value: 87.3, change: 3.1, trend: 'up' },
      avgHealingTime: { value: '28 days', change: -8.5, trend: 'up' },
      complications: { value: 23, change: -12.3, trend: 'up' }
    },
    engagement: {
      dailyActiveUsers: { value: 1456, change: 6.8, trend: 'up' },
      photoSubmissions: { value: 892, change: 18.2, trend: 'up' },
      appointmentCompliance: { value: 91.2, change: 2.4, trend: 'up' },
      appRating: { value: 4.7, change: 0.2, trend: 'up' }
    }
  };

  const chartData = {
    userGrowth: [
      { month: 'Jan', users: 2156, active: 1423 },
      { month: 'Feb', users: 2847, active: 1923 },
      { month: 'Mar', users: 3200, active: 2100 },
      { month: 'Apr', users: 3650, active: 2400 }
    ],
    woundTypes: [
      { type: 'Diabetic Foot Ulcer', count: 456, percentage: 36.6 },
      { type: 'Pressure Ulcer', count: 312, percentage: 25.0 },
      { type: 'Surgical Incision', count: 234, percentage: 18.8 },
      { type: 'Venous Leg Ulcer', count: 156, percentage: 12.5 },
      { type: 'Other', count: 89, percentage: 7.1 }
    ],
    healingOutcomes: [
      { outcome: 'Complete Healing', count: 1089, percentage: 87.3 },
      { outcome: 'Significant Improvement', count: 98, percentage: 7.9 },
      { outcome: 'Stable', count: 37, percentage: 3.0 },
      { outcome: 'Deterioration', count: 23, percentage: 1.8 }
    ]
  };

  const topPerformers = {
    doctors: [
      { name: 'Dr. Sarah Johnson', patients: 45, healingRate: 94.2, satisfaction: 4.9 },
      { name: 'Dr. Michael Wilson', patients: 38, healingRate: 91.7, satisfaction: 4.8 },
      { name: 'Dr. Jennifer Martinez', patients: 42, healingRate: 89.3, satisfaction: 4.7 }
    ],
    content: [
      { title: 'Wound Care Best Practices', views: 2847, engagement: 87.3 },
      { title: 'Patient Education Video Series', views: 1923, engagement: 82.1 },
      { title: 'Infection Prevention Guide', views: 1456, engagement: 79.8 }
    ]
  };

  const timeframeOptions = [
    { id: '7d', name: 'Last 7 days' },
    { id: '30d', name: 'Last 30 days' },
    { id: '90d', name: 'Last 3 months' },
    { id: '1y', name: 'Last year' }
  ];

  const metricCategories = [
    { id: 'overview', name: 'System Overview', icon: MdAnalytics },
    { id: 'clinical', name: 'Clinical Outcomes', icon: RiStethoscopeLine },
    { id: 'engagement', name: 'User Engagement', icon: RiUserHeartLine }
  ];

  const getMetricColor = (trend) => {
    return trend === 'up' ? 'text-[#56E0A0]' : 'text-[#FF5656]';
  };

  const getTrendIcon = (trend) => {
    return trend === 'up' ? MdTrendingUp : MdTrendingDown;
  };

  const currentMetrics = systemMetrics[selectedMetric];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1C243C]">Analytics & Reports</h1>
          <p className="text-[#8F96AA] mt-1">
            System performance and clinical outcomes analysis
          </p>
        </div>
        
        <div className="flex gap-3 flex-wrap">
          <select
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="px-4 py-2 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
          >
            {timeframeOptions.map(option => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>

          <button className="flex items-center gap-2 px-4 py-2 border border-[#DDE1EC] rounded-lg hover:bg-[#F8F9FF] transition-colors">
            <MdDateRange className="w-4 h-4" />
            Custom Range
          </button>

          <button className="flex items-center gap-2 px-4 py-2 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors">
            <MdDownload className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Metric Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {metricCategories.map((category) => {
          const CategoryIcon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedMetric(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                selectedMetric === category.id
                  ? 'bg-[#6B7AFF] text-white'
                  : 'bg-white border border-[#DDE1EC] text-[#8F96AA] hover:bg-[#F8F9FF]'
              }`}
            >
              <CategoryIcon className="w-4 h-4" />
              {category.name}
            </button>
          );
        })}
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(currentMetrics).map(([key, metric]) => {
          const TrendIcon = getTrendIcon(metric.trend);
          return (
            <div key={key} className="bg-white rounded-xl border border-[#DDE1EC] p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm text-[#8F96AA] capitalize">
                  {key.replace(/([A-Z])/g, ' $1')}
                </h3>
                <TrendIcon className={`w-5 h-5 ${getMetricColor(metric.trend)}`} />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-[#1C243C]">{metric.value}</span>
                <span className={`text-sm font-medium ${getMetricColor(metric.trend)}`}>
                  {metric.change > 0 ? '+' : ''}{metric.change}%
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth Chart */}
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-[#1C243C]">User Growth Trend</h2>
            <RiLineChartLine className="w-5 h-5 text-[#6B7AFF]" />
          </div>
          <div className="space-y-4">
            {chartData.userGrowth.map((data, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-[#8F96AA]">{data.month}</span>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-medium text-[#1C243C]">{data.users}</p>
                    <p className="text-xs text-[#8F96AA]">Total</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-[#6B7AFF]">{data.active}</p>
                    <p className="text-xs text-[#8F96AA]">Active</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wound Types Distribution */}
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-[#1C243C]">Wound Types Distribution</h2>
            <RiPieChartLine className="w-5 h-5 text-[#6B7AFF]" />
          </div>
          <div className="space-y-3">
            {chartData.woundTypes.map((type, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#1C243C]">{type.type}</span>
                  <span className="text-[#8F96AA]">{type.count} ({type.percentage}%)</span>
                </div>
                <div className="w-full bg-[#DDE1EC] rounded-full h-2">
                  <div 
                    className="bg-[#6B7AFF] h-2 rounded-full"
                    style={{ width: `${type.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Healing Outcomes */}
      <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-[#1C243C]">Clinical Healing Outcomes</h2>
          <RiBarChartLine className="w-5 h-5 text-[#6B7AFF]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {chartData.healingOutcomes.map((outcome, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center ${
                outcome.outcome === 'Complete Healing' ? 'bg-[#56E0A0]/10' :
                outcome.outcome === 'Significant Improvement' ? 'bg-[#5698FF]/10' :
                outcome.outcome === 'Stable' ? 'bg-[#FFE27A]/10' : 'bg-[#FF5656]/10'
              }`}>
                <span className={`text-lg font-bold ${
                  outcome.outcome === 'Complete Healing' ? 'text-[#56E0A0]' :
                  outcome.outcome === 'Significant Improvement' ? 'text-[#5698FF]' :
                  outcome.outcome === 'Stable' ? 'text-[#FFE27A]' : 'text-[#FF5656]'
                }`}>
                  {outcome.percentage}%
                </span>
              </div>
              <h3 className="font-medium text-[#1C243C] mb-1">{outcome.outcome}</h3>
              <p className="text-sm text-[#8F96AA]">{outcome.count} cases</p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Performers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Doctors */}
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
          <h2 className="text-lg font-semibold text-[#1C243C] mb-6">Top Performing Doctors</h2>
          <div className="space-y-4">
            {topPerformers.doctors.map((doctor, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-[#F8F9FF] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#6B7AFF]/10 rounded-full flex items-center justify-center">
                    <RiStethoscopeLine className="w-5 h-5 text-[#6B7AFF]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1C243C]">{doctor.name}</p>
                    <p className="text-sm text-[#8F96AA]">{doctor.patients} patients</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-[#56E0A0]">{doctor.healingRate}%</p>
                  <p className="text-xs text-[#8F96AA]">★ {doctor.satisfaction}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Content */}
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
          <h2 className="text-lg font-semibold text-[#1C243C] mb-6">Most Viewed Content</h2>
          <div className="space-y-4">
            {topPerformers.content.map((content, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-[#F8F9FF] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#8B6DFF]/10 rounded-full flex items-center justify-center">
                    <RiFileTextLine className="w-5 h-5 text-[#8B6DFF]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1C243C]">{content.title}</p>
                    <p className="text-sm text-[#8F96AA]">{content.views} views</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-[#5698FF]">{content.engagement}%</p>
                  <p className="text-xs text-[#8F96AA]">engagement</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
        <h2 className="text-lg font-semibold text-[#1C243C] mb-4">Export Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center gap-3 p-4 border border-[#DDE1EC] rounded-lg hover:bg-[#F8F9FF] transition-colors">
            <MdDownload className="w-5 h-5 text-[#6B7AFF]" />
            <div className="text-left">
              <p className="font-medium text-[#1C243C]">Clinical Outcomes Report</p>
              <p className="text-sm text-[#8F96AA]">Detailed healing analytics</p>
            </div>
          </button>
          
          <button className="flex items-center gap-3 p-4 border border-[#DDE1EC] rounded-lg hover:bg-[#F8F9FF] transition-colors">
            <MdDownload className="w-5 h-5 text-[#6B7AFF]" />
            <div className="text-left">
              <p className="font-medium text-[#1C243C]">User Engagement Report</p>
              <p className="text-sm text-[#8F96AA]">Platform usage statistics</p>
            </div>
          </button>
          
          <button className="flex items-center gap-3 p-4 border border-[#DDE1EC] rounded-lg hover:bg-[#F8F9FF] transition-colors">
            <MdDownload className="w-5 h-5 text-[#6B7AFF]" />
            <div className="text-left">
              <p className="font-medium text-[#1C243C]">Compliance Report</p>
              <p className="text-sm text-[#8F96AA]">Regulatory compliance data</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
