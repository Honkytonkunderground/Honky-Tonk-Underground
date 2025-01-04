import honkytonk from '../honkytonklogo.jpg';

export function Hero() {
  return (
    <header className="relative h-3/4 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-0"
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