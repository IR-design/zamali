import React, { useState } from 'react';
import { ArrowLeft, Star, Users, Clock, Calendar, MapPin, Check, Heart } from 'lucide-react';
import { TourPackage } from '../types';
import { PackageCard } from './PackageCard';
import { PackageDetailModal } from './PackageDetailModal';

interface WalisongoPageProps {
  packages: TourPackage[];
  onBack: () => void;
  onBooking: (pkg: TourPackage) => void;
}

export const WalisongoPage: React.FC<WalisongoPageProps> = ({
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

  const walisongoList = [
    { name: 'Sunan Gresik', location: 'Gresik, Jawa Timur' },
    { name: 'Sunan Ampel', location: 'Surabaya, Jawa Timur' },
    { name: 'Sunan Bonang', location: 'Tuban, Jawa Timur' },
    { name: 'Sunan Drajat', location: 'Lamongan, Jawa Timur' },
    { name: 'Sunan Kudus', location: 'Kudus, Jawa Tengah' },
    { name: 'Sunan Muria', location: 'Kudus, Jawa Tengah' },
    { name: 'Sunan Kalijaga', location: 'Kadilangu, Jawa Tengah' },
    { name: 'Sunan Gunung Jati', location: 'Cirebon, Jawa Barat' },
    { name: 'Sunan Giri', location: 'Gresik, Jawa Timur' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=1600)' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        
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

            <div className="text-white text-center">
              <div className="text-8xl mb-6">🕌</div>
              <h1 className="text-5xl font-bold mb-4">Tour Walisongo</h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Perjalanan spiritual mengunjungi makam para Wali Songo, penyebar agama Islam di tanah Jawa. 
                Rasakan kedamaian dan keberkahan dalam setiap langkah ziarah Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Walisongo List */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Para <span className="text-green-600">Wali Songo</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {walisongoList.map((wali, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                      {wali.name}
                    </h3>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {wali.location}
                    </p>
                  </div>
                </div>
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
              Paket <span className="text-green-600">Ziarah Walisongo</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pilihan paket ziarah spiritual dengan panduan berpengalaman dan fasilitas nyaman untuk perjalanan yang berkesan
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
                <div className="text-8xl">🕌</div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Paket Segera Hadir
              </h3>
              <p className="text-gray-500 mb-6">
                Kami sedang menyiapkan paket ziarah Walisongo terbaik untuk Anda
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Hubungi Kami untuk Info
              </button>
            </div>
          )}

          {/* Private Group Option */}
          <div className="mt-16 bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 border border-green-200">
            <div className="text-center">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Request Private Group</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Ingin ziarah dengan grup pribadi? Kami dapat mengatur paket khusus sesuai kebutuhan dan jadwal Anda
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Request Private Group
                </button>
                <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                  Konsultasi Gratis
                </button>
              </div>
            </div>
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