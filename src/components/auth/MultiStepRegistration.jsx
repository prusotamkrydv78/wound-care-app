'use client';

import { useState } from 'react';
import { MdArrowBack, MdArrowForward, MdCheck } from 'react-icons/md';

const MultiStepRegistration = ({ onSubmit, initialData = {} }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    gender: '',
    dateOfBirth: '',
    role: '',
    
    // Patient-specific fields
    address: '',
    city: '',
    state: '',
    zipCode: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    emergencyContactRelation: '',
    insuranceProvider: '',
    insurancePolicyNumber: '',
    insuranceGroupNumber: '',
    primaryCarePhysician: '',
    medicalConditions: '',
    currentMedications: '',
    allergies: '',
    preferredHospital: '',
    
    // Doctor-specific fields
    specialization: '',
    licenseNumber: '',
    licenseState: '',
    npiNumber: '',
    deaNumber: '',
    medicalSchool: '',
    graduationYear: '',
    residencyProgram: '',
    fellowshipProgram: '',
    boardCertifications: '',
    hospitalAffiliations: '',
    yearsOfExperience: '',
    practiceType: '',
    
    // Consent and verification
    hipaaConsent: false,
    termsConsent: false,
    marketingConsent: false,
    ...initialData
  });

  const steps = [
    { id: 1, title: 'Basic Info', description: 'Personal details' },
    { id: 2, title: 'Role Selection', description: 'Choose your role' },
    { id: 3, title: 'Professional Info', description: 'Role-specific details' },
    { id: 4, title: 'Verification', description: 'Consent & verification' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 
            ${currentStep >= step.id 
              ? 'bg-[#6B7AFF] border-[#6B7AFF] text-white' 
              : 'border-[#DDE1EC] text-gray-400'}`}>
            {currentStep > step.id ? (
              <MdCheck className="w-5 h-5" />
            ) : (
              <span className="text-sm font-medium">{step.id}</span>
            )}
          </div>
          {index < steps.length - 1 && (
            <div className={`w-16 h-0.5 mx-2 
              ${currentStep > step.id ? 'bg-[#6B7AFF]' : 'bg-[#DDE1EC]'}`} />
          )}
        </div>
      ))}
    </div>
  );

  const renderBasicInfo = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10 
                     transition-all text-gray-900"
            placeholder="John Doe"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10 
                     transition-all text-gray-900"
            placeholder="professional@company.com"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10 
                     transition-all text-gray-900"
            placeholder="(123) 456-7890"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10 
                     transition-all text-gray-900"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10 
                     transition-all text-gray-900"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10 
                     transition-all text-gray-900"
            placeholder="••••••••"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password *</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC] 
                     bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10 
                     transition-all text-gray-900"
            placeholder="••••••••"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderRoleSelection = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose Your Role</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div 
          className={`p-6 rounded-xl border-2 cursor-pointer transition-all
            ${formData.role === 'patient' 
              ? 'border-[#6B7AFF] bg-[#6B7AFF]/5' 
              : 'border-[#DDE1EC] hover:border-[#6B7AFF]/50'}`}
          onClick={() => setFormData(prev => ({ ...prev, role: 'patient' }))}
        >
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#56E0A0]/10 rounded-xl flex items-center justify-center">
              <span className="text-2xl">👤</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Patient</h4>
              <p className="text-sm text-gray-600">Access AI health assistance</p>
            </div>
          </div>
        </div>
        
        <div 
          className={`p-6 rounded-xl border-2 cursor-pointer transition-all
            ${formData.role === 'doctor' 
              ? 'border-[#6B7AFF] bg-[#6B7AFF]/5' 
              : 'border-[#DDE1EC] hover:border-[#6B7AFF]/50'}`}
          onClick={() => setFormData(prev => ({ ...prev, role: 'doctor' }))}
        >
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#6B7AFF]/10 rounded-xl flex items-center justify-center">
              <span className="text-2xl">👨‍⚕️</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Healthcare Professional</h4>
              <p className="text-sm text-gray-600">Provide AI-enhanced care</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProfessionalInfo = () => {
    if (formData.role === 'patient') {
      return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Patient Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC]
                         bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10
                         transition-all text-gray-900"
                placeholder="123 Main Street"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC]
                         bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10
                         transition-all text-gray-900"
                placeholder="New York"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC]
                         bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10
                         transition-all text-gray-900"
                placeholder="NY"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact Name</label>
              <input
                type="text"
                name="emergencyContactName"
                value={formData.emergencyContactName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC]
                         bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10
                         transition-all text-gray-900"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact Phone</label>
              <input
                type="tel"
                name="emergencyContactPhone"
                value={formData.emergencyContactPhone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC]
                         bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10
                         transition-all text-gray-900"
                placeholder="(123) 456-7890"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Provider</label>
              <input
                type="text"
                name="insuranceProvider"
                value={formData.insuranceProvider}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC]
                         bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10
                         transition-all text-gray-900"
                placeholder="Blue Cross Blue Shield"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Policy Number</label>
              <input
                type="text"
                name="insurancePolicyNumber"
                value={formData.insurancePolicyNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC]
                         bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10
                         transition-all text-gray-900"
                placeholder="ABC123456789"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Medical Conditions</label>
              <textarea
                name="medicalConditions"
                value={formData.medicalConditions}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC]
                         bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10
                         transition-all text-gray-900"
                placeholder="List any current medical conditions..."
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Allergies</label>
              <textarea
                name="allergies"
                value={formData.allergies}
                onChange={handleInputChange}
                rows={2}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC]
                         bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10
                         transition-all text-gray-900"
                placeholder="List any known allergies..."
              />
            </div>
          </div>
        </div>
      );
    } else if (formData.role === 'doctor') {
      return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Medical Specialization *</label>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC]
                         bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10
                         transition-all text-gray-900"
                required
              >
                <option value="">Select Specialization</option>
                <option value="family-medicine">Family Medicine</option>
                <option value="internal-medicine">Internal Medicine</option>
                <option value="cardiology">Cardiology</option>
                <option value="dermatology">Dermatology</option>
                <option value="emergency-medicine">Emergency Medicine</option>
                <option value="orthopedics">Orthopedics</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="psychiatry">Psychiatry</option>
                <option value="surgery">Surgery</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience *</label>
              <select
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC]
                         bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10
                         transition-all text-gray-900"
                required
              >
                <option value="">Select Experience</option>
                <option value="0-2">0-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="11-15">11-15 years</option>
                <option value="16-20">16-20 years</option>
                <option value="20+">20+ years</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">License Number *</label>
              <input
                type="text"
                name="licenseNumber"
                value={formData.licenseNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC]
                         bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10
                         transition-all text-gray-900"
                placeholder="MD123456"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">License State *</label>
              <input
                type="text"
                name="licenseState"
                value={formData.licenseState}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC]
                         bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10
                         transition-all text-gray-900"
                placeholder="CA"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">NPI Number</label>
              <input
                type="text"
                name="npiNumber"
                value={formData.npiNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC]
                         bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10
                         transition-all text-gray-900"
                placeholder="1234567890"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Medical School</label>
              <input
                type="text"
                name="medicalSchool"
                value={formData.medicalSchool}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC]
                         bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10
                         transition-all text-gray-900"
                placeholder="Harvard Medical School"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Hospital Affiliations</label>
              <textarea
                name="hospitalAffiliations"
                value={formData.hospitalAffiliations}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#DDE1EC]
                         bg-white focus:border-[#6B7AFF] focus:ring-4 focus:ring-[#6B7AFF]/10
                         transition-all text-gray-900"
                placeholder="List your hospital affiliations..."
              />
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const renderVerification = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Consent & Verification</h3>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            name="termsConsent"
            checked={formData.termsConsent}
            onChange={handleInputChange}
            className="mt-1 w-5 h-5 text-[#6B7AFF] border-2 border-[#DDE1EC] rounded
                     focus:ring-[#6B7AFF] focus:ring-2"
            required
          />
          <div>
            <label className="text-sm font-medium text-gray-900">
              Terms of Service & Privacy Policy *
            </label>
            <p className="text-sm text-gray-600">
              I agree to the Terms of Service and Privacy Policy
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            name="hipaaConsent"
            checked={formData.hipaaConsent}
            onChange={handleInputChange}
            className="mt-1 w-5 h-5 text-[#6B7AFF] border-2 border-[#DDE1EC] rounded
                     focus:ring-[#6B7AFF] focus:ring-2"
            required
          />
          <div>
            <label className="text-sm font-medium text-gray-900">
              HIPAA Authorization *
            </label>
            <p className="text-sm text-gray-600">
              I authorize the use and disclosure of my health information for treatment, payment, and healthcare operations
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            name="marketingConsent"
            checked={formData.marketingConsent}
            onChange={handleInputChange}
            className="mt-1 w-5 h-5 text-[#6B7AFF] border-2 border-[#DDE1EC] rounded
                     focus:ring-[#6B7AFF] focus:ring-2"
          />
          <div>
            <label className="text-sm font-medium text-gray-900">
              Marketing Communications
            </label>
            <p className="text-sm text-gray-600">
              I would like to receive updates about new features and services (optional)
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F8F9FF] border border-[#DDE1EC] rounded-xl p-4">
        <h4 className="font-medium text-gray-900 mb-2">Next Steps</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Email verification will be sent to your registered email</li>
          {formData.role === 'doctor' && (
            <>
              <li>• Professional credentials will be verified within 24-48 hours</li>
              <li>• You'll receive access once verification is complete</li>
            </>
          )}
          <li>• You can start using basic features immediately</li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      {renderStepIndicator()}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {currentStep === 1 && renderBasicInfo()}
        {currentStep === 2 && renderRoleSelection()}
        {currentStep === 3 && renderProfessionalInfo()}
        {currentStep === 4 && renderVerification()}
        
        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all
              ${currentStep === 1 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
          >
            <MdArrowBack className="w-5 h-5" />
            Previous
          </button>
          
          {currentStep < steps.length ? (
            <button
              type="button"
              onClick={nextStep}
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl 
                       font-medium hover:bg-gray-800 transition-all"
            >
              Next
              <MdArrowForward className="w-5 h-5" />
            </button>
          ) : (
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-[#56E0A0] text-white rounded-xl 
                       font-medium hover:bg-[#56E0A0]/90 transition-all"
            >
              Complete Registration
              <MdCheck className="w-5 h-5" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepRegistration;
