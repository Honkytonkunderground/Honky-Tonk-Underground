import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, VolumeX, Volume2, Music as MusicIcon } from 'lucide-react';

interface MusicProps {
  title?: string;
}

const songs = [
  { id: 'jukebox', title: 'Don\'t Rock The Jukebox', src: '/music/jukebox.mp3' },
  { id: 'satin', title: 'Satin Sheets', src: '/music/satin.mp3' },
  { id: 'hank', title: 'I Don\'t Think Hank Done It This Way', src: '/music/hank.mp3' },
  { id: 'turned', title: 'I Left Something Turned On At Home', src: '/music/turned.mp3' },
  { id: 'habits', title: 'Old Habits', src: '/music/habits.mp3' }
  // { id: 'atHome', title: 'Honky Tonk Crowd', src: '/music/crowd.mp3' },
  // { id: 'crowd', title: 'Honky Tonk Crowd', src: '/music/crowd.mp3' },
  // { id: 'blues', title: 'Workin\' Man Blues', src: '/music/blues.mp3' },
  // { id: 'home', title: 'Almost Home', src: '/music/home.mp3' },
  // { id: 'bottle', title: 'Dust On The Bottle', src: '/music/bottle.mp3' },
];

export function Music({ title = "Music Selection" }: MusicProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedSong, setSelectedSong] = useState(songs[0]);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.preload = 'auto';

      const audio = audioRef.current;

      const handlePlay = () => {
        console.log('Audio started playing');
      };

      const handlePause = () => {
        console.log('Audio paused');
      };

      // Add event listeners
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);

      // Cleanup
      return () => {
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
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
  }, [selectedSong]);

  const togglePlay = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          await playPromise;
        }
      }
      setIsPlaying(!isPlaying);
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
        <MusicIcon className="fancy-color sw-6 h-6" />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Song Selection */}
        <div className="bg-black/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Select Track</h3>
          <div className="space-y-2">
            {songs.map((song) => (
              <button
                key={song.id}
                onClick={() => setSelectedSong(song)}
                className={`w-full text-left px-4 py-2 rounded transition-colors ${
                  selectedSong.id === song.id
                    ? 'bg-[#c64444] text-black'
                    : 'bg-[#2a2422] hover:bg-[#c64444] text-gray-300 hover:text-white'
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

          <audio 
            ref={audioRef}
            src={selectedSong.src}
            className="hidden"
            onEnded={() => setIsPlaying(false)}
          />

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={togglePlay}
              className="p-3 rounded-full bg-[#c64444] hover:bg-[#d96969] transition-colors text-black"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8" />
              ) : (
                <Play className="w-8 h-8 relative left-0.5" />
              )}
            </button>

            <button
              onClick={toggleMute}
              className="fancy-color p-3 rounded-full bg-[#2a2422] hover:bg-[#332e2b] transition-colors"
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