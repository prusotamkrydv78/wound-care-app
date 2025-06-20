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
import { MdLanguage, MdSecurity, MdAnalytics, MdSettings, MdBackup, MdNotifications } from 'react-icons/md';
import { RiStethoscopeLine, RiHospitalLine, RiUserHeartLine, RiShieldCheckLine, RiTimeLine, RiAlarmWarningLine } from 'react-icons/ri';
import { FaFingerprint, FaHistory, FaUserShield } from 'react-icons/fa';

export default function ClinicalSettings() {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('account');
  const [settings, setSettings] = useState({
    // Account Settings
    email: 'sarah.johnson@hospital.com',
    phone: '+1 (555) 123-4567',
    twoFactorEnabled: true,
    biometricLogin: false,
    sessionTimeout: 30,

    // Clinical Notifications
    criticalAlerts: true,
    patientUpdates: true,
    appointmentReminders: true,
    labResults: true,
    emergencyNotifications: true,
    teamMessages: true,
    systemMaintenance: false,

    // Clinical Workflow
    autoSaveInterval: 5,
    defaultWoundAssessmentTemplate: 'comprehensive',
    enableAIAssistance: true,
    showClinicalGuidelines: true,
    enableVoiceNotes: true,
    requireDigitalSignature: true,

    // Data & Privacy
    dataRetentionPeriod: '7years',
    shareAnonymizedData: false,
    enableAuditLogging: true,
    hipaaCompliance: true,

    // Integration Settings
    ehrIntegration: 'epic',
    labSystemIntegration: true,
    imagingIntegration: true,
    pharmacyIntegration: false,

    // Display & Accessibility
    language: 'English (US)',
    fontSize: 'Normal',
    darkMode: false,
    highContrast: false,
    colorBlindSupport: false,

    // Performance
    enableOfflineMode: true,
    syncFrequency: 'realtime',
    cacheSize: 'medium',

    // Backup & Recovery
    autoBackup: true,
    backupFrequency: 'daily',
    cloudBackup: true
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
      title: 'Account & Security',
      icon: IoSettingsOutline,
      description: 'Manage your account credentials and security settings',
      options: [
        {
          name: 'Change Email',
          value: settings.email,
          icon: IoMailOutline,
          action: true,
          description: 'Update your primary email address'
        },
        {
          name: 'Change Phone Number',
          value: settings.phone,
          icon: IoPhonePortraitOutline,
          action: true,
          description: 'Update emergency contact number'
        },
        {
          name: 'Change Password',
          value: '••••••••',
          icon: IoKeyOutline,
          action: true,
          description: 'Update your login password'
        },
        {
          name: 'Two-Factor Authentication',
          value: settings.twoFactorEnabled ? 'Enabled' : 'Disabled',
          icon: FaFingerprint,
          toggle: true,
          key: 'twoFactorEnabled',
          description: 'Enhanced security for clinical data access'
        },
        {
          name: 'Biometric Login',
          value: settings.biometricLogin ? 'Enabled' : 'Disabled',
          icon: FaFingerprint,
          toggle: true,
          key: 'biometricLogin',
          description: 'Use fingerprint or face recognition'
        },
        {
          name: 'Session Timeout',
          value: `${settings.sessionTimeout} minutes`,
          select: ['15', '30', '60', '120'],
          key: 'sessionTimeout',
          description: 'Auto-logout for security compliance'
        }
      ]
    },
    {
      title: 'Clinical Notifications',
      icon: RiAlarmWarningLine,
      description: 'Configure alerts for patient care and clinical events',
      options: [
        {
          name: 'Critical Patient Alerts',
          value: settings.criticalAlerts ? 'Enabled' : 'Disabled',
          toggle: true,
          key: 'criticalAlerts',
          description: 'Immediate notifications for critical conditions'
        },
        {
          name: 'Patient Status Updates',
          value: settings.patientUpdates ? 'Enabled' : 'Disabled',
          toggle: true,
          key: 'patientUpdates',
          description: 'Updates on patient progress and changes'
        },
        {
          name: 'Lab Results',
          value: settings.labResults ? 'Enabled' : 'Disabled',
          toggle: true,
          key: 'labResults',
          description: 'Notifications when lab results are available'
        },
        {
          name: 'Emergency Consultations',
          value: settings.emergencyNotifications ? 'Enabled' : 'Disabled',
          toggle: true,
          key: 'emergencyNotifications',
          description: 'Urgent consultation requests'
        },
        {
          name: 'Team Messages',
          value: settings.teamMessages ? 'Enabled' : 'Disabled',
          toggle: true,
          key: 'teamMessages',
          description: 'Messages from care team members'
        },
        {
          name: 'Appointment Reminders',
          value: settings.appointmentReminders ? 'Enabled' : 'Disabled',
          toggle: true,
          key: 'appointmentReminders',
          description: 'Upcoming appointment notifications'
        }
      ]
    },
    {
      title: 'Clinical Workflow',
      icon: RiStethoscopeLine,
      description: 'Customize your clinical documentation and workflow preferences',
      options: [
        {
          name: 'Auto-Save Interval',
          value: `${settings.autoSaveInterval} minutes`,
          select: ['1', '3', '5', '10'],
          key: 'autoSaveInterval',
          description: 'Frequency of automatic document saving'
        },
        {
          name: 'Default Assessment Template',
          value: settings.defaultWoundAssessmentTemplate,
          select: ['basic', 'comprehensive', 'diabetic-specific', 'pressure-injury'],
          key: 'defaultWoundAssessmentTemplate',
          description: 'Default template for wound assessments'
        },
        {
          name: 'AI Clinical Assistance',
          value: settings.enableAIAssistance ? 'Enabled' : 'Disabled',
          toggle: true,
          key: 'enableAIAssistance',
          description: 'AI-powered clinical decision support'
        },
        {
          name: 'Clinical Guidelines Display',
          value: settings.showClinicalGuidelines ? 'Enabled' : 'Disabled',
          toggle: true,
          key: 'showClinicalGuidelines',
          description: 'Show evidence-based guidelines during documentation'
        },
        {
          name: 'Voice Notes',
          value: settings.enableVoiceNotes ? 'Enabled' : 'Disabled',
          toggle: true,
          key: 'enableVoiceNotes',
          description: 'Voice-to-text for clinical documentation'
        },
        {
          name: 'Digital Signature Required',
          value: settings.requireDigitalSignature ? 'Required' : 'Optional',
          toggle: true,
          key: 'requireDigitalSignature',
          description: 'Mandate digital signatures for clinical notes'
        }
      ]
    },
    {
      title: 'System Integration',
      icon: MdSettings,
      description: 'Configure connections with hospital systems and external services',
      options: [
        {
          name: 'EHR Integration',
          value: settings.ehrIntegration,
          select: ['epic', 'cerner', 'allscripts', 'none'],
          key: 'ehrIntegration',
          description: 'Electronic Health Record system connection'
        },
        {
          name: 'Lab System Integration',
          value: settings.labSystemIntegration ? 'Connected' : 'Disconnected',
          toggle: true,
          key: 'labSystemIntegration',
          description: 'Direct connection to laboratory systems'
        },
        {
          name: 'Medical Imaging Integration',
          value: settings.imagingIntegration ? 'Connected' : 'Disconnected',
          toggle: true,
          key: 'imagingIntegration',
          description: 'Integration with PACS and imaging systems'
        },
        {
          name: 'Pharmacy Integration',
          value: settings.pharmacyIntegration ? 'Connected' : 'Disconnected',
          toggle: true,
          key: 'pharmacyIntegration',
          description: 'Electronic prescribing system connection'
        }
      ]
    },
    {
      title: 'Data & Privacy',
      icon: IoShieldCheckmarkOutline,
      description: 'Manage data privacy, compliance, and backup settings',
      options: [
        {
          name: 'HIPAA Compliance Mode',
          value: settings.hipaaCompliance ? 'Enabled' : 'Disabled',
          toggle: true,
          key: 'hipaaCompliance',
          description: 'Enhanced privacy controls for patient data'
        },
        {
          name: 'Audit Logging',
          value: settings.enableAuditLogging ? 'Enabled' : 'Disabled',
          toggle: true,
          key: 'enableAuditLogging',
          description: 'Track all system access and changes'
        },
        {
          name: 'Data Retention Period',
          value: settings.dataRetentionPeriod,
          select: ['1year', '3years', '5years', '7years', '10years'],
          key: 'dataRetentionPeriod',
          description: 'How long to retain patient data'
        },
        {
          name: 'Anonymous Data Sharing',
          value: settings.shareAnonymizedData ? 'Enabled' : 'Disabled',
          toggle: true,
          key: 'shareAnonymizedData',
          description: 'Contribute to medical research (anonymized)'
        },
        {
          name: 'Download Clinical Data',
          value: 'Export Reports',
          icon: IoDownloadOutline,
          action: () => handleDownloadData('clinical'),
          description: 'Export your clinical data and reports'
        },
        {
          name: 'View Access History',
          value: 'View Logs',
          icon: IoTimeOutline,
          action: true,
          description: 'Review system access and login history'
        }
      ]
    },
    {
      title: 'Display & Accessibility',
      icon: MdLanguage,
      description: 'Customize interface appearance and accessibility features',
      options: [
        {
          name: 'Preferred Language',
          value: settings.language,
          select: ['English (US)', 'Spanish', 'French', 'German', 'Mandarin'],
          key: 'language',
          description: 'Interface language preference'
        },
        {
          name: 'Font Size',
          value: settings.fontSize,
          select: ['Small', 'Normal', 'Large', 'Extra Large'],
          key: 'fontSize',
          description: 'Text size for better readability'
        },
        {
          name: 'Dark Mode',
          value: settings.darkMode ? 'Enabled' : 'Disabled',
          icon: IoMoonOutline,
          toggle: true,
          key: 'darkMode',
          description: 'Dark theme for reduced eye strain'
        },
        {
          name: 'High Contrast Mode',
          value: settings.highContrast ? 'Enabled' : 'Disabled',
          toggle: true,
          key: 'highContrast',
          description: 'Enhanced contrast for visual accessibility'
        },
        {
          name: 'Color Blind Support',
          value: settings.colorBlindSupport ? 'Enabled' : 'Disabled',
          toggle: true,
          key: 'colorBlindSupport',
          description: 'Alternative color schemes for color blindness'
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Enhanced Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1C243C]">Clinical Settings</h1>
          <p className="text-[#8F96AA] mt-1">Configure your clinical workflow and system preferences</p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-[#DDE1EC] rounded-lg hover:bg-[#F8F9FF] transition-colors">
            <IoDownloadOutline className="w-4 h-4" />
            Export Settings
          </button>
          <button
            onClick={handleLogoutAll}
            className="flex items-center gap-2 px-4 py-2 bg-[#FF5656] text-white rounded-lg hover:bg-[#FF4444] transition-colors"
          >
            <IoLogOutOutline className="w-4 h-4" />
            Logout All Devices
          </button>
        </div>
      </div>

      {/* Settings Sections */}
      {settingSections.map((section, i) => {
        const Icon = section.icon;
        return (
          <div key={i} className="bg-white rounded-xl border border-[#DDE1EC] overflow-hidden">
            <div className="p-6 border-b border-[#DDE1EC] bg-[#F8F9FF]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#6B7AFF]/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#6B7AFF]" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#1C243C]">{section.title}</h2>
                  <p className="text-sm text-[#8F96AA]">{section.description}</p>
                </div>
              </div>
            </div>
            <div className="divide-y divide-[#DDE1EC]">
              {section.options.map((option, j) => (
                <div
                  key={j}
                  className={`p-4 hover:bg-[#F8F9FF] transition-colors ${
                    option.action && !option.danger ? 'cursor-pointer' : ''
                  } ${option.danger ? 'hover:bg-[#FF5656]/5' : ''}`}
                  onClick={() => {
                    if (typeof option.action === 'function') {
                      option.action();
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      {option.icon && (
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          option.danger ? 'bg-[#FF5656]/10' : 'bg-[#6B7AFF]/10'
                        }`}>
                          <option.icon className={`w-4 h-4 ${
                            option.danger ? 'text-[#FF5656]' : 'text-[#6B7AFF]'
                          }`} />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className={`font-medium ${option.danger ? 'text-[#FF5656]' : 'text-[#1C243C]'}`}>
                          {option.name}
                        </h3>
                        {option.description && (
                          <p className="text-sm text-[#8F96AA] mt-1">{option.description}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {option.select ? (
                        <select
                          value={option.value}
                          onChange={(e) => setSettings(prev => ({
                            ...prev,
                            [option.key]: e.target.value
                          }))}
                          className="px-3 py-2 border border-[#DDE1EC] rounded-lg text-sm focus:border-[#6B7AFF] focus:outline-none"
                        >
                          {option.select.map((item, k) => (
                            <option key={k} value={item}>{item}</option>
                          ))}
                        </select>
                      ) : option.toggle ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (option.action) {
                              option.action();
                            } else {
                              handleToggle(option.key);
                            }
                          }}
                          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                            settings[option.key] ? 'bg-[#6B7AFF]' : 'bg-[#DDE1EC]'
                          }`}
                        >
                          <span
                            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                              settings[option.key] ? 'translate-x-5' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      ) : (
                        <span className={`text-sm font-medium ${
                          option.danger ? 'text-[#FF5656]' : 'text-[#8F96AA]'
                        }`}>
                          {option.value}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Danger Zone */}
      <div className="bg-white rounded-xl border border-[#FF5656]/20 overflow-hidden">
        <div className="p-6 border-b border-[#FF5656]/20 bg-[#FF5656]/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FF5656]/10 rounded-lg flex items-center justify-center">
              <IoTrashOutline className="w-5 h-5 text-[#FF5656]" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#FF5656]">Danger Zone</h2>
              <p className="text-sm text-[#8F96AA]">Irreversible actions that affect your account</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-[#FF5656]">Delete Account</h3>
              <p className="text-sm text-[#8F96AA] mt-1">
                Permanently delete your account and all associated clinical data
              </p>
            </div>
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="px-4 py-2 bg-[#FF5656] text-white rounded-lg hover:bg-[#FF4444] transition-colors"
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
      {/* Delete Account Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#FF5656]/10 rounded-lg flex items-center justify-center">
                <IoTrashOutline className="w-6 h-6 text-[#FF5656]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1C243C]">Delete Account</h3>
                <p className="text-sm text-[#8F96AA]">This action cannot be undone</p>
              </div>
            </div>
            <p className="text-[#8F96AA]">
              Are you sure you want to delete your account? This will permanently remove all your clinical data,
              patient records, and account information.
            </p>
            <div className="flex gap-3 pt-4">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 px-4 py-2 border border-[#DDE1EC] rounded-lg text-[#8F96AA] hover:bg-[#F8F9FF] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                className="flex-1 px-4 py-2 bg-[#FF5656] text-white rounded-lg hover:bg-[#FF4444] transition-colors"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
