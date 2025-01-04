import { Music } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 flex items-center justify-center gap-2">
          <Music className="w-8 h-8" />
          Our Story
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Born in the heart of the underground country scene, Honky Tonk Underground brings raw, 
          unfiltered country music back to its rebellious roots. With screaming guitars, outlaw attitudes, 
          and authentic storytelling, we're keeping the spirit of traditional country music alive while 
          blazing our own trail through the modern music landscape.
        </p>
      </div>
    </section>
  );
}