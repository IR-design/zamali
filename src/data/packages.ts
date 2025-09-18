import { TourPackage, Category, Testimonial, BlogPost, QuickReply } from '../types';

export const categories: Category[] = [
  { id: 'sekolah', name: 'Paket Sekolah', icon: '🎓', count: 8, color: 'bg-blue-100 text-blue-700' },
  { id: 'bandung', name: 'Paket Bandung', icon: '🏔️', count: 2, color: 'bg-green-100 text-green-700' },
  { id: 'jogja', name: 'Dieng/Jogja', icon: '🏛️', count: 2, color: 'bg-purple-100 text-purple-700' },
  { id: 'bali', name: 'Paket Bali', icon: '🏝️', count: 3, color: 'bg-orange-100 text-orange-700' },
  { id: 'honeymoon', name: 'Bulan Madu', icon: '💕', count: 2, color: 'bg-pink-100 text-pink-700' },
  { id: 'walisongo', name: 'Tour Walisongo', icon: '🕌', count: 2, color: 'bg-emerald-100 text-emerald-700' },
  { id: 'private', name: 'Private Trip', icon: '👨‍👩‍👧‍👦', count: 15, color: 'bg-yellow-100 text-yellow-700' },
  { id: 'custom', name: 'Custom Trip', icon: '✨', count: 5, color: 'bg-indigo-100 text-indigo-700' }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sari Dewi',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    comment: 'Paket Bali 5 hari sangat memuaskan! Guide ramah, hotel bagus, dan itinerary lengkap. Zamali Tour benar-benar amanah dan profesional.',
    date: new Date('2024-12-01'),
    packageId: 'bali-5d3n',
    location: 'Jakarta'
  },
  {
    id: '2',
    name: 'Ahmad Rizki',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    comment: 'Tour Walisongo sangat berkesan. Spiritual journey yang luar biasa dengan pelayanan terbaik dari tim Zamali Tour.',
    date: new Date('2024-11-28'),
    packageId: 'walisongo-jateng',
    location: 'Surabaya'
  },
  {
    id: '3',
    name: 'Maya Sari',
    avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    comment: 'Honeymoon package ke Lombok sangat romantis! Semua detail diatur dengan sempurna. Highly recommended!',
    date: new Date('2024-11-25'),
    packageId: 'honeymoon-lombok',
    location: 'Bandung'
  },
  {
    id: '4',
    name: 'Budi Santoso',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    comment: 'Study tour ke Bandung untuk anak sekolah sangat edukatif. Anak-anak senang dan banyak belajar hal baru.',
    date: new Date('2024-11-20'),
    packageId: 'bandung-2d1n',
    location: 'Bekasi'
  }
];

