'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  MdSearch, MdFilterList, MdVisibility, MdCheckCircle, MdCancel,
  MdDownload, MdComment, MdHistory, MdVerifiedUser, MdWarning
} from 'react-icons/md';
import { 
  RiStethoscopeLine, RiFileTextLine, RiImageLine, RiCalendarLine,
  RiMapPinLine, RiGraduationCapLine, RiAwardLine, RiTimeLine
} from 'react-icons/ri';

export default function DoctorVerification() {
  const [selectedFilter, setSelectedFilter] = useState('pending');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Mock doctor verification data
  const doctorApplications = [
    {
      id: 'DOC001',
      name: 'Dr. Michael Wilson',
      email: 'michael.wilson@clinic.com',
      phone: '+1 (555) 345-6789',
      specialization: 'Infectious Disease',
      experience: '15 years',
      location: 'Chicago, IL',
      hospital: 'Chicago Medical Center',
      status: 'pending',
      submittedDate: '2024-02-18T10:00:00Z',
      reviewedBy: null,
      reviewDate: null,
      
      // Documents
      documents: {
        medicalLicense: {
          filename: 'medical_license.pdf',
          uploadDate: '2024-02-18T10:00:00Z',
          verified: false,
          notes: ''
        },
        boardCertification: {
          filename: 'board_cert.pdf',
          uploadDate: '2024-02-18T10:05:00Z',
          verified: false,
          notes: ''
        },
        governmentId: {
          filename: 'drivers_license.jpg',
          uploadDate: '2024-02-18T10:10:00Z',
          verified: false,
          notes: ''
        },
        cv: {
          filename: 'cv_michael_wilson.pdf',
          uploadDate: '2024-02-18T10:15:00Z',
          verified: false,
          notes: ''
        }
      },
      
      // Professional details
      professionalDetails: {
        licenseNumber: 'MD123456789',
        licenseState: 'Illinois',
        licenseExpiry: '2025-12-31',
        boardCertifications: ['Internal Medicine', 'Infectious Disease'],
        education: 'Harvard Medical School',
        residency: 'Johns Hopkins Hospital',
        fellowship: 'Mayo Clinic - Infectious Disease'
      },
      
      // Verification notes
      verificationNotes: [],
      riskFlags: ['New applicant', 'Out-of-state license']
    },
    {
      id: 'DOC002',
      name: 'Dr. Jennifer Martinez',
      email: 'jennifer.martinez@hospital.org',
      phone: '+1 (555) 456-7890',
      specialization: 'Wound Care Specialist',
      experience: '8 years',
      location: 'Phoenix, AZ',
      hospital: 'Phoenix General Hospital',
      status: 'under_review',
      submittedDate: '2024-02-15T14:30:00Z',
      reviewedBy: 'Admin User',
      reviewDate: '2024-02-19T09:00:00Z',
      
      documents: {
        medicalLicense: {
          filename: 'license_martinez.pdf',
          uploadDate: '2024-02-15T14:30:00Z',
          verified: true,
          notes: 'Valid license, expires 2026'
        },
        boardCertification: {
          filename: 'wound_care_cert.pdf',
          uploadDate: '2024-02-15T14:35:00Z',
          verified: true,
          notes: 'Certified by American Board of Wound Management'
        },
        governmentId: {
          filename: 'passport.jpg',
          uploadDate: '2024-02-15T14:40:00Z',
          verified: true,
          notes: 'Valid passport'
        },
        cv: {
          filename: 'cv_martinez.pdf',
          uploadDate: '2024-02-15T14:45:00Z',
          verified: false,
          notes: 'Need to verify employment history'
        }
      },
      
      professionalDetails: {
        licenseNumber: 'AZ987654321',
        licenseState: 'Arizona',
        licenseExpiry: '2026-06-30',
        boardCertifications: ['Wound Care', 'Plastic Surgery'],
        education: 'University of Arizona College of Medicine',
        residency: 'Mayo Clinic Arizona',
        fellowship: 'Cleveland Clinic - Wound Care'
      },
      
      verificationNotes: [
        {
          id: 1,
          author: 'Admin User',
          date: '2024-02-19T09:00:00Z',
          note: 'Medical license verified. Board certification confirmed.',
          type: 'verification'
        }
      ],
      riskFlags: []
    },
    {
      id: 'DOC003',
      name: 'Dr. Robert Chen',
      email: 'robert.chen@medical.edu',
      phone: '+1 (555) 567-8901',
      specialization: 'Dermatology',
      experience: '12 years',
      location: 'San Francisco, CA',
      hospital: 'UCSF Medical Center',
      status: 'approved',
      submittedDate: '2024-02-10T11:00:00Z',
      reviewedBy: 'Admin User',
      reviewDate: '2024-02-12T16:00:00Z',
      
      documents: {
        medicalLicense: {
          filename: 'ca_license.pdf',
          uploadDate: '2024-02-10T11:00:00Z',
          verified: true,
          notes: 'Valid California medical license'
        },
        boardCertification: {
          filename: 'dermatology_board.pdf',
          uploadDate: '2024-02-10T11:05:00Z',
          verified: true,
          notes: 'Board certified in Dermatology'
        },
        governmentId: {
          filename: 'ca_id.jpg',
          uploadDate: '2024-02-10T11:10:00Z',
          verified: true,
          notes: 'Valid California ID'
        },
        cv: {
          filename: 'cv_chen.pdf',
          uploadDate: '2024-02-10T11:15:00Z',
          verified: true,
          notes: 'Excellent credentials and experience'
        }
      },
      
      professionalDetails: {
        licenseNumber: 'CA456789123',
        licenseState: 'California',
        licenseExpiry: '2025-08-31',
        boardCertifications: ['Dermatology', 'Dermatopathology'],
        education: 'Stanford University School of Medicine',
        residency: 'UCSF Dermatology',
        fellowship: 'Memorial Sloan Kettering - Dermatopathology'
      },
      
      verificationNotes: [
        {
          id: 1,
          author: 'Admin User',
          date: '2024-02-12T16:00:00Z',
          note: 'All documents verified. Excellent credentials. Approved for platform access.',
          type: 'approval'
        }
      ],
      riskFlags: []
    }
  ];

  // Filter options
  const filterOptions = [
    { id: 'all', name: 'All Applications', count: doctorApplications.length },
    { id: 'pending', name: 'Pending Review', count: doctorApplications.filter(d => d.status === 'pending').length },
    { id: 'under_review', name: 'Under Review', count: doctorApplications.filter(d => d.status === 'under_review').length },
    { id: 'approved', name: 'Approved', count: doctorApplications.filter(d => d.status === 'approved').length },
    { id: 'rejected', name: 'Rejected', count: doctorApplications.filter(d => d.status === 'rejected').length }
  ];

  // Helper functions
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-[#FFE27A]/10 text-[#FFE27A]';
      case 'under_review': return 'bg-[#5698FF]/10 text-[#5698FF]';
      case 'approved': return 'bg-[#56E0A0]/10 text-[#56E0A0]';
      case 'rejected': return 'bg-[#FF5656]/10 text-[#FF5656]';
      default: return 'bg-[#DDE1EC] text-[#8F96AA]';
    }
  };

  const getDocumentStatus = (document) => {
    if (document.verified) return { color: 'text-[#56E0A0]', icon: MdCheckCircle };
    return { color: 'text-[#FFE27A]', icon: MdWarning };
  };

  // Filter applications
  const filteredApplications = doctorApplications.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'all' || doctor.status === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  const handleApprove = (doctorId) => {
    // Handle approval logic
    console.log('Approving doctor:', doctorId);
  };

  const handleReject = (doctorId) => {
    // Handle rejection logic
    console.log('Rejecting doctor:', doctorId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1C243C]">Doctor Verification</h1>
          <p className="text-[#8F96AA] mt-1">
            {filteredApplications.length} applications • {doctorApplications.filter(d => d.status === 'pending').length} pending review
          </p>
        </div>
        
        <div className="flex gap-3 flex-wrap">
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8F96AA] w-4 h-4" />
            <input
              type="text"
              placeholder="Search applications..."
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
        </div>
      </div>

      {/* Applications Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredApplications.map((doctor) => (
          <div key={doctor.id} className="bg-white rounded-xl border border-[#DDE1EC] overflow-hidden hover:border-[#6B7AFF]/20 transition-all">
            {/* Card Header */}
            <div className="p-6 border-b border-[#DDE1EC] bg-[#F8F9FF]">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#6B7AFF]/10 rounded-lg flex items-center justify-center">
                    <RiStethoscopeLine className="w-6 h-6 text-[#6B7AFF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C243C]">{doctor.name}</h3>
                    <p className="text-sm text-[#8F96AA]">{doctor.specialization}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(doctor.status)}`}>
                  {doctor.status.replace('_', ' ')}
                </span>
              </div>
              
              <div className="space-y-2 text-sm text-[#8F96AA]">
                <div className="flex items-center gap-2">
                  <RiMapPinLine className="w-4 h-4" />
                  <span>{doctor.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <RiCalendarLine className="w-4 h-4" />
                  <span>{doctor.experience} experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <RiTimeLine className="w-4 h-4" />
                  <span>Applied {new Date(doctor.submittedDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            {/* Documents Status */}
            <div className="p-6">
              <h4 className="font-medium text-[#1C243C] mb-3">Document Verification</h4>
              <div className="space-y-2">
                {Object.entries(doctor.documents).map(([key, doc]) => {
                  const status = getDocumentStatus(doc);
                  const StatusIcon = status.icon;
                  return (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-sm text-[#8F96AA] capitalize">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <div className="flex items-center gap-2">
                        <StatusIcon className={`w-4 h-4 ${status.color}`} />
                        <button className="text-xs text-[#6B7AFF] hover:text-[#506EFF]">
                          View
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Risk Flags */}
              {doctor.riskFlags.length > 0 && (
                <div className="mt-4 p-3 bg-[#FFE27A]/5 border border-[#FFE27A]/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <MdWarning className="w-4 h-4 text-[#FFE27A]" />
                    <span className="text-sm font-medium text-[#FFE27A]">Risk Flags</span>
                  </div>
                  {doctor.riskFlags.map((flag, index) => (
                    <p key={index} className="text-xs text-[#8F96AA]">• {flag}</p>
                  ))}
                </div>
              )}

              {/* Professional Details */}
              <div className="mt-4 p-3 bg-[#F8F9FF] rounded-lg">
                <h5 className="text-sm font-medium text-[#1C243C] mb-2">License Info</h5>
                <div className="space-y-1 text-xs text-[#8F96AA]">
                  <p>License: {doctor.professionalDetails.licenseNumber}</p>
                  <p>State: {doctor.professionalDetails.licenseState}</p>
                  <p>Expires: {new Date(doctor.professionalDetails.licenseExpiry).toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 border-t border-[#DDE1EC] bg-[#F8F9FF]">
              {doctor.status === 'pending' && (
                <div className="flex gap-2">
                  <button
                    onClick={() => handleApprove(doctor.id)}
                    className="flex-1 py-2 px-3 bg-[#56E0A0] text-white rounded-lg hover:bg-[#4BC993] transition-colors text-sm"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(doctor.id)}
                    className="flex-1 py-2 px-3 bg-[#FF5656] text-white rounded-lg hover:bg-[#E04545] transition-colors text-sm"
                  >
                    Reject
                  </button>
                </div>
              )}
              
              {doctor.status === 'under_review' && (
                <div className="flex gap-2">
                  <button className="flex-1 py-2 px-3 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors text-sm">
                    Continue Review
                  </button>
                  <button className="py-2 px-3 border border-[#DDE1EC] text-[#8F96AA] rounded-lg hover:bg-white transition-colors">
                    <MdComment className="w-4 h-4" />
                  </button>
                </div>
              )}
              
              {(doctor.status === 'approved' || doctor.status === 'rejected') && (
                <div className="flex gap-2">
                  <button className="flex-1 py-2 px-3 border border-[#DDE1EC] text-[#8F96AA] rounded-lg hover:bg-white transition-colors text-sm">
                    View Details
                  </button>
                  <button className="py-2 px-3 border border-[#DDE1EC] text-[#8F96AA] rounded-lg hover:bg-white transition-colors">
                    <MdHistory className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredApplications.length === 0 && (
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-12 text-center">
          <RiStethoscopeLine className="w-16 h-16 text-[#DDE1EC] mx-auto mb-4" />
          <h3 className="text-lg font-medium text-[#1C243C] mb-2">No applications found</h3>
          <p className="text-[#8F96AA]">
            {searchTerm || selectedFilter !== 'all' 
              ? "Try adjusting your search terms or filters" 
              : "No doctor verification applications submitted yet"
            }
          </p>
        </div>
      )}
    </div>
  );
}
