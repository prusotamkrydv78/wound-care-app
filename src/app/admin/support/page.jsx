'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  MdSearch, MdFilterList, MdMessage, MdCall, MdEmail, MdReport,
  MdPriorityHigh, MdCheckCircle, MdCancel, MdMoreVert, MdPersonAdd
} from 'react-icons/md';
import { 
  RiCustomerServiceLine, RiUserLine, RiTimeLine, RiAlarmWarningLine,
  RiQuestionLine, RiToolsLine, RiFileTextLine, RiEyeLine
} from 'react-icons/ri';

export default function SupportCenter() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTicket, setSelectedTicket] = useState(null);

  // Mock support ticket data
  const supportTickets = [
    {
      id: 'TKT001',
      title: 'Unable to upload wound photos',
      description: 'Patient reports error when trying to upload photos through mobile app',
      category: 'technical',
      priority: 'high',
      status: 'open',
      submittedBy: {
        name: 'John Smith',
        email: 'john.smith@email.com',
        role: 'patient',
        id: 'PAT001'
      },
      assignedTo: 'Support Agent 1',
      createdDate: '2024-02-20T10:30:00Z',
      lastUpdated: '2024-02-20T14:15:00Z',
      responses: 3,
      tags: ['mobile app', 'photo upload', 'technical issue'],
      escalated: false,
      satisfaction: null,
      
      conversation: [
        {
          id: 1,
          author: 'John Smith',
          role: 'user',
          message: 'I keep getting an error message when I try to upload photos of my wound. The app says "Upload failed" but doesn\'t give me any more details.',
          timestamp: '2024-02-20T10:30:00Z',
          attachments: ['error_screenshot.jpg']
        },
        {
          id: 2,
          author: 'Support Agent 1',
          role: 'support',
          message: 'Hi John, thank you for reporting this issue. Can you please tell me what type of device you\'re using and what version of the app you have installed?',
          timestamp: '2024-02-20T11:45:00Z',
          attachments: []
        },
        {
          id: 3,
          author: 'John Smith',
          role: 'user',
          message: 'I\'m using an iPhone 12 with iOS 17.2. The app version is 2.1.3.',
          timestamp: '2024-02-20T14:15:00Z',
          attachments: []
        }
      ]
    },
    {
      id: 'TKT002',
      title: 'Doctor verification documents rejected',
      description: 'Medical license verification was rejected, need clarification on requirements',
      category: 'account',
      priority: 'medium',
      status: 'in_progress',
      submittedBy: {
        name: 'Dr. Michael Wilson',
        email: 'michael.wilson@clinic.com',
        role: 'doctor',
        id: 'DOC001'
      },
      assignedTo: 'Support Agent 2',
      createdDate: '2024-02-19T16:20:00Z',
      lastUpdated: '2024-02-20T09:30:00Z',
      responses: 5,
      tags: ['verification', 'documents', 'doctor'],
      escalated: true,
      satisfaction: null,
      
      conversation: [
        {
          id: 1,
          author: 'Dr. Michael Wilson',
          role: 'user',
          message: 'My verification documents were rejected but I\'m not sure why. I uploaded my medical license, board certification, and ID as requested.',
          timestamp: '2024-02-19T16:20:00Z',
          attachments: []
        }
      ]
    },
    {
      id: 'TKT003',
      title: 'Feature request: Dark mode',
      description: 'Request to add dark mode option to the platform',
      category: 'feature_request',
      priority: 'low',
      status: 'closed',
      submittedBy: {
        name: 'Sarah Johnson',
        email: 'sarah.johnson@hospital.com',
        role: 'doctor',
        id: 'DOC002'
      },
      assignedTo: 'Product Team',
      createdDate: '2024-02-15T11:00:00Z',
      lastUpdated: '2024-02-18T15:45:00Z',
      responses: 2,
      tags: ['feature request', 'ui', 'dark mode'],
      escalated: false,
      satisfaction: 5,
      
      conversation: []
    },
    {
      id: 'TKT004',
      title: 'Critical: System login issues',
      description: 'Multiple users reporting inability to log into the platform',
      category: 'critical',
      priority: 'critical',
      status: 'escalated',
      submittedBy: {
        name: 'System Monitor',
        email: 'system@woundcare.com',
        role: 'system',
        id: 'SYS001'
      },
      assignedTo: 'Engineering Team',
      createdDate: '2024-02-20T08:15:00Z',
      lastUpdated: '2024-02-20T08:45:00Z',
      responses: 1,
      tags: ['critical', 'login', 'system'],
      escalated: true,
      satisfaction: null,
      
      conversation: []
    }
  ];

  // System logs data
  const systemLogs = [
    {
      id: 'LOG001',
      timestamp: '2024-02-20T15:30:00Z',
      level: 'error',
      service: 'Authentication',
      message: 'Failed login attempt from IP 192.168.1.100',
      details: 'User: john.smith@email.com, Reason: Invalid password'
    },
    {
      id: 'LOG002',
      timestamp: '2024-02-20T15:25:00Z',
      level: 'warning',
      service: 'File Upload',
      message: 'Large file upload detected',
      details: 'File size: 15MB, User: PAT001, Filename: wound_photo.jpg'
    },
    {
      id: 'LOG003',
      timestamp: '2024-02-20T15:20:00Z',
      level: 'info',
      service: 'User Management',
      message: 'New user registration',
      details: 'User: maria.garcia@email.com, Role: patient'
    }
  ];

  // Filter options
  const filterOptions = [
    { id: 'all', name: 'All Tickets', count: supportTickets.length },
    { id: 'open', name: 'Open', count: supportTickets.filter(t => t.status === 'open').length },
    { id: 'in_progress', name: 'In Progress', count: supportTickets.filter(t => t.status === 'in_progress').length },
    { id: 'escalated', name: 'Escalated', count: supportTickets.filter(t => t.status === 'escalated').length },
    { id: 'critical', name: 'Critical', count: supportTickets.filter(t => t.priority === 'critical').length }
  ];

  // Helper functions
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'bg-[#FF5656]/10 text-[#FF5656]';
      case 'high': return 'bg-[#FFE27A]/10 text-[#FFE27A]';
      case 'medium': return 'bg-[#5698FF]/10 text-[#5698FF]';
      case 'low': return 'bg-[#56E0A0]/10 text-[#56E0A0]';
      default: return 'bg-[#DDE1EC] text-[#8F96AA]';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return 'bg-[#FFE27A]/10 text-[#FFE27A]';
      case 'in_progress': return 'bg-[#5698FF]/10 text-[#5698FF]';
      case 'escalated': return 'bg-[#FF5656]/10 text-[#FF5656]';
      case 'closed': return 'bg-[#56E0A0]/10 text-[#56E0A0]';
      default: return 'bg-[#DDE1EC] text-[#8F96AA]';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'technical': return RiToolsLine;
      case 'account': return RiUserLine;
      case 'feature_request': return RiQuestionLine;
      case 'critical': return RiAlarmWarningLine;
      default: return RiCustomerServiceLine;
    }
  };

  const getLogLevelColor = (level) => {
    switch (level) {
      case 'error': return 'text-[#FF5656] bg-[#FF5656]/10';
      case 'warning': return 'text-[#FFE27A] bg-[#FFE27A]/10';
      case 'info': return 'text-[#5698FF] bg-[#5698FF]/10';
      default: return 'text-[#8F96AA] bg-[#DDE1EC]';
    }
  };

  // Filter tickets
  const filteredTickets = supportTickets.filter(ticket => {
    const matchesSearch = ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.submittedBy.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'all' ||
                         (selectedFilter === 'critical' && ticket.priority === 'critical') ||
                         ticket.status === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1C243C]">Support Center</h1>
          <p className="text-[#8F96AA] mt-1">
            {filteredTickets.length} tickets • {supportTickets.filter(t => t.status === 'open').length} open
          </p>
        </div>
        
        <div className="flex gap-3 flex-wrap">
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8F96AA] w-4 h-4" />
            <input
              type="text"
              placeholder="Search tickets..."
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

          <button className="flex items-center gap-2 px-4 py-2 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors">
            <MdPersonAdd className="w-4 h-4" />
            Impersonate User
          </button>
        </div>
      </div>

      {/* Support Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-[#DDE1EC] p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#FFE27A]/10 rounded-lg flex items-center justify-center">
              <RiCustomerServiceLine className="w-4 h-4 text-[#FFE27A]" />
            </div>
            <div>
              <p className="text-sm text-[#8F96AA]">Open Tickets</p>
              <p className="text-lg font-bold text-[#1C243C]">
                {supportTickets.filter(t => t.status === 'open').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#DDE1EC] p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#FF5656]/10 rounded-lg flex items-center justify-center">
              <RiAlarmWarningLine className="w-4 h-4 text-[#FF5656]" />
            </div>
            <div>
              <p className="text-sm text-[#8F96AA]">Critical Issues</p>
              <p className="text-lg font-bold text-[#1C243C]">
                {supportTickets.filter(t => t.priority === 'critical').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#DDE1EC] p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#5698FF]/10 rounded-lg flex items-center justify-center">
              <RiTimeLine className="w-4 h-4 text-[#5698FF]" />
            </div>
            <div>
              <p className="text-sm text-[#8F96AA]">Avg Response Time</p>
              <p className="text-lg font-bold text-[#1C243C]">2.5h</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#DDE1EC] p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#56E0A0]/10 rounded-lg flex items-center justify-center">
              <MdCheckCircle className="w-4 h-4 text-[#56E0A0]" />
            </div>
            <div>
              <p className="text-sm text-[#8F96AA]">Resolution Rate</p>
              <p className="text-lg font-bold text-[#1C243C]">94.2%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tickets List */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold text-[#1C243C]">Support Tickets</h2>
          
          {filteredTickets.map((ticket) => {
            const CategoryIcon = getCategoryIcon(ticket.category);
            return (
              <div key={ticket.id} className="bg-white rounded-xl border border-[#DDE1EC] p-6 hover:border-[#6B7AFF]/20 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#6B7AFF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CategoryIcon className="w-6 h-6 text-[#6B7AFF]" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-semibold text-[#1C243C]">{ticket.title}</h3>
                          {ticket.escalated && (
                            <span className="px-2 py-1 bg-[#FF5656]/10 text-[#FF5656] rounded-full text-xs font-medium">
                              Escalated
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-[#8F96AA] mb-2">{ticket.description}</p>
                        
                        <div className="flex items-center gap-4 text-xs text-[#8F96AA]">
                          <span>#{ticket.id}</span>
                          <span>By {ticket.submittedBy.name}</span>
                          <span>{new Date(ticket.createdDate).toLocaleDateString()}</span>
                          <span>{ticket.responses} responses</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2 ml-4">
                        <div className="flex gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                            {ticket.priority}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                            {ticket.status.replace('_', ' ')}
                          </span>
                        </div>
                        
                        <div className="flex gap-1">
                          <button className="p-2 text-[#6B7AFF] hover:bg-[#6B7AFF]/10 rounded transition-colors">
                            <RiEyeLine className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-[#56E0A0] hover:bg-[#56E0A0]/10 rounded transition-colors">
                            <MdMessage className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-[#8F96AA] hover:bg-[#8F96AA]/10 rounded transition-colors">
                            <MdMoreVert className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mt-3">
                      {ticket.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-[#F8F9FF] text-[#6B7AFF] rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* System Logs */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[#1C243C]">System Logs</h2>
          
          <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
            <div className="space-y-4">
              {systemLogs.map((log) => (
                <div key={log.id} className="border-b border-[#DDE1EC] last:border-b-0 pb-4 last:pb-0">
                  <div className="flex items-start gap-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getLogLevelColor(log.level)}`}>
                      {log.level}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-sm font-medium text-[#1C243C]">{log.service}</span>
                        <span className="text-xs text-[#8F96AA]">
                          {new Date(log.timestamp).toLocaleTimeString()}
                        </span>
                      </div>
                      <p className="text-sm text-[#8F96AA] mb-1">{log.message}</p>
                      <p className="text-xs text-[#8F96AA]">{log.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-[#DDE1EC]">
              <Link href="/admin/support/logs" className="text-sm text-[#6B7AFF] hover:text-[#506EFF]">
                View All Logs →
              </Link>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
            <h3 className="font-semibold text-[#1C243C] mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3 border border-[#DDE1EC] rounded-lg hover:bg-[#F8F9FF] transition-colors text-left">
                <MdPersonAdd className="w-4 h-4 text-[#6B7AFF]" />
                <span className="text-sm text-[#1C243C]">Impersonate User</span>
              </button>
              
              <button className="w-full flex items-center gap-3 p-3 border border-[#DDE1EC] rounded-lg hover:bg-[#F8F9FF] transition-colors text-left">
                <MdReport className="w-4 h-4 text-[#6B7AFF]" />
                <span className="text-sm text-[#1C243C]">Report System Issue</span>
              </button>
              
              <button className="w-full flex items-center gap-3 p-3 border border-[#DDE1EC] rounded-lg hover:bg-[#F8F9FF] transition-colors text-left">
                <RiFileTextLine className="w-4 h-4 text-[#6B7AFF]" />
                <span className="text-sm text-[#1C243C]">Generate Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Empty State */}
      {filteredTickets.length === 0 && (
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-12 text-center">
          <RiCustomerServiceLine className="w-16 h-16 text-[#DDE1EC] mx-auto mb-4" />
          <h3 className="text-lg font-medium text-[#1C243C] mb-2">No support tickets found</h3>
          <p className="text-[#8F96AA]">
            {searchTerm || selectedFilter !== 'all' 
              ? "Try adjusting your search terms or filters" 
              : "No support tickets have been submitted yet"
            }
          </p>
        </div>
      )}
    </div>
  );
}