export const packages: TourPackage[] = [
  {
    id: 'bandung-2d1n',
    name: 'Paket Bandung 2 Hari 1 Malam',
    category: 'bandung',
    duration: '2 Hari 1 Malam',
    price: 450000,
    originalPrice: 500000,
    image: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    videos: [
      'https://www.youtube.com/watch?v=Vp0pkJ-cHnk',
      'https://www.youtube.com/watch?v=UWXKrNrFlng',
      'https://www.youtube.com/watch?v=9bZkp7q19f0',
      'https://www.youtube.com/watch?v=2Vv-BfVoq4g'
    ],
    description: 'Nikmati keindahan Kota Bandung dengan paket wisata 2 hari 1 malam yang lengkap. Kunjungi tempat-tempat ikonik dan rasakan kuliner khas Bandung.',
    highlights: [
      'Kawah Putih yang memukau',
      'Factory Outlet terlengkap',
      'Kuliner khas Bandung',
      'Hotel berbintang di pusat kota',
      'Transport AC yang nyaman'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Hari Pertama - City Tour Bandung',
        activities: [
          { time: '06:00', activity: 'Penjemputan di titik kumpul', location: 'Jakarta' },
          { time: '09:00', activity: 'Sarapan di rest area', location: 'Puncak' },
          { time: '12:00', activity: 'Makan siang di Bandung', location: 'Bandung' },
          { time: '13:30', activity: 'Kawah Putih', location: 'Ciwidey' },
          { time: '16:00', activity: 'Factory Outlet', location: 'Bandung' },
          { time: '18:00', activity: 'Check-in hotel & istirahat', location: 'Hotel' },
          { time: '19:30', activity: 'Makan malam & kuliner Bandung', location: 'Bandung' }
        ]
      },
      {
        day: 2,
        title: 'Hari Kedua - Wisata Alam & Belanja',
        activities: [
          { time: '07:00', activity: 'Sarapan di hotel', location: 'Hotel' },
          { time: '08:30', activity: 'Check-out & Tangkuban Perahu', location: 'Lembang' },
          { time: '11:00', activity: 'Floating Market Lembang', location: 'Lembang' },
          { time: '13:00', activity: 'Makan siang', location: 'Lembang' },
          { time: '14:30', activity: 'Belanja oleh-oleh', location: 'Bandung' },
          { time: '16:00', activity: 'Perjalanan pulang', location: 'Bandung' },
          { time: '20:00', activity: 'Tiba di Jakarta', location: 'Jakarta' }
        ]
      }
    ],
    included: [
      'Transport AC selama tour',
      'Hotel berbintang (1 malam)',
      'Makan 3x (1 sarapan, 2 makan siang, 1 makan malam)',
      'Tiket masuk semua objek wisata',
      'Tour guide berpengalaman',
      'Dokumentasi foto',
      'Air mineral selama perjalanan'
    ],
    excluded: [
      'Tiket pesawat/kereta',
      'Makan di luar program',
      'Keperluan pribadi',
      'Tips guide (optional)',
      'Asuransi perjalanan'
    ],
    rating: 4.8,
    reviews: 156,
    participants: 1240,
    maxParticipants: 45,
    discount: 10,
    isPopular: true,
    tags: ['bandung', 'kawah-putih', 'factory-outlet', 'kuliner', 'weekend'],
    testimonials: testimonials.filter(t => t.packageId === 'bandung-2d1n')
  },
  {
    id: 'bali-5d3n',
    name: 'Paket Bali 5 Hari 3 Malam',
    category: 'bali',
    duration: '5 Hari 3 Malam',
    price: 2850000,
    originalPrice: 3200000,
    image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    videos: [
      'https://www.youtube.com/watch?v=Vp0pkJ-cHnk',
      'https://www.youtube.com/watch?v=UWXKrNrFlng',
      'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
      'https://www.youtube.com/watch?v=2Vv-BfVoq4g'
    ],
    description: 'Jelajahi keindahan Pulau Dewata dengan paket lengkap 5 hari 3 malam. Nikmati pantai eksotis, budaya unik, dan kuliner khas Bali.',
    highlights: [
      'Pantai Kuta & Tanah Lot',
      'Ubud Rice Terrace',
      'Pura Besakih',
      'Water sport Tanjung Benoa',
      'Hotel berbintang dengan breakfast'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Pantai Kuta',
        activities: [
          { time: '10:00', activity: 'Penjemputan di Bandara Ngurah Rai', location: 'Denpasar' },
          { time: '11:00', activity: 'Check-in hotel & istirahat', location: 'Kuta' },
          { time: '14:00', activity: 'Makan siang', location: 'Kuta' },
          { time: '15:30', activity: 'Pantai Kuta & sunset', location: 'Kuta' },
          { time: '18:00', activity: 'Makan malam seafood', location: 'Jimbaran' }
        ]
      },
      {
        day: 2,
        title: 'Ubud & Budaya Bali',
        activities: [
          { time: '08:00', activity: 'Sarapan di hotel', location: 'Hotel' },
          { time: '09:00', activity: 'Tegallalang Rice Terrace', location: 'Ubud' },
          { time: '11:00', activity: 'Monkey Forest Sanctuary', location: 'Ubud' },
          { time: '13:00', activity: 'Makan siang di Ubud', location: 'Ubud' },
          { time: '14:30', activity: 'Pasar Seni Ubud', location: 'Ubud' },
          { time: '16:00', activity: 'Pura Tirta Empul', location: 'Tampaksiring' },
          { time: '19:00', activity: 'Makan malam & kembali ke hotel', location: 'Kuta' }
        ]
      }
    ],
    included: [
      'Tiket pesawat PP Jakarta-Bali',
      'Hotel berbintang 4 (3 malam)',
      'Makan sesuai program',
      'Transport AC selama tour',
      'Tiket masuk objek wisata',
      'Tour guide lokal',
      'Dokumentasi profesional'
    ],
    excluded: [
      'Makan di luar program',
      'Keperluan pribadi',
      'Tips guide',
      'Asuransi perjalanan',
      'Aktivitas optional'
    ],
    rating: 4.9,
    reviews: 234,
    participants: 2150,
    maxParticipants: 35,
    discount: 11,
    isPopular: true,
    isPromo: true,
    tags: ['bali', 'pantai', 'budaya', 'ubud', 'sunset'],
    testimonials: testimonials.filter(t => t.packageId === 'bali-5d3n')
  },
  {
    id: 'jogja-3d2n',
    name: 'Paket Jogja 3 Hari 2 Malam',
    category: 'jogja',
    duration: '3 Hari 2 Malam',
    price: 750000,
    originalPrice: 850000,
    image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    videos: [
      'https://www.youtube.com/watch?v=Vp0pkJ-cHnk',
      'https://www.youtube.com/watch?v=UWXKrNrFlng',
      'https://www.youtube.com/watch?v=9bZkp7q19f0',
      'https://www.youtube.com/watch?v=kJQP7kiw5Fk'
    ],
    description: 'Eksplorasi Yogyakarta dan sekitarnya dengan paket wisata budaya dan alam yang menawan. Kunjungi candi bersejarah dan nikmati kuliner gudeg.',
    highlights: [
      'Candi Borobudur sunrise',
      'Keraton Yogyakarta',
      'Malioboro Street',
      'Kuliner gudeg Yu Djum',
      'Taman Sari & Goa Pindul'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & City Tour',
        activities: [
          { time: '08:00', activity: 'Penjemputan stasiun/bandara', location: 'Yogyakarta' },
          { time: '09:00', activity: 'Keraton Yogyakarta', location: 'Yogyakarta' },
          { time: '11:00', activity: 'Taman Sari', location: 'Yogyakarta' },
          { time: '13:00', activity: 'Makan siang gudeg', location: 'Yogyakarta' },
          { time: '15:00', activity: 'Malioboro Street', location: 'Yogyakarta' },
          { time: '18:00', activity: 'Check-in hotel', location: 'Hotel' }
        ]
      }
    ],
    included: [
      'Transport AC selama tour',
      'Hotel berbintang (2 malam)',
      'Makan sesuai program',
      'Tiket masuk objek wisata',
      'Tour guide berpengalaman'
    ],
    excluded: [
      'Tiket transportasi ke Jogja',
      'Makan di luar program',
      'Keperluan pribadi'
    ],
    rating: 4.7,
    reviews: 89,
    participants: 890,
    maxParticipants: 40,
    discount: 12,
    tags: ['jogja', 'borobudur', 'budaya', 'malioboro', 'gudeg'],
    testimonials: []
  },
  {
    id: 'sekolah-ldks',
    name: 'Paket LDKS Sekolah',
    category: 'sekolah',
    duration: '2 Hari 1 Malam',
    price: 350000,
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    videos: [
      'https://www.youtube.com/watch?v=Vp0pkJ-cHnk',
      'https://www.youtube.com/watch?v=UWXKrNrFlng',
      'https://www.youtube.com/watch?v=2Vv-BfVoq4g'
    ],
    description: 'Program LDKS (Latihan Dasar Kepemimpinan Siswa) dengan konsep outbound dan character building untuk mengembangkan jiwa kepemimpinan siswa.',
    highlights: [
      'Outbound & team building',
      'Character building session',
      'Leadership training',
      'Camping experience',
      'Sertifikat LDKS'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Leadership Training',
        activities: [
          { time: '07:00', activity: 'Penjemputan sekolah', location: 'Sekolah' },
          { time: '10:00', activity: 'Pembukaan LDKS', location: 'Base Camp' },
          { time: '10:30', activity: 'Ice breaking & team building', location: 'Base Camp' },
          { time: '12:00', activity: 'Makan siang', location: 'Base Camp' },
          { time: '13:30', activity: 'Outbound activities', location: 'Base Camp' },
          { time: '16:00', activity: 'Leadership workshop', location: 'Base Camp' },
          { time: '18:00', activity: 'Makan malam', location: 'Base Camp' },
          { time: '20:00', activity: 'Api unggun & sharing', location: 'Base Camp' }
        ]
      }
    ],
    included: [
      'Transport AC PP',
      'Penginapan 1 malam',
      'Makan 3x',
      'Instruktur berpengalaman',
      'Peralatan outbound',
      'Sertifikat LDKS',
      'Dokumentasi kegiatan'
    ],
    excluded: [
      'Keperluan pribadi',
      'Obat-obatan pribadi',
      'Snack tambahan'
    ],
    rating: 4.6,
    reviews: 67,
    participants: 450,
    maxParticipants: 50,
    tags: ['ldks', 'sekolah', 'outbound', 'leadership', 'character-building'],
    testimonials: []
  },
  {
    id: 'honeymoon-bali',
    name: 'Paket Bulan Madu Bali Romantis',
    category: 'honeymoon',
    duration: '4 Hari 3 Malam',
    price: 4500000,
    originalPrice: 5000000,
    image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    videos: [
      'https://www.youtube.com/watch?v=Vp0pkJ-cHnk',
      'https://www.youtube.com/watch?v=UWXKrNrFlng',
      'https://www.youtube.com/watch?v=2Vv-BfVoq4g',
      'https://www.youtube.com/watch?v=kJQP7kiw5Fk'
    ],
    description: 'Paket bulan madu romantis di Bali dengan hotel mewah, dinner romantis, dan aktivitas khusus untuk pasangan baru menikah.',
    highlights: [
      'Hotel resort mewah dengan private pool',
      'Romantic dinner di pantai',
      'Couple spa treatment',
      'Sunset cruise',
      'Photography session profesional'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Romantic Welcome',
        activities: [
          { time: '10:00', activity: 'Penjemputan bandara', location: 'Ngurah Rai' },
          { time: '11:00', activity: 'Check-in resort & welcome drink', location: 'Resort' },
          { time: '14:00', activity: 'Lunch di resort', location: 'Resort' },
          { time: '16:00', activity: 'Couple spa treatment', location: 'Resort Spa' },
          { time: '18:30', activity: 'Romantic sunset dinner', location: 'Pantai' }
        ]
      }
    ],
    included: [
      'Tiket pesawat PP',
      'Resort mewah 4* (3 malam)',
      'Breakfast daily',
      'Romantic dinner 2x',
      'Couple spa treatment',
      'Photography session',
      'Private transport'
    ],
    excluded: [
      'Lunch & dinner di luar program',
      'Aktivitas water sport',
      'Shopping pribadi',
      'Tips photographer'
    ],
    rating: 4.9,
    reviews: 78,
    participants: 156,
    maxParticipants: 2,
    discount: 10,
    isPopular: true,
    tags: ['honeymoon', 'bali', 'romantic', 'luxury', 'couple'],
    testimonials: testimonials.filter(t => t.packageId === 'honeymoon-bali')
  },
  {
    id: 'walisongo-jateng',
    name: 'Tour Walisongo Jawa Tengah',
    category: 'walisongo',
    duration: '3 Hari 2 Malam',
    price: 850000,
    image: 'https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    videos: [
      'https://www.youtube.com/watch?v=Vp0pkJ-cHnk',
      'https://www.youtube.com/watch?v=UWXKrNrFlng',
      'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
      'https://www.youtube.com/watch?v=9bZkp7q19f0'
    ],
    description: 'Ziarah spiritual ke makam Walisongo di Jawa Tengah. Perjalanan penuh berkah dengan panduan sejarah Islam Nusantara.',
    highlights: [
      'Makam Sunan Kudus',
      'Makam Sunan Muria',
      'Makam Sunan Kalijaga',
      'Masjid Menara Kudus',
      'Kuliner khas Kudus'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Ziarah Kudus & Sekitarnya',
        activities: [
          { time: '05:00', activity: 'Pemberangkatan dari Jakarta', location: 'Jakarta' },
          { time: '10:00', activity: 'Istirahat & sarapan', location: 'Rest Area' },
          { time: '13:00', activity: 'Makan siang di Kudus', location: 'Kudus' },
          { time: '14:30', activity: 'Ziarah Makam Sunan Kudus', location: 'Kudus' },
          { time: '16:00', activity: 'Masjid Menara Kudus', location: 'Kudus' },
          { time: '18:00', activity: 'Check-in hotel', location: 'Hotel' },
          { time: '19:30', activity: 'Makan malam', location: 'Kudus' }
        ]
      }
    ],
    included: [
      'Transport AC PP',
      'Hotel syariah (2 malam)',
      'Makan halal sesuai program',
      'Guide spiritual berpengalaman',
      'Buku panduan ziarah',
      'Air zam-zam'
    ],
    excluded: [
      'Keperluan pribadi',
      'Infaq di makam',
      'Oleh-oleh'
    ],
    rating: 4.8,
    reviews: 145,
    participants: 890,
    maxParticipants: 45,
    tags: ['walisongo', 'ziarah', 'spiritual', 'kudus', 'islam'],
    testimonials: testimonials.filter(t => t.packageId === 'walisongo-jateng')
  },
  {
    id: 'private-family',
    name: 'Private Family Trip Custom',
    category: 'private',
    duration: 'Flexible',
    price: 1500000,
    image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    videos: [
      'https://www.youtube.com/watch?v=Vp0pkJ-cHnk',
      'https://www.youtube.com/watch?v=UWXKrNrFlng',
      'https://www.youtube.com/watch?v=2Vv-BfVoq4g'
    ],
    description: 'Paket wisata private untuk keluarga dengan itinerary yang bisa disesuaikan. Nikmati liburan keluarga yang berkualitas dan berkesan.',
    highlights: [
      'Itinerary custom sesuai keinginan',
      'Private transport & guide',
      'Flexible schedule',
      'Family-friendly destinations',
      'Photography session keluarga'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Custom Itinerary',
        activities: [
          { time: 'Flexible', activity: 'Disesuaikan dengan kebutuhan keluarga', location: 'Custom' }
        ]
      }
    ],
    included: [
      'Private transport',
      'Private tour guide',
      'Flexible itinerary',
      'Photography session',
      'Travel consultation'
    ],
    excluded: [
      'Hotel (bisa diatur terpisah)',
      'Makan (bisa diatur terpisah)',
      'Tiket masuk objek wisata'
    ],
    rating: 4.8,
    reviews: 45,
    participants: 120,
    maxParticipants: 15,
    tags: ['private', 'family', 'custom', 'flexible', 'personal'],
    testimonials: []
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Tips Liburan ke Bali dengan Budget Hemat',
    excerpt: 'Panduan lengkap berlibur ke Bali tanpa menguras kantong. Temukan tips dan trik untuk menikmati Pulau Dewata dengan budget terbatas.',
    image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=500',
    author: 'Tim Zamali Tour',
    date: new Date('2024-12-10'),
    readTime: '5 min',
    category: 'Tips Travel',
    tags: ['bali', 'budget', 'tips', 'hemat']
  },
  {
    id: '2',
    title: 'Destinasi Wajib di Yogyakarta untuk Pertama Kali',
    excerpt: 'Kunjungi tempat-tempat ikonik di Yogyakarta yang wajib dikunjungi untuk pengalaman pertama yang tak terlupakan.',
    image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=500',
    author: 'Guide Zamali',
    date: new Date('2024-12-08'),
    readTime: '7 min',
    category: 'Destinasi',
    tags: ['jogja', 'destinasi', 'budaya', 'sejarah']
  },
  {
    id: '3',
    title: 'Persiapan Tour Walisongo: Panduan Lengkap',
    excerpt: 'Persiapan spiritual dan praktis untuk tour ziarah Walisongo. Pelajari etika ziarah dan hal-hal yang perlu dibawa.',
    image: 'https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=500',
    author: 'Ustadz Mahmud',
    date: new Date('2024-12-05'),
    readTime: '6 min',
    category: 'Spiritual',
    tags: ['walisongo', 'ziarah', 'spiritual', 'persiapan']
  }
];

