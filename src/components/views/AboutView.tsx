import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { SEOHead } from '../seo/SEOHead';
import { ChevronRight, Home, Scissors, Sparkles, Feather, Palette, MessageSquare, Instagram, Mail, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../lib/whatsapp';
import { AdheeraEmblem } from '../common/AdheeraEmblem';

export const AboutView: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-[#080808] min-h-screen py-10">
      <SEOHead
        title="About Adheera Saloon & Tatoos | Philosophy & Artistry in Tiruppur"
        description="Learn about Adheera Saloon & Tatoos in Kumar Nagar, Tiruppur — providing precision haircuts, beard grooming, facial care, hair color, and tattoo artistry."
        path="/about"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#888888]">
          <button onClick={() => onNavigate('/')} className="hover:text-[#E6C46A] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-white/20" />
          <span className="text-[#E6C46A] font-bold">About</span>
        </nav>

        <SectionHeading
          subtitle="Our Story & Philosophy"
          title="WELCOME TO ADHEERA"
          description="Craftsmanship, hospitality, and modern artistry combined under one roof in Tiruppur, Tamil Nadu."
        />

        <div className="max-w-4xl mx-auto">
          {/* Main Story Box with Royal Emblem Showcase */}
          <div className="bg-[#111111] border border-[#C99A3D]/40 rounded-2xl p-8 sm:p-12 mb-12 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-8 pb-6 border-b border-white/10 text-center sm:text-left">
              <div className="shrink-0">
                <AdheeraEmblem size={160} />
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#E6C46A] block mb-1">
                  Established in Tiruppur
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-display">
                  YOUR STYLE. YOUR SIGNATURE.
                </h3>
                <p className="text-xs text-[#A8A8A8] mt-1 flex items-center justify-center sm:justify-start gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C99A3D]" />
                  <span>Kumar Nagar, Renganatha Puram, Tiruppur, Tamil Nadu 641603</span>
                </p>
              </div>
            </div>

            <p className="text-base text-[#D0D0D0] leading-relaxed">
              At <strong className="text-[#E6C46A]">Adheera Saloon &amp; Tatoos</strong>, grooming is more than a service — it's an experience. From precision haircuts and beard styling to facial care, hair color and tattoo artistry, we help customers create a look that feels uniquely theirs.
            </p>

            <p className="text-sm sm:text-base text-[#A8A8A8] leading-relaxed">
              Every appointment is designed around personal consultation. Whether you are stepping in for a quick maintenance trim or indulging in our signature Gold Facial and custom ink consultation, we maintain a welcoming, hygienic atmosphere with upfront, transparent rates.
            </p>

            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Scissors className="w-5 h-5 text-[#C99A3D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#F5F5F5] uppercase">Precision Hair &amp; Beard</h4>
                  <p className="text-xs text-[#A8A8A8] mt-1">Mastery of fades, classic styles, and clean razor lines.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#C99A3D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#F5F5F5] uppercase">Targeted Skin Care</h4>
                  <p className="text-xs text-[#A8A8A8] mt-1">Gentle de-tanning and deep rejuvenating facials.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Palette className="w-5 h-5 text-[#C99A3D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#F5F5F5] uppercase">Specialized Hair Color</h4>
                  <p className="text-xs text-[#A8A8A8] mt-1">Herbal extract formulas and vibrant trend shades.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Feather className="w-5 h-5 text-[#C99A3D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#F5F5F5] uppercase">Custom Tattoo Art</h4>
                  <p className="text-xs text-[#A8A8A8] mt-1">Dedicated body art consultation with sterile protocol.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Credentials / Direct Connect */}
          <div className="p-8 rounded-2xl bg-[#0e0e0e] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-base font-bold text-[#F5F5F5]">Connect Directly With Our Team</h4>
              <p className="text-xs text-[#A8A8A8] mt-1">
                Reach us via WhatsApp at <strong className="text-[#E6C46A]">{BUSINESS_CONFIG.displayPhone}</strong> or email at <strong className="text-[#E6C46A]">{BUSINESS_CONFIG.email}</strong>.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#141414] border border-[#C99A3D]/40 text-[#E6C46A] hover:bg-[#C99A3D] hover:text-[#080808] transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#141414] border border-[#C99A3D]/40 text-[#E6C46A] hover:bg-[#C99A3D] hover:text-[#080808] transition-colors"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg bg-gradient-to-r from-[#C99A3D] to-[#E6C46A] text-[#080808] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
