import React, { useState } from 'react';
import { Star, Users, Clock, MapPin, Heart, Eye, Calendar, Award } from 'lucide-react';
import { TourPackage } from '../types';

interface PackageCardProps {
  package: TourPackage;
  onBooking: (pkg: TourPackage) => void;
  onViewDetails: (pkg: TourPackage) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ 
  package: pkg, 
  onBooking, 
  onViewDetails 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

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

  return (
    <div
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100 ${
        isHovered ? 'transform -translate-y-2 shadow-yellow-500/20' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className={`w-full h-56 object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {pkg.isPopular && (
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
              🔥 POPULER
            </div>
          )}
          {pkg.discount && (
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              -{pkg.discount}% OFF
            </div>
          )}
          {pkg.isPromo && (
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              🎉 PROMO
            </div>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 group/heart"
        >
          <Heart 
            className={`h-5 w-5 transition-all duration-300 ${
              isWishlisted 
                ? 'text-red-500 fill-red-500 scale-110' 
                : 'text-gray-600 group-hover/heart:text-red-500'
            }`} 
          />
        </button>

        {/* Duration Badge */}
        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
          <Clock className="h-4 w-4" />
          {pkg.duration}
        </div>

        {/* View Details Button */}
        <button
          onClick={() => onViewDetails(pkg)}
          className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-300 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Eye className="h-4 w-4" />
          Detail
        </button>
      </div>

      <div className="p-6">
        {/* Package Name */}
        <h3 className="font-bold text-xl text-gray-900 mb-2 line-clamp-2 leading-tight">
          {pkg.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {pkg.description}
        </p>

        {/* Highlights */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {pkg.highlights.slice(0, 3).map((highlight, index) => (
              <span
                key={index}
                className="text-xs bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full border border-yellow-200"
              >
                {highlight}
              </span>
            ))}
            {pkg.highlights.length > 3 && (
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                +{pkg.highlights.length - 3} lainnya
              </span>
            )}
          </div>
        </div>

        {/* Rating & Reviews */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-sm">{pkg.rating}</span>
            </div>
            <span className="text-gray-500 text-sm">({formatNumber(pkg.reviews)} ulasan)</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Users className="h-4 w-4" />
            <span>{formatNumber(pkg.participants)} peserta</span>
          </div>
        </div>

        {/* Seat Availability */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Ketersediaan Seat</span>
            <span className="text-sm font-medium text-gray-900">
              {availableSeats} dari {pkg.maxParticipants} tersisa
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

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-2xl font-bold text-yellow-600">
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

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => onBooking(pkg)}
            className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <Calendar className="h-4 w-4" />
            Booking Sekarang
          </button>
          
          <button
            onClick={() => onViewDetails(pkg)}
            className="px-4 py-3 border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black rounded-xl font-semibold transition-all duration-300"
          >
            Detail
          </button>
        </div>

        {/* Trust Badge */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 bg-gray-50 py-2 rounded-lg">
          <Award className="h-4 w-4 text-yellow-500" />
          <span>Terdaftar & Berizin Resmi</span>
        </div>
      </div>
    </div>
  );
};