import { Clock, MapPin, Calendar } from 'lucide-react';

export function Venue() {
  return (
    <section className="py-20 px-4 md:px-8 bg-black/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Venue Information</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Calendar className="w-12 h-12 mx-auto mb-4" />
          <p>Available for venues, private events, and festivals</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <MapPin className="w-12 h-12 mx-auto mb-4" />
          <p>Available throughout Utah and surrounding states</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Clock className="w-12 h-12 mx-auto mb-4" />
          <p>3-4 hour sets with breaks</p>
        </div>
      </div>
    </section>
  );
}