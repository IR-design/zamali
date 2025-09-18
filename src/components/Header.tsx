import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, Phone, Mail, MapPin, User, Heart, Bell } from 'lucide-react';

interface HeaderProps {
  onMenuClick?: () => void;
  onCartClick?: () => void;
  cartItemsCount?: number;
}

export const Header: React.FC<HeaderProps> = ({ 
  onMenuClick, 
  onCartClick, 
  cartItemsCount = 0 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const menuItems = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang Kami', href: '#tentang' },
    {
      name: 'Paket Wisata',
      href: '#paket',
      submenu: [
        { name: 'Paket Sekolah', href: '#sekolah', desc: 'LDKS, Outing Class, Study Tour' },
        { name: 'Paket Bandung', href: '#bandung', desc: '1-2 Hari, City Tour' },
        { name: 'Paket Dieng/Jogja', href: '#jogja', desc: '3-4 Hari, Budaya & Alam' },
        { name: 'Paket Bali/Lombok', href: '#bali', desc: '4-6 Hari, Pantai & Budaya' },
        { name: 'Paket Bulan Madu', href: '#honeymoon', desc: 'Romantic Package' },
        { name: 'Tour Walisongo', href: '#walisongo', desc: 'Ziarah Spiritual' },
        { name: 'Private Trip', href: '#private', desc: 'Custom Itinerary' }
      ]
    },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'Artikel', href: '#artikel' },
    { name: 'Kontak', href: '#kontak' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              0812-3456-7890
            </span>
            <span className="flex items-center gap-1">
              <Mail className="h-3 w-3" />
              info@zamalitour.com
            </span>
            <span className="hidden md:flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Jakarta • Bandung • Yogyakarta
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:block">🎉 Promo Akhir Tahun - Diskon 20%!</span>
            <span>📱 Download App</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center mr-8">
                <div className="w-20 h-20 rounded-2xl overflow-hidden mr-4 shadow-2xl transform hover:scale-110 transition-all duration-300 bg-gradient-to-br from-yellow-50 to-white p-1">
                  <img 
                    src="https://ejwjmtsmlkividghpvgh.supabase.co/storage/v1/object/sign/Zamali/WhatsApp%20Image%202025-09-11%20at%2011.39.04.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mODM4NTcxMC0xNjdmLTQwZjctYmE0Zi1lYzVlNDkzMWY0MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJaYW1hbGkvV2hhdHNBcHAgSW1hZ2UgMjAyNS0wOS0xMSBhdCAxMS4zOS4wNC5qcGVnIiwiaWF0IjoxNzU3NTgyODQyLCJleHAiOjIwNzI5NDI4NDJ9.szHgOhh90MZgFZ8DedTL3k7CK9ZMY3dSiLldf_7-VB8"
                    alt="Zamali Tour Logo"
                    className="w-full h-full object-contain rounded-xl filter drop-shadow-lg"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent tracking-tight">
                    Zamali
                  </h1>
                  <p className="text-sm text-gray-700 font-semibold tracking-wide">Tour & Travel</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveSubmenu(item.submenu ? item.name : null)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <a
                    href={item.href}
                    className="px-4 py-3 text-gray-700 hover:text-yellow-600 font-medium transition-all duration-300 hover:bg-yellow-50 rounded-lg flex items-center gap-1"
                  >
                    {item.name}
                    {item.submenu && (
                      <svg className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>

                  {/* Submenu */}
                  {item.submenu && activeSubmenu === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-4 z-50 animate-in slide-in-from-top-2 duration-300">
                      <div className="px-4 pb-3 border-b border-gray-100">
                        <h3 className="font-semibold text-gray-900 text-lg">Paket Wisata</h3>
                        <p className="text-sm text-gray-600">Pilih destinasi impian Anda</p>
                      </div>
                      {item.submenu.map((subItem, index) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 hover:bg-yellow-50 transition-colors group/item"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div className="font-medium text-gray-900 group-hover/item:text-yellow-600 transition-colors">
                            {subItem.name}
                          </div>
                          <div className="text-sm text-gray-600 mt-1">{subItem.desc}</div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search & Actions */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="hidden md:flex relative">
                <input
                  type="text"
                  placeholder="Cari paket wisata..."
                  className="w-64 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-yellow-600">
                  <Search className="h-5 w-5" />
                </button>
              </div>

              {/* Wishlist */}
              <button className="p-2 text-gray-600 hover:text-yellow-600 transition-colors relative hover:bg-yellow-50 rounded-lg">
                <Heart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>

              {/* Notifications */}
              <button className="p-2 text-gray-600 hover:text-yellow-600 transition-colors relative hover:bg-yellow-50 rounded-lg">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  2
                </span>
              </button>

              {/* Cart */}
              <button
                onClick={onCartClick}
                className="p-2 text-gray-600 hover:text-yellow-600 transition-colors relative hover:bg-yellow-50 rounded-lg"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>

              {/* Profile */}
              <button className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors hover:bg-yellow-50 px-3 py-2 rounded-lg">
                <User className="h-5 w-5" />
                <div className="hidden lg:block text-left">
                  <div className="text-sm font-medium">Masuk</div>
                  <div className="text-xs text-gray-500">Daftar</div>
                </div>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-yellow-600 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Cari paket wisata..."
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>

              {menuItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors font-medium"
                    onClick={() => {
                      if (!item.submenu) {
                        setIsMenuOpen(false);
                      }
                    }}
                  >
                    {item.name}
                  </a>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};