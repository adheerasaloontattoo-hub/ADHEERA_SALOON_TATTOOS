import React, { useState } from 'react';
import {
  Scissors,
  Sparkles,
  MessageSquare,
  Shield,
  Palette,
  Feather,
  CheckCircle2,
  Calendar,
  Clock,
  Instagram,
  Mail,
  ChevronRight,
  ArrowRight,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { SERVICES, CATEGORIES } from '../../data/services';
import { FAQS } from '../../data/faqs';
import { BUSINESS_CONFIG } from '../../lib/whatsapp';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceCard } from '../services/ServiceCard';
import { ComboCard } from '../services/ComboCard';
import { TattooSection } from '../tattoos/TattooSection';
import { Gallery } from '../gallery/Gallery';
import { SEOHead } from '../seo/SEOHead';
import { ServiceCategory } from '../../types/service';
import { AdheeraEmblem } from '../common/AdheeraEmblem';

interface HomeViewProps {
  onNavigate: (path: string) => void;
  onBookService: (serviceId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onBookService }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | ServiceCategory>('all');

  const filteredServices =
    selectedFilter === 'all'
      ? SERVICES
      : SERVICES.filter((s) => s.category === selectedFilter);

  const featuredCombos = SERVICES.filter((s) => s.category === 'combo-packages');
  const homeFaqs = FAQS.slice(0, 6);

  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'BarberShop',
    name: BUSINESS_CONFIG.brandName,
    alternateName: BUSINESS_CONFIG.legalSpelling,
    description: BUSINESS_CONFIG.tagline,
    telephone: '+917010717408',
    email: BUSINESS_CONFIG.email,
    url: BUSINESS_CONFIG.siteUrl,
    currenciesAccepted: 'INR',
    priceRange: '₹59 - ₹1199',
    hasMap: BUSINESS_CONFIG.googleMapsUrl,
    sameAs: [BUSINESS_CONFIG.instagram, BUSINESS_CONFIG.googleMapsUrl],
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_CONFIG.streetAddress,
      addressLocality: BUSINESS_CONFIG.city,
      addressRegion: BUSINESS_CONFIG.state,
      postalCode: BUSINESS_CONFIG.postalCode,
      addressCountry: 'IN'
    }
  };

  return (
    <>
      <SEOHead
        title="Adheera Saloon & Tatoos | Premium Saloon, Grooming & Tattoo Studio in Tiruppur"
        description="Visit Adheera Saloon & Tatoos at Kumar Nagar, Tiruppur, Tamil Nadu. Professional haircuts, beard grooming, signature Gold Facial, hair color, and tattoo artistry. WhatsApp: +91 7010717408."
        path="/"
        schema={homeSchema}
      />

      {/* ==================================================
          1. HERO SECTION WITH ROYAL EMBLEM
          ================================================== */}
      <section className="relative min-h-[92vh] flex items-center justify-center marble-bg pt-8 pb-20 overflow-hidden border-b border-[#C99A3D]/25">
        {/* Soft background light */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-b from-[#C99A3D]/15 via-[#C99A3D]/5 to-transparent rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Official Royal Crest Emblem */}
          <div className="mb-6 flex justify-center transform hover:scale-105 transition-transform duration-500">
            <AdheeraEmblem size={220} className="sm:w-[260px] sm:h-[260px]" />
          </div>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C99A3D]/60 bg-[#141414] text-[#E6C46A] text-xs font-bold tracking-widest uppercase mb-4 shadow-md">
            <MapPin className="w-3.5 h-3.5 text-[#C99A3D]" />
            <span>Kumar Nagar, Tiruppur, Tamil Nadu</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F5] font-display uppercase tracking-wider my-4">
            YOUR STYLE. <span className="gold-text-gradient">YOUR SIGNATURE.</span>
          </h2>

          {/* Supporting Copy */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#A8A8A8] font-normal leading-relaxed mb-6">
            {BUSINESS_CONFIG.tagline}
          </p>

          {/* Supporting Service Line */}
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#E6C46A] font-semibold mb-8">
            {BUSINESS_CONFIG.servicesLine}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                'Hello Adheera Saloon & Tatoos 👋\nI would like to book an appointment.\n\nPlease confirm availability.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded bg-gradient-to-r from-[#C99A3D] via-[#E6C46A] to-[#C99A3D] text-[#080808] font-black text-xs sm:text-sm tracking-widest uppercase flex items-center justify-center gap-2.5 shadow-xl hover:brightness-110 active:scale-95 transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>BOOK ON WHATSAPP</span>
            </a>

            <a
              href={BUSINESS_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded border border-[#C99A3D]/70 text-[#F5F5F5] hover:text-[#E6C46A] hover:bg-white/5 font-bold text-xs sm:text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-all"
            >
              <MapPin className="w-4 h-4 text-[#C99A3D]" />
              <span>VIEW ON GOOGLE MAPS</span>
            </a>
          </div>

          {/* Direct Verified Trust Highlights */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="flex items-center gap-2.5">
              <Scissors className="w-4 h-4 text-[#C99A3D] shrink-0" />
              <div>
                <p className="text-[11px] font-bold text-[#F5F5F5] uppercase">Precision Cuts</p>
                <p className="text-[10px] text-[#888888]">From ₹99</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-[#C99A3D] shrink-0" />
              <div>
                <p className="text-[11px] font-bold text-[#F5F5F5] uppercase">Gold Facial</p>
                <p className="text-[10px] text-[#888888]">Signature ₹999</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Feather className="w-4 h-4 text-[#C99A3D] shrink-0" />
              <div>
                <p className="text-[11px] font-bold text-[#F5F5F5] uppercase">Tattoo Studio</p>
                <p className="text-[10px] text-[#888888]">Custom Artwork</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
              <div>
                <p className="text-[11px] font-bold text-[#F5F5F5] uppercase">WhatsApp Booking</p>
                <p className="text-[10px] text-[#888888]">{BUSINESS_CONFIG.displayPhone}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          2. AEO & GENERATIVE SEARCH: AT A GLANCE (ENTITY BOX)
          ================================================== */}
      <section className="py-12 bg-[#0c0c0c] border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="p-6 rounded-2xl bg-[#111111] border border-[#C99A3D]/40">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#C99A3D]" />
                <h3 className="text-xs uppercase font-extrabold tracking-widest text-[#E6C46A]">
                  Adheera Saloon &amp; Tatoos — Tiruppur Studio Details
                </h3>
              </div>
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#E6C46A] hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Open Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed">
              <div>
                <strong className="text-[#F5F5F5] block font-semibold">Studio Location:</strong>
                <p className="text-[#A8A8A8] mt-0.5">{BUSINESS_CONFIG.address}</p>
              </div>
              <div>
                <strong className="text-[#F5F5F5] block font-semibold">Services:</strong>
                <p className="text-[#A8A8A8] mt-0.5">Haircuts, beard &amp; shaving, face care, combos, hair color, and tattoo enquiries.</p>
              </div>
              <div>
                <strong className="text-[#F5F5F5] block font-semibold">Direct WhatsApp Booking:</strong>
                <p className="text-[#E6C46A] mt-0.5 font-bold">+91 7010717408</p>
              </div>
              <div>
                <strong className="text-[#F5F5F5] block font-semibold">Working Hours:</strong>
                <p className="text-[#A8A8A8] mt-0.5">{BUSINESS_CONFIG.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          3. WHY ADHEERA
          ================================================== */}
      <section className="py-20 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="The Studio Standard"
            title="MORE THAN A SALOON. IT'S YOUR STYLE STUDIO."
            description="Built to deliver precision craftsmanship in modern haircutting, grooming, facial therapy, and custom tattoos."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#111111] p-6 rounded-xl border border-white/10 hover:border-[#C99A3D]/60 transition-all">
              <div className="w-12 h-12 rounded-lg bg-[#181818] border border-[#C99A3D]/30 flex items-center justify-center text-[#E6C46A] mb-4">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#F5F5F5] mb-2 font-display">Expert Grooming</h3>
              <p className="text-xs sm:text-sm text-[#A8A8A8] leading-relaxed">
                Professional haircuts, beard styling, taper fades, and clean close shaving.
              </p>
            </div>

            <div className="bg-[#111111] p-6 rounded-xl border border-white/10 hover:border-[#C99A3D]/60 transition-all">
              <div className="w-12 h-12 rounded-lg bg-[#181818] border border-[#C99A3D]/30 flex items-center justify-center text-[#E6C46A] mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#F5F5F5] mb-2 font-display">Premium Care</h3>
              <p className="text-xs sm:text-sm text-[#A8A8A8] leading-relaxed">
                Facial and grooming services designed for a refreshed, de-tanned, and glowing look.
              </p>
            </div>

            <div className="bg-[#111111] p-6 rounded-xl border border-white/10 hover:border-[#C99A3D]/60 transition-all">
              <div className="w-12 h-12 rounded-lg bg-[#181818] border border-[#C99A3D]/30 flex items-center justify-center text-[#E6C46A] mb-4">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#F5F5F5] mb-2 font-display">Creative Color</h3>
              <p className="text-xs sm:text-sm text-[#A8A8A8] leading-relaxed">
                Professional hair color options including Herbal Extract and Black Rose formulations.
              </p>
            </div>

            <div className="bg-[#111111] p-6 rounded-xl border border-white/10 hover:border-[#C99A3D]/60 transition-all">
              <div className="w-12 h-12 rounded-lg bg-[#181818] border border-[#C99A3D]/30 flex items-center justify-center text-[#E6C46A] mb-4">
                <Feather className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#F5F5F5] mb-2 font-display">Tattoo Artistry</h3>
              <p className="text-xs sm:text-sm text-[#A8A8A8] leading-relaxed">
                Personalized tattoo consultation and creative tattoo work with sterile standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          4. COMPLETE SERVICE MENU & FILTER TABS
          ================================================== */}
      <section id="services-menu" className="py-20 bg-[#0d0d0d] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Transparent Pricing"
            title="COMPLETE SERVICE MENU"
            description="Explore our full service catalog with exact pricing. Every service includes direct one-click WhatsApp appointment generation."
          />

          {/* Accessible Category Filters */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist">
            <button
              role="tab"
              aria-selected={selectedFilter === 'all'}
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedFilter === 'all'
                  ? 'bg-gradient-to-r from-[#C99A3D] to-[#E6C46A] text-[#080808] shadow-md'
                  : 'bg-[#181818] text-[#A8A8A8] border border-white/10 hover:border-[#C99A3D]/40 hover:text-white'
              }`}
            >
              ALL SERVICES ({SERVICES.length})
            </button>

            {CATEGORIES.map((cat) => {
              const count = SERVICES.filter((s) => s.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={selectedFilter === cat.id}
                  onClick={() => setSelectedFilter(cat.id)}
                  className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                    selectedFilter === cat.id
                      ? 'bg-gradient-to-r from-[#C99A3D] to-[#E6C46A] text-[#080808] shadow-md'
                      : 'bg-[#181818] text-[#A8A8A8] border border-white/10 hover:border-[#C99A3D]/40 hover:text-white'
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onBookForm={onBookService}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('/book')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-[#C99A3D] text-[#E6C46A] hover:bg-[#C99A3D] hover:text-[#080808] text-xs font-bold tracking-widest uppercase transition-all"
            >
              <span>Custom Appointment Booking Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================
          5. FEATURED COMBO PACKAGES
          ================================================== */}
      <section className="py-20 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Value & Transformation"
            title="GROOMING COMBO PACKAGES"
            description="Experience full transformation packages designed to save you time and provide comprehensive head-to-face care."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCombos.map((combo) => (
              <ComboCard
                key={combo.id}
                combo={combo}
                onBookForm={onBookService}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          6. TATTOO STUDIO
          ================================================== */}
      <TattooSection />

      {/* ==================================================
          7. GALLERY
          ================================================== */}
      <Gallery />

      {/* ==================================================
          8. ABOUT ADHEERA
          ================================================== */}
      <section id="about" className="py-20 bg-[#0c0c0c] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <SectionHeading
            subtitle="Our Commitment"
            title="WELCOME TO ADHEERA"
          />

          <div className="p-8 sm:p-12 rounded-2xl bg-[#111111] border border-[#C99A3D]/40 text-left space-y-4">
            <p className="text-sm sm:text-base text-[#D0D0D0] leading-relaxed">
              At <strong className="text-[#E6C46A]">Adheera Saloon &amp; Tatoos</strong>, grooming is more than a service — it's an experience. From precision haircuts and beard styling to facial care, hair color and tattoo artistry, we help customers create a look that feels uniquely theirs.
            </p>
            <p className="text-sm sm:text-base text-[#A8A8A8] leading-relaxed">
              Whether you need a sharp executive fade, refreshing skin rejuvenation with our signature Gold Facial, or personalized tattoo body art, our studio is dedicated to clean craft, honest pricing, and genuine hospitality.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#E6C46A]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C99A3D]" /> Precision Haircutting
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C99A3D]" /> Beard Grooming
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C99A3D]" /> Luxury Skin Care
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C99A3D]" /> Tattoo Enquiries
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          9. FREQUENTLY ASKED QUESTIONS (AEO STRATEGY)
          ================================================== */}
      <section id="faq" className="py-20 bg-[#080808] border-t border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Direct Answers"
            title="FREQUENTLY ASKED QUESTIONS"
            description="Clear, factual answers to help you plan your visit to Adheera Saloon & Tatoos."
          />

          <div className="space-y-4">
            {homeFaqs.map((faq) => (
              <details
                key={faq.id}
                className="group rounded-xl bg-[#111111] border border-white/10 p-5 transition-all open:border-[#C99A3D]/60"
              >
                <summary className="font-bold text-sm sm:text-base text-[#F5F5F5] cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <ChevronRight className="w-4 h-4 text-[#C99A3D] group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-[#A8A8A8] leading-relaxed pt-2 border-t border-white/5">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('/faq')}
              className="text-xs font-bold text-[#E6C46A] hover:underline uppercase tracking-wider"
            >
              View All Questions &amp; Answers →
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================
          10. DIRECT APPOINTMENT CTA
          ================================================== */}
      <section className="py-20 bg-gradient-to-b from-[#141414] to-[#080808] text-center border-b border-[#C99A3D]/25">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="w-14 h-14 rounded-full bg-[#181818] border border-[#C99A3D] mx-auto flex items-center justify-center text-[#E6C46A] mb-6 shadow-lg">
            <MessageSquare className="w-6 h-6 fill-current" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5F5F5] font-display uppercase tracking-wider">
            READY TO ELEVATE YOUR LOOK?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#A8A8A8] max-w-xl mx-auto">
            Book an appointment directly through WhatsApp. Fast response, flexible slots, and no advance fee required.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                'Hello Adheera Saloon & Tatoos 👋\nI would like to book an appointment.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded bg-gradient-to-r from-[#C99A3D] via-[#E6C46A] to-[#C99A3D] text-[#080808] font-black text-xs sm:text-sm tracking-widest uppercase flex items-center justify-center gap-2 shadow-xl hover:brightness-110 active:scale-95 transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>BOOK ON WHATSAPP (+91 7010717408)</span>
            </a>

            <button
              onClick={() => onNavigate('/book')}
              className="w-full sm:w-auto px-8 py-4 rounded border border-[#C99A3D] text-[#E6C46A] font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-white/5 transition-all"
            >
              Online Booking Form
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
