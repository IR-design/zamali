import { Region, TourPackage } from '../types';

export const regions: Region[] = [
  {
    id: 'jawa-barat',
    name: 'Jawa Barat',
    description: 'Nikmati keindahan alam pegunungan, wisata kuliner, dan factory outlet terlengkap di Paris van Java',
    heroImage: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: '🏔️',
    highlights: ['Kawah Putih', 'Tangkuban Perahu', 'Factory Outlet', 'Kuliner Bandung', 'Puncak Highland'],
    packageCount: 8
  },
  {
    id: 'jawa-tengah',
    name: 'Jawa Tengah',
    description: 'Jelajahi warisan budaya dan sejarah dengan candi-candi megah serta keindahan alam Dieng',
    heroImage: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: '🏛️',
    highlights: ['Candi Borobudur', 'Dieng Plateau', 'Keraton Yogyakarta', 'Malioboro', 'Prambanan'],
    packageCount: 6
  },
  {
    id: 'jawa-timur',
    name: 'Jawa Timur',
    description: 'Petualangan menakjubkan ke gunung berapi aktif dan keindahan alam yang memukau',
    heroImage: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: '🌋',
    highlights: ['Gunung Bromo', 'Kawah Ijen', 'Malang', 'Batu', 'Tumpak Sewu'],
    packageCount: 5
  },
  {
    id: 'bali-nusa-tenggara',
    name: 'Bali & Nusa Tenggara',
    description: 'Surga tropis dengan pantai eksotis, budaya unik, dan pengalaman spiritual yang mendalam',
    heroImage: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: '🏝️',
    highlights: ['Pantai Kuta', 'Ubud', 'Tanah Lot', 'Gili Islands', 'Komodo National Park'],
    packageCount: 12
  },
  {
    id: 'sumatra',
    name: 'Sumatra',
    description: 'Keajaiban alam Sumatra dengan danau vulkanik terbesar dan budaya Batak yang kaya',
    heroImage: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: '🏞️',
    highlights: ['Danau Toba', 'Mentawai', 'Padang', 'Bukittinggi', 'Orangutan Sanctuary'],
    packageCount: 4
  },
  {
    id: 'kalimantan',
    name: 'Kalimantan',
    description: 'Eksplorasi hutan hujan tropis dan bertemu orangutan di habitat aslinya',
    heroImage: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: '🦧',
    highlights: ['Tanjung Puting', 'Orangutan Tour', 'Dayak Culture', 'River Cruise', 'Jungle Trekking'],
    packageCount: 3
  },
  {
    id: 'sulawesi',
    name: 'Sulawesi',
    description: 'Surga bawah laut dan budaya unik Toraja dengan pemandangan alam yang spektakuler',
    heroImage: 'https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: '🐠',
    highlights: ['Bunaken Marine Park', 'Tana Toraja', 'Makassar', 'Diving Paradise', 'Traditional Houses'],
    packageCount: 4
  },
  {
    id: 'papua-maluku',
    name: 'Papua & Maluku',
    description: 'Surga tersembunyi dengan keanekaragaman hayati laut terkaya di dunia',
    heroImage: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1600',
    icon: '🐟',
    highlights: ['Raja Ampat', 'Banda Neira', 'Wayag Islands', 'Marine Biodiversity', 'Spice Islands'],
    packageCount: 3
  }
];

