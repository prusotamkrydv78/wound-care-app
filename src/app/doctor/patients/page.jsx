'use client';
import { useState } from 'react';
import { MdSearch, MdFilterList, MdAdd, MdMoreVert, MdWarning, MdTrendingUp, MdTrendingDown, MdAssignment, MdCalendarToday, MdMessage, MdAnalytics } from 'react-icons/md';
import { RiFirstAidKitLine, RiAlarmWarningLine, RiUserHeartLine, RiStethoscopeLine, RiTimeLine, RiMedicineBottleLine } from 'react-icons/ri';
import Link from 'next/link';

export default function AdvancedPatientManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [viewMode, setViewMode] = useState('table'); // table, cards
  const [selectedPatients, setSelectedPatients] = useState(new Set());
  // Enhanced patient data with clinical intelligence
  const patients = [
    {
      id: "PT001",
      name: "Sarah Connor",
      age: 45,
      gender: "Female",
      condition: "Diabetic Foot Ulcer",
      woundType: "Neuropathic Ulcer",
      status: "Critical",
      priority: "urgent",
      riskScore: 85,
      lastVisit: "2024-02-15",
      nextAppointment: "2024-02-16",
      healingProgress: 45,
      daysInTreatment: 28,
      complications: ["Infection risk", "Poor circulation"],
      medications: ["Metformin", "Insulin", "Antibiotics"],
      alerts: ["Signs of infection detected", "Missed last appointment"],
      aiInsights: "High risk patient requiring immediate intervention",
      carePathway: "Diabetic Foot Protocol",
      assignedNurse: "Jennifer Smith",
      insurance: "Medicare",
      contactInfo: {
        phone: "+1 (555) 123-4567",
        email: "sarah.connor@email.com",
        emergencyContact: "John Connor - Son"
      }
    },
    {
      id: "PT002",
      name: "John Smith",
      age: 62,
      gender: "Male",
      condition: "Pressure Ulcer",
      woundType: "Stage 3 Pressure Injury",
      status: "Stable",
      priority: "medium",
      riskScore: 58,
      lastVisit: "2024-02-14",
      nextAppointment: "2024-02-22",
      healingProgress: 72,
      daysInTreatment: 18,
      complications: ["Delayed healing"],
      medications: ["Pain management", "Wound care supplies"],
      alerts: [],
      aiInsights: "Steady progress, continue current protocol",
      carePathway: "Pressure Injury Management",
      assignedNurse: "Mary Williams",
      insurance: "Blue Cross",
      contactInfo: {
        phone: "+1 (555) 987-6543",
        email: "john.smith@email.com",
        emergencyContact: "Jane Smith - Wife"
      }
    },
    {
      id: "PT003",
      name: "Maria Garcia",
      age: 35,
      gender: "Female",
      condition: "Post-Surgical Wound",
      woundType: "Surgical Incision",
      status: "Healing",
      priority: "low",
      riskScore: 25,
      lastVisit: "2024-02-10",
      nextAppointment: "2024-02-24",
      healingProgress: 88,
      daysInTreatment: 12,
      complications: [],
      medications: ["Antibiotics", "Pain relief"],
      alerts: [],
      aiInsights: "Excellent healing progress, consider discharge planning",
      carePathway: "Post-Surgical Recovery",
      assignedNurse: "Lisa Johnson",
      insurance: "Aetna",
      contactInfo: {
        phone: "+1 (555) 456-7890",
        email: "maria.garcia@email.com",
        emergencyContact: "Carlos Garcia - Husband"
      }
    }
  ];

  // Filter options for advanced search
  const filterOptions = [
    { id: 'all', name: 'All Patients', count: patients.length },
    { id: 'critical', name: 'Critical', count: patients.filter(p => p.priority === 'urgent').length },
    { id: 'healing', name: 'Healing Well', count: patients.filter(p => p.status === 'Healing').length },
    { id: 'complications', name: 'With Complications', count: patients.filter(p => p.complications.length > 0).length },
    { id: 'diabetic', name: 'Diabetic Patients', count: patients.filter(p => p.condition.includes('Diabetic')).length }
  ];

  // Helper functions for clinical data
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return 'bg-[#FF5656]/10 text-[#FF5656] border-[#FF5656]/20';
      case 'high': return 'bg-[#FFE27A]/10 text-[#FFE27A] border-[#FFE27A]/20';
      case 'medium': return 'bg-[#5698FF]/10 text-[#5698FF] border-[#5698FF]/20';
      case 'low': return 'bg-[#56E0A0]/10 text-[#56E0A0] border-[#56E0A0]/20';
      default: return 'bg-[#DDE1EC] text-[#8F96AA] border-[#DDE1EC]';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Critical': return 'bg-[#FF5656]/10 text-[#FF5656]';
      case 'Stable': return 'bg-[#5698FF]/10 text-[#5698FF]';
      case 'Healing': return 'bg-[#56E0A0]/10 text-[#56E0A0]';
      case 'Active': return 'bg-[#8B6DFF]/10 text-[#8B6DFF]';
      default: return 'bg-[#DDE1EC] text-[#8F96AA]';
    }
  };

  const getRiskScoreColor = (score) => {
    if (score >= 80) return 'text-[#FF5656]';
    if (score >= 60) return 'text-[#FFE27A]';
    if (score >= 40) return 'text-[#5698FF]';
    return 'text-[#56E0A0]';
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-[#56E0A0]';
    if (progress >= 60) return 'bg-[#5698FF]';
    if (progress >= 40) return 'bg-[#FFE27A]';
    return 'bg-[#FF5656]';
  };

  // Filter patients based on search and filter criteria
  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = selectedFilter === 'all' ||
                         (selectedFilter === 'critical' && patient.priority === 'urgent') ||
                         (selectedFilter === 'healing' && patient.status === 'Healing') ||
                         (selectedFilter === 'complications' && patient.complications.length > 0) ||
                         (selectedFilter === 'diabetic' && patient.condition.includes('Diabetic'));

    return matchesSearch && matchesFilter;
  });

  const togglePatientSelection = (patientId) => {
    const newSelection = new Set(selectedPatients);
    if (newSelection.has(patientId)) {
      newSelection.delete(patientId);
    } else {
      newSelection.add(patientId);
    }
    setSelectedPatients(newSelection);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Enhanced Header with Clinical Intelligence */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1C243C]">Advanced Patient Management</h1>
          <p className="text-[#8F96AA] mt-1">
            {filteredPatients.length} patients • {filteredPatients.filter(p => p.priority === 'urgent').length} critical alerts
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8F96AA] w-4 h-4" />
            <input
              type="text"
              placeholder="Search patients, conditions, IDs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-[#DDE1EC] rounded-lg w-80 focus:border-[#6B7AFF] focus:outline-none"
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
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-2 text-sm ${viewMode === 'table' ? 'bg-[#6B7AFF] text-white' : 'bg-white text-[#8F96AA]'}`}
            >
              Table
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-2 text-sm ${viewMode === 'cards' ? 'bg-[#6B7AFF] text-white' : 'bg-white text-[#8F96AA]'}`}
            >
              Cards
            </button>
          </div>

          <Link
            href="/doctor/patients/new"
            className="flex items-center gap-2 px-4 py-2 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
          >
            <MdAdd className="w-4 h-4" />
            <span>Add Patient</span>
          </Link>
        </div>
      </div>

      {/* Bulk Actions Bar */}
      {selectedPatients.size > 0 && (
        <div className="bg-[#6B7AFF]/5 border border-[#6B7AFF]/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="text-[#6B7AFF] font-medium">
              {selectedPatients.size} patient{selectedPatients.size > 1 ? 's' : ''} selected
            </span>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-[#56E0A0] text-white rounded hover:bg-[#4BD396] transition-colors">
                Bulk Message
              </button>
              <button className="px-3 py-1 bg-[#5698FF] text-white rounded hover:bg-[#4A87FF] transition-colors">
                Schedule Appointments
              </button>
              <button className="px-3 py-1 bg-[#8B6DFF] text-white rounded hover:bg-[#7A5BFF] transition-colors">
                Export Data
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Patient Display */}
      {viewMode === 'table' ? (
        <div className="bg-white rounded-xl border border-[#DDE1EC] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F8F9FF] border-b border-[#DDE1EC]">
                <tr>
                  <th className="text-left p-4 font-medium text-[#1C243C]">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedPatients(new Set(filteredPatients.map(p => p.id)));
                        } else {
                          setSelectedPatients(new Set());
                        }
                      }}
                      className="w-4 h-4 rounded border-2 border-[#DDE1EC] text-[#6B7AFF] focus:ring-[#6B7AFF]"
                    />
                  </th>
                  <th className="text-left p-4 font-medium text-[#1C243C]">Patient</th>
                  <th className="text-left p-4 font-medium text-[#1C243C]">Condition & Risk</th>
                  <th className="text-left p-4 font-medium text-[#1C243C]">Progress</th>
                  <th className="text-left p-4 font-medium text-[#1C243C]">Status & Alerts</th>
                  <th className="text-left p-4 font-medium text-[#1C243C]">Care Team</th>
                  <th className="text-left p-4 font-medium text-[#1C243C]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map((patient) => (
                  <tr key={patient.id} className="border-b border-[#DDE1EC] hover:bg-[#F8F9FF] transition-colors">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selectedPatients.has(patient.id)}
                        onChange={() => togglePatientSelection(patient.id)}
                        className="w-4 h-4 rounded border-2 border-[#DDE1EC] text-[#6B7AFF] focus:ring-[#6B7AFF]"
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          patient.priority === 'urgent' ? 'bg-[#FF5656]/10' : 'bg-[#6B7AFF]/10'
                        }`}>
                          <RiUserHeartLine className={`w-5 h-5 ${
                            patient.priority === 'urgent' ? 'text-[#FF5656]' : 'text-[#6B7AFF]'
                          }`} />
                        </div>
                        <div>
                          <div className="font-medium text-[#1C243C]">{patient.name}</div>
                          <div className="text-sm text-[#8F96AA]">{patient.id} • {patient.age}y {patient.gender}</div>
                          <div className="text-xs text-[#8F96AA]">{patient.insurance}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <div className="font-medium text-[#1C243C] mb-1">{patient.condition}</div>
                        <div className="text-sm text-[#8F96AA] mb-2">{patient.woundType}</div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-[#8F96AA]">Risk Score:</span>
                          <span className={`text-xs font-medium ${getRiskScoreColor(patient.riskScore)}`}>
                            {patient.riskScore}%
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex-1 bg-[#DDE1EC] rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${getProgressColor(patient.healingProgress)}`}
                              style={{ width: `${patient.healingProgress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-[#1C243C]">{patient.healingProgress}%</span>
                        </div>
                        <div className="text-xs text-[#8F96AA]">{patient.daysInTreatment} days in treatment</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="space-y-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(patient.status)}`}>
                          {patient.status}
                        </span>
                        {patient.alerts.length > 0 && (
                          <div className="flex items-center gap-1">
                            <RiAlarmWarningLine className="w-4 h-4 text-[#FF5656]" />
                            <span className="text-xs text-[#FF5656]">{patient.alerts.length} alert{patient.alerts.length > 1 ? 's' : ''}</span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm">
                        <div className="text-[#1C243C] font-medium">Dr. Johnson</div>
                        <div className="text-[#8F96AA]">{patient.assignedNurse}</div>
                        <div className="text-xs text-[#6B7AFF]">{patient.carePathway}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/doctor/patients/${patient.id}`}
                          className="p-2 hover:bg-[#6B7AFF]/10 rounded-lg transition-colors"
                        >
                          <RiStethoscopeLine className="w-4 h-4 text-[#6B7AFF]" />
                        </Link>
                        <button className="p-2 hover:bg-[#5698FF]/10 rounded-lg transition-colors">
                          <MdMessage className="w-4 h-4 text-[#5698FF]" />
                        </button>
                        <button className="p-2 hover:bg-[#F8F9FF] rounded-lg transition-colors">
                          <MdMoreVert className="w-4 h-4 text-[#8F96AA]" />
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
          {filteredPatients.map((patient) => (
            <div key={patient.id} className="bg-white rounded-xl border border-[#DDE1EC] p-6 hover:border-[#6B7AFF]/20 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedPatients.has(patient.id)}
                    onChange={() => togglePatientSelection(patient.id)}
                    className="w-4 h-4 rounded border-2 border-[#DDE1EC] text-[#6B7AFF] focus:ring-[#6B7AFF]"
                  />
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    patient.priority === 'urgent' ? 'bg-[#FF5656]/10' : 'bg-[#6B7AFF]/10'
                  }`}>
                    <RiUserHeartLine className={`w-6 h-6 ${
                      patient.priority === 'urgent' ? 'text-[#FF5656]' : 'text-[#6B7AFF]'
                    }`} />
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(patient.status)}`}>
                  {patient.status}
                </span>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-[#1C243C] mb-1">{patient.name}</h3>
                <p className="text-sm text-[#8F96AA] mb-2">{patient.id} • {patient.age}y {patient.gender}</p>
                <p className="text-sm text-[#1C243C] mb-1">{patient.condition}</p>
                <p className="text-xs text-[#8F96AA]">{patient.woundType}</p>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#8F96AA]">Healing Progress</span>
                  <span className="text-sm font-medium text-[#1C243C]">{patient.healingProgress}%</span>
                </div>
                <div className="flex-1 bg-[#DDE1EC] rounded-full h-2 mb-2">
                  <div
                    className={`h-2 rounded-full ${getProgressColor(patient.healingProgress)}`}
                    style={{ width: `${patient.healingProgress}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-xs text-[#8F96AA]">
                  <span>{patient.daysInTreatment} days in treatment</span>
                  <span className={`font-medium ${getRiskScoreColor(patient.riskScore)}`}>
                    Risk: {patient.riskScore}%
                  </span>
                </div>
              </div>

              {patient.alerts.length > 0 && (
                <div className="mb-4 p-3 bg-[#FF5656]/5 border border-[#FF5656]/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <RiAlarmWarningLine className="w-4 h-4 text-[#FF5656]" />
                    <span className="text-sm font-medium text-[#FF5656]">Active Alerts</span>
                  </div>
                  {patient.alerts.slice(0, 2).map((alert, index) => (
                    <p key={index} className="text-xs text-[#FF5656] mb-1">• {alert}</p>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="text-xs text-[#8F96AA]">
                  <p>Next: {patient.nextAppointment}</p>
                  <p>Nurse: {patient.assignedNurse}</p>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/doctor/patients/${patient.id}`}
                    className="p-2 bg-[#6B7AFF]/10 text-[#6B7AFF] rounded-lg hover:bg-[#6B7AFF]/20 transition-colors"
                  >
                    <RiStethoscopeLine className="w-4 h-4" />
                  </Link>
                  <button className="p-2 bg-[#5698FF]/10 text-[#5698FF] rounded-lg hover:bg-[#5698FF]/20 transition-colors">
                    <MdMessage className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredPatients.length === 0 && (
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-12 text-center">
          <RiUserHeartLine className="w-16 h-16 text-[#DDE1EC] mx-auto mb-4" />
          <h3 className="text-lg font-medium text-[#1C243C] mb-2">No patients found</h3>
          <p className="text-[#8F96AA] mb-6">
            {searchTerm || selectedFilter !== 'all'
              ? "Try adjusting your search terms or filters"
              : "Start by adding your first patient to the system"
            }
          </p>
          {(!searchTerm && selectedFilter === 'all') && (
            <Link
              href="/doctor/patients/new"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
            >
              <MdAdd className="w-4 h-4" />
              Add First Patient
            </Link>
          )}
        </div>
      )}

      {/* Clinical Insights Panel */}
      <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
        <div className="flex items-center gap-2 mb-4">
          <MdAnalytics className="w-5 h-5 text-[#6B7AFF]" />
          <h2 className="font-semibold text-[#1C243C]">Clinical Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-[#FF5656]/5 border border-[#FF5656]/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <RiAlarmWarningLine className="w-4 h-4 text-[#FF5656]" />
              <span className="text-sm font-medium text-[#FF5656]">High Risk Patients</span>
            </div>
            <p className="text-2xl font-bold text-[#FF5656] mb-1">
              {filteredPatients.filter(p => p.riskScore >= 80).length}
            </p>
            <p className="text-xs text-[#8F96AA]">Require immediate attention</p>
          </div>
          <div className="p-4 bg-[#56E0A0]/5 border border-[#56E0A0]/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <MdTrendingUp className="w-4 h-4 text-[#56E0A0]" />
              <span className="text-sm font-medium text-[#56E0A0]">Healing Well</span>
            </div>
            <p className="text-2xl font-bold text-[#56E0A0] mb-1">
              {filteredPatients.filter(p => p.healingProgress >= 70).length}
            </p>
            <p className="text-xs text-[#8F96AA]">Above 70% progress</p>
          </div>
          <div className="p-4 bg-[#5698FF]/5 border border-[#5698FF]/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <MdCalendarToday className="w-4 h-4 text-[#5698FF]" />
              <span className="text-sm font-medium text-[#5698FF]">Due for Follow-up</span>
            </div>
            <p className="text-2xl font-bold text-[#5698FF] mb-1">
              {filteredPatients.filter(p => new Date(p.nextAppointment) <= new Date(Date.now() + 7*24*60*60*1000)).length}
            </p>
            <p className="text-xs text-[#8F96AA]">Within next 7 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}
