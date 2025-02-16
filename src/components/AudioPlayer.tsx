import React, { useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Settings } from 'lucide-react';
import { useStore } from '../store/useStore';

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const {
    currentAudio,
    isPlaying,
    volume,
    playbackSpeed,
    setIsPlaying,
    setVolume,
    setPlaybackSpeed,
  } = useStore();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [volume, playbackSpeed]);

  if (!currentAudio) return null;

  return (
    <div className="fixed bottom-0 w-full bg-white dark:bg-secondary border-t border-secondary dark:border-background/10 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={currentAudio.cover_image}
            alt={currentAudio.title}
            className="h-12 w-12 rounded-md"
          />
          <div>
            <h3 className="font-medium text-foreground">
              {currentAudio.title}
            </h3>
            <p className="text-sm text-foreground/60">
              {currentAudio.type === 'audiobook' ? 'Audiobook' : 'Podcast'}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-secondary/50 dark:hover:bg-background/50">
            <SkipBack className="h-5 w-5 text-foreground/60" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 rounded-full bg-primary hover:bg-accent text-primary-foreground"
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6" />
            )}
          </button>
          <button className="p-2 rounded-full hover:bg-secondary/50 dark:hover:bg-background/50">
            <SkipForward className="h-5 w-5 text-foreground/60" />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Volume2 className="h-5 w-5 text-foreground/60" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-24 accent-primary"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Settings className="h-5 w-5 text-foreground/60" />
            <select
              value={playbackSpeed}
              onChange={(e) => setPlaybackSpeed(parseFloat(e.target.value))}
              className="bg-transparent text-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary rounded"
            >
              <option value="0.5">0.5x</option>
              <option value="1">1x</option>
              <option value="1.5">1.5x</option>
              <option value="2">2x</option>
            </select>
          </div>
        </div>

        <audio
          ref={audioRef}
          src={currentAudio.audio_url}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>
    </div>
  );
}