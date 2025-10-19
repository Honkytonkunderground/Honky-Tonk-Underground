import React, { useState } from 'react';
import { Video, Share2, Check, ChevronLeft, ChevronRight } from 'lucide-react';

interface PerformancesProps {
  title?: string;
}

const performances = [
  { 
    id: 'scorez5', 
    title: 'SCOREZ Sports Bar', 
    type: 'youtube-short',
    embedUrl: 'https://www.youtube.com/embed/JfH0iBj1qN4',
    shareUrl: 'https://www.youtube.com/shorts/JfH0iBj1qN4'
  },
  { 
    id: 'scorez3', 
    title: 'SCOREZ Sports Bar', 
    type: 'youtube-short',
    embedUrl: 'https://www.youtube.com/embed/I93eChUgPWI',
    shareUrl: 'https://www.youtube.com/shorts/I93eChUgPWI'
  },
  { 
    id: 'scorez2', 
    title: 'SCOREZ Sports Bar', 
    type: 'youtube-short',
    embedUrl: 'https://www.youtube.com/embed/SmVQCt53Djg',
    shareUrl: 'https://www.youtube.com/shorts/SmVQCt53Djg'
  },
];

export function Performances({ title = "Sample Our Performances" }: PerformancesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const selectedPerformance = performances[currentIndex];

  const getTypeLabel = (type: string) => {
    switch(type) {
      case 'youtube': return 'YouTube Video';
      case 'youtube-short': return 'YouTube Short';
      case 'instagram': return 'Instagram Reel';
      default: return 'Video';
    }
  };

  const handleShare = async () => {
    const urlToShare = selectedPerformance.shareUrl || selectedPerformance.embedUrl;
    
    try {
      await navigator.clipboard.writeText(urlToShare);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? performances.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === performances.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#2a2422] p-6 sm:p-8 rounded-lg transition-colors text-left">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Video className="fancy-color w-6 h-6" />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      {/* Desktop View - Original Layout */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Performance Selection */}
        <div className="bg-black/30 rounded-lg p-4 flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Select Performance</h3>
          <div className="space-y-2 overflow-y-auto max-h-[600px] pr-2 scrollbar-thin">
            {performances.map((performance, index) => (
              <button
                key={performance.id}
                onClick={() => setCurrentIndex(index)}
                className={`w-full text-left px-4 py-2 rounded transition-colors ${
                  currentIndex === index
                    ? 'bg-[#c64444] text-black'
                    : 'bg-[#2a2422] hover:bg-[#c64444] text-gray-300 hover:text-white'
                }`}
              >
                <div className="font-medium">#{index + 1} - {performance.title}</div>
                <div className="text-xs opacity-75 mt-1">
                  {getTypeLabel(performance.type)}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Video Player */}
        <div className="md:col-span-2 flex flex-col justify-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <p className="text-center text-gray-300">
              Now Showing: {selectedPerformance.title}
            </p>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-3 py-1.5 bg-[#c64444] hover:bg-[#d96969] text-black rounded transition-colors text-sm font-medium"
              title="Copy link to share"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>

          <div className="bg-black/30 rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className={`relative ${
              selectedPerformance.type === 'youtube-short' || selectedPerformance.type === 'instagram'
                ? 'aspect-[9/16] max-w-[360px] mx-auto'
                : 'aspect-video'
            }`}>
              <iframe
                src={selectedPerformance.embedUrl}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={selectedPerformance.title}
              />
            </div>
          </div>

          <p className="text-center text-sm text-gray-400 mt-4">
            {getTypeLabel(selectedPerformance.type)}
          </p>
        </div>
      </div>

      {/* Mobile View - Swipeable Interface */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-300 text-sm">
            #{currentIndex + 1} of {performances.length}
          </p>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-3 py-1.5 bg-[#c64444] hover:bg-[#d96969] text-black rounded transition-colors text-sm font-medium"
            title="Copy link to share"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </>
            )}
          </button>
        </div>

        <div className="relative bg-black/30 rounded-lg overflow-hidden">
          <div className={`relative ${
            selectedPerformance.type === 'youtube-short' || selectedPerformance.type === 'instagram'
              ? 'aspect-[9/16] max-w-[360px] mx-auto'
              : 'aspect-video'
          }`}>
            <iframe
              src={selectedPerformance.embedUrl}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={selectedPerformance.title}
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-20"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-20"
            aria-label="Next video"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-300 font-medium">{selectedPerformance.title}</p>
          <p className="text-sm text-gray-400 mt-1">
            {getTypeLabel(selectedPerformance.type)}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Use arrows to navigate
          </p>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {performances.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-[#c64444]' : 'bg-gray-600'
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}