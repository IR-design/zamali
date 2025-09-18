import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Play, ExternalLink } from 'lucide-react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  videos: string[];
  title: string;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  images,
  videos,
  title
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [isVideoPlaying, setIsVideoPlaying] = useState<string | null>(null);

  const allMedia = activeTab === 'photos' ? images : videos;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const nextMedia = () => {
    setCurrentIndex((prev) => (prev + 1) % allMedia.length);
  };

  const prevMedia = () => {
    setCurrentIndex((prev) => (prev - 1 + allMedia.length) % allMedia.length);
  };

  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const getYouTubeThumbnail = (url: string) => {
    const videoId = getYouTubeId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
      <div className="relative w-full h-full max-w-7xl mx-auto p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setActiveTab('photos');
                  setCurrentIndex(0);
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'photos'
                    ? 'bg-yellow-500 text-black'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                📸 Foto ({images.length})
              </button>
              <button
                onClick={() => {
                  setActiveTab('videos');
                  setCurrentIndex(0);
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'videos'
                    ? 'bg-yellow-500 text-black'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                🎥 Video ({videos.length})
              </button>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {allMedia.length > 0 ? (
            <div className="relative w-full max-w-5xl">
              {/* Main Media Display */}
              <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
                {activeTab === 'photos' ? (
                  <img
                    src={allMedia[currentIndex]}
                    alt={`${title} - ${currentIndex + 1}`}
                    className="w-full h-[65vh] object-cover"
                  />
                ) : (
                  <div className="relative w-full h-[65vh]">
                    {isVideoPlaying === allMedia[currentIndex] ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${getYouTubeId(allMedia[currentIndex])}?autoplay=1`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div className="relative w-full h-full cursor-pointer group">
                        <img
                          src={getYouTubeThumbnail(allMedia[currentIndex])}
                          alt={`Video ${currentIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                          <button
                            onClick={() => setIsVideoPlaying(allMedia[currentIndex])}
                            className="w-24 h-24 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all transform group-hover:scale-110 shadow-2xl animate-pulse hover:animate-none"
                          >
                            <Play className="h-10 w-10 text-white ml-1" />
                          </button>
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <a
                            href={allMedia[currentIndex]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-black/90 transition-colors"
                          >
                            <ExternalLink className="h-3 w-3" />
                            YouTube
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Navigation Arrows */}
                {allMedia.length > 1 && (
                  <>
                    <button
                      onClick={prevMedia}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextMedia}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Counter */}
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {currentIndex + 1} / {allMedia.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="mt-6 flex gap-3 overflow-x-auto pb-2 max-w-full">
                {allMedia.map((media, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      if (activeTab === 'videos') {
                        setIsVideoPlaying(null);
                      }
                    }}
                    className={`relative flex-shrink-0 w-24 h-18 rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${
                      index === currentIndex
                        ? 'border-yellow-500 scale-105'
                        : 'border-white/30 hover:border-white/60'
                    }`}
                  >
                    {activeTab === 'photos' ? (
                      <img
                        src={media}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="relative w-full h-full">
                        <img
                          src={getYouTubeThumbnail(media)}
                          alt={`Video thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                            <Play className="h-3 w-3 text-white ml-0.5" />
                          </div>
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Video Info */}
              {activeTab === 'videos' && (
                <div className="mt-4 text-center">
                  <p className="text-white/80 text-sm">
                    🎬 Klik video untuk memutar atau 
                    <a 
                      href={allMedia[currentIndex]} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-yellow-400 hover:text-yellow-300 ml-1 underline"
                    >
                      buka di YouTube
                    </a>
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center text-white">
              <p className="text-xl">Tidak ada {activeTab === 'photos' ? 'foto' : 'video'} tersedia</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};