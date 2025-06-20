'use client';
import { useState } from 'react';
import {
  RiUserLine, RiMailLine, RiPhoneLine, RiHospitalLine,
  RiCalendarLine, RiUploadCloud2Line, RiStethoscopeLine,
  RiAwardLine, RiGraduationCapLine, RiTimeLine, RiBarChartLine
} from 'react-icons/ri';
import { MdVerified, MdWorkspacePremium, MdSchool, MdSecurity, MdAnalytics, MdEdit, MdSave } from 'react-icons/md';

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

export default function ClinicalProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const [profileData, setProfileData] = useState({
    // Personal Information
    fullName: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@hospital.com',
    phone: '(555) 123-4567',
    gender: 'Female',
    dateOfBirth: '1985-03-15',
    profilePicture: null,

    // Professional Information
    specialization: 'Advanced Wound Care Specialist',
    subspecialties: ['Diabetic Foot Care', 'Pressure Injury Management', 'Surgical Wound Care'],
    experience: '12',
    registrationNumber: 'MD789456',
    licenseNumber: 'WC-2024-001',
    npiNumber: '1234567890',
    deaNumber: 'BJ1234567',

    // Institution Information
    hospitalName: 'Metropolitan Medical Center',
    department: 'Wound Care & Hyperbaric Medicine',
    clinicAddress: '456 Healthcare Blvd, Medical District, NY 10001',
    workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    workingHours: '8:00 AM - 6:00 PM',

    // Certifications & Education
    medicalSchool: 'Harvard Medical School',
    residency: 'Internal Medicine - Johns Hopkins',
    fellowship: 'Wound Care & Hyperbaric Medicine - Mayo Clinic',
    boardCertifications: [
      'American Board of Internal Medicine',
      'American Board of Wound Management',
      'Undersea and Hyperbaric Medical Society'
    ],

    // Clinical Credentials
    certifications: [
      { name: 'Certified Wound Specialist (CWS)', issuer: 'American Board of Wound Management', expiry: '2025-12-31', status: 'active' },
      { name: 'Hyperbaric Medicine Certification', issuer: 'UHMS', expiry: '2026-06-30', status: 'active' },
      { name: 'Advanced Cardiac Life Support (ACLS)', issuer: 'AHA', expiry: '2025-08-15', status: 'active' }
    ],

    // Performance Metrics
    performanceMetrics: {
      patientSatisfactionScore: 4.9,
      healingSuccessRate: 94,
      averageHealingTime: 18,
      complicationRate: 2.1,
      totalPatientsManaged: 1247,
      cmeCreditsEarned: 45.5,
      publicationsCount: 8,
      presentationsCount: 12
    },

    // Research & Publications
    researchInterests: ['AI in Wound Care', 'Diabetic Foot Ulcer Prevention', 'Biofilm Management'],
    publications: [
      'Advanced Wound Assessment Using AI Technology (2024)',
      'Diabetic Foot Care: A Comprehensive Approach (2023)',
      'Biofilm Management in Chronic Wounds (2023)'
    ],

    // Professional Memberships
    professionalMemberships: [
      'American Professional Wound Care Association (APWCA)',
      'Wound Healing Society (WHS)',
      'Association for the Advancement of Wound Care (AAWC)',
      'International Association for Healthcare Communication & Marketing'
    ],

    // Verification & Compliance
    verificationStatus: 'Verified',
    backgroundCheckStatus: 'Cleared',
    malpracticeInsurance: 'Active - $2M Coverage',
    hipaaTrainingCompleted: true,
    lastCredentialingUpdate: '2024-01-15',

    // System Information
    role: 'Senior Wound Care Specialist',
    accessLevel: 'Advanced Clinical',
    lastLogin: '2024-02-20 08:30 AM',
    dateJoined: '2022-03-01',
    accountStatus: 'Active',

    // Files
    idProof: null,
    medicalLicense: null,
    cv: null,
    certificationDocuments: []
  });
  const handleSubmit = ()=>{

  }
  const  handleFileUpload = ()=>{

  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Enhanced Profile Header */}
      <div className="bg-white rounded-xl border border-[#DDE1EC] overflow-hidden">
        <div className="bg-gradient-to-r from-[#6B7AFF] to-[#8B6DFF] p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-2xl font-bold border-2 border-white/30">
                  {profileData.profilePicture ? (
                    <img
                      src={URL.createObjectURL(profileData.profilePicture)}
                      alt="Profile"
                      className="w-full h-full rounded-xl object-cover"
                    />
                  ) : (
                    profileData.fullName.split(' ').map(n => n[0]).join('')
                  )}
                </div>
                {isEditing && (
                  <label className="absolute -bottom-2 -right-2 bg-[#56E0A0] rounded-lg p-2 cursor-pointer hover:bg-[#4BD396] transition-colors">
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
                <h1 className="text-2xl font-bold mb-1">{profileData.fullName}</h1>
                <p className="text-white/90 mb-2">{profileData.specialization}</p>
                <div className="flex items-center gap-4 text-sm text-white/80">
                  <div className="flex items-center gap-1">
                    <RiHospitalLine className="w-4 h-4" />
                    <span>{profileData.hospitalName}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <RiTimeLine className="w-4 h-4" />
                    <span>{profileData.experience} years experience</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MdVerified className="w-4 h-4 text-[#56E0A0]" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                isEditing
                  ? 'bg-[#56E0A0] hover:bg-[#4BD396] text-white'
                  : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm'
              }`}
            >
              {isEditing ? <MdSave className="w-4 h-4" /> : <MdEdit className="w-4 h-4" />}
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </button>
          </div>
        </div>

        {/* Performance Metrics Bar */}
        <div className="p-6 border-b border-[#DDE1EC] bg-[#F8F9FF]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-[#56E0A0]/10 rounded-lg mx-auto mb-2">
                <RiBarChartLine className="w-6 h-6 text-[#56E0A0]" />
              </div>
              <p className="text-2xl font-bold text-[#1C243C]">{profileData.performanceMetrics.patientSatisfactionScore}</p>
              <p className="text-xs text-[#8F96AA]">Patient Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-[#6B7AFF]/10 rounded-lg mx-auto mb-2">
                <RiStethoscopeLine className="w-6 h-6 text-[#6B7AFF]" />
              </div>
              <p className="text-2xl font-bold text-[#1C243C]">{profileData.performanceMetrics.healingSuccessRate}%</p>
              <p className="text-xs text-[#8F96AA]">Healing Success Rate</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-[#8B6DFF]/10 rounded-lg mx-auto mb-2">
                <RiAwardLine className="w-6 h-6 text-[#8B6DFF]" />
              </div>
              <p className="text-2xl font-bold text-[#1C243C]">{profileData.performanceMetrics.totalPatientsManaged}</p>
              <p className="text-xs text-[#8F96AA]">Patients Managed</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-[#FFE27A]/10 rounded-lg mx-auto mb-2">
                <RiGraduationCapLine className="w-6 h-6 text-[#FFE27A]" />
              </div>
              <p className="text-2xl font-bold text-[#1C243C]">{profileData.performanceMetrics.cmeCreditsEarned}</p>
              <p className="text-xs text-[#8F96AA]">CME Credits</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#DDE1EC]">
          {[
            { id: 'personal', name: 'Personal Info', icon: RiUserLine },
            { id: 'professional', name: 'Professional', icon: RiStethoscopeLine },
            { id: 'credentials', name: 'Credentials', icon: MdWorkspacePremium },
            { id: 'performance', name: 'Performance', icon: MdAnalytics },
            { id: 'security', name: 'Security', icon: MdSecurity }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-[#6B7AFF] border-b-2 border-[#6B7AFF] bg-[#6B7AFF]/5'
                  : 'text-[#8F96AA] hover:text-[#1C243C] hover:bg-[#F8F9FF]'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
        {activeTab === 'personal' && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-[#1C243C] flex items-center gap-2">
              <RiUserLine className="w-5 h-5 text-[#6B7AFF]" />
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>
        )}

        {activeTab === 'professional' && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-[#1C243C] flex items-center gap-2">
              <RiStethoscopeLine className="w-5 h-5 text-[#6B7AFF]" />
              Professional Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Primary Specialization"
                icon={RiStethoscopeLine}
                value={profileData.specialization}
                onChange={(e) => setProfileData(prev => ({ ...prev, specialization: e.target.value }))}
                disabled={!isEditing}
              />
              <InputField
                label="Years of Experience"
                icon={RiTimeLine}
                value={profileData.experience}
                onChange={(e) => setProfileData(prev => ({ ...prev, experience: e.target.value }))}
                disabled={!isEditing}
                type="number"
              />
              <InputField
                label="Medical Registration Number"
                icon={MdWorkspacePremium}
                value={profileData.registrationNumber}
                onChange={(e) => setProfileData(prev => ({ ...prev, registrationNumber: e.target.value }))}
                disabled={!isEditing}
              />
              <InputField
                label="NPI Number"
                icon={MdWorkspacePremium}
                value={profileData.npiNumber}
                onChange={(e) => setProfileData(prev => ({ ...prev, npiNumber: e.target.value }))}
                disabled={!isEditing}
              />
              <InputField
                label="Hospital/Institution"
                icon={RiHospitalLine}
                value={profileData.hospitalName}
                onChange={(e) => setProfileData(prev => ({ ...prev, hospitalName: e.target.value }))}
                disabled={!isEditing}
              />
              <InputField
                label="Department"
                icon={RiHospitalLine}
                value={profileData.department}
                onChange={(e) => setProfileData(prev => ({ ...prev, department: e.target.value }))}
                disabled={!isEditing}
              />
            </div>

            {/* Subspecialties */}
            <div>
              <label className="block text-sm font-medium text-[#1C243C] mb-3">Subspecialties</label>
              <div className="flex flex-wrap gap-2">
                {profileData.subspecialties.map((specialty, index) => (
                  <span key={index} className="px-3 py-1 bg-[#6B7AFF]/10 text-[#6B7AFF] rounded-full text-sm">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Medical School"
                icon={RiGraduationCapLine}
                value={profileData.medicalSchool}
                onChange={(e) => setProfileData(prev => ({ ...prev, medicalSchool: e.target.value }))}
                disabled={!isEditing}
              />
              <InputField
                label="Residency"
                icon={RiGraduationCapLine}
                value={profileData.residency}
                onChange={(e) => setProfileData(prev => ({ ...prev, residency: e.target.value }))}
                disabled={!isEditing}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
