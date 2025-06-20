'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  MdSearch, MdFilterList, MdMoreVert, MdVisibility, MdEdit,
  MdTrendingUp, MdTrendingDown, MdWarning, MdCheckCircle,
  MdShield, MdAnalytics, MdMessage
} from 'react-icons/md';
import { 
  RiUserHeartLine, RiStethoscopeLine, RiFirstAidKitLine, RiTimeLine,
  RiCalendarLine, RiMapPinLine, RiTeamLine, RiAlarmWarningLine
} from 'react-icons/ri';

export default function PatientManagement() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('cards');

  // Mock patient data
  const patients = [
    {
      id: 'PAT001',
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1 (555) 234-5678',
      age: 65,
      gender: 'Male',
      location: 'Los Angeles, CA',
      joinDate: '2024-02-01',
      lastLogin: '2024-02-20T10:15:00Z',
      
      // Clinical status
      clinicalStatus: {
        primaryCondition: 'Diabetic Foot Ulcer',
        woundStage: 'Stage 3',
        healingProgress: 45,
        riskLevel: 'high',
        lastAssessment: '2024-02-20T14:30:00Z',
        nextAppointment: '2024-02-21T09:00:00Z'
      },
      
      // Care team
      careTeam: {
        primaryDoctor: 'Dr. Sarah Johnson',
        woundNurse: 'Jennifer Smith',
        specialists: ['Dr. Wilson (Endocrinologist)']
      },
      
      // Engagement metrics
      engagement: {
        appUsage: 85,
        appointmentCompliance: 78,
        medicationAdherence: 92,
        photoSubmissions: 15,
        lastActivity: '2024-02-20T16:00:00Z'
      },
      
      // Data consent
      dataConsent: {
        generalConsent: true,
        researchConsent: false,
        marketingConsent: false,
        dataSharing: true,
        consentDate: '2024-02-01T10:00:00Z'
      },
      
      alerts: ['High infection risk', 'Missed last appointment'],
      flags: ['diabetes', 'high-risk']
    },
    {
      id: 'PAT002',
      name: 'Maria Garcia',
      email: 'maria.garcia@email.com',
      phone: '+1 (555) 567-8901',
      age: 45,
      gender: 'Female',
      location: 'Miami, FL',
      joinDate: '2024-01-20',
      lastLogin: '2024-02-19T14:20:00Z',
      
      clinicalStatus: {
        primaryCondition: 'Surgical Incision',
        woundStage: 'Healing',
        healingProgress: 90,
        riskLevel: 'low',
        lastAssessment: '2024-02-19T16:00:00Z',
        nextAppointment: '2024-02-22T11:00:00Z'
      },
      
      careTeam: {
        primaryDoctor: 'Dr. Sarah Johnson',
        woundNurse: 'Lisa Wilson',
        specialists: []
      },
      
      engagement: {
        appUsage: 95,
        appointmentCompliance: 100,
        medicationAdherence: 98,
        photoSubmissions: 8,
        lastActivity: '2024-02-19T18:30:00Z'
      },
      
      dataConsent: {
        generalConsent: true,
        researchConsent: true,
        marketingConsent: true,
        dataSharing: true,
        consentDate: '2024-01-20T09:00:00Z'
      },
      
      alerts: [],
      flags: ['post-surgical']
    },
    {
      id: 'PAT003',
      name: 'Robert Johnson',
      email: 'robert.johnson@email.com',
      phone: '+1 (555) 678-9012',
      age: 72,
      gender: 'Male',
      location: 'Phoenix, AZ',
      joinDate: '2024-01-10',
      lastLogin: '2024-02-18T08:45:00Z',
      
      clinicalStatus: {
        primaryCondition: 'Pressure Ulcer',
        woundStage: 'Stage 2',
        healingProgress: 75,
        riskLevel: 'medium',
        lastAssessment: '2024-02-17T13:30:00Z',
        nextAppointment: '2024-02-21T15:00:00Z'
      },
      
      careTeam: {
        primaryDoctor: 'Dr. Michael Chen',
        woundNurse: 'Mary Johnson',
        specialists: ['Physical Therapist']
      },
      
      engagement: {
        appUsage: 60,
        appointmentCompliance: 85,
        medicationAdherence: 75,
        photoSubmissions: 12,
        lastActivity: '2024-02-18T10:00:00Z'
      },
      
      dataConsent: {
        generalConsent: true,
        researchConsent: false,
        marketingConsent: false,
        dataSharing: false,
        consentDate: '2024-01-10T14:00:00Z'
      },
      
      alerts: ['Low engagement', 'Overdue assessment'],
      flags: ['elderly', 'mobility-limited']
    }
  ];

  // Filter options
  const filterOptions = [
    { id: 'all', name: 'All Patients', count: patients.length },
    { id: 'high-risk', name: 'High Risk', count: patients.filter(p => p.clinicalStatus.riskLevel === 'high').length },
    { id: 'active-wounds', name: 'Active Wounds', count: patients.filter(p => p.clinicalStatus.healingProgress < 100).length },
    { id: 'low-engagement', name: 'Low Engagement', count: patients.filter(p => p.engagement.appUsage < 70).length },
    { id: 'alerts', name: 'Has Alerts', count: patients.filter(p => p.alerts.length > 0).length }
  ];

  // Helper functions
  const getRiskColor = (riskLevel) => {
    switch (riskLevel) {
      case 'high': return 'bg-[#FF5656]/10 text-[#FF5656]';
      case 'medium': return 'bg-[#FFE27A]/10 text-[#FFE27A]';
      case 'low': return 'bg-[#56E0A0]/10 text-[#56E0A0]';
      default: return 'bg-[#DDE1EC] text-[#8F96AA]';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-[#56E0A0]';
    if (progress >= 60) return 'bg-[#5698FF]';
    if (progress >= 40) return 'bg-[#FFE27A]';
    return 'bg-[#FF5656]';
  };

  const getEngagementColor = (engagement) => {
    if (engagement >= 80) return 'text-[#56E0A0]';
    if (engagement >= 60) return 'text-[#5698FF]';
    return 'text-[#FF5656]';
  };

  // Filter patients
  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.clinicalStatus.primaryCondition.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'all' ||
                         (selectedFilter === 'high-risk' && patient.clinicalStatus.riskLevel === 'high') ||
                         (selectedFilter === 'active-wounds' && patient.clinicalStatus.healingProgress < 100) ||
                         (selectedFilter === 'low-engagement' && patient.engagement.appUsage < 70) ||
                         (selectedFilter === 'alerts' && patient.alerts.length > 0);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1C243C]">Patient Management</h1>
          <p className="text-[#8F96AA] mt-1">
            {filteredPatients.length} patients • {patients.filter(p => p.alerts.length > 0).length} with alerts
          </p>
        </div>
        
        <div className="flex gap-3 flex-wrap">
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8F96AA] w-4 h-4" />
            <input
              type="text"
              placeholder="Search patients..."
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
            {['cards', 'table'].map((mode) => (
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
        </div>
      </div>

      {/* Patient Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-[#DDE1EC] p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#FF5656]/10 rounded-lg flex items-center justify-center">
              <RiAlarmWarningLine className="w-4 h-4 text-[#FF5656]" />
            </div>
            <div>
              <p className="text-sm text-[#8F96AA]">High Risk</p>
              <p className="text-lg font-bold text-[#1C243C]">
                {patients.filter(p => p.clinicalStatus.riskLevel === 'high').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#DDE1EC] p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#5698FF]/10 rounded-lg flex items-center justify-center">
              <RiFirstAidKitLine className="w-4 h-4 text-[#5698FF]" />
            </div>
            <div>
              <p className="text-sm text-[#8F96AA]">Active Wounds</p>
              <p className="text-lg font-bold text-[#1C243C]">
                {patients.filter(p => p.clinicalStatus.healingProgress < 100).length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#DDE1EC] p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#56E0A0]/10 rounded-lg flex items-center justify-center">
              <MdTrendingUp className="w-4 h-4 text-[#56E0A0]" />
            </div>
            <div>
              <p className="text-sm text-[#8F96AA]">High Engagement</p>
              <p className="text-lg font-bold text-[#1C243C]">
                {patients.filter(p => p.engagement.appUsage >= 80).length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#DDE1EC] p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#8B6DFF]/10 rounded-lg flex items-center justify-center">
              <MdShield className="w-4 h-4 text-[#8B6DFF]" />
            </div>
            <div>
              <p className="text-sm text-[#8F96AA]">Data Consent</p>
              <p className="text-lg font-bold text-[#1C243C]">
                {patients.filter(p => p.dataConsent.generalConsent).length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Patient Display */}
      {viewMode === 'cards' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPatients.map((patient) => (
            <div key={patient.id} className="bg-white rounded-xl border border-[#DDE1EC] overflow-hidden hover:border-[#6B7AFF]/20 transition-all">
              {/* Card Header */}
              <div className="p-6 border-b border-[#DDE1EC] bg-[#F8F9FF]">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#56E0A0]/10 rounded-lg flex items-center justify-center">
                      <RiUserHeartLine className="w-6 h-6 text-[#56E0A0]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1C243C]">{patient.name}</h3>
                      <p className="text-sm text-[#8F96AA]">{patient.age} years • {patient.gender}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(patient.clinicalStatus.riskLevel)}`}>
                    {patient.clinicalStatus.riskLevel} risk
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-[#8F96AA]">
                  <div className="flex items-center gap-2">
                    <RiMapPinLine className="w-4 h-4" />
                    <span>{patient.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RiFirstAidKitLine className="w-4 h-4" />
                    <span>{patient.clinicalStatus.primaryCondition}</span>
                  </div>
                </div>
              </div>

              {/* Clinical Status */}
              <div className="p-6">
                <h4 className="font-medium text-[#1C243C] mb-3">Clinical Status</h4>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-[#8F96AA]">Healing Progress</span>
                      <span className="text-sm font-medium text-[#1C243C]">{patient.clinicalStatus.healingProgress}%</span>
                    </div>
                    <div className="w-full bg-[#DDE1EC] rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getProgressColor(patient.clinicalStatus.healingProgress)}`}
                        style={{ width: `${patient.clinicalStatus.healingProgress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-2 bg-[#F8F9FF] rounded">
                      <p className="text-xs text-[#8F96AA]">App Usage</p>
                      <p className={`text-sm font-bold ${getEngagementColor(patient.engagement.appUsage)}`}>
                        {patient.engagement.appUsage}%
                      </p>
                    </div>
                    <div className="text-center p-2 bg-[#F8F9FF] rounded">
                      <p className="text-xs text-[#8F96AA]">Compliance</p>
                      <p className={`text-sm font-bold ${getEngagementColor(patient.engagement.appointmentCompliance)}`}>
                        {patient.engagement.appointmentCompliance}%
                      </p>
                    </div>
                  </div>
                </div>

                {/* Care Team */}
                <div className="mt-4">
                  <h5 className="text-sm font-medium text-[#1C243C] mb-2">Care Team</h5>
                  <div className="space-y-1 text-xs text-[#8F96AA]">
                    <p>Doctor: {patient.careTeam.primaryDoctor}</p>
                    <p>Nurse: {patient.careTeam.woundNurse}</p>
                  </div>
                </div>

                {/* Alerts */}
                {patient.alerts.length > 0 && (
                  <div className="mt-4 p-3 bg-[#FF5656]/5 border border-[#FF5656]/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <RiAlarmWarningLine className="w-4 h-4 text-[#FF5656]" />
                      <span className="text-sm font-medium text-[#FF5656]">Active Alerts</span>
                    </div>
                    {patient.alerts.slice(0, 2).map((alert, index) => (
                      <p key={index} className="text-xs text-[#FF5656]">• {alert}</p>
                    ))}
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="p-6 border-t border-[#DDE1EC] bg-[#F8F9FF]">
                <div className="flex gap-2">
                  <button className="flex-1 py-2 px-3 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors text-sm">
                    View Profile
                  </button>
                  <button className="py-2 px-3 border border-[#DDE1EC] text-[#8F96AA] rounded-lg hover:bg-white transition-colors">
                    <MdMessage className="w-4 h-4" />
                  </button>
                  <button className="py-2 px-3 border border-[#DDE1EC] text-[#8F96AA] rounded-lg hover:bg-white transition-colors">
                    <MdMoreVert className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Table View - Implementation would go here */
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
          <p className="text-center text-[#8F96AA]">Table view implementation</p>
        </div>
      )}

      {/* Empty State */}
      {filteredPatients.length === 0 && (
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-12 text-center">
          <RiUserHeartLine className="w-16 h-16 text-[#DDE1EC] mx-auto mb-4" />
          <h3 className="text-lg font-medium text-[#1C243C] mb-2">No patients found</h3>
          <p className="text-[#8F96AA]">
            {searchTerm || selectedFilter !== 'all' 
              ? "Try adjusting your search terms or filters" 
              : "No patients have been registered yet"
            }
          </p>
        </div>
      )}
    </div>
  );
}
