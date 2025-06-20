'use client';
import { useState } from 'react';
import { 
  MdSecurity, MdNotifications, MdIntegrationInstructions, MdBackup,
  MdSave, MdRefresh, MdWarning, MdCheckCircle, MdSettings,
  MdToggleOn, MdToggleOff, MdEdit, MdVisibility, MdVisibilityOff
} from 'react-icons/md';
import { 
  RiShieldCheckLine, RiDatabaseLine, RiCloudLine, RiKeyLine,
  RiTimeLine, RiFileTextLine, RiUserLine, RiGlobalLine
} from 'react-icons/ri';

export default function SystemSettings() {
  const [activeTab, setActiveTab] = useState('platform');
  const [hasChanges, setHasChanges] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);

  // Mock settings data
  const [settings, setSettings] = useState({
    platform: {
      siteName: 'Wound Care Platform',
      siteDescription: 'Advanced digital wound care management system',
      maintenanceMode: false,
      registrationEnabled: true,
      emailVerificationRequired: true,
      maxFileUploadSize: 10, // MB
      sessionTimeout: 30, // minutes
      defaultLanguage: 'en',
      timezone: 'UTC'
    },
    security: {
      twoFactorRequired: true,
      passwordMinLength: 8,
      passwordComplexity: true,
      sessionSecurity: true,
      ipWhitelisting: false,
      auditLogging: true,
      dataEncryption: true,
      sslRequired: true,
      maxLoginAttempts: 5,
      lockoutDuration: 15 // minutes
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true,
      criticalAlerts: true,
      systemUpdates: true,
      userRegistrations: true,
      contentApprovals: true,
      securityAlerts: true
    },
    integrations: {
      ehrIntegration: false,
      labSystemIntegration: false,
      imagingIntegration: false,
      pharmacyIntegration: false,
      apiKey: 'sk-1234567890abcdef...',
      webhookUrl: 'https://api.woundcare.com/webhooks',
      rateLimiting: true,
      apiVersioning: 'v1'
    },
    compliance: {
      hipaaCompliance: true,
      gdprCompliance: true,
      dataRetentionPeriod: 7, // years
      auditRetentionPeriod: 10, // years
      consentManagement: true,
      dataAnonymization: true,
      rightToErasure: true,
      dataPortability: true
    },
    backup: {
      automaticBackups: true,
      backupFrequency: 'daily',
      backupRetention: 30, // days
      cloudBackup: true,
      encryptedBackups: true,
      lastBackup: '2024-02-20T02:00:00Z',
      backupStatus: 'success'
    }
  });

  const settingsTabs = [
    { id: 'platform', name: 'Platform Configuration', icon: MdSettings },
    { id: 'security', name: 'Security & Access', icon: RiShieldCheckLine },
    { id: 'notifications', name: 'Notifications', icon: MdNotifications },
    { id: 'integrations', name: 'Integrations', icon: MdIntegrationInstructions },
    { id: 'compliance', name: 'Compliance & Privacy', icon: RiFileTextLine },
    { id: 'backup', name: 'Backup & Recovery', icon: RiDatabaseLine }
  ];

  const handleSettingChange = (category, setting, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value
      }
    }));
    setHasChanges(true);
  };

  const handleSave = () => {
    // Save settings logic
    console.log('Saving settings:', settings);
    setHasChanges(false);
  };

  const ToggleSwitch = ({ enabled, onChange, label, description }) => (
    <div className="flex items-center justify-between p-4 border border-[#DDE1EC] rounded-lg">
      <div className="flex-1">
        <h4 className="font-medium text-[#1C243C]">{label}</h4>
        {description && <p className="text-sm text-[#8F96AA] mt-1">{description}</p>}
      </div>
      <button
        onClick={() => onChange(!enabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          enabled ? 'bg-[#6B7AFF]' : 'bg-[#DDE1EC]'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );

  const InputField = ({ label, value, onChange, type = 'text', placeholder, description }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-[#1C243C]">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
      />
      {description && <p className="text-xs text-[#8F96AA]">{description}</p>}
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'platform':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Site Name"
                value={settings.platform.siteName}
                onChange={(value) => handleSettingChange('platform', 'siteName', value)}
                description="Display name for the platform"
              />
              <InputField
                label="Default Language"
                value={settings.platform.defaultLanguage}
                onChange={(value) => handleSettingChange('platform', 'defaultLanguage', value)}
                description="Default language for new users"
              />
              <InputField
                label="Session Timeout (minutes)"
                type="number"
                value={settings.platform.sessionTimeout}
                onChange={(value) => handleSettingChange('platform', 'sessionTimeout', parseInt(value))}
                description="Automatic logout after inactivity"
              />
              <InputField
                label="Max File Upload Size (MB)"
                type="number"
                value={settings.platform.maxFileUploadSize}
                onChange={(value) => handleSettingChange('platform', 'maxFileUploadSize', parseInt(value))}
                description="Maximum file size for uploads"
              />
            </div>
            
            <div className="space-y-4">
              <ToggleSwitch
                enabled={settings.platform.maintenanceMode}
                onChange={(value) => handleSettingChange('platform', 'maintenanceMode', value)}
                label="Maintenance Mode"
                description="Temporarily disable platform access for maintenance"
              />
              <ToggleSwitch
                enabled={settings.platform.registrationEnabled}
                onChange={(value) => handleSettingChange('platform', 'registrationEnabled', value)}
                label="User Registration"
                description="Allow new users to register on the platform"
              />
              <ToggleSwitch
                enabled={settings.platform.emailVerificationRequired}
                onChange={(value) => handleSettingChange('platform', 'emailVerificationRequired', value)}
                label="Email Verification Required"
                description="Require email verification for new accounts"
              />
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Minimum Password Length"
                type="number"
                value={settings.security.passwordMinLength}
                onChange={(value) => handleSettingChange('security', 'passwordMinLength', parseInt(value))}
                description="Minimum characters required for passwords"
              />
              <InputField
                label="Max Login Attempts"
                type="number"
                value={settings.security.maxLoginAttempts}
                onChange={(value) => handleSettingChange('security', 'maxLoginAttempts', parseInt(value))}
                description="Maximum failed login attempts before lockout"
              />
              <InputField
                label="Lockout Duration (minutes)"
                type="number"
                value={settings.security.lockoutDuration}
                onChange={(value) => handleSettingChange('security', 'lockoutDuration', parseInt(value))}
                description="Account lockout duration after failed attempts"
              />
            </div>
            
            <div className="space-y-4">
              <ToggleSwitch
                enabled={settings.security.twoFactorRequired}
                onChange={(value) => handleSettingChange('security', 'twoFactorRequired', value)}
                label="Two-Factor Authentication Required"
                description="Require 2FA for all user accounts"
              />
              <ToggleSwitch
                enabled={settings.security.passwordComplexity}
                onChange={(value) => handleSettingChange('security', 'passwordComplexity', value)}
                label="Password Complexity Requirements"
                description="Enforce complex password requirements"
              />
              <ToggleSwitch
                enabled={settings.security.auditLogging}
                onChange={(value) => handleSettingChange('security', 'auditLogging', value)}
                label="Audit Logging"
                description="Log all user actions for security auditing"
              />
              <ToggleSwitch
                enabled={settings.security.dataEncryption}
                onChange={(value) => handleSettingChange('security', 'dataEncryption', value)}
                label="Data Encryption"
                description="Encrypt sensitive data at rest and in transit"
              />
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-4">
            <ToggleSwitch
              enabled={settings.notifications.emailNotifications}
              onChange={(value) => handleSettingChange('notifications', 'emailNotifications', value)}
              label="Email Notifications"
              description="Send notifications via email"
            />
            <ToggleSwitch
              enabled={settings.notifications.smsNotifications}
              onChange={(value) => handleSettingChange('notifications', 'smsNotifications', value)}
              label="SMS Notifications"
              description="Send critical notifications via SMS"
            />
            <ToggleSwitch
              enabled={settings.notifications.pushNotifications}
              onChange={(value) => handleSettingChange('notifications', 'pushNotifications', value)}
              label="Push Notifications"
              description="Send push notifications to mobile apps"
            />
            <ToggleSwitch
              enabled={settings.notifications.criticalAlerts}
              onChange={(value) => handleSettingChange('notifications', 'criticalAlerts', value)}
              label="Critical System Alerts"
              description="Immediate notifications for critical issues"
            />
            <ToggleSwitch
              enabled={settings.notifications.userRegistrations}
              onChange={(value) => handleSettingChange('notifications', 'userRegistrations', value)}
              label="User Registration Notifications"
              description="Notify admins of new user registrations"
            />
            <ToggleSwitch
              enabled={settings.notifications.contentApprovals}
              onChange={(value) => handleSettingChange('notifications', 'contentApprovals', value)}
              label="Content Approval Notifications"
              description="Notify when content requires approval"
            />
          </div>
        );

      case 'integrations':
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <ToggleSwitch
                enabled={settings.integrations.ehrIntegration}
                onChange={(value) => handleSettingChange('integrations', 'ehrIntegration', value)}
                label="EHR Integration"
                description="Connect with Electronic Health Record systems"
              />
              <ToggleSwitch
                enabled={settings.integrations.labSystemIntegration}
                onChange={(value) => handleSettingChange('integrations', 'labSystemIntegration', value)}
                label="Laboratory System Integration"
                description="Connect with laboratory information systems"
              />
              <ToggleSwitch
                enabled={settings.integrations.imagingIntegration}
                onChange={(value) => handleSettingChange('integrations', 'imagingIntegration', value)}
                label="Medical Imaging Integration"
                description="Connect with PACS and imaging systems"
              />
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#1C243C]">API Key</label>
                <div className="flex gap-2">
                  <input
                    type={showApiKey ? 'text' : 'password'}
                    value={settings.integrations.apiKey}
                    onChange={(e) => handleSettingChange('integrations', 'apiKey', e.target.value)}
                    className="flex-1 px-3 py-2 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
                  />
                  <button
                    onClick={() => setShowApiKey(!showApiKey)}
                    className="px-3 py-2 border border-[#DDE1EC] rounded-lg hover:bg-[#F8F9FF] transition-colors"
                  >
                    {showApiKey ? <MdVisibilityOff className="w-4 h-4" /> : <MdVisibility className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <InputField
                label="Webhook URL"
                value={settings.integrations.webhookUrl}
                onChange={(value) => handleSettingChange('integrations', 'webhookUrl', value)}
                description="URL for receiving webhook notifications"
              />
            </div>
          </div>
        );

      case 'compliance':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Data Retention Period (years)"
                type="number"
                value={settings.compliance.dataRetentionPeriod}
                onChange={(value) => handleSettingChange('compliance', 'dataRetentionPeriod', parseInt(value))}
                description="How long to retain patient data"
              />
              <InputField
                label="Audit Retention Period (years)"
                type="number"
                value={settings.compliance.auditRetentionPeriod}
                onChange={(value) => handleSettingChange('compliance', 'auditRetentionPeriod', parseInt(value))}
                description="How long to retain audit logs"
              />
            </div>

            <div className="space-y-4">
              <ToggleSwitch
                enabled={settings.compliance.hipaaCompliance}
                onChange={(value) => handleSettingChange('compliance', 'hipaaCompliance', value)}
                label="HIPAA Compliance Mode"
                description="Enable HIPAA compliance features and controls"
              />
              <ToggleSwitch
                enabled={settings.compliance.gdprCompliance}
                onChange={(value) => handleSettingChange('compliance', 'gdprCompliance', value)}
                label="GDPR Compliance Mode"
                description="Enable GDPR compliance features and controls"
              />
              <ToggleSwitch
                enabled={settings.compliance.consentManagement}
                onChange={(value) => handleSettingChange('compliance', 'consentManagement', value)}
                label="Consent Management"
                description="Track and manage user consent preferences"
              />
              <ToggleSwitch
                enabled={settings.compliance.rightToErasure}
                onChange={(value) => handleSettingChange('compliance', 'rightToErasure', value)}
                label="Right to Erasure"
                description="Allow users to request data deletion"
              />
            </div>
          </div>
        );

      case 'backup':
        return (
          <div className="space-y-6">
            <div className="bg-[#56E0A0]/5 border border-[#56E0A0]/20 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <MdCheckCircle className="w-5 h-5 text-[#56E0A0]" />
                <div>
                  <h3 className="font-medium text-[#56E0A0]">Last Backup Successful</h3>
                  <p className="text-sm text-[#8F96AA]">
                    {new Date(settings.backup.lastBackup).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <ToggleSwitch
                enabled={settings.backup.automaticBackups}
                onChange={(value) => handleSettingChange('backup', 'automaticBackups', value)}
                label="Automatic Backups"
                description="Enable scheduled automatic backups"
              />
              <ToggleSwitch
                enabled={settings.backup.cloudBackup}
                onChange={(value) => handleSettingChange('backup', 'cloudBackup', value)}
                label="Cloud Backup"
                description="Store backups in cloud storage"
              />
              <ToggleSwitch
                enabled={settings.backup.encryptedBackups}
                onChange={(value) => handleSettingChange('backup', 'encryptedBackups', value)}
                label="Encrypted Backups"
                description="Encrypt backup files for security"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#1C243C]">Backup Frequency</label>
                <select
                  value={settings.backup.backupFrequency}
                  onChange={(e) => handleSettingChange('backup', 'backupFrequency', e.target.value)}
                  className="w-full px-3 py-2 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
                >
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>

              <InputField
                label="Backup Retention (days)"
                type="number"
                value={settings.backup.backupRetention}
                onChange={(value) => handleSettingChange('backup', 'backupRetention', parseInt(value))}
                description="How long to keep backup files"
              />
            </div>

            <div className="flex gap-3">
              <button className="px-4 py-2 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors">
                Create Backup Now
              </button>
              <button className="px-4 py-2 border border-[#DDE1EC] text-[#8F96AA] rounded-lg hover:bg-[#F8F9FF] transition-colors">
                Restore from Backup
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1C243C]">System Settings</h1>
          <p className="text-[#8F96AA] mt-1">
            Configure platform settings and system preferences
          </p>
        </div>
        
        {hasChanges && (
          <div className="flex gap-3">
            <button
              onClick={() => setHasChanges(false)}
              className="px-4 py-2 border border-[#DDE1EC] text-[#8F96AA] rounded-lg hover:bg-[#F8F9FF] transition-colors"
            >
              Discard Changes
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
            >
              <MdSave className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        )}
      </div>

      {/* Settings Navigation */}
      <div className="bg-white rounded-xl border border-[#DDE1EC] overflow-hidden">
        <div className="flex overflow-x-auto">
          {settingsTabs.map((tab) => {
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#6B7AFF] text-[#6B7AFF] bg-[#6B7AFF]/5'
                    : 'border-transparent text-[#8F96AA] hover:text-[#1C243C] hover:bg-[#F8F9FF]'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Settings Content */}
        <div className="p-6">
          {renderTabContent()}
        </div>
      </div>

      {/* Changes Warning */}
      {hasChanges && (
        <div className="bg-[#FFE27A]/5 border border-[#FFE27A]/20 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <MdWarning className="w-5 h-5 text-[#FFE27A]" />
            <div>
              <h3 className="font-medium text-[#FFE27A]">Unsaved Changes</h3>
              <p className="text-sm text-[#8F96AA]">
                You have unsaved changes. Make sure to save your settings before leaving this page.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
