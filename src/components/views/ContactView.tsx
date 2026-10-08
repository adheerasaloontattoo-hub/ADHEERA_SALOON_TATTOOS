import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { SEOHead } from '../seo/SEOHead';
import { ChevronRight, Home, MessageSquare, Instagram, Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../lib/whatsapp';

export const ContactView: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-[#080808] min-h-screen py-10">
      <SEOHead
        title="Contact Us | WhatsApp Booking & Studio Info — Adheera Saloon & Tatoos"
        description="Contact Adheera Saloon & Tatoos. Direct WhatsApp appointments at +91 7010717408, official email adheerasaloontattoo@gmail.com, and Instagram @_adheera_saloon_and_tattoos."
        path="/contact"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#888888]">
          <button onClick={() => onNavigate('/')} className="hover:text-[#E6C46A] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-white/20" />
          <span className="text-[#E6C46A] font-bold">Contact</span>
        </nav>

        <SectionHeading
          subtitle="Direct Communications"
          title="GET IN TOUCH"
          description="We welcome walk-ins and appointments. Reach us directly on WhatsApp for immediate service booking and tattoo consultations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Verified Contact Channels */}
          <div className="bg-[#111111] rounded-2xl border border-[#C99A3D]/40 p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-[#F5F5F5] font-display">Official Business Channels</h3>

            <div className="space-y-4">
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl bg-[#161616] border border-white/5 hover:border-[#C99A3D]/60 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#25D366]/20 border border-[#25D366] flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-[10px] text-[#A8A8A8] uppercase tracking-wider block font-semibold">
                    Primary Appointment Channel (WhatsApp)
                  </span>
                  <strong className="text-base text-[#F5F5F5] group-hover:text-[#E6C46A] transition-colors block">
                    {BUSINESS_CONFIG.displayPhone}
                  </strong>
                  <p className="text-xs text-[#888888] mt-0.5">
                    Click to start an immediate chat or book a haircut, shave, or facial slot.
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${BUSINESS_CONFIG.email}`}
                className="flex items-start gap-4 p-4 rounded-xl bg-[#161616] border border-white/5 hover:border-[#C99A3D]/60 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#C99A3D]/20 border border-[#C99A3D] flex items-center justify-center text-[#E6C46A] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-[#A8A8A8] uppercase tracking-wider block font-semibold">
                    Official Email
                  </span>
                  <strong className="text-base text-[#F5F5F5] group-hover:text-[#E6C46A] transition-colors block break-all">
                    {BUSINESS_CONFIG.email}
                  </strong>
                  <p className="text-xs text-[#888888] mt-0.5">
                    For business enquiries, partnerships, and studio feedback.
                  </p>
                </div>
              </a>

              <a
                href={BUSINESS_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl bg-[#161616] border border-white/5 hover:border-[#C99A3D]/60 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-pink-500/20 border border-pink-500 flex items-center justify-center text-pink-400 shrink-0 mt-0.5">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-[#A8A8A8] uppercase tracking-wider block font-semibold">
                    Instagram Showcase
                  </span>
                  <strong className="text-base text-[#F5F5F5] group-hover:text-[#E6C46A] transition-colors block">
                    {BUSINESS_CONFIG.instagramHandle}
                  </strong>
                  <p className="text-xs text-[#888888] mt-0.5">
                    Daily portfolio updates, hairstyle cuts, and tattoo ink photographs.
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Location & Operating Guidelines */}
          <div className="bg-[#111111] rounded-2xl border border-[#C99A3D]/40 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#F5F5F5] font-display mb-4">Location &amp; Visiting Hours</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#161616] border border-white/5">
                  <MapPin className="w-5 h-5 text-[#C99A3D] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#A8A8A8] font-bold block">
                      Physical Studio Address
                    </span>
                    <p className="text-sm text-[#F5F5F5] font-semibold mt-1">
                      {BUSINESS_CONFIG.address}
                    </p>
                    <p className="text-xs text-[#A8A8A8] mt-0.5">
                      Landmark: Kumar Nagar / Renganatha Puram, Tiruppur
                    </p>
                    <div className="mt-3">
                      <a
                        href={BUSINESS_CONFIG.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#202020] border border-[#C99A3D]/40 text-xs text-[#E6C46A] font-bold hover:bg-[#C99A3D] hover:text-[#080808] transition-colors"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Open in Google Maps App</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#161616] border border-white/5">
                  <Clock className="w-5 h-5 text-[#C99A3D] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#A8A8A8] font-bold block">
                      Studio Operating Hours
                    </span>
                    <p className="text-sm text-[#F5F5F5] font-semibold mt-1">
                      {BUSINESS_CONFIG.hours}
                    </p>
                    <p className="text-[11px] text-[#A8A8A8] mt-1">
                      Open 7 days a week. Appointments and tattoo consultations welcome anytime.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-xl overflow-hidden border border-[#C99A3D]/40 h-56 bg-[#181818] relative shadow-lg">
              <iframe
                title="Adheera Saloon & Tatoos Location Map"
                src="https://www.google.com/maps?q=East,+First+St,+Kumar+Nagar,+Renganatha+Puram,+Tiruppur,+Tamil+Nadu+641603&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-2.5 right-2.5">
                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-[#080808]/95 text-xs font-bold text-[#E6C46A] border border-[#C99A3D]/70 hover:bg-[#C99A3D] hover:text-[#080808] transition-colors shadow-md flex items-center gap-1"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open Directions</span>
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('/book')}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-[#C99A3D] to-[#E6C46A] text-[#080808] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg hover:brightness-110 transition-all cursor-pointer"
              >
                <span>Open Custom Booking Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
