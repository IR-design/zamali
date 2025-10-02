import React, { useState } from 'react';
import { ArrowLeft, MapPin, Users, Calendar, Clock, Send, CheckCircle, Star } from 'lucide-react';

interface PrivateCustomPageProps {
  onBack: () => void;
}

interface CustomForm {
  name: string;
  email: string;
  phone: string;
  destination: string;
  duration: string;
  participants: number;
  budget: string;
  startDate: string;
  specialRequests: string;
}

export const PrivateCustomPage: React.FC<PrivateCustomPageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState<CustomForm>({
    name: '',
    email: '',
    phone: '',
    destination: '',
    duration: '',
    participants: 2,
    budget: '',
    startDate: '',
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: '',
        duration: '',
        participants: 2,
        budget: '',
        startDate: '',
        specialRequests: ''
      });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const customPackageExamples = [
    {
      title: 'Private Bali Honeymoon',
      duration: '5D4N',
      price: 'Rp 8.500.000',
      image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400',
      highlights: ['Private villa with pool', 'Romantic dinner', 'Couple spa', 'Photography session']
    },
    {
      title: 'Custom Trip Lombok - Komodo',
      duration: '7D6N',
      price: 'Rp 12.000.000',
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400',
      highlights: ['Island hopping', 'Komodo dragon tour', 'Snorkeling', 'Private boat']
    },
    {
      title: 'Family Adventure Java',
      duration: '6D5N',
      price: 'Rp 6.000.000',
      image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=400',
      highlights: ['Borobudur sunrise', 'Bromo tour', 'Cultural experience', 'Family activities']
    }
  ];

  const destinations = [
    'Bali', 'Lombok', 'Yogyakarta', 'Bandung', 'Jakarta', 'Bromo', 'Komodo', 'Raja Ampat',
    'Danau Toba', 'Belitung', 'Flores', 'Sumba', 'Malang', 'Semarang', 'Solo'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1600)' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Back Button */}
            <button
              onClick={onBack}
              className="mb-6 flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali
            </button>

            <div className="text-white text-center">
              <div className="text-8xl mb-6">✨</div>
              <h1 className="text-5xl font-bold mb-4">Private & Custom Tour</h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Buat perjalanan impian Anda dengan itinerary yang disesuaikan sepenuhnya dengan keinginan dan kebutuhan Anda
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Form Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Request Custom Itinerary</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Request Terkirim!</h4>
                  <p className="text-gray-600">Tim kami akan menghubungi Anda dalam 2x24 jam dengan proposal custom tour.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="nama@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        No. WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="0812-3456-7890"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Jumlah Peserta *
                      </label>
                      <input
                        type="number"
                        name="participants"
                        value={formData.participants}
                        onChange={handleInputChange}
                        min="1"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Destinasi yang Diinginkan *
                      </label>
                      <select
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      >
                        <option value="">Pilih destinasi</option>
                        {destinations.map((dest) => (
                          <option key={dest} value={dest}>{dest}</option>
                        ))}
                        <option value="multiple">Multiple Destinations</option>
                        <option value="other">Lainnya</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Durasi Perjalanan *
                      </label>
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      >
                        <option value="">Pilih durasi</option>
                        <option value="1D">1 Hari</option>
                        <option value="2D1N">2 Hari 1 Malam</option>
                        <option value="3D2N">3 Hari 2 Malam</option>
                        <option value="4D3N">4 Hari 3 Malam</option>
                        <option value="5D4N">5 Hari 4 Malam</option>
                        <option value="6D5N">6 Hari 5 Malam</option>
                        <option value="7D6N">7 Hari 6 Malam</option>
                        <option value="custom">Lebih dari 7 hari</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range (per orang)
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      >
                        <option value="">Pilih budget range</option>
                        <option value="< 1jt">< Rp 1.000.000</option>
                        <option value="1-3jt">Rp 1.000.000 - 3.000.000</option>
                        <option value="3-5jt">Rp 3.000.000 - 5.000.000</option>
                        <option value="5-10jt">Rp 5.000.000 - 10.000.000</option>
                        <option value="> 10jt">> Rp 10.000.000</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tanggal Keberangkatan
                      </label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Permintaan Khusus / Aktivitas yang Diinginkan
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                      placeholder="Ceritakan aktivitas khusus, akomodasi, makanan, atau kebutuhan lain yang Anda inginkan..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Mengirim Request...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Kirim Request Custom Tour
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info & Examples */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mengapa Pilih Custom Tour?</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Itinerary Sesuai Keinginan</h4>
                    <p className="text-gray-600">Tentukan sendiri destinasi, aktivitas, dan jadwal perjalanan Anda</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Private Group</h4>
                    <p className="text-gray-600">Nikmati perjalanan bersama keluarga atau teman tanpa bergabung dengan grup lain</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Fleksibilitas Waktu</h4>
                    <p className="text-gray-600">Atur jadwal keberangkatan dan durasi sesuai ketersediaan Anda</p>
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-6">Contoh Paket Custom</h4>
              <div className="space-y-4">
                {customPackageExamples.map((example, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex gap-4">
                      <img
                        src={example.image}
                        alt={example.title}
                        className="w-20 h-20 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <h5 className="font-bold text-gray-900 mb-1">{example.title}</h5>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {example.duration}
                          </span>
                          <span className="font-semibold text-purple-600">{example.price}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {example.highlights.slice(0, 2).map((highlight, i) => (
                            <span key={i} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                              {highlight}
                            </span>
                          ))}
                          {example.highlights.length > 2 && (
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              +{example.highlights.length - 2} lainnya
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};