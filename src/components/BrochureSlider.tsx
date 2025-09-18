import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Download, Share2, Eye } from 'lucide-react';

export const BrochureSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Array brosur - bisa ditambah lebih banyak
  const brochures = [
    {
      id: 1,
      title: 'Paket Wisata Thailand',
      image: 'https://qaiiuzngbefoftzeohae.supabase.co/storage/v1/object/sign/Zamali/Blue%20and%20White%20Modern%20Thailand%20Travel%20Poster%20(6).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kZjY4MmI1ZC1hNmY1LTRhYzYtOWNhZS02MDE1NDY5YzA1ZjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJaYW1hbGkvQmx1ZSBhbmQgV2hpdGUgTW9kZXJuIFRoYWlsYW5kIFRyYXZlbCBQb3N0ZXIgKDYpLnBuZyIsImlhdCI6MTc1ODIwNDY3NywiZXhwIjoxODg0MzQ4Njc3fQ.U1z05MnVsJ3cevSM63y0_8S2Oz2RpRBbi8Nj16o8AC8',
      description: 'Jelajahi keindahan Thailand dengan paket lengkap dari Zamali Tour',
      category: 'International'
    },
    {
      id: 2,
      title: 'Paket Wisata Bali',
      image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Nikmati pesona Pulau Dewata dengan fasilitas terbaik',
      category: 'Domestic'
    },
    {
      id: 3,
      title: 'Paket Wisata Jogja',
      image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Eksplorasi budaya dan sejarah Kota Gudeg',
      category: 'Domestic'
    }
  ];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % brochures.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [brochures.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % brochures.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + brochures.length) % brochures.length);
  };

  const handleDownload = (imageUrl: string, title: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${title.replace(/\s+/g, '_')}_Brochure.png`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async (imageUrl: string, title: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Lihat brosur ${title} dari Zamali Tour`,
          url: imageUrl
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(imageUrl);
      alert('Link brosur telah disalin ke clipboard!');
    }
  };

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Brosur <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Wisata</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Lihat koleksi brosur paket wisata terbaru kami dengan desain menarik dan informasi lengkap
            </p>
          </div>

          {/* Brochure Slider */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {brochures.map((brochure, index) => (
                  <div
                    key={brochure.id}
                    className="w-full flex-shrink-0 relative group"
                  >
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <img
                        src={brochure.image}
                        alt={brochure.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Action Buttons */}
                      <div className="absolute bottom-6 left-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="flex-1 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-white flex items-center justify-center gap-2 shadow-lg"
                        >
                          <Eye className="h-4 w-4" />
                          Lihat Detail
                        </button>
                        <button
                          onClick={() => handleDownload(brochure.image, brochure.title)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                        >
                          <Download className="h-4 w-4" />
                          Download
                        </button>
                        <button
                          onClick={() => handleShare(brochure.image, brochure.title)}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                        >
                          <Share2 className="h-4 w-4" />
                          Share
                        </button>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-6 left-6">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                          {brochure.category}
                        </span>
                      </div>
                    </div>

                    {/* Info Panel */}
                    <div className="p-6 bg-white">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{brochure.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{brochure.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
              {brochures.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className="absolute bottom-6 right-6 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
              {currentSlide + 1} / {brochures.length}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => handleDownload(brochures[currentSlide].image, brochures[currentSlide].title)}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
              >
                <Download className="h-5 w-5" />
                Download Brosur Ini
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                Lihat Semua Brosur
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Full View */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] overflow-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-all duration-300 z-10"
            >
              <ChevronRight className="h-6 w-6 rotate-45" />
            </button>
            <img
              src={brochures[currentSlide].image}
              alt={brochures[currentSlide].title}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm text-white p-4 rounded-xl">
              <h3 className="text-xl font-bold mb-2">{brochures[currentSlide].title}</h3>
              <p className="text-gray-200">{brochures[currentSlide].description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};