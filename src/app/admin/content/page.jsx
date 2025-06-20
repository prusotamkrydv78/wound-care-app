'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  MdSearch, MdFilterList, MdAdd, MdEdit, MdDelete, MdVisibility,
  MdCheckCircle, MdCancel, MdSchedule, MdPublish, MdDrafts
} from 'react-icons/md';
import { 
  RiFileTextLine, RiImageLine, RiVideoLine, RiBookReadLine,
  RiCalendarLine, RiUserLine, RiTimeLine, RiTagLine
} from 'react-icons/ri';

export default function ContentManagement() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContent, setSelectedContent] = useState([]);

  // Mock content data
  const contentItems = [
    {
      id: 'CNT001',
      title: 'Advanced Wound Care Techniques',
      type: 'article',
      category: 'Education',
      author: 'Dr. Sarah Johnson',
      status: 'pending_approval',
      createdDate: '2024-02-18T10:00:00Z',
      lastModified: '2024-02-19T14:30:00Z',
      publishDate: null,
      expiryDate: null,
      tags: ['wound care', 'techniques', 'advanced'],
      description: 'Comprehensive guide on modern wound care techniques for healthcare professionals.',
      wordCount: 2500,
      readTime: '10 min',
      views: 0,
      likes: 0,
      comments: 3,
      featured: false,
      priority: 'high',
      reviewNotes: [
        {
          reviewer: 'Admin User',
          date: '2024-02-19T09:00:00Z',
          note: 'Excellent content, needs minor formatting adjustments'
        }
      ]
    },
    {
      id: 'CNT002',
      title: 'Patient Care Best Practices',
      type: 'video',
      category: 'Training',
      author: 'Dr. Michael Wilson',
      status: 'published',
      createdDate: '2024-02-15T11:00:00Z',
      lastModified: '2024-02-16T16:00:00Z',
      publishDate: '2024-02-17T08:00:00Z',
      expiryDate: '2024-08-17T08:00:00Z',
      tags: ['patient care', 'best practices', 'training'],
      description: 'Video series covering essential patient care protocols and communication strategies.',
      duration: '25 min',
      views: 1247,
      likes: 89,
      comments: 15,
      featured: true,
      priority: 'medium',
      reviewNotes: []
    },
    {
      id: 'CNT003',
      title: 'Infection Prevention Guidelines',
      type: 'document',
      category: 'Guidelines',
      author: 'Clinical Team',
      status: 'draft',
      createdDate: '2024-02-20T09:00:00Z',
      lastModified: '2024-02-20T15:30:00Z',
      publishDate: null,
      expiryDate: null,
      tags: ['infection', 'prevention', 'guidelines', 'safety'],
      description: 'Updated infection prevention and control guidelines for wound care settings.',
      wordCount: 3200,
      readTime: '12 min',
      views: 0,
      likes: 0,
      comments: 0,
      featured: false,
      priority: 'high',
      reviewNotes: []
    },
    {
      id: 'CNT004',
      title: 'Platform Update Announcement',
      type: 'announcement',
      category: 'System',
      author: 'Admin Team',
      status: 'scheduled',
      createdDate: '2024-02-19T13:00:00Z',
      lastModified: '2024-02-19T13:00:00Z',
      publishDate: '2024-02-22T08:00:00Z',
      expiryDate: '2024-03-22T08:00:00Z',
      tags: ['announcement', 'update', 'platform'],
      description: 'Important platform updates and new features announcement for all users.',
      wordCount: 450,
      readTime: '2 min',
      views: 0,
      likes: 0,
      comments: 0,
      featured: true,
      priority: 'medium',
      reviewNotes: []
    },
    {
      id: 'CNT005',
      title: 'Wound Photography Standards',
      type: 'guide',
      category: 'Documentation',
      author: 'Dr. Jennifer Martinez',
      status: 'rejected',
      createdDate: '2024-02-12T14:00:00Z',
      lastModified: '2024-02-14T10:00:00Z',
      publishDate: null,
      expiryDate: null,
      tags: ['photography', 'documentation', 'standards'],
      description: 'Standardized guidelines for wound photography and documentation requirements.',
      wordCount: 1800,
      readTime: '7 min',
      views: 0,
      likes: 0,
      comments: 2,
      featured: false,
      priority: 'low',
      reviewNotes: [
        {
          reviewer: 'Admin User',
          date: '2024-02-14T10:00:00Z',
          note: 'Content needs significant revision. Please update with latest photography standards and include more visual examples.'
        }
      ]
    }
  ];

  // Filter options
  const filterOptions = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'pending_approval', name: 'Pending Approval', count: contentItems.filter(c => c.status === 'pending_approval').length },
    { id: 'published', name: 'Published', count: contentItems.filter(c => c.status === 'published').length },
    { id: 'draft', name: 'Drafts', count: contentItems.filter(c => c.status === 'draft').length },
    { id: 'scheduled', name: 'Scheduled', count: contentItems.filter(c => c.status === 'scheduled').length },
    { id: 'rejected', name: 'Rejected', count: contentItems.filter(c => c.status === 'rejected').length }
  ];

  const contentTypes = [
    { id: 'article', name: 'Articles', icon: RiFileTextLine },
    { id: 'video', name: 'Videos', icon: RiVideoLine },
    { id: 'document', name: 'Documents', icon: RiBookReadLine },
    { id: 'guide', name: 'Guides', icon: RiFileTextLine },
    { id: 'announcement', name: 'Announcements', icon: RiTimeLine }
  ];

  // Helper functions
  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'bg-[#56E0A0]/10 text-[#56E0A0]';
      case 'pending_approval': return 'bg-[#FFE27A]/10 text-[#FFE27A]';
      case 'draft': return 'bg-[#5698FF]/10 text-[#5698FF]';
      case 'scheduled': return 'bg-[#8B6DFF]/10 text-[#8B6DFF]';
      case 'rejected': return 'bg-[#FF5656]/10 text-[#FF5656]';
      default: return 'bg-[#DDE1EC] text-[#8F96AA]';
    }
  };

  const getTypeIcon = (type) => {
    const typeObj = contentTypes.find(t => t.id === type);
    return typeObj ? typeObj.icon : RiFileTextLine;
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-l-[#FF5656]';
      case 'medium': return 'border-l-[#FFE27A]';
      case 'low': return 'border-l-[#56E0A0]';
      default: return 'border-l-[#DDE1EC]';
    }
  };

  // Filter content
  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilter = selectedFilter === 'all' || item.status === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  const handleApprove = (contentId) => {
    console.log('Approving content:', contentId);
  };

  const handleReject = (contentId) => {
    console.log('Rejecting content:', contentId);
  };

  const handleSelectContent = (contentId) => {
    setSelectedContent(prev => 
      prev.includes(contentId) 
        ? prev.filter(id => id !== contentId)
        : [...prev, contentId]
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1C243C]">Content Management</h1>
          <p className="text-[#8F96AA] mt-1">
            {filteredContent.length} items • {contentItems.filter(c => c.status === 'pending_approval').length} pending approval
          </p>
        </div>
        
        <div className="flex gap-3 flex-wrap">
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8F96AA] w-4 h-4" />
            <input
              type="text"
              placeholder="Search content..."
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

          <Link
            href="/admin/content/new"
            className="flex items-center gap-2 px-4 py-2 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
          >
            <MdAdd className="w-4 h-4" />
            Create Content
          </Link>
        </div>
      </div>

      {/* Content Type Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {contentTypes.map((type) => {
          const count = contentItems.filter(item => item.type === type.id).length;
          const TypeIcon = type.icon;
          return (
            <div key={type.id} className="bg-white rounded-lg border border-[#DDE1EC] p-4 text-center">
              <div className="w-8 h-8 bg-[#6B7AFF]/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <TypeIcon className="w-4 h-4 text-[#6B7AFF]" />
              </div>
              <p className="text-sm text-[#8F96AA]">{type.name}</p>
              <p className="text-lg font-bold text-[#1C243C]">{count}</p>
            </div>
          );
        })}
      </div>

      {/* Bulk Actions */}
      {selectedContent.length > 0 && (
        <div className="bg-[#6B7AFF]/5 border border-[#6B7AFF]/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#6B7AFF] font-medium">
              {selectedContent.length} item{selectedContent.length > 1 ? 's' : ''} selected
            </span>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-[#56E0A0] text-white rounded text-sm hover:bg-[#4BC993] transition-colors">
                Approve All
              </button>
              <button className="px-3 py-1 bg-[#FF5656] text-white rounded text-sm hover:bg-[#E04545] transition-colors">
                Reject All
              </button>
              <button
                onClick={() => setSelectedContent([])}
                className="px-3 py-1 border border-[#DDE1EC] text-[#8F96AA] rounded text-sm hover:bg-white transition-colors"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Content List */}
      <div className="space-y-4">
        {filteredContent.map((item) => {
          const TypeIcon = getTypeIcon(item.type);
          return (
            <div key={item.id} className={`bg-white rounded-xl border border-[#DDE1EC] overflow-hidden hover:border-[#6B7AFF]/20 transition-all border-l-4 ${getPriorityColor(item.priority)}`}>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  {/* Selection Checkbox */}
                  <input
                    type="checkbox"
                    checked={selectedContent.includes(item.id)}
                    onChange={() => handleSelectContent(item.id)}
                    className="mt-1 rounded border-[#DDE1EC] text-[#6B7AFF] focus:ring-[#6B7AFF]"
                  />

                  {/* Content Icon */}
                  <div className="w-12 h-12 bg-[#6B7AFF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TypeIcon className="w-6 h-6 text-[#6B7AFF]" />
                  </div>

                  {/* Content Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-semibold text-[#1C243C] truncate">{item.title}</h3>
                          {item.featured && (
                            <span className="px-2 py-1 bg-[#FFE27A]/10 text-[#FFE27A] rounded-full text-xs font-medium">
                              Featured
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-[#8F96AA] mb-2">{item.description}</p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {item.tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-[#F8F9FF] text-[#6B7AFF] rounded text-xs">
                              #{tag}
                            </span>
                          ))}
                          {item.tags.length > 3 && (
                            <span className="px-2 py-1 bg-[#F8F9FF] text-[#8F96AA] rounded text-xs">
                              +{item.tags.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* Metadata */}
                        <div className="flex flex-wrap gap-4 text-xs text-[#8F96AA]">
                          <span>By {item.author}</span>
                          <span>Created {new Date(item.createdDate).toLocaleDateString()}</span>
                          {item.type === 'video' && <span>{item.duration}</span>}
                          {(item.type === 'article' || item.type === 'document') && (
                            <>
                              <span>{item.wordCount} words</span>
                              <span>{item.readTime} read</span>
                            </>
                          )}
                          {item.status === 'published' && (
                            <>
                              <span>{item.views} views</span>
                              <span>{item.likes} likes</span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Status and Actions */}
                      <div className="flex flex-col items-end gap-3 ml-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(item.status)}`}>
                          {item.status.replace('_', ' ')}
                        </span>

                        <div className="flex gap-2">
                          <button className="p-2 text-[#6B7AFF] hover:bg-[#6B7AFF]/10 rounded transition-colors">
                            <MdVisibility className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-[#8F96AA] hover:bg-[#8F96AA]/10 rounded transition-colors">
                            <MdEdit className="w-4 h-4" />
                          </button>
                          {item.status === 'pending_approval' && (
                            <>
                              <button
                                onClick={() => handleApprove(item.id)}
                                className="p-2 text-[#56E0A0] hover:bg-[#56E0A0]/10 rounded transition-colors"
                              >
                                <MdCheckCircle className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleReject(item.id)}
                                className="p-2 text-[#FF5656] hover:bg-[#FF5656]/10 rounded transition-colors"
                              >
                                <MdCancel className="w-4 h-4" />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Review Notes */}
                    {item.reviewNotes.length > 0 && (
                      <div className="mt-3 p-3 bg-[#F8F9FF] rounded-lg">
                        <h5 className="text-sm font-medium text-[#1C243C] mb-2">Review Notes</h5>
                        {item.reviewNotes.map((note, index) => (
                          <div key={index} className="text-sm text-[#8F96AA]">
                            <span className="font-medium">{note.reviewer}:</span> {note.note}
                            <span className="block text-xs mt-1">{new Date(note.date).toLocaleDateString()}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Scheduled Publishing Info */}
                    {item.status === 'scheduled' && item.publishDate && (
                      <div className="mt-3 p-3 bg-[#8B6DFF]/5 border border-[#8B6DFF]/20 rounded-lg">
                        <div className="flex items-center gap-2 text-sm text-[#8B6DFF]">
                          <MdSchedule className="w-4 h-4" />
                          <span>Scheduled to publish on {new Date(item.publishDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredContent.length === 0 && (
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-12 text-center">
          <RiFileTextLine className="w-16 h-16 text-[#DDE1EC] mx-auto mb-4" />
          <h3 className="text-lg font-medium text-[#1C243C] mb-2">No content found</h3>
          <p className="text-[#8F96AA] mb-6">
            {searchTerm || selectedFilter !== 'all' 
              ? "Try adjusting your search terms or filters" 
              : "No content has been created yet"
            }
          </p>
          <Link
            href="/admin/content/new"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
          >
            <MdAdd className="w-4 h-4" />
            Create First Content
          </Link>
        </div>
      )}
    </div>
  );
}
