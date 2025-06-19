import { MdNotifications, MdCheckCircle, MdWarning, MdInfo, MdMessage } from 'react-icons/md';

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      type: 'alert',
      title: 'Critical Patient Update',
      message: 'Patient John Doe reported increased pain levels',
      time: '10 minutes ago',
      icon: MdWarning,
      color: 'text-[#FF6B6B]',
      bgColor: 'bg-[#FF6B6B]/10'
    },
    {
      id: 2,
      type: 'update',
      title: 'Treatment Plan Updated',
      message: 'Wound care protocol updated for Patient ID #1234',
      time: '1 hour ago',
      icon: MdCheckCircle,
      color: 'text-[#56E0A0]',
      bgColor: 'bg-[#56E0A0]/10'
    },
    {
      id: 3,
      type: 'message',
      title: 'New Message from Nurse',
      message: 'Review requested for wound assessment',
      time: '2 hours ago',
      icon: MdMessage,
      color: 'text-[#6B7AFF]',
      bgColor: 'bg-[#6B7AFF]/10'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#1C243C]">Notifications</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm border border-[#DDE1EC] rounded-lg hover:border-[#6B7AFF]">
            Mark all as read
          </button>
          <button className="px-4 py-2 text-sm bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF]">
            Clear all
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-[#DDE1EC] divide-y divide-[#DDE1EC]">
        {notifications.map((notification) => (
          <div key={notification.id} className="p-4 hover:bg-[#F8F9FF] transition-colors">
            <div className="flex items-start gap-4">
              <div className={`p-2 rounded-lg ${notification.bgColor}`}>
                <notification.icon className={`w-5 h-5 ${notification.color}`} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-[#1C243C]">{notification.title}</h3>
                  <span className="text-sm text-[#8F96AA]">{notification.time}</span>
                </div>
                <p className="text-[#4A5468] mt-1">{notification.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
