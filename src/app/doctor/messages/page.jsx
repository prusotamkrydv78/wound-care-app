'use client';
import { useState } from 'react';
import { MdSearch, MdAdd, MdAttachFile, MdSend, MdEmergency, MdVideoCall, MdPhone, MdGroup, MdPriorityHigh, MdSchedule } from 'react-icons/md';
import { RiMessage2Line, RiUserLine, RiStethoscopeLine, RiNurseLine, RiTeamLine, RiHospitalLine, RiAlarmWarningLine } from 'react-icons/ri';

export default function ClinicalCommunicationHub() {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Enhanced conversation data with clinical context
  const conversations = [
    {
      id: 1,
      type: 'patient-communication',
      participant: {
        name: 'Sarah Connor',
        role: 'Patient',
        patientId: 'PT001',
        avatar: '/api/placeholder/40/40',
        status: 'online',
        condition: 'Diabetic Foot Ulcer'
      },
      lastMessage: {
        text: 'The wound seems more painful today. Should I be concerned?',
        timestamp: '2024-02-20T14:30:00Z',
        sender: 'patient',
        read: false,
        priority: 'high'
      },
      unreadCount: 2,
      priority: 'high',
      topic: 'Wound Assessment',
      alerts: ['Patient reports increased pain'],
      careTeam: ['Dr. Johnson', 'Nurse Jennifer']
    },
    {
      id: 2,
      type: 'specialist-consultation',
      participant: {
        name: 'Dr. Michael Wilson',
        role: 'Infectious Disease Specialist',
        department: 'Internal Medicine',
        avatar: '/api/placeholder/40/40',
        status: 'away',
        hospital: 'General Hospital'
      },
      lastMessage: {
        text: 'Culture results show MRSA. Recommend vancomycin protocol.',
        timestamp: '2024-02-20T13:15:00Z',
        sender: 'specialist',
        read: true,
        priority: 'urgent'
      },
      unreadCount: 0,
      priority: 'urgent',
      topic: 'Infection Consultation',
      alerts: ['MRSA positive culture'],
      caseId: 'WC001'
    },
    {
      id: 3,
      type: 'care-team',
      participant: {
        name: 'Wound Care Team',
        role: 'Multidisciplinary Team',
        members: ['Dr. Johnson', 'Nurse Jennifer', 'Nutritionist Sarah', 'Physical Therapist Mike'],
        avatar: '/api/placeholder/40/40',
        status: 'active'
      },
      lastMessage: {
        text: 'Weekly rounds scheduled for Thursday 3 PM. Please review patient cases.',
        timestamp: '2024-02-20T10:00:00Z',
        sender: 'team-lead',
        read: true,
        priority: 'normal'
      },
      unreadCount: 0,
      priority: 'normal',
      topic: 'Team Coordination',
      alerts: [],
      meetingScheduled: true
    },
    {
      id: 4,
      type: 'emergency-consultation',
      participant: {
        name: 'Emergency Department',
        role: 'Emergency Team',
        department: 'Emergency Medicine',
        avatar: '/api/placeholder/40/40',
        status: 'online'
      },
      lastMessage: {
        text: 'Patient John Smith presenting with wound dehiscence. Need immediate consultation.',
        timestamp: '2024-02-20T09:45:00Z',
        sender: 'emergency',
        read: false,
        priority: 'critical'
      },
      unreadCount: 1,
      priority: 'critical',
      topic: 'Emergency Consultation',
      alerts: ['Wound dehiscence', 'Immediate consultation needed'],
      patientId: 'PT002'
    },
    {
      id: 5,
      type: 'nurse-communication',
      participant: {
        name: 'Nurse Jennifer Smith',
        role: 'Wound Care Nurse',
        department: 'Wound Care Unit',
        avatar: '/api/placeholder/40/40',
        status: 'online',
        shift: 'Day Shift'
      },
      lastMessage: {
        text: 'Completed dressing changes for all patients. Maria Garcia ready for discharge.',
        timestamp: '2024-02-20T08:30:00Z',
        sender: 'nurse',
        read: true,
        priority: 'normal'
      },
      unreadCount: 0,
      priority: 'normal',
      topic: 'Patient Updates',
      alerts: [],
      patientsInvolved: ['PT001', 'PT002', 'PT003']
    }
  ];

  // Message categories for filtering
  const categories = [
    { id: 'all', name: 'All Messages', count: conversations.length },
    { id: 'patient-communication', name: 'Patient Messages', count: conversations.filter(c => c.type === 'patient-communication').length },
    { id: 'specialist-consultation', name: 'Specialist Consults', count: conversations.filter(c => c.type === 'specialist-consultation').length },
    { id: 'care-team', name: 'Care Team', count: conversations.filter(c => c.type === 'care-team').length },
    { id: 'emergency-consultation', name: 'Emergency', count: conversations.filter(c => c.type === 'emergency-consultation').length }
  ];

  // Sample messages for selected conversation
  const currentMessages = selectedConversation ? [
    {
      id: 1,
      text: 'Good morning! How is your wound feeling today?',
      timestamp: '2024-02-20T09:00:00Z',
      sender: 'doctor',
      read: true,
      clinicalNote: true
    },
    {
      id: 2,
      text: 'It\'s been more painful since yesterday evening. The area around it feels warm.',
      timestamp: '2024-02-20T14:15:00Z',
      sender: 'patient',
      read: true,
      attachments: [
        { type: 'image', name: 'wound_photo_today.jpg', url: '/api/placeholder/200/150' }
      ]
    },
    {
      id: 3,
      text: 'Thank you for the photo. I can see some redness. Let\'s schedule an urgent appointment.',
      timestamp: '2024-02-20T14:30:00Z',
      sender: 'doctor',
      read: true,
      actionItems: ['Schedule urgent appointment', 'Consider antibiotic therapy']
    }
  ] : [];

  // Helper functions
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'border-l-[#FF5656] bg-[#FF5656]/5';
      case 'urgent': return 'border-l-[#FFE27A] bg-[#FFE27A]/5';
      case 'high': return 'border-l-[#FF8A65] bg-[#FF8A65]/5';
      case 'normal': return 'border-l-[#5698FF] bg-[#5698FF]/5';
      default: return 'border-l-[#DDE1EC] bg-white';
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'critical': return 'bg-[#FF5656]/10 text-[#FF5656]';
      case 'urgent': return 'bg-[#FFE27A]/10 text-[#FFE27A]';
      case 'high': return 'bg-[#FF8A65]/10 text-[#FF8A65]';
      case 'normal': return 'bg-[#5698FF]/10 text-[#5698FF]';
      default: return 'bg-[#DDE1EC] text-[#8F96AA]';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-[#56E0A0]';
      case 'away': return 'bg-[#FFE27A]';
      case 'offline': return 'bg-[#DDE1EC]';
      default: return 'bg-[#DDE1EC]';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'patient-communication': return RiUserLine;
      case 'specialist-consultation': return RiStethoscopeLine;
      case 'care-team': return RiTeamLine;
      case 'emergency-consultation': return RiAlarmWarningLine;
      case 'nurse-communication': return RiNurseLine;
      default: return RiMessage2Line;
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now - date) / (1000 * 60 * 60);

    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  // Filter conversations
  const filteredConversations = conversations.filter(conversation => {
    const matchesSearch = conversation.participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         conversation.topic.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || conversation.type === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-8rem)]">
      <div className="flex h-full bg-white rounded-xl border border-[#DDE1EC] overflow-hidden">

        {/* Enhanced Sidebar */}
        <div className="w-1/3 border-r border-[#DDE1EC] flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-[#DDE1EC]">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-lg font-semibold text-[#1C243C]">Clinical Communications</h1>
              <div className="flex gap-2">
                <button className="p-2 bg-[#FF5656] text-white rounded-lg hover:bg-[#FF4444] transition-colors">
                  <MdEmergency className="w-4 h-4" />
                </button>
                <button className="p-2 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors">
                  <MdAdd className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Search */}
            <div className="relative mb-4">
              <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8F96AA] w-4 h-4" />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none text-sm"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
          </div>

          {/* Emergency Alert Banner */}
          <div className="p-3 bg-[#FF5656]/5 border-b border-[#FF5656]/20">
            <div className="flex items-center gap-2 text-[#FF5656]">
              <MdEmergency className="w-4 h-4" />
              <span className="text-sm font-medium">Emergency Line Active</span>
            </div>
            <p className="text-xs text-[#FF5656] mt-1">24/7 critical patient support</p>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conversation) => {
              const TypeIcon = getTypeIcon(conversation.type);
              return (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`p-4 border-b border-[#DDE1EC] cursor-pointer hover:bg-[#F8F9FF] transition-colors border-l-4 ${
                    getPriorityColor(conversation.priority)
                  } ${selectedConversation?.id === conversation.id ? 'bg-[#6B7AFF]/5 border-r-2 border-r-[#6B7AFF]' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <img
                        src={conversation.participant.avatar}
                        alt={conversation.participant.name}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(conversation.participant.status)}`}></div>
                      <div className="absolute -top-1 -left-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                        <TypeIcon className="w-2.5 h-2.5 text-[#6B7AFF]" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium text-[#1C243C] truncate">{conversation.participant.name}</h3>
                        <span className="text-xs text-[#8F96AA]">{formatTime(conversation.lastMessage.timestamp)}</span>
                      </div>

                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-xs text-[#8F96AA]">{conversation.participant.role}</p>
                        {conversation.participant.department && (
                          <span className="text-xs bg-[#6B7AFF]/10 text-[#6B7AFF] px-2 py-1 rounded-full">
                            {conversation.participant.department}
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-[#8F96AA] truncate mb-2">{conversation.lastMessage.text}</p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-[#6B7AFF]/10 text-[#6B7AFF] px-2 py-1 rounded-full">
                          {conversation.topic}
                        </span>
                        <div className="flex items-center gap-2">
                          {conversation.alerts.length > 0 && (
                            <div className="flex items-center gap-1">
                              <RiAlarmWarningLine className="w-3 h-3 text-[#FF5656]" />
                              <span className="text-xs text-[#FF5656]">{conversation.alerts.length}</span>
                            </div>
                          )}
                          {conversation.unreadCount > 0 && (
                            <span className="bg-[#6B7AFF] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                              {conversation.unreadCount}
                            </span>
                          )}
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityBadge(conversation.priority)}`}>
                            {conversation.priority}
                          </span>
                        </div>
                      </div>

                      {/* Clinical Context */}
                      {conversation.participant.condition && (
                        <div className="mt-2 p-2 bg-[#F8F9FF] rounded text-xs">
                          <span className="text-[#8F96AA]">Condition: </span>
                          <span className="text-[#1C243C] font-medium">{conversation.participant.condition}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedConversation ? (
            <>
              {/* Enhanced Chat Header */}
              <div className="p-4 border-b border-[#DDE1EC] bg-[#F8F9FF]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={selectedConversation.participant.avatar}
                        alt={selectedConversation.participant.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${getStatusColor(selectedConversation.participant.status)}`}></div>
                    </div>
                    <div>
                      <h2 className="font-semibold text-[#1C243C]">{selectedConversation.participant.name}</h2>
                      <p className="text-sm text-[#8F96AA]">{selectedConversation.participant.role}</p>
                      {selectedConversation.participant.department && (
                        <p className="text-xs text-[#6B7AFF]">{selectedConversation.participant.department}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {selectedConversation.type === 'patient-communication' && (
                      <button className="p-2 bg-white border border-[#DDE1EC] rounded-lg hover:bg-[#F8F9FF] transition-colors">
                        <MdSchedule className="w-4 h-4 text-[#8F96AA]" />
                      </button>
                    )}
                    <button className="p-2 bg-white border border-[#DDE1EC] rounded-lg hover:bg-[#F8F9FF] transition-colors">
                      <MdPhone className="w-4 h-4 text-[#8F96AA]" />
                    </button>
                    <button className="p-2 bg-white border border-[#DDE1EC] rounded-lg hover:bg-[#F8F9FF] transition-colors">
                      <MdVideoCall className="w-4 h-4 text-[#8F96AA]" />
                    </button>
                    {selectedConversation.type === 'care-team' && (
                      <button className="p-2 bg-white border border-[#DDE1EC] rounded-lg hover:bg-[#F8F9FF] transition-colors">
                        <MdGroup className="w-4 h-4 text-[#8F96AA]" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Clinical Context Bar */}
                <div className="mt-3 p-3 bg-white rounded-lg border border-[#DDE1EC]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-[#8F96AA]">Topic:</span>
                      <span className="font-medium text-[#1C243C]">{selectedConversation.topic}</span>
                      {selectedConversation.patientId && (
                        <>
                          <span className="text-[#8F96AA]">Patient ID:</span>
                          <span className="font-medium text-[#6B7AFF]">{selectedConversation.patientId}</span>
                        </>
                      )}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityBadge(selectedConversation.priority)}`}>
                      {selectedConversation.priority}
                    </span>
                  </div>

                  {selectedConversation.alerts.length > 0 && (
                    <div className="mt-2 p-2 bg-[#FF5656]/5 border border-[#FF5656]/20 rounded">
                      <div className="flex items-center gap-2 mb-1">
                        <RiAlarmWarningLine className="w-3 h-3 text-[#FF5656]" />
                        <span className="text-xs font-medium text-[#FF5656]">Active Alerts</span>
                      </div>
                      {selectedConversation.alerts.map((alert, index) => (
                        <p key={index} className="text-xs text-[#FF5656]">• {alert}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {currentMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'doctor' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                      message.sender === 'doctor'
                        ? 'bg-[#6B7AFF] text-white'
                        : message.sender === 'patient'
                        ? 'bg-[#F8F9FF] text-[#1C243C] border border-[#DDE1EC]'
                        : 'bg-[#56E0A0]/10 text-[#1C243C] border border-[#56E0A0]/20'
                    }`}>
                      <p className="text-sm">{message.text}</p>

                      {message.attachments && (
                        <div className="mt-2 space-y-2">
                          {message.attachments.map((attachment, index) => (
                            <div key={index} className="bg-white/10 rounded p-2">
                              {attachment.type === 'image' ? (
                                <img
                                  src={attachment.url}
                                  alt={attachment.name}
                                  className="max-w-full h-auto rounded"
                                />
                              ) : (
                                <div className="flex items-center gap-2">
                                  <MdAttachFile className="w-4 h-4" />
                                  <span className="text-xs">{attachment.name}</span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {message.actionItems && (
                        <div className="mt-2 p-2 bg-white/10 rounded">
                          <p className="text-xs font-medium mb-1">Action Items:</p>
                          {message.actionItems.map((item, index) => (
                            <p key={index} className="text-xs">• {item}</p>
                          ))}
                        </div>
                      )}

                      <p className="text-xs opacity-70 mt-2">{formatTime(message.timestamp)}</p>

                      {message.clinicalNote && (
                        <div className="mt-1 flex items-center gap-1">
                          <RiStethoscopeLine className="w-3 h-3" />
                          <span className="text-xs opacity-70">Clinical Note</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Message Input */}
              <div className="p-4 border-t border-[#DDE1EC]">
                {/* Quick Actions */}
                <div className="flex gap-2 mb-3">
                  <button className="px-3 py-1 bg-[#6B7AFF]/10 text-[#6B7AFF] rounded-full text-xs hover:bg-[#6B7AFF]/20 transition-colors">
                    Schedule Appointment
                  </button>
                  <button className="px-3 py-1 bg-[#8B6DFF]/10 text-[#8B6DFF] rounded-full text-xs hover:bg-[#8B6DFF]/20 transition-colors">
                    Request Consultation
                  </button>
                  <button className="px-3 py-1 bg-[#56E0A0]/10 text-[#56E0A0] rounded-full text-xs hover:bg-[#56E0A0]/20 transition-colors">
                    Add to Care Plan
                  </button>
                </div>

                <div className="flex items-end gap-3">
                  <button className="p-2 text-[#8F96AA] hover:text-[#6B7AFF] transition-colors">
                    <MdAttachFile className="w-5 h-5" />
                  </button>
                  <div className="flex-1">
                    <textarea
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type your clinical message..."
                      className="w-full p-3 border border-[#DDE1EC] rounded-lg resize-none focus:border-[#6B7AFF] focus:outline-none"
                      rows="2"
                    />
                  </div>
                  <button
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className={`p-3 rounded-lg transition-colors ${
                      newMessage.trim()
                        ? 'bg-[#6B7AFF] text-white hover:bg-[#506EFF]'
                        : 'bg-[#DDE1EC] text-[#8F96AA] cursor-not-allowed'
                    }`}
                  >
                    <MdSend className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            /* No Conversation Selected */
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <RiMessage2Line className="w-16 h-16 text-[#DDE1EC] mx-auto mb-4" />
                <h3 className="text-lg font-medium text-[#1C243C] mb-2">Select a conversation</h3>
                <p className="text-[#8F96AA]">Choose a conversation from the sidebar to start clinical communication</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
