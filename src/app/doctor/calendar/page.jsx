'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MdCalendarToday, MdAccessTime, MdPerson, MdAdd, MdVideoCall, MdLocationOn, MdEdit, MdCancel, MdGroup, MdNotifications, MdSchedule } from 'react-icons/md';
import { RiStethoscopeLine, RiUserHeartLine, RiTeamLine, RiCalendarEventLine, RiTimeLine, RiNurseLine } from 'react-icons/ri';

export default function AdvancedAppointmentSystem() {
  const [selectedDate, setSelectedDate] = useState('2024-02-20');
  const [viewMode, setViewMode] = useState('day'); // day, week, month
  const [selectedProvider, setSelectedProvider] = useState('all');
  const [showResourcePanel, setShowResourcePanel] = useState(false);
  // Enhanced appointment data with clinical coordination
  const appointments = [
    {
      id: 1,
      patientName: "Sarah Connor",
      patientId: "PT001",
      type: "Critical Assessment",
      woundType: "Diabetic Foot Ulcer",
      time: "09:00 AM",
      endTime: "09:30 AM",
      date: "2024-02-20",
      duration: 30,
      status: "Confirmed",
      priority: "urgent",
      isVirtual: false,
      location: "Room 205",
      provider: "Dr. Johnson",
      careTeam: ["Nurse Jennifer", "Nutritionist Sarah"],
      equipment: ["Wound camera", "Doppler ultrasound"],
      preparation: ["Review latest photos", "Lab results ready", "Infection protocol"],
      riskLevel: "high",
      lastVisit: "2024-02-15",
      alerts: ["Signs of infection", "Patient anxiety"],
      notes: "Patient reports increased pain. Check for infection signs."
    },
    {
      id: 2,
      patientName: "John Smith",
      patientId: "PT002",
      type: "Follow-up Consultation",
      woundType: "Pressure Ulcer",
      time: "10:30 AM",
      endTime: "11:00 AM",
      date: "2024-02-20",
      duration: 30,
      status: "Confirmed",
      priority: "normal",
      isVirtual: true,
      location: "Virtual Room A",
      provider: "Dr. Johnson",
      careTeam: ["Nurse Mary"],
      equipment: [],
      preparation: ["Patient education materials", "Progress photos"],
      riskLevel: "medium",
      lastVisit: "2024-02-13",
      alerts: [],
      notes: "Routine follow-up. Patient doing well."
    },
    {
      id: 3,
      patientName: "Maria Garcia",
      patientId: "PT003",
      type: "Post-Surgical Check",
      woundType: "Surgical Incision",
      time: "02:00 PM",
      endTime: "02:15 PM",
      date: "2024-02-20",
      duration: 15,
      status: "Confirmed",
      priority: "low",
      isVirtual: false,
      location: "Room 102",
      provider: "Dr. Johnson",
      careTeam: ["Nurse Lisa"],
      equipment: [],
      preparation: ["Suture removal kit", "Discharge planning"],
      riskLevel: "low",
      lastVisit: "2024-02-17",
      alerts: [],
      notes: "Final post-op visit. Excellent healing."
    },
    {
      id: 4,
      patientName: "Team Meeting",
      patientId: null,
      type: "Multidisciplinary Round",
      woundType: null,
      time: "03:00 PM",
      endTime: "04:00 PM",
      date: "2024-02-20",
      duration: 60,
      status: "Scheduled",
      priority: "normal",
      isVirtual: false,
      location: "Conference Room B",
      provider: "Dr. Johnson",
      careTeam: ["Dr. Wilson", "Nurse Manager", "Physical Therapist", "Nutritionist"],
      equipment: ["Projector", "Patient files"],
      preparation: ["Case reviews", "Treatment protocols", "Quality metrics"],
      riskLevel: null,
      lastVisit: null,
      alerts: [],
      notes: "Weekly team coordination meeting."
    }
  ];

  // Provider and resource data
  const providers = [
    { id: 'all', name: 'All Providers' },
    { id: 'dr-johnson', name: 'Dr. Johnson' },
    { id: 'dr-wilson', name: 'Dr. Wilson' },
    { id: 'nurse-jennifer', name: 'Nurse Jennifer' },
    { id: 'nurse-mary', name: 'Nurse Mary' }
  ];

  const resources = [
    { id: 'room-205', name: 'Room 205', type: 'Examination Room', available: true },
    { id: 'room-102', name: 'Room 102', type: 'Procedure Room', available: true },
    { id: 'virtual-a', name: 'Virtual Room A', type: 'Telehealth', available: true },
    { id: 'conference-b', name: 'Conference Room B', type: 'Meeting Room', available: false },
    { id: 'wound-camera', name: 'Wound Camera', type: 'Equipment', available: true },
    { id: 'doppler', name: 'Doppler Ultrasound', type: 'Equipment', available: true }
  ];

  // Helper functions
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return 'bg-[#FF5656]/10 text-[#FF5656] border-[#FF5656]/20';
      case 'high': return 'bg-[#FFE27A]/10 text-[#FFE27A] border-[#FFE27A]/20';
      case 'normal': return 'bg-[#5698FF]/10 text-[#5698FF] border-[#5698FF]/20';
      case 'low': return 'bg-[#56E0A0]/10 text-[#56E0A0] border-[#56E0A0]/20';
      default: return 'bg-[#DDE1EC] text-[#8F96AA] border-[#DDE1EC]';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed': return 'bg-[#56E0A0]/10 text-[#56E0A0]';
      case 'Scheduled': return 'bg-[#5698FF]/10 text-[#5698FF]';
      case 'In Progress': return 'bg-[#FFE27A]/10 text-[#FFE27A]';
      case 'Completed': return 'bg-[#6B7AFF]/10 text-[#6B7AFF]';
      case 'Cancelled': return 'bg-[#FF5656]/10 text-[#FF5656]';
      default: return 'bg-[#DDE1EC] text-[#8F96AA]';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'high': return 'text-[#FF5656]';
      case 'medium': return 'text-[#FFE27A]';
      case 'low': return 'text-[#56E0A0]';
      default: return 'text-[#8F96AA]';
    }
  };

  // Filter appointments by selected provider
  const filteredAppointments = selectedProvider === 'all'
    ? appointments
    : appointments.filter(apt => apt.provider.toLowerCase().includes(selectedProvider.replace('dr-', 'dr. ').replace('nurse-', 'nurse ')));

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Enhanced Header with Multi-Provider Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1C243C]">Advanced Appointment System</h1>
          <p className="text-[#8F96AA] mt-1">
            {filteredAppointments.length} appointments today • {filteredAppointments.filter(a => a.priority === 'urgent').length} urgent
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <select
            value={selectedProvider}
            onChange={(e) => setSelectedProvider(e.target.value)}
            className="px-4 py-2 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
          >
            {providers.map(provider => (
              <option key={provider.id} value={provider.id}>
                {provider.name}
              </option>
            ))}
          </select>

          <div className="flex border border-[#DDE1EC] rounded-lg overflow-hidden">
            {['day', 'week', 'month'].map((mode) => (
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

          <button
            onClick={() => setShowResourcePanel(!showResourcePanel)}
            className="flex items-center gap-2 px-4 py-2 border border-[#DDE1EC] rounded-lg hover:bg-[#F8F9FF] transition-colors"
          >
            <MdSchedule className="w-4 h-4" />
            Resources
          </button>

          <Link
            href="/doctor/appointments/schedule"
            className="flex items-center gap-2 px-4 py-2 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
          >
            <MdAdd className="w-4 h-4" />
            Schedule
          </Link>
        </div>
      </div>

      {/* Resource Availability Panel */}
      {showResourcePanel && (
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
          <h2 className="font-semibold text-[#1C243C] mb-4">Resource Availability</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-sm font-medium text-[#8F96AA] mb-3">Rooms</h3>
              <div className="space-y-2">
                {resources.filter(r => r.type.includes('Room')).map((resource) => (
                  <div key={resource.id} className="flex items-center justify-between p-2 bg-[#F8F9FF] rounded">
                    <span className="text-sm text-[#1C243C]">{resource.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      resource.available ? 'bg-[#56E0A0]/10 text-[#56E0A0]' : 'bg-[#FF5656]/10 text-[#FF5656]'
                    }`}>
                      {resource.available ? 'Available' : 'Occupied'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-[#8F96AA] mb-3">Equipment</h3>
              <div className="space-y-2">
                {resources.filter(r => r.type === 'Equipment').map((resource) => (
                  <div key={resource.id} className="flex items-center justify-between p-2 bg-[#F8F9FF] rounded">
                    <span className="text-sm text-[#1C243C]">{resource.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      resource.available ? 'bg-[#56E0A0]/10 text-[#56E0A0]' : 'bg-[#FF5656]/10 text-[#FF5656]'
                    }`}>
                      {resource.available ? 'Available' : 'In Use'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-[#8F96AA] mb-3">Virtual Rooms</h3>
              <div className="space-y-2">
                {resources.filter(r => r.type === 'Telehealth').map((resource) => (
                  <div key={resource.id} className="flex items-center justify-between p-2 bg-[#F8F9FF] rounded">
                    <span className="text-sm text-[#1C243C]">{resource.name}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-[#56E0A0]/10 text-[#56E0A0]">
                      Ready
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Appointments Display */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredAppointments.map((appointment) => (
          <div key={appointment.id} className={`bg-white rounded-xl border overflow-hidden hover:border-[#6B7AFF]/20 transition-all ${
            appointment.priority === 'urgent' ? 'border-[#FF5656]/20' : 'border-[#DDE1EC]'
          }`}>
            {/* Appointment Header */}
            <div className="p-4 border-b border-[#DDE1EC]">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-[#1C243C] mb-1">{appointment.type}</h3>
                  {appointment.patientName !== 'Team Meeting' && (
                    <p className="text-sm text-[#8F96AA]">{appointment.patientName} • {appointment.patientId}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  {appointment.priority && (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(appointment.priority)}`}>
                      {appointment.priority}
                    </span>
                  )}
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                    {appointment.status}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-[#8F96AA]">
                <div className="flex items-center gap-1">
                  <MdAccessTime className="w-4 h-4" />
                  <span>{appointment.time} - {appointment.endTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  {appointment.isVirtual ? <MdVideoCall className="w-4 h-4" /> : <MdLocationOn className="w-4 h-4" />}
                  <span>{appointment.location}</span>
                </div>
              </div>
            </div>

            {/* Appointment Details */}
            <div className="p-4 space-y-4">
              {/* Wound Information */}
              {appointment.woundType && (
                <div className="flex items-center gap-2">
                  <RiStethoscopeLine className="w-4 h-4 text-[#8B6DFF]" />
                  <span className="text-sm text-[#1C243C]">{appointment.woundType}</span>
                  {appointment.riskLevel && (
                    <span className={`text-xs font-medium ${getRiskColor(appointment.riskLevel)}`}>
                      {appointment.riskLevel} risk
                    </span>
                  )}
                </div>
              )}

              {/* Care Team */}
              {appointment.careTeam.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <RiTeamLine className="w-4 h-4 text-[#5698FF]" />
                    <span className="text-sm font-medium text-[#1C243C]">Care Team</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {appointment.careTeam.map((member, index) => (
                      <span key={index} className="text-xs bg-[#5698FF]/10 text-[#5698FF] px-2 py-1 rounded-full">
                        {member}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Equipment Required */}
              {appointment.equipment.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <RiStethoscopeLine className="w-4 h-4 text-[#8B6DFF]" />
                    <span className="text-sm font-medium text-[#1C243C]">Equipment</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {appointment.equipment.map((item, index) => (
                      <span key={index} className="text-xs bg-[#8B6DFF]/10 text-[#8B6DFF] px-2 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Preparation Checklist */}
              {appointment.preparation.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MdNotifications className="w-4 h-4 text-[#FFE27A]" />
                    <span className="text-sm font-medium text-[#1C243C]">Preparation</span>
                  </div>
                  <div className="space-y-1">
                    {appointment.preparation.slice(0, 3).map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <input type="checkbox" className="w-3 h-3 rounded border-2 border-[#DDE1EC] text-[#6B7AFF]" />
                        <span className="text-xs text-[#8F96AA]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Alerts */}
              {appointment.alerts.length > 0 && (
                <div className="p-3 bg-[#FF5656]/5 border border-[#FF5656]/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <MdNotifications className="w-4 h-4 text-[#FF5656]" />
                    <span className="text-sm font-medium text-[#FF5656]">Alerts</span>
                  </div>
                  {appointment.alerts.map((alert, index) => (
                    <p key={index} className="text-xs text-[#FF5656] mb-1">• {alert}</p>
                  ))}
                </div>
              )}

              {/* Notes */}
              {appointment.notes && (
                <div className="p-3 bg-[#F8F9FF] rounded-lg">
                  <p className="text-xs text-[#1C243C]">{appointment.notes}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                {appointment.isVirtual ? (
                  <button className="flex-1 py-2 px-3 bg-[#5698FF] text-white rounded-lg hover:bg-[#4A87FF] transition-colors text-sm">
                    <MdVideoCall className="w-4 h-4 inline mr-1" />
                    Join Call
                  </button>
                ) : (
                  <Link
                    href={`/doctor/patients/${appointment.patientId}`}
                    className="flex-1 py-2 px-3 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors text-center text-sm"
                  >
                    View Patient
                  </Link>
                )}
                <button className="py-2 px-3 border border-[#DDE1EC] text-[#8F96AA] rounded-lg hover:bg-[#F8F9FF] transition-colors">
                  <MdEdit className="w-4 h-4" />
                </button>
                <button className="py-2 px-3 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                  <MdCancel className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredAppointments.length === 0 && (
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-12 text-center">
          <RiCalendarEventLine className="w-16 h-16 text-[#DDE1EC] mx-auto mb-4" />
          <h3 className="text-lg font-medium text-[#1C243C] mb-2">No appointments scheduled</h3>
          <p className="text-[#8F96AA] mb-6">
            {selectedProvider !== 'all'
              ? `No appointments found for ${providers.find(p => p.id === selectedProvider)?.name}`
              : "Start by scheduling your first appointment"
            }
          </p>
          <Link
            href="/doctor/appointments/schedule"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
          >
            <MdAdd className="w-4 h-4" />
            Schedule Appointment
          </Link>
        </div>
      )}
    </div>
  );
}
