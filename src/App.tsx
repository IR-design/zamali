import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { PackageCard } from './components/PackageCard';
import { TestimonialSection } from './components/TestimonialSection';
import { AboutSection } from './components/AboutSection';
import { PartnersSection } from './components/PartnersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { ChatBot } from './components/ChatBot';
import { PackageDetailModal } from './components/PackageDetailModal';
import { packages } from './data/packages';
import { TourPackage } from './types';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState<TourPackage[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);

  const filteredPackages = useMemo(() => {
    return packages.filter(pkg => {
      const matchesCategory = selectedCategory === '' || pkg.category === selectedCategory;
      const matchesSearch = pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pkg.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pkg.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const handleBooking = (pkg: TourPackage) => {
    const whatsappNumber = '6281234567890';
    const message = `Halo Zamali Tour! 

Saya tertarik untuk booking:
📦 *${pkg.name}*
💰 Harga: ${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(pkg.price)}
⏰ Durasi: ${pkg.duration}

Bisa minta informasi lebih lanjut dan jadwal keberangkatan terdekat?

Terima kasih! 🙏`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleViewDetails = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
    setIsPackageModalOpen(true);
  };

  const addToCart = (pkg: TourPackage) => {
    setCartItems(prev => [...prev, pkg]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemsCount={cartItems.length}
        onCartClick={() => console.log('Cart clicked')}
      />

      <Hero />

      <CategorySection
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Featured Packages Section */}
      <section id="paket" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Paket <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">Terpopuler</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pilihan paket wisata terbaik dengan harga terjangkau dan fasilitas lengkap untuk pengalaman tak terlupakan
            </p>
          </div>

          {/* Search & Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Cari paket wisata..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent shadow-sm"
                />
              </div>
              
              <div className="flex items-center gap-4">
                <select className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                  <option>Urutkan</option>
                  <option>Harga Terendah</option>
                  <option>Harga Tertinggi</option>
                  <option>Rating Tertinggi</option>
                  <option>Paling Populer</option>
                  <option>Durasi Terpendek</option>
                </select>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-3 mt-6">
              <button className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium hover:bg-yellow-200 transition-colors">
                🔥 Populer
              </button>
              <button className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium hover:bg-red-200 transition-colors">
                💥 Promo
              </button>
              <button className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition-colors">
                ✈️ Include Flight
              </button>
              <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors">
                🏨 Hotel Berbintang
              </button>
            </div>
          </div>

          {/* Results Info */}
          <div className="mb-8">
            <p className="text-gray-600">
              Menampilkan <span className="font-semibold text-gray-900">{filteredPackages.length}</span> paket wisata
              {selectedCategory && (
                <span> untuk kategori <span className="font-semibold text-yellow-600">{selectedCategory}</span></span>
              )}
            </p>
          </div>

          {/* Packages Grid */}
          {filteredPackages.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.172-2.709M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Paket tidak ditemukan
              </h3>
              <p className="text-gray-500 mb-4">
                Coba ubah kata kunci pencarian atau kategori
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                }}
                className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg, index) => (
                <div
                  key={pkg.id}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <PackageCard
                    package={pkg}
                    onBooking={handleBooking}
                    onViewDetails={handleViewDetails}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <TestimonialSection />
      <AboutSection />
      <PartnersSection />
      <ContactSection />
      <Footer />

      {/* Floating Elements */}
      <WhatsAppFloat />
      <ChatBot />

      {/* Package Detail Modal */}
      <PackageDetailModal
        isOpen={isPackageModalOpen}
        onClose={() => setIsPackageModalOpen(false)}
        package={selectedPackage}
        onBooking={handleBooking}
      />
    </div>
  );
}

export default App;