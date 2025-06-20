'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MdAdd, MdSearch, MdFilterList, MdEdit, MdVisibility, MdDownload, MdCompare, MdAnalytics } from 'react-icons/md';
import { RiStethoscopeLine, RiCameraLine, RiRulerLine, RiMicroscopeLine, RiAiGenerate, RiAlarmWarningLine, RiTimeLine } from 'react-icons/ri';

export default function AdvancedWoundAssessment() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('table'); // table, cards

  // Enhanced assessment data with AI analysis
  const assessments = [
    {
      id: 'WA001',
      patientName: "Sarah Connor",
      patientId: "PT001",
      date: "2024-02-20",
      time: "14:30",
      woundType: "Diabetic Foot Ulcer",
      location: "Right foot, plantar surface",
      stage: "Stage 3",
      status: "Critical Review Required",
      priority: "critical",
      assessor: "Dr. Johnson",

      // Detailed measurements
      measurements: {
        length: 2.5,
        width: 1.8,
        depth: 0.5,
        area: 4.5,
        volume: 2.25,
        undermining: "2cm at 3 o'clock",
        tunneling: "None"
      },

      // Tissue assessment
      tissueComposition: {
        granulation: 60,
        necrotic: 25,
        epithelial: 15,
        slough: 0
      },

      // Clinical findings
      findings: {
        drainage: "Moderate, purulent",
        odor: "Foul",
        pain: 7,
        temperature: "Warm to touch",
        edema: "Moderate",
        erythema: "Present, 2cm margin"
      },

      // AI Analysis
      aiAnalysis: {
        infectionRisk: 85,
        healingPrediction: "Delayed - 4-6 weeks",
        recommendations: [
          "Immediate antibiotic therapy",
          "Daily dressing changes",
          "Offloading protocol",
          "Vascular assessment"
        ],
        tissueViability: "Compromised",
        biofilmRisk: "High"
      },

      // Images
      images: [
        { id: 1, type: "overview", timestamp: "2024-02-20T14:30:00Z", aiAnnotated: true },
        { id: 2, type: "measurement", timestamp: "2024-02-20T14:32:00Z", aiAnnotated: true },
        { id: 3, type: "close-up", timestamp: "2024-02-20T14:35:00Z", aiAnnotated: false }
      ],

      // Previous assessments for comparison
      previousAssessment: {
        date: "2024-02-15",
        area: 5.2,
        healingProgress: -13 // negative indicates deterioration
      },

      alerts: ["Signs of infection", "Wound deterioration", "High biofilm risk"],
      completionStatus: 95,
      signatureRequired: true,
      lastModified: "2024-02-20T14:45:00Z"
    },
    {
      id: 'WA002',
      patientName: "John Smith",
      patientId: "PT002",
      date: "2024-02-20",
      time: "10:15",
      woundType: "Pressure Ulcer",
      location: "Sacral region",
      stage: "Stage 2",
      status: "Assessment Complete",
      priority: "normal",
      assessor: "Nurse Jennifer",

      measurements: {
        length: 3.2,
        width: 2.1,
        depth: 0.3,
        area: 6.7,
        volume: 2.01,
        undermining: "None",
        tunneling: "None"
      },

      tissueComposition: {
        granulation: 80,
        necrotic: 5,
        epithelial: 15,
        slough: 0
      },

      findings: {
        drainage: "Minimal, serous",
        odor: "None",
        pain: 3,
        temperature: "Normal",
        edema: "Mild",
        erythema: "Minimal"
      },

      aiAnalysis: {
        infectionRisk: 25,
        healingPrediction: "Good - 2-3 weeks",
        recommendations: [
          "Continue current dressing",
          "Pressure relief protocol",
          "Nutritional support"
        ],
        tissueViability: "Good",
        biofilmRisk: "Low"
      },

      images: [
        { id: 1, type: "overview", timestamp: "2024-02-20T10:15:00Z", aiAnnotated: true },
        { id: 2, type: "measurement", timestamp: "2024-02-20T10:17:00Z", aiAnnotated: true }
      ],

      previousAssessment: {
        date: "2024-02-17",
        area: 7.1,
        healingProgress: 6 // positive indicates improvement
      },

      alerts: [],
      completionStatus: 100,
      signatureRequired: false,
      lastModified: "2024-02-20T10:30:00Z"
    },
    {
      id: 'WA003',
      patientName: "Maria Garcia",
      patientId: "PT003",
      date: "2024-02-19",
      time: "16:00",
      woundType: "Surgical Incision",
      location: "Abdominal, midline",
      stage: "Healing",
      status: "Ready for Discharge",
      priority: "low",
      assessor: "Dr. Johnson",

      measurements: {
        length: 8.0,
        width: 0.5,
        depth: 0.1,
        area: 4.0,
        volume: 0.4,
        undermining: "None",
        tunneling: "None"
      },

      tissueComposition: {
        granulation: 20,
        necrotic: 0,
        epithelial: 80,
        slough: 0
      },

      findings: {
        drainage: "None",
        odor: "None",
        pain: 1,
        temperature: "Normal",
        edema: "None",
        erythema: "None"
      },

      aiAnalysis: {
        infectionRisk: 5,
        healingPrediction: "Excellent - 1 week",
        recommendations: [
          "Continue dry dressing",
          "Patient education for home care",
          "Follow-up in 1 week"
        ],
        tissueViability: "Excellent",
        biofilmRisk: "Minimal"
      },

      images: [
        { id: 1, type: "overview", timestamp: "2024-02-19T16:00:00Z", aiAnnotated: false }
      ],

      previousAssessment: {
        date: "2024-02-17",
        area: 4.8,
        healingProgress: 17
      },

      alerts: [],
      completionStatus: 100,
      signatureRequired: false,
      lastModified: "2024-02-19T16:15:00Z"
    }
  ];

  // Filter options
  const filterOptions = [
    { id: 'all', name: 'All Assessments', count: assessments.length },
    { id: 'critical', name: 'Critical Review', count: assessments.filter(a => a.priority === 'critical').length },
    { id: 'pending', name: 'Pending Signature', count: assessments.filter(a => a.signatureRequired).length },
    { id: 'today', name: 'Today', count: assessments.filter(a => a.date === '2024-02-20').length }
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
    if (status.includes('Critical')) return 'bg-[#FF5656]/10 text-[#FF5656]';
    if (status.includes('Complete')) return 'bg-[#56E0A0]/10 text-[#56E0A0]';
    if (status.includes('Discharge')) return 'bg-[#6B7AFF]/10 text-[#6B7AFF]';
    return 'bg-[#FFE27A]/10 text-[#FFE27A]';
  };

  // Filter assessments
  const filteredAssessments = assessments.filter(assessment => {
    const matchesSearch = assessment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         assessment.woundType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         assessment.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = selectedFilter === 'all' ||
                         (selectedFilter === 'critical' && assessment.priority === 'critical') ||
                         (selectedFilter === 'pending' && assessment.signatureRequired) ||
                         (selectedFilter === 'today' && assessment.date === '2024-02-20');

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Enhanced Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1C243C]">Advanced Wound Assessment</h1>
          <p className="text-[#8F96AA] mt-1">
            {filteredAssessments.length} assessments • {filteredAssessments.filter(a => a.signatureRequired).length} pending signature
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8F96AA] w-4 h-4" />
            <input
              type="text"
              placeholder="Search assessments..."
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

          <div className="flex border border-[#DDE1EC] rounded-lg overflow-hidden">
            {['table', 'cards'].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-3 py-2 text-sm capitalize ${
                  viewMode === mode ? 'bg-[#6B7AFF] text-white' : 'bg-white text-[#8F96AA]'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>

          <Link
            href="/doctor/wound-tracker/assessment/new"
            className="flex items-center gap-2 px-4 py-2 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
          >
            <MdAdd className="w-4 h-4" />
            New Assessment
          </Link>
        </div>
      </div>

      {/* Critical Alerts Banner */}
      {filteredAssessments.some(a => a.priority === 'critical') && (
        <div className="bg-[#FF5656]/5 border border-[#FF5656]/20 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <RiAlarmWarningLine className="w-5 h-5 text-[#FF5656]" />
            <div>
              <h3 className="font-medium text-[#FF5656]">Critical Assessments Require Immediate Attention</h3>
              <p className="text-sm text-[#8F96AA]">
                {filteredAssessments.filter(a => a.priority === 'critical').length} assessments marked as critical
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Assessment Display */}
      {viewMode === 'table' ? (
        <div className="bg-white rounded-xl border border-[#DDE1EC] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F8F9FF]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">Assessment ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">Patient</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">Date/Time</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">Wound Details</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">AI Analysis</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDE1EC]">
                {filteredAssessments.map((assessment) => (
                  <tr key={assessment.id} className="hover:bg-[#F8F9FF] transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-[#1C243C]">{assessment.id}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(assessment.priority)}`}>
                          {assessment.priority}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-[#1C243C]">{assessment.patientName}</p>
                        <p className="text-sm text-[#8F96AA]">{assessment.patientId}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-[#1C243C]">{assessment.date}</p>
                        <p className="text-sm text-[#8F96AA]">{assessment.time}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-[#1C243C]">{assessment.woundType}</p>
                        <p className="text-sm text-[#8F96AA]">{assessment.location}</p>
                        <p className="text-sm text-[#8F96AA]">{assessment.stage}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-[#8F96AA]">Risk:</span>
                          <span className={`text-xs font-medium ${
                            assessment.aiAnalysis.infectionRisk >= 70 ? 'text-[#FF5656]' :
                            assessment.aiAnalysis.infectionRisk >= 40 ? 'text-[#FFE27A]' : 'text-[#56E0A0]'
                          }`}>
                            {assessment.aiAnalysis.infectionRisk}%
                          </span>
                        </div>
                        <p className="text-xs text-[#8F96AA]">{assessment.aiAnalysis.healingPrediction}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(assessment.status)}`}>
                          {assessment.status}
                        </span>
                        {assessment.signatureRequired && (
                          <div className="flex items-center gap-1">
                            <MdEdit className="w-3 h-3 text-[#FFE27A]" />
                            <span className="text-xs text-[#FFE27A]">Signature Required</span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-2 text-[#6B7AFF] hover:bg-[#6B7AFF]/10 rounded transition-colors">
                          <MdVisibility className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-[#8F96AA] hover:bg-[#8F96AA]/10 rounded transition-colors">
                          <MdEdit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-[#56E0A0] hover:bg-[#56E0A0]/10 rounded transition-colors">
                          <MdDownload className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Card View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAssessments.map((assessment) => (
            <div key={assessment.id} className="bg-white rounded-xl border border-[#DDE1EC] overflow-hidden hover:border-[#6B7AFF]/20 transition-all">
              {/* Card Header */}
              <div className="p-4 border-b border-[#DDE1EC] bg-[#F8F9FF]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-[#1C243C]">{assessment.id}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(assessment.priority)}`}>
                    {assessment.priority}
                  </span>
                </div>
                <h3 className="font-semibold text-[#1C243C]">{assessment.patientName}</h3>
                <p className="text-sm text-[#8F96AA]">{assessment.patientId} • {assessment.date} {assessment.time}</p>
              </div>

              {/* Card Content */}
              <div className="p-4 space-y-4">
                {/* Wound Information */}
                <div>
                  <h4 className="font-medium text-[#1C243C] mb-2">{assessment.woundType}</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-[#8F96AA]">Location:</span>
                      <p className="text-[#1C243C]">{assessment.location}</p>
                    </div>
                    <div>
                      <span className="text-[#8F96AA]">Stage:</span>
                      <p className="text-[#1C243C]">{assessment.stage}</p>
                    </div>
                  </div>
                </div>

                {/* Measurements */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-2 bg-[#F8F9FF] rounded">
                    <p className="text-xs text-[#8F96AA]">Area</p>
                    <p className="text-sm font-medium text-[#1C243C]">{assessment.measurements.area} cm²</p>
                  </div>
                  <div className="text-center p-2 bg-[#F8F9FF] rounded">
                    <p className="text-xs text-[#8F96AA]">Depth</p>
                    <p className="text-sm font-medium text-[#1C243C]">{assessment.measurements.depth} cm</p>
                  </div>
                </div>

                {/* AI Analysis */}
                <div className="p-3 bg-[#6B7AFF]/5 border border-[#6B7AFF]/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <RiAiGenerate className="w-4 h-4 text-[#6B7AFF]" />
                    <span className="text-sm font-medium text-[#6B7AFF]">AI Analysis</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#8F96AA]">Infection Risk:</span>
                      <span className={`font-medium ${
                        assessment.aiAnalysis.infectionRisk >= 70 ? 'text-[#FF5656]' :
                        assessment.aiAnalysis.infectionRisk >= 40 ? 'text-[#FFE27A]' : 'text-[#56E0A0]'
                      }`}>
                        {assessment.aiAnalysis.infectionRisk}%
                      </span>
                    </div>
                    <p className="text-xs text-[#1C243C]">{assessment.aiAnalysis.healingPrediction}</p>
                  </div>
                </div>

                {/* Alerts */}
                {assessment.alerts.length > 0 && (
                  <div className="p-2 bg-[#FF5656]/5 border border-[#FF5656]/20 rounded">
                    <div className="flex items-center gap-1 mb-1">
                      <RiAlarmWarningLine className="w-3 h-3 text-[#FF5656]" />
                      <span className="text-xs font-medium text-[#FF5656]">Alerts</span>
                    </div>
                    {assessment.alerts.slice(0, 2).map((alert, index) => (
                      <p key={index} className="text-xs text-[#FF5656]">• {alert}</p>
                    ))}
                  </div>
                )}

                {/* Status */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(assessment.status)}`}>
                    {assessment.status}
                  </span>
                  {assessment.signatureRequired && (
                    <div className="flex items-center gap-1">
                      <MdEdit className="w-3 h-3 text-[#FFE27A]" />
                      <span className="text-xs text-[#FFE27A]">Sign Required</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-4 border-t border-[#DDE1EC] bg-[#F8F9FF]">
                <div className="flex gap-2">
                  <button className="flex-1 py-2 px-3 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors text-sm">
                    View Details
                  </button>
                  <button className="py-2 px-3 border border-[#DDE1EC] text-[#8F96AA] rounded-lg hover:bg-white transition-colors">
                    <MdCompare className="w-4 h-4" />
                  </button>
                  <button className="py-2 px-3 border border-[#DDE1EC] text-[#8F96AA] rounded-lg hover:bg-white transition-colors">
                    <MdDownload className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredAssessments.length === 0 && (
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-12 text-center">
          <RiStethoscopeLine className="w-16 h-16 text-[#DDE1EC] mx-auto mb-4" />
          <h3 className="text-lg font-medium text-[#1C243C] mb-2">No assessments found</h3>
          <p className="text-[#8F96AA] mb-6">
            {searchTerm || selectedFilter !== 'all'
              ? "Try adjusting your search terms or filters"
              : "Start by creating your first wound assessment"
            }
          </p>
          <Link
            href="/doctor/wound-tracker/assessment/new"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
          >
            <MdAdd className="w-4 h-4" />
            Create Assessment
          </Link>
        </div>
      )}
    </div>
  );
}
