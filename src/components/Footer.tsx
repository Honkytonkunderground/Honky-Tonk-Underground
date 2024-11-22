import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-4 md:px-8 bg-black/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-8 mb-8">
          <a href="#" className="text-[#f59d0e] hover:text-white transition-colors">
            <Facebook className="w-8 h-8" />
          </a>
          <a href="#" className="text-[#f59d0e] hover:text-white transition-colors">
            <Instagram className="w-8 h-8" />
          </a>
          <a href="#" className="text-[#f59d0e] hover:text-white transition-colors">
            <Youtube className="w-8 h-8" />
          </a>
        </div>
        <p className="text-gray-500">
          © {new Date().getFullYear()} Honky Tonk Underground. All rights reserved.
        </p>
      </div>
    </footer>
  );
}