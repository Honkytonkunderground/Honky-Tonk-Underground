import { Facebook, Instagram, Youtube } from 'lucide-react';

interface VisuallyHiddenProps {
  children: React.ReactNode;
}

// Utility component for visually hidden text
const VisuallyHidden = ({ children }: VisuallyHiddenProps) => (
  <span className="sr-only">{children}</span>
);

export function Footer() {
  return (
    <footer className="py-12 px-4 md:px-8 bg-black/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-8 mb-8">
          <a 
            href="https://www.facebook.com/honkytonkunderground" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#c64444] hover:text-white transition-colors"
            aria-label="Visit our Facebook page"
          >
            <Facebook className="w-8 h-8" />
            <VisuallyHidden>Facebook</VisuallyHidden>
          </a>
          <a 
            href="https://www.instagram.com/honkytonkunderground" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#c64444] hover:text-white transition-colors"
            aria-label="Visit our Instagram page"
          >
            <Instagram className="w-8 h-8" />
            <VisuallyHidden>Instagram</VisuallyHidden>
          </a>
          <a 
            href="https://www.youtube.com/@honkytonkunderground" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#c64444] hover:text-white transition-colors"
            aria-label="Visit our YouTube channel"
          >
            <Youtube className="w-8 h-8" />
            <VisuallyHidden>YouTube</VisuallyHidden>
          </a>
        </div>
        <p className="text-gray-300">
          © {new Date().getFullYear()} Honky Tonk Underground. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;