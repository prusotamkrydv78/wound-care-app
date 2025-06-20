'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MdNotifications, MdCheckCircle, MdWarning, MdInfo, MdMessage, MdEmergency, MdSchedule, MdScience, MdGroup, MdFilterList, MdMarkAsUnread } from 'react-icons/md';
import { RiStethoscopeLine, RiUserHeartLine, RiAlarmWarningLine, RiTestTubeLine, RiMedicineBottleLine, RiTimeLine } from 'react-icons/ri';

export default function ClinicalNotifications() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedNotifications, setSelectedNotifications] = useState(new Set());

  // Enhanced clinical notifications with detailed context
  const notifications = [
    {
      id: 1,
      type: 'critical-alert',
      category: 'patient-safety',
      priority: 'critical',
      title: 'Critical Infection Alert - Sarah Connor',
      message: 'Patient PT001 showing signs of severe infection. Immediate intervention required.',
      details: 'Temperature 102.5°F, increased wound drainage, elevated WBC count',
      patientId: 'PT001',
      patientName: 'Sarah Connor',
      woundType: 'Diabetic Foot Ulcer',
      time: '5 minutes ago',
      timestamp: '2024-02-20T14:55:00Z',
      icon: RiAlarmWarningLine,
      color: 'text-[#FF5656]',
      bgColor: 'bg-[#FF5656]/10',
      borderColor: 'border-[#FF5656]/20',
      isRead: false,
      actionRequired: true,
      actions: ['Review Patient', 'Contact Team', 'Emergency Protocol'],
      source: 'AI Monitoring System'
    },
    {
      id: 2,
      type: 'lab-results',
      category: 'clinical-data',
      priority: 'high',
      title: 'Lab Results Available - John Smith',
      message: 'Culture results show MRSA positive. Antibiotic adjustment recommended.',
      details: 'Wound culture: MRSA detected, Vancomycin sensitivity confirmed',
      patientId: 'PT002',
      patientName: 'John Smith',
      woundType: 'Pressure Ulcer',
      time: '15 minutes ago',
      timestamp: '2024-02-20T14:45:00Z',
      icon: RiTestTubeLine,
      color: 'text-[#FFE27A]',
      bgColor: 'bg-[#FFE27A]/10',
      borderColor: 'border-[#FFE27A]/20',
      isRead: false,
      actionRequired: true,
      actions: ['Review Results', 'Update Treatment', 'Notify Team'],
      source: 'Laboratory System'
    },
    {
      id: 3,
      type: 'appointment-reminder',
      category: 'scheduling',
      priority: 'normal',
      title: 'Upcoming Appointment - Maria Garcia',
      message: 'Patient scheduled for wound assessment in 30 minutes',
      details: 'Post-surgical follow-up, suture removal planned',
      patientId: 'PT003',
      patientName: 'Maria Garcia',
      woundType: 'Surgical Incision',
      time: '30 minutes ago',
      timestamp: '2024-02-20T14:30:00Z',
      icon: MdSchedule,
      color: 'text-[#5698FF]',
      bgColor: 'bg-[#5698FF]/10',
      borderColor: 'border-[#5698FF]/20',
      isRead: true,
      actionRequired: false,
      actions: ['View Appointment', 'Prepare Assessment'],
      source: 'Scheduling System'
    },
    {
      id: 4,
      type: 'team-message',
      category: 'communication',
      priority: 'normal',
      title: 'Message from Nurse Jennifer',
      message: 'Wound dressing change completed for PT001. Photos uploaded for review.',
      details: 'Dressing changed at 2:00 PM, patient tolerated well, minimal drainage noted',
      patientId: 'PT001',
      patientName: 'Sarah Connor',
      woundType: 'Diabetic Foot Ulcer',
      time: '1 hour ago',
      timestamp: '2024-02-20T14:00:00Z',
      icon: MdMessage,
      color: 'text-[#6B7AFF]',
      bgColor: 'bg-[#6B7AFF]/10',
      borderColor: 'border-[#6B7AFF]/20',
      isRead: true,
      actionRequired: false,
      actions: ['View Photos', 'Reply', 'Update Notes'],
      source: 'Care Team'
    },
    {
      id: 5,
      type: 'ai-insight',
      category: 'clinical-intelligence',
      priority: 'normal',
      title: 'AI Healing Prediction Update',
      message: 'Patient PT002 healing trajectory improved. Expected closure in 12 days.',
      details: 'AI analysis shows 15% improvement in healing rate based on latest assessment',
      patientId: 'PT002',
      patientName: 'John Smith',
      woundType: 'Pressure Ulcer',
      time: '2 hours ago',
      timestamp: '2024-02-20T13:00:00Z',
      icon: RiStethoscopeLine,
      color: 'text-[#56E0A0]',
      bgColor: 'bg-[#56E0A0]/10',
      borderColor: 'border-[#56E0A0]/20',
      isRead: false,
      actionRequired: false,
      actions: ['View Analysis', 'Update Plan'],
      source: 'AI Clinical Assistant'
    },
    {
      id: 6,
      type: 'medication-alert',
      category: 'medication',
      priority: 'high',
      title: 'Medication Interaction Alert',
      message: 'Potential drug interaction detected for PT001 new prescription',
      details: 'Vancomycin + Metformin interaction risk identified',
      patientId: 'PT001',
      patientName: 'Sarah Connor',
      woundType: 'Diabetic Foot Ulcer',
      time: '3 hours ago',
      timestamp: '2024-02-20T12:00:00Z',
      icon: RiMedicineBottleLine,
      color: 'text-[#FF8A65]',
      bgColor: 'bg-[#FF8A65]/10',
      borderColor: 'border-[#FF8A65]/20',
      isRead: true,
      actionRequired: true,
      actions: ['Review Medications', 'Consult Pharmacist', 'Adjust Dosage'],
      source: 'Pharmacy System'
    },
    {
      id: 7,
      type: 'system-update',
      category: 'system',
      priority: 'low',
      title: 'System Maintenance Scheduled',
      message: 'Planned maintenance window: Tonight 11 PM - 2 AM EST',
      details: 'EHR system will be unavailable during maintenance window',
      patientId: null,
      patientName: null,
      woundType: null,
      time: '4 hours ago',
      timestamp: '2024-02-20T11:00:00Z',
      icon: MdInfo,
      color: 'text-[#8F96AA]',
      bgColor: 'bg-[#8F96AA]/10',
      borderColor: 'border-[#8F96AA]/20',
      isRead: true,
      actionRequired: false,
      actions: ['View Details'],
      source: 'System Administrator'
    }
  ];

  // Filter options
  const filterOptions = [
    { id: 'all', name: 'All Notifications', count: notifications.length },
    { id: 'unread', name: 'Unread', count: notifications.filter(n => !n.isRead).length },
    { id: 'critical', name: 'Critical', count: notifications.filter(n => n.priority === 'critical').length },
    { id: 'patient-safety', name: 'Patient Safety', count: notifications.filter(n => n.category === 'patient-safety').length },
    { id: 'clinical-data', name: 'Clinical Data', count: notifications.filter(n => n.category === 'clinical-data').length },
    { id: 'communication', name: 'Team Messages', count: notifications.filter(n => n.category === 'communication').length }
  ];

  // Helper functions
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'bg-[#FF5656] text-white';
      case 'high': return 'bg-[#FFE27A] text-[#1C243C]';
      case 'normal': return 'bg-[#5698FF] text-white';
      case 'low': return 'bg-[#DDE1EC] text-[#8F96AA]';
      default: return 'bg-[#DDE1EC] text-[#8F96AA]';
    }
  };

  const toggleNotificationSelection = (notificationId) => {
    const newSelection = new Set(selectedNotifications);
    if (newSelection.has(notificationId)) {
      newSelection.delete(notificationId);
    } else {
      newSelection.add(notificationId);
    }
    setSelectedNotifications(newSelection);
  };

  const markAsRead = (notificationIds) => {
    // Implementation for marking notifications as read
    console.log('Marking as read:', notificationIds);
  };

  const deleteNotifications = (notificationIds) => {
    // Implementation for deleting notifications
    console.log('Deleting notifications:', notificationIds);
  };

  // Filter notifications
  const filteredNotifications = notifications.filter(notification => {
    switch (selectedFilter) {
      case 'unread': return !notification.isRead;
      case 'critical': return notification.priority === 'critical';
      case 'patient-safety': return notification.category === 'patient-safety';
      case 'clinical-data': return notification.category === 'clinical-data';
      case 'communication': return notification.category === 'communication';
      default: return true;
    }
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Enhanced Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1C243C]">Clinical Notifications</h1>
          <p className="text-[#8F96AA] mt-1">
            {filteredNotifications.length} notifications • {filteredNotifications.filter(n => !n.isRead).length} unread
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
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

          {selectedNotifications.size > 0 && (
            <>
              <button
                onClick={() => markAsRead(Array.from(selectedNotifications))}
                className="px-4 py-2 text-sm border border-[#DDE1EC] rounded-lg hover:bg-[#F8F9FF] transition-colors"
              >
                Mark as Read ({selectedNotifications.size})
              </button>
              <button
                onClick={() => deleteNotifications(Array.from(selectedNotifications))}
                className="px-4 py-2 text-sm bg-[#FF5656] text-white rounded-lg hover:bg-[#FF4444] transition-colors"
              >
                Delete ({selectedNotifications.size})
              </button>
            </>
          )}

          <button
            onClick={() => markAsRead(filteredNotifications.filter(n => !n.isRead).map(n => n.id))}
            className="px-4 py-2 text-sm border border-[#DDE1EC] rounded-lg hover:bg-[#F8F9FF] transition-colors"
          >
            Mark All Read
          </button>
        </div>
      </div>

      {/* Critical Alerts Banner */}
      {filteredNotifications.some(n => n.priority === 'critical' && !n.isRead) && (
        <div className="bg-[#FF5656]/5 border border-[#FF5656]/20 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <RiAlarmWarningLine className="w-5 h-5 text-[#FF5656]" />
            <div>
              <h3 className="font-medium text-[#FF5656]">Critical Alerts Require Attention</h3>
              <p className="text-sm text-[#8F96AA]">
                {filteredNotifications.filter(n => n.priority === 'critical' && !n.isRead).length} critical notifications need immediate review
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Notifications List */}
      <div className="bg-white rounded-xl border border-[#DDE1EC] overflow-hidden">
        {filteredNotifications.length > 0 ? (
          <div className="divide-y divide-[#DDE1EC]">
            {filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 hover:bg-[#F8F9FF] transition-colors border-l-4 ${notification.borderColor} ${
                  !notification.isRead ? 'bg-[#F8F9FF]/50' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <input
                    type="checkbox"
                    checked={selectedNotifications.has(notification.id)}
                    onChange={() => toggleNotificationSelection(notification.id)}
                    className="w-4 h-4 rounded border-2 border-[#DDE1EC] text-[#6B7AFF] focus:ring-[#6B7AFF] mt-1"
                  />

                  <div className={`p-3 rounded-lg ${notification.bgColor} flex-shrink-0`}>
                    <notification.icon className={`w-5 h-5 ${notification.color}`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <h3 className={`font-semibold ${!notification.isRead ? 'text-[#1C243C]' : 'text-[#8F96AA]'}`}>
                          {notification.title}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(notification.priority)}`}>
                          {notification.priority}
                        </span>
                        {!notification.isRead && (
                          <div className="w-2 h-2 bg-[#6B7AFF] rounded-full"></div>
                        )}
                      </div>
                      <span className="text-sm text-[#8F96AA] flex-shrink-0">{notification.time}</span>
                    </div>

                    <p className={`mb-2 ${!notification.isRead ? 'text-[#1C243C]' : 'text-[#8F96AA]'}`}>
                      {notification.message}
                    </p>

                    {notification.details && (
                      <p className="text-sm text-[#8F96AA] mb-3 bg-[#F8F9FF] p-2 rounded">
                        {notification.details}
                      </p>
                    )}

                    {notification.patientId && (
                      <div className="flex items-center gap-4 text-sm text-[#8F96AA] mb-3">
                        <span>Patient: {notification.patientName} ({notification.patientId})</span>
                        {notification.woundType && <span>• {notification.woundType}</span>}
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-[#8F96AA]">
                        <span>From: {notification.source}</span>
                        {notification.actionRequired && (
                          <span className="px-2 py-1 bg-[#FFE27A]/20 text-[#FFE27A] rounded-full">
                            Action Required
                          </span>
                        )}
                      </div>

                      {notification.actions && notification.actions.length > 0 && (
                        <div className="flex gap-2">
                          {notification.actions.slice(0, 2).map((action, index) => (
                            <button
                              key={index}
                              className="px-3 py-1 text-xs bg-[#6B7AFF] text-white rounded hover:bg-[#506EFF] transition-colors"
                            >
                              {action}
                            </button>
                          ))}
                          {notification.actions.length > 2 && (
                            <button className="px-3 py-1 text-xs border border-[#DDE1EC] rounded hover:bg-[#F8F9FF] transition-colors">
                              +{notification.actions.length - 2} more
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center">
            <MdNotifications className="w-16 h-16 text-[#DDE1EC] mx-auto mb-4" />
            <h3 className="text-lg font-medium text-[#1C243C] mb-2">No notifications found</h3>
            <p className="text-[#8F96AA]">
              {selectedFilter !== 'all'
                ? `No ${filterOptions.find(f => f.id === selectedFilter)?.name.toLowerCase()} notifications`
                : "You're all caught up!"
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
