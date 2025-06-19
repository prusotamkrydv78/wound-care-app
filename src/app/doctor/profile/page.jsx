'use client';
import { useState } from 'react';
import {
  RiUserLine, RiMailLine, RiPhoneLine, RiHospitalLine,
  RiCalendarLine, RiMapPinLine, RiLockPasswordLine,
  RiUploadCloud2Line, RiGenderlessFill,
} from 'react-icons/ri';
import { FaUserMd, FaRegClock, FaRegCalendarAlt } from 'react-icons/fa';

const InputField = ({ label, icon: Icon, value, onChange, disabled, type = 'text' }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
      {Icon && <Icon className="w-5 h-5 text-blue-600" />}
      <input
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="bg-transparent w-full focus:outline-none"
      />
    </div>
  </div>
);

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: 'Dr. John Doe',
    email: 'john.doe@hospital.com',
    phone: '(555) 123-4567',
    gender: 'Male',
    dateOfBirth: '1980-06-19',
    profilePicture: null,
    specialization: 'Wound Care Specialist',
    experience: '10',
    registrationNumber: 'MD123456',
    hospitalName: 'City General Hospital',
    clinicAddress: '123 Medical Center Dr, City, State',
    workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    idProof: null,
    resume: null,
    verificationStatus: 'Approved',
    adminNotes: '',
    role: 'doctor',
    lastLogin: '2025-06-19 09:00 AM',
    dateJoined: '2024-01-15',
  });
  const handleSubmit = ()=>{

  }
  const  handleFileUpload = ()=>{

  }

  return (
    <main className="min-h-screen bg-gray-50  px-2 sm:px-6 lg:px-8">
      <div className="  mx-auto space-y-2">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className=" e rounded-xl sha dow-sm border border-gray-100 p-6">
            {/* Profile Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 
                                flex items-center justify-center text-white text-3xl font-bold">
                    {profileData.profilePicture ? (
                      <img
                        src={URL.createObjectURL(profileData.profilePicture)}
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      profileData.fullName.split(' ').map(n => n[0]).join('')
                    )}
                  </div>
                  {isEditing && (
                    <label className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 cursor-pointer">
                      <RiUploadCloud2Line className="w-4 h-4 text-white" />
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileUpload('profilePicture')}
                      />
                    </label>
                  )}
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{profileData.fullName}</h1>
                  <p className="text-gray-500">{profileData.specialization}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </button>
            </div>

            {/* Personal Information Section */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Full Name"
                  icon={RiUserLine}
                  value={profileData.fullName}
                  onChange={(e) => setProfileData(prev => ({ ...prev, fullName: e.target.value }))}
                  disabled={!isEditing}
                />
                <InputField
                  label="Email Address"
                  icon={RiMailLine}
                  value={profileData.email}
                  onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                  disabled={!isEditing}
                  type="email"
                />
                <InputField
                  label="Phone Number"
                  icon={RiPhoneLine}
                  value={profileData.phone}
                  onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                  disabled={!isEditing}
                  type="tel"
                />
                <InputField
                  label="Date of Birth"
                  icon={RiCalendarLine}
                  value={profileData.dateOfBirth}
                  onChange={(e) => setProfileData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                  disabled={!isEditing}
                  type="date"
                />
              </div>
            </section>

            {/* Professional Information Section */}
            <section className="mt-8 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">Professional Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Specialization"
                  icon={FaUserMd}
                  value={profileData.specialization}
                  onChange={(e) => setProfileData(prev => ({ ...prev, specialization: e.target.value }))}
                  disabled={!isEditing}
                />
                <InputField
                  label="Years of Experience"
                  icon={FaRegClock}
                  value={profileData.experience}
                  onChange={(e) => setProfileData(prev => ({ ...prev, experience: e.target.value }))}
                  disabled={!isEditing}
                  type="number"
                />
                <InputField
                  label="Medical Registration Number"
                  icon={RiHospitalLine}
                  value={profileData.registrationNumber}
                  onChange={(e) => setProfileData(prev => ({ ...prev, registrationNumber: e.target.value }))}
                  disabled={!isEditing}
                />
                <InputField
                  label="Hospital/Clinic Name"
                  icon={RiHospitalLine}
                  value={profileData.hospitalName}
                  onChange={(e) => setProfileData(prev => ({ ...prev, hospitalName: e.target.value }))}
                  disabled={!isEditing}
                />
              </div>
            </section>

            {/* Verification Section */}
            <section className="mt-8 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">Verification</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">ID Proof / Medical License</label>
                  <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                    <RiUploadCloud2Line className="w-5 h-5 text-blue-600" />
                    <input
                      type="file"
                      onChange={handleFileUpload('idProof')}
                      disabled={!isEditing}
                      className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                              file:rounded-full file:border-0 file:text-sm file:font-semibold
                              file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Verification Status</label>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      profileData.verificationStatus === 'Approved' ? 'bg-green-100 text-green-800' :
                      profileData.verificationStatus === 'Rejected' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {profileData.verificationStatus}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Account Information */}
            <section className="mt-8 space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">Account Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Role</label>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm">
                      {profileData.role}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Date Joined</label>
                  <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                    <FaRegCalendarAlt className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{profileData.dateJoined}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <button
                    type="button"
                    className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg w-full hover:bg-gray-100"
                    onClick={() => {/* TODO: Implement password change modal */}}
                  >
                    <RiLockPasswordLine className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-600">Change Password</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </form>
      </div>
    </main>
  );
}
