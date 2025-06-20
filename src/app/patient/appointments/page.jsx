'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MdCalendarToday, MdAdd, MdVideoCall, MdLocationOn, MdAccessTime, MdEdit, MdCancel } from 'react-icons/md';
import { RiCalendarEventLine, RiUserLine, RiStethoscopeLine } from 'react-icons/ri';

export default function PatientAppointments() {
  const [viewMode, setViewMode] = useState('upcoming'); // upcoming, past, all
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const upcomingAppointments = [
    {
      id: 1,
      date: '2024-02-08',
      time: '2:00 PM',
      duration: 30,
      type: 'Follow-up',
      provider: 'Dr. Sarah Johnson',
      specialty: 'Wound Care Specialist',
      location: 'Telehealth',
      isVirtual: true,
      status: 'confirmed',
      preparation: [
        'Take wound photo before appointment',
        'Prepare list of questions',
        'Have current medications ready'
      ],
      joinUrl: 'https://telehealth.example.com/join/abc123'
    },
    {
      id: 2,
      date: '2024-02-15',
      time: '10:30 AM',
      duration: 45,
      type: 'Wound Assessment',
      provider: 'Dr. Michael Chen',
      specialty: 'Plastic Surgeon',
      location: 'Medical Center - Room 205',
      isVirtual: false,
      status: 'confirmed',
      preparation: [
        'Arrive 15 minutes early',
        'Bring insurance card',
        'Bring current medications list'
      ],
      address: '123 Medical Drive, Suite 205, City, State 12345'
    },
    {
      id: 3,
      date: '2024-02-22',
      time: '3:15 PM',
      duration: 30,
      type: 'Progress Check',
      provider: 'Nurse Mary Williams',
      specialty: 'Wound Care Nurse',
      location: 'Clinic - Room 102',
      isVirtual: false,
      status: 'pending',
      preparation: [
        'Complete pre-visit questionnaire',
        'Bring recent photos if available'
      ],
      address: '456 Health Plaza, Room 102, City, State 12345'
    }
  ];

  const pastAppointments = [
    {
      id: 4,
      date: '2024-01-25',
      time: '2:00 PM',
      duration: 45,
      type: 'Initial Consultation',
      provider: 'Dr. Sarah Johnson',
      specialty: 'Wound Care Specialist',
      location: 'Medical Center',
      isVirtual: false,
      status: 'completed',
      summary: 'Initial wound assessment completed. Treatment plan established.',
      nextSteps: ['Daily wound cleaning', 'Photo documentation', 'Follow-up in 2 weeks']
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-[#56E0A0]/10 text-[#56E0A0]';
      case 'pending': return 'bg-[#FFE27A]/10 text-[#FFE27A]';
      case 'completed': return 'bg-[#6B7AFF]/10 text-[#6B7AFF]';
      case 'cancelled': return 'bg-[#FF5656]/10 text-[#FF5656]';
      default: return 'bg-[#DDE1EC] text-[#8F96AA]';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const isToday = (dateString) => {
    const today = new Date();
    const appointmentDate = new Date(dateString);
    return today.toDateString() === appointmentDate.toDateString();
  };

  const isTomorrow = (dateString) => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const appointmentDate = new Date(dateString);
    return tomorrow.toDateString() === appointmentDate.toDateString();
  };

  const getDateLabel = (dateString) => {
    if (isToday(dateString)) return 'Today';
    if (isTomorrow(dateString)) return 'Tomorrow';
    return formatDate(dateString);
  };

  const currentAppointments = viewMode === 'upcoming' ? upcomingAppointments : 
                              viewMode === 'past' ? pastAppointments : 
                              [...upcomingAppointments, ...pastAppointments];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1C243C]">My Appointments</h1>
          <p className="text-[#8F96AA] mt-1">Manage your healthcare appointments</p>
        </div>
        <Link
          href="/patient/appointments/schedule"
          className="flex items-center gap-2 px-4 py-2 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
        >
          <MdAdd className="w-4 h-4" />
          Schedule Appointment
        </Link>
      </div>

      {/* View Toggle */}
      <div className="bg-white rounded-xl border border-[#DDE1EC] p-1 inline-flex">
        {['upcoming', 'past', 'all'].map((mode) => (
          <button
            key={mode}
            onClick={() => setViewMode(mode)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
              viewMode === mode
                ? 'bg-[#6B7AFF] text-white'
                : 'text-[#8F96AA] hover:text-[#6B7AFF]'
            }`}
          >
            {mode} Appointments
          </button>
        ))}
      </div>

      {/* Appointments List */}
      <div className="space-y-4">
        {currentAppointments.map((appointment) => (
          <div key={appointment.id} className="bg-white rounded-xl border border-[#DDE1EC] overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                
                {/* Appointment Info */}
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      appointment.isVirtual ? 'bg-[#5698FF]/10' : 'bg-[#56E0A0]/10'
                    }`}>
                      {appointment.isVirtual ? 
                        <MdVideoCall className="w-6 h-6 text-[#5698FF]" /> :
                        <MdLocationOn className="w-6 h-6 text-[#56E0A0]" />
                      }
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-[#1C243C]">{appointment.type}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                          {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[#8F96AA]">
                          <MdCalendarToday className="w-4 h-4" />
                          <span>{getDateLabel(appointment.date)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#8F96AA]">
                          <MdAccessTime className="w-4 h-4" />
                          <span>{appointment.time} ({appointment.duration} minutes)</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#8F96AA]">
                          <RiUserLine className="w-4 h-4" />
                          <span>{appointment.provider} - {appointment.specialty}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#8F96AA]">
                          {appointment.isVirtual ? <MdVideoCall className="w-4 h-4" /> : <MdLocationOn className="w-4 h-4" />}
                          <span>{appointment.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                {appointment.status !== 'completed' && (
                  <div className="flex gap-2">
                    {appointment.isVirtual && appointment.status === 'confirmed' && (
                      <button className="flex items-center gap-2 px-4 py-2 bg-[#5698FF] text-white rounded-lg hover:bg-[#4A87FF] transition-colors">
                        <MdVideoCall className="w-4 h-4" />
                        Join Call
                      </button>
                    )}
                    <button className="flex items-center gap-2 px-4 py-2 border border-[#DDE1EC] text-[#8F96AA] rounded-lg hover:bg-[#F8F9FF] transition-colors">
                      <MdEdit className="w-4 h-4" />
                      Reschedule
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                      <MdCancel className="w-4 h-4" />
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              {/* Preparation Checklist */}
              {appointment.preparation && appointment.status !== 'completed' && (
                <div className="mt-6 pt-6 border-t border-[#DDE1EC]">
                  <h4 className="font-medium text-[#1C243C] mb-3">Preparation Checklist</h4>
                  <div className="space-y-2">
                    {appointment.preparation.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-2 border-[#DDE1EC] text-[#6B7AFF] focus:ring-[#6B7AFF]"
                        />
                        <span className="text-sm text-[#8F96AA]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Appointment Summary (for completed appointments) */}
              {appointment.status === 'completed' && appointment.summary && (
                <div className="mt-6 pt-6 border-t border-[#DDE1EC]">
                  <h4 className="font-medium text-[#1C243C] mb-3">Visit Summary</h4>
                  <p className="text-[#8F96AA] mb-4">{appointment.summary}</p>
                  {appointment.nextSteps && (
                    <div>
                      <h5 className="font-medium text-[#1C243C] mb-2">Next Steps</h5>
                      <ul className="space-y-1">
                        {appointment.nextSteps.map((step, index) => (
                          <li key={index} className="text-sm text-[#8F96AA] flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#6B7AFF] rounded-full"></div>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {currentAppointments.length === 0 && (
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-12 text-center">
          <RiCalendarEventLine className="w-16 h-16 text-[#DDE1EC] mx-auto mb-4" />
          <h3 className="text-lg font-medium text-[#1C243C] mb-2">No appointments found</h3>
          <p className="text-[#8F96AA] mb-6">
            {viewMode === 'upcoming' ? "You don't have any upcoming appointments." :
             viewMode === 'past' ? "No past appointments to display." :
             "No appointments found."}
          </p>
          <Link
            href="/patient/appointments/schedule"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
          >
            <MdAdd className="w-4 h-4" />
            Schedule Your First Appointment
          </Link>
        </div>
      )}
    </div>
  );
}
