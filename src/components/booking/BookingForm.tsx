import React, { useState, useEffect } from 'react';
import { SERVICES } from '../../data/services';
import { BUSINESS_CONFIG, createWhatsAppBookingUrl, formatBookingMessage } from '../../lib/whatsapp';
import { MessageSquare, Calendar, Clock, User, Phone, CheckCircle, AlertCircle, Copy, Check } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

interface BookingFormProps {
  initialServiceId?: string;
  onSuccess?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ initialServiceId }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceId || SERVICES[0]?.id || ''
  );
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Sync if prop changes
  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  // Set default minimum date as today
  const today = new Date().toISOString().split('T')[0];

  const selectedService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  // Generated live preview
  const livePreview = formatBookingMessage({
    name: name || 'Your Name',
    phone: phone || '+91 XXXXX XXXXX',
    serviceName: selectedService ? selectedService.name : 'Selected Service',
    price: selectedService ? selectedService.price : 0,
    date: date || 'YYYY-MM-DD',
    time: time || 'Preferred Time',
    notes: notes || 'Please confirm availability'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }

    if (!date) {
      setError('Please select your preferred appointment date.');
      return;
    }

    if (!time) {
      setError('Please choose your preferred appointment time slot.');
      return;
    }

    const bookingUrl = createWhatsAppBookingUrl({
      name: name.trim(),
      phone: phone.trim(),
      serviceName: selectedService.name,
      price: selectedService.price,
      date,
      time,
      notes: notes.trim()
    });

    setStatusMessage('Your WhatsApp message has been prepared. Please send it to complete your appointment request.');

    // Launch WhatsApp
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(livePreview);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <SectionHeading
        subtitle="Direct Appointment Channel"
        title="BOOK YOUR SESSION"
        description="Select your service, choose your preferred timing, and send an instant pre-filled WhatsApp message directly to Adheera Saloon & Tatoos."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Booking Form Column */}
        <div className="lg:col-span-7 bg-[#111111] border border-[#C99A3D]/40 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3.5 rounded-lg bg-red-950/60 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{error}</span>
              </div>
            )}

            {/* Service Selector */}
            <div>
              <label htmlFor="service-select" className="block text-xs font-semibold uppercase tracking-wider text-[#A8A8A8] mb-1.5">
                Select Service / Package *
              </label>
              <select
                id="service-select"
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[#080808] border border-white/20 text-[#F5F5F5] text-sm focus:outline-none focus:border-[#C99A3D] transition-colors"
                required
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} — ₹{s.price} ({s.categoryName})
                  </option>
                ))}
              </select>
            </div>

            {/* Price Preview Card */}
            {selectedService && (
              <div className="p-3.5 rounded-lg bg-[#181818] border border-[#C99A3D]/30 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#A8A8A8] block">Price for {selectedService.name}:</span>
                  <span className="text-[#E6C46A] font-medium">{selectedService.categoryName}</span>
                </div>
                <div className="text-right">
                  <span className="text-xl font-extrabold text-[#F5F5F5]">₹{selectedService.price}</span>
                </div>
              </div>
            )}

            {/* Full Name */}
            <div>
              <label htmlFor="book-name" className="block text-xs font-semibold uppercase tracking-wider text-[#A8A8A8] mb-1.5">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#888888] absolute left-3.5 top-3.5" />
                <input
                  id="book-name"
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#080808] border border-white/20 text-[#F5F5F5] text-sm focus:outline-none focus:border-[#C99A3D] transition-colors"
                  required
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="book-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#A8A8A8] mb-1.5">
                Phone Number (Optional)
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-[#888888] absolute left-3.5 top-3.5" />
                <input
                  id="book-phone"
                  type="tel"
                  placeholder="e.g. +91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#080808] border border-white/20 text-[#F5F5F5] text-sm focus:outline-none focus:border-[#C99A3D] transition-colors"
                />
              </div>
            </div>

            {/* Date & Time Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="book-date" className="block text-xs font-semibold uppercase tracking-wider text-[#A8A8A8] mb-1.5">
                  Preferred Date *
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-[#888888] absolute left-3.5 top-3.5" />
                  <input
                    id="book-date"
                    type="date"
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#080808] border border-white/20 text-[#F5F5F5] text-sm focus:outline-none focus:border-[#C99A3D] transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="book-time" className="block text-xs font-semibold uppercase tracking-wider text-[#A8A8A8] mb-1.5">
                  Preferred Time Slot *
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-[#888888] absolute left-3.5 top-3.5" />
                  <select
                    id="book-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#080808] border border-white/20 text-[#F5F5F5] text-sm focus:outline-none focus:border-[#C99A3D] transition-colors"
                    required
                  >
                    <option value="">Select Time Slot</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="02:30 PM">02:30 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="05:30 PM">05:30 PM</option>
                    <option value="07:00 PM">07:00 PM</option>
                    <option value="08:30 PM">08:30 PM</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Special Requests / Notes */}
            <div>
              <label htmlFor="book-notes" className="block text-xs font-semibold uppercase tracking-wider text-[#A8A8A8] mb-1.5">
                Special Requests or Notes (Optional)
              </label>
              <textarea
                id="book-notes"
                rows={2}
                placeholder="e.g. Skin sensitivity, specific haircut reference photo..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-[#080808] border border-white/20 text-[#F5F5F5] text-sm focus:outline-none focus:border-[#C99A3D] transition-colors"
              />
            </div>

            {/* Primary Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-gradient-to-r from-[#C99A3D] via-[#E6C46A] to-[#C99A3D] text-[#080808] font-black text-sm tracking-widest uppercase flex items-center justify-center gap-2 shadow-xl hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              CONFIRM &amp; SEND ON WHATSAPP
            </button>
          </form>

          {statusMessage && (
            <div className="mt-4 p-4 rounded-xl bg-[#181818] border border-[#C99A3D]/40 text-xs text-[#E6C46A] flex items-start gap-3">
              <CheckCircle className="w-4 h-4 shrink-0 text-[#25D366] mt-0.5" />
              <div>
                <p className="font-semibold text-[#F5F5F5]">{statusMessage}</p>
                <p className="text-[11px] text-[#A8A8A8] mt-1">
                  If WhatsApp did not launch automatically, check your browser popup settings or copy the preview on the right.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Live Message Preview Column */}
        <div className="lg:col-span-5 bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 relative">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#25D366]" />
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#F5F5F5]">
                WhatsApp Live Preview
              </span>
            </div>
            <button
              onClick={copyToClipboard}
              className="text-[11px] text-[#C99A3D] hover:text-[#E6C46A] flex items-center gap-1 font-semibold"
              title="Copy prepared message"
            >
              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
          </div>

          <p className="text-[11px] text-[#888888] mb-3">
            This formatted text will be sent to Adheera Saloon &amp; Tatoos at{' '}
            <strong className="text-[#E6C46A]">{BUSINESS_CONFIG.displayPhone}</strong>:
          </p>

          <pre className="p-4 rounded-xl bg-[#050505] border border-white/5 text-[#E0E0E0] font-mono text-xs whitespace-pre-wrap leading-relaxed overflow-x-auto selection:bg-[#C99A3D]/20">
            {livePreview}
          </pre>

          <div className="mt-6 pt-4 border-t border-white/10 space-y-2 text-xs text-[#A8A8A8]">
            <div className="flex items-center gap-2">
              <span className="text-[#E6C46A] font-bold">✓</span>
              <span>Fast confirmation via WhatsApp chat</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#E6C46A] font-bold">✓</span>
              <span>Direct communication with salon staff</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#E6C46A] font-bold">✓</span>
              <span>No pre-payment required to request slot</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
