import React, { useState } from 'react';
import { Menu, X, MessageSquare, Instagram, Phone, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../lib/whatsapp';
import { AdheeraEmblem } from '../common/AdheeraEmblem';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'SERVICES', path: '/services' },
    { label: 'COMBOS', path: '/services/combo-packages' },
    { label: 'TATTOOS', path: '/tattoos' },
    { label: 'GALLERY', path: '/gallery' },
    { label: 'ABOUT', path: '/about' },
    { label: 'FAQ', path: '/faq' },
    { label: 'CONTACT', path: '/contact' }
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#080808]/95 backdrop-blur-md border-b border-[#C99A3D]/25 transition-all">
      {/* Top micro announcement bar with Tiruppur location */}
      <div className="bg-[#111111] border-b border-white/5 py-1.5 px-4 text-xs text-[#A8A8A8]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[#E6C46A] font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              Men's Grooming &amp; Tattoo Studio
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <a
              href={BUSINESS_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-[#A8A8A8] hover:text-[#E6C46A] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C99A3D]" />
              <span>Kumar Nagar, Tiruppur</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={BUSINESS_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Adheera Saloon & Tatoos Instagram"
              className="flex items-center gap-1 text-[#A8A8A8] hover:text-[#E6C46A] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#C99A3D]" />
              <span className="hidden md:inline">@_adheera_saloon_and_tattoos</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp contact"
              className="flex items-center gap-1 text-[#E6C46A] font-semibold hover:underline"
            >
              <Phone className="w-3.5 h-3.5 text-[#25D366]" />
              {BUSINESS_CONFIG.displayPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo Presentation with Royal Crest Emblem */}
        <button
          onClick={() => handleNavClick('/')}
          className="text-left group flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A3D]"
          aria-label="Adheera Saloon & Tatoos Homepage"
        >
          <div className="w-12 h-12 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
            <AdheeraEmblem size={52} showText={false} />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black tracking-widest text-[#F5F5F5] font-display flex items-center gap-1">
              ADHEERA
            </div>
            <div className="text-[10px] sm:text-xs tracking-[0.25em] text-[#C99A3D] font-bold uppercase -mt-0.5">
              SALOON &amp; TATOOS
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`px-3 py-2 text-xs xl:text-sm font-semibold tracking-wider transition-all rounded-md relative ${
                  active
                    ? 'text-[#E6C46A]'
                    : 'text-[#A8A8A8] hover:text-[#F5F5F5] hover:bg-white/5'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#C99A3D] via-[#E6C46A] to-[#C99A3D]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('/book')}
            className="px-4 py-2.5 rounded text-xs font-bold tracking-wider uppercase border border-[#C99A3D]/60 text-[#E6C46A] hover:bg-[#C99A3D]/10 transition-all"
          >
            Custom Book
          </button>
          <a
            href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
              'Hello Adheera Saloon & Tatoos 👋\nI would like to book an appointment.\n\nPlease confirm availability.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-gradient-to-r from-[#C99A3D] via-[#E6C46A] to-[#C99A3D] text-[#080808] font-black text-xs tracking-wider uppercase shadow-lg hover:brightness-110 active:scale-95 transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            BOOK ON WHATSAPP
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp Booking"
            className="p-2 rounded border border-[#C99A3D]/40 text-[#E6C46A] bg-[#111111]"
          >
            <MessageSquare className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded text-[#E6C46A] hover:text-white bg-[#111111] border border-white/10 focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0d0d] border-b border-[#C99A3D]/30 px-6 py-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2 mb-6" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-left px-4 py-3 rounded-md text-sm font-bold tracking-wider uppercase flex items-center justify-between ${
                    active
                      ? 'bg-[#181818] text-[#E6C46A] border-l-4 border-[#C99A3D]'
                      : 'text-[#A8A8A8] hover:text-[#F5F5F5] hover:bg-[#141414]'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-[#C99A3D]" />}
                </button>
              );
            })}
          </nav>

          <div className="flex flex-col gap-3 pt-3 border-t border-white/10">
            <button
              onClick={() => handleNavClick('/book')}
              className="w-full py-3 text-center rounded border border-[#C99A3D] text-[#E6C46A] text-xs font-bold tracking-widest uppercase hover:bg-[#C99A3D]/10"
            >
              Open Booking Form
            </button>
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                'Hello Adheera Saloon & Tatoos 👋\nI would like to book an appointment.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded bg-gradient-to-r from-[#C99A3D] to-[#E6C46A] text-[#080808] font-black text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              BOOK ON WHATSAPP
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
