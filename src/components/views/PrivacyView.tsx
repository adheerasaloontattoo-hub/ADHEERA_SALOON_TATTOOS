import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { SEOHead } from '../seo/SEOHead';
import { ChevronRight, Home, Shield, Lock, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../lib/whatsapp';

export const PrivacyView: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-[#080808] min-h-screen py-10">
      <SEOHead
        title="Privacy Policy & Terms | Adheera Saloon & Tatoos"
        description="Privacy policy and data transparency information for Adheera Saloon & Tatoos website and WhatsApp booking flow."
        path="/privacy"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#888888]">
          <button onClick={() => onNavigate('/')} className="hover:text-[#E6C46A] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-white/20" />
          <span className="text-[#E6C46A] font-bold">Privacy Policy</span>
        </nav>

        <SectionHeading
          subtitle="Data & Security"
          title="PRIVACY POLICY & TERMS"
          description="Clear explanation of how customer data and appointment requests are handled at Adheera Saloon & Tatoos."
        />

        <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-[#A8A8A8] leading-relaxed">
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-[#F5F5F5] font-bold text-base">
              <Shield className="w-4 h-4 text-[#C99A3D]" />
              <h4>1. Overview &amp; Business Entity</h4>
            </div>
            <p>
              This website serves <strong>{BUSINESS_CONFIG.brandName}</strong> (brand spelling: {BUSINESS_CONFIG.legalSpelling}). We provide information regarding men's grooming, hair styling, facials, combos, hair coloring, and tattoo artistry.
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-[#F5F5F5] font-bold text-base">
              <Lock className="w-4 h-4 text-[#C99A3D]" />
              <h4>2. WhatsApp Booking Data Transmission</h4>
            </div>
            <p>
              Our website uses direct WhatsApp communication as its primary appointment scheduling channel. When you fill out the booking form or click "Book on WhatsApp", the website prepares a pre-filled text message with your selected service, date, and preferred time.
            </p>
            <p>
              <strong>We do not secretly harvest or store your personal booking credentials in third-party marketing databases.</strong> The communication happens directly between your personal WhatsApp app and our studio phone number (<span className="text-[#E6C46A]">{BUSINESS_CONFIG.displayPhone}</span>).
            </p>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-2 text-[#F5F5F5] font-bold text-base">
              <MessageSquare className="w-4 h-4 text-[#C99A3D]" />
              <h4>3. Contact Information</h4>
            </div>
            <p>
              If you have any questions or wish to enquire directly about our policies, please contact us via:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#CCCCCC]">
              <li>WhatsApp / Phone: {BUSINESS_CONFIG.displayPhone}</li>
              <li>Official Email: {BUSINESS_CONFIG.email}</li>
              <li>Instagram: {BUSINESS_CONFIG.instagramHandle}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
