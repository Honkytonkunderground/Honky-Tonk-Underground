import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, VolumeX, Volume2, Music as MusicIcon } from 'lucide-react';

interface MusicProps {
  title?: string;
}

const songs = [
  { id: 'crowd', title: 'Honky Tonk Crowd', src: '/music/honky-tonk-crowd.mp3' },
  { id: 'blues', title: 'Workin\' Man Blues', src: '/music/working-man-blues.mp3' },
  { id: 'home', title: 'Almost Home', src: '/music/almost-home.mp3' },
  { id: 'bottle', title: 'Dust On The Bottle', src: '/music/dust-on-the-bottle.mp3' },
];

export function Music({ title = "Music Selection" }: MusicProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedSong, setSelectedSong] = useState(songs[0]);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.preload = 'auto';
      
      const audio = audioRef.current;
      
      const handleError = (e: Event) => {
        console.error('Audio error:', e);
        const errorEvent = e as ErrorEvent;
        setError(errorEvent.message || 'Error playing audio');
      };

      const handlePlay = () => {
        console.log('Audio started playing');
        setError(null);
      };

      const handlePause = () => {
        console.log('Audio paused');
      };

      const handleLoadStart = () => {
        console.log('Audio loading started');
      };

      const handleCanPlay = () => {
        console.log('Audio can play');
      };

      // Add event listeners
      audio.addEventListener('error', handleError);
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
      audio.addEventListener('loadstart', handleLoadStart);
      audio.addEventListener('canplay', handleCanPlay);

      // Cleanup
      return () => {
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
        audio.removeEventListener('loadstart', handleLoadStart);
        audio.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);

  useEffect(() => {
    // Stop playing when changing songs
    if (isPlaying) {
      setIsPlaying(false);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
    setError(null);
  }, [selectedSong]);

  const togglePlay = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            await playPromise;
            console.log('Playback started successfully');
          }
        }
        setIsPlaying(!isPlaying);
      } catch (err) {
        console.error('Playback failed:', err);
        setError('Failed to play audio');
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="bg-[#2a2422] p-6 sm:p-8 rounded-lg transition-colors text-left">
      <div className="flex items-center justify-center gap-2 mb-6">
        <MusicIcon className="w-6 h-6" />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Song Selection */}
        <div className="bg-gray-900 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Select Track</h3>
          <div className="space-y-2">
            {songs.map((song) => (
              <button
                key={song.id}
                onClick={() => setSelectedSong(song)}
                className={`w-full text-left px-4 py-2 rounded transition-colors ${
                  selectedSong.id === song.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                {song.title}
              </button>
            ))}
          </div>
        </div>

        {/* Player Controls */}
        <div className="md:col-span-2 flex flex-col justify-center">
          <p className="text-center text-gray-300 mb-4">Now Playing: {selectedSong.title}</p>
          
          {error && (
            <p className="text-red-500 text-center mb-4 text-sm">{error}</p>
          )}

          <audio 
            ref={audioRef}
            src={selectedSong.src}
            className="hidden"
            onEnded={() => setIsPlaying(false)}
          />
          
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={togglePlay}
              className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8" />
              ) : (
                <Play className="w-8 h-8" />
              )}
            </button>

            <button
              onClick={toggleMute}
              className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-8 h-8" />
              ) : (
                <Volume2 className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}