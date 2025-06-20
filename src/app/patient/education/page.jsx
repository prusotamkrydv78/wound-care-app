'use client';
import React from 'react';
import { useState } from 'react';
import { MdSearch, MdFilterList, MdPlayArrow, MdBookmark, MdBookmarkBorder, MdStar, MdAccessTime } from 'react-icons/md';
import { RiBookReadLine, RiVideoLine, RiFileTextLine, RiHeadphoneLine } from 'react-icons/ri';

export default function PatientEducation() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFormat, setSelectedFormat] = useState('all');
  const [bookmarkedItems, setBookmarkedItems] = useState(new Set([1, 3]));

  const categories = [
    { id: 'all', name: 'All Topics', count: 24 },
    { id: 'wound-care', name: 'Wound Care Basics', count: 8 },
    { id: 'diabetic', name: 'Diabetic Wounds', count: 6 },
    { id: 'surgical', name: 'Surgical Wounds', count: 4 },
    { id: 'pressure', name: 'Pressure Injuries', count: 3 },
    { id: 'nutrition', name: 'Nutrition & Healing', count: 3 }
  ];

  const formats = [
    { id: 'all', name: 'All Formats', icon: RiBookReadLine },
    { id: 'video', name: 'Videos', icon: RiVideoLine },
    { id: 'article', name: 'Articles', icon: RiFileTextLine },
    { id: 'audio', name: 'Audio', icon: RiHeadphoneLine }
  ];

  const educationalContent = [
    {
      id: 1,
      title: 'Daily Wound Care Routine',
      description: 'Learn the essential steps for cleaning and dressing your wound properly.',
      category: 'wound-care',
      format: 'video',
      duration: '8 min',
      difficulty: 'Beginner',
      rating: 4.8,
      views: 1250,
      thumbnail: '/api/placeholder/300/200',
      tags: ['cleaning', 'dressing', 'routine'],
      lastUpdated: '2024-01-15',
      isBookmarked: true,
      progress: 100
    },
    {
      id: 2,
      title: 'Understanding Wound Healing Stages',
      description: 'Comprehensive guide to the four phases of wound healing and what to expect.',
      category: 'wound-care',
      format: 'article',
      duration: '12 min read',
      difficulty: 'Intermediate',
      rating: 4.9,
      views: 890,
      thumbnail: '/api/placeholder/300/200',
      tags: ['healing', 'stages', 'inflammation'],
      lastUpdated: '2024-01-20',
      isBookmarked: false,
      progress: 0
    },
    {
      id: 3,
      title: 'Diabetic Foot Care Prevention',
      description: 'Essential tips for preventing diabetic foot ulcers and complications.',
      category: 'diabetic',
      format: 'video',
      duration: '15 min',
      difficulty: 'Beginner',
      rating: 4.7,
      views: 2100,
      thumbnail: '/api/placeholder/300/200',
      tags: ['diabetes', 'prevention', 'foot-care'],
      lastUpdated: '2024-01-10',
      isBookmarked: true,
      progress: 45
    },
    {
      id: 4,
      title: 'Nutrition for Optimal Healing',
      description: 'Foods and nutrients that support wound healing and recovery.',
      category: 'nutrition',
      format: 'article',
      duration: '10 min read',
      difficulty: 'Beginner',
      rating: 4.6,
      views: 750,
      thumbnail: '/api/placeholder/300/200',
      tags: ['nutrition', 'protein', 'vitamins'],
      lastUpdated: '2024-01-25',
      isBookmarked: false,
      progress: 0
    },
    {
      id: 5,
      title: 'Post-Surgery Wound Management',
      description: 'Complete guide to caring for surgical incisions and preventing complications.',
      category: 'surgical',
      format: 'video',
      duration: '20 min',
      difficulty: 'Intermediate',
      rating: 4.8,
      views: 1680,
      thumbnail: '/api/placeholder/300/200',
      tags: ['surgery', 'incision', 'recovery'],
      lastUpdated: '2024-01-18',
      isBookmarked: false,
      progress: 0
    },
    {
      id: 6,
      title: 'Recognizing Signs of Infection',
      description: 'Learn to identify early warning signs of wound infection and when to seek help.',
      category: 'wound-care',
      format: 'audio',
      duration: '6 min',
      difficulty: 'Beginner',
      rating: 4.9,
      views: 920,
      thumbnail: '/api/placeholder/300/200',
      tags: ['infection', 'symptoms', 'emergency'],
      lastUpdated: '2024-01-22',
      isBookmarked: false,
      progress: 0
    }
  ];

  const personalizedRecommendations = [
    {
      id: 7,
      title: 'Managing Chronic Wounds',
      reason: 'Based on your current treatment plan',
      category: 'wound-care',
      format: 'video',
      duration: '18 min'
    },
    {
      id: 8,
      title: 'Exercise and Wound Healing',
      reason: 'Recommended for your healing stage',
      category: 'nutrition',
      format: 'article',
      duration: '8 min read'
    }
  ];

  const toggleBookmark = (contentId) => {
    const newBookmarks = new Set(bookmarkedItems);
    if (newBookmarks.has(contentId)) {
      newBookmarks.delete(contentId);
    } else {
      newBookmarks.add(contentId);
    }
    setBookmarkedItems(newBookmarks);
  };

  const filteredContent = educationalContent.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesFormat = selectedFormat === 'all' || item.format === selectedFormat;
    
    return matchesSearch && matchesCategory && matchesFormat;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-[#56E0A0]/10 text-[#56E0A0]';
      case 'Intermediate': return 'bg-[#FFE27A]/10 text-[#FFE27A]';
      case 'Advanced': return 'bg-[#FF5656]/10 text-[#FF5656]';
      default: return 'bg-[#DDE1EC] text-[#8F96AA]';
    }
  };

  const getFormatIcon = (format) => {
    switch (format) {
      case 'video': return RiVideoLine;
      case 'article': return RiFileTextLine;
      case 'audio': return RiHeadphoneLine;
      default: return RiBookReadLine;
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#1C243C]">Education Center</h1>
        <p className="text-[#8F96AA] mt-1">Learn about wound care and healing with expert-curated content</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8F96AA] w-5 h-5" />
            <input
              type="text"
              placeholder="Search educational content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name} ({category.count})
              </option>
            ))}
          </select>

          {/* Format Filter */}
          <select
            value={selectedFormat}
            onChange={(e) => setSelectedFormat(e.target.value)}
            className="px-4 py-3 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
          >
            {formats.map(format => (
              <option key={format.id} value={format.id}>
                {format.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Personalized Recommendations */}
      <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
        <h2 className="text-lg font-semibold text-[#1C243C] mb-4">Recommended for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {personalizedRecommendations.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 bg-[#6B7AFF]/5 rounded-lg border border-[#6B7AFF]/20">
              <div className="w-12 h-12 bg-[#6B7AFF]/10 rounded-lg flex items-center justify-center">
                {React.createElement(getFormatIcon(item.format), { className: "w-6 h-6 text-[#6B7AFF]" })}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-[#1C243C] mb-1">{item.title}</h3>
                <p className="text-sm text-[#8F96AA] mb-2">{item.reason}</p>
                <div className="flex items-center gap-2 text-xs text-[#8F96AA]">
                  <MdAccessTime className="w-3 h-3" />
                  <span>{item.duration}</span>
                </div>
              </div>
              <button className="px-4 py-2 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors">
                Start
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((content) => {
          const FormatIcon = getFormatIcon(content.format);
          return (
            <div key={content.id} className="bg-white rounded-xl border border-[#DDE1EC] overflow-hidden hover:border-[#6B7AFF]/20 transition-all group">
              <div className="relative">
                <img
                  src={content.thumbnail}
                  alt={content.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(content.difficulty)}`}>
                    {content.difficulty}
                  </span>
                  <div className="bg-black/70 text-white px-2 py-1 rounded-full flex items-center gap-1">
                    <FormatIcon className="w-3 h-3" />
                    <span className="text-xs">{content.duration}</span>
                  </div>
                </div>
                <button
                  onClick={() => toggleBookmark(content.id)}
                  className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                >
                  {bookmarkedItems.has(content.id) ? 
                    <MdBookmark className="w-4 h-4 text-[#6B7AFF]" /> :
                    <MdBookmarkBorder className="w-4 h-4 text-[#8F96AA]" />
                  }
                </button>
                {content.format === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MdPlayArrow className="w-8 h-8 text-[#6B7AFF]" />
                    </div>
                  </div>
                )}
                {content.progress > 0 && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
                    <div 
                      className="h-full bg-[#6B7AFF]" 
                      style={{ width: `${content.progress}%` }}
                    ></div>
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-[#1C243C] mb-2 line-clamp-2">{content.title}</h3>
                <p className="text-sm text-[#8F96AA] mb-3 line-clamp-2">{content.description}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <MdStar className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-medium text-[#1C243C]">{content.rating}</span>
                    <span className="text-xs text-[#8F96AA]">({content.views} views)</span>
                  </div>
                  <span className="text-xs text-[#8F96AA]">
                    Updated {new Date(content.lastUpdated).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {content.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-[#F8F9FF] text-[#6B7AFF] text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full py-2 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors">
                  {content.progress > 0 ? 'Continue' : 'Start Learning'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredContent.length === 0 && (
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-12 text-center">
          <RiBookReadLine className="w-16 h-16 text-[#DDE1EC] mx-auto mb-4" />
          <h3 className="text-lg font-medium text-[#1C243C] mb-2">No content found</h3>
          <p className="text-[#8F96AA] mb-6">Try adjusting your search terms or filters</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSelectedFormat('all');
            }}
            className="px-6 py-3 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
