'use client';
import { useState } from 'react';
import { MdNotifications, MdSettings, MdMarkAsUnread, MdDelete, MdArchive, MdFilterList } from 'react-icons/md';
import { RiMedicineBottleLine, RiCalendarEventLine, RiMessage2Line, RiAlarmWarningLine, RiCameraLine, RiHeartPulseLine } from 'react-icons/ri';

export default function PatientNotifications() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedNotifications, setSelectedNotifications] = useState(new Set());
  const [showSettings, setShowSettings] = useState(false);

  const notificationCategories = [
    { id: 'all', name: 'All Notifications', count: 12 },
    { id: 'medical', name: 'Medical Alerts', count: 3 },
    { id: 'appointments', name: 'Appointments', count: 2 },
    { id: 'medications', name: 'Medications', count: 4 },
    { id: 'messages', name: 'Messages', count: 2 },
    { id: 'reminders', name: 'Care Reminders', count: 1 }
  ];

  const notifications = [
    {
      id: 1,
      category: 'medical',
      type: 'alert',
      title: 'Wound Assessment Due',
      message: 'Your weekly wound assessment is due today. Please upload a new photo.',
      timestamp: '2024-02-07T09:00:00Z',
      priority: 'high',
      read: false,
      icon: RiAlarmWarningLine,
      actionRequired: true,
      actions: [
        { label: 'Upload Photo', href: '/patient/wound-tracker/upload' },
        { label: 'Schedule Visit', href: '/patient/appointments/schedule' }
      ]
    },
    {
      id: 2,
      category: 'medications',
      type: 'reminder',
      title: 'Medication Reminder',
      message: 'Time to take your Metformin (500mg). Take with food.',
      timestamp: '2024-02-07T08:00:00Z',
      priority: 'medium',
      read: false,
      icon: RiMedicineBottleLine,
      actionRequired: true,
      actions: [
        { label: 'Mark as Taken', action: 'markTaken' }
      ]
    },
    {
      id: 3,
      category: 'appointments',
      type: 'reminder',
      title: 'Upcoming Appointment',
      message: 'You have an appointment with Dr. Sarah Johnson tomorrow at 2:00 PM.',
      timestamp: '2024-02-06T18:00:00Z',
      priority: 'medium',
      read: true,
      icon: RiCalendarEventLine,
      actionRequired: false,
      actions: [
        { label: 'View Details', href: '/patient/appointments' }
      ]
    },
    {
      id: 4,
      category: 'messages',
      type: 'message',
      title: 'New Message from Dr. Johnson',
      message: 'Your wound is healing well. Continue current treatment plan.',
      timestamp: '2024-02-06T14:30:00Z',
      priority: 'low',
      read: false,
      icon: RiMessage2Line,
      actionRequired: false,
      actions: [
        { label: 'Read Message', href: '/patient/messages' }
      ]
    },
    {
      id: 5,
      category: 'medications',
      type: 'reminder',
      title: 'Prescription Refill Due',
      message: 'Your Lisinopril prescription expires in 3 days. Request a refill.',
      timestamp: '2024-02-06T10:00:00Z',
      priority: 'medium',
      read: true,
      icon: RiMedicineBottleLine,
      actionRequired: true,
      actions: [
        { label: 'Request Refill', action: 'requestRefill' }
      ]
    },
    {
      id: 6,
      category: 'reminders',
      type: 'care',
      title: 'Daily Wound Care',
      message: 'Don\'t forget to clean your wound and apply fresh dressing.',
      timestamp: '2024-02-06T08:00:00Z',
      priority: 'medium',
      read: true,
      icon: RiHeartPulseLine,
      actionRequired: false,
      actions: []
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-l-[#FF5656] bg-[#FF5656]/5';
      case 'medium': return 'border-l-[#FFE27A] bg-[#FFE27A]/5';
      case 'low': return 'border-l-[#56E0A0] bg-[#56E0A0]/5';
      default: return 'border-l-[#DDE1EC] bg-white';
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'high': return 'bg-[#FF5656]/10 text-[#FF5656]';
      case 'medium': return 'bg-[#FFE27A]/10 text-[#FFE27A]';
      case 'low': return 'bg-[#56E0A0]/10 text-[#56E0A0]';
      default: return 'bg-[#DDE1EC] text-[#8F96AA]';
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

  const filteredNotifications = notifications.filter(notification => 
    selectedCategory === 'all' || notification.category === selectedCategory
  );

  const unreadCount = notifications.filter(n => !n.read).length;

  const toggleNotificationSelection = (notificationId) => {
    const newSelection = new Set(selectedNotifications);
    if (newSelection.has(notificationId)) {
      newSelection.delete(notificationId);
    } else {
      newSelection.add(notificationId);
    }
    setSelectedNotifications(newSelection);
  };

  const handleBulkAction = (action) => {
    // Handle bulk actions like mark as read, delete, archive
    console.log(`Bulk action: ${action} for notifications:`, Array.from(selectedNotifications));
    setSelectedNotifications(new Set());
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#1C243C]">Notifications</h1>
          <p className="text-[#8F96AA] mt-1">
            {unreadCount > 0 ? `${unreadCount} unread notifications` : 'All notifications read'}
          </p>
        </div>
        <button
          onClick={() => setShowSettings(true)}
          className="flex items-center gap-2 px-4 py-2 border border-[#DDE1EC] rounded-lg hover:bg-[#F8F9FF] transition-colors"
        >
          <MdSettings className="w-4 h-4" />
          Settings
        </button>
      </div>

      {/* Categories and Bulk Actions */}
      <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {notificationCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[#6B7AFF] text-white'
                    : 'bg-[#F8F9FF] text-[#6B7AFF] hover:bg-[#6B7AFF]/10'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Bulk Actions */}
          {selectedNotifications.size > 0 && (
            <div className="flex gap-2">
              <button
                onClick={() => handleBulkAction('markRead')}
                className="flex items-center gap-2 px-3 py-2 bg-[#56E0A0] text-white rounded-lg hover:bg-[#4BD396] transition-colors"
              >
                <MdMarkAsUnread className="w-4 h-4" />
                Mark Read
              </button>
              <button
                onClick={() => handleBulkAction('archive')}
                className="flex items-center gap-2 px-3 py-2 bg-[#8B6DFF] text-white rounded-lg hover:bg-[#7A5BFF] transition-colors"
              >
                <MdArchive className="w-4 h-4" />
                Archive
              </button>
              <button
                onClick={() => handleBulkAction('delete')}
                className="flex items-center gap-2 px-3 py-2 bg-[#FF5656] text-white rounded-lg hover:bg-[#FF4444] transition-colors"
              >
                <MdDelete className="w-4 h-4" />
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-white rounded-xl border-l-4 border border-[#DDE1EC] overflow-hidden ${getPriorityColor(notification.priority)} ${
              !notification.read ? 'shadow-md' : ''
            }`}
          >
            <div className="p-6">
              <div className="flex items-start gap-4">
                {/* Selection Checkbox */}
                <input
                  type="checkbox"
                  checked={selectedNotifications.has(notification.id)}
                  onChange={() => toggleNotificationSelection(notification.id)}
                  className="mt-1 w-4 h-4 rounded border-2 border-[#DDE1EC] text-[#6B7AFF] focus:ring-[#6B7AFF]"
                />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  notification.priority === 'high' ? 'bg-[#FF5656]/10' :
                  notification.priority === 'medium' ? 'bg-[#FFE27A]/10' :
                  'bg-[#56E0A0]/10'
                }`}>
                  <notification.icon className={`w-6 h-6 ${
                    notification.priority === 'high' ? 'text-[#FF5656]' :
                    notification.priority === 'medium' ? 'text-[#FFE27A]' :
                    'text-[#56E0A0]'
                  }`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <h3 className={`font-semibold ${notification.read ? 'text-[#8F96AA]' : 'text-[#1C243C]'}`}>
                        {notification.title}
                      </h3>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-[#6B7AFF] rounded-full"></div>
                      )}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityBadge(notification.priority)}`}>
                        {notification.priority}
                      </span>
                    </div>
                    <span className="text-xs text-[#8F96AA]">{formatTime(notification.timestamp)}</span>
                  </div>
                  
                  <p className={`mb-4 ${notification.read ? 'text-[#8F96AA]' : 'text-[#4A5468]'}`}>
                    {notification.message}
                  </p>

                  {/* Actions */}
                  {notification.actions.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {notification.actions.map((action, index) => (
                        <button
                          key={index}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            notification.actionRequired
                              ? 'bg-[#6B7AFF] text-white hover:bg-[#506EFF]'
                              : 'bg-[#F8F9FF] text-[#6B7AFF] border border-[#6B7AFF] hover:bg-[#6B7AFF]/5'
                          }`}
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="flex gap-1">
                  <button className="p-2 text-[#8F96AA] hover:text-[#6B7AFF] hover:bg-[#F8F9FF] rounded-lg transition-colors">
                    <MdArchive className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-[#8F96AA] hover:text-[#FF5656] hover:bg-red-50 rounded-lg transition-colors">
                    <MdDelete className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredNotifications.length === 0 && (
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-12 text-center">
          <MdNotifications className="w-16 h-16 text-[#DDE1EC] mx-auto mb-4" />
          <h3 className="text-lg font-medium text-[#1C243C] mb-2">No notifications found</h3>
          <p className="text-[#8F96AA]">
            {selectedCategory === 'all' 
              ? "You're all caught up! No new notifications."
              : `No notifications in the ${notificationCategories.find(c => c.id === selectedCategory)?.name} category.`
            }
          </p>
        </div>
      )}

      {/* Notification Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-[#1C243C] mb-4">Notification Settings</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[#1C243C]">Email Notifications</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-[#6B7AFF]" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#1C243C]">SMS Notifications</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-[#6B7AFF]" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#1C243C]">Push Notifications</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-[#6B7AFF]" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#1C243C]">Medication Reminders</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-[#6B7AFF]" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#1C243C]">Appointment Reminders</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-[#6B7AFF]" />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowSettings(false)}
                className="flex-1 py-3 px-4 border border-[#DDE1EC] text-[#8F96AA] rounded-lg hover:bg-[#F8F9FF] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="flex-1 py-3 px-4 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
