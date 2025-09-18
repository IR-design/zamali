import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Send, Award, Shield, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: 'Paket Sekolah', href: '#sekolah' },
    { name: 'Paket Bandung', href: '#bandung' },
    { name: 'Paket Bali', href: '#bali' },
    { name: 'Tour Walisongo', href: '#walisongo' },
    { name: 'Private Trip', href: '#private' },
    { name: 'Bulan Madu', href: '#honeymoon' }
  ];

  const companyLinks = [
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'Artikel & Tips', href: '#artikel' },
    { name: 'Karir', href: '#karir' },
    { name: 'Partnership', href: '#partnership' }
  ];

  const supportLinks = [
    { name: 'FAQ', href: '#faq' },
    { name: 'Syarat & Ketentuan', href: '#terms' },
    { name: 'Kebijakan Privasi', href: '#privacy' },
    { name: 'Panduan Booking', href: '#guide' },
    { name: 'Refund Policy', href: '#refund' },
    { name: 'Customer Service', href: '#support' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Dapatkan <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Promo Eksklusif</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Berlangganan newsletter kami dan dapatkan info promo terbaru, tips travel, dan penawaran khusus langsung di email Anda!
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan email Anda"
                  className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent backdrop-blur-sm"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="h-4 w-4" />
                  Subscribe
                </button>
              </div>
              {isSubscribed && (
                <p className="text-green-400 text-sm mt-2 animate-pulse">
                  ✅ Terima kasih! Anda telah berlangganan newsletter kami.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl overflow-hidden mr-3 shadow-xl bg-gradient-to-br from-yellow-50 to-white p-0.5">
                <img 
                  src="https://ejwjmtsmlkividghpvgh.supabase.co/storage/v1/object/sign/Zamali/WhatsApp%20Image%202025-09-11%20at%2011.39.04.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mODM4NTcxMC0xNjdmLTQwZjctYmE0Zi1lYzVlNDkzMWY0MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJaYW1hbGkvV2hhdHNBcHAgSW1hZ2UgMjAyNS0wOS0xMSBhdCAxMS4zOS4wNC5qcGVnIiwiaWF0IjoxNzU3NTgyODQyLCJleHAiOjIwNzI5NDI4NDJ9.szHgOhh90MZgFZ8DedTL3k7CK9ZMY3dSiLldf_7-VB8"
                  alt="Zamali Tour Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zamali Tour</h3>
                <p className="text-sm text-gray-400">Travel & Tourism</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Mitra terpercaya untuk perjalanan wisata Anda sejak 2014. Amanah, Berkah, dan Terpercaya.
            </p>

            {/* Values */}
            <div className="flex gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
                <Shield className="h-4 w-4 text-blue-400" />
                <span className="text-sm">Amanah</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
                <Heart className="h-4 w-4 text-green-400" />
                <span className="text-sm">Berkah</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
                <Award className="h-4 w-4 text-yellow-400" />
                <span className="text-sm">Terpercaya</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-4 w-4 text-yellow-400" />
                <span className="text-sm">Jl. Merdeka No. 123, Jakarta</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-sm">0812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-sm">info@zamalitour.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Paket Wisata</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-sm hover:translate-x-1 transform duration-300 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Perusahaan</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-sm hover:translate-x-1 transform duration-300 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Bantuan</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors text-sm hover:translate-x-1 transform duration-300 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Certifications */}
        <div className="border-t border-gray-700 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Follow Kami:</span>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <Award className="h-5 w-5 text-yellow-400" />
                <span className="text-sm">Licensed Travel Agent</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm">ISO 9001:2015</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Zamali Tour & Travel. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};