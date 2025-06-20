'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MdPlayArrow, MdBookmark, MdBookmarkBorder, MdSearch, MdFilterList, MdWorkspacePremium, MdQuiz, MdVideoLibrary, MdSchool } from 'react-icons/md';
import { RiBookReadLine, RiMicroscopeLine, RiStethoscopeLine, RiAwardLine, RiTimeLine, RiUserLine, RiGraduationCapLine } from 'react-icons/ri';

export default function ClinicalEducationHub() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [bookmarkedItems, setBookmarkedItems] = useState(new Set(['course-1', 'guideline-2']));

  // Enhanced educational resources with clinical focus
  const educationalResources = [
    {
      id: 'course-1',
      title: 'Advanced Diabetic Foot Ulcer Management',
      type: 'course',
      category: 'clinical-protocols',
      level: 'advanced',
      duration: '2.5 hours',
      format: 'Interactive Course',
      provider: 'Wound Care Institute',
      rating: 4.9,
      enrollments: 1247,
      cmeCredits: 2.5,
      description: 'Comprehensive course covering latest evidence-based approaches to diabetic foot ulcer assessment, treatment, and prevention.',
      topics: ['Risk Assessment', 'Debridement Techniques', 'Infection Management', 'Offloading Strategies'],
      prerequisites: ['Basic Wound Care Certification'],
      learningObjectives: [
        'Perform comprehensive diabetic foot assessment',
        'Implement evidence-based treatment protocols',
        'Recognize and manage complications'
      ],
      thumbnail: '/api/placeholder/300/200',
      isBookmarked: true,
      progress: 65,
      lastAccessed: '2024-02-18',
      difficulty: 'Advanced',
      evidenceBased: true
    },
    {
      id: 'guideline-1',
      title: 'NPUAP Pressure Injury Prevention Guidelines 2024',
      type: 'guideline',
      category: 'clinical-guidelines',
      level: 'intermediate',
      duration: '45 min',
      format: 'Clinical Guideline',
      provider: 'NPUAP',
      rating: 4.8,
      enrollments: 2156,
      cmeCredits: 0.75,
      description: 'Updated clinical practice guidelines for pressure injury prevention and management.',
      topics: ['Risk Assessment Tools', 'Prevention Strategies', 'Staging Guidelines', 'Documentation Standards'],
      prerequisites: [],
      learningObjectives: [
        'Apply updated staging criteria',
        'Implement prevention protocols',
        'Document according to standards'
      ],
      thumbnail: '/api/placeholder/300/200',
      isBookmarked: false,
      progress: 0,
      lastAccessed: null,
      difficulty: 'Intermediate',
      evidenceBased: true
    },
    {
      id: 'simulation-1',
      title: 'Virtual Wound Assessment Simulator',
      type: 'simulation',
      category: 'hands-on-training',
      level: 'beginner',
      duration: '1 hour',
      format: 'Interactive Simulation',
      provider: 'MedSim Technologies',
      rating: 4.7,
      enrollments: 892,
      cmeCredits: 1.0,
      description: 'Practice wound assessment skills in a risk-free virtual environment with immediate feedback.',
      topics: ['Visual Assessment', 'Measurement Techniques', 'Documentation', 'Treatment Planning'],
      prerequisites: [],
      learningObjectives: [
        'Perform accurate wound assessments',
        'Use proper measurement techniques',
        'Document findings systematically'
      ],
      thumbnail: '/api/placeholder/300/200',
      isBookmarked: false,
      progress: 0,
      lastAccessed: null,
      difficulty: 'Beginner',
      evidenceBased: true
    },
    {
      id: 'webinar-1',
      title: 'AI in Wound Care: Current Applications and Future Directions',
      type: 'webinar',
      category: 'emerging-technologies',
      level: 'advanced',
      duration: '90 min',
      format: 'Live Webinar',
      provider: 'Digital Health Consortium',
      rating: 4.6,
      enrollments: 567,
      cmeCredits: 1.5,
      description: 'Explore how artificial intelligence is transforming wound care practice and patient outcomes.',
      topics: ['AI Diagnostics', 'Predictive Analytics', 'Clinical Decision Support', 'Implementation Strategies'],
      prerequisites: ['Basic Digital Health Knowledge'],
      learningObjectives: [
        'Understand AI applications in wound care',
        'Evaluate AI tools for clinical practice',
        'Plan AI implementation strategies'
      ],
      thumbnail: '/api/placeholder/300/200',
      isBookmarked: true,
      progress: 0,
      lastAccessed: null,
      difficulty: 'Advanced',
      evidenceBased: true
    },
    {
      id: 'case-study-1',
      title: 'Complex Wound Case Studies: Multidisciplinary Approach',
      type: 'case-study',
      category: 'case-based-learning',
      level: 'advanced',
      duration: '3 hours',
      format: 'Interactive Case Studies',
      provider: 'Clinical Excellence Network',
      rating: 4.9,
      enrollments: 734,
      cmeCredits: 3.0,
      description: 'Analyze complex wound cases requiring multidisciplinary collaboration and advanced treatment strategies.',
      topics: ['Case Analysis', 'Treatment Planning', 'Team Coordination', 'Outcome Evaluation'],
      prerequisites: ['Advanced Wound Care Certification'],
      learningObjectives: [
        'Analyze complex clinical scenarios',
        'Develop comprehensive treatment plans',
        'Coordinate multidisciplinary care'
      ],
      thumbnail: '/api/placeholder/300/200',
      isBookmarked: false,
      progress: 0,
      lastAccessed: null,
      difficulty: 'Advanced',
      evidenceBased: true
    }
  ];

  // Learning paths and certifications
  const learningPaths = [
    {
      id: 'path-1',
      title: 'Wound Care Specialist Certification',
      description: 'Complete certification program for advanced wound care practice',
      totalCourses: 8,
      completedCourses: 3,
      estimatedTime: '40 hours',
      cmeCredits: 40,
      difficulty: 'Advanced',
      prerequisites: ['RN License', '2 years clinical experience'],
      badge: 'Certified Wound Care Specialist'
    },
    {
      id: 'path-2',
      title: 'Diabetic Foot Care Excellence',
      description: 'Specialized training in diabetic foot ulcer prevention and management',
      totalCourses: 5,
      completedCourses: 1,
      estimatedTime: '20 hours',
      cmeCredits: 20,
      difficulty: 'Intermediate',
      prerequisites: ['Basic Wound Care Knowledge'],
      badge: 'Diabetic Foot Care Expert'
    }
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Resources', count: educationalResources.length },
    { id: 'clinical-protocols', name: 'Clinical Protocols', count: educationalResources.filter(r => r.category === 'clinical-protocols').length },
    { id: 'clinical-guidelines', name: 'Guidelines', count: educationalResources.filter(r => r.category === 'clinical-guidelines').length },
    { id: 'hands-on-training', name: 'Hands-on Training', count: educationalResources.filter(r => r.category === 'hands-on-training').length },
    { id: 'case-based-learning', name: 'Case Studies', count: educationalResources.filter(r => r.category === 'case-based-learning').length },
    { id: 'emerging-technologies', name: 'Emerging Tech', count: educationalResources.filter(r => r.category === 'emerging-technologies').length }
  ];

  // Helper functions
  const getTypeIcon = (type) => {
    switch (type) {
      case 'course': return MdSchool;
      case 'guideline': return RiBookReadLine;
      case 'simulation': return RiMicroscopeLine;
      case 'webinar': return MdVideoLibrary;
      case 'case-study': return RiStethoscopeLine;
      default: return RiBookReadLine;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'course': return 'bg-[#6B7AFF]/10 text-[#6B7AFF]';
      case 'guideline': return 'bg-[#56E0A0]/10 text-[#56E0A0]';
      case 'simulation': return 'bg-[#8B6DFF]/10 text-[#8B6DFF]';
      case 'webinar': return 'bg-[#FF8A65]/10 text-[#FF8A65]';
      case 'case-study': return 'bg-[#5698FF]/10 text-[#5698FF]';
      default: return 'bg-[#DDE1EC] text-[#8F96AA]';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-[#56E0A0]/10 text-[#56E0A0]';
      case 'Intermediate': return 'bg-[#FFE27A]/10 text-[#FFE27A]';
      case 'Advanced': return 'bg-[#FF5656]/10 text-[#FF5656]';
      default: return 'bg-[#DDE1EC] text-[#8F96AA]';
    }
  };

  const toggleBookmark = (resourceId) => {
    const newBookmarks = new Set(bookmarkedItems);
    if (newBookmarks.has(resourceId)) {
      newBookmarks.delete(resourceId);
    } else {
      newBookmarks.add(resourceId);
    }
    setBookmarkedItems(newBookmarks);
  };

  // Filter resources
  const filteredResources = educationalResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Enhanced Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1C243C]">Clinical Education & Training Hub</h1>
          <p className="text-[#8F96AA] mt-1">
            Evidence-based learning resources and professional development
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <div className="relative">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8F96AA] w-4 h-4" />
            <input
              type="text"
              placeholder="Search courses, guidelines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-[#DDE1EC] rounded-lg w-64 focus:border-[#6B7AFF] focus:outline-none"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name} ({category.count})
              </option>
            ))}
          </select>

          <Link
            href="/doctor/education/my-learning"
            className="flex items-center gap-2 px-4 py-2 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
          >
            <RiGraduationCapLine className="w-4 h-4" />
            My Learning
          </Link>
        </div>
      </div>

      {/* Learning Paths */}
      <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
        <div className="flex items-center gap-2 mb-6">
          <RiAwardLine className="w-5 h-5 text-[#8B6DFF]" />
          <h2 className="font-semibold text-[#1C243C]">Certification Paths</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningPaths.map((path) => (
            <div key={path.id} className="p-4 bg-[#F8F9FF] rounded-lg border border-[#DDE1EC]">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-[#1C243C] mb-1">{path.title}</h3>
                  <p className="text-sm text-[#8F96AA]">{path.description}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(path.difficulty)}`}>
                  {path.difficulty}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#8F96AA]">Progress</span>
                  <span className="font-medium text-[#1C243C]">
                    {path.completedCourses}/{path.totalCourses} courses
                  </span>
                </div>
                <div className="w-full bg-[#DDE1EC] rounded-full h-2">
                  <div
                    className="h-2 bg-[#6B7AFF] rounded-full"
                    style={{ width: `${(path.completedCourses / path.totalCourses) * 100}%` }}
                  ></div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#8F96AA]">
                  <span>{path.estimatedTime} • {path.cmeCredits} CME Credits</span>
                  <span className="font-medium text-[#6B7AFF]">{path.badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Educational Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => {
          const TypeIcon = getTypeIcon(resource.type);
          return (
            <div key={resource.id} className="bg-white rounded-xl border border-[#DDE1EC] overflow-hidden hover:border-[#6B7AFF]/20 transition-all">
              {/* Resource Thumbnail */}
              <div className="relative">
                <img
                  src={resource.thumbnail}
                  alt={resource.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                    {resource.format}
                  </span>
                  {resource.evidenceBased && (
                    <span className="px-2 py-1 bg-[#56E0A0]/10 text-[#56E0A0] rounded-full text-xs font-medium">
                      Evidence-Based
                    </span>
                  )}
                </div>
                <button
                  onClick={() => toggleBookmark(resource.id)}
                  className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors"
                >
                  {bookmarkedItems.has(resource.id) ? (
                    <MdBookmark className="w-4 h-4 text-[#6B7AFF]" />
                  ) : (
                    <MdBookmarkBorder className="w-4 h-4 text-[#8F96AA]" />
                  )}
                </button>
                {resource.progress > 0 && (
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="w-full bg-black/20 rounded-full h-1">
                      <div
                        className="h-1 bg-white rounded-full"
                        style={{ width: `${resource.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Resource Content */}
              <div className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <TypeIcon className="w-4 h-4 text-[#6B7AFF]" />
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                      {resource.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-[#FFE27A]">★</span>
                    <span className="text-xs font-medium text-[#1C243C]">{resource.rating}</span>
                  </div>
                </div>

                <h3 className="font-semibold text-[#1C243C] text-sm leading-tight">{resource.title}</h3>
                <p className="text-xs text-[#8F96AA] line-clamp-2">{resource.description}</p>

                {/* Learning Objectives */}
                <div>
                  <h4 className="text-xs font-medium text-[#1C243C] mb-1">Learning Objectives:</h4>
                  <div className="space-y-1">
                    {resource.learningObjectives.slice(0, 2).map((objective, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#6B7AFF] rounded-full"></div>
                        <span className="text-xs text-[#8F96AA]">{objective}</span>
                      </div>
                    ))}
                    {resource.learningObjectives.length > 2 && (
                      <p className="text-xs text-[#8F96AA] ml-3.5">+{resource.learningObjectives.length - 2} more</p>
                    )}
                  </div>
                </div>

                {/* Topics */}
                <div>
                  <h4 className="text-xs font-medium text-[#1C243C] mb-2">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-1">
                    {resource.topics.slice(0, 3).map((topic, index) => (
                      <span key={index} className="text-xs bg-[#6B7AFF]/10 text-[#6B7AFF] px-2 py-1 rounded-full">
                        {topic}
                      </span>
                    ))}
                    {resource.topics.length > 3 && (
                      <span className="text-xs text-[#8F96AA]">+{resource.topics.length - 3}</span>
                    )}
                  </div>
                </div>

                {/* Metadata */}
                <div className="pt-2 border-t border-[#DDE1EC]">
                  <div className="flex items-center justify-between text-xs text-[#8F96AA] mb-2">
                    <span>{resource.duration}</span>
                    <span>{resource.cmeCredits} CME Credits</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#8F96AA]">By {resource.provider}</span>
                    <span className="text-[#6B7AFF] font-medium">{resource.enrollments} enrolled</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 border-t border-[#DDE1EC] bg-[#F8F9FF]">
                <div className="flex gap-2">
                  {resource.progress > 0 ? (
                    <Link
                      href={`/doctor/education/course/${resource.id}`}
                      className="flex-1 py-2 px-3 bg-[#56E0A0] text-white rounded-lg hover:bg-[#4BD396] transition-colors text-center text-sm"
                    >
                      Continue ({resource.progress}%)
                    </Link>
                  ) : (
                    <Link
                      href={`/doctor/education/course/${resource.id}`}
                      className="flex-1 py-2 px-3 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors text-center text-sm"
                    >
                      {resource.type === 'webinar' ? 'Register' : 'Start Learning'}
                    </Link>
                  )}
                  <button className="py-2 px-3 border border-[#DDE1EC] text-[#8F96AA] rounded-lg hover:bg-white transition-colors">
                    <MdQuiz className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredResources.length === 0 && (
        <div className="bg-white rounded-xl border border-[#DDE1EC] p-12 text-center">
          <RiBookReadLine className="w-16 h-16 text-[#DDE1EC] mx-auto mb-4" />
          <h3 className="text-lg font-medium text-[#1C243C] mb-2">No educational resources found</h3>
          <p className="text-[#8F96AA] mb-6">
            {searchTerm || selectedCategory !== 'all'
              ? "Try adjusting your search terms or filters"
              : "Educational content is being updated"
            }
          </p>
          <Link
            href="/doctor/education/catalog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
          >
            <RiBookReadLine className="w-4 h-4" />
            Browse Full Catalog
          </Link>
        </div>
      )}

      {/* Quick Stats */}
      <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
        <div className="flex items-center gap-2 mb-4">
          <MdWorkspacePremium className="w-5 h-5 text-[#8B6DFF]" />
          <h2 className="font-semibold text-[#1C243C]">Your Learning Progress</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-[#F8F9FF] rounded-lg">
            <p className="text-2xl font-bold text-[#6B7AFF] mb-1">12</p>
            <p className="text-xs text-[#8F96AA]">Courses Completed</p>
          </div>
          <div className="text-center p-4 bg-[#F8F9FF] rounded-lg">
            <p className="text-2xl font-bold text-[#56E0A0] mb-1">24.5</p>
            <p className="text-xs text-[#8F96AA]">CME Credits Earned</p>
          </div>
          <div className="text-center p-4 bg-[#F8F9FF] rounded-lg">
            <p className="text-2xl font-bold text-[#8B6DFF] mb-1">3</p>
            <p className="text-xs text-[#8F96AA]">Certifications</p>
          </div>
          <div className="text-center p-4 bg-[#F8F9FF] rounded-lg">
            <p className="text-2xl font-bold text-[#FFE27A] mb-1">85%</p>
            <p className="text-xs text-[#8F96AA]">Knowledge Score</p>
          </div>
        </div>
      </div>
    </div>
  );
}
