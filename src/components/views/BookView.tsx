import React from 'react';
import { BookingForm } from '../booking/BookingForm';
import { SEOHead } from '../seo/SEOHead';
import { ChevronRight, Home, Sparkles } from 'lucide-react';

interface BookViewProps {
  initialServiceId?: string;
  onNavigate: (path: string) => void;
}

export const BookView: React.FC<BookViewProps> = ({ initialServiceId, onNavigate }) => {
  return (
    <div className="bg-[#080808] min-h-screen py-10">
      <SEOHead
        title="Book Appointment on WhatsApp | Adheera Saloon & Tatoos"
        description="Book your haircut, beard trim, facial, or hair color appointment at Adheera Saloon & Tatoos. Instant pre-filled WhatsApp confirmation at +91 7010717408."
        path="/book"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#888888]">
          <button onClick={() => onNavigate('/')} className="hover:text-[#E6C46A] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-white/20" />
          <span className="text-[#E6C46A] font-bold">Book Appointment</span>
        </nav>

        <BookingForm initialServiceId={initialServiceId} />
      </div>
    </div>
  );
};
