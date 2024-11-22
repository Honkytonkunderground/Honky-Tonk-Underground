import React from 'react';

export function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlend: 'overlay'
        }}
      />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-[#f59d0e] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_2px_2px_8px_rgb(0_0_0_/_90%)]">
          Honky Tonk Underground
        </h1>
        <p className="text-xl md:text-2xl text-white/90 italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Raw. Authentic. Outlaw Country.
        </p>
      </div>
    </header>
  );
}