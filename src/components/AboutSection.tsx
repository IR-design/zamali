import React from 'react';
import { Award, Users, MapPin, Clock, Shield, Heart, Star, Plane } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const achievements = [
    { icon: <Users className="h-8 w-8" />, number: '5000+', label: 'Happy Travelers', color: 'text-blue-500' },
    { icon: <MapPin className="h-8 w-8" />, number: '50+', label: 'Destinasi', color: 'text-green-500' },
    { icon: <Award className="h-8 w-8" />, number: '10+', label: 'Tahun Pengalaman', color: 'text-purple-500' },
    { icon: <Star className="h-8 w-8" />, number: '4.9', label: 'Rating', color: 'text-yellow-500' }
  ];

  const values = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: 'Amanah',
      description: 'Kepercayaan Anda adalah prioritas utama kami. Setiap janji akan kami tepati dengan penuh tanggung jawab.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: 'Berkah',
      description: 'Setiap perjalanan dirancang untuk memberikan pengalaman yang bermakna dan penuh berkah bagi semua peserta.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: 'Terpercaya',
      description: 'Dengan pengalaman 10+ tahun, kami telah melayani ribuan pelanggan dengan standar kualitas terbaik.',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tentang <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">Zamali Tour</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Sejak 2014, Zamali Tour telah menjadi mitra terpercaya untuk perjalanan wisata Anda. 
            Dengan komitmen "Amanah, Berkah, dan Terpercaya", kami menghadirkan pengalaman wisata yang tak terlupakan.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Mengapa Memilih Zamali Tour?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Plane className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pengalaman 10+ Tahun</h4>
                  <p className="text-gray-600">Berpengalaman melayani berbagai jenis wisata dari edukasi hingga spiritual dengan standar internasional.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Licensed & Insured</h4>
                  <p className="text-gray-600">Terdaftar resmi dengan izin lengkap dan asuransi perjalanan untuk keamanan Anda.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tim Profesional</h4>
                  <p className="text-gray-600">Guide berpengalaman, driver bersertifikat, dan customer service 24/7 siap melayani.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative w-full h-96">
                <iframe
                  src="https://www.youtube.com/embed/oRlaegESimQ?autoplay=1&mute=1&loop=1&playlist=oRlaegESimQ&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
                  title="Zamali Tour & Travel - Company Profile"
                  className="w-full h-full rounded-3xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none rounded-3xl" />
                <div className="absolute bottom-6 left-6 text-white pointer-events-none">
                  <h4 className="text-xl font-bold mb-2">Zamali Tour & Travel</h4>
                  <p className="text-sm opacity-90">Company Profile Video</p>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">4.9★</div>
                <div className="text-xs text-gray-600">Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nilai-Nilai <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">Kami</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center group hover:-translate-y-2 transition-all duration-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 text-white`}>
                  {value.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Pencapaian Kami</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.label}
                className="text-center group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`${achievement.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                  {achievement.number}
                </div>
                <div className="text-sm text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};