import React from 'react';
import { regions } from '../data/regions';

interface RegionalFilterProps {
  selectedRegion: string;
  onRegionChange: (regionId: string) => void;
}

export const RegionalFilter: React.FC<RegionalFilterProps> = ({
  selectedRegion,
  onRegionChange
}) => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Jelajahi <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Nusantara</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pilih destinasi regional favorit Anda dan temukan keajaiban Indonesia dari Sabang sampai Merauke
          </p>
        </div>

        {/* All Regions Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => onRegionChange('')}
            className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
              selectedRegion === ''
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/25'
                : 'bg-white text-gray-700 hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-300'
            }`}
          >
            🇮🇩 Semua Regional
          </button>
        </div>

        {/* Regional Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {regions.map((region, index) => (
            <button
              key={region.id}
              onClick={() => onRegionChange(region.id)}
              className={`group relative p-6 rounded-2xl border-2 transition-all duration-500 hover:-translate-y-2 ${
                selectedRegion === region.id
                  ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl shadow-blue-500/20'
                  : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`text-4xl mb-3 transition-transform duration-300 ${
                selectedRegion === region.id ? 'scale-110' : 'group-hover:scale-110'
              }`}>
                {region.icon}
              </div>
              
              {/* Region Name */}
              <h3 className={`font-semibold text-sm mb-2 transition-colors ${
                selectedRegion === region.id 
                  ? 'text-blue-700' 
                  : 'text-gray-900 group-hover:text-blue-600'
              }`}>
                {region.name}
              </h3>
              
              {/* Package Count */}
              <div className={`text-xs px-2 py-1 rounded-full transition-colors ${
                selectedRegion === region.id
                  ? 'bg-blue-200 text-blue-800'
                  : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-700'
              }`}>
                {region.packageCount} paket
              </div>

              {/* Selection Indicator */}
              {selectedRegion === region.id && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-2xl transition-opacity duration-300 ${
                'opacity-0 group-hover:opacity-100'
              }`} />
            </button>
          ))}
        </div>

        {/* Special Sections */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Walisongo */}
          <button
            onClick={() => onRegionChange('walisongo')}
            className={`group relative p-8 rounded-2xl border-2 transition-all duration-500 hover:-translate-y-2 ${
              selectedRegion === 'walisongo'
                ? 'border-green-500 bg-gradient-to-br from-green-50 to-green-100 shadow-xl shadow-green-500/20'
                : 'border-gray-200 bg-white hover:border-green-300 hover:shadow-xl hover:shadow-green-500/10'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="text-5xl">🕌</div>
              <div className="text-left">
                <h3 className={`text-xl font-bold mb-2 ${
                  selectedRegion === 'walisongo' ? 'text-green-700' : 'text-gray-900 group-hover:text-green-600'
                }`}>
                  Tour Walisongo
                </h3>
                <p className="text-gray-600 text-sm">Ziarah spiritual ke makam para Wali Songo</p>
                <div className={`text-xs px-3 py-1 rounded-full mt-2 inline-block ${
                  selectedRegion === 'walisongo'
                    ? 'bg-green-200 text-green-800'
                    : 'bg-gray-100 text-gray-600 group-hover:bg-green-100 group-hover:text-green-700'
                }`}>
                  3 paket spiritual
                </div>
              </div>
            </div>
          </button>

          {/* Private/Custom */}
          <button
            onClick={() => onRegionChange('private-custom')}
            className={`group relative p-8 rounded-2xl border-2 transition-all duration-500 hover:-translate-y-2 ${
              selectedRegion === 'private-custom'
                ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-purple-100 shadow-xl shadow-purple-500/20'
                : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="text-5xl">✨</div>
              <div className="text-left">
                <h3 className={`text-xl font-bold mb-2 ${
                  selectedRegion === 'private-custom' ? 'text-purple-700' : 'text-gray-900 group-hover:text-purple-600'
                }`}>
                  Private & Custom Tour
                </h3>
                <p className="text-gray-600 text-sm">Buat itinerary sesuai keinginan Anda</p>
                <div className={`text-xs px-3 py-1 rounded-full mt-2 inline-block ${
                  selectedRegion === 'private-custom'
                    ? 'bg-purple-200 text-purple-800'
                    : 'bg-gray-100 text-gray-600 group-hover:bg-purple-100 group-hover:text-purple-700'
                }`}>
                  Custom request
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};