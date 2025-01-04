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
          Coming up...
        </p>
      </div>
    </section>
  );
}