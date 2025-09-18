import React from 'react';
import { Award, Shield, Star, CheckCircle } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  const partners = [
    {
      id: 1,
      name: 'Garuda Indonesia',
      logo: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=200',
      category: 'Airlines',
      description: 'Official airline partner untuk domestic & international flights'
    },
    {
      id: 2,
      name: 'Hotel Santika',
      logo: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=200',
      category: 'Hotels',
      description: 'Premium hotel chain partner di seluruh Indonesia'
    },
    {
      id: 3,
      name: 'Bank BCA',
      logo: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=200',
      category: 'Banking',
      description: 'Official banking partner untuk payment solutions'
    },
    {
      id: 4,
      name: 'Traveloka',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200',
      category: 'Technology',
      description: 'Technology partner untuk booking platform'
    },
    {
      id: 5,
      name: 'Astra International',
      logo: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=200',
      category: 'Transportation',
      description: 'Fleet partner untuk comfortable transportation'
    },
    {
      id: 6,
      name: 'Telkomsel',
      logo: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=200',
      category: 'Telecommunications',
      description: 'Connectivity partner untuk seamless communication'
    },
    {
      id: 7,
      name: 'Mandiri Bank',
      logo: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=200',
      category: 'Banking',
      description: 'Financial services partner untuk secure transactions'
    },
    {
      id: 8,
      name: 'Indonesia Tourism',
      logo: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=200',
      category: 'Government',
      description: 'Official tourism board partnership'
    }
  ];

  const certifications = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Licensed Travel Agent',
      description: 'Terdaftar resmi di Kementerian Pariwisata RI',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'ISO 9001:2015',
      description: 'Sertifikat manajemen kualitas internasional',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'ASITA Member',
      description: 'Anggota Asosiasi Tour & Travel Indonesia',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'IATA Certified',
      description: 'International Air Transport Association',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bermitra dengan perusahaan terpercaya untuk memberikan layanan terbaik dan pengalaman wisata yang tak terlupakan
          </p>
        </div>

        {/* Partners Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Trusted <span className="text-yellow-600">Business Partners</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div
                key={partner.id}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                    {partner.name}
                  </h4>
                  <div className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full mb-3 inline-block">
                    {partner.category}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {partner.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-yellow-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Certifications & <span className="text-yellow-600">Memberships</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="text-center group hover:-translate-y-2 transition-all duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 text-white group-hover:scale-110`}>
                  {cert.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Why Choose <span className="text-yellow-600">Zamali Tour</span>?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Terpercaya & Legal</h4>
              <p className="text-gray-700 text-sm">
                Terdaftar resmi dengan izin lengkap dan bermitra dengan perusahaan terpercaya
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Kualitas Premium</h4>
              <p className="text-gray-700 text-sm">
                Standar internasional dengan sertifikasi ISO dan kemitraan strategis
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 border border-yellow-200">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Pengalaman Terbaik</h4>
              <p className="text-gray-700 text-sm">
                Didukung teknologi modern dan jaringan partner untuk layanan optimal
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Travel with Us?</h3>
            <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan pelanggan yang telah mempercayakan perjalanan terbaik mereka bersama Zamali Tour
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Lihat Paket Tour
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};