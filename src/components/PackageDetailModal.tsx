import React, { useState } from 'react';
import { X, Star, Users, Clock, MapPin, Calendar, Check, Heart, Share2, Camera, Video } from 'lucide-react';
import { TourPackage } from '../types';
import { GalleryModal } from './GalleryModal';

interface PackageDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  package: TourPackage | null;
  onBooking: (pkg: TourPackage) => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  isOpen,
  onClose,
  package: pkg,
  onBooking
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'facilities' | 'testimonials'>('overview');
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!isOpen || !pkg) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const availableSeats = pkg.maxParticipants - pkg.participants;
  const seatPercentage = (pkg.participants / pkg.maxParticipants) * 100;

  const handleBookingClick = () => {
    onBooking(pkg);
    onClose();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: pkg.name,
        text: pkg.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-75" onClick={onClose} />
        
        <div className="absolute inset-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="relative">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Header Controls */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </button>
                  <button
                    onClick={onClose}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <X className="h-5 w-5 text-gray-600" />
                  </button>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h1 className="text-3xl font-bold mb-2">{pkg.name}</h1>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {pkg.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {pkg.rating} ({formatNumber(pkg.reviews)} ulasan)
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {formatNumber(pkg.participants)} peserta
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {pkg.isPopular && (
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      🔥 POPULER
                    </div>
                  )}
                  {pkg.discount && (
                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      -{pkg.discount}% OFF
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden flex">
              {/* Main Content */}
              <div className="flex-1 overflow-y-auto">
                {/* Tabs */}
                <div className="border-b border-gray-200 px-6">
                  <div className="flex gap-8">
                    {[
                      { id: 'overview', label: 'Overview', icon: '📋' },
                      { id: 'itinerary', label: 'Itinerary', icon: '🗓️' },
                      { id: 'facilities', label: 'Fasilitas', icon: '✅' },
                      { id: 'testimonials', label: 'Testimoni', icon: '💬' }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                          activeTab === tab.id
                            ? 'border-yellow-500 text-yellow-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        {tab.icon} {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab Content */}
                <div className="p-6">
                  {activeTab === 'overview' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Deskripsi Paket</h3>
                        <p className="text-gray-700 leading-relaxed">{pkg.description}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Highlight Utama</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {pkg.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                                <Check className="h-4 w-4 text-white" />
                              </div>
                              <span className="text-gray-800 font-medium">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Gallery Preview */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-900">Galeri & Video</h3>
                          <button
                            onClick={() => setIsGalleryOpen(true)}
                            className="text-yellow-600 hover:text-yellow-700 font-medium text-sm flex items-center gap-1"
                          >
                            Lihat Semua
                          </button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {pkg.gallery.slice(0, 3).map((image, index) => (
                            <div key={index} className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group">
                              <img
                                src={image}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                onClick={() => setIsGalleryOpen(true)}
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                <Camera className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                            </div>
                          ))}
                          <button
                            onClick={() => setIsGalleryOpen(true)}
                            className="aspect-square bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex flex-col items-center justify-center hover:from-red-600 hover:to-red-700 transition-all group transform hover:scale-105 shadow-lg"
                          >
                            <Video className="h-6 w-6 text-white mb-1" />
                            <span className="text-xs text-white font-medium">{pkg.videos?.length || 0} Video</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'itinerary' && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-gray-900">Itinerary Perjalanan</h3>
                      {pkg.itinerary.map((day, dayIndex) => (
                        <div key={dayIndex} className="border border-gray-200 rounded-xl p-6">
                          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">
                              {day.day}
                            </div>
                            {day.title}
                          </h4>
                          <div className="space-y-3">
                            {day.activities.map((activity, actIndex) => (
                              <div key={actIndex} className="flex gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                <div className="text-sm font-mono text-yellow-600 bg-yellow-50 px-2 py-1 rounded">
                                  {activity.time}
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium text-gray-900">{activity.activity}</p>
                                  {activity.location && (
                                    <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                                      <MapPin className="h-3 w-3" />
                                      {activity.location}
                                    </p>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'facilities' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 text-green-700">✅ Sudah Termasuk</h3>
                        <div className="space-y-3">
                          {pkg.included.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                              <Check className="h-5 w-5 text-green-600" />
                              <span className="text-gray-800">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 text-red-700">❌ Tidak Termasuk</h3>
                        <div className="space-y-3">
                          {pkg.excluded.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                              <X className="h-5 w-5 text-red-600" />
                              <span className="text-gray-800">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'testimonials' && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-gray-900">Testimoni Peserta</h3>
                      {pkg.testimonials.length > 0 ? (
                        <div className="space-y-4">
                          {pkg.testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                              <div className="flex items-start gap-4">
                                <img
                                  src={testimonial.avatar}
                                  alt={testimonial.name}
                                  className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                    <span className="text-sm text-gray-500">• {testimonial.location}</span>
                                  </div>
                                  <div className="flex items-center gap-1 mb-2">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-4 w-4 ${
                                          i < testimonial.rating
                                            ? 'fill-yellow-400 text-yellow-400'
                                            : 'text-gray-300'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                                  <p className="text-sm text-gray-500 mt-2">
                                    {testimonial.date.toLocaleDateString('id-ID')}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8 text-gray-500">
                          <Users className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                          <p>Belum ada testimoni untuk paket ini</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="w-80 border-l border-gray-200 bg-gray-50 p-6">
                {/* Price */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-3xl font-bold text-yellow-600">
                        {formatPrice(pkg.price)}
                      </span>
                      {pkg.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          {formatPrice(pkg.originalPrice)}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">per orang (min. 2 orang)</p>
                  </div>

                  {/* Seat Availability */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Ketersediaan Seat</span>
                      <span className="text-sm font-medium text-gray-900">
                        {availableSeats} tersisa
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${
                          seatPercentage > 80 
                            ? 'bg-gradient-to-r from-red-500 to-red-600' 
                            : seatPercentage > 60 
                            ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' 
                            : 'bg-gradient-to-r from-green-500 to-green-600'
                        }`}
                        style={{ width: `${seatPercentage}%` }}
                      />
                    </div>
                    {seatPercentage > 80 && (
                      <p className="text-xs text-red-600 mt-1 font-medium animate-pulse">
                        ⚡ Segera habis! Booking sekarang
                      </p>
                    )}
                  </div>

                  <button
                    onClick={handleBookingClick}
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 mb-3"
                  >
                    <Calendar className="h-4 w-4" />
                    Booking Sekarang
                  </button>

                  <button
                    onClick={() => setIsGalleryOpen(true)}
                    className="w-full border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Camera className="h-4 w-4" />
                    Lihat Galeri
                  </button>
                </div>

                {/* Quick Info */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Info Cepat</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Kategori:</span>
                      <span className="font-medium capitalize">{pkg.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Durasi:</span>
                      <span className="font-medium">{pkg.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Max Peserta:</span>
                      <span className="font-medium">{pkg.maxParticipants} orang</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating:</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{pkg.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      <GalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={pkg.gallery}
        videos={pkg.videos || []}
        title={pkg.name}
      />
    </>
  );
};