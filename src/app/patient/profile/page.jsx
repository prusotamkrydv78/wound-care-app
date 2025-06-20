'use client';
import { useState } from 'react';
import { MdEdit, MdSave, MdCancel, MdAdd, MdDelete, MdWarning, MdPhone, MdEmail } from 'react-icons/md';
import { RiUserLine, RiHeartLine, RiMedicineBottleLine, RiContactsLine } from 'react-icons/ri';

export default function PatientProfile() {
  const [editingSection, setEditingSection] = useState(null);
  const [showAddMedication, setShowAddMedication] = useState(false);
  const [showAddAllergy, setShowAddAllergy] = useState(false);
  const [showAddContact, setShowAddContact] = useState(false);

  const [profileData, setProfileData] = useState({
    personal: {
      firstName: 'John',
      lastName: 'Smith',
      dateOfBirth: '1985-03-15',
      gender: 'Male',
      phone: '+1 (555) 123-4567',
      email: 'john.smith@email.com',
      address: '123 Main Street, City, State 12345',
      insuranceProvider: 'Blue Cross Blue Shield',
      policyNumber: 'BC123456789',
      groupNumber: 'GRP001'
    },
    medical: {
      conditions: [
        { id: 1, condition: 'Type 2 Diabetes', diagnosedDate: '2020-01-15', status: 'Active' },
        { id: 2, condition: 'Hypertension', diagnosedDate: '2019-06-20', status: 'Active' },
        { id: 3, condition: 'Peripheral Neuropathy', diagnosedDate: '2021-03-10', status: 'Active' }
      ],
      allergies: [
        { id: 1, allergen: 'Penicillin', reaction: 'Rash, difficulty breathing', severity: 'Severe' },
        { id: 2, allergen: 'Latex', reaction: 'Skin irritation', severity: 'Mild' }
      ],
      surgeries: [
        { id: 1, procedure: 'Appendectomy', date: '2010-08-15', hospital: 'General Hospital' },
        { id: 2, procedure: 'Gallbladder Removal', date: '2018-11-22', hospital: 'Medical Center' }
      ]
    },
    medications: [
      {
        id: 1,
        name: 'Metformin',
        dosage: '500mg',
        frequency: 'Twice daily',
        prescribedBy: 'Dr. Johnson',
        startDate: '2020-01-15',
        purpose: 'Diabetes management'
      },
      {
        id: 2,
        name: 'Lisinopril',
        dosage: '10mg',
        frequency: 'Once daily',
        prescribedBy: 'Dr. Chen',
        startDate: '2019-06-20',
        purpose: 'Blood pressure control'
      },
      {
        id: 3,
        name: 'Gabapentin',
        dosage: '300mg',
        frequency: 'Three times daily',
        prescribedBy: 'Dr. Johnson',
        startDate: '2021-03-10',
        purpose: 'Neuropathy pain'
      }
    ],
    emergencyContacts: [
      {
        id: 1,
        name: 'Jane Smith',
        relationship: 'Spouse',
        phone: '+1 (555) 987-6543',
        email: 'jane.smith@email.com',
        isPrimary: true
      },
      {
        id: 2,
        name: 'Robert Smith',
        relationship: 'Brother',
        phone: '+1 (555) 456-7890',
        email: 'robert.smith@email.com',
        isPrimary: false
      }
    ]
  });

  const handleSave = (section) => {
    // Handle save logic here
    setEditingSection(null);
  };

  const handleCancel = () => {
    setEditingSection(null);
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Severe': return 'bg-[#FF5656]/10 text-[#FF5656]';
      case 'Moderate': return 'bg-[#FFE27A]/10 text-[#FFE27A]';
      case 'Mild': return 'bg-[#56E0A0]/10 text-[#56E0A0]';
      default: return 'bg-[#DDE1EC] text-[#8F96AA]';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-[#FF5656]/10 text-[#FF5656]';
      case 'Managed': return 'bg-[#56E0A0]/10 text-[#56E0A0]';
      case 'Resolved': return 'bg-[#DDE1EC] text-[#8F96AA]';
      default: return 'bg-[#DDE1EC] text-[#8F96AA]';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#1C243C]">Health Profile</h1>
        <p className="text-[#8F96AA] mt-1">Manage your personal and medical information</p>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-xl border border-[#DDE1EC]">
        <div className="flex items-center justify-between p-6 border-b border-[#DDE1EC]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#6B7AFF]/10 rounded-lg flex items-center justify-center">
              <RiUserLine className="w-5 h-5 text-[#6B7AFF]" />
            </div>
            <h2 className="font-semibold text-[#1C243C]">Personal Information</h2>
          </div>
          <button
            onClick={() => setEditingSection(editingSection === 'personal' ? null : 'personal')}
            className="flex items-center gap-2 px-4 py-2 text-[#6B7AFF] border border-[#6B7AFF] rounded-lg hover:bg-[#6B7AFF]/5 transition-colors"
          >
            <MdEdit className="w-4 h-4" />
            {editingSection === 'personal' ? 'Cancel' : 'Edit'}
          </button>
        </div>
        
        <div className="p-6">
          {editingSection === 'personal' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#1C243C] mb-2">First Name</label>
                <input
                  type="text"
                  value={profileData.personal.firstName}
                  className="w-full p-3 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1C243C] mb-2">Last Name</label>
                <input
                  type="text"
                  value={profileData.personal.lastName}
                  className="w-full p-3 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1C243C] mb-2">Date of Birth</label>
                <input
                  type="date"
                  value={profileData.personal.dateOfBirth}
                  className="w-full p-3 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1C243C] mb-2">Gender</label>
                <select className="w-full p-3 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1C243C] mb-2">Phone</label>
                <input
                  type="tel"
                  value={profileData.personal.phone}
                  className="w-full p-3 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1C243C] mb-2">Email</label>
                <input
                  type="email"
                  value={profileData.personal.email}
                  className="w-full p-3 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#1C243C] mb-2">Address</label>
                <input
                  type="text"
                  value={profileData.personal.address}
                  className="w-full p-3 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
                />
              </div>
              <div className="md:col-span-2 flex gap-3 pt-4">
                <button
                  onClick={() => handleSave('personal')}
                  className="flex items-center gap-2 px-6 py-2 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
                >
                  <MdSave className="w-4 h-4" />
                  Save Changes
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center gap-2 px-6 py-2 border border-[#DDE1EC] text-[#8F96AA] rounded-lg hover:bg-[#F8F9FF] transition-colors"
                >
                  <MdCancel className="w-4 h-4" />
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-[#8F96AA]">Full Name</label>
                <p className="font-medium text-[#1C243C]">{profileData.personal.firstName} {profileData.personal.lastName}</p>
              </div>
              <div>
                <label className="text-sm text-[#8F96AA]">Date of Birth</label>
                <p className="font-medium text-[#1C243C]">{new Date(profileData.personal.dateOfBirth).toLocaleDateString()}</p>
              </div>
              <div>
                <label className="text-sm text-[#8F96AA]">Gender</label>
                <p className="font-medium text-[#1C243C]">{profileData.personal.gender}</p>
              </div>
              <div>
                <label className="text-sm text-[#8F96AA]">Phone</label>
                <p className="font-medium text-[#1C243C]">{profileData.personal.phone}</p>
              </div>
              <div>
                <label className="text-sm text-[#8F96AA]">Email</label>
                <p className="font-medium text-[#1C243C]">{profileData.personal.email}</p>
              </div>
              <div>
                <label className="text-sm text-[#8F96AA]">Address</label>
                <p className="font-medium text-[#1C243C]">{profileData.personal.address}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Medical History */}
      <div className="bg-white rounded-xl border border-[#DDE1EC]">
        <div className="flex items-center justify-between p-6 border-b border-[#DDE1EC]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FF5656]/10 rounded-lg flex items-center justify-center">
              <RiHeartLine className="w-5 h-5 text-[#FF5656]" />
            </div>
            <h2 className="font-semibold text-[#1C243C]">Medical History</h2>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Medical Conditions */}
          <div>
            <h3 className="font-medium text-[#1C243C] mb-4">Current Conditions</h3>
            <div className="space-y-3">
              {profileData.medical.conditions.map((condition) => (
                <div key={condition.id} className="flex items-center justify-between p-4 bg-[#F8F9FF] rounded-lg">
                  <div>
                    <h4 className="font-medium text-[#1C243C]">{condition.condition}</h4>
                    <p className="text-sm text-[#8F96AA]">Diagnosed: {new Date(condition.diagnosedDate).toLocaleDateString()}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(condition.status)}`}>
                    {condition.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Allergies */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-[#1C243C]">Allergies</h3>
              <button
                onClick={() => setShowAddAllergy(true)}
                className="flex items-center gap-2 px-3 py-1 text-[#6B7AFF] border border-[#6B7AFF] rounded-lg hover:bg-[#6B7AFF]/5 transition-colors"
              >
                <MdAdd className="w-4 h-4" />
                Add
              </button>
            </div>
            <div className="space-y-3">
              {profileData.medical.allergies.map((allergy) => (
                <div key={allergy.id} className="flex items-center justify-between p-4 bg-[#F8F9FF] rounded-lg">
                  <div className="flex items-center gap-3">
                    <MdWarning className="w-5 h-5 text-[#FF5656]" />
                    <div>
                      <h4 className="font-medium text-[#1C243C]">{allergy.allergen}</h4>
                      <p className="text-sm text-[#8F96AA]">{allergy.reaction}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(allergy.severity)}`}>
                    {allergy.severity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Current Medications */}
      <div className="bg-white rounded-xl border border-[#DDE1EC]">
        <div className="flex items-center justify-between p-6 border-b border-[#DDE1EC]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#8B6DFF]/10 rounded-lg flex items-center justify-center">
              <RiMedicineBottleLine className="w-5 h-5 text-[#8B6DFF]" />
            </div>
            <h2 className="font-semibold text-[#1C243C]">Current Medications</h2>
          </div>
          <button
            onClick={() => setShowAddMedication(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#8B6DFF] text-white rounded-lg hover:bg-[#7A5BFF] transition-colors"
          >
            <MdAdd className="w-4 h-4" />
            Add Medication
          </button>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            {profileData.medications.map((medication) => (
              <div key={medication.id} className="p-4 border border-[#DDE1EC] rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-[#1C243C] mb-2">{medication.name}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-[#8F96AA]">Dosage:</span>
                        <p className="font-medium text-[#1C243C]">{medication.dosage}</p>
                      </div>
                      <div>
                        <span className="text-[#8F96AA]">Frequency:</span>
                        <p className="font-medium text-[#1C243C]">{medication.frequency}</p>
                      </div>
                      <div>
                        <span className="text-[#8F96AA]">Prescribed by:</span>
                        <p className="font-medium text-[#1C243C]">{medication.prescribedBy}</p>
                      </div>
                      <div>
                        <span className="text-[#8F96AA]">Purpose:</span>
                        <p className="font-medium text-[#1C243C]">{medication.purpose}</p>
                      </div>
                    </div>
                  </div>
                  <button className="p-2 text-[#FF5656] hover:bg-red-50 rounded-lg transition-colors">
                    <MdDelete className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="bg-white rounded-xl border border-[#DDE1EC]">
        <div className="flex items-center justify-between p-6 border-b border-[#DDE1EC]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#56E0A0]/10 rounded-lg flex items-center justify-center">
              <RiContactsLine className="w-5 h-5 text-[#56E0A0]" />
            </div>
            <h2 className="font-semibold text-[#1C243C]">Emergency Contacts</h2>
          </div>
          <button
            onClick={() => setShowAddContact(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#56E0A0] text-white rounded-lg hover:bg-[#4BD396] transition-colors"
          >
            <MdAdd className="w-4 h-4" />
            Add Contact
          </button>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            {profileData.emergencyContacts.map((contact) => (
              <div key={contact.id} className="p-4 border border-[#DDE1EC] rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-medium text-[#1C243C]">{contact.name}</h3>
                      {contact.isPrimary && (
                        <span className="px-2 py-1 bg-[#56E0A0]/10 text-[#56E0A0] text-xs rounded-full">
                          Primary
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-[#8F96AA]">Relationship:</span>
                        <p className="font-medium text-[#1C243C]">{contact.relationship}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <MdPhone className="w-4 h-4 text-[#8F96AA]" />
                        <p className="font-medium text-[#1C243C]">{contact.phone}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <MdEmail className="w-4 h-4 text-[#8F96AA]" />
                        <p className="font-medium text-[#1C243C]">{contact.email}</p>
                      </div>
                    </div>
                  </div>
                  <button className="p-2 text-[#FF5656] hover:bg-red-50 rounded-lg transition-colors">
                    <MdDelete className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
