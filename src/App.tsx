/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { StickyWhatsApp } from './components/layout/StickyWhatsApp';
import { HomeView } from './components/views/HomeView';
import { ServicesView } from './components/views/ServicesView';
import { TattoosView } from './components/views/TattoosView';
import { GalleryView } from './components/views/GalleryView';
import { AboutView } from './components/views/AboutView';
import { FAQView } from './components/views/FAQView';
import { ContactView } from './components/views/ContactView';
import { BookView } from './components/views/BookView';
import { PrivacyView } from './components/views/PrivacyView';
import { NotFoundView } from './components/views/NotFoundView';
import { ServiceCategory } from './types/service';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('service') || undefined;
    }
    return undefined;
  });

  // Handle browser back and forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      const params = new URLSearchParams(window.location.search);
      const sId = params.get('service');
      if (sId) setPreselectedServiceId(sId);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string, serviceId?: string) => {
    setPreselectedServiceId(serviceId);
    setCurrentPath(path);
    const targetUrl = serviceId ? `${path}?service=${serviceId}` : path;
    window.history.pushState({}, '', targetUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookService = (serviceId: string) => {
    navigate('/book', serviceId);
  };

  // Route Renderer
  const renderView = () => {
    const path = currentPath.toLowerCase().replace(/\/$/, '') || '/';

    if (path === '/') {
      return <HomeView onNavigate={navigate} onBookService={handleBookService} />;
    }

    if (path === '/services') {
      return (
        <ServicesView
          currentCategory="all"
          onNavigate={navigate}
          onBookService={handleBookService}
        />
      );
    }

    if (path.startsWith('/services/')) {
      const categorySlug = path.replace('/services/', '') as ServiceCategory;
      const validCategories: ServiceCategory[] = [
        'hair',
        'beard-shaving',
        'face-care',
        'combo-packages',
        'hair-color'
      ];

      if (validCategories.includes(categorySlug)) {
        return (
          <ServicesView
            currentCategory={categorySlug}
            onNavigate={navigate}
            onBookService={handleBookService}
          />
        );
      }
      return <NotFoundView onNavigate={navigate} />;
    }

    if (path === '/tattoos') {
      return <TattoosView onNavigate={navigate} />;
    }

    if (path === '/gallery') {
      return <GalleryView onNavigate={navigate} />;
    }

    if (path === '/about') {
      return <AboutView onNavigate={navigate} />;
    }

    if (path === '/faq') {
      return <FAQView onNavigate={navigate} />;
    }

    if (path === '/contact') {
      return <ContactView onNavigate={navigate} />;
    }

    if (path === '/book') {
      return (
        <BookView
          initialServiceId={preselectedServiceId}
          onNavigate={navigate}
        />
      );
    }

    if (path === '/privacy') {
      return <PrivacyView onNavigate={navigate} />;
    }

    return <NotFoundView onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#080808] text-[#F5F5F5]">
      {/* Global Header */}
      <Header currentPath={currentPath} onNavigate={navigate} />

      {/* Main Content Area */}
      <main className="flex-grow">{renderView()}</main>

      {/* Global Footer */}
      <Footer onNavigate={navigate} />

      {/* Mobile Sticky WhatsApp Booking Bar */}
      <StickyWhatsApp onOpenBooking={() => navigate('/book')} />
    </div>
  );
}
