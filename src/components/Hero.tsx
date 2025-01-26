import React from 'react';
import honkytonk from '/images/honkytonklogo.png';

export function Hero() {
  return (
    <header className="relative h-3/4 flex items-center justify-center py-20 px-4 md:px-8">
      <div 
        className="absolute inset-0 bg-gradient-to-b bg-black/30 z-0"
      ></div>
      <div 
        className="relative w-full max-w-screen-lg mx-auto h-96"
      >
        <img 
          src={honkytonk} 
          alt="Honkytonk" 
          className="object-contain w-full h-full"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          style={{ contentVisibility: 'auto' }}
          onLoad={(e: React.SyntheticEvent<HTMLImageElement>) => {
            const requestIdleCallback = 
              window.requestIdleCallback || 
              ((cb: IdleRequestCallback) => setTimeout(cb, 1));
              
            requestIdleCallback(() => {
              (e.target as HTMLImageElement).style.opacity = '1';
            });
          }}
        />
      </div>
    </header>
  );
}