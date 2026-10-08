import React from 'react';
import { MessageSquare, Check, Sparkles, Crown } from 'lucide-react';
import { Service } from '../../types/service';
import { createWhatsAppQuickServiceUrl } from '../../lib/whatsapp';

interface ComboCardProps {
  combo: Service;
  onBookForm?: (serviceId: string) => void;
}

export const ComboCard: React.FC<ComboCardProps> = ({ combo, onBookForm }) => {
  const isPremium = combo.id === 'combo-hair-beard-gold-facial';
  const whatsappUrl = createWhatsAppQuickServiceUrl(combo.name, combo.price);

  // Split title parts for clear visual breakdown
  const packageItems = combo.name.split(' + ');

  return (
    <div
      className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
        isPremium
          ? 'bg-gradient-to-b from-[#181818] via-[#121212] to-[#0d0d0d] border-2 border-[#E6C46A] shadow-2xl shadow-[#C99A3D]/20 transform lg:-translate-y-2'
          : 'bg-[#111111] border border-white/10 hover:border-[#C99A3D]/50'
      }`}
    >
      {/* Top Banner for Premium Combo */}
      {isPremium ? (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#C99A3D] via-[#F3DA90] to-[#C99A3D] text-[#080808] text-[11px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
          <Crown className="w-3.5 h-3.5 fill-current" />
          PREMIUM COMBO
        </div>
      ) : (
        <div className="inline-flex items-center gap-1 self-start px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider text-[#C99A3D] bg-[#181818] border border-[#C99A3D]/30 mb-3">
          <Sparkles className="w-3 h-3" />
          COMBO PACKAGE
        </div>
      )}

      <div className={isPremium ? 'mt-2' : ''}>
        <div className="flex items-baseline justify-between gap-4 mb-4">
          <h3 className="text-xl sm:text-2xl font-black text-[#F5F5F5] font-display leading-tight">
            {combo.name}
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-[#A8A8A8] mb-6 leading-relaxed">
          {combo.description}
        </p>

        {/* Breakdown of inclusions */}
        <div className="space-y-2.5 mb-8 bg-[#0a0a0a]/60 p-4 rounded-xl border border-white/5">
          <p className="text-[10px] tracking-widest uppercase font-bold text-[#C99A3D]">Included In This Bundle:</p>
          {packageItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F5F5]">
              <div className="w-4 h-4 rounded-full bg-[#C99A3D]/20 border border-[#C99A3D] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 text-[#E6C46A]" />
              </div>
              <span className="leading-snug">{item.trim()}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-white/10">
        <div className="flex items-baseline justify-between mb-4">
          <span className="text-xs text-[#888888] uppercase tracking-wider font-medium">All-Inclusive Price</span>
          <div className="flex items-baseline gap-1">
            <span className="text-base font-semibold text-[#E6C46A]">₹</span>
            <span className="text-3xl sm:text-4xl font-black text-[#F5F5F5] tracking-tight">
              {combo.price.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onBookForm && (
            <button
              onClick={() => onBookForm(combo.id)}
              className="py-3 px-3.5 rounded text-xs font-bold uppercase tracking-wider text-[#A8A8A8] hover:text-[#E6C46A] hover:bg-white/5 border border-white/10 text-center transition-colors"
            >
              Details
            </button>
          )}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 py-3 px-4 rounded text-xs font-black tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg transition-all text-center ${
              isPremium
                ? 'bg-gradient-to-r from-[#F3DA90] via-[#C99A3D] to-[#8D6A2C] text-[#080808] hover:brightness-110 active:scale-[0.98]'
                : 'bg-gradient-to-r from-[#C99A3D] to-[#E6C46A] text-[#080808] hover:brightness-110 active:scale-[0.98]'
            }`}
            aria-label={`Book ${combo.name} for ₹${combo.price} on WhatsApp`}
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>BOOK ON WHATSAPP</span>
          </a>
        </div>
      </div>
    </div>
  );
};
