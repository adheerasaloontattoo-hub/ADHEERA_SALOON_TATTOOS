import React, { useState } from 'react';
import { MessageSquare, Sparkles, Feather, Compass, Heart, Shield, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { createWhatsAppTattooUrl } from '../../lib/whatsapp';

export const TattooSection: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [size, setSize] = useState('2x2 inches');
  const [placement, setPlacement] = useState('Forearm');

  const tattooStyles = [
    { title: 'Minimal Tattoos', desc: 'Subtle, delicate line work with refined elegance.', icon: Feather },
    { title: 'Name & Lettering', desc: 'Custom calligraphic scripts, names, and meaningful quotes.', icon: Heart },
    { title: 'Symbol Tattoos', desc: 'Sacred geometry, spiritual glyphs, and personal motifs.', icon: Compass },
    { title: 'Black & Grey Art', desc: 'Smooth tonal shading, deep contrast, and timeless realism.', icon: Shield },
    { title: 'Custom Designs', desc: 'Bespoke artwork engineered uniquely around your life story.', icon: Sparkles },
    { title: 'Small Tattoos', desc: 'Discreet wrist, ankle, and neck tattoos crafted with precision.', icon: CheckCircle2 }
  ];

  const handleEnquire = (e: React.FormEvent) => {
    e.preventDefault();
    const url = createWhatsAppTattooUrl({
      idea: idea || 'Custom Tattoo Consultation',
      size,
      placement
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="tattoos" className="py-20 lg:py-28 bg-[#0a0a0a] relative overflow-hidden border-t border-b border-[#C99A3D]/20">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C99A3D]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          subtitle="Tattoo Artistry"
          title="MAKE IT PERMANENT."
          description="Express your personality through personalized tattoo artistry. From minimal single-needle pieces to bold black & grey designs, every ink session is handled with sterile care and creative dedication."
        />

        {/* Styles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tattooStyles.map((style, idx) => {
            const Icon = style.icon;
            return (
              <div
                key={idx}
                className="bg-[#111111] p-6 rounded-xl border border-white/10 hover:border-[#C99A3D]/60 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#181818] border border-[#C99A3D]/30 flex items-center justify-center text-[#E6C46A] mb-4 group-hover:bg-[#C99A3D] group-hover:text-[#080808] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#F5F5F5] group-hover:text-[#E6C46A] transition-colors mb-2">
                  {style.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A8A8A8] leading-relaxed">
                  {style.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Consultation & Enquiry Box */}
        <div className="max-w-3xl mx-auto bg-gradient-to-b from-[#141414] to-[#0d0d0d] rounded-2xl border border-[#C99A3D]/50 p-6 sm:p-10 shadow-2xl">
          <div className="text-center mb-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#E6C46A]">
              Transparent Tattoo Process
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] font-display mt-1">
              Personalized Tattoo Consultation
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#A8A8A8] max-w-xl mx-auto">
              Tattoo pricing depends on the design, size, intricacy, and placement. Tell us your concept and get direct consultation and transparent pricing via WhatsApp.
            </p>
          </div>

          <form onSubmit={handleEnquire} className="space-y-4">
            <div>
              <label htmlFor="tattoo-idea" className="block text-xs font-semibold uppercase tracking-wider text-[#A8A8A8] mb-1.5">
                Your Tattoo Idea / Concept
              </label>
              <input
                id="tattoo-idea"
                type="text"
                placeholder="e.g. Minimalist lion silhouette, name script, forearm compass..."
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#080808] border border-white/15 text-[#F5F5F5] text-sm focus:outline-none focus:border-[#C99A3D] transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="tattoo-size" className="block text-xs font-semibold uppercase tracking-wider text-[#A8A8A8] mb-1.5">
                  Approximate Size
                </label>
                <select
                  id="tattoo-size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#080808] border border-white/15 text-[#F5F5F5] text-sm focus:outline-none focus:border-[#C99A3D] transition-colors"
                >
                  <option value="Small (1-2 inches)">Small (1-2 inches)</option>
                  <option value="Medium (3-5 inches)">Medium (3-5 inches)</option>
                  <option value="Large (6+ inches)">Large (6+ inches)</option>
                  <option value="Sleeve / Custom Area">Sleeve / Custom Area</option>
                </select>
              </div>

              <div>
                <label htmlFor="tattoo-placement" className="block text-xs font-semibold uppercase tracking-wider text-[#A8A8A8] mb-1.5">
                  Body Placement
                </label>
                <select
                  id="tattoo-placement"
                  value={placement}
                  onChange={(e) => setPlacement(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#080808] border border-white/15 text-[#F5F5F5] text-sm focus:outline-none focus:border-[#C99A3D] transition-colors"
                >
                  <option value="Forearm / Wrist">Forearm / Wrist</option>
                  <option value="Bicep / Shoulder">Bicep / Shoulder</option>
                  <option value="Chest / Collarbone">Chest / Collarbone</option>
                  <option value="Neck / Behind Ear">Neck / Behind Ear</option>
                  <option value="Back / Shoulder Blade">Back / Shoulder Blade</option>
                  <option value="Leg / Ankle">Leg / Ankle</option>
                  <option value="Other / Need Advice">Other / Need Advice</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-lg bg-gradient-to-r from-[#C99A3D] via-[#E6C46A] to-[#C99A3D] text-[#080808] font-black text-xs sm:text-sm tracking-widest uppercase flex items-center justify-center gap-2 shadow-xl hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                ENQUIRE ON WHATSAPP
              </button>
            </div>

            <p className="text-[11px] text-[#777777] text-center mt-2">
              Opens WhatsApp with a prefilled message directly to our studio line +91 7010717408.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
