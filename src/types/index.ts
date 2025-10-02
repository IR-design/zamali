export interface TourPackage {
  id: string;
  name: string;
  category: string;
  region: string;
  duration: string;
  price: number;
  originalPrice?: number;
  image: string;
  gallery: string[];
  videos?: string[];
  description: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  rating: number;
  reviews: number;
  participants: number;
  maxParticipants: number;
  discount?: number;
  isPopular?: boolean;
  isPromo?: boolean;
  tags: string[];
  testimonials: Testimonial[];
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: Activity[];
}

export interface Activity {
  time: string;
  activity: string;
  location?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: Date;
  packageId: string;
  location: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  color: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: Date;
  readTime: string;
  category: string;
  tags: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  package: string;
  message: string;
  participants: number;
  date: string;
}

export interface ChatMessage {
  id: string;
  message: string;
  isUser: boolean;
  timestamp: Date;
}

export interface QuickReply {
  id: string;
  text: string;
  response: string;
}

export interface Region {
  id: string;
  name: string;
  description: string;
  heroImage: string;
  icon: string;
  highlights: string[];
  packageCount: number;
}