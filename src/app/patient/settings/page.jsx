'use client';
import { useState } from 'react';
import { MdSecurity, MdAccessibility, MdPrivacyTip, MdAccountCircle, MdNotifications, MdLanguage, MdPalette, MdDownload, MdDelete } from 'react-icons/md';
import { RiShieldCheckLine, RiEyeLine, RiEyeOffLine, RiSmartphoneLine } from 'react-icons/ri';

export default function PatientSettings() {
  const [activeTab, setActiveTab] = useState('security');
  const [showPassword, setShowPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [settings, setSettings] = useState({
    security: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      twoFactor: true,
      loginAlerts: true
    },
    privacy: {
      dataSharing: true,
      researchParticipation: false,
      marketingEmails: false,
      anonymousAnalytics: true
    },
    accessibility: {
      fontSize: 'medium',
      highContrast: false,
      reducedMotion: false,
      screenReader: false,
      language: 'en'
    },
    notifications: {
      email: true,
      sms: true,
      push: true,
      medications: true,
      appointments: true,
      messages: true,
      quietHours: {
        enabled: true,
        start: '22:00',
        end: '07:00'
      }
    }
  });

  const tabs = [
    { id: 'security', name: 'Security', icon: MdSecurity },
    { id: 'privacy', name: 'Privacy', icon: MdPrivacyTip },
    { id: 'accessibility', name: 'Accessibility', icon: MdAccessibility },
    { id: 'notifications', name: 'Notifications', icon: MdNotifications },
    { id: 'account', name: 'Account', icon: MdAccountCircle }
  ];

  const handleSettingChange = (category, setting, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value
      }
    }));
  };

  const handleSave = () => {
    // Handle save logic
    console.log('Saving settings:', settings);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#1C243C]">Account Settings</h1>
        <p className="text-[#8F96AA] mt-1">Manage your account preferences and security settings</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-xl border border-[#DDE1EC] p-4">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-[#6B7AFF] text-white'
                      : 'text-[#8F96AA] hover:bg-[#F8F9FF] hover:text-[#6B7AFF]'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4">
          <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
            
            {/* Security Settings */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-[#1C243C] flex items-center gap-2">
                  <MdSecurity className="w-5 h-5" />
                  Security Settings
                </h2>

                {/* Password Change */}
                <div className="space-y-4">
                  <h3 className="font-medium text-[#1C243C]">Change Password</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#1C243C] mb-2">Current Password</label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          className="w-full p-3 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none pr-10"
                          placeholder="Enter current password"
                        />
                        <button
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8F96AA] hover:text-[#6B7AFF]"
                        >
                          {showPassword ? <RiEyeOffLine className="w-5 h-5" /> : <RiEyeLine className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1C243C] mb-2">New Password</label>
                      <input
                        type="password"
                        className="w-full p-3 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
                        placeholder="Enter new password"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1C243C] mb-2">Confirm New Password</label>
                      <input
                        type="password"
                        className="w-full p-3 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
                        placeholder="Confirm new password"
                      />
                    </div>
                  </div>
                </div>

                {/* Two-Factor Authentication */}
                <div className="p-4 bg-[#F8F9FF] rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <RiShieldCheckLine className="w-6 h-6 text-[#56E0A0]" />
                      <div>
                        <h3 className="font-medium text-[#1C243C]">Two-Factor Authentication</h3>
                        <p className="text-sm text-[#8F96AA]">Add an extra layer of security to your account</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={twoFactorEnabled}
                        onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#6B7AFF]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6B7AFF]"></div>
                    </label>
                  </div>
                  {twoFactorEnabled && (
                    <div className="mt-4 p-3 bg-white rounded border">
                      <p className="text-sm text-[#1C243C] mb-2">Authenticator app connected</p>
                      <button className="text-sm text-[#6B7AFF] hover:underline">Manage devices</button>
                    </div>
                  )}
                </div>

                {/* Login Alerts */}
                <div className="flex items-center justify-between p-4 border border-[#DDE1EC] rounded-lg">
                  <div>
                    <h3 className="font-medium text-[#1C243C]">Login Alerts</h3>
                    <p className="text-sm text-[#8F96AA]">Get notified of new login attempts</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#6B7AFF]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6B7AFF]"></div>
                  </label>
                </div>
              </div>
            )}

            {/* Privacy Settings */}
            {activeTab === 'privacy' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-[#1C243C] flex items-center gap-2">
                  <MdPrivacyTip className="w-5 h-5" />
                  Privacy Settings
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-[#DDE1EC] rounded-lg">
                    <div>
                      <h3 className="font-medium text-[#1C243C]">Data Sharing with Care Team</h3>
                      <p className="text-sm text-[#8F96AA]">Allow your care team to access your health data</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#6B7AFF]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6B7AFF]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-[#DDE1EC] rounded-lg">
                    <div>
                      <h3 className="font-medium text-[#1C243C]">Research Participation</h3>
                      <p className="text-sm text-[#8F96AA]">Contribute anonymized data to medical research</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#6B7AFF]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6B7AFF]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-[#DDE1EC] rounded-lg">
                    <div>
                      <h3 className="font-medium text-[#1C243C]">Marketing Communications</h3>
                      <p className="text-sm text-[#8F96AA]">Receive health tips and product updates</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#6B7AFF]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6B7AFF]"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Accessibility Settings */}
            {activeTab === 'accessibility' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-[#1C243C] flex items-center gap-2">
                  <MdAccessibility className="w-5 h-5" />
                  Accessibility Settings
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1C243C] mb-2">Font Size</label>
                    <select className="w-full p-3 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none">
                      <option value="small">Small</option>
                      <option value="medium" selected>Medium</option>
                      <option value="large">Large</option>
                      <option value="extra-large">Extra Large</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1C243C] mb-2">Language</label>
                    <select className="w-full p-3 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none">
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-[#DDE1EC] rounded-lg">
                    <div>
                      <h3 className="font-medium text-[#1C243C]">High Contrast Mode</h3>
                      <p className="text-sm text-[#8F96AA]">Increase contrast for better visibility</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#6B7AFF]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6B7AFF]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-[#DDE1EC] rounded-lg">
                    <div>
                      <h3 className="font-medium text-[#1C243C]">Reduced Motion</h3>
                      <p className="text-sm text-[#8F96AA]">Minimize animations and transitions</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#6B7AFF]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6B7AFF]"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-[#1C243C] flex items-center gap-2">
                  <MdNotifications className="w-5 h-5" />
                  Notification Preferences
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-[#DDE1EC] rounded-lg">
                    <div>
                      <h3 className="font-medium text-[#1C243C]">Email Notifications</h3>
                      <p className="text-sm text-[#8F96AA]">Receive notifications via email</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#6B7AFF]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6B7AFF]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-[#DDE1EC] rounded-lg">
                    <div>
                      <h3 className="font-medium text-[#1C243C]">SMS Notifications</h3>
                      <p className="text-sm text-[#8F96AA]">Receive notifications via text message</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#6B7AFF]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6B7AFF]"></div>
                    </label>
                  </div>

                  <div className="p-4 border border-[#DDE1EC] rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-medium text-[#1C243C]">Quiet Hours</h3>
                        <p className="text-sm text-[#8F96AA]">Pause non-urgent notifications during these hours</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#6B7AFF]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6B7AFF]"></div>
                      </label>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-[#8F96AA] mb-1">Start Time</label>
                        <input
                          type="time"
                          defaultValue="22:00"
                          className="w-full p-2 border border-[#DDE1EC] rounded focus:border-[#6B7AFF] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-[#8F96AA] mb-1">End Time</label>
                        <input
                          type="time"
                          defaultValue="07:00"
                          className="w-full p-2 border border-[#DDE1EC] rounded focus:border-[#6B7AFF] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Account Management */}
            {activeTab === 'account' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-[#1C243C] flex items-center gap-2">
                  <MdAccountCircle className="w-5 h-5" />
                  Account Management
                </h2>

                <div className="space-y-4">
                  <div className="p-4 border border-[#DDE1EC] rounded-lg">
                    <h3 className="font-medium text-[#1C243C] mb-2">Export Your Data</h3>
                    <p className="text-sm text-[#8F96AA] mb-4">Download a copy of all your health data</p>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors">
                      <MdDownload className="w-4 h-4" />
                      Download Data
                    </button>
                  </div>

                  <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                    <h3 className="font-medium text-red-800 mb-2">Delete Account</h3>
                    <p className="text-sm text-red-600 mb-4">
                      Permanently delete your account and all associated data. This action cannot be undone.
                    </p>
                    <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                      <MdDelete className="w-4 h-4" />
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="flex justify-end pt-6 border-t border-[#DDE1EC]">
              <button
                onClick={handleSave}
                className="px-6 py-3 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
