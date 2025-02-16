import React from 'react';
import { Play, Clock, Headphones } from 'lucide-react';
import { AudioContent } from '../types';
import { useStore } from '../store/useStore';

interface AudioCardProps {
  content: AudioContent;
}

export function AudioCard({ content }: AudioCardProps) {
  const { setCurrentAudio, setIsPlaying } = useStore();

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return hours > 0 
      ? `${hours}h ${minutes}m`
      : `${minutes}m`;
  };

  const handlePlay = () => {
    setCurrentAudio(content);
    setIsPlaying(true);
  };

  return (
    <div className="group relative bg-white dark:bg-secondary rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-square">
        <img
          src={content.cover_image}
          alt={content.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
          <button
            onClick={handlePlay}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-accent"
          >
            <Play className="h-6 w-6 text-primary-foreground" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
          {content.title}
        </h3>
        <p className="text-sm text-foreground/70 mb-2 line-clamp-2">
          {content.description}
        </p>
        <div className="flex items-center justify-between text-sm text-foreground/60">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{formatDuration(content.duration)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Headphones className="h-4 w-4" />
            <span>{content.type}</span>
          </div>
        </div>
      </div>
    </div>
  );
}