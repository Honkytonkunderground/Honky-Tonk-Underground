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
        If you love the 90’s country music vibe, we think you will be thrilled by what we bring to the stage. The vocals, the feel, and the energy will bring you right back to the heyday of country music. Don't just take our word for it; come experience it for yourself. We promise you'll be left craving more. So, get on out to one of our shows and let us take you on a journey you won't soon forget!
        </p>
      </div>
    </section>
  );
}