import React from 'react';
import { Scissors, MessageSquare, Home } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../lib/whatsapp';
import { SEOHead } from '../seo/SEOHead';

export const NotFoundView: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 text-center">
      <SEOHead
        title="Page Not Found | Adheera Saloon & Tatoos"
        description="The page you are looking for does not exist. Return to Adheera Saloon & Tatoos."
        path="/404"
      />

      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#141414] border border-[#C99A3D] mx-auto flex items-center justify-center text-[#E6C46A]">
          <Scissors className="w-8 h-8 rotate-45" />
        </div>

        <span className="text-xs uppercase font-extrabold tracking-widest text-[#E6C46A] block">
          404 ERROR
        </span>

        <h1 className="text-3xl sm:text-4xl font-black text-[#F5F5F5] font-display uppercase tracking-wider">
          LOOKS LIKE YOU TOOK A WRONG TURN.
        </h1>

        <p className="text-sm text-[#A8A8A8] leading-relaxed">
          Let's get you back to the Adheera experience.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('/')}
            className="w-full sm:w-auto px-6 py-3.5 rounded bg-gradient-to-r from-[#C99A3D] to-[#E6C46A] text-[#080808] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
          >
            <Home className="w-4 h-4" />
            <span>BACK HOME</span>
          </button>

          <a
            href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
              'Hello Adheera Saloon & Tatoos 👋\nI would like to book an appointment.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded border border-[#C99A3D] text-[#E6C46A] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#C99A3D]/10"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>BOOK ON WHATSAPP</span>
          </a>
        </div>
      </div>
    </div>
  );
};
