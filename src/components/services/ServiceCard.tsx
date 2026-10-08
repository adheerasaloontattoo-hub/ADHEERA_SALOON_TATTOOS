import React from 'react';
import { MessageSquare, Sparkles, Calendar } from 'lucide-react';
import { Service } from '../../types/service';
import { createWhatsAppQuickServiceUrl } from '../../lib/whatsapp';

interface ServiceCardProps {
  service: Service;
  onBookForm?: (serviceId: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onBookForm }) => {
  const whatsappUrl = createWhatsAppQuickServiceUrl(service.name, service.price);

  return (
    <article
      className="group relative flex flex-col justify-between rounded-xl bg-[#111111] border border-white/10 hover:border-[#C99A3D]/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C99A3D]/10 focus-within:border-[#C99A3D]"
    >
      {/* Top badges */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-[10px] tracking-widest uppercase font-semibold text-[#C99A3D] bg-[#181818] border border-[#C99A3D]/25 px-2.5 py-1 rounded">
          {service.categoryName}
        </span>

        {service.premiumBadge && (
          <span className="inline-flex items-center gap-1 text-[10px] tracking-wider uppercase font-black text-[#080808] bg-gradient-to-r from-[#E6C46A] to-[#C99A3D] px-2.5 py-0.5 rounded shadow">
            <Sparkles className="w-3 h-3 fill-current" />
            {service.premiumBadge}
          </span>
        )}
      </div>

      {/* Main information */}
      <div className="mb-6 flex-grow">
        <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F5] group-hover:text-[#E6C46A] transition-colors leading-snug">
          {service.name}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-[#A8A8A8] leading-relaxed line-clamp-3">
          {service.description}
        </p>
      </div>

      {/* Price & Actions */}
      <div className="pt-4 border-t border-white/10">
        <div className="flex items-baseline justify-between mb-4">
          <span className="text-xs text-[#888888] uppercase tracking-wider font-medium">Standard Price</span>
          <div className="flex items-baseline gap-0.5 text-right">
            <span className="text-sm font-semibold text-[#E6C46A]">₹</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">
              {service.price}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch gap-2">
          {onBookForm && (
            <button
              onClick={() => onBookForm(service.id)}
              className="px-3 py-2.5 rounded text-xs font-semibold uppercase tracking-wider text-[#A8A8A8] hover:text-[#E6C46A] hover:bg-white/5 border border-white/10 text-center flex items-center justify-center gap-1 transition-colors"
              title="Customise date and time in booking form"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Details</span>
            </button>
          )}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-3 rounded bg-gradient-to-r from-[#C99A3D] to-[#E6C46A] hover:brightness-110 active:scale-[0.98] text-[#080808] text-xs font-black tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-all text-center"
            aria-label={`Book ${service.name} for ₹${service.price} on WhatsApp`}
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>BOOK ON WHATSAPP</span>
          </a>
        </div>
      </div>
    </article>
  );
};
