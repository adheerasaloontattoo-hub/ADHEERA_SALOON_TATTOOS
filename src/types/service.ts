export type ServiceCategory =
  | 'hair'
  | 'beard-shaving'
  | 'face-care'
  | 'combo-packages'
  | 'hair-color';

export interface Service {
  id: string;
  name: string;
  slug: string;
  category: ServiceCategory;
  categoryName: string;
  price: number;
  currency: 'INR';
  description: string;
  featured?: boolean;
  premiumBadge?: string;
  duration?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface BookingDetails {
  name: string;
  phone: string;
  serviceId: string;
  serviceName: string;
  price: number | string;
  date: string;
  time: string;
  notes?: string;
}

export interface TattooEnquiry {
  name: string;
  phone?: string;
  idea: string;
  size: string;
  placement: string;
  preferredDate?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'hair' | 'beard' | 'face' | 'combos' | 'hair-color' | 'tattoo' | 'booking';
}
