'use client';
import { useState } from 'react';
import { 
  IoSettingsOutline, 
  IoNotificationsOutline, 
  IoShieldCheckmarkOutline,
  IoMailOutline,
  IoPhonePortraitOutline,
  IoKeyOutline,
  IoTrashOutline,
  IoDownloadOutline,
  IoLogOutOutline,
  IoMoonOutline,
  IoTimeOutline
} from 'react-icons/io5';
import { MdLanguage } from 'react-icons/md';
import { FaFingerprint, FaHistory, FaUserShield } from 'react-icons/fa';

export default function Settings() {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [settings, setSettings] = useState({
    email: 'john.doe@hospital.com',
    phone: '+1 (555) 123-4567',
    twoFactorEnabled: true,
    emailUpdates: true,
    smsAlerts: true,
    dailySummary: false,
    appointmentReminders: true,
    language: 'English (US)',
    fontSize: 'Normal',
    darkMode: false,
  });

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleLogoutAll = async () => {
    // TODO: Implement logout from all devices
    console.log('Logging out from all devices...');
  };

  const handleDeleteAccount = async () => {
    // TODO: Implement account deletion
    console.log('Deleting account...');
    setShowDeleteConfirm(false);
  };

  const handleDownloadData = async (format) => {
    // TODO: Implement data download
    console.log(`Downloading data in ${format} format...`);
  };

  const settingSections = [
    {
      title: 'Account Settings',
      icon: IoSettingsOutline,
      options: [
        { 
          name: 'Change Email',
          value: settings.email,
          icon: IoMailOutline,
          action: true
        },
        { 
          name: 'Change Phone Number',
          value: settings.phone,
          icon: IoPhonePortraitOutline,
          action: true
        },
        { 
          name: 'Change Password',
          value: '••••••••',
          icon: IoKeyOutline,
          action: true
        },
        { 
          name: 'Two-Factor Authentication',
          value: settings.twoFactorEnabled ? 'Enabled' : 'Disabled',
          icon: FaFingerprint,
          toggle: true,
          key: 'twoFactorEnabled'
        },
        { 
          name: 'Delete Account',
          value: 'Danger Zone',
          icon: IoTrashOutline,
          danger: true,
          action: () => setShowDeleteConfirm(true)
        },
      ]
    },
    {
      title: 'Notification Preferences',
      icon: IoNotificationsOutline,
      options: [
        { 
          name: 'Email Updates',
          value: settings.emailUpdates ? 'Enabled' : 'Disabled',
          toggle: true,
          key: 'emailUpdates'
        },
        { 
          name: 'SMS/WhatsApp Alerts',
          value: settings.smsAlerts ? 'Enabled' : 'Disabled',
          toggle: true,
          key: 'smsAlerts'
        },
        { 
          name: 'Daily Summary Report',
          value: settings.dailySummary ? 'Enabled' : 'Disabled',
          toggle: true,
          key: 'dailySummary'
        },
        { 
          name: 'Appointment Reminders',
          value: settings.appointmentReminders ? 'Enabled' : 'Disabled',
          toggle: true,
          key: 'appointmentReminders'
        },
      ]
    },
    {
      title: 'Language & Accessibility',
      icon: MdLanguage,
      options: [
        { 
          name: 'Preferred Language',
          value: settings.language,
          action: true,
          select: [
            'English (US)',
            'Spanish',
            'French',
            'German'
          ]
        },
        { 
          name: 'Font Size',
          value: settings.fontSize,
          select: [
            'Normal',
            'Large'
          ]
        },
        { 
          name: 'Dark Mode',
          value: darkMode ? 'Enabled' : 'Disabled',
          icon: IoMoonOutline,
          toggle: true,
          action: () => setDarkMode(!darkMode)
        },
      ]
    },
    {
      title: 'Data & Privacy',
      icon: IoShieldCheckmarkOutline,
      options: [
        { 
          name: 'Download My Data',
          value: 'Export as PDF/CSV',
          icon: IoDownloadOutline,
          action: () => handleDownloadData('pdf')
        },
        { 
          name: 'View Login Activity',
          value: 'View History',
          icon: IoTimeOutline,
          action: true
        },
        { 
          name: 'View Consent History',
          value: 'View Records',
          icon: FaHistory,
          action: true
        },
        { 
          name: 'Logout from All Devices',
          value: 'Click to logout',
          icon: IoLogOutOutline,
          action: handleLogoutAll
        },
      ]
    },
  ];

  return (
    <main className="min-h-screen sm:px-6 lg:px-8">
      <div className="  space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        
        {settingSections.map((section, i) => {
          const Icon = section.icon;
          return (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <Icon className="w-6 h-6 text-blue-600" />
                  <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {section.options.map((option, j) => (
                  <div 
                    key={j} 
                    className={`p-4 flex items-center justify-between hover:bg-gray-50 ${
                      option.action && !option.danger ? 'cursor-pointer' : ''
                    } ${option.danger ? 'hover:bg-red-50' : ''}`}
                    onClick={() => {
                      if (typeof option.action === 'function') {
                        option.action();
                      }
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      {option.icon && <option.icon className={`w-5 h-5 ${
                        option.danger ? 'text-red-600' : 'text-blue-600'
                      }`} />}
                      <span className={`${option.danger ? 'text-red-600' : 'text-gray-700'}`}>
                        {option.name}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      {option.select ? (
                        <select 
                          value={option.value}
                          onChange={(e) => setSettings(prev => ({
                            ...prev,
                            [option.name.toLowerCase().replace(/ /g, '')]: e.target.value
                          }))}
                          className="form-select rounded-md border-gray-300 text-sm text-gray-500"
                        >
                          {option.select.map((item, k) => (
                            <option key={k} value={item}>{item}</option>
                          ))}
                        </select>
                      ) : option.toggle ? (
                        <button
                          onClick={() => option.action ? option.action() : handleToggle(option.key)}
                          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                            settings[option.key] ? 'bg-blue-600' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                              settings[option.key] ? 'translate-x-5' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      ) : (
                        <span className={`text-sm ${option.danger ? 'text-red-600' : 'text-gray-500'}`}>
                          {option.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Delete Account Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <IoTrashOutline className="w-6 h-6 text-red-600" />
              <h3 className="text-lg font-semibold text-gray-900">Delete Account</h3>
            </div>
            <p className="text-gray-500">
              Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently deleted.
            </p>
            <div className="flex space-x-3 justify-end">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
