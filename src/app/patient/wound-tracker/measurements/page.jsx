'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MdArrowBack, MdTrendingUp, MdTrendingDown, MdAdd } from 'react-icons/md';
import { RiRulerLine, RiCalculatorLine } from 'react-icons/ri';

export default function WoundMeasurements() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('all');
  const [showAddMeasurement, setShowAddMeasurement] = useState(false);

  const measurementData = [
    {
      date: '2024-02-05',
      day: 22,
      length: 1.6,
      width: 1.1,
      depth: 0.2,
      area: 1.8,
      perimeter: 5.4,
      volume: 0.36,
      measuredBy: 'Patient',
      notes: 'Measured after cleaning'
    },
    {
      date: '2024-01-29',
      day: 15,
      length: 2.0,
      width: 1.4,
      depth: 0.3,
      area: 2.8,
      perimeter: 6.8,
      volume: 0.84,
      measuredBy: 'Patient',
      notes: 'Good visibility, clear edges'
    },
    {
      date: '2024-01-22',
      day: 8,
      length: 2.3,
      width: 1.6,
      depth: 0.4,
      area: 3.7,
      perimeter: 7.8,
      volume: 1.48,
      measuredBy: 'Dr. Johnson',
      notes: 'Clinical measurement during visit'
    },
    {
      date: '2024-01-15',
      day: 1,
      length: 2.5,
      width: 1.8,
      depth: 0.5,
      area: 4.5,
      perimeter: 8.6,
      volume: 2.25,
      measuredBy: 'Dr. Johnson',
      notes: 'Initial assessment'
    }
  ];

  const calculateChange = (current, previous) => {
    if (!previous) return null;
    const change = ((current - previous) / previous) * 100;
    return {
      value: Math.abs(change).toFixed(1),
      isImprovement: change < 0,
      isIncrease: change > 0
    };
  };

  const getLatestMeasurement = () => measurementData[0];
  const getPreviousMeasurement = () => measurementData[1];

  const latest = getLatestMeasurement();
  const previous = getPreviousMeasurement();

  const metrics = [
    { key: 'area', label: 'Area', unit: 'cm²', icon: RiCalculatorLine },
    { key: 'length', label: 'Length', unit: 'cm', icon: RiRulerLine },
    { key: 'width', label: 'Width', unit: 'cm', icon: RiRulerLine },
    { key: 'depth', label: 'Depth', unit: 'cm', icon: RiRulerLine }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/patient/wound-tracker" className="p-2 rounded-lg hover:bg-[#F8F9FF]">
          <MdArrowBack className="w-5 h-5 text-[#8F96AA]" />
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-[#1C243C]">Wound Measurements</h1>
          <p className="text-[#8F96AA] mt-1">Track size changes and healing progress</p>
        </div>
        <button
          onClick={() => setShowAddMeasurement(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
        >
          <MdAdd className="w-4 h-4" />
          Add Measurement
        </button>
      </div>

      {/* Current Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => {
          const change = calculateChange(latest[metric.key], previous?.[metric.key]);
          return (
            <div key={metric.key} className="bg-white rounded-xl border border-[#DDE1EC] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#6B7AFF]/10 rounded-lg flex items-center justify-center">
                  <metric.icon className="w-5 h-5 text-[#6B7AFF]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#1C243C]">{metric.label}</h3>
                  <p className="text-sm text-[#8F96AA]">Current</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-[#1C243C] mb-2">
                {latest[metric.key]} {metric.unit}
              </div>
              {change && (
                <div className={`flex items-center gap-1 text-sm ${
                  change.isImprovement ? 'text-[#56E0A0]' : 'text-[#FF5656]'
                }`}>
                  {change.isImprovement ? <MdTrendingDown className="w-4 h-4" /> : <MdTrendingUp className="w-4 h-4" />}
                  {change.value}% {change.isImprovement ? 'smaller' : 'larger'}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Measurement History */}
      <div className="bg-white rounded-xl border border-[#DDE1EC]">
        <div className="flex items-center justify-between p-6 border-b border-[#DDE1EC]">
          <h2 className="font-semibold text-[#1C243C]">Measurement History</h2>
          <div className="flex gap-2">
            {['all', '30d', '7d'].map((timeframe) => (
              <button
                key={timeframe}
                onClick={() => setSelectedTimeframe(timeframe)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                  selectedTimeframe === timeframe
                    ? 'bg-[#6B7AFF] text-white'
                    : 'bg-[#F8F9FF] text-[#6B7AFF] hover:bg-[#6B7AFF]/10'
                }`}
              >
                {timeframe === 'all' ? 'All Time' : timeframe.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F8F9FF]">
              <tr>
                <th className="text-left p-4 font-medium text-[#1C243C]">Date</th>
                <th className="text-left p-4 font-medium text-[#1C243C]">Day</th>
                <th className="text-left p-4 font-medium text-[#1C243C]">Length (cm)</th>
                <th className="text-left p-4 font-medium text-[#1C243C]">Width (cm)</th>
                <th className="text-left p-4 font-medium text-[#1C243C]">Depth (cm)</th>
                <th className="text-left p-4 font-medium text-[#1C243C]">Area (cm²)</th>
                <th className="text-left p-4 font-medium text-[#1C243C]">Measured By</th>
              </tr>
            </thead>
            <tbody>
              {measurementData.map((measurement, index) => {
                const prevMeasurement = measurementData[index + 1];
                return (
                  <tr key={measurement.date} className="border-b border-[#DDE1EC] hover:bg-[#F8F9FF]/50">
                    <td className="p-4">
                      <div className="font-medium text-[#1C243C]">
                        {new Date(measurement.date).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="p-4 text-[#8F96AA]">{measurement.day}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[#1C243C]">{measurement.length}</span>
                        {prevMeasurement && (
                          <span className={`text-xs ${
                            measurement.length < prevMeasurement.length ? 'text-[#56E0A0]' : 'text-[#FF5656]'
                          }`}>
                            {measurement.length < prevMeasurement.length ? '↓' : '↑'}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[#1C243C]">{measurement.width}</span>
                        {prevMeasurement && (
                          <span className={`text-xs ${
                            measurement.width < prevMeasurement.width ? 'text-[#56E0A0]' : 'text-[#FF5656]'
                          }`}>
                            {measurement.width < prevMeasurement.width ? '↓' : '↑'}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[#1C243C]">{measurement.depth}</span>
                        {prevMeasurement && (
                          <span className={`text-xs ${
                            measurement.depth < prevMeasurement.depth ? 'text-[#56E0A0]' : 'text-[#FF5656]'
                          }`}>
                            {measurement.depth < prevMeasurement.depth ? '↓' : '↑'}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-[#1C243C]">{measurement.area}</span>
                        {prevMeasurement && (
                          <span className={`text-xs ${
                            measurement.area < prevMeasurement.area ? 'text-[#56E0A0]' : 'text-[#FF5656]'
                          }`}>
                            {measurement.area < prevMeasurement.area ? '↓' : '↑'}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-[#8F96AA]">{measurement.measuredBy}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Measurement Trends Chart */}
      <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
        <h2 className="font-semibold text-[#1C243C] mb-6">Measurement Trends</h2>
        <div className="h-64 bg-[#F8F9FF] rounded-lg flex items-center justify-center">
          <div className="text-center">
            <MdTrendingDown className="w-12 h-12 text-[#56E0A0] mx-auto mb-4" />
            <p className="text-[#1C243C] font-medium mb-2">60% Size Reduction</p>
            <p className="text-[#8F96AA] text-sm">Consistent improvement over 22 days</p>
          </div>
        </div>
      </div>

      {/* Add Measurement Modal */}
      {showAddMeasurement && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-[#1C243C] mb-4">Add New Measurement</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#1C243C] mb-2">Length (cm)</label>
                <input
                  type="number"
                  step="0.1"
                  className="w-full p-3 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
                  placeholder="0.0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1C243C] mb-2">Width (cm)</label>
                <input
                  type="number"
                  step="0.1"
                  className="w-full p-3 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
                  placeholder="0.0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1C243C] mb-2">Depth (cm)</label>
                <input
                  type="number"
                  step="0.1"
                  className="w-full p-3 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
                  placeholder="0.0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1C243C] mb-2">Notes (optional)</label>
                <textarea
                  className="w-full p-3 border border-[#DDE1EC] rounded-lg focus:border-[#6B7AFF] focus:outline-none"
                  rows="3"
                  placeholder="Any additional notes about this measurement..."
                ></textarea>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowAddMeasurement(false)}
                className="flex-1 py-3 px-4 border border-[#DDE1EC] text-[#8F96AA] rounded-lg hover:bg-[#F8F9FF] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle save logic here
                  setShowAddMeasurement(false);
                }}
                className="flex-1 py-3 px-4 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
              >
                Save Measurement
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
