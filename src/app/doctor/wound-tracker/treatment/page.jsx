'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MdAdd, MdEdit, MdDelete, MdSearch, MdFilterList, MdSchedule, MdAssignment, MdMedication, MdWarning, MdCheckCircle } from 'react-icons/md';
import { RiStethoscopeLine, RiMedicineBottleLine, RiTimeLine, RiUserHeartLine, RiAlarmWarningLine, RiAwardLine, RiCalendarEventLine } from 'react-icons/ri';

export default function AdvancedTreatmentPlans() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('cards');

  // Enhanced treatment plans with comprehensive clinical data
  const treatments = [
    {
      id: 'TP001',
      patientName: "Sarah Connor",
      patientId: "PT001",
      woundType: "Diabetic Foot Ulcer",
      woundLocation: "Right foot, plantar surface",
      startDate: "2024-02-01",
      expectedDuration: "6-8 weeks",
      status: "Active - Critical",
      priority: "critical",
      progress: 45,
      nextReview: "2024-02-21",
      lastUpdated: "2024-02-20",

      // Treatment protocol details
      protocol: {
        name: "Diabetic Foot Ulcer Management Protocol",
        version: "2024.1",
        evidenceBased: true,
        guidelines: "IWGDF Guidelines 2023"
      },

      // Current interventions
      interventions: [
        {
          type: "medication",
          name: "Vancomycin 1g IV q12h",
          status: "active",
          startDate: "2024-02-20",
          duration: "7 days",
          indication: "MRSA infection"
        },
        {
          type: "dressing",
          name: "Silver alginate with foam overlay",
          status: "active",
          frequency: "Daily",
          lastChanged: "2024-02-20",
          nextChange: "2024-02-21"
        },
        {
          type: "offloading",
          name: "Total contact cast",
          status: "active",
          compliance: 85,
          effectiveness: "Good"
        },
        {
          type: "debridement",
          name: "Sharp debridement",
          status: "scheduled",
          scheduledDate: "2024-02-22",
          frequency: "Weekly"
        }
      ],

      // Clinical outcomes
      outcomes: {
        woundSize: {
          initial: 5.2,
          current: 4.1,
          reduction: 21,
          trend: "improving"
        },
        infectionStatus: "Active infection - improving",
        painLevel: {
          initial: 8,
          current: 6,
          trend: "improving"
        },
        functionalStatus: "Limited weight bearing"
      },

      // Care team
      careTeam: [
        { role: "Primary Physician", name: "Dr. Johnson", contact: "ext. 1234" },
        { role: "Wound Nurse", name: "Jennifer Smith", contact: "ext. 5678" },
        { role: "Endocrinologist", name: "Dr. Wilson", contact: "ext. 9012" },
        { role: "Podiatrist", name: "Dr. Brown", contact: "ext. 3456" }
      ],

      // Alerts and complications
      alerts: [
        "MRSA infection detected",
        "Blood glucose poorly controlled",
        "Patient compliance concerns"
      ],

      // Milestones and goals
      milestones: [
        { goal: "Infection control", target: "2024-02-25", status: "in-progress", completion: 60 },
        { goal: "50% wound closure", target: "2024-03-15", status: "pending", completion: 0 },
        { goal: "Complete healing", target: "2024-04-01", status: "pending", completion: 0 }
      ],

      adherence: 78,
      riskFactors: ["Diabetes", "Poor circulation", "Neuropathy", "Previous ulceration"],
      contraindications: ["Allergy to silver"],

      // Quality metrics
      qualityMetrics: {
        protocolAdherence: 85,
        outcomesPrediction: "Guarded",
        costEffectiveness: "Standard",
        patientSatisfaction: 4.2
      }
    },
    {
      id: 'TP002',
      patientName: "John Smith",
      patientId: "PT002",
      woundType: "Pressure Ulcer",
      woundLocation: "Sacral region",
      startDate: "2024-02-10",
      expectedDuration: "4-6 weeks",
      status: "Active - Stable",
      priority: "normal",
      progress: 75,
      nextReview: "2024-02-23",
      lastUpdated: "2024-02-20",

      protocol: {
        name: "Pressure Injury Management Protocol",
        version: "2024.1",
        evidenceBased: true,
        guidelines: "NPUAP/EPUAP Guidelines 2023"
      },

      interventions: [
        {
          type: "dressing",
          name: "Hydrocolloid dressing",
          status: "active",
          frequency: "Every 3 days",
          lastChanged: "2024-02-19",
          nextChange: "2024-02-22"
        },
        {
          type: "pressure-relief",
          name: "Alternating pressure mattress",
          status: "active",
          compliance: 95,
          effectiveness: "Excellent"
        },
        {
          type: "nutrition",
          name: "High protein diet + supplements",
          status: "active",
          compliance: 90,
          effectiveness: "Good"
        }
      ],

      outcomes: {
        woundSize: {
          initial: 7.1,
          current: 3.2,
          reduction: 55,
          trend: "improving"
        },
        infectionStatus: "No signs of infection",
        painLevel: {
          initial: 5,
          current: 2,
          trend: "improving"
        },
        functionalStatus: "Improved mobility"
      },

      careTeam: [
        { role: "Primary Physician", name: "Dr. Johnson", contact: "ext. 1234" },
        { role: "Wound Nurse", name: "Mary Johnson", contact: "ext. 5679" },
        { role: "Physical Therapist", name: "Mike Davis", contact: "ext. 7890" },
        { role: "Nutritionist", name: "Sarah Lee", contact: "ext. 2345" }
      ],

      alerts: [],

      milestones: [
        { goal: "Pressure relief achieved", target: "2024-02-15", status: "completed", completion: 100 },
        { goal: "75% wound closure", target: "2024-02-25", status: "in-progress", completion: 90 },
        { goal: "Complete healing", target: "2024-03-10", status: "on-track", completion: 0 }
      ],

      adherence: 92,
      riskFactors: ["Immobility", "Advanced age", "Malnutrition"],
      contraindications: [],

      qualityMetrics: {
        protocolAdherence: 95,
        outcomesPrediction: "Excellent",
        costEffectiveness: "High",
        patientSatisfaction: 4.8
      }
    },
    {
      id: 'TP003',
      patientName: "Maria Garcia",
      patientId: "PT003",
      woundType: "Surgical Incision",
      woundLocation: "Abdominal, midline",
      startDate: "2024-02-15",
      expectedDuration: "2-3 weeks",
      status: "Active - Excellent Progress",
      priority: "low",
      progress: 90,
      nextReview: "2024-02-22",
      lastUpdated: "2024-02-20",

      protocol: {
        name: "Post-Surgical Wound Care Protocol",
        version: "2024.1",
        evidenceBased: true,
        guidelines: "CDC Surgical Site Infection Guidelines"
      },

      interventions: [
        {
          type: "dressing",
          name: "Dry sterile dressing",
          status: "active",
          frequency: "Daily",
          lastChanged: "2024-02-20",
          nextChange: "2024-02-21"
        },
        {
          type: "monitoring",
          name: "Infection surveillance",
          status: "active",
          frequency: "Daily",
          findings: "No signs of infection"
        }
      ],

      outcomes: {
        woundSize: {
          initial: 8.0,
          current: 2.0,
          reduction: 75,
          trend: "excellent"
        },
        infectionStatus: "No infection",
        painLevel: {
          initial: 6,
          current: 1,
          trend: "excellent"
        },
        functionalStatus: "Full activity"
      },

      careTeam: [
        { role: "Surgeon", name: "Dr. Johnson", contact: "ext. 1234" },
        { role: "Wound Nurse", name: "Lisa Wilson", contact: "ext. 5680" }
      ],

      alerts: [],

      milestones: [
        { goal: "Primary healing", target: "2024-02-20", status: "completed", completion: 100 },
        { goal: "Suture removal", target: "2024-02-22", status: "scheduled", completion: 0 },
        { goal: "Complete healing", target: "2024-02-28", status: "on-track", completion: 0 }
      ],

      adherence: 98,
      riskFactors: ["Post-surgical"],
      contraindications: [],

      qualityMetrics: {
        protocolAdherence: 98,
        outcomesPrediction: "Excellent",
        costEffectiveness: "High",
        patientSatisfaction: 4.9
      }
    }
  ];

  // Filter options
  const filterOptions = [
    { id: 'all', name: 'All Plans', count: treatments.length },
    { id: 'critical', name: 'Critical', count: treatments.filter(t => t.priority === 'critical').length },
    { id: 'active', name: 'Active', count: treatments.filter(t => t.status.includes('Active')).length },
    { id: 'review-due', name: 'Review Due', count: treatments.filter(t => new Date(t.nextReview) <= new Date('2024-02-21')).length }
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
    if (status.includes('Excellent')) return 'bg-[#56E0A0]/10 text-[#56E0A0]';
    if (status.includes('Stable')) return 'bg-[#5698FF]/10 text-[#5698FF]';
    return 'bg-[#FFE27A]/10 text-[#FFE27A]';
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-[#56E0A0]';
    if (progress >= 60) return 'bg-[#5698FF]';
    if (progress >= 40) return 'bg-[#FFE27A]';
    return 'bg-[#FF5656]';
  };

  const getInterventionIcon = (type) => {
    switch (type) {
      case 'medication': return RiMedicineBottleLine;
      case 'dressing': return RiStethoscopeLine;
      case 'offloading': return RiUserHeartLine;
      case 'debridement': return RiStethoscopeLine;
      default: return RiStethoscopeLine;
    }
  };

  // Filter treatments
  const filteredTreatments = treatments.filter(treatment => {
    const matchesSearch = treatment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         treatment.woundType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         treatment.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = selectedFilter === 'all' ||
                         (selectedFilter === 'critical' && treatment.priority === 'critical') ||
                         (selectedFilter === 'active' && treatment.status.includes('Active')) ||
                         (selectedFilter === 'review-due' && new Date(treatment.nextReview) <= new Date('2024-02-21'));

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Enhanced Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1C243C]">Advanced Treatment Plans</h1>
          <p className="text-[#8F96AA] mt-1">
            {filteredTreatments.length} active plans • {filteredTreatments.filter(t => t.priority === 'critical').length} critical
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8F96AA] w-4 h-4" />
            <input
              type="text"
              placeholder="Search treatment plans..."
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
            href="/doctor/wound-tracker/treatment/new"
            className="flex items-center gap-2 px-4 py-2 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
          >
            <MdAdd className="w-4 h-4" />
            New Treatment Plan
          </Link>
        </div>
      </div>

      {/* Critical Plans Alert */}
      {filteredTreatments.some(t => t.priority === 'critical') && (
        <div className="bg-[#FF5656]/5 border border-[#FF5656]/20 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <RiAlarmWarningLine className="w-5 h-5 text-[#FF5656]" />
            <div>
              <h3 className="font-medium text-[#FF5656]">Critical Treatment Plans Require Attention</h3>
              <p className="text-sm text-[#8F96AA]">
                {filteredTreatments.filter(t => t.priority === 'critical').length} plans marked as critical priority
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Treatment Plans Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTreatments.map((treatment) => (
          <div key={treatment.id} className="bg-white rounded-xl border border-[#DDE1EC] overflow-hidden hover:border-[#6B7AFF]/20 transition-all">
            {/* Plan Header */}
            <div className="p-6 border-b border-[#DDE1EC] bg-[#F8F9FF]">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-[#1C243C]">{treatment.patientName}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(treatment.priority)}`}>
                      {treatment.priority}
                    </span>
                  </div>
                  <p className="text-sm text-[#8F96AA]">{treatment.patientId} • {treatment.woundType}</p>
                  <p className="text-sm text-[#8F96AA]">{treatment.woundLocation}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-white rounded-lg transition-colors">
                    <MdEdit className="w-4 h-4 text-[#6B7AFF]" />
                  </button>
                  <button className="p-2 hover:bg-white rounded-lg transition-colors">
                    <MdDelete className="w-4 h-4 text-[#FF5656]" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(treatment.status)}`}>
                  {treatment.status}
                </span>
                <span className="text-sm text-[#8F96AA]">Plan ID: {treatment.id}</span>
              </div>
            </div>

            {/* Plan Content */}
            <div className="p-6 space-y-6">
              {/* Progress Overview */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium text-[#1C243C]">Treatment Progress</h4>
                  <span className="text-lg font-bold text-[#1C243C]">{treatment.progress}%</span>
                </div>
                <div className="w-full bg-[#DDE1EC] rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${getProgressColor(treatment.progress)}`}
                    style={{ width: `${treatment.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-[#8F96AA] mt-2">
                  <span>Started: {treatment.startDate}</span>
                  <span>Expected: {treatment.expectedDuration}</span>
                </div>
              </div>

              {/* Current Interventions */}
              <div>
                <h4 className="font-medium text-[#1C243C] mb-3">Active Interventions</h4>
                <div className="space-y-2">
                  {treatment.interventions.slice(0, 3).map((intervention, index) => {
                    const InterventionIcon = getInterventionIcon(intervention.type);
                    return (
                      <div key={index} className="flex items-center gap-3 p-2 bg-[#F8F9FF] rounded-lg">
                        <div className="w-8 h-8 bg-[#6B7AFF]/10 rounded-lg flex items-center justify-center">
                          <InterventionIcon className="w-4 h-4 text-[#6B7AFF]" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-[#1C243C]">{intervention.name}</p>
                          <p className="text-xs text-[#8F96AA]">{intervention.frequency || intervention.duration}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          intervention.status === 'active' ? 'bg-[#56E0A0]/10 text-[#56E0A0]' : 'bg-[#FFE27A]/10 text-[#FFE27A]'
                        }`}>
                          {intervention.status}
                        </span>
                      </div>
                    );
                  })}
                  {treatment.interventions.length > 3 && (
                    <p className="text-xs text-[#8F96AA] text-center">+{treatment.interventions.length - 3} more interventions</p>
                  )}
                </div>
              </div>

              {/* Clinical Outcomes */}
              <div>
                <h4 className="font-medium text-[#1C243C] mb-3">Clinical Outcomes</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-[#F8F9FF] rounded-lg">
                    <p className="text-xs text-[#8F96AA]">Wound Size</p>
                    <p className="text-sm font-medium text-[#1C243C]">
                      {treatment.outcomes.woundSize.current} cm²
                      <span className={`ml-1 text-xs ${
                        treatment.outcomes.woundSize.reduction > 0 ? 'text-[#56E0A0]' : 'text-[#FF5656]'
                      }`}>
                        ({treatment.outcomes.woundSize.reduction > 0 ? '-' : '+'}{treatment.outcomes.woundSize.reduction}%)
                      </span>
                    </p>
                  </div>
                  <div className="p-3 bg-[#F8F9FF] rounded-lg">
                    <p className="text-xs text-[#8F96AA]">Pain Level</p>
                    <p className="text-sm font-medium text-[#1C243C]">
                      {treatment.outcomes.painLevel.current}/10
                      <span className={`ml-1 text-xs ${
                        treatment.outcomes.painLevel.current < treatment.outcomes.painLevel.initial ? 'text-[#56E0A0]' : 'text-[#FF5656]'
                      }`}>
                        ({treatment.outcomes.painLevel.trend})
                      </span>
                    </p>
                  </div>
                </div>
                <div className="mt-2 p-2 bg-[#F8F9FF] rounded">
                  <p className="text-xs text-[#8F96AA]">Infection Status:</p>
                  <p className="text-sm text-[#1C243C]">{treatment.outcomes.infectionStatus}</p>
                </div>
              </div>

              {/* Alerts */}
              {treatment.alerts.length > 0 && (
                <div className="p-3 bg-[#FF5656]/5 border border-[#FF5656]/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <RiAlarmWarningLine className="w-4 h-4 text-[#FF5656]" />
                    <span className="text-sm font-medium text-[#FF5656]">Active Alerts</span>
                  </div>
                  {treatment.alerts.slice(0, 2).map((alert, index) => (
                    <p key={index} className="text-xs text-[#FF5656]">• {alert}</p>
                  ))}
                </div>
              )}

              {/* Milestones */}
              <div>
                <h4 className="font-medium text-[#1C243C] mb-3">Treatment Milestones</h4>
                <div className="space-y-2">
                  {treatment.milestones.slice(0, 2).map((milestone, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-[#F8F9FF] rounded">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${
                          milestone.status === 'completed' ? 'bg-[#56E0A0]' :
                          milestone.status === 'in-progress' ? 'bg-[#5698FF]' :
                          milestone.status === 'on-track' ? 'bg-[#FFE27A]' : 'bg-[#DDE1EC]'
                        }`}></div>
                        <span className="text-sm text-[#1C243C]">{milestone.goal}</span>
                      </div>
                      <span className="text-xs text-[#8F96AA]">{milestone.target}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Care Team */}
              <div>
                <h4 className="font-medium text-[#1C243C] mb-3">Care Team</h4>
                <div className="flex flex-wrap gap-2">
                  {treatment.careTeam.slice(0, 3).map((member, index) => (
                    <div key={index} className="flex items-center gap-2 px-3 py-1 bg-[#6B7AFF]/10 text-[#6B7AFF] rounded-full text-xs">
                      <RiUserHeartLine className="w-3 h-3" />
                      <span>{member.name}</span>
                    </div>
                  ))}
                  {treatment.careTeam.length > 3 && (
                    <span className="text-xs text-[#8F96AA] px-2 py-1">+{treatment.careTeam.length - 3} more</span>
                  )}
                </div>
              </div>

              {/* Quality Metrics */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#DDE1EC]">
                <div className="text-center">
                  <p className="text-xs text-[#8F96AA]">Adherence</p>
                  <p className="text-lg font-bold text-[#1C243C]">{treatment.adherence}%</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-[#8F96AA]">Protocol Adherence</p>
                  <p className="text-lg font-bold text-[#1C243C]">{treatment.qualityMetrics.protocolAdherence}%</p>
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="p-4 border-t border-[#DDE1EC] bg-[#F8F9FF]">
              <div className="flex items-center justify-between">
                <div className="text-sm text-[#8F96AA]">
                  Next Review: <span className="font-medium text-[#1C243C]">{treatment.nextReview}</span>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-xs bg-[#6B7AFF] text-white rounded hover:bg-[#506EFF] transition-colors">
                    View Details
                  </button>
                  <button className="px-3 py-1 text-xs border border-[#DDE1EC] text-[#8F96AA] rounded hover:bg-white transition-colors">
                    Update Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredTreatments.length === 0 && (
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-12 text-center">
          <RiStethoscopeLine className="w-16 h-16 text-[#DDE1EC] mx-auto mb-4" />
          <h3 className="text-lg font-medium text-[#1C243C] mb-2">No treatment plans found</h3>
          <p className="text-[#8F96AA] mb-6">
            {searchTerm || selectedFilter !== 'all'
              ? "Try adjusting your search terms or filters"
              : "Start by creating your first treatment plan"
            }
          </p>
          <Link
            href="/doctor/wound-tracker/treatment/new"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
          >
            <MdAdd className="w-4 h-4" />
            Create Treatment Plan
          </Link>
        </div>
      )}
    </div>
  );
}
