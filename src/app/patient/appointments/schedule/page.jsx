'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MdArrowBack, MdVideoCall, MdLocationOn, MdAccessTime, MdCalendarToday } from 'react-icons/md';
import { RiUserLine, RiStethoscopeLine } from 'react-icons/ri';

export default function ScheduleAppointment() {
  const [step, setStep] = useState(1); // 1: type, 2: provider, 3: datetime, 4: confirm
  const [selectedType, setSelectedType] = useState(null);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [appointmentMode, setAppointmentMode] = useState('in-person'); // in-person, virtual

  const appointmentTypes = [
    {
      id: 'follow-up',
      name: 'Follow-up Visit',
      description: 'Regular check-up on wound healing progress',
      duration: 30,
      virtualAvailable: true,
      urgency: 'routine'
    },
    {
      id: 'assessment',
      name: 'Wound Assessment',
      description: 'Detailed examination and treatment planning',
      duration: 45,
      virtualAvailable: false,
      urgency: 'routine'
    },
    {
      id: 'urgent',
      name: 'Urgent Consultation',
      description: 'For concerning changes or complications',
      duration: 30,
      virtualAvailable: true,
      urgency: 'urgent'
    },
    {
      id: 'consultation',
      name: 'Second Opinion',
      description: 'Consultation with specialist for treatment options',
      duration: 60,
      virtualAvailable: true,
      urgency: 'routine'
    }
  ];

  const providers = [
    {
      id: 'dr-johnson',
      name: 'Dr. Sarah Johnson',
      specialty: 'Wound Care Specialist',
      rating: 4.9,
      experience: '15 years',
      virtualAvailable: true,
      nextAvailable: '2024-02-08',
      image: '/api/placeholder/80/80'
    },
    {
      id: 'dr-chen',
      name: 'Dr. Michael Chen',
      specialty: 'Plastic Surgeon',
      rating: 4.8,
      experience: '12 years',
      virtualAvailable: false,
      nextAvailable: '2024-02-15',
      image: '/api/placeholder/80/80'
    },
    {
      id: 'nurse-williams',
      name: 'Nurse Mary Williams',
      specialty: 'Wound Care Nurse',
      rating: 4.9,
      experience: '8 years',
      virtualAvailable: true,
      nextAvailable: '2024-02-10',
      image: '/api/placeholder/80/80'
    }
  ];

  const availableDates = [
    { date: '2024-02-08', day: 'Thu', available: true },
    { date: '2024-02-09', day: 'Fri', available: true },
    { date: '2024-02-10', day: 'Sat', available: false },
    { date: '2024-02-11', day: 'Sun', available: false },
    { date: '2024-02-12', day: 'Mon', available: true },
    { date: '2024-02-13', day: 'Tue', available: true },
    { date: '2024-02-14', day: 'Wed', available: true }
  ];

  const availableTimes = [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: false },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: false },
    { time: '11:30 AM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: false },
    { time: '3:30 PM', available: true },
    { time: '4:00 PM', available: true },
    { time: '4:30 PM', available: true }
  ];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const canProceed = () => {
    switch (step) {
      case 1: return selectedType !== null;
      case 2: return selectedProvider !== null;
      case 3: return selectedDate !== null && selectedTime !== null;
      case 4: return true;
      default: return false;
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

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/patient/appointments" className="p-2 rounded-lg hover:bg-[#F8F9FF]">
          <MdArrowBack className="w-5 h-5 text-[#8F96AA]" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-[#1C243C]">Schedule Appointment</h1>
          <p className="text-[#8F96AA] mt-1">Book your next healthcare visit</p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
        <div className="flex items-center justify-between mb-8">
          {[
            { number: 1, title: 'Type' },
            { number: 2, title: 'Provider' },
            { number: 3, title: 'Date & Time' },
            { number: 4, title: 'Confirm' }
          ].map((stepItem, index) => (
            <div key={stepItem.number} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= stepItem.number ? 'bg-[#6B7AFF] text-white' : 'bg-[#DDE1EC] text-[#8F96AA]'
              }`}>
                {stepItem.number}
              </div>
              <span className={`ml-2 text-sm font-medium ${
                step >= stepItem.number ? 'text-[#1C243C]' : 'text-[#8F96AA]'
              }`}>
                {stepItem.title}
              </span>
              {index < 3 && (
                <div className={`w-16 h-0.5 mx-4 ${
                  step > stepItem.number ? 'bg-[#6B7AFF]' : 'bg-[#DDE1EC]'
                }`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Appointment Type */}
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-[#1C243C]">What type of appointment do you need?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {appointmentTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() => setSelectedType(type)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedType?.id === type.id
                      ? 'border-[#6B7AFF] bg-[#6B7AFF]/5'
                      : 'border-[#DDE1EC] hover:border-[#6B7AFF]/20'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-medium text-[#1C243C]">{type.name}</h3>
                    <div className="flex gap-2">
                      {type.virtualAvailable && (
                        <div className="w-6 h-6 bg-[#5698FF]/10 rounded flex items-center justify-center">
                          <MdVideoCall className="w-3 h-3 text-[#5698FF]" />
                        </div>
                      )}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        type.urgency === 'urgent' ? 'bg-[#FF5656]/10 text-[#FF5656]' : 'bg-[#56E0A0]/10 text-[#56E0A0]'
                      }`}>
                        {type.urgency}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[#8F96AA] mb-3">{type.description}</p>
                  <div className="flex items-center gap-2 text-xs text-[#8F96AA]">
                    <MdAccessTime className="w-3 h-3" />
                    <span>{type.duration} minutes</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Provider Selection */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-[#1C243C] mb-2">Choose your healthcare provider</h2>
              {selectedType?.virtualAvailable && (
                <div className="flex gap-4 mb-6">
                  <button
                    onClick={() => setAppointmentMode('in-person')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                      appointmentMode === 'in-person'
                        ? 'border-[#6B7AFF] bg-[#6B7AFF]/5 text-[#6B7AFF]'
                        : 'border-[#DDE1EC] text-[#8F96AA] hover:border-[#6B7AFF]/20'
                    }`}
                  >
                    <MdLocationOn className="w-4 h-4" />
                    In-Person
                  </button>
                  <button
                    onClick={() => setAppointmentMode('virtual')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                      appointmentMode === 'virtual'
                        ? 'border-[#6B7AFF] bg-[#6B7AFF]/5 text-[#6B7AFF]'
                        : 'border-[#DDE1EC] text-[#8F96AA] hover:border-[#6B7AFF]/20'
                    }`}
                  >
                    <MdVideoCall className="w-4 h-4" />
                    Virtual
                  </button>
                </div>
              )}
            </div>
            <div className="space-y-4">
              {providers
                .filter(provider => appointmentMode === 'in-person' || provider.virtualAvailable)
                .map((provider) => (
                <div
                  key={provider.id}
                  onClick={() => setSelectedProvider(provider)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedProvider?.id === provider.id
                      ? 'border-[#6B7AFF] bg-[#6B7AFF]/5'
                      : 'border-[#DDE1EC] hover:border-[#6B7AFF]/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={provider.image}
                      alt={provider.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-[#1C243C] mb-1">{provider.name}</h3>
                      <p className="text-sm text-[#8F96AA] mb-2">{provider.specialty}</p>
                      <div className="flex items-center gap-4 text-xs text-[#8F96AA]">
                        <span>⭐ {provider.rating}</span>
                        <span>{provider.experience} experience</span>
                        <span>Next: {new Date(provider.nextAvailable).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Date & Time Selection */}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-[#1C243C]">Select date and time</h2>

            {/* Date Selection */}
            <div>
              <h3 className="font-medium text-[#1C243C] mb-4">Choose a date</h3>
              <div className="grid grid-cols-7 gap-2">
                {availableDates.map((dateOption) => (
                  <button
                    key={dateOption.date}
                    onClick={() => dateOption.available && setSelectedDate(dateOption.date)}
                    disabled={!dateOption.available}
                    className={`p-3 rounded-lg text-center transition-all ${
                      selectedDate === dateOption.date
                        ? 'bg-[#6B7AFF] text-white'
                        : dateOption.available
                        ? 'bg-white border border-[#DDE1EC] text-[#1C243C] hover:border-[#6B7AFF]/20'
                        : 'bg-[#F8F9FF] text-[#8F96AA] cursor-not-allowed'
                    }`}
                  >
                    <div className="text-xs font-medium">{dateOption.day}</div>
                    <div className="text-sm">{new Date(dateOption.date).getDate()}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            {selectedDate && (
              <div>
                <h3 className="font-medium text-[#1C243C] mb-4">Choose a time</h3>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {availableTimes.map((timeOption) => (
                    <button
                      key={timeOption.time}
                      onClick={() => timeOption.available && setSelectedTime(timeOption.time)}
                      disabled={!timeOption.available}
                      className={`p-3 rounded-lg text-center transition-all ${
                        selectedTime === timeOption.time
                          ? 'bg-[#6B7AFF] text-white'
                          : timeOption.available
                          ? 'bg-white border border-[#DDE1EC] text-[#1C243C] hover:border-[#6B7AFF]/20'
                          : 'bg-[#F8F9FF] text-[#8F96AA] cursor-not-allowed'
                      }`}
                    >
                      {timeOption.time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-[#1C243C]">Confirm your appointment</h2>

            <div className="bg-[#F8F9FF] rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  appointmentMode === 'virtual' ? 'bg-[#5698FF]/10' : 'bg-[#56E0A0]/10'
                }`}>
                  {appointmentMode === 'virtual' ?
                    <MdVideoCall className="w-6 h-6 text-[#5698FF]" /> :
                    <MdLocationOn className="w-6 h-6 text-[#56E0A0]" />
                  }
                </div>
                <div>
                  <h3 className="font-semibold text-[#1C243C]">{selectedType?.name}</h3>
                  <p className="text-[#8F96AA]">{appointmentMode === 'virtual' ? 'Virtual Appointment' : 'In-Person Visit'}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#DDE1EC]">
                <div>
                  <div className="flex items-center gap-2 text-[#8F96AA] mb-2">
                    <MdCalendarToday className="w-4 h-4" />
                    <span className="text-sm">Date & Time</span>
                  </div>
                  <p className="font-medium text-[#1C243C]">
                    {formatDate(selectedDate)} at {selectedTime}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[#8F96AA] mb-2">
                    <RiUserLine className="w-4 h-4" />
                    <span className="text-sm">Provider</span>
                  </div>
                  <p className="font-medium text-[#1C243C]">{selectedProvider?.name}</p>
                  <p className="text-sm text-[#8F96AA]">{selectedProvider?.specialty}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[#8F96AA] mb-2">
                    <MdAccessTime className="w-4 h-4" />
                    <span className="text-sm">Duration</span>
                  </div>
                  <p className="font-medium text-[#1C243C]">{selectedType?.duration} minutes</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[#8F96AA] mb-2">
                    {appointmentMode === 'virtual' ? <MdVideoCall className="w-4 h-4" /> : <MdLocationOn className="w-4 h-4" />}
                    <span className="text-sm">Location</span>
                  </div>
                  <p className="font-medium text-[#1C243C]">
                    {appointmentMode === 'virtual' ? 'Video Call' : 'Medical Center'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-medium text-yellow-800 mb-2">Important Notes</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• You will receive a confirmation email with appointment details</li>
                <li>• Please arrive 15 minutes early for in-person appointments</li>
                <li>• For virtual appointments, you'll receive a link 30 minutes before</li>
                <li>• Cancellations must be made at least 24 hours in advance</li>
              </ul>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-8 border-t border-[#DDE1EC]">
          <button
            onClick={handleBack}
            disabled={step === 1}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              step === 1
                ? 'bg-[#DDE1EC] text-[#8F96AA] cursor-not-allowed'
                : 'bg-[#F8F9FF] text-[#6B7AFF] hover:bg-[#6B7AFF]/10'
            }`}
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              canProceed()
                ? 'bg-[#6B7AFF] text-white hover:bg-[#506EFF]'
                : 'bg-[#DDE1EC] text-[#8F96AA] cursor-not-allowed'
            }`}
          >
            {step === 4 ? 'Book Appointment' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}
