import React from 'react';
import { Gallery } from '../gallery/Gallery';
import { SEOHead } from '../seo/SEOHead';
import { ChevronRight, Home } from 'lucide-react';

export const GalleryView: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-[#080808] min-h-screen py-10">
      <SEOHead
        title="Gallery & Style Showcase | Adheera Saloon & Tatoos"
        description="View recent haircut designs, beard transformations, facial rejuvenation, and tattoo artwork from Adheera Saloon & Tatoos."
        path="/gallery"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#888888]">
          <button onClick={() => onNavigate('/')} className="hover:text-[#E6C46A] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-white/20" />
          <span className="text-[#E6C46A] font-bold">Gallery</span>
        </nav>
      </div>

      <Gallery isStandalonePage={true} />
    </div>
  );
};
