import React from 'react';
import { MessageSquare, Instagram, Mail, Phone, MapPin, Clock, Shield, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../lib/whatsapp';
import { AdheeraEmblem } from '../common/AdheeraEmblem';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#C99A3D]/25 pt-16 pb-28 sm:pb-16 text-[#A8A8A8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column with Royal Emblem */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <AdheeraEmblem size={52} showText={false} />
              </div>
              <div>
                <h3 className="text-xl font-black text-[#F5F5F5] font-display tracking-widest">ADHEERA</h3>
                <p className="text-[10px] tracking-[0.25em] text-[#C99A3D] font-bold uppercase -mt-1">
                  SALOON &amp; TATOOS
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A8A8A8] leading-relaxed">
              Premium men's grooming, precision haircutting, beard sculpting, revitalizing facial treatments, hair color, and custom tattoo artistry in Tiruppur.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={BUSINESS_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C99A3D]/40 text-xs text-[#E6C46A] hover:bg-[#C99A3D]/10 transition-colors w-fit"
              >
                <Instagram className="w-4 h-4 text-[#C99A3D]" />
                <span>Follow on Instagram</span>
              </a>

              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-xs text-[#CCCCCC] hover:text-[#E6C46A] transition-colors w-fit"
              >
                <MapPin className="w-4 h-4 text-[#C99A3D]" />
                <span>View on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-black tracking-widest text-[#F5F5F5] uppercase mb-4 pb-2 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <button onClick={() => handleNav('/')} className="hover:text-[#E6C46A] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/services')} className="hover:text-[#E6C46A] transition-colors">
                  All Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/services/combo-packages')} className="hover:text-[#E6C46A] transition-colors">
                  Grooming Combos
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/tattoos')} className="hover:text-[#E6C46A] transition-colors">
                  Tattoo Studio
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/gallery')} className="hover:text-[#E6C46A] transition-colors">
                  Showcase Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/about')} className="hover:text-[#E6C46A] transition-colors">
                  About Adheera
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/faq')} className="hover:text-[#E6C46A] transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Service Categories */}
          <div>
            <h4 className="text-xs font-black tracking-widest text-[#F5F5F5] uppercase mb-4 pb-2 border-b border-white/10">
              Service Menu
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => handleNav('/services/hair')} className="hover:text-[#E6C46A] transition-colors">
                  Hair Services (from ₹99)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/services/beard-shaving')} className="hover:text-[#E6C46A] transition-colors">
                  Beard &amp; Shaving (from ₹79)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/services/face-care')} className="hover:text-[#E6C46A] transition-colors">
                  Face Care &amp; Facials (from ₹59)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/services/combo-packages')} className="hover:text-[#E6C46A] transition-colors">
                  Combo Packages (from ₹349)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/services/hair-color')} className="hover:text-[#E6C46A] transition-colors">
                  Hair Color Treatments (from ₹149)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/tattoos')} className="hover:text-[#E6C46A] transition-colors">
                  Custom Tattoo Enquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Verified Contact Details in Tiruppur */}
          <div>
            <h4 className="text-xs font-black tracking-widest text-[#F5F5F5] uppercase mb-4 pb-2 border-b border-white/10">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-[#E6C46A] group transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-[#A8A8A8] uppercase tracking-wider">WhatsApp Appointments</span>
                  <span className="font-semibold text-[#F5F5F5] group-hover:text-[#E6C46A]">{BUSINESS_CONFIG.displayPhone}</span>
                </div>
              </a>

              <a
                href={`mailto:${BUSINESS_CONFIG.email}`}
                className="flex items-start gap-2.5 hover:text-[#E6C46A] group transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C99A3D] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-[#A8A8A8] uppercase tracking-wider">Business Email</span>
                  <span className="font-semibold text-[#F5F5F5] group-hover:text-[#E6C46A] break-all">{BUSINESS_CONFIG.email}</span>
                </div>
              </a>

              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-[#E6C46A] group transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#C99A3D] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-[#A8A8A8] uppercase tracking-wider">Studio Location (Tiruppur)</span>
                  <span className="text-xs text-[#F5F5F5] group-hover:text-[#E6C46A] leading-snug block">{BUSINESS_CONFIG.address}</span>
                </div>
              </a>

              <div className="flex items-start gap-2.5 text-[#A8A8A8]">
                <Clock className="w-4 h-4 text-[#C99A3D] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-[#A8A8A8] uppercase tracking-wider">Hours</span>
                  <span className="text-xs text-[#F5F5F5]">{BUSINESS_CONFIG.hours}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNav('/book')}
                  className="w-full py-2.5 rounded bg-[#181818] border border-[#C99A3D]/50 text-[#E6C46A] text-xs font-bold tracking-wider uppercase hover:bg-[#C99A3D] hover:text-[#080808] transition-all cursor-pointer"
                >
                  Book Online Form
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
          <p>© 2026 Adheera Saloon &amp; Tatoos. All Rights Reserved. Tiruppur, Tamil Nadu.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => handleNav('/privacy')} className="hover:text-[#E6C46A] transition-colors flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" />
              Privacy Policy &amp; Terms
            </button>
            <span>•</span>
            <span className="text-[11px] text-[#666]">Brand: {BUSINESS_CONFIG.legalSpelling}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
