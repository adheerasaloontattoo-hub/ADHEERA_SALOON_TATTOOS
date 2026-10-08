import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Instagram, Scissors, Sparkles, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../lib/whatsapp';

type GalleryFilter = 'all' | 'hair' | 'beard' | 'facial' | 'tattoo';

interface GalleryItem {
  id: string;
  category: GalleryFilter;
  title: string;
  subtitle: string;
  alt: string;
  gradient: string;
}

export const Gallery: React.FC<{ isStandalonePage?: boolean }> = ({ isStandalonePage = false }) => {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('all');

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      category: 'hair',
      title: 'Precision Fade & Taper',
      subtitle: 'Model Haircut styling with razor-sharp contours',
      alt: "Men's precision taper fade and modern hairstyle at Adheera Saloon & Tatoos",
      gradient: 'from-amber-950/40 via-stone-900 to-black'
    },
    {
      id: 'g2',
      category: 'beard',
      title: 'Sculpted Beard & Razor Finish',
      subtitle: 'Beard trim and shape with soothing warm lather clean shave',
      alt: "Detailed beard sculpting and mustache shaping at Adheera Saloon & Tatoos",
      gradient: 'from-yellow-950/40 via-neutral-900 to-black'
    },
    {
      id: 'g3',
      category: 'facial',
      title: 'Signature Gold Facial',
      subtitle: 'Luxurious rejuvenation treatment with glowing skin therapy',
      alt: "Relaxing Gold Facial treatment application for men at Adheera Saloon & Tatoos",
      gradient: 'from-amber-900/40 via-stone-900 to-black'
    },
    {
      id: 'g4',
      category: 'tattoo',
      title: 'Minimal Geometric Ink',
      subtitle: 'Crisp single-needle line work and sacred geometric balance',
      alt: "Minimalist geometric forearm tattoo artwork at Adheera Saloon & Tatoos",
      gradient: 'from-stone-800/40 via-neutral-900 to-black'
    },
    {
      id: 'g5',
      category: 'hair',
      title: 'Executive Classic Cut',
      subtitle: 'Clean General Haircut designed for versatile daily grooming',
      alt: "Executive classic side part haircut at Adheera Saloon & Tatoos",
      gradient: 'from-zinc-800/40 via-neutral-900 to-black'
    },
    {
      id: 'g6',
      category: 'tattoo',
      title: 'Bespoke Script & Lettering',
      subtitle: 'Personalized calligraphic quote with subtle shading',
      alt: "Fine script lettering tattoo consultation and artwork at Adheera",
      gradient: 'from-amber-950/30 via-neutral-900 to-black'
    }
  ];

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Portfolio Showcase"
          title="THE ADHEERA CRAFT"
          description="Explore our specialized craft in men's haircutting, beard grooming, restorative facials, and tattoo artistry."
        />

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(['all', 'hair', 'beard', 'facial', 'tattoo'] as GalleryFilter[]).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-[#C99A3D] to-[#E6C46A] text-[#080808] shadow-md shadow-[#C99A3D]/20'
                  : 'bg-[#141414] text-[#A8A8A8] border border-white/10 hover:border-[#C99A3D]/50 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-xl overflow-hidden border border-white/10 hover:border-[#C99A3D]/70 bg-gradient-to-b ${item.gradient} p-8 flex flex-col justify-end min-h-[300px] transition-all duration-300 hover:-translate-y-1 shadow-lg`}
            >
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#080808]/70 border border-white/10 flex items-center justify-center text-[#E6C46A]">
                {item.category === 'tattoo' ? (
                  <Sparkles className="w-4 h-4 text-[#C99A3D]" />
                ) : (
                  <Scissors className="w-4 h-4 text-[#C99A3D]" />
                )}
              </div>

              <div className="relative z-10">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#E6C46A] bg-[#080808]/80 px-2 py-0.5 rounded border border-[#C99A3D]/30 inline-block mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-[#F5F5F5] font-display group-hover:text-[#E6C46A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A8A8A8] mt-1 leading-relaxed">
                  {item.subtitle}
                </p>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={BUSINESS_CONFIG.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-[#E6C46A] hover:underline flex items-center gap-1"
                  >
                    <Instagram className="w-3 h-3" />
                    <span>View on Instagram</span>
                  </a>

                  <a
                    href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Adheera Saloon & Tatoos 👋\nI would like to enquire about: ${item.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-[#F5F5F5] hover:text-[#E6C46A] flex items-center gap-1"
                  >
                    <MessageSquare className="w-3 h-3 text-[#25D366]" />
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#111111] border border-[#C99A3D]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center text-white shrink-0 shadow-lg">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#F5F5F5]">Follow Adheera on Instagram</h3>
              <p className="text-xs sm:text-sm text-[#A8A8A8]">
                See daily haircut transformations, fresh client styling, and latest ink work at{' '}
                <span className="text-[#E6C46A] font-semibold">@_adheera_saloon_and_tattoos</span>
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-[#C99A3D] text-[#E6C46A] hover:bg-[#C99A3D] hover:text-[#080808] font-bold text-xs tracking-wider uppercase transition-all shrink-0"
          >
            Visit Instagram Profile
          </a>
        </div>
      </div>
    </section>
  );
};
