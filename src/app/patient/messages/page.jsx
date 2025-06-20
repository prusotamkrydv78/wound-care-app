'use client';
import { useState } from 'react';
import { MdSearch, MdAdd, MdAttachFile, MdSend, MdEmergency, MdVideoCall, MdPhone } from 'react-icons/md';
import { RiMessage2Line, RiUserLine, RiStethoscopeLine, RiNurseLine } from 'react-icons/ri';

export default function PatientMessages() {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const conversations = [
    {
      id: 1,
      participant: {
        name: 'Dr. Sarah Johnson',
        role: 'Wound Care Specialist',
        avatar: '/api/placeholder/40/40',
        status: 'online',
        responseTime: 'Usually responds within 2 hours'
      },
      lastMessage: {
        text: 'Your wound is healing well. Continue current treatment.',
        timestamp: '2024-02-07T14:30:00Z',
        sender: 'provider',
        read: true
      },
      unreadCount: 0,
      priority: 'normal',
      topic: 'Treatment Progress'
    },
    {
      id: 2,
      participant: {
        name: 'Nurse Mary Williams',
        role: 'Wound Care Nurse',
        avatar: '/api/placeholder/40/40',
        status: 'away',
        responseTime: 'Usually responds within 1 hour'
      },
      lastMessage: {
        text: 'Please upload today\'s photo when you have a chance.',
        timestamp: '2024-02-07T10:15:00Z',
        sender: 'provider',
        read: false
      },
      unreadCount: 2,
      priority: 'normal',
      topic: 'Photo Documentation'
    },
    {
      id: 3,
      participant: {
        name: 'Dr. Michael Chen',
        role: 'Plastic Surgeon',
        avatar: '/api/placeholder/40/40',
        status: 'offline',
        responseTime: 'Usually responds within 4 hours'
      },
      lastMessage: {
        text: 'Thank you for the update. See you at next appointment.',
        timestamp: '2024-02-06T16:45:00Z',
        sender: 'patient',
        read: true
      },
      unreadCount: 0,
      priority: 'normal',
      topic: 'Appointment Follow-up'
    }
  ];

  const currentMessages = selectedConversation ? [
    {
      id: 1,
      text: 'Hi Dr. Johnson, I wanted to update you on my wound progress.',
      timestamp: '2024-02-07T13:00:00Z',
      sender: 'patient',
      read: true
    },
    {
      id: 2,
      text: 'Thank you for the update! I can see from your recent photos that the healing is progressing well.',
      timestamp: '2024-02-07T14:15:00Z',
      sender: 'provider',
      read: true
    },
    {
      id: 3,
      text: 'Your wound is healing well. Continue current treatment and keep taking daily photos.',
      timestamp: '2024-02-07T14:30:00Z',
      sender: 'provider',
      read: true
    },
    {
      id: 4,
      text: 'Should I be concerned about the slight redness around the edges?',
      timestamp: '2024-02-07T15:00:00Z',
      sender: 'patient',
      read: true,
      attachments: [
        { type: 'image', name: 'wound_photo_today.jpg', url: '/api/placeholder/200/150' }
      ]
    }
  ] : [];

  const careTeam = [
    {
      id: 'dr-johnson',
      name: 'Dr. Sarah Johnson',
      role: 'Wound Care Specialist',
      avatar: '/api/placeholder/60/60',
      status: 'online',
      specialties: ['Chronic Wounds', 'Diabetic Ulcers'],
      phone: '+1 (555) 123-4567',
      email: 'sarah.johnson@hospital.com'
    },
    {
      id: 'nurse-mary',
      name: 'Nurse Mary Williams',
      role: 'Wound Care Nurse',
      avatar: '/api/placeholder/60/60',
      status: 'away',
      specialties: ['Wound Assessment', 'Patient Education'],
      phone: '+1 (555) 123-4568',
      email: 'mary.williams@hospital.com'
    },
    {
      id: 'dr-chen',
      name: 'Dr. Michael Chen',
      role: 'Plastic Surgeon',
      avatar: '/api/placeholder/60/60',
      status: 'offline',
      specialties: ['Reconstructive Surgery', 'Scar Management'],
      phone: '+1 (555) 123-4569',
      email: 'michael.chen@hospital.com'
    }
  ];

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

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-[#56E0A0]';
      case 'away': return 'bg-[#FFE27A]';
      case 'offline': return 'bg-[#DDE1EC]';
      default: return 'bg-[#DDE1EC]';
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage('');
    }
  };

  const filteredConversations = conversations.filter(conv =>
    conv.participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-8rem)]">
      <div className="flex h-full bg-white rounded-xl border border-[#DDE1EC] overflow-hidden">
        
        {/* Sidebar */}
        <div className="w-1/3 border-r border-[#DDE1EC] flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-[#DDE1EC]">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-lg font-semibold text-[#1C243C]">Messages</h1>
              <button className="p-2 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors">
                <MdAdd className="w-4 h-4" />
              </button>
            </div>
            
            {/* Search */}
            <div className="relative">
              <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8F96AA] w-4 h-4" />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
              />
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="p-4 bg-red-50 border-b border-red-200">
            <button className="w-full flex items-center gap-3 p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              <MdEmergency className="w-5 h-5" />
              <div className="text-left">
                <div className="font-medium">Emergency Contact</div>
                <div className="text-xs opacity-90">24/7 urgent care line</div>
              </div>
            </button>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation)}
                className={`p-4 border-b border-[#DDE1EC] cursor-pointer hover:bg-[#F8F9FF] transition-colors ${
                  selectedConversation?.id === conversation.id ? 'bg-[#6B7AFF]/5 border-r-2 border-r-[#6B7AFF]' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <img
                      src={conversation.participant.avatar}
                      alt={conversation.participant.name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(conversation.participant.status)}`}></div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium text-[#1C243C] truncate">{conversation.participant.name}</h3>
                      <span className="text-xs text-[#8F96AA]">{formatTime(conversation.lastMessage.timestamp)}</span>
                    </div>
                    <p className="text-xs text-[#8F96AA] mb-1">{conversation.participant.role}</p>
                    <p className="text-sm text-[#8F96AA] truncate">{conversation.lastMessage.text}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-[#6B7AFF] bg-[#6B7AFF]/10 px-2 py-1 rounded-full">
                        {conversation.topic}
                      </span>
                      {conversation.unreadCount > 0 && (
                        <span className="bg-[#6B7AFF] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {conversation.unreadCount}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
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
                      <p className="text-xs text-[#8F96AA]">{selectedConversation.participant.responseTime}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-white border border-[#DDE1EC] rounded-lg hover:bg-[#F8F9FF] transition-colors">
                      <MdPhone className="w-4 h-4 text-[#8F96AA]" />
                    </button>
                    <button className="p-2 bg-white border border-[#DDE1EC] rounded-lg hover:bg-[#F8F9FF] transition-colors">
                      <MdVideoCall className="w-4 h-4 text-[#8F96AA]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {currentMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'patient' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === 'patient'
                        ? 'bg-[#6B7AFF] text-white'
                        : 'bg-[#F8F9FF] text-[#1C243C]'
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
                      <p className="text-xs opacity-70 mt-1">{formatTime(message.timestamp)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-[#DDE1EC]">
                <div className="flex items-end gap-3">
                  <button className="p-2 text-[#8F96AA] hover:text-[#6B7AFF] transition-colors">
                    <MdAttachFile className="w-5 h-5" />
                  </button>
                  <div className="flex-1">
                    <textarea
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type your message..."
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
                <p className="text-[#8F96AA]">Choose a conversation from the sidebar to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