export const regionalPackages: { [key: string]: TourPackage[] } = {
  'jawa-barat': [
    {
      id: 'bandung-2d1n',
      name: 'Paket Bandung 2 Hari 1 Malam',
      category: 'bandung',
      region: 'jawa-barat',
      duration: '2 Hari 1 Malam',
      price: 450000,
      originalPrice: 500000,
      image: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      videos: ['https://www.youtube.com/watch?v=Vp0pkJ-cHnk'],
      description: 'Nikmati keindahan Kota Bandung dengan paket wisata 2 hari 1 malam yang lengkap.',
      highlights: ['Kawah Putih', 'Factory Outlet', 'Kuliner Bandung'],
      itinerary: [
        {
          day: 1,
          title: 'City Tour Bandung',
          activities: [
            { time: '09:00', activity: 'Kawah Putih', location: 'Ciwidey' },
            { time: '13:00', activity: 'Factory Outlet', location: 'Bandung' }
          ]
        }
      ],
      included: ['Transport AC', 'Hotel 1 malam', 'Makan 3x'],
      excluded: ['Keperluan pribadi'],
      rating: 4.8,
      reviews: 156,
      participants: 1240,
      maxParticipants: 45,
      discount: 10,
      isPopular: true,
      tags: ['bandung', 'kawah-putih'],
      testimonials: []
    },
    {
      id: 'puncak-highland',
      name: 'Puncak Highland Adventure',
      category: 'adventure',
      region: 'jawa-barat',
      duration: '3 Hari 2 Malam',
      price: 650000,
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: ['https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800'],
      videos: [],
      description: 'Petualangan seru di dataran tinggi Puncak dengan udara sejuk dan pemandangan indah.',
      highlights: ['Taman Safari', 'Tea Plantation', 'Highland Resort'],
      itinerary: [
        {
          day: 1,
          title: 'Puncak Adventure',
          activities: [
            { time: '10:00', activity: 'Taman Safari', location: 'Puncak' }
          ]
        }
      ],
      included: ['Transport AC', 'Hotel 2 malam', 'Makan sesuai program'],
      excluded: ['Keperluan pribadi'],
      rating: 4.7,
      reviews: 89,
      participants: 567,
      maxParticipants: 40,
      tags: ['puncak', 'adventure'],
      testimonials: []
    }
  ],
  'jawa-tengah': [
    {
      id: 'jogja-borobudur',
      name: 'Jogja Borobudur Heritage Tour',
      category: 'heritage',
      region: 'jawa-tengah',
      duration: '3 Hari 2 Malam',
      price: 750000,
      image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: ['https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800'],
      videos: [],
      description: 'Eksplorasi warisan budaya Yogyakarta dan keajaiban Candi Borobudur.',
      highlights: ['Candi Borobudur', 'Keraton Yogyakarta', 'Malioboro'],
      itinerary: [
        {
          day: 1,
          title: 'Yogyakarta Heritage',
          activities: [
            { time: '09:00', activity: 'Keraton Yogyakarta', location: 'Yogyakarta' }
          ]
        }
      ],
      included: ['Transport AC', 'Hotel 2 malam', 'Guide'],
      excluded: ['Keperluan pribadi'],
      rating: 4.9,
      reviews: 234,
      participants: 890,
      maxParticipants: 35,
      tags: ['jogja', 'borobudur', 'heritage'],
      testimonials: []
    }
  ],
  'walisongo': [
    {
      id: 'walisongo-7d6n',
      name: '7D/6N Ziarah Wali Songo Jawa',
      category: 'religious',
      region: 'walisongo',
      duration: '7 Hari 6 Malam',
      price: 1850000,
      image: 'https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: ['https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=800'],
      videos: [],
      description: 'Perjalanan spiritual lengkap mengunjungi makam para Wali Songo di Jawa.',
      highlights: ['Sunan Ampel Surabaya', 'Sunan Bonang Tuban', 'Sunan Kudus', 'Sunan Kalijaga', 'Sunan Muria'],
      itinerary: [
        {
          day: 1,
          title: 'Surabaya - Sunan Ampel',
          activities: [
            { time: '10:00', activity: 'Ziarah Sunan Ampel', location: 'Surabaya' }
          ]
        }
      ],
      included: ['Transport AC', 'Hotel syariah 6 malam', 'Makan halal', 'Guide spiritual'],
      excluded: ['Infaq pribadi'],
      rating: 4.8,
      reviews: 145,
      participants: 456,
      maxParticipants: 45,
      isPopular: true,
      tags: ['walisongo', 'ziarah', 'spiritual'],
      testimonials: []
    }
  ]
};