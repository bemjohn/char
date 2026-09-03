'use client';

import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-px bg-white/30" aria-hidden="true" />
            <div className="w-2 h-2 bg-[#E85D2D] rounded-full" aria-hidden="true" />
            <div className="w-12 h-px bg-white/30" aria-hidden="true" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">GET IN TOUCH</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">Have questions? We'd love to hear from you. Reach out and we'll get back to you within 24 hours.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: MapPin, title: 'Visit Us', desc: '123 Culinary Ave, Food District, FC 12345' },
                { icon: Phone, title: 'Call Us', desc: '+1 (555) 123-4567' },
                { icon: Mail, title: 'Email Us', desc: 'hello@betterfood.com' },
                { icon: Clock, title: 'Hours', desc: 'Mon-Thu: 11am-10pm\nFri-Sat: 11am-11pm\nSun: 12pm-9pm' },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <item.icon className="w-5 h-5 text-[#E85D2D]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-white/50 text-sm whitespace-pre-line">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#E85D2D]" aria-hidden="true" />
                RESERVATIONS & CATERING
              </h3>
              <p className="text-white/50 mb-4">Planning a private event or need catering for your next gathering? Our team creates custom menus tailored to your occasion.</p>
              <a href="mailto:events@betterfood.com" className="inline-flex items-center gap-2 text-[#E85D2D] font-medium tracking-wider uppercase text-sm hover:text-white transition-colors">
                INQUIRE ABOUT CATERING
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-xl font-bold text-white mb-8">SEND A MESSAGE</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <FormField label="First Name" placeholder="John" required />
                <FormField label="Last Name" placeholder="Doe" required />
              </div>
              <FormField label="Email Address" placeholder="john@example.com" type="email" required />
              <FormField label="Phone Number" placeholder="+1 (555) 000-0000" type="tel" />
              <FormField label="Message" placeholder="How can we help you?" multiline rows={4} required />
              <button type="submit" className="w-full py-4 bg-white text-black font-bold tracking-wider uppercase text-sm rounded-lg transition-all hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, placeholder, type = 'text', required, multiline, rows = 3 }: {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-white/70 mb-2">
        {label} {required && <span className="text-[#E85D2D]">*</span>}
      </label>
      {multiline ? (
        <textarea
          placeholder={placeholder}
          rows={rows}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#E85D2D] focus:border-transparent transition-all"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#E85D2D] focus:border-transparent transition-all"
        />
      )}
    </div>
  );
}