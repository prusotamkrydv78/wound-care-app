'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  MdSearch, MdFilterList, MdMoreVert, MdEdit, MdBlock, MdCheckCircle,
  MdEmail, MdPhone, MdVerifiedUser, MdWarning, MdDownload, MdAdd
} from 'react-icons/md';
import { 
  RiUserHeartLine, RiStethoscopeLine, RiAdminLine, RiUserLine,
  RiCalendarLine, RiMapPinLine, RiShieldCheckLine
} from 'react-icons/ri';

export default function UserManagement() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);

  // Mock user data
  const users = [
    {
      id: 'USR001',
      name: 'Dr. Sarah Johnson',
      email: 'sarah.johnson@hospital.com',
      phone: '+1 (555) 123-4567',
      role: 'doctor',
      status: 'active',
      verified: true,
      joinDate: '2024-01-15',
      lastLogin: '2024-02-20T14:30:00Z',
      location: 'New York, NY',
      specialization: 'Wound Care Specialist',
      patientsCount: 45,
      avatar: null
    },
    {
      id: 'USR002',
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1 (555) 234-5678',
      role: 'patient',
      status: 'active',
      verified: true,
      joinDate: '2024-02-01',
      lastLogin: '2024-02-20T10:15:00Z',
      location: 'Los Angeles, CA',
      condition: 'Diabetic Foot Ulcer',
      careTeam: 'Dr. Sarah Johnson',
      avatar: null
    },
    {
      id: 'USR003',
      name: 'Dr. Michael Wilson',
      email: 'michael.wilson@clinic.com',
      phone: '+1 (555) 345-6789',
      role: 'doctor',
      status: 'pending',
      verified: false,
      joinDate: '2024-02-18',
      lastLogin: null,
      location: 'Chicago, IL',
      specialization: 'Infectious Disease',
      patientsCount: 0,
      avatar: null
    },
    {
      id: 'USR004',
      name: 'Admin User',
      email: 'admin@woundcare.com',
      phone: '+1 (555) 456-7890',
      role: 'admin',
      status: 'active',
      verified: true,
      joinDate: '2023-12-01',
      lastLogin: '2024-02-20T16:00:00Z',
      location: 'Remote',
      permissions: 'Full Access',
      avatar: null
    },
    {
      id: 'USR005',
      name: 'Maria Garcia',
      email: 'maria.garcia@email.com',
      phone: '+1 (555) 567-8901',
      role: 'patient',
      status: 'suspended',
      verified: true,
      joinDate: '2024-01-20',
      lastLogin: '2024-02-15T09:30:00Z',
      location: 'Miami, FL',
      condition: 'Pressure Ulcer',
      careTeam: 'Dr. Sarah Johnson',
      avatar: null
    }
  ];

  // Filter options
  const filterOptions = [
    { id: 'all', name: 'All Users', count: users.length },
    { id: 'doctor', name: 'Doctors', count: users.filter(u => u.role === 'doctor').length },
    { id: 'patient', name: 'Patients', count: users.filter(u => u.role === 'patient').length },
    { id: 'admin', name: 'Admins', count: users.filter(u => u.role === 'admin').length },
    { id: 'pending', name: 'Pending Verification', count: users.filter(u => u.status === 'pending').length },
    { id: 'suspended', name: 'Suspended', count: users.filter(u => u.status === 'suspended').length }
  ];

  // Helper functions
  const getRoleIcon = (role) => {
    switch (role) {
      case 'doctor': return RiStethoscopeLine;
      case 'patient': return RiUserHeartLine;
      case 'admin': return RiAdminLine;
      default: return RiUserLine;
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'doctor': return 'bg-[#6B7AFF]/10 text-[#6B7AFF]';
      case 'patient': return 'bg-[#56E0A0]/10 text-[#56E0A0]';
      case 'admin': return 'bg-[#8B6DFF]/10 text-[#8B6DFF]';
      default: return 'bg-[#DDE1EC] text-[#8F96AA]';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-[#56E0A0]/10 text-[#56E0A0]';
      case 'pending': return 'bg-[#FFE27A]/10 text-[#FFE27A]';
      case 'suspended': return 'bg-[#FF5656]/10 text-[#FF5656]';
      default: return 'bg-[#DDE1EC] text-[#8F96AA]';
    }
  };

  // Filter users
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === 'all' ||
                         (selectedFilter === 'pending' && user.status === 'pending') ||
                         (selectedFilter === 'suspended' && user.status === 'suspended') ||
                         user.role === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  const handleSelectUser = (userId) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map(user => user.id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1C243C]">User Management</h1>
          <p className="text-[#8F96AA] mt-1">
            {filteredUsers.length} users • {selectedUsers.length} selected
          </p>
        </div>
        
        <div className="flex gap-3 flex-wrap">
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8F96AA] w-4 h-4" />
            <input
              type="text"
              placeholder="Search users..."
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

          {selectedUsers.length > 0 && (
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-[#56E0A0] text-white rounded-lg hover:bg-[#4BC993] transition-colors">
                Approve ({selectedUsers.length})
              </button>
              <button className="px-4 py-2 bg-[#FF5656] text-white rounded-lg hover:bg-[#E04545] transition-colors">
                Suspend ({selectedUsers.length})
              </button>
            </div>
          )}

          <button className="flex items-center gap-2 px-4 py-2 border border-[#DDE1EC] rounded-lg hover:bg-[#F8F9FF] transition-colors">
            <MdDownload className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedUsers.length > 0 && (
        <div className="bg-[#6B7AFF]/5 border border-[#6B7AFF]/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#6B7AFF] font-medium">
              {selectedUsers.length} user{selectedUsers.length > 1 ? 's' : ''} selected
            </span>
            <button
              onClick={() => setSelectedUsers([])}
              className="text-sm text-[#8F96AA] hover:text-[#1C243C]"
            >
              Clear selection
            </button>
          </div>
        </div>
      )}

      {/* Users Table */}
      <div className="bg-white rounded-xl border border-[#DDE1EC] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F8F9FF]">
              <tr>
                <th className="px-6 py-4 text-left">
                  <input
                    type="checkbox"
                    checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-[#DDE1EC] text-[#6B7AFF] focus:ring-[#6B7AFF]"
                  />
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">User</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">Role</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">Join Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">Last Login</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#1C243C]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DDE1EC]">
              {filteredUsers.map((user) => {
                const RoleIcon = getRoleIcon(user.role);
                return (
                  <tr key={user.id} className="hover:bg-[#F8F9FF] transition-colors">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => handleSelectUser(user.id)}
                        className="rounded border-[#DDE1EC] text-[#6B7AFF] focus:ring-[#6B7AFF]"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#6B7AFF]/10 rounded-full flex items-center justify-center">
                          <RoleIcon className="w-5 h-5 text-[#6B7AFF]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-[#1C243C]">{user.name}</p>
                            {user.verified && (
                              <MdVerifiedUser className="w-4 h-4 text-[#56E0A0]" />
                            )}
                          </div>
                          <p className="text-sm text-[#8F96AA]">{user.email}</p>
                          <p className="text-xs text-[#8F96AA]">ID: {user.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRoleColor(user.role)}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(user.status)}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#8F96AA]">
                      {new Date(user.joinDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#8F96AA]">
                      {user.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : 'Never'}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-2 text-[#6B7AFF] hover:bg-[#6B7AFF]/10 rounded transition-colors">
                          <MdEdit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-[#8F96AA] hover:bg-[#8F96AA]/10 rounded transition-colors">
                          <MdMoreVert className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State */}
      {filteredUsers.length === 0 && (
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-12 text-center">
          <RiUserLine className="w-16 h-16 text-[#DDE1EC] mx-auto mb-4" />
          <h3 className="text-lg font-medium text-[#1C243C] mb-2">No users found</h3>
          <p className="text-[#8F96AA]">
            {searchTerm || selectedFilter !== 'all' 
              ? "Try adjusting your search terms or filters" 
              : "No users have been registered yet"
            }
          </p>
        </div>
      )}
    </div>
  );
}