export const quickReplies: QuickReply[] = [
  {
    id: '1',
    text: 'Tampilkan Paket Bandung',
    response: 'Berikut paket wisata Bandung yang tersedia:\n\n🏔️ Paket Bandung 2D1N - Rp 450.000\n- Kawah Putih, Factory Outlet, Kuliner\n\n🏔️ Paket Bandung 1 Hari - Rp 250.000\n- City tour, belanja, kuliner\n\nMau info lebih detail paket mana?'
  },
  {
    id: '2',
    text: 'Cara Booking',
    response: 'Cara booking di Zamali Tour sangat mudah:\n\n1️⃣ Pilih paket yang diinginkan\n2️⃣ Klik "Booking Sekarang"\n3️⃣ Isi form booking lengkap\n4️⃣ Transfer DP 30% ke rekening kami\n5️⃣ Kirim bukti transfer via WA\n6️⃣ Terima konfirmasi booking\n\nAda yang ingin ditanyakan?'
  },
  {
    id: '3',
    text: 'Promo Saat Ini',
    response: 'Promo spesial bulan ini! 🎉\n\n✨ Diskon 15% untuk booking grup 20+ orang\n✨ Cashback 10% untuk repeat customer\n✨ Gratis dokumentasi untuk paket Bali\n✨ Early bird 20% untuk booking 2 bulan sebelumnya\n\nMau ambil promo yang mana?'
  },
  {
    id: '4',
    text: 'Info Kontak',
    response: 'Hubungi kami untuk konsultasi gratis:\n\n📱 WhatsApp: 0812-3456-7890\n📧 Email: info@zamalitour.com\n🏢 Kantor: Jl. Merdeka No. 123, Jakarta\n⏰ Jam Operasional: 08:00 - 20:00 WIB\n\nTim kami siap membantu 24/7!'
  }
];