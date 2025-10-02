import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RegionalFilter } from './components/RegionalFilter';
import { RegionalPage } from './components/RegionalPage';
import { WalisongoPage } from './components/WalisongoPage';
import { PrivateCustomPage } from './components/PrivateCustomPage';
import { PackageCard } from './components/PackageCard';
import { TestimonialSection } from './components/TestimonialSection';
import { AboutSection } from './components/AboutSection';
import { PartnersSection } from './components/PartnersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { ChatBot } from './components/ChatBot';
import { PackageDetailModal } from './components/PackageDetailModal';
import { BrochureSlider } from './components/BrochureSlider';
import { regions, regionalPackages } from './data/regions';
import { TourPackage } from './types';

function App() {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [currentView, setCurrentView] = useState<'home' | 'regional' | 'walisongo' | 'private-custom'>('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState<TourPackage[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);


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

  const handleRegionChange = (regionId: string) => {
    setSelectedRegion(regionId);
    if (regionId === 'walisongo') {
      setCurrentView('walisongo');
    } else if (regionId === 'private-custom') {
      setCurrentView('private-custom');
    } else if (regionId && regionId !== '') {
      setCurrentView('regional');
    } else {
      setCurrentView('home');
    }
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedRegion('');
  };

  const getCurrentRegion = () => {
    return regions.find(r => r.id === selectedRegion);
  };

  const getCurrentPackages = () => {
    if (selectedRegion === 'walisongo') {
      return regionalPackages['walisongo'] || [];
    }
    return regionalPackages[selectedRegion] || [];
  };

  // Show regional page
  if (currentView === 'regional' && selectedRegion) {
    const region = getCurrentRegion();
    if (region) {
      return (
        <div className="min-h-screen bg-white">
          <Header 
            cartItemsCount={cartItems.length}
            onCartClick={() => console.log('Cart clicked')}
          />
          <RegionalPage
            region={region}
            packages={getCurrentPackages()}
            onBack={handleBackToHome}
            onBooking={handleBooking}
          />
          <Footer />
          <WhatsAppFloat />
          <ChatBot />
        </div>
      );
    }
  }

  // Show Walisongo page
  if (currentView === 'walisongo') {
    return (
      <div className="min-h-screen bg-white">
        <Header 
          cartItemsCount={cartItems.length}
          onCartClick={() => console.log('Cart clicked')}
        />
        <WalisongoPage
          packages={getCurrentPackages()}
          onBack={handleBackToHome}
          onBooking={handleBooking}
        />
        <Footer />
        <WhatsAppFloat />
        <ChatBot />
      </div>
    );
  }

  // Show Private/Custom page
  if (currentView === 'private-custom') {
    return (
      <div className="min-h-screen bg-white">
        <Header 
          cartItemsCount={cartItems.length}
          onCartClick={() => console.log('Cart clicked')}
        />
        <PrivateCustomPage onBack={handleBackToHome} />
        <Footer />
        <WhatsAppFloat />
        <ChatBot />
      </div>
    );
  }

  // Show home page
  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartItemsCount={cartItems.length}
        onCartClick={() => console.log('Cart clicked')}
      />

      <Hero />

      <RegionalFilter
        selectedRegion={selectedRegion}
        onRegionChange={handleRegionChange}
      />


      <TestimonialSection />
      <AboutSection />
      <BrochureSlider />
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