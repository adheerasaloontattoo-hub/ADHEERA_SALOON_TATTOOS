import React, { useState, useEffect } from 'react';
import { SERVICES, CATEGORIES } from '../../data/services';
import { ServiceCard } from '../services/ServiceCard';
import { ComboCard } from '../services/ComboCard';
import { SectionHeading } from '../ui/SectionHeading';
import { SEOHead } from '../seo/SEOHead';
import { ServiceCategory } from '../../types/service';
import { ChevronRight, Home, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../lib/whatsapp';

interface ServicesViewProps {
  currentCategory?: ServiceCategory | 'all';
  onNavigate: (path: string) => void;
  onBookService: (serviceId: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  currentCategory = 'all',
  onNavigate,
  onBookService
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>(currentCategory);

  useEffect(() => {
    setActiveCategory(currentCategory);
  }, [currentCategory]);

  const activeCategoryMeta = CATEGORIES.find((c) => c.id === activeCategory);

  const displayedServices =
    activeCategory === 'all'
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  const getPageTitle = () => {
    if (activeCategory === 'hair') return 'Hair Services | Precision Cuts at Adheera Saloon & Tatoos';
    if (activeCategory === 'beard-shaving') return 'Beard & Shaving Services | Adheera Saloon & Tatoos';
    if (activeCategory === 'face-care') return 'Face Care & Gold Facial | Adheera Saloon & Tatoos';
    if (activeCategory === 'combo-packages') return 'Grooming Combo Packages | Adheera Saloon & Tatoos';
    if (activeCategory === 'hair-color') return 'Hair Color Services | Adheera Saloon & Tatoos';
    return 'Complete Services & Pricing | Adheera Saloon & Tatoos';
  };

  const getPageDesc = () => {
    if (activeCategory === 'hair')
      return 'Explore haircut services at Adheera Saloon & Tatoos, including General Haircut (₹119), Model Haircut (₹149), and Child/Baby Haircuts.';
    if (activeCategory === 'beard-shaving')
      return 'Sharp beard grooming, shaping, and clean shaving from ₹79 at Adheera Saloon & Tatoos.';
    if (activeCategory === 'face-care')
      return 'Premium facial care at Adheera Saloon & Tatoos including our signature Gold Facial (₹999), Silver Facial (₹699), and De-Tan.';
    if (activeCategory === 'combo-packages')
      return 'All-in-one grooming bundles from ₹349 up to our ₹1,199 Premium Combo at Adheera Saloon & Tatoos.';
    if (activeCategory === 'hair-color')
      return 'Professional hair coloring including Herbal Extract and Black Rose formulations at Adheera Saloon & Tatoos.';
    return 'Full service catalog with exact pricing: Haircuts, beard grooming, facials, combos, and hair coloring at Adheera Saloon & Tatoos.';
  };

  const currentPath =
    activeCategory === 'all' ? '/services' : `/services/${activeCategory}`;

  // Structured Data for Services
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: getPageTitle(),
    description: getPageDesc(),
    itemListElement: displayedServices.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
          '@type': 'BarberShop',
          name: BUSINESS_CONFIG.brandName
        },
        offers: {
          '@type': 'Offer',
          price: service.price,
          priceCurrency: 'INR'
        }
      }
    }))
  };

  return (
    <div className="py-12 bg-[#080808] min-h-screen">
      <SEOHead
        title={getPageTitle()}
        description={getPageDesc()}
        path={currentPath}
        schema={servicesSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#888888]">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-[#E6C46A] flex items-center gap-1 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-white/20" />
          <button
            onClick={() => onNavigate('/services')}
            className={`hover:text-[#E6C46A] transition-colors ${
              activeCategory === 'all' ? 'text-[#E6C46A] font-bold' : ''
            }`}
          >
            Services
          </button>
          {activeCategoryMeta && (
            <>
              <ChevronRight className="w-3 h-3 text-white/20" />
              <span className="text-[#E6C46A] font-bold">{activeCategoryMeta.name}</span>
            </>
          )}
        </nav>

        {/* Section Heading & Category Description */}
        <SectionHeading
          subtitle={activeCategoryMeta ? activeCategoryMeta.name : 'Transparent Rates'}
          title={
            activeCategory === 'all'
              ? 'OUR COMPLETE SERVICES'
              : activeCategoryMeta
              ? activeCategoryMeta.name.toUpperCase()
              : 'SERVICES'
          }
          description={
            activeCategoryMeta
              ? activeCategoryMeta.description
              : 'Review our exact prices for haircuts, beard sculpting, facial treatments, hair color, and combo packages. Every appointment is confirmed directly via WhatsApp.'
          }
        />

        {/* Subcategory Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-6 mb-10 no-scrollbar">
          <button
            onClick={() => onNavigate('/services')}
            className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-[#C99A3D] to-[#E6C46A] text-[#080808] shadow-md'
                : 'bg-[#141414] text-[#A8A8A8] border border-white/10 hover:border-[#C99A3D]/40 hover:text-white'
            }`}
          >
            All ({SERVICES.length})
          </button>

          {CATEGORIES.map((cat) => {
            const count = SERVICES.filter((s) => s.category === cat.id).length;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onNavigate(`/services/${cat.slug}`)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#C99A3D] to-[#E6C46A] text-[#080808] shadow-md'
                    : 'bg-[#141414] text-[#A8A8A8] border border-white/10 hover:border-[#C99A3D]/40 hover:text-white'
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>

        {/* Services / Combo Grid */}
        {activeCategory === 'combo-packages' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedServices.map((combo) => (
              <ComboCard
                key={combo.id}
                combo={combo}
                onBookForm={onBookService}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onBookForm={onBookService}
              />
            ))}
          </div>
        )}

        {/* Category Contextual Advice & WhatsApp CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-[#111111] border border-[#C99A3D]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-[#E6C46A] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C99A3D]" />
              Need a personalized recommendation?
            </div>
            <p className="text-sm text-[#A8A8A8]">
              Contact our team on WhatsApp to check slot availability, discuss hair styles, or book multiple services in one visit.
            </p>
          </div>

          <a
            href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
              `Hello Adheera Saloon & Tatoos 👋\nI have a question regarding your ${
                activeCategoryMeta ? activeCategoryMeta.name : 'services'
              }.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-lg bg-gradient-to-r from-[#C99A3D] to-[#E6C46A] text-[#080808] font-black text-xs tracking-wider uppercase whitespace-nowrap shadow-lg hover:brightness-110 transition-all shrink-0"
          >
            Ask On WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
