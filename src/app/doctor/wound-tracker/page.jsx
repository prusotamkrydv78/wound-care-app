'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MdAdd, MdSearch, MdFilterList, MdAnalytics, MdCompare, MdZoomIn, MdTrendingUp, MdWarning, MdAssignment } from 'react-icons/md';
import { RiFirstAidKitLine, RiCameraLine, RiRulerLine, RiMicroscopeLine, RiAiGenerate, RiAlarmWarningLine, RiTimeLine } from 'react-icons/ri';

export default function ClinicalWoundTracker() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // grid, list
  const [searchTerm, setSearchTerm] = useState('');

  // Enhanced wound cases with AI analysis
  const woundCases = [
    {
      id: 'WC001',
      patient: 'Sarah Connor',
      patientId: 'PT001',
      woundType: 'Diabetic Foot Ulcer',
      stage: 'Stage 3',
      location: 'Right foot, plantar surface',
      size: { length: 2.5, width: 1.8, depth: 0.5, area: 4.5 },
      lastAssessment: '2024-02-15',
      healingProgress: 45,
      riskScore: 85,
      aiClassification: 'Neuropathic ulcer with infection risk',
      tissueTypes: { granulation: 60, necrotic: 25, epithelial: 15 },
      complications: ['Infection risk', 'Poor circulation'],
      treatmentPlan: 'Debridement + Antibiotic therapy',
      photographer: 'Dr. Johnson',
      imageCount: 12,
      lastImage: '/api/placeholder/200/150',
      priority: 'critical',
      alerts: ['Signs of infection detected', 'Delayed healing']
    },
    {
      id: 'WC002',
      patient: 'John Smith',
      patientId: 'PT002',
      woundType: 'Pressure Ulcer',
      stage: 'Stage 2',
      location: 'Sacral region',
      size: { length: 3.2, width: 2.1, depth: 0.3, area: 6.7 },
      lastAssessment: '2024-02-14',
      healingProgress: 72,
      riskScore: 58,
      aiClassification: 'Pressure injury with good healing potential',
      tissueTypes: { granulation: 80, necrotic: 5, epithelial: 15 },
      complications: [],
      treatmentPlan: 'Pressure relief + Moisture management',
      photographer: 'Nurse Jennifer',
      imageCount: 8,
      lastImage: '/api/placeholder/200/150',
      priority: 'medium',
      alerts: []
    },
    {
      id: 'WC003',
      patient: 'Maria Garcia',
      patientId: 'PT003',
      woundType: 'Surgical Wound',
      stage: 'Healing',
      location: 'Abdominal incision',
      size: { length: 8.0, width: 0.5, depth: 0.1, area: 4.0 },
      lastAssessment: '2024-02-13',
      healingProgress: 88,
      riskScore: 25,
      aiClassification: 'Post-surgical incision with excellent healing',
      tissueTypes: { granulation: 20, necrotic: 0, epithelial: 80 },
      complications: [],
      treatmentPlan: 'Standard post-op care',
      photographer: 'Dr. Johnson',
      imageCount: 6,
      lastImage: '/api/placeholder/200/150',
      priority: 'low',
      alerts: []
    }
  ];

  // Filter options
  const filterOptions = [
    { id: 'all', name: 'All Cases', count: woundCases.length },
    { id: 'critical', name: 'Critical', count: woundCases.filter(w => w.priority === 'critical').length },
    { id: 'diabetic', name: 'Diabetic Ulcers', count: woundCases.filter(w => w.woundType.includes('Diabetic')).length },
    { id: 'pressure', name: 'Pressure Injuries', count: woundCases.filter(w => w.woundType.includes('Pressure')).length },
    { id: 'surgical', name: 'Surgical Wounds', count: woundCases.filter(w => w.woundType.includes('Surgical')).length }
  ];

  // Helper functions
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'bg-[#FF5656]/10 text-[#FF5656] border-[#FF5656]/20';
      case 'high': return 'bg-[#FFE27A]/10 text-[#FFE27A] border-[#FFE27A]/20';
      case 'medium': return 'bg-[#5698FF]/10 text-[#5698FF] border-[#5698FF]/20';
      case 'low': return 'bg-[#56E0A0]/10 text-[#56E0A0] border-[#56E0A0]/20';
      default: return 'bg-[#DDE1EC] text-[#8F96AA] border-[#DDE1EC]';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-[#56E0A0]';
    if (progress >= 60) return 'bg-[#5698FF]';
    if (progress >= 40) return 'bg-[#FFE27A]';
    return 'bg-[#FF5656]';
  };

  const getRiskScoreColor = (score) => {
    if (score >= 80) return 'text-[#FF5656]';
    if (score >= 60) return 'text-[#FFE27A]';
    return 'text-[#56E0A0]';
  };

  // Filter cases
  const filteredCases = woundCases.filter(woundCase => {
    const matchesSearch = woundCase.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         woundCase.woundType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         woundCase.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = selectedFilter === 'all' ||
                         (selectedFilter === 'critical' && woundCase.priority === 'critical') ||
                         (selectedFilter === 'diabetic' && woundCase.woundType.includes('Diabetic')) ||
                         (selectedFilter === 'pressure' && woundCase.woundType.includes('Pressure')) ||
                         (selectedFilter === 'surgical' && woundCase.woundType.includes('Surgical'));

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Enhanced Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1C243C]">Clinical Wound Assessment</h1>
          <p className="text-[#8F96AA] mt-1">
            {filteredCases.length} active cases • {filteredCases.filter(c => c.priority === 'critical').length} critical alerts
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8F96AA] w-4 h-4" />
            <input
              type="text"
              placeholder="Search cases, patients..."
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

          <Link
            href="/doctor/wound-tracker/assessment/new"
            className="flex items-center gap-2 px-4 py-2 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
          >
            <MdAdd className="w-4 h-4" />
            New Assessment
          </Link>
        </div>
      </div>

      {/* AI-Powered Quick Actions */}
      <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
        <div className="flex items-center gap-2 mb-4">
          <RiAiGenerate className="w-5 h-5 text-[#6B7AFF]" />
          <h2 className="font-semibold text-[#1C243C]">AI Clinical Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-[#FF5656]/5 border border-[#FF5656]/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <RiAlarmWarningLine className="w-4 h-4 text-[#FF5656]" />
              <span className="text-sm font-medium text-[#FF5656]">Infection Risk</span>
            </div>
            <p className="text-2xl font-bold text-[#FF5656] mb-1">
              {filteredCases.filter(c => c.riskScore >= 80).length}
            </p>
            <p className="text-xs text-[#8F96AA]">Cases require immediate attention</p>
          </div>
          <div className="p-4 bg-[#56E0A0]/5 border border-[#56E0A0]/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <MdTrendingUp className="w-4 h-4 text-[#56E0A0]" />
              <span className="text-sm font-medium text-[#56E0A0]">Healing Well</span>
            </div>
            <p className="text-2xl font-bold text-[#56E0A0] mb-1">
              {filteredCases.filter(c => c.healingProgress >= 70).length}
            </p>
            <p className="text-xs text-[#8F96AA]">Above 70% healing progress</p>
          </div>
          <div className="p-4 bg-[#8B6DFF]/5 border border-[#8B6DFF]/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <RiMicroscopeLine className="w-4 h-4 text-[#8B6DFF]" />
              <span className="text-sm font-medium text-[#8B6DFF]">AI Analysis</span>
            </div>
            <p className="text-2xl font-bold text-[#8B6DFF] mb-1">
              {filteredCases.filter(c => c.aiClassification).length}
            </p>
            <p className="text-xs text-[#8F96AA]">Cases with AI insights</p>
          </div>
        </div>
      </div>

      {/* Enhanced Wound Cases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCases.map((woundCase) => (
          <div key={woundCase.id} className="bg-white rounded-xl border border-[#DDE1EC] overflow-hidden hover:border-[#6B7AFF]/20 transition-all">
            {/* Case Header */}
            <div className="p-4 border-b border-[#DDE1EC]">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-[#1C243C] mb-1">{woundCase.patient}</h3>
                  <p className="text-sm text-[#8F96AA]">{woundCase.id} • {woundCase.patientId}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(woundCase.priority)}`}>
                  {woundCase.priority}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <RiFirstAidKitLine className="w-4 h-4 text-[#8B6DFF]" />
                <span className="text-sm font-medium text-[#1C243C]">{woundCase.woundType}</span>
              </div>
              <p className="text-xs text-[#8F96AA]">{woundCase.stage} • {woundCase.location}</p>
            </div>

            {/* Wound Image */}
            <div className="relative">
              <img
                src={woundCase.lastImage}
                alt={`${woundCase.woundType} assessment`}
                className="w-full h-32 object-cover"
              />
              <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                {woundCase.imageCount} photos
              </div>
              <div className="absolute top-2 right-2 flex gap-1">
                <button className="p-1 bg-white/90 backdrop-blur-sm rounded hover:bg-white transition-colors">
                  <MdZoomIn className="w-3 h-3 text-[#1C243C]" />
                </button>
                <button className="p-1 bg-white/90 backdrop-blur-sm rounded hover:bg-white transition-colors">
                  <MdCompare className="w-3 h-3 text-[#1C243C]" />
                </button>
              </div>
            </div>

            {/* Clinical Data */}
            <div className="p-4 space-y-4">
              {/* Healing Progress */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#8F96AA]">Healing Progress</span>
                  <span className="text-sm font-medium text-[#1C243C]">{woundCase.healingProgress}%</span>
                </div>
                <div className="w-full bg-[#DDE1EC] rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getProgressColor(woundCase.healingProgress)}`}
                    style={{ width: `${woundCase.healingProgress}%` }}
                  ></div>
                </div>
              </div>

              {/* Measurements */}
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-2 bg-[#F8F9FF] rounded">
                  <p className="text-xs text-[#8F96AA]">Area</p>
                  <p className="text-sm font-medium text-[#1C243C]">{woundCase.size.area} cm²</p>
                </div>
                <div className="text-center p-2 bg-[#F8F9FF] rounded">
                  <p className="text-xs text-[#8F96AA]">Risk Score</p>
                  <p className={`text-sm font-medium ${getRiskScoreColor(woundCase.riskScore)}`}>
                    {woundCase.riskScore}%
                  </p>
                </div>
              </div>

              {/* AI Classification */}
              <div className="p-3 bg-[#6B7AFF]/5 border border-[#6B7AFF]/20 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <RiAiGenerate className="w-3 h-3 text-[#6B7AFF]" />
                  <span className="text-xs font-medium text-[#6B7AFF]">AI Analysis</span>
                </div>
                <p className="text-xs text-[#1C243C]">{woundCase.aiClassification}</p>
              </div>

              {/* Tissue Composition */}
              <div>
                <p className="text-xs text-[#8F96AA] mb-2">Tissue Composition</p>
                <div className="flex gap-1 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#56E0A0]"
                    style={{ width: `${woundCase.tissueTypes.granulation}%` }}
                    title={`Granulation: ${woundCase.tissueTypes.granulation}%`}
                  ></div>
                  <div
                    className="bg-[#FFE27A]"
                    style={{ width: `${woundCase.tissueTypes.epithelial}%` }}
                    title={`Epithelial: ${woundCase.tissueTypes.epithelial}%`}
                  ></div>
                  <div
                    className="bg-[#FF5656]"
                    style={{ width: `${woundCase.tissueTypes.necrotic}%` }}
                    title={`Necrotic: ${woundCase.tissueTypes.necrotic}%`}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-[#8F96AA] mt-1">
                  <span>Granulation {woundCase.tissueTypes.granulation}%</span>
                  <span>Necrotic {woundCase.tissueTypes.necrotic}%</span>
                </div>
              </div>

              {/* Alerts */}
              {woundCase.alerts.length > 0 && (
                <div className="p-2 bg-[#FF5656]/5 border border-[#FF5656]/20 rounded">
                  <div className="flex items-center gap-1 mb-1">
                    <RiAlarmWarningLine className="w-3 h-3 text-[#FF5656]" />
                    <span className="text-xs font-medium text-[#FF5656]">Alerts</span>
                  </div>
                  {woundCase.alerts.slice(0, 2).map((alert, index) => (
                    <p key={index} className="text-xs text-[#FF5656]">• {alert}</p>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <Link
                  href={`/doctor/wound-tracker/assessment/${woundCase.id}`}
                  className="flex-1 py-2 px-3 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors text-center text-sm"
                >
                  Assess
                </Link>
                <Link
                  href={`/doctor/wound-tracker/timeline/${woundCase.id}`}
                  className="flex-1 py-2 px-3 border border-[#DDE1EC] text-[#8F96AA] rounded-lg hover:bg-[#F8F9FF] transition-colors text-center text-sm"
                >
                  Timeline
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredCases.length === 0 && (
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-12 text-center">
          <RiFirstAidKitLine className="w-16 h-16 text-[#DDE1EC] mx-auto mb-4" />
          <h3 className="text-lg font-medium text-[#1C243C] mb-2">No wound cases found</h3>
          <p className="text-[#8F96AA] mb-6">
            {searchTerm || selectedFilter !== 'all'
              ? "Try adjusting your search terms or filters"
              : "Start by creating your first wound assessment"
            }
          </p>
          {(!searchTerm && selectedFilter === 'all') && (
            <Link
              href="/doctor/wound-tracker/assessment/new"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
            >
              <MdAdd className="w-4 h-4" />
              Create First Assessment
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
