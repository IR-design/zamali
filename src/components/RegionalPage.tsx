import React, { useState } from 'react';
import { ArrowLeft, Star, Users, Clock, Calendar, MapPin, Check } from 'lucide-react';
import { Region, TourPackage } from '../types';
import { PackageCard } from './PackageCard';
import { PackageDetailModal } from './PackageDetailModal';

interface RegionalPageProps {
  region: Region;
  packages: TourPackage[];
  onBack: () => void;
  onBooking: (pkg: TourPackage) => void;
}

export const RegionalPage: React.FC<RegionalPageProps> = ({
  region,
  packages,
  onBack,
  onBooking
}) => {
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);

  const handleViewDetails = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
    setIsPackageModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${region.heroImage})` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Back Button */}
            <button
              onClick={onBack}
              className="mb-6 flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali
            </button>

            <div className="text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-6xl">{region.icon}</div>
                <div>
                  <h1 className="text-5xl font-bold mb-2">{region.name}</h1>
                  <p className="text-xl text-gray-200">{packages.length} paket wisata tersedia</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
                {region.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Highlight Destinasi <span className="text-blue-600">{region.name}</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {region.highlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{highlight}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Paket Wisata <span className="text-blue-600">{region.name}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pilihan paket terbaik untuk menjelajahi keindahan {region.name} dengan fasilitas lengkap dan harga terjangkau
            </p>
          </div>

          {packages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={pkg.id}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <PackageCard
                    package={pkg}
                    onBooking={onBooking}
                    onViewDetails={handleViewDetails}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <MapPin className="mx-auto h-20 w-20" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Paket Segera Hadir
              </h3>
              <p className="text-gray-500 mb-6">
                Kami sedang menyiapkan paket wisata terbaik untuk {region.name}
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Hubungi Kami untuk Info
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Siap Menjelajahi {region.name}?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Hubungi tim kami untuk konsultasi gratis dan dapatkan penawaran terbaik untuk perjalanan Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Konsultasi Gratis
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
              Lihat Semua Paket
            </button>
          </div>
        </div>
      </section>

      {/* Package Detail Modal */}
      <PackageDetailModal
        isOpen={isPackageModalOpen}
        onClose={() => setIsPackageModalOpen(false)}
        package={selectedPackage}
        onBooking={onBooking}
      />
    </div>
  );
};