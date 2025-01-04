import { Music } from 'lucide-react';
import IMG_1089 from '../IMG_1089.jpg';

const bandMembers = [
  {
    name: 'Johnny "Wild Card" Wilson',
    role: 'Lead Vocals & Guitar',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'The soul of Honky Tonk Underground, bringing raw energy to every performance.'
  },
  {
    name: 'Sarah "Steel String" Johnson',
    role: 'Lead Guitar',
    image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Master of the six-string, blending classic country with modern edge.'
  },
  {
    name: 'Mike "Thunder" Thompson',
    role: 'Drums',
    image: 'https://images.unsplash.com/photo-1548922825-474ed08e1645?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Keeping the heartbeat of outlaw country alive with every beat.'
  },
  {
    name: 'Dave Thurman',
    role: 'Bass Guitar',
    image: IMG_1089,
    bio: 'The foundation of our sound, holding down the low end with style.'
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <h3 className="text-xl font-bold text-[#f59d0e] mb-1">{member.name}</h3>
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