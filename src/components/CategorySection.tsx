import React from 'react';
import { categories } from '../data/packages';

interface CategorySectionProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  selectedCategory,
  onCategoryChange
}) => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pilih <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">Destinasi Impian</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dari wisata edukasi hingga bulan madu romantis, kami menyediakan paket lengkap untuk setiap momen spesial Anda
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id === selectedCategory ? '' : category.id)}
              className={`group relative p-6 rounded-2xl border-2 transition-all duration-500 hover:-translate-y-2 ${
                selectedCategory === category.id
                  ? 'border-yellow-500 bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-xl shadow-yellow-500/20'
                  : 'border-gray-200 bg-white hover:border-yellow-300 hover:shadow-xl hover:shadow-yellow-500/10'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`text-4xl mb-3 transition-transform duration-300 ${
                selectedCategory === category.id ? 'scale-110' : 'group-hover:scale-110'
              }`}>
                {category.icon}
              </div>
              
              {/* Category Name */}
              <h3 className={`font-semibold text-sm mb-2 transition-colors ${
                selectedCategory === category.id 
                  ? 'text-yellow-700' 
                  : 'text-gray-900 group-hover:text-yellow-600'
              }`}>
                {category.name}
              </h3>
              
              {/* Package Count */}
              <div className={`text-xs px-2 py-1 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? 'bg-yellow-200 text-yellow-800'
                  : 'bg-gray-100 text-gray-600 group-hover:bg-yellow-100 group-hover:text-yellow-700'
              }`}>
                {category.count} paket
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-yellow-600/5 rounded-2xl transition-opacity duration-300 ${
                'opacity-0 group-hover:opacity-100'
              }`} />

              {/* Selection Indicator */}
              {selectedCategory === category.id && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Featured Categories */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white relative overflow-hidden group cursor-pointer">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">🎓 Paket Sekolah</h3>
              <p className="text-blue-100 mb-4">LDKS, Study Tour, Outing Class</p>
              <div className="text-sm opacity-90">Mulai dari Rp 350.000</div>
            </div>
            <div className="absolute -right-4 -bottom-4 text-6xl opacity-20 group-hover:scale-110 transition-transform">
              🎓
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white relative overflow-hidden group cursor-pointer">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">💕 Bulan Madu</h3>
              <p className="text-green-100 mb-4">Romantic Package untuk Pasangan</p>
              <div className="text-sm opacity-90">Mulai dari Rp 2.500.000</div>
            </div>
            <div className="absolute -right-4 -bottom-4 text-6xl opacity-20 group-hover:scale-110 transition-transform">
              💕
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white relative overflow-hidden group cursor-pointer">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">🕌 Walisongo</h3>
              <p className="text-purple-100 mb-4">Ziarah Spiritual Penuh Berkah</p>
              <div className="text-sm opacity-90">Mulai dari Rp 750.000</div>
            </div>
            <div className="absolute -right-4 -bottom-4 text-6xl opacity-20 group-hover:scale-110 transition-transform">
              🕌
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};