'use client';

export default function Hero() {
  const backgroundStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1920&auto=format&fit=crop")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0" style={backgroundStyle} aria-hidden="true" />
      <div className="absolute inset-0 bg-black/70 bg-gradient-to-t from-[#0D0D0D] via-black/60 to-black/80 z-0" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center space-x-3 mb-8">
          <div className="w-16 h-px bg-white/30" aria-hidden="true" />
          <div className="w-2 h-2 bg-[#E85D2D] rounded-full" aria-hidden="true" />
          <div className="w-16 h-px bg-white/30" aria-hidden="true" />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-12 text-balance leading-[1.05]">
          WE GRILL,{<br />} YOU CHILL.
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="px-8 py-4 bg-white text-black font-medium tracking-wider uppercase text-sm transition-all hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] rounded-lg"
          >
            EXPLORE MENU
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/30 text-white font-medium tracking-wider uppercase text-sm transition-all hover:bg-white/5 hover:border-white/50 rounded-lg"
          >
            MAKE A RESERVATION
          </a>
        </div>

        <div className="mt-20 flex items-center justify-center space-x-12 text-white/40 text-sm">
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
            <span className="tracking-wider">DISHES</span>
          </div>
          <div className="w-px h-12 bg-white/20" aria-hidden="true" />
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">4.9</div>
            <span className="tracking-wider">RATING</span>
          </div>
          <div className="w-px h-12 bg-white/20" aria-hidden="true" />
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">12K+</div>
            <span className="tracking-wider">HAPPY</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}