import React from 'react';
import { MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../lib/whatsapp';

interface StickyWhatsAppProps {
  onOpenBooking: () => void;
}

export const StickyWhatsApp: React.FC<StickyWhatsAppProps> = ({ onOpenBooking }) => {
  const defaultWhatsAppUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    'Hello Adheera Saloon & Tatoos 👋\nI would like to book an appointment.\n\nPlease confirm availability.'
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#080808]/95 backdrop-blur-md border-t border-[#C99A3D]/40 p-3 sm:hidden shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <button
          onClick={onOpenBooking}
          className="flex-1 py-3 px-3 rounded bg-[#141414] border border-[#C99A3D]/60 text-[#E6C46A] text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 active:scale-95 transition-all"
          aria-label="Open Booking Form"
        >
          <Calendar className="w-4 h-4 text-[#C99A3D]" />
          <span>Book Form</span>
        </button>

        <a
          href={defaultWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-2 py-3 px-4 rounded bg-gradient-to-r from-[#C99A3D] via-[#E6C46A] to-[#C99A3D] text-[#080808] text-xs font-black tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
          aria-label="Direct WhatsApp Booking"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>BOOK ON WHATSAPP</span>
        </a>
      </div>
    </div>
  );
};
