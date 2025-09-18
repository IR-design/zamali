import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = '6281234567890';
  const defaultMessage = 'Halo Zamali Tour! Saya tertarik dengan paket wisata Anda. Bisa minta informasi lebih lanjut?';

  const openWhatsApp = (message: string = defaultMessage) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const quickMessages = [
    'Info paket Bali terbaru',
    'Harga paket Bandung weekend',
    'Jadwal tour Walisongo',
    'Paket honeymoon romantis',
    'Custom trip untuk keluarga'
  ];

  return (
    <>
      {/* Chat Bubble */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Zamali Tour</h3>
                  <p className="text-xs text-green-100">Online • Siap membantu</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="mb-4">
              <div className="bg-gray-100 rounded-2xl p-3 mb-3">
                <p className="text-sm text-gray-700">
                  👋 Halo! Selamat datang di Zamali Tour. Ada yang bisa kami bantu?
                </p>
              </div>
            </div>

            {/* Quick Replies */}
            <div className="space-y-2 mb-4">
              <p className="text-xs text-gray-600 font-medium">Pilih topik:</p>
              {quickMessages.map((message, index) => (
                <button
                  key={index}
                  onClick={() => openWhatsApp(message)}
                  className="w-full text-left p-3 bg-gray-50 hover:bg-green-50 rounded-xl text-sm text-gray-700 hover:text-green-700 transition-colors border border-gray-200 hover:border-green-300"
                >
                  {message}
                </button>
              ))}
            </div>

            {/* Main CTA */}
            <button
              onClick={() => openWhatsApp()}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="h-4 w-4" />
              Chat via WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center z-50 animate-bounce hover:animate-none transform hover:scale-110"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {/* Notification Badge */}
      {!isOpen && (
        <div className="fixed bottom-20 right-4 bg-red-500 text-white text-xs rounded-full px-2 py-1 z-50 animate-pulse">
          Ada pesan baru!
        </div>
      )}
    </>
  );
};