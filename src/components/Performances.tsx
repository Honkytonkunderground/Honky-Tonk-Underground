import React, { useState } from 'react';
import { Video, Share2, Check } from 'lucide-react';

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
  const [selectedPerformance, setSelectedPerformance] = useState(performances[0]);
  const [copied, setCopied] = useState(false);

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

  return (
    <div className="bg-[#2a2422] p-6 sm:p-8 rounded-lg transition-colors text-left">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Video className="fancy-color w-6 h-6" />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Performance Selection */}
        <div className="bg-black/30 rounded-lg p-4 flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Select Performance</h3>
          <div className="space-y-2 overflow-y-auto max-h-[600px] pr-2 scrollbar-thin">
            {performances.map((performance, index) => (
              <button
                key={performance.id}
                onClick={() => setSelectedPerformance(performance)}
                className={`w-full text-left px-4 py-2 rounded transition-colors ${
                  selectedPerformance.id === performance.id
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

          <div className="bg-black/30 rounded-lg overflow-hidden">
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
    </div>
  );
}