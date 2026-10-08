import React, { useState } from 'react';
import { FAQS } from '../../data/faqs';
import { SectionHeading } from '../ui/SectionHeading';
import { SEOHead } from '../seo/SEOHead';
import { ChevronRight, Home, Search, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../lib/whatsapp';

export const FAQView: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General' },
    { id: 'hair', label: 'Haircuts' },
    { id: 'beard', label: 'Beard & Shaving' },
    { id: 'face', label: 'Facials & Skin' },
    { id: 'combos', label: 'Combos' },
    { id: 'hair-color', label: 'Hair Color' },
    { id: 'tattoo', label: 'Tattoos' },
    { id: 'booking', label: 'WhatsApp Booking' }
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Schema.org FAQPage structured data
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <div className="bg-[#080808] min-h-screen py-10">
      <SEOHead
        title="Frequently Asked Questions & Answers | Adheera Saloon & Tatoos"
        description="Comprehensive FAQ for Adheera Saloon & Tatoos: haircut pricing, beard trim rates, Gold Facial details, combos, hair coloring, and tattoo consultation."
        path="/faq"
        schema={faqSchema}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#888888]">
          <button onClick={() => onNavigate('/')} className="hover:text-[#E6C46A] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-white/20" />
          <span className="text-[#E6C46A] font-bold">Frequently Asked Questions</span>
        </nav>

        <SectionHeading
          subtitle="Answer Engine Optimization"
          title="QUESTIONS & DIRECT ANSWERS"
          description="Find quick, factual answers about our services, exact pricing, tattoo procedures, and WhatsApp appointment booking."
        />

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8 relative">
          <Search className="w-4 h-4 text-[#C99A3D] absolute left-4 top-3.5" />
          <input
            type="text"
            placeholder="Search questions (e.g. Gold Facial, Haircut price, Tattoo)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-[#111111] border border-white/15 text-[#F5F5F5] text-sm focus:outline-none focus:border-[#C99A3D] transition-colors"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#C99A3D] to-[#E6C46A] text-[#080808] shadow-md'
                  : 'bg-[#141414] text-[#A8A8A8] border border-white/10 hover:border-[#C99A3D]/40 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordions / Direct Answer Blocks */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center text-[#A8A8A8] bg-[#111111] rounded-xl border border-white/10">
              No matching answers found for "{searchQuery}". You can ask us directly on WhatsApp!
            </div>
          ) : (
            filteredFaqs.map((faq) => (
              <details
                key={faq.id}
                open
                className="group rounded-xl bg-[#111111] border border-white/10 p-5 transition-all open:border-[#C99A3D]/60"
              >
                <summary className="font-bold text-sm sm:text-base text-[#F5F5F5] cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="leading-snug">{faq.question}</span>
                  <ChevronRight className="w-4 h-4 text-[#C99A3D] group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <div className="mt-3 pt-3 border-t border-white/5">
                  <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))
          )}
        </div>

        {/* Still have questions banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#111111] border border-[#C99A3D]/40 text-center">
          <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F5] font-display">
            Have another question?
          </h3>
          <p className="text-xs sm:text-sm text-[#A8A8A8] mt-1 mb-4">
            Our team is available directly on WhatsApp at <strong className="text-[#E6C46A]">{BUSINESS_CONFIG.displayPhone}</strong>.
          </p>
          <a
            href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
              'Hello Adheera Saloon & Tatoos 👋\nI have a question.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#C99A3D] to-[#E6C46A] text-[#080808] font-black text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
