'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-px bg-white/30" aria-hidden="true" />
              <div className="w-2 h-2 bg-[#E85D2D] rounded-full" aria-hidden="true" />
              <div className="w-12 h-px bg-white/30" aria-hidden="true" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">OUR STORY</h2>
            <div className="space-y-4 text-white/60 text-lg leading-relaxed">
              <p>Founded in 2019, CHAR was born from fire and flavor — a dedication to the craft of charcoal grilling and the bold, authentic spices of Nigerian cuisine.</p>
              <p>Every dish begins at the grill: flame-roasted meats kissed by charcoal smoke, rich stews simmered with heritage spice blends, and sides crafted from recipes passed down through generations.</p>
              <p>WE GRILL, YOU CHILL. That's our promise — authentic fire-cooked flavor without the work, from our charcoal pits to your table.</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
                alt="Charcoal grilled meats and BBQ"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#E85D2D]/20 via-transparent to-transparent" aria-hidden="true" />
            </div>
            <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 p-6 md:p-8 bg-black border border-white/10 max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 bg-[#E85D2D] rounded-full" aria-hidden="true" />
                <span className="text-sm font-medium tracking-wider uppercase text-white/70">EST. 2019</span>
              </div>
              <p className="text-3xl md:text-4xl font-bold text-white">50+</p>
              <p className="text-white/50 tracking-wider">SIGNATURE DISHES</p>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '🔥', title: 'CHARCOAL GRILLED', desc: 'Open-flame cooking over real charcoal for authentic smoky depth' },
            { icon: '🌿', title: 'HERITAGE SPICES', desc: 'Traditional Yaji, suya spice, and house-blended seasonings' },
            { icon: '🍲', title: 'SLOW-COOKED STEWS', desc: 'Rich egusi, ogbono, and afang simmered for hours to perfection' },
          ].map((feature, i) => (
            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-colors">
              <span className="text-3xl mb-3 block" aria-hidden="true">{feature.icon}</span>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/50">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}