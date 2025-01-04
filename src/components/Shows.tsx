import { Calendar, MapPin, Clock } from 'lucide-react';

interface Show {
  date: string;
  venue: string;
  location: string;
  time: string;
}

const shows: Show[] = [
  {
    date: 'April 25, 2025',
    venue: "The Westerner",
    location: 'Salt Lake City, UT',
    time: '9:00 PM'
  },
  {
    date: 'December 15, 2024',
    venue: "Rusty's Saloon",
    location: 'Salt Lake City, UT',
    time: '9:00 PM'
  },
  {
    date: 'December 15, 2024',
    venue: "Rusty's Saloon",
    location: 'Salt Lake City, UT',
    time: '9:00 PM'
  },
  {
    date: 'January 22, 2025',
    venue: 'The Whiskey Bar',
    location: 'Draper, UT',
    time: '10:00 PM'
  },
  {
    date: 'February 5, 2025',
    venue: 'Country Roads Festival',
    location: 'West Valley, UT',
    time: '8:30 PM'
  }
];

export function Shows(): JSX.Element {
  const isPastShow = (showDate: string): boolean => {
    const today = new Date();
    return new Date(showDate) < today;
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-2">
          <Calendar className="w-8 h-8" />
          Upcoming Shows
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shows.map((show, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden bg-[#2a2422] p-6 rounded-lg hover:bg-[#332e2b] transition-colors"
            >
              {isPastShow(show.date) && (
                <div className="absolute -right-16 top-8 transform rotate-45 bg-red-500 text-white py-1 w-64 text-center font-bold">
                  Y'all Missed it!
                </div>
              )}
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <p className={`font-bold text-xl mb-2 ${isPastShow(show.date) ? 'text-gray-500' : 'text-white'}`}>
                    {show.date}
                  </p>
                  <p className={`text-lg ${isPastShow(show.date) ? 'text-gray-500' : 'text-[#f59d0e]'}`}>
                    {show.venue}
                  </p>
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