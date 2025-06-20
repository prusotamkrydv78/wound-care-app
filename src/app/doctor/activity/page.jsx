'use client';
import { useState } from 'react';
import Link from 'next/link';
import { RiHistoryLine, RiStethoscopeLine, RiUserHeartLine, RiTestTubeLine, RiMedicineBottleLine, RiCameraLine, RiFileTextLine, RiTeamLine } from 'react-icons/ri';
import { MdCalendarToday, MdEdit, MdLogin, MdSave, MdMessage, MdVideoCall, MdAnalytics, MdSecurity, MdFilterList, MdDateRange } from 'react-icons/md';

export default function ClinicalActivityLog() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('today');

  // Enhanced clinical activity data
  const activities = [
    {
      id: 1,
      icon: RiStethoscopeLine,
      action: 'Completed wound assessment',
      description: 'Comprehensive diabetic foot ulcer evaluation with AI analysis',
      patient: 'Sarah Connor',
      patientId: 'PT001',
      time: '15 minutes ago',
      timestamp: '2024-02-20T14:45:00Z',
      type: 'clinical-assessment',
      category: 'Patient Care',
      details: {
        woundType: 'Diabetic Foot Ulcer',
        size: '2.5 x 1.8 cm',
        stage: 'Stage 3',
        riskScore: 85,
        aiInsights: 'Infection risk detected'
      },
      outcome: 'Assessment completed, treatment plan updated',
      priority: 'high',
      location: 'Room 205',
      duration: '30 minutes'
    },
    {
      id: 2,
      icon: RiMedicineBottleLine,
      action: 'Prescribed antibiotic therapy',
      description: 'Vancomycin 1g IV q12h for MRSA infection',
      patient: 'John Smith',
      patientId: 'PT002',
      time: '1 hour ago',
      timestamp: '2024-02-20T14:00:00Z',
      type: 'medication',
      category: 'Treatment',
      details: {
        medication: 'Vancomycin',
        dosage: '1g IV q12h',
        duration: '7 days',
        indication: 'MRSA infection',
        allergies: 'None documented'
      },
      outcome: 'Prescription sent to pharmacy',
      priority: 'high',
      location: 'Virtual Consultation',
      duration: '15 minutes'
    },
    {
      id: 3,
      icon: RiCameraLine,
      action: 'Captured wound photos',
      description: 'High-resolution images for healing progress tracking',
      patient: 'Maria Garcia',
      patientId: 'PT003',
      time: '2 hours ago',
      timestamp: '2024-02-20T13:00:00Z',
      type: 'documentation',
      category: 'Documentation',
      details: {
        imageCount: 6,
        woundType: 'Surgical Incision',
        healingStage: 'Excellent progress',
        comparison: 'Significant improvement from last visit'
      },
      outcome: 'Images uploaded to patient record',
      priority: 'normal',
      location: 'Room 102',
      duration: '10 minutes'
    },
    {
      id: 4,
      icon: RiTestTubeLine,
      action: 'Reviewed lab results',
      description: 'Culture results showing MRSA sensitivity',
      patient: 'John Smith',
      patientId: 'PT002',
      time: '3 hours ago',
      timestamp: '2024-02-20T12:00:00Z',
      type: 'lab-review',
      category: 'Clinical Data',
      details: {
        testType: 'Wound Culture',
        result: 'MRSA positive',
        sensitivity: 'Vancomycin sensitive',
        recommendation: 'Adjust antibiotic therapy'
      },
      outcome: 'Treatment plan modified',
      priority: 'high',
      location: 'Office',
      duration: '20 minutes'
    },
    {
      id: 5,
      icon: MdMessage,
      action: 'Team consultation',
      description: 'Discussed complex case with infectious disease specialist',
      patient: 'Sarah Connor',
      patientId: 'PT001',
      time: '4 hours ago',
      timestamp: '2024-02-20T11:00:00Z',
      type: 'consultation',
      category: 'Collaboration',
      details: {
        consultantType: 'Infectious Disease Specialist',
        consultantName: 'Dr. Michael Wilson',
        topic: 'Antibiotic resistance management',
        recommendations: 'Consider combination therapy'
      },
      outcome: 'Treatment protocol updated',
      priority: 'high',
      location: 'Virtual Meeting',
      duration: '45 minutes'
    },
    {
      id: 6,
      icon: RiFileTextLine,
      action: 'Completed clinical documentation',
      description: 'Progress note with treatment plan updates',
      patient: 'Maria Garcia',
      patientId: 'PT003',
      time: '5 hours ago',
      timestamp: '2024-02-20T10:00:00Z',
      type: 'documentation',
      category: 'Documentation',
      details: {
        documentType: 'Progress Note',
        template: 'Post-Surgical Follow-up',
        sections: 4,
        signatureStatus: 'Digitally signed'
      },
      outcome: 'Note finalized and submitted',
      priority: 'normal',
      location: 'Office',
      duration: '25 minutes'
    },
    {
      id: 7,
      icon: MdCalendarToday,
      action: 'Scheduled follow-up appointments',
      description: 'Coordinated care for 3 patients',
      patient: 'Multiple patients',
      patientId: null,
      time: '6 hours ago',
      timestamp: '2024-02-20T09:00:00Z',
      type: 'scheduling',
      category: 'Administration',
      details: {
        appointmentCount: 3,
        timeframe: 'Next 2 weeks',
        specialRequirements: 'Wound photography equipment',
        careTeamNotified: true
      },
      outcome: 'All appointments confirmed',
      priority: 'normal',
      location: 'Office',
      duration: '15 minutes'
    },
    {
      id: 8,
      icon: MdAnalytics,
      action: 'Reviewed performance metrics',
      description: 'Monthly clinical outcomes analysis',
      patient: null,
      patientId: null,
      time: '1 day ago',
      timestamp: '2024-02-19T16:00:00Z',
      type: 'analytics',
      category: 'Quality Improvement',
      details: {
        metricsReviewed: ['Healing rates', 'Patient satisfaction', 'Complication rates'],
        performance: 'Above benchmark',
        improvements: 'Identified workflow optimizations'
      },
      outcome: 'Quality improvement plan updated',
      priority: 'normal',
      location: 'Office',
      duration: '60 minutes'
    },
    {
      id: 9,
      icon: MdLogin,
      action: 'System login',
      description: 'Secure authentication with 2FA',
      patient: null,
      patientId: null,
      time: '1 day ago',
      timestamp: '2024-02-19T08:00:00Z',
      type: 'system',
      category: 'Security',
      details: {
        loginMethod: 'Two-factor authentication',
        ipAddress: '192.168.1.100',
        deviceType: 'Desktop',
        location: 'Hospital Network'
      },
      outcome: 'Session established',
      priority: 'low',
      location: 'Workstation 1',
      duration: '2 minutes'
    }
  ];

  // Filter options
  const filterOptions = [
    { id: 'all', name: 'All Activities', count: activities.length },
    { id: 'clinical-assessment', name: 'Clinical Assessments', count: activities.filter(a => a.type === 'clinical-assessment').length },
    { id: 'medication', name: 'Medications', count: activities.filter(a => a.type === 'medication').length },
    { id: 'documentation', name: 'Documentation', count: activities.filter(a => a.type === 'documentation').length },
    { id: 'consultation', name: 'Consultations', count: activities.filter(a => a.type === 'consultation').length },
    { id: 'lab-review', name: 'Lab Reviews', count: activities.filter(a => a.type === 'lab-review').length }
  ];

  const timeframeOptions = [
    { id: 'today', name: 'Today' },
    { id: 'week', name: 'This Week' },
    { id: 'month', name: 'This Month' },
    { id: 'all', name: 'All Time' }
  ];

  // Helper functions
  const getTypeColor = (type) => {
    switch (type) {
      case 'clinical-assessment': return 'bg-[#6B7AFF]/10 text-[#6B7AFF]';
      case 'medication': return 'bg-[#8B6DFF]/10 text-[#8B6DFF]';
      case 'documentation': return 'bg-[#5698FF]/10 text-[#5698FF]';
      case 'consultation': return 'bg-[#56E0A0]/10 text-[#56E0A0]';
      case 'lab-review': return 'bg-[#FFE27A]/10 text-[#FFE27A]';
      case 'scheduling': return 'bg-[#FF8A65]/10 text-[#FF8A65]';
      case 'analytics': return 'bg-[#9C27B0]/10 text-[#9C27B0]';
      case 'system': return 'bg-[#DDE1EC] text-[#8F96AA]';
      default: return 'bg-[#DDE1EC] text-[#8F96AA]';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-l-[#FF5656]';
      case 'normal': return 'border-l-[#5698FF]';
      case 'low': return 'border-l-[#DDE1EC]';
      default: return 'border-l-[#DDE1EC]';
    }
  };

  // Filter activities
  const filteredActivities = activities.filter(activity => {
    const matchesFilter = selectedFilter === 'all' || activity.type === selectedFilter;

    // Simple timeframe filtering (in real app, would use proper date logic)
    const matchesTimeframe = selectedTimeframe === 'all' ||
                             (selectedTimeframe === 'today' && activity.time.includes('hour') || activity.time.includes('minute')) ||
                             (selectedTimeframe === 'week' && (activity.time.includes('hour') || activity.time.includes('minute') || activity.time.includes('day'))) ||
                             (selectedTimeframe === 'month');

    return matchesFilter && matchesTimeframe;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Enhanced Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#6B7AFF]/10 rounded-lg flex items-center justify-center">
            <RiHistoryLine className="w-6 h-6 text-[#6B7AFF]" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1C243C]">Clinical Activity Log</h1>
            <p className="text-[#8F96AA]">
              {filteredActivities.length} activities • Last updated {activities[0]?.time}
            </p>
          </div>
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

          <button className="flex items-center gap-2 px-4 py-2 border border-[#DDE1EC] rounded-lg hover:bg-[#F8F9FF] transition-colors">
            <MdDateRange className="w-4 h-4" />
            Export Log
          </button>
        </div>
      </div>

      {/* Activity Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-[#DDE1EC] p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#6B7AFF]/10 rounded-lg flex items-center justify-center">
              <RiStethoscopeLine className="w-4 h-4 text-[#6B7AFF]" />
            </div>
            <div>
              <p className="text-sm text-[#8F96AA]">Clinical Actions</p>
              <p className="text-lg font-bold text-[#1C243C]">
                {activities.filter(a => ['clinical-assessment', 'medication', 'lab-review'].includes(a.type)).length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#DDE1EC] p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#56E0A0]/10 rounded-lg flex items-center justify-center">
              <RiFileTextLine className="w-4 h-4 text-[#56E0A0]" />
            </div>
            <div>
              <p className="text-sm text-[#8F96AA]">Documentation</p>
              <p className="text-lg font-bold text-[#1C243C]">
                {activities.filter(a => a.type === 'documentation').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#DDE1EC] p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#FFE27A]/10 rounded-lg flex items-center justify-center">
              <MdMessage className="w-4 h-4 text-[#FFE27A]" />
            </div>
            <div>
              <p className="text-sm text-[#8F96AA]">Consultations</p>
              <p className="text-lg font-bold text-[#1C243C]">
                {activities.filter(a => a.type === 'consultation').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#DDE1EC] p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#8B6DFF]/10 rounded-lg flex items-center justify-center">
              <MdSecurity className="w-4 h-4 text-[#8B6DFF]" />
            </div>
            <div>
              <p className="text-sm text-[#8F96AA]">System Events</p>
              <p className="text-lg font-bold text-[#1C243C]">
                {activities.filter(a => a.type === 'system').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Activity Timeline */}
      <div className="bg-white rounded-xl border border-[#DDE1EC] overflow-hidden">
        {filteredActivities.length > 0 ? (
          <div className="divide-y divide-[#DDE1EC]">
            {filteredActivities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div
                  key={activity.id}
                  className={`p-6 hover:bg-[#F8F9FF] transition-colors border-l-4 ${getPriorityColor(activity.priority)}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${getTypeColor(activity.type)} flex-shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-[#1C243C] mb-1">{activity.action}</h3>
                          <p className="text-[#8F96AA] text-sm">{activity.description}</p>
                        </div>
                        <div className="text-right flex-shrink-0 ml-4">
                          <span className="text-sm text-[#8F96AA]">{activity.time}</span>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(activity.type)}`}>
                              {activity.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      {activity.patient && (
                        <div className="flex items-center gap-4 text-sm text-[#8F96AA] mb-3">
                          <span>Patient: {activity.patient}</span>
                          {activity.patientId && <span>• {activity.patientId}</span>}
                        </div>
                      )}

                      {activity.details && (
                        <div className="bg-[#F8F9FF] rounded-lg p-3 mb-3">
                          <h4 className="text-sm font-medium text-[#1C243C] mb-2">Details:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                            {Object.entries(activity.details).map(([key, value]) => (
                              <div key={key} className="flex justify-between">
                                <span className="text-[#8F96AA] capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                                <span className="text-[#1C243C] font-medium">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-[#8F96AA]">
                          <span>Location: {activity.location}</span>
                          <span>Duration: {activity.duration}</span>
                        </div>

                        <div className="text-sm">
                          <span className="text-[#56E0A0] font-medium">Outcome: </span>
                          <span className="text-[#1C243C]">{activity.outcome}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center">
            <RiHistoryLine className="w-16 h-16 text-[#DDE1EC] mx-auto mb-4" />
            <h3 className="text-lg font-medium text-[#1C243C] mb-2">No activities found</h3>
            <p className="text-[#8F96AA]">
              {selectedFilter !== 'all' || selectedTimeframe !== 'all'
                ? "Try adjusting your filters to see more activities"
                : "Your clinical activities will appear here"
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
