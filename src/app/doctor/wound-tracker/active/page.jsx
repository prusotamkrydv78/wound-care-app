'use client';
import { useState } from 'react';
import Link from 'next/link';
import { RiFirstAidKitLine, RiStethoscopeLine, RiAlarmWarningLine, RiUserHeartLine, RiTimeLine, RiCameraLine, RiMicroscopeLine, RiAiGenerate } from 'react-icons/ri';
import { MdSearch, MdFilterList, MdTrendingUp, MdTrendingDown, MdWarning, MdCheckCircle, MdSchedule, MdVisibility, MdEdit, MdCompare } from 'react-icons/md';

export default function ActiveWoundCases() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('priority');

  // Enhanced active wound cases with comprehensive clinical data
  const activeCases = [
    {
      id: 'WC001',
      patientName: 'Sarah Connor',
      patientId: 'PT001',
      age: 58,
      woundType: 'Diabetic Foot Ulcer',
      woundLocation: 'Right foot, plantar surface',
      stage: 'Stage 3',
      status: 'Critical - Infection',
      priority: 'critical',
      lastUpdated: '2 hours ago',
      lastAssessment: '2024-02-20T14:30:00Z',
      nextAppointment: '2024-02-21T09:00:00Z',

      // Clinical metrics
      metrics: {
        progress: 45,
        healingRate: -5, // negative indicates deterioration
        size: {
          current: 4.5,
          initial: 5.2,
          change: -13
        },
        painLevel: 7,
        infectionRisk: 85,
        healingPrediction: "Delayed - 6-8 weeks"
      },

      // AI Analysis
      aiInsights: {
        tissueViability: "Compromised",
        biofilmRisk: "High",
        recommendations: [
          "Immediate antibiotic therapy",
          "Daily dressing changes",
          "Vascular assessment required"
        ],
        riskFactors: ["Diabetes", "Poor circulation", "Previous infection"]
      },

      // Current treatment
      currentTreatment: {
        dressing: "Silver alginate with foam",
        frequency: "Daily",
        lastChanged: "2024-02-20T08:00:00Z",
        nextChange: "2024-02-21T08:00:00Z"
      },

      // Alerts and flags
      alerts: [
        { type: "infection", message: "Signs of infection detected", severity: "critical" },
        { type: "deterioration", message: "Wound size increased", severity: "high" },
        { type: "compliance", message: "Patient missed last appointment", severity: "medium" }
      ],

      // Care team
      careTeam: ["Dr. Johnson", "Nurse Jennifer", "Dr. Wilson (Endo)"],

      // Images
      hasImages: true,
      imageCount: 6,
      lastImageDate: "2024-02-20T14:30:00Z",

      // Compliance
      treatmentAdherence: 78,
      appointmentCompliance: 85,

      // Timeline
      daysSinceOnset: 45,
      daysInTreatment: 30,
      expectedHealingDays: 56
    },
    {
      id: 'WC002',
      patientName: 'John Smith',
      patientId: 'PT002',
      age: 72,
      woundType: 'Pressure Ulcer',
      woundLocation: 'Sacral region',
      stage: 'Stage 2',
      status: 'Healing Well',
      priority: 'normal',
      lastUpdated: '1 day ago',
      lastAssessment: '2024-02-19T10:15:00Z',
      nextAppointment: '2024-02-23T14:00:00Z',

      metrics: {
        progress: 75,
        healingRate: 8,
        size: {
          current: 3.2,
          initial: 7.1,
          change: 55
        },
        painLevel: 3,
        infectionRisk: 25,
        healingPrediction: "Good - 2-3 weeks"
      },

      aiInsights: {
        tissueViability: "Good",
        biofilmRisk: "Low",
        recommendations: [
          "Continue current protocol",
          "Maintain pressure relief",
          "Monitor for improvement"
        ],
        riskFactors: ["Immobility", "Advanced age"]
      },

      currentTreatment: {
        dressing: "Hydrocolloid",
        frequency: "Every 3 days",
        lastChanged: "2024-02-19T10:00:00Z",
        nextChange: "2024-02-22T10:00:00Z"
      },

      alerts: [],

      careTeam: ["Dr. Johnson", "Nurse Mary", "PT Mike"],

      hasImages: true,
      imageCount: 4,
      lastImageDate: "2024-02-19T10:15:00Z",

      treatmentAdherence: 92,
      appointmentCompliance: 95,

      daysSinceOnset: 28,
      daysInTreatment: 18,
      expectedHealingDays: 21
    },
    {
      id: 'WC003',
      patientName: 'Maria Garcia',
      patientId: 'PT003',
      age: 45,
      woundType: 'Surgical Incision',
      woundLocation: 'Abdominal, midline',
      stage: 'Healing',
      status: 'Excellent Progress',
      priority: 'low',
      lastUpdated: '1 day ago',
      lastAssessment: '2024-02-19T16:00:00Z',
      nextAppointment: '2024-02-22T11:00:00Z',

      metrics: {
        progress: 90,
        healingRate: 12,
        size: {
          current: 2.0,
          initial: 8.0,
          change: 75
        },
        painLevel: 1,
        infectionRisk: 5,
        healingPrediction: "Excellent - 1 week"
      },

      aiInsights: {
        tissueViability: "Excellent",
        biofilmRisk: "Minimal",
        recommendations: [
          "Continue dry dressing",
          "Patient education for home care",
          "Prepare for discharge"
        ],
        riskFactors: ["Post-surgical"]
      },

      currentTreatment: {
        dressing: "Dry sterile dressing",
        frequency: "Daily",
        lastChanged: "2024-02-19T08:00:00Z",
        nextChange: "2024-02-20T08:00:00Z"
      },

      alerts: [],

      careTeam: ["Dr. Johnson", "Nurse Lisa"],

      hasImages: true,
      imageCount: 3,
      lastImageDate: "2024-02-19T16:00:00Z",

      treatmentAdherence: 98,
      appointmentCompliance: 100,

      daysSinceOnset: 14,
      daysInTreatment: 14,
      expectedHealingDays: 21
    },
    {
      id: 'WC004',
      patientName: 'Robert Johnson',
      patientId: 'PT004',
      age: 65,
      woundType: 'Venous Leg Ulcer',
      woundLocation: 'Left lower leg',
      stage: 'Chronic',
      status: 'Stable - Slow Progress',
      priority: 'high',
      lastUpdated: '3 days ago',
      lastAssessment: '2024-02-17T13:30:00Z',
      nextAppointment: '2024-02-21T15:00:00Z',

      metrics: {
        progress: 35,
        healingRate: 2,
        size: {
          current: 6.8,
          initial: 7.5,
          change: 9
        },
        painLevel: 5,
        infectionRisk: 40,
        healingPrediction: "Slow - 8-12 weeks"
      },

      aiInsights: {
        tissueViability: "Fair",
        biofilmRisk: "Moderate",
        recommendations: [
          "Compression therapy optimization",
          "Consider advanced dressings",
          "Vascular assessment"
        ],
        riskFactors: ["Venous insufficiency", "Edema", "Previous ulceration"]
      },

      currentTreatment: {
        dressing: "Foam with compression",
        frequency: "Twice weekly",
        lastChanged: "2024-02-17T13:00:00Z",
        nextChange: "2024-02-21T13:00:00Z"
      },

      alerts: [
        { type: "slow-healing", message: "Healing rate below expected", severity: "medium" },
        { type: "appointment", message: "Overdue for assessment", severity: "high" }
      ],

      careTeam: ["Dr. Johnson", "Nurse Patricia", "Vascular Specialist"],

      hasImages: true,
      imageCount: 8,
      lastImageDate: "2024-02-17T13:30:00Z",

      treatmentAdherence: 85,
      appointmentCompliance: 75,

      daysSinceOnset: 120,
      daysInTreatment: 90,
      expectedHealingDays: 84
    }
  ];

  // Filter options
  const filterOptions = [
    { id: 'all', name: 'All Cases', count: activeCases.length },
    { id: 'critical', name: 'Critical', count: activeCases.filter(c => c.priority === 'critical').length },
    { id: 'high-risk', name: 'High Risk', count: activeCases.filter(c => c.metrics.infectionRisk >= 70).length },
    { id: 'deteriorating', name: 'Deteriorating', count: activeCases.filter(c => c.metrics.healingRate < 0).length },
    { id: 'overdue', name: 'Overdue Review', count: activeCases.filter(c => c.alerts.some(a => a.type === 'appointment')).length }
  ];

  const sortOptions = [
    { id: 'priority', name: 'Priority' },
    { id: 'progress', name: 'Progress' },
    { id: 'lastUpdated', name: 'Last Updated' },
    { id: 'infectionRisk', name: 'Infection Risk' }
  ];

  // Helper functions
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'bg-[#FF5656]/10 text-[#FF5656] border-[#FF5656]/20';
      case 'high': return 'bg-[#FFE27A]/10 text-[#FFE27A] border-[#FFE27A]/20';
      case 'normal': return 'bg-[#5698FF]/10 text-[#5698FF] border-[#5698FF]/20';
      case 'low': return 'bg-[#56E0A0]/10 text-[#56E0A0] border-[#56E0A0]/20';
      default: return 'bg-[#DDE1EC] text-[#8F96AA] border-[#DDE1EC]';
    }
  };

  const getStatusColor = (status) => {
    if (status.includes('Critical') || status.includes('Infection')) return 'bg-[#FF5656]/10 text-[#FF5656]';
    if (status.includes('Excellent')) return 'bg-[#56E0A0]/10 text-[#56E0A0]';
    if (status.includes('Healing') || status.includes('Stable')) return 'bg-[#5698FF]/10 text-[#5698FF]';
    return 'bg-[#FFE27A]/10 text-[#FFE27A]';
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-[#56E0A0]';
    if (progress >= 60) return 'bg-[#5698FF]';
    if (progress >= 40) return 'bg-[#FFE27A]';
    return 'bg-[#FF5656]';
  };

  const getInfectionRiskColor = (risk) => {
    if (risk >= 70) return 'text-[#FF5656]';
    if (risk >= 40) return 'text-[#FFE27A]';
    return 'text-[#56E0A0]';
  };

  const getTrendIcon = (rate) => {
    if (rate > 0) return MdTrendingUp;
    if (rate < 0) return MdTrendingDown;
    return MdCheckCircle;
  };

  const getTrendColor = (rate) => {
    if (rate > 0) return 'text-[#56E0A0]';
    if (rate < 0) return 'text-[#FF5656]';
    return 'text-[#8F96AA]';
  };

  // Filter and sort cases
  const filteredAndSortedCases = activeCases
    .filter(woundCase => {
      const matchesSearch = woundCase.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           woundCase.woundType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           woundCase.patientId.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilter = selectedFilter === 'all' ||
                           (selectedFilter === 'critical' && woundCase.priority === 'critical') ||
                           (selectedFilter === 'high-risk' && woundCase.metrics.infectionRisk >= 70) ||
                           (selectedFilter === 'deteriorating' && woundCase.metrics.healingRate < 0) ||
                           (selectedFilter === 'overdue' && woundCase.alerts.some(a => a.type === 'appointment'));

      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'priority':
          const priorityOrder = { critical: 4, high: 3, normal: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'progress':
          return b.metrics.progress - a.metrics.progress;
        case 'infectionRisk':
          return b.metrics.infectionRisk - a.metrics.infectionRisk;
        case 'lastUpdated':
          return new Date(b.lastAssessment) - new Date(a.lastAssessment);
        default:
          return 0;
      }
    });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Enhanced Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1C243C]">Active Wound Cases</h1>
          <p className="text-[#8F96AA] mt-1">
            {filteredAndSortedCases.length} active cases • {filteredAndSortedCases.filter(c => c.priority === 'critical').length} critical
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8F96AA] w-4 h-4" />
            <input
              type="text"
              placeholder="Search cases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-[#DDE1EC] rounded-lg w-64 focus:border-[#6B7AFF] focus:outline-none"
            />
          </div>

          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="px-4 py-2 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
          >
            {filterOptions.map(option => (
              <option key={option.id} value={option.id}>
                {option.name} ({option.count})
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
          >
            {sortOptions.map(option => (
              <option key={option.id} value={option.id}>
                Sort by {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Critical Cases Alert */}
      {filteredAndSortedCases.some(c => c.priority === 'critical') && (
        <div className="bg-[#FF5656]/5 border border-[#FF5656]/20 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <MdWarning className="w-5 h-5 text-[#FF5656]" />
            <div>
              <h3 className="font-medium text-[#FF5656]">Critical Cases Require Immediate Attention</h3>
              <p className="text-sm text-[#8F96AA]">
                {filteredAndSortedCases.filter(c => c.priority === 'critical').length} cases marked as critical priority
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Cases Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-[#DDE1EC] p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#FF5656]/10 rounded-lg flex items-center justify-center">
              <MdWarning className="w-4 h-4 text-[#FF5656]" />
            </div>
            <div>
              <p className="text-sm text-[#8F96AA]">Critical Cases</p>
              <p className="text-lg font-bold text-[#1C243C]">
                {activeCases.filter(c => c.priority === 'critical').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#DDE1EC] p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#FFE27A]/10 rounded-lg flex items-center justify-center">
              <RiMicroscopeLine className="w-4 h-4 text-[#FFE27A]" />
            </div>
            <div>
              <p className="text-sm text-[#8F96AA]">High Infection Risk</p>
              <p className="text-lg font-bold text-[#1C243C]">
                {activeCases.filter(c => c.metrics.infectionRisk >= 70).length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#DDE1EC] p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#5698FF]/10 rounded-lg flex items-center justify-center">
              <MdTrendingUp className="w-4 h-4 text-[#5698FF]" />
            </div>
            <div>
              <p className="text-sm text-[#8F96AA]">Improving</p>
              <p className="text-lg font-bold text-[#1C243C]">
                {activeCases.filter(c => c.metrics.healingRate > 0).length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#DDE1EC] p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#56E0A0]/10 rounded-lg flex items-center justify-center">
              <MdSchedule className="w-4 h-4 text-[#56E0A0]" />
            </div>
            <div>
              <p className="text-sm text-[#8F96AA]">Due for Review</p>
              <p className="text-lg font-bold text-[#1C243C]">
                {activeCases.filter(c => new Date(c.nextAppointment) <= new Date('2024-02-21')).length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Cases Grid */}
      <div className="grid gap-6">
        {filteredAndSortedCases.map((woundCase) => {
          const TrendIcon = getTrendIcon(woundCase.metrics.healingRate);
          return (
            <div key={woundCase.id} className="bg-white rounded-xl border border-[#DDE1EC] overflow-hidden hover:border-[#6B7AFF]/20 transition-all">
              {/* Case Header */}
              <div className="p-6 border-b border-[#DDE1EC] bg-[#F8F9FF]">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#6B7AFF]/10 flex items-center justify-center">
                      <RiFirstAidKitLine className="w-6 h-6 text-[#6B7AFF]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold text-[#1C243C]">{woundCase.patientName}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(woundCase.priority)}`}>
                          {woundCase.priority}
                        </span>
                      </div>
                      <p className="text-sm text-[#8F96AA]">{woundCase.patientId} • Age {woundCase.age}</p>
                      <p className="text-sm text-[#1C243C] font-medium">{woundCase.woundType} - {woundCase.stage}</p>
                      <p className="text-sm text-[#8F96AA]">{woundCase.woundLocation}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(woundCase.status)}`}>
                      {woundCase.status}
                    </span>
                    <p className="text-xs text-[#8F96AA] mt-2">Case ID: {woundCase.id}</p>
                  </div>
                </div>
              </div>

              {/* Case Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                  {/* Progress & Metrics */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-[#1C243C]">Healing Progress</h4>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-[#8F96AA]">Overall Progress</span>
                        <div className="flex items-center gap-2">
                          <TrendIcon className={`w-4 h-4 ${getTrendColor(woundCase.metrics.healingRate)}`} />
                          <span className="text-lg font-bold text-[#1C243C]">{woundCase.metrics.progress}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-[#DDE1EC] rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${getProgressColor(woundCase.metrics.progress)}`}
                          style={{ width: `${woundCase.metrics.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-[#8F96AA] mt-1">
                        <span>Day {woundCase.daysInTreatment}</span>
                        <span>Target: {woundCase.expectedHealingDays} days</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-[#F8F9FF] rounded-lg">
                        <p className="text-xs text-[#8F96AA]">Wound Size</p>
                        <p className="text-sm font-medium text-[#1C243C]">
                          {woundCase.metrics.size.current} cm²
                        </p>
                        <p className={`text-xs ${woundCase.metrics.size.change > 0 ? 'text-[#56E0A0]' : 'text-[#FF5656]'}`}>
                          {woundCase.metrics.size.change > 0 ? '-' : '+'}{Math.abs(woundCase.metrics.size.change)}%
                        </p>
                      </div>
                      <div className="p-3 bg-[#F8F9FF] rounded-lg">
                        <p className="text-xs text-[#8F96AA]">Pain Level</p>
                        <p className="text-sm font-medium text-[#1C243C]">
                          {woundCase.metrics.painLevel}/10
                        </p>
                        <p className="text-xs text-[#8F96AA]">Patient reported</p>
                      </div>
                    </div>

                    <div className="p-3 bg-[#F8F9FF] rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-[#8F96AA]">Infection Risk</span>
                        <span className={`text-sm font-bold ${getInfectionRiskColor(woundCase.metrics.infectionRisk)}`}>
                          {woundCase.metrics.infectionRisk}%
                        </span>
                      </div>
                      <div className="w-full bg-[#DDE1EC] rounded-full h-2 mt-2">
                        <div
                          className={`h-2 rounded-full ${
                            woundCase.metrics.infectionRisk >= 70 ? 'bg-[#FF5656]' :
                            woundCase.metrics.infectionRisk >= 40 ? 'bg-[#FFE27A]' : 'bg-[#56E0A0]'
                          }`}
                          style={{ width: `${woundCase.metrics.infectionRisk}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* AI Insights & Treatment */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-[#1C243C]">AI Clinical Insights</h4>

                    <div className="p-3 bg-[#6B7AFF]/5 border border-[#6B7AFF]/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <RiAiGenerate className="w-4 h-4 text-[#6B7AFF]" />
                        <span className="text-sm font-medium text-[#6B7AFF]">Prediction</span>
                      </div>
                      <p className="text-sm text-[#1C243C]">{woundCase.metrics.healingPrediction}</p>
                      <p className="text-xs text-[#8F96AA] mt-1">Tissue Viability: {woundCase.aiInsights.tissueViability}</p>
                    </div>

                    <div>
                      <h5 className="text-sm font-medium text-[#1C243C] mb-2">AI Recommendations</h5>
                      <div className="space-y-1">
                        {woundCase.aiInsights.recommendations.slice(0, 3).map((rec, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#6B7AFF] rounded-full"></div>
                            <span className="text-xs text-[#1C243C]">{rec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-medium text-[#1C243C] mb-2">Current Treatment</h5>
                      <div className="p-3 bg-[#F8F9FF] rounded-lg">
                        <p className="text-sm text-[#1C243C] font-medium">{woundCase.currentTreatment.dressing}</p>
                        <p className="text-xs text-[#8F96AA]">Frequency: {woundCase.currentTreatment.frequency}</p>
                        <p className="text-xs text-[#8F96AA]">Next change: {new Date(woundCase.currentTreatment.nextChange).toLocaleDateString()}</p>
                      </div>
                    </div>

                    {woundCase.hasImages && (
                      <div className="flex items-center gap-2 p-2 bg-[#F8F9FF] rounded">
                        <RiCameraLine className="w-4 h-4 text-[#6B7AFF]" />
                        <span className="text-sm text-[#1C243C]">{woundCase.imageCount} images</span>
                        <span className="text-xs text-[#8F96AA]">Last: {new Date(woundCase.lastImageDate).toLocaleDateString()}</span>
                      </div>
                    )}
                  </div>

                  {/* Alerts & Care Team */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-[#1C243C]">Alerts & Team</h4>

                    {woundCase.alerts.length > 0 && (
                      <div className="space-y-2">
                        {woundCase.alerts.map((alert, index) => (
                          <div key={index} className={`p-2 rounded border ${
                            alert.severity === 'critical' ? 'bg-[#FF5656]/5 border-[#FF5656]/20' :
                            alert.severity === 'high' ? 'bg-[#FFE27A]/5 border-[#FFE27A]/20' :
                            'bg-[#5698FF]/5 border-[#5698FF]/20'
                          }`}>
                            <div className="flex items-center gap-2">
                              <MdWarning className={`w-3 h-3 ${
                                alert.severity === 'critical' ? 'text-[#FF5656]' :
                                alert.severity === 'high' ? 'text-[#FFE27A]' :
                                'text-[#5698FF]'
                              }`} />
                              <span className="text-xs text-[#1C243C]">{alert.message}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div>
                      <h5 className="text-sm font-medium text-[#1C243C] mb-2">Care Team</h5>
                      <div className="space-y-1">
                        {woundCase.careTeam.map((member, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <RiUserHeartLine className="w-3 h-3 text-[#6B7AFF]" />
                            <span className="text-xs text-[#1C243C]">{member}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-2 bg-[#F8F9FF] rounded">
                        <p className="text-xs text-[#8F96AA]">Treatment Adherence</p>
                        <p className="text-sm font-bold text-[#1C243C]">{woundCase.treatmentAdherence}%</p>
                      </div>
                      <div className="text-center p-2 bg-[#F8F9FF] rounded">
                        <p className="text-xs text-[#8F96AA]">Appointment Compliance</p>
                        <p className="text-sm font-bold text-[#1C243C]">{woundCase.appointmentCompliance}%</p>
                      </div>
                    </div>

                    <div className="text-sm text-[#8F96AA]">
                      <p>Next appointment: <span className="font-medium text-[#1C243C]">{new Date(woundCase.nextAppointment).toLocaleDateString()}</span></p>
                      <p>Last updated: {woundCase.lastUpdated}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6 pt-4 border-t border-[#DDE1EC]">
                  <Link
                    href={`/doctor/wound-tracker/assessment/${woundCase.id}`}
                    className="flex items-center gap-2 px-4 py-2 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
                  >
                    <MdVisibility className="w-4 h-4" />
                    View Details
                  </Link>
                  <button className="flex items-center gap-2 px-4 py-2 border border-[#DDE1EC] text-[#8F96AA] rounded-lg hover:bg-[#F8F9FF] transition-colors">
                    <MdEdit className="w-4 h-4" />
                    Update Assessment
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-[#DDE1EC] text-[#8F96AA] rounded-lg hover:bg-[#F8F9FF] transition-colors">
                    <MdCompare className="w-4 h-4" />
                    Compare Progress
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-[#DDE1EC] text-[#8F96AA] rounded-lg hover:bg-[#F8F9FF] transition-colors">
                    <RiCameraLine className="w-4 h-4" />
                    Add Images
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredAndSortedCases.length === 0 && (
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-12 text-center">
          <RiFirstAidKitLine className="w-16 h-16 text-[#DDE1EC] mx-auto mb-4" />
          <h3 className="text-lg font-medium text-[#1C243C] mb-2">No active cases found</h3>
          <p className="text-[#8F96AA]">
            {searchTerm || selectedFilter !== 'all'
              ? "Try adjusting your search terms or filters"
              : "All cases are currently resolved or inactive"
            }
          </p>
        </div>
      )}
    </div>
  );
}
