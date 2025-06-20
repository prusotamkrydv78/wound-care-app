'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MdAdd, MdSearch, MdFilterList, MdEdit, MdSave, MdMic, MdMicOff, MdAssignment, MdDescription, MdMedication, MdScience } from 'react-icons/md';
import { RiStethoscopeLine, RiFileTextLine, RiMedicineBottleLine, RiTestTubeLine, RiUserHeartLine, RiTimeLine } from 'react-icons/ri';

export default function ClinicalDocumentationHub() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [showNewNoteModal, setShowNewNoteModal] = useState(false);

  // Enhanced clinical documentation data
  const clinicalDocuments = [
    {
      id: 'DOC001',
      type: 'assessment',
      title: 'Wound Assessment - Sarah Connor',
      patientId: 'PT001',
      patientName: 'Sarah Connor',
      template: 'Diabetic Foot Ulcer Assessment',
      status: 'draft',
      priority: 'urgent',
      createdDate: '2024-02-20T09:00:00Z',
      lastModified: '2024-02-20T14:30:00Z',
      author: 'Dr. Johnson',
      woundType: 'Diabetic Foot Ulcer',
      findings: 'Increased erythema, purulent discharge noted',
      recommendations: ['Start antibiotic therapy', 'Daily dressing changes', 'Urgent follow-up in 48h'],
      orders: ['Culture and sensitivity', 'CBC with differential', 'Vancomycin 1g IV q12h'],
      completionStatus: 75,
      requiresSignature: true,
      alerts: ['Critical findings', 'Infection suspected']
    },
    {
      id: 'DOC002',
      type: 'progress-note',
      title: 'Progress Note - John Smith',
      patientId: 'PT002',
      patientName: 'John Smith',
      template: 'Pressure Ulcer Progress Note',
      status: 'completed',
      priority: 'normal',
      createdDate: '2024-02-19T15:00:00Z',
      lastModified: '2024-02-19T15:45:00Z',
      author: 'Dr. Johnson',
      woundType: 'Pressure Ulcer',
      findings: 'Wound showing good granulation tissue formation',
      recommendations: ['Continue current dressing protocol', 'Physical therapy consultation'],
      orders: ['PT evaluation', 'Nutritionist consult'],
      completionStatus: 100,
      requiresSignature: false,
      alerts: []
    },
    {
      id: 'DOC003',
      type: 'discharge-summary',
      title: 'Discharge Summary - Maria Garcia',
      patientId: 'PT003',
      patientName: 'Maria Garcia',
      template: 'Post-Surgical Discharge Summary',
      status: 'pending-review',
      priority: 'normal',
      createdDate: '2024-02-20T11:00:00Z',
      lastModified: '2024-02-20T11:30:00Z',
      author: 'Dr. Johnson',
      woundType: 'Surgical Incision',
      findings: 'Excellent healing, no signs of infection',
      recommendations: ['Home care instructions', 'Follow-up in 2 weeks'],
      orders: ['Home health referral', 'Wound care supplies'],
      completionStatus: 90,
      requiresSignature: true,
      alerts: []
    }
  ];

  // Clinical templates
  const clinicalTemplates = [
    {
      id: 'template-1',
      name: 'Diabetic Foot Ulcer Assessment',
      category: 'assessment',
      sections: ['Chief Complaint', 'Physical Examination', 'Wound Assessment', 'Plan'],
      estimatedTime: '15 min',
      evidenceBased: true
    },
    {
      id: 'template-2',
      name: 'Pressure Injury Documentation',
      category: 'assessment',
      sections: ['Risk Assessment', 'Wound Staging', 'Treatment Plan', 'Prevention Measures'],
      estimatedTime: '12 min',
      evidenceBased: true
    },
    {
      id: 'template-3',
      name: 'Post-Surgical Progress Note',
      category: 'progress-note',
      sections: ['Surgical Site Assessment', 'Healing Progress', 'Complications', 'Discharge Planning'],
      estimatedTime: '10 min',
      evidenceBased: true
    },
    {
      id: 'template-4',
      name: 'Consultation Request',
      category: 'consultation',
      sections: ['Reason for Consult', 'Clinical History', 'Current Status', 'Specific Questions'],
      estimatedTime: '8 min',
      evidenceBased: false
    }
  ];

  // Order sets for common scenarios
  const orderSets = [
    {
      id: 'order-set-1',
      name: 'Diabetic Foot Infection Protocol',
      category: 'infection-management',
      orders: [
        { type: 'lab', name: 'Wound culture and sensitivity', urgent: true },
        { type: 'lab', name: 'CBC with differential', urgent: false },
        { type: 'medication', name: 'Vancomycin 1g IV q12h', urgent: true },
        { type: 'imaging', name: 'X-ray foot (rule out osteomyelitis)', urgent: false },
        { type: 'consult', name: 'Infectious disease consultation', urgent: false }
      ],
      evidenceBased: true,
      guidelines: 'IDSA Diabetic Foot Infection Guidelines 2023'
    },
    {
      id: 'order-set-2',
      name: 'Pressure Injury Management',
      category: 'wound-care',
      orders: [
        { type: 'nutrition', name: 'Nutritionist consultation', urgent: false },
        { type: 'therapy', name: 'Physical therapy evaluation', urgent: false },
        { type: 'supplies', name: 'Pressure redistribution mattress', urgent: true },
        { type: 'medication', name: 'Zinc sulfate 220mg daily', urgent: false }
      ],
      evidenceBased: true,
      guidelines: 'NPUAP/EPUAP Guidelines 2023'
    }
  ];

  // Filter options
  const filterOptions = [
    { id: 'all', name: 'All Documents', count: clinicalDocuments.length },
    { id: 'draft', name: 'Drafts', count: clinicalDocuments.filter(d => d.status === 'draft').length },
    { id: 'pending-review', name: 'Pending Review', count: clinicalDocuments.filter(d => d.status === 'pending-review').length },
    { id: 'urgent', name: 'Urgent', count: clinicalDocuments.filter(d => d.priority === 'urgent').length },
    { id: 'requires-signature', name: 'Needs Signature', count: clinicalDocuments.filter(d => d.requiresSignature).length }
  ];

  // Helper functions
  const getStatusColor = (status) => {
    switch (status) {
      case 'draft': return 'bg-[#FFE27A]/10 text-[#FFE27A]';
      case 'completed': return 'bg-[#56E0A0]/10 text-[#56E0A0]';
      case 'pending-review': return 'bg-[#5698FF]/10 text-[#5698FF]';
      case 'requires-signature': return 'bg-[#8B6DFF]/10 text-[#8B6DFF]';
      default: return 'bg-[#DDE1EC] text-[#8F96AA]';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return 'bg-[#FF5656]/10 text-[#FF5656]';
      case 'high': return 'bg-[#FFE27A]/10 text-[#FFE27A]';
      case 'normal': return 'bg-[#5698FF]/10 text-[#5698FF]';
      default: return 'bg-[#DDE1EC] text-[#8F96AA]';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'assessment': return RiStethoscopeLine;
      case 'progress-note': return RiFileTextLine;
      case 'discharge-summary': return RiUserHeartLine;
      case 'consultation': return RiTestTubeLine;
      default: return MdAssignment;
    }
  };

  // Filter documents
  const filteredDocuments = clinicalDocuments.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.patientId.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedCategory === 'all' ||
                         (selectedCategory === 'draft' && doc.status === 'draft') ||
                         (selectedCategory === 'pending-review' && doc.status === 'pending-review') ||
                         (selectedCategory === 'urgent' && doc.priority === 'urgent') ||
                         (selectedCategory === 'requires-signature' && doc.requiresSignature);
    
    return matchesSearch && matchesFilter;
  });

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Enhanced Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1C243C]">Clinical Documentation & Orders</h1>
          <p className="text-[#8F96AA] mt-1">
            {filteredDocuments.length} documents • {filteredDocuments.filter(d => d.status === 'draft').length} drafts pending
          </p>
        </div>
        
        <div className="flex gap-3 flex-wrap">
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8F96AA] w-4 h-4" />
            <input
              type="text"
              placeholder="Search documents, patients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-[#DDE1EC] rounded-lg w-64 focus:border-[#6B7AFF] focus:outline-none"
            />
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
          >
            {filterOptions.map(option => (
              <option key={option.id} value={option.id}>
                {option.name} ({option.count})
              </option>
            ))}
          </select>

          <button
            onClick={() => setIsRecording(!isRecording)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              isRecording 
                ? 'bg-[#FF5656] text-white hover:bg-[#FF4444]' 
                : 'border border-[#DDE1EC] text-[#8F96AA] hover:bg-[#F8F9FF]'
            }`}
          >
            {isRecording ? <MdMicOff className="w-4 h-4" /> : <MdMic className="w-4 h-4" />}
            {isRecording ? 'Stop Recording' : 'Voice Notes'}
          </button>

          <button
            onClick={() => setShowNewNoteModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
          >
            <MdAdd className="w-4 h-4" />
            New Document
          </button>
        </div>
      </div>

      {/* Quick Actions Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Clinical Templates */}
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
          <div className="flex items-center gap-2 mb-4">
            <MdAssignment className="w-5 h-5 text-[#6B7AFF]" />
            <h2 className="font-semibold text-[#1C243C]">Clinical Templates</h2>
          </div>
          <div className="space-y-3">
            {clinicalTemplates.slice(0, 3).map((template) => (
              <div key={template.id} className="p-3 bg-[#F8F9FF] rounded-lg hover:bg-[#6B7AFF]/5 transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-[#1C243C] text-sm">{template.name}</h3>
                  {template.evidenceBased && (
                    <span className="text-xs bg-[#56E0A0]/10 text-[#56E0A0] px-2 py-1 rounded-full">
                      Evidence-Based
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#8F96AA] mb-2">{template.estimatedTime} • {template.sections.length} sections</p>
                <div className="flex flex-wrap gap-1">
                  {template.sections.slice(0, 2).map((section, index) => (
                    <span key={index} className="text-xs bg-[#6B7AFF]/10 text-[#6B7AFF] px-2 py-1 rounded-full">
                      {section}
                    </span>
                  ))}
                  {template.sections.length > 2 && (
                    <span className="text-xs text-[#8F96AA]">+{template.sections.length - 2} more</span>
                  )}
                </div>
              </div>
            ))}
            <Link
              href="/doctor/documentation/templates"
              className="block text-center py-2 text-[#6B7AFF] hover:underline text-sm"
            >
              View All Templates
            </Link>
          </div>
        </div>

        {/* Order Sets */}
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
          <div className="flex items-center gap-2 mb-4">
            <MdMedication className="w-5 h-5 text-[#8B6DFF]" />
            <h2 className="font-semibold text-[#1C243C]">Order Sets</h2>
          </div>
          <div className="space-y-3">
            {orderSets.map((orderSet) => (
              <div key={orderSet.id} className="p-3 bg-[#F8F9FF] rounded-lg hover:bg-[#8B6DFF]/5 transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-[#1C243C] text-sm">{orderSet.name}</h3>
                  {orderSet.evidenceBased && (
                    <span className="text-xs bg-[#56E0A0]/10 text-[#56E0A0] px-2 py-1 rounded-full">
                      Evidence-Based
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#8F96AA] mb-2">{orderSet.orders.length} orders • {orderSet.category}</p>
                <div className="space-y-1">
                  {orderSet.orders.slice(0, 2).map((order, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${order.urgent ? 'bg-[#FF5656]' : 'bg-[#5698FF]'}`}></div>
                      <span className="text-xs text-[#1C243C]">{order.name}</span>
                    </div>
                  ))}
                  {orderSet.orders.length > 2 && (
                    <p className="text-xs text-[#8F96AA] ml-4">+{orderSet.orders.length - 2} more orders</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Voice Documentation */}
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
          <div className="flex items-center gap-2 mb-4">
            <MdMic className="w-5 h-5 text-[#56E0A0]" />
            <h2 className="font-semibold text-[#1C243C]">Voice Documentation</h2>
          </div>
          <div className="text-center">
            {isRecording ? (
              <div className="space-y-4">
                <div className="w-16 h-16 bg-[#FF5656]/10 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-8 h-8 bg-[#FF5656] rounded-full animate-pulse"></div>
                </div>
                <p className="text-sm text-[#FF5656] font-medium">Recording in progress...</p>
                <p className="text-xs text-[#8F96AA]">Speak clearly for best transcription</p>
                <button
                  onClick={() => setIsRecording(false)}
                  className="px-4 py-2 bg-[#FF5656] text-white rounded-lg hover:bg-[#FF4444] transition-colors"
                >
                  Stop Recording
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="w-16 h-16 bg-[#56E0A0]/10 rounded-full flex items-center justify-center mx-auto">
                  <MdMic className="w-8 h-8 text-[#56E0A0]" />
                </div>
                <p className="text-sm text-[#1C243C] font-medium">Voice-to-Text Ready</p>
                <p className="text-xs text-[#8F96AA]">Medical vocabulary optimized</p>
                <button
                  onClick={() => setIsRecording(true)}
                  className="px-4 py-2 bg-[#56E0A0] text-white rounded-lg hover:bg-[#4BD396] transition-colors"
                >
                  Start Recording
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Clinical Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDocuments.map((document) => {
          const TypeIcon = getTypeIcon(document.type);
          return (
            <div key={document.id} className="bg-white rounded-xl border border-[#DDE1EC] overflow-hidden hover:border-[#6B7AFF]/20 transition-all">
              {/* Document Header */}
              <div className="p-4 border-b border-[#DDE1EC]">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#6B7AFF]/10 rounded-lg flex items-center justify-center">
                      <TypeIcon className="w-5 h-5 text-[#6B7AFF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1C243C] text-sm">{document.title}</h3>
                      <p className="text-xs text-[#8F96AA]">{document.patientName} • {document.patientId}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(document.status)}`}>
                      {document.status.replace('-', ' ')}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(document.priority)}`}>
                      {document.priority}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#8F96AA]">
                  <span>Template: {document.template}</span>
                </div>
              </div>

              {/* Document Content Preview */}
              <div className="p-4 space-y-3">
                {/* Progress Bar */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#8F96AA]">Completion</span>
                    <span className="text-xs font-medium text-[#1C243C]">{document.completionStatus}%</span>
                  </div>
                  <div className="w-full bg-[#DDE1EC] rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        document.completionStatus >= 80 ? 'bg-[#56E0A0]' :
                        document.completionStatus >= 50 ? 'bg-[#5698FF]' :
                        'bg-[#FFE27A]'
                      }`}
                      style={{ width: `${document.completionStatus}%` }}
                    ></div>
                  </div>
                </div>

                {/* Clinical Findings */}
                <div>
                  <h4 className="text-xs font-medium text-[#1C243C] mb-1">Key Findings</h4>
                  <p className="text-xs text-[#8F96AA] line-clamp-2">{document.findings}</p>
                </div>

                {/* Recommendations */}
                <div>
                  <h4 className="text-xs font-medium text-[#1C243C] mb-1">Recommendations</h4>
                  <div className="space-y-1">
                    {document.recommendations.slice(0, 2).map((rec, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#6B7AFF] rounded-full"></div>
                        <span className="text-xs text-[#8F96AA]">{rec}</span>
                      </div>
                    ))}
                    {document.recommendations.length > 2 && (
                      <p className="text-xs text-[#8F96AA] ml-3.5">+{document.recommendations.length - 2} more</p>
                    )}
                  </div>
                </div>

                {/* Orders */}
                {document.orders.length > 0 && (
                  <div>
                    <h4 className="text-xs font-medium text-[#1C243C] mb-1">Orders</h4>
                    <div className="flex flex-wrap gap-1">
                      {document.orders.slice(0, 3).map((order, index) => (
                        <span key={index} className="text-xs bg-[#8B6DFF]/10 text-[#8B6DFF] px-2 py-1 rounded-full">
                          {order}
                        </span>
                      ))}
                      {document.orders.length > 3 && (
                        <span className="text-xs text-[#8F96AA]">+{document.orders.length - 3}</span>
                      )}
                    </div>
                  </div>
                )}

                {/* Alerts */}
                {document.alerts.length > 0 && (
                  <div className="p-2 bg-[#FF5656]/5 border border-[#FF5656]/20 rounded">
                    <div className="flex items-center gap-1 mb-1">
                      <MdAssignment className="w-3 h-3 text-[#FF5656]" />
                      <span className="text-xs font-medium text-[#FF5656]">Clinical Alerts</span>
                    </div>
                    {document.alerts.map((alert, index) => (
                      <p key={index} className="text-xs text-[#FF5656]">• {alert}</p>
                    ))}
                  </div>
                )}

                {/* Metadata */}
                <div className="pt-2 border-t border-[#DDE1EC]">
                  <div className="flex items-center justify-between text-xs text-[#8F96AA]">
                    <span>By {document.author}</span>
                    <span>{formatTime(document.lastModified)}</span>
                  </div>
                  {document.requiresSignature && (
                    <div className="mt-2 flex items-center gap-1">
                      <MdEdit className="w-3 h-3 text-[#8B6DFF]" />
                      <span className="text-xs text-[#8B6DFF] font-medium">Signature Required</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 border-t border-[#DDE1EC] bg-[#F8F9FF]">
                <div className="flex gap-2">
                  <Link
                    href={`/doctor/documentation/edit/${document.id}`}
                    className="flex-1 py-2 px-3 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors text-center text-sm"
                  >
                    {document.status === 'draft' ? 'Continue' : 'Edit'}
                  </Link>
                  {document.requiresSignature && (
                    <button className="py-2 px-3 bg-[#8B6DFF] text-white rounded-lg hover:bg-[#7A5BFF] transition-colors text-sm">
                      Sign
                    </button>
                  )}
                  <button className="py-2 px-3 border border-[#DDE1EC] text-[#8F96AA] rounded-lg hover:bg-white transition-colors">
                    <MdDescription className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredDocuments.length === 0 && (
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-12 text-center">
          <MdAssignment className="w-16 h-16 text-[#DDE1EC] mx-auto mb-4" />
          <h3 className="text-lg font-medium text-[#1C243C] mb-2">No documents found</h3>
          <p className="text-[#8F96AA] mb-6">
            {searchTerm || selectedCategory !== 'all'
              ? "Try adjusting your search terms or filters"
              : "Start by creating your first clinical document"
            }
          </p>
          {(!searchTerm && selectedCategory === 'all') && (
            <button
              onClick={() => setShowNewNoteModal(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
            >
              <MdAdd className="w-4 h-4" />
              Create First Document
            </button>
          )}
        </div>
      )}
    </div>
  );
}
