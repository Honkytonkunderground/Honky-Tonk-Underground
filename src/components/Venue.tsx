import { Clock, MapPin, Calendar } from 'lucide-react';

export function Venue() {
  return (
    <section className="py-20 px-4 md:px-8 bg-black/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Venue Information</h2>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <Calendar className="text-amber-500" />
            <span className="text-lg text-gray-300 leading-relaxed">Contact Dave for availability </span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <MapPin className="text-amber-500" />
            <span className="text-lg text-gray-300 leading-relaxed">#</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Clock className="text-amber-500" />
            <span className="text-lg text-gray-300 leading-relaxed">3-4 hour sets with breaks</span>
          </div>
        </div>
      </div>
    </section>
  );
}