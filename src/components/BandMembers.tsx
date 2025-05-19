import { Music } from 'lucide-react';
import IMG_6261 from '/images/IMG_6261.jpg';

const bandMembers = [
  {
    name: 'Artie Hempill',
    role: 'Lead Vocals & Guitar',
    image: '#',
    bio: '#'
  },
  {
    name: 'Jake Workman',
    role: 'Lead Guitar',
    image: '#',
    bio: '#'
  },
  {
    name: 'Meter Manos',
    role: 'Drums',
    image: '#',
    bio: '#.'
  },
  {
    name: 'Dave Thurman',
    role: 'Bass Guitar',
    image: IMG_6261,
    bio: '#'
  },
  {
    name: 'Carl Schwitzer',
    role: 'Second lead guitar and acoustic',
    image: '#',
    bio: '#'
  }
];

export function BandMembers() {
  return (
    <section className="py-20 px-4 md:px-8 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-2">
          <Music className="w-8 h-8" />
          Meet the Band
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {bandMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg bg-[#2a2422] hover:bg-[#332e2b] transition-colors"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#c64444] mb-1">{member.name}</h3>
                <p className="text-white/80 text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}