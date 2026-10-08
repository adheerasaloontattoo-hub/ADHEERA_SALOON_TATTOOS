import React from 'react';
import { TattooSection } from '../tattoos/TattooSection';
import { SEOHead } from '../seo/SEOHead';
import { ChevronRight, Home, Shield, Feather, Sparkles, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../lib/whatsapp';

export const TattoosView: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-[#080808] min-h-screen py-10">
      <SEOHead
        title="Tattoo Studio | Custom Inking & Consultation at Adheera Saloon & Tatoos"
        description="Personalized tattoo consultations and custom ink work at Adheera Saloon & Tatoos. Minimal tattoos, name lettering, symbols, and black & grey artistry. Enquire on WhatsApp."
        path="/tattoos"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#888888]">
          <button onClick={() => onNavigate('/')} className="hover:text-[#E6C46A] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-white/20" />
          <span className="text-[#E6C46A] font-bold">Tattoo Studio</span>
        </nav>

        {/* Studio Safety & Craft Values */}
        <div className="mb-12 p-8 rounded-2xl bg-[#111111] border border-[#C99A3D]/40 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#181818] border border-[#C99A3D]/30 flex items-center justify-center text-[#E6C46A] shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#F5F5F5] uppercase">Sterile Hygiene</h4>
              <p className="text-xs text-[#A8A8A8] mt-1 leading-relaxed">
                Brand-new single-use needles, certified high-grade pigments, and strict sanitization.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#181818] border border-[#C99A3D]/30 flex items-center justify-center text-[#E6C46A] shrink-0">
              <Feather className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#F5F5F5] uppercase">Tailored Artwork</h4>
              <p className="text-xs text-[#A8A8A8] mt-1 leading-relaxed">
                From delicate minimalist lines to bold artistic scripts, tailored precisely to your anatomy.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#181818] border border-[#C99A3D]/30 flex items-center justify-center text-[#E6C46A] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#F5F5F5] uppercase">Transparent Quotes</h4>
              <p className="text-xs text-[#A8A8A8] mt-1 leading-relaxed">
                Clear pricing upfront based on size, complexity, and placement via WhatsApp consultation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <TattooSection />
    </div>
  );
};
