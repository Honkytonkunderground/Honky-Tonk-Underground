import honkytonk from '/images/honkytonklogo.png';

export function Hero() {
  return (
    <header className="relative h-3/4 flex items-center justify-center py-20 px-4 md:px-8">
      <div 
        className="absolute inset-0 bg-gradient-to-b bg-black/30 z-0"
      ></div>
      <div 
        className="relative w-full max-w-screen-lg mx-auto h-[400px] aspect-w-16 aspect-h-9"
      >
        <img 
          src={honkytonk} 
          alt="Honkytonk" 
          className="object-contain w-full h-full"
        />
      </div>
    </header>
  );
}