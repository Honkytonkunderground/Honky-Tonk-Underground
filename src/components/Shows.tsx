import { Calendar, MapPin, Clock } from 'lucide-react';
// import PastGig from '/videos/past-gig.mp4';
import Dave from '/images/IMG_6261.jpg'

interface Show {
  date: string;
  venue: string;
  location: string;
  time: string;
  url: string;
  pastShowUrl?: string | undefined;
  pastShowVideo?: string | undefined;
  pastShowPicture?: string | undefined;
}

const shows: Show[] = [
  // {
  //   date: 'April 22, 2024',
  //   venue: "The Westerner",
  //   location: '3360 S Redwood Rd, West Valley City, UT',
  //   time: '9:00 PM',
  //   url: 'https://westernerslc.com',
  //   pastShowUrl: 'https://www.instagram.com/honkytonkunderground/',
  //   pastShowVideo: `${PastGig}`,
  //   pastShowPicture: ''
  // },
  // {
  //   date: 'April 24, 2024',
  //   venue: "The Westerner",
  //   location: '3360 S Redwood Rd, West Valley City, UT',
  //   time: '9:00 PM',
  //   url: 'https://westernerslc.com',
  //   pastShowUrl: 'https://www.instagram.com/honkytonkunderground/',
  //   pastShowVideo: '',
  //   pastShowPicture: `${Dave}`
  // },
  {
    date: 'April 25, 2025',
    venue: "The Westerner",
    location: '3360 S Redwood Rd, West Valley City, UT',
    time: '9:00 PM',
    url: 'https://westernerslc.com',
    pastShowUrl: 'https://www.instagram.com/honkytonkunderground/',
    pastShowVideo: ``,
    pastShowPicture: `${Dave}`
  },
  {
    date: 'April 26, 2025',
    venue: "The Westerner",
    location: '3360 S Redwood Rd, West Valley City, UT',
    time: '9:00 PM',
    url: 'https://westernerslc.com',
    pastShowUrl: '',
    pastShowVideo: '',
    pastShowPicture: ''
  },
  {
    date: 'September 5, 2025',
    venue: "The Westerner",
    location: '3360 S Redwood Rd, West Valley City, UT',
    time: '9:00 PM',
    url: 'https://westernerslc.com',
    pastShowUrl: '',
    pastShowVideo: '',
    pastShowPicture: ''
  },
  {
    date: 'September 6, 2025',
    venue: "The Westerner",
    location: '3360 S Redwood Rd, West Valley City, UT',
    time: '9:00 PM',
    url: 'https://westernerslc.com',
    pastShowUrl: '',
    pastShowVideo: '',
    pastShowPicture: ''
  },
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
            <a 
              key={index} 
              href={isPastShow(show.date) && show.pastShowUrl ? show.pastShowUrl : show.url}
              target="_blank" 
              className="relative overflow-hidden bg-[#2a2422] p-6 rounded-lg hover:bg-[#332e2b] transition-colors group"
            >
              {isPastShow(show.date) && (
                <div className="absolute inset-0 overflow-hidden">
                  {show.pastShowVideo ? (
                    <video 
                      className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                    >
                      <source src={show.pastShowVideo} type="video/mp4" />
                    </video>
                  ) : (
                    <img 
                      src={show.pastShowPicture} 
                      alt={`Past show at ${show.venue}`} 
                      className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                    />
                  )}
                </div>
              )}
              {isPastShow(show.date) && (
                <div className="absolute -right-16 top-8 transform rotate-45 bg-red-500 text-white py-1 w-64 text-center font-bold z-10">
                  Y'all Missed it!
                </div>
              )}
              <div className="flex items-start gap-4 relative z-10">
                <div className="flex-1">
                  <p className={`font-bold text-xl mb-2 ${isPastShow(show.date) ? 'text-gray-300' : 'text-white'}`}>
                    {show.date}
                  </p>
                  <p className={`text-lg ${isPastShow(show.date) ? 'text-gray-400' : 'text-[#f59d0e]'}`}>
                    {show.venue}
                  </p>
                  {!isPastShow(show.date) && (
                    <>
                      <div className="flex items-center gap-2 text-gray-400 mt-2">
                        <MapPin className="w-4 h-4" />
                        <span>{show.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>{show.time}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shows;
