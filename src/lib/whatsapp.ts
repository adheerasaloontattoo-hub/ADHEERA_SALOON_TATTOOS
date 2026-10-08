export const BUSINESS_CONFIG = {
  brandName: 'Adheera Saloon & Tatoos',
  legalSpelling: 'Adheera Saloon andTatoos',
  headline: 'YOUR STYLE. YOUR SIGNATURE.',
  tagline: 'Premium grooming, styling, facial care, hair color and tattoo artistry — all under one roof in Tiruppur.',
  servicesLine: 'Hair • Beard • Facial • Hair Color • Tattoos',
  whatsappNumber: '917010717408',
  displayPhone: '+91 7010717408',
  email: 'adheerasaloontattoo@gmail.com',
  instagram: 'https://www.instagram.com/_adheera_saloon_and_tattoos/',
  instagramHandle: '@_adheera_saloon_and_tattoos',
  address: 'East, First St, Kumar Nagar, Renganatha Puram, Tiruppur, Tamil Nadu 641603',
  streetAddress: 'East, First St, Kumar Nagar, Renganatha Puram',
  city: 'Tiruppur',
  state: 'Tamil Nadu',
  postalCode: '641603',
  country: 'India',
  googleMapsUrl: 'https://maps.app.goo.gl/STwg9t4x9UcePXPt9',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.0!2d77.34!3d11.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA3JzEyLjAiTiA3N8KwMjAnMjQuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin',
  hours: 'Monday - Sunday: 9:00 AM - 9:30 PM',
  siteUrl: 'https://ais-pre-vasr45spfom6g4wxhes5zk-976818229313.asia-southeast1.run.app'
};

/**
 * Builds the URL for quick single-service appointment requests directly from service cards.
 */
export function createWhatsAppQuickServiceUrl(serviceName: string, price: number | string): string {
  const text = `Hello Adheera Saloon & Tatoos 👋

I would like to book an appointment.

Service: ${serviceName}
Price: ₹${price}

Name: 
Preferred Date: 
Preferred Time: 

Please confirm my appointment.

Thank you.`;

  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Builds the prefilled message string for custom booking form submissions.
 */
export function formatBookingMessage(params: {
  name: string;
  phone?: string;
  serviceName: string;
  price: number | string;
  date: string;
  time: string;
  notes?: string;
}): string {
  const lines = [
    'Hello Adheera Saloon & Tatoos 👋',
    '',
    'I would like to book an appointment.',
    '',
    `Name: ${params.name || '[Your Name]'}`,
    params.phone ? `Phone: ${params.phone}` : '',
    '',
    `Service: ${params.serviceName}`,
    `Price: ₹${params.price}`,
    '',
    `Preferred Date: ${params.date || '[Preferred Date]'}`,
    `Preferred Time: ${params.time || '[Preferred Time]'}`,
    params.notes ? `Note: ${params.notes}` : '',
    '',
    'Please confirm my appointment.',
    '',
    'Thank you.'
  ].filter(line => line !== null && line !== undefined);

  return lines.join('\n');
}

/**
 * Builds the complete WhatsApp URL for full form submission.
 */
export function createWhatsAppBookingUrl(params: {
  name: string;
  phone?: string;
  serviceName: string;
  price: number | string;
  date: string;
  time: string;
  notes?: string;
}): string {
  const message = formatBookingMessage(params);
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds the WhatsApp URL for tattoo inquiries.
 */
export function createWhatsAppTattooUrl(params?: {
  name?: string;
  idea?: string;
  size?: string;
  placement?: string;
  preferredDate?: string;
}): string {
  const text = `Hello Adheera Saloon & Tatoos 👋

I would like to enquire about a tattoo.

Name: ${params?.name || ''}
Tattoo idea: ${params?.idea || ''}
Preferred size: ${params?.size || ''}
Placement: ${params?.placement || ''}
Preferred date: ${params?.preferredDate || ''}

Please provide details and pricing.`;

  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Builds a general chat URL for Adheera Saloon & Tatoos.
 */
export function createWhatsAppGeneralChatUrl(): string {
  const text = `Hello Adheera Saloon & Tatoos 👋

I would like to know more about your services and appointment availability.

Thank you.`;

  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
