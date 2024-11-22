import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const shows = [
  {
    date: 'March 15, 2024',
    venue: "Rusty's Saloon",
    location: 'Nashville, TN',
    time: '9:00 PM'
  },
  {
    date: 'March 22, 2024',
    venue: 'The Whiskey Bar',
    location: 'Austin, TX',
    time: '10:00 PM'
  },
  {
    date: 'April 5, 2024',
    venue: 'Country Roads Festival',
    location: 'Memphis, TN',
    time: '8:30 PM'
  }
];

export function Shows() {
  return (
    <section className="py-20 px-4 md:px-8 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-2">
          <Calendar className="w-8 h-8" />
          Upcoming Shows
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shows.map((show, index) => (
            <div key={index} className="bg-[#2a2422] p-6 rounded-lg hover:bg-[#332e2b] transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <p className="text-white font-bold text-xl mb-2">{show.date}</p>
                  <p className="text-[#f59d0e] text-lg">{show.venue}</p>
                  <div className="flex items-center gap-2 text-gray-400 mt-2">
                    <MapPin className="w-4 h-4" />
                    <span>{show.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{show.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}