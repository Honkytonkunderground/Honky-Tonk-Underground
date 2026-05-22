import { Calendar, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import PastGig1 from '/videos/04-25-2025.mp4';
import PastGig2 from '/videos/04-26-2025.mp4';
import Dave from '/images/IMG_6261.jpg';

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
  {
    date: 'April 25, 2025',
    venue: "The Westerner",
    location: '3360 S Redwood Rd, West Valley City, UT',
    time: '9:00 PM',
    url: 'https://westernerslc.com/event/live-music-honky-tonk-underground/',
    pastShowUrl: 'https://www.instagram.com/reel/DJFQMyGR5Rz/?igsh=MXZ2c21taDJ5aDA2ZA%3D%3D',
    pastShowVideo: `${PastGig1}`,
    pastShowPicture: `${Dave}`
  },
  {
    date: 'April 26, 2025',
    venue: "The Westerner",
    location: '3360 S Redwood Rd, West Valley City, UT',
    time: '9:00 PM',
    url: 'https://westernerslc.com/event/live-music-honky-tonk-underground/',
    pastShowUrl: 'https://www.instagram.com/reel/DJFQMyGR5Rz/?igsh=MXZ2c21taDJ5aDA2ZA%3D%3D',
    pastShowVideo: `${PastGig2}`,
    pastShowPicture: `${Dave}`
  },
  {
    date: 'September 5, 2025',
    venue: "The Westerner",
    location: '3360 S Redwood Rd, West Valley City, UT',
    time: '9:00 PM',
    url: 'https://westernerslc.com/events',
    pastShowUrl: '',
    pastShowVideo: '',
    pastShowPicture: `${Dave}`
  },
  {
    date: 'September 6, 2025',
    venue: "The Westerner",
    location: '3360 S Redwood Rd, West Valley City, UT',
    time: '9:00 PM',
    url: 'https://westernerslc.com/events',
    pastShowUrl: '',
    pastShowVideo: '',
    pastShowPicture: `${Dave}`
  },
  {
    date: 'October 10, 2025',
    venue: "SCOREZ",
    location: '571 W State Street, Lehi, UT',
    time: '9:00 PM',
    url: 'https://www.scorez-sports-bar.com/',
    pastShowUrl: '',
    pastShowVideo: '',
    pastShowPicture: `${Dave}`
  },
  {
    date: 'February 20, 2026',
    venue: "The Westerner",
    location: '3360 S Redwood Rd, West Valley City, UT',
    time: '9:00 PM',
    url: 'https://westernerslc.com/events',
    pastShowUrl: '',
    pastShowVideo: '',
    pastShowPicture: `${Dave}`
  },
  {
    date: 'February 21, 2026',
    venue: "The Westerner",
    location: '3360 S Redwood Rd, West Valley City, UT',
    time: '9:00 PM',
    url: 'https://westernerslc.com/events',
    pastShowUrl: '',
    pastShowVideo: '',
    pastShowPicture: `${Dave}`
  },
  {
    date: 'February 27, 2026',
    venue: "SCOREZ",
    location: '571 W State Street, Lehi, UT',
    time: '9:00 PM',
    url: 'https://www.scorez-sports-bar.com/',
    pastShowUrl: '',
    pastShowVideo: '',
    pastShowPicture: `${Dave}`
  },
  {
    date: 'April 11, 2026',
    venue: "The Engine Room and Pub",
    location: '1388 S 300 W #400 SLC, UT',
    time: '9:00 PM',
    url: 'https://www.engineroompub.com/',
    pastShowUrl: '',
    pastShowVideo: '',
    pastShowPicture: `${Dave}`
  },
  {
    date: 'May 2, 2026',
    venue: "SCOREZ",
    location: '571 W State Street, Lehi, UT',
    time: '9:00 PM',
    url: 'https://www.scorez-sports-bar.com/',
    pastShowUrl: '',
    pastShowVideo: '',
    pastShowPicture: `${Dave}`
  },
  {
    date: 'May 15, 2026',
    venue: "The Westerner",
    location: '3360 S Redwood Rd, West Valley City, UT',
    time: '9:00 PM',
    url: 'https://westernerslc.com/events',
    pastShowUrl: '',
    pastShowVideo: '',
    pastShowPicture: `${Dave}`
  },
  {
    date: 'May 16, 2026',
    venue: "The Westerner",
    location: '3360 S Redwood Rd, West Valley City, UT',
    time: '9:00 PM',
    url: 'https://westernerslc.com/events',
    pastShowUrl: '',
    pastShowVideo: '',
    pastShowPicture: `${Dave}`
  },
  {
    date: 'August 14, 2026',
    venue: "SCOREZ",
    location: '571 W State Street, Lehi, UT',
    time: '9:00 PM',
    url: 'https://www.scorez-sports-bar.com/',
    pastShowUrl: '',
    pastShowVideo: '',
    pastShowPicture: `${Dave}`
  },
  {
    date: 'August 15, 2026',
    venue: "SCOREZ",
    location: '571 W State Street, Lehi, UT',
    time: '9:00 PM',
    url: 'https://www.scorez-sports-bar.com/',
    pastShowUrl: '',
    pastShowVideo: '',
    pastShowPicture: `${Dave}`
  },
  {
    date: 'November 20, 2026',
    venue: "The Westerner",
    location: '3360 S Redwood Rd, West Valley City, UT',
    time: '9:00 PM',
    url: 'https://westernerslc.com/events',
    pastShowUrl: '',
    pastShowVideo: '',
    pastShowPicture: `${Dave}`
  },
  {
    date: 'November 21, 2026',
    venue: "The Westerner",
    location: '3360 S Redwood Rd, West Valley City, UT',
    time: '9:00 PM',
    url: 'https://westernerslc.com/events',
    pastShowUrl: '',
    pastShowVideo: '',
    pastShowPicture: `${Dave}`
  },
];

export function Shows(): JSX.Element {
  const [show2025, setShow2025] = useState(false);

  const isPastShow = (showDate: string): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(showDate) < today;
  };

  const getLink = (show: Show): string =>
    isPastShow(show.date) && show.pastShowUrl ? show.pastShowUrl : show.url;

  const shows2025 = shows.filter(s => new Date(s.date).getFullYear() === 2025);
  const shows2026 = shows.filter(s => new Date(s.date).getFullYear() === 2026);

  const cardClass = "relative overflow-hidden bg-[#2a2422] p-6 rounded-lg hover:bg-[#332e2b] transition-colors group cursor-pointer";

  const renderCard = (show: Show, index: number) => {
    const past = isPastShow(show.date);
    return (
      <div
        key={index}
        className={cardClass}
        onClick={() => window.open(getLink(show), '_blank')}
      >
        {past && (
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
        {past && (
          <div className="absolute -right-16 top-8 transform rotate-45 bg-red-500 text-white py-1 w-64 text-center font-bold z-10">
            Y'all Missed it!
          </div>
        )}
        <div className="flex items-start gap-4 relative z-10">
          <div className="flex-1">
            <p className={`font-bold text-xl mb-2 ${past ? 'text-gray-300' : 'text-white'}`}>
              {show.date}
            </p>
            <p className={`text-lg ${past ? 'text-gray-400' : 'text-[#c64444]'}`}>
              {show.venue}
            </p>
            {!past && (
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
      </div>
    );
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-2">
          Upcoming Shows
          <Calendar className="w-8 h-8" />
        </h2>

        <div className="mb-10">
          <button
            onClick={() => setShow2025(prev => !prev)}
            className="w-full flex items-center justify-between px-6 py-4 bg-[#2a2422] hover:bg-[#332e2b] rounded-lg transition-colors mb-4 group"
          >
            <span className="text-xl font-bold text-gray-400 group-hover:text-gray-200 transition-colors">
              2025 Shows
            </span>
            {show2025 ? (
              <ChevronUp className="w-5 h-5 text-gray-400 group-hover:text-gray-200 transition-colors" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-gray-200 transition-colors" />
            )}
          </button>
          {show2025 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shows2025.map((show, index) => renderCard(show, index))}
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shows2026.map((show, index) => renderCard(show, index))}
        </div>

      </div>
    </section>
  );
}

export default Shows;