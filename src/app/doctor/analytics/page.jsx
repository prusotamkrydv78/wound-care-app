'use client';
import { useState } from 'react';
import { MdTrendingUp, MdTrendingDown, MdAnalytics, MdDownload, MdFilterList, MdDateRange, MdCompare, MdInsights } from 'react-icons/md';
import { RiBarChartLine, RiPieChartLine, RiLineChartLine, RiUserHeartLine, RiTimeLine, RiAwardLine, RiAlarmWarningLine } from 'react-icons/ri';

export default function AdvancedAnalyticsDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('healing-outcomes');
  const [comparisonMode, setComparisonMode] = useState(false);

  // Clinical performance metrics
  const performanceMetrics = [
    {
      id: 'healing-rate',
      title: 'Overall Healing Rate',
      value: '92%',
      change: '+5%',
      trend: 'up',
      benchmark: '87%',
      description: 'Percentage of wounds achieving complete healing',
      icon: RiUserHeartLine,
      color: 'text-[#56E0A0]',
      bgColor: 'bg-[#56E0A0]/10'
    },
    {
      id: 'avg-healing-time',
      title: 'Average Healing Time',
      value: '18 days',
      change: '-3 days',
      trend: 'up',
      benchmark: '21 days',
      description: 'Mean time to complete wound closure',
      icon: RiTimeLine,
      color: 'text-[#5698FF]',
      bgColor: 'bg-[#5698FF]/10'
    },
    {
      id: 'patient-satisfaction',
      title: 'Patient Satisfaction',
      value: '4.8/5',
      change: '+0.2',
      trend: 'up',
      benchmark: '4.5/5',
      description: 'Average patient satisfaction score',
      icon: RiAwardLine,
      color: 'text-[#8B6DFF]',
      bgColor: 'bg-[#8B6DFF]/10'
    },
    {
      id: 'complication-rate',
      title: 'Complication Rate',
      value: '3.2%',
      change: '-1.1%',
      trend: 'up',
      benchmark: '4.3%',
      description: 'Percentage of cases with complications',
      icon: RiBarChartLine,
      color: 'text-[#FF5656]',
      bgColor: 'bg-[#FF5656]/10'
    }
  ];

  // Population health analytics
  const populationMetrics = [
    {
      category: 'Diabetic Foot Ulcers',
      totalCases: 45,
      healingRate: 89,
      avgHealingTime: 24,
      complications: 8,
      trend: 'stable'
    },
    {
      category: 'Pressure Injuries',
      totalCases: 32,
      healingRate: 94,
      avgHealingTime: 16,
      complications: 2,
      trend: 'improving'
    },
    {
      category: 'Surgical Wounds',
      totalCases: 28,
      healingRate: 96,
      avgHealingTime: 12,
      complications: 1,
      trend: 'improving'
    },
    {
      category: 'Venous Ulcers',
      totalCases: 18,
      healingRate: 85,
      avgHealingTime: 32,
      complications: 4,
      trend: 'declining'
    }
  ];

  // Predictive analytics insights
  const predictiveInsights = [
    {
      id: 'infection-risk',
      title: 'High Infection Risk Patients',
      count: 7,
      description: 'Patients with >80% infection probability in next 48h',
      action: 'Review antibiotic protocols',
      urgency: 'high',
      confidence: 94
    },
    {
      id: 'delayed-healing',
      title: 'Delayed Healing Prediction',
      count: 12,
      description: 'Cases likely to exceed expected healing timeline',
      action: 'Consider treatment modification',
      urgency: 'medium',
      confidence: 87
    },
    {
      id: 'readmission-risk',
      title: 'Readmission Risk',
      count: 5,
      description: 'Patients at high risk for 30-day readmission',
      action: 'Enhanced discharge planning',
      urgency: 'medium',
      confidence: 91
    }
  ];

  // Quality indicators
  const qualityIndicators = [
    {
      indicator: 'Documentation Completeness',
      score: 98,
      target: 95,
      status: 'excellent'
    },
    {
      indicator: 'Evidence-Based Care',
      score: 94,
      target: 90,
      status: 'excellent'
    },
    {
      indicator: 'Patient Safety Events',
      score: 99.2,
      target: 98,
      status: 'excellent'
    },
    {
      indicator: 'Care Coordination',
      score: 89,
      target: 85,
      status: 'good'
    },
    {
      indicator: 'Infection Prevention',
      score: 96,
      target: 95,
      status: 'excellent'
    }
  ];

  // Helper functions
  const getTrendIcon = (trend) => {
    return trend === 'up' ? MdTrendingUp : MdTrendingDown;
  };

  const getTrendColor = (trend, isPositiveMetric = true) => {
    if (trend === 'up') {
      return isPositiveMetric ? 'text-[#56E0A0]' : 'text-[#FF5656]';
    }
    return isPositiveMetric ? 'text-[#FF5656]' : 'text-[#56E0A0]';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'excellent': return 'bg-[#56E0A0]/10 text-[#56E0A0]';
      case 'good': return 'bg-[#5698FF]/10 text-[#5698FF]';
      case 'needs-improvement': return 'bg-[#FFE27A]/10 text-[#FFE27A]';
      case 'poor': return 'bg-[#FF5656]/10 text-[#FF5656]';
      default: return 'bg-[#DDE1EC] text-[#8F96AA]';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high': return 'bg-[#FF5656]/10 text-[#FF5656] border-[#FF5656]/20';
      case 'medium': return 'bg-[#FFE27A]/10 text-[#FFE27A] border-[#FFE27A]/20';
      case 'low': return 'bg-[#56E0A0]/10 text-[#56E0A0] border-[#56E0A0]/20';
      default: return 'bg-[#DDE1EC] text-[#8F96AA] border-[#DDE1EC]';
    }
  };

  const getTrendColorByName = (trend) => {
    switch (trend) {
      case 'improving': return 'text-[#56E0A0]';
      case 'stable': return 'text-[#5698FF]';
      case 'declining': return 'text-[#FF5656]';
      default: return 'text-[#8F96AA]';
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Enhanced Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1C243C]">Advanced Analytics & Reporting</h1>
          <p className="text-[#8F96AA] mt-1">Clinical performance insights and population health analytics</p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <select
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="px-4 py-2 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>

          <button
            onClick={() => setComparisonMode(!comparisonMode)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              comparisonMode
                ? 'bg-[#6B7AFF] text-white'
                : 'border border-[#DDE1EC] text-[#8F96AA] hover:bg-[#F8F9FF]'
            }`}
          >
            <MdCompare className="w-4 h-4" />
            Compare
          </button>

          <button className="flex items-center gap-2 px-4 py-2 border border-[#DDE1EC] rounded-lg hover:bg-[#F8F9FF] transition-colors">
            <MdDownload className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Performance Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.map((metric) => {
          const TrendIcon = getTrendIcon(metric.trend);
          return (
            <div key={metric.id} className="bg-white rounded-xl border border-[#DDE1EC] p-6 hover:border-[#6B7AFF]/20 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg ${metric.bgColor} flex items-center justify-center`}>
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                <TrendIcon className={`w-5 h-5 ${getTrendColor(metric.trend, !metric.id.includes('complication'))}`} />
              </div>

              <h3 className="font-semibold text-[#1C243C] mb-1">{metric.title}</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-bold text-[#1C243C]">{metric.value}</span>
                <span className={`text-sm font-medium ${getTrendColor(metric.trend, !metric.id.includes('complication'))}`}>
                  {metric.change}
                </span>
              </div>

              <p className="text-xs text-[#8F96AA] mb-3">{metric.description}</p>

              <div className="flex items-center justify-between text-xs">
                <span className="text-[#8F96AA]">Benchmark:</span>
                <span className="font-medium text-[#1C243C]">{metric.benchmark}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Population Health Analytics */}
      <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
        <div className="flex items-center gap-2 mb-6">
          <RiPieChartLine className="w-5 h-5 text-[#6B7AFF]" />
          <h2 className="font-semibold text-[#1C243C]">Population Health Analytics</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {populationMetrics.map((metric, index) => (
            <div key={index} className="p-4 bg-[#F8F9FF] rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-[#1C243C] text-sm">{metric.category}</h3>
                <span className={`text-xs font-medium ${getTrendColorByName(metric.trend)}`}>
                  {metric.trend}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-[#8F96AA]">Total Cases:</span>
                  <span className="font-medium text-[#1C243C]">{metric.totalCases}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#8F96AA]">Healing Rate:</span>
                  <span className="font-medium text-[#56E0A0]">{metric.healingRate}%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#8F96AA]">Avg Time:</span>
                  <span className="font-medium text-[#5698FF]">{metric.avgHealingTime}d</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#8F96AA]">Complications:</span>
                  <span className="font-medium text-[#FF5656]">{metric.complications}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Predictive Analytics & Quality Indicators */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Predictive Insights */}
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
          <div className="flex items-center gap-2 mb-6">
            <MdInsights className="w-5 h-5 text-[#8B6DFF]" />
            <h2 className="font-semibold text-[#1C243C]">Predictive Analytics</h2>
          </div>

          <div className="space-y-4">
            {predictiveInsights.map((insight) => (
              <div key={insight.id} className={`p-4 rounded-lg border ${getUrgencyColor(insight.urgency)}`}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-medium text-[#1C243C] text-sm">{insight.title}</h3>
                    <p className="text-xs text-[#8F96AA] mt-1">{insight.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-[#1C243C]">{insight.count}</span>
                    <p className="text-xs text-[#8F96AA]">patients</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-[#6B7AFF] font-medium">{insight.action}</span>
                  <span className="text-xs text-[#8F96AA]">{insight.confidence}% confidence</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Indicators */}
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
          <div className="flex items-center gap-2 mb-6">
            <RiAwardLine className="w-5 h-5 text-[#56E0A0]" />
            <h2 className="font-semibold text-[#1C243C]">Quality Indicators</h2>
          </div>

          <div className="space-y-4">
            {qualityIndicators.map((indicator, index) => (
              <div key={index} className="p-4 bg-[#F8F9FF] rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-[#1C243C] text-sm">{indicator.indicator}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(indicator.status)}`}>
                    {indicator.status}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#8F96AA]">Score: {indicator.score}%</span>
                      <span className="text-[#8F96AA]">Target: {indicator.target}%</span>
                    </div>
                    <div className="w-full bg-[#DDE1EC] rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          indicator.score >= indicator.target ? 'bg-[#56E0A0]' : 'bg-[#FFE27A]'
                        }`}
                        style={{ width: `${Math.min(indicator.score, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clinical Insights Summary */}
      <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
        <div className="flex items-center gap-2 mb-6">
          <RiAlarmWarningLine className="w-5 h-5 text-[#FF5656]" />
          <h2 className="font-semibold text-[#1C243C]">Clinical Action Items</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-[#FF5656]/5 border border-[#FF5656]/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <RiAlarmWarningLine className="w-4 h-4 text-[#FF5656]" />
              <span className="text-sm font-medium text-[#FF5656]">Immediate Action</span>
            </div>
            <p className="text-2xl font-bold text-[#FF5656] mb-1">7</p>
            <p className="text-xs text-[#8F96AA]">High-risk patients requiring urgent intervention</p>
          </div>

          <div className="p-4 bg-[#FFE27A]/5 border border-[#FFE27A]/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <MdTrendingUp className="w-4 h-4 text-[#FFE27A]" />
              <span className="text-sm font-medium text-[#FFE27A]">Monitor Closely</span>
            </div>
            <p className="text-2xl font-bold text-[#FFE27A] mb-1">12</p>
            <p className="text-xs text-[#8F96AA]">Cases showing delayed healing patterns</p>
          </div>

          <div className="p-4 bg-[#56E0A0]/5 border border-[#56E0A0]/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <RiAwardLine className="w-4 h-4 text-[#56E0A0]" />
              <span className="text-sm font-medium text-[#56E0A0]">Excellent Progress</span>
            </div>
            <p className="text-2xl font-bold text-[#56E0A0] mb-1">28</p>
            <p className="text-xs text-[#8F96AA]">Patients exceeding healing expectations</p>
          </div>
        </div>
      </div>
    </div>
  );
}
