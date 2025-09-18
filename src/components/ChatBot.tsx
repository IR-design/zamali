import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, X, MessageCircle } from 'lucide-react';
import { ChatMessage, QuickReply } from '../types';
import { quickReplies } from '../data/packages';

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      message: 'Halo! Selamat datang di Zamali Tour 👋\n\nSaya adalah asisten virtual yang siap membantu Anda menemukan paket wisata terbaik. Ada yang bisa saya bantu?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      message: message.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(message.trim());
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        message: botResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Check quick replies first
    const quickReply = quickReplies.find(reply => 
      message.includes(reply.text.toLowerCase()) || 
      reply.text.toLowerCase().includes(message)
    );
    
    if (quickReply) {
      return quickReply.response;
    }

    // Keyword-based responses
    if (message.includes('bali')) {
      return 'Paket Bali kami sangat populer! 🏝️\n\n✈️ Bali 5D3N - Rp 2.850.000\n✈️ Bali 6D4N - Rp 3.200.000\n\nSudah termasuk:\n• Tiket pesawat PP\n• Hotel berbintang\n• Tour guide\n• Makan sesuai program\n\nMau info lebih detail?';
    }

    if (message.includes('bandung')) {
      return 'Paket Bandung favorit keluarga! 🏔️\n\n🚌 Bandung 1 Hari - Rp 250.000\n🚌 Bandung 2D1N - Rp 450.000\n\nHighlight:\n• Kawah Putih\n• Factory Outlet\n• Kuliner khas Bandung\n\nGratis dokumentasi foto!';
    }

    if (message.includes('jogja') || message.includes('yogya')) {
      return 'Jogja kota budaya yang menawan! 🏛️\n\n🚌 Jogja 3D2N - Rp 750.000\n🚌 Jogja + Dieng 4D3N - Rp 950.000\n\nWajib kunjung:\n• Borobudur sunrise\n• Keraton Yogyakarta\n• Malioboro Street\n• Kuliner gudeg\n\nAda promo grup lho!';
    }

    if (message.includes('walisongo') || message.includes('ziarah')) {
      return 'Tour Walisongo penuh berkah! 🕌\n\n🚌 Walisongo Jateng 3D2N - Rp 850.000\n🚌 Walisongo Jatim 4D3N - Rp 1.100.000\n\nZiarah ke:\n• Makam Sunan Kudus\n• Makam Sunan Kalijaga\n• Makam Sunan Ampel\n\nDipandu guide spiritual berpengalaman.';
    }

    if (message.includes('honeymoon') || message.includes('bulan madu')) {
      return 'Paket bulan madu romantis! 💕\n\n✈️ Honeymoon Bali 4D3N - Rp 4.500.000\n✈️ Honeymoon Lombok 5D4N - Rp 5.200.000\n\nSpesial untuk pasangan:\n• Hotel resort mewah\n• Romantic dinner\n• Couple spa\n• Photography session\n\nBikin momen tak terlupakan!';
    }

    if (message.includes('harga') || message.includes('biaya')) {
      return 'Harga paket kami sangat kompetitif! 💰\n\n📋 Paket Populer:\n• Bandung 2D1N: Rp 450.000\n• Jogja 3D2N: Rp 750.000\n• Bali 5D3N: Rp 2.850.000\n\n🎉 Promo saat ini:\n• Diskon 15% grup 20+ orang\n• Cashback 10% repeat customer\n\nHarga sudah termasuk banyak fasilitas!';
    }

    if (message.includes('booking') || message.includes('pesan')) {
      return 'Cara booking mudah banget! 📝\n\n1️⃣ Pilih paket yang diinginkan\n2️⃣ Isi form booking\n3️⃣ Transfer DP 30%\n4️⃣ Kirim bukti transfer\n5️⃣ Konfirmasi booking\n\n💳 Pembayaran:\n• Transfer bank\n• QRIS\n• Cicilan 0%\n\nMau booking paket apa?';
    }

    if (message.includes('kontak') || message.includes('hubungi')) {
      return 'Hubungi kami kapan saja! 📞\n\n📱 WhatsApp: 0812-3456-7890\n📧 Email: info@zamalitour.com\n🏢 Kantor: Jl. Merdeka No. 123, Jakarta\n⏰ Jam kerja: 08:00 - 20:00 WIB\n\nTim kami siap membantu 24/7!';
    }

    // Default response
    return 'Terima kasih atas pertanyaannya! 😊\n\nSaya bisa membantu Anda dengan:\n• Info paket wisata\n• Harga dan promo\n• Cara booking\n• Jadwal keberangkatan\n\nAtau langsung chat admin kami via WhatsApp untuk konsultasi lebih detail!';
  };

  const handleQuickReply = (reply: QuickReply) => {
    handleSendMessage(reply.text);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 left-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center z-50 animate-pulse hover:animate-none transform hover:scale-110"
      >
        <Bot className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col animate-in slide-in-from-bottom-4 duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-t-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Asisten Zamali</h3>
              <p className="text-xs text-blue-100">Online • Siap membantu</p>
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

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] ${message.isUser ? 'order-2' : 'order-1'}`}>
              <div
                className={`p-3 rounded-2xl ${
                  message.isUser
                    ? 'bg-blue-500 text-white rounded-br-md'
                    : 'bg-gray-100 text-gray-800 rounded-bl-md'
                }`}
              >
                <p className="text-sm whitespace-pre-line">{message.message}</p>
              </div>
              <p className="text-xs text-gray-500 mt-1 px-2">
                {message.timestamp.toLocaleTimeString('id-ID', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </p>
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              message.isUser ? 'order-1 mr-2 bg-blue-500' : 'order-2 ml-2 bg-gray-300'
            }`}>
              {message.isUser ? (
                <User className="h-4 w-4 text-white" />
              ) : (
                <Bot className="h-4 w-4 text-gray-600" />
              )}
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-2xl rounded-bl-md p-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      {messages.length === 1 && (
        <div className="px-4 pb-2">
          <div className="flex flex-wrap gap-2">
            {quickReplies.slice(0, 3).map((reply) => (
              <button
                key={reply.id}
                onClick={() => handleQuickReply(reply)}
                className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
              >
                {reply.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
            placeholder="Ketik pesan Anda..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
          <button
            onClick={() => handleSendMessage(inputMessage)}
            disabled={!inputMessage.trim()}
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white p-2 rounded-xl transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};