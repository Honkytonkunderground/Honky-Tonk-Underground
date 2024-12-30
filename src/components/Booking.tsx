import { Mail, Phone } from 'lucide-react';

export function Booking() {
  return (
    <section className="py-20 px-4 md:px-8 bg-black/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Book Us For Your Venue</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#2a2422] p-8 rounded-lg hover:bg-[#332e2b] transition-colors">
            <Mail className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Email Us</h3>
            <a href="mailto:booking@honkytonkunderground.com" 
               className="text-lg text-gray-300 hover:text-[#f59d0e] transition-colors">
              booking@honkytonkunderground.com
            </a>
          </div>
          <div className="bg-[#2a2422] p-8 rounded-lg hover:bg-[#332e2b] transition-colors">
            <Phone className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Call Our Manager</h3>
            <a href="tel:+1-555-COUNTRY" 
               className="text-lg text-gray-300 hover:text-[#f59d0e] transition-colors">
              (555) COUNTRY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}