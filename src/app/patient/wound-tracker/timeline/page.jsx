'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MdArrowBack, MdZoomIn, MdCompare, MdTrendingUp, MdTrendingDown } from 'react-icons/md';
import { RiCameraLine, RiRulerLine } from 'react-icons/ri';

export default function WoundTimeline() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [compareMode, setCompareMode] = useState(false);
  const [selectedComparison, setSelectedComparison] = useState(null);

  const timelineData = [
    {
      id: 1,
      date: '2024-01-15',
      daysSinceStart: 1,
      image: '/api/placeholder/300/200',
      measurements: {
        length: 2.5,
        width: 1.8,
        depth: 0.5,
        area: 4.5
      },
      healingStage: 'Inflammatory',
      notes: 'Initial wound assessment. Clean edges, minimal drainage.',
      qualityScore: 85,
      photographer: 'Patient'
    },
    {
      id: 2,
      date: '2024-01-22',
      daysSinceStart: 8,
      image: '/api/placeholder/300/200',
      measurements: {
        length: 2.3,
        width: 1.6,
        depth: 0.4,
        area: 3.7
      },
      healingStage: 'Proliferative',
      notes: 'Good granulation tissue formation. Reduced inflammation.',
      qualityScore: 92,
      photographer: 'Dr. Johnson'
    },
    {
      id: 3,
      date: '2024-01-29',
      daysSinceStart: 15,
      image: '/api/placeholder/300/200',
      measurements: {
        length: 2.0,
        width: 1.4,
        depth: 0.3,
        area: 2.8
      },
      healingStage: 'Proliferative',
      notes: 'Continued improvement. Epithelialization beginning at edges.',
      qualityScore: 88,
      photographer: 'Patient'
    },
    {
      id: 4,
      date: '2024-02-05',
      daysSinceStart: 22,
      image: '/api/placeholder/300/200',
      measurements: {
        length: 1.6,
        width: 1.1,
        depth: 0.2,
        area: 1.8
      },
      healingStage: 'Maturation',
      notes: 'Significant size reduction. Healthy pink tissue.',
      qualityScore: 95,
      photographer: 'Patient'
    }
  ];

  const calculateChange = (current, previous, metric) => {
    if (!previous) return null;
    const change = ((current[metric] - previous[metric]) / previous[metric]) * 100;
    return {
      value: Math.abs(change).toFixed(1),
      isImprovement: change < 0, // For wound measurements, smaller is better
      isIncrease: change > 0
    };
  };

  const getStageColor = (stage) => {
    switch (stage) {
      case 'Inflammatory': return 'bg-[#FF5656]/10 text-[#FF5656]';
      case 'Proliferative': return 'bg-[#FFE27A]/10 text-[#FFE27A]';
      case 'Maturation': return 'bg-[#56E0A0]/10 text-[#56E0A0]';
      default: return 'bg-[#DDE1EC] text-[#8F96AA]';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/patient/wound-tracker" className="p-2 rounded-lg hover:bg-[#F8F9FF]">
          <MdArrowBack className="w-5 h-5 text-[#8F96AA]" />
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-[#1C243C]">Healing Timeline</h1>
          <p className="text-[#8F96AA] mt-1">Track your wound healing progress over time</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setCompareMode(!compareMode)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
              compareMode 
                ? 'bg-[#6B7AFF] text-white border-[#6B7AFF]' 
                : 'bg-white text-[#1C243C] border-[#DDE1EC] hover:border-[#6B7AFF]/20'
            }`}
          >
            <MdCompare className="w-4 h-4" />
            Compare Mode
          </button>
        </div>
      </div>

      {/* Progress Summary */}
      <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
        <h2 className="text-lg font-semibold text-[#1C243C] mb-4">Overall Progress</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Reduction', value: '60%', change: 'area', icon: MdTrendingDown, color: 'text-[#56E0A0]' },
            { label: 'Days in Treatment', value: '22', change: null, icon: null, color: 'text-[#5698FF]' },
            { label: 'Photos Taken', value: '4', change: null, icon: null, color: 'text-[#8B6DFF]' },
            { label: 'Current Stage', value: 'Maturation', change: null, icon: null, color: 'text-[#56E0A0]' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-[#8F96AA]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        {timelineData.map((entry, index) => {
          const previousEntry = index > 0 ? timelineData[index - 1] : null;
          const areaChange = calculateChange(entry.measurements, previousEntry?.measurements, 'area');
          
          return (
            <div key={entry.id} className="bg-white rounded-xl border border-[#DDE1EC] overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Image Section */}
                  <div className="lg:w-1/3">
                    <div className="relative group">
                      <img
                        src={entry.image}
                        alt={`Wound photo from ${entry.date}`}
                        className="w-full h-48 object-cover rounded-lg border border-[#DDE1EC] cursor-pointer"
                        onClick={() => setSelectedImage(entry)}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <MdZoomIn className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
                        <span className="text-xs font-medium text-[#1C243C]">Day {entry.daysSinceStart}</span>
                      </div>
                    </div>
                    
                    {compareMode && (
                      <button
                        onClick={() => setSelectedComparison(entry)}
                        className={`w-full mt-2 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                          selectedComparison?.id === entry.id
                            ? 'bg-[#6B7AFF] text-white'
                            : 'bg-[#F8F9FF] text-[#6B7AFF] hover:bg-[#6B7AFF]/10'
                        }`}
                      >
                        {selectedComparison?.id === entry.id ? 'Selected for Comparison' : 'Select for Comparison'}
                      </button>
                    )}
                  </div>

                  {/* Details Section */}
                  <div className="lg:w-2/3 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-[#1C243C]">
                          {new Date(entry.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </h3>
                        <p className="text-[#8F96AA]">Day {entry.daysSinceStart} of treatment</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStageColor(entry.healingStage)}`}>
                          {entry.healingStage}
                        </span>
                        {areaChange && (
                          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                            areaChange.isImprovement ? 'bg-[#56E0A0]/10 text-[#56E0A0]' : 'bg-[#FF5656]/10 text-[#FF5656]'
                          }`}>
                            {areaChange.isImprovement ? <MdTrendingDown className="w-3 h-3" /> : <MdTrendingUp className="w-3 h-3" />}
                            {areaChange.value}%
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Measurements Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { label: 'Length', value: entry.measurements.length, unit: 'cm', key: 'length' },
                        { label: 'Width', value: entry.measurements.width, unit: 'cm', key: 'width' },
                        { label: 'Depth', value: entry.measurements.depth, unit: 'cm', key: 'depth' },
                        { label: 'Area', value: entry.measurements.area, unit: 'cm²', key: 'area' }
                      ].map((measurement) => {
                        const change = calculateChange(entry.measurements, previousEntry?.measurements, measurement.key);
                        return (
                          <div key={measurement.key} className="bg-[#F8F9FF] rounded-lg p-3">
                            <div className="flex items-center gap-1 mb-1">
                              <RiRulerLine className="w-3 h-3 text-[#8B6DFF]" />
                              <span className="text-xs text-[#8F96AA]">{measurement.label}</span>
                            </div>
                            <div className="text-lg font-semibold text-[#1C243C]">
                              {measurement.value} {measurement.unit}
                            </div>
                            {change && (
                              <div className={`text-xs flex items-center gap-1 ${
                                change.isImprovement ? 'text-[#56E0A0]' : 'text-[#FF5656]'
                              }`}>
                                {change.isImprovement ? '↓' : '↑'} {change.value}%
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Notes */}
                    <div className="bg-[#F8F9FF] rounded-lg p-4">
                      <h4 className="font-medium text-[#1C243C] mb-2">Clinical Notes</h4>
                      <p className="text-[#8F96AA] text-sm">{entry.notes}</p>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#DDE1EC]">
                        <div className="flex items-center gap-2">
                          <RiCameraLine className="w-4 h-4 text-[#8B6DFF]" />
                          <span className="text-xs text-[#8F96AA]">Photo by {entry.photographer}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-[#8F96AA]">Quality:</span>
                          <span className="text-xs font-medium text-[#56E0A0]">{entry.qualityScore}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-auto">
            <div className="p-4 border-b border-[#DDE1EC] flex items-center justify-between">
              <h3 className="font-semibold text-[#1C243C]">
                Wound Photo - {new Date(selectedImage.date).toLocaleDateString()}
              </h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 hover:bg-[#F8F9FF] rounded-lg"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <img
                src={selectedImage.image}
                alt="Enlarged wound photo"
                className="w-full max-h-96 object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
