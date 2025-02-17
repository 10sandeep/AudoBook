import React, { useRef, useEffect, useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Settings, X } from "lucide-react";
import { useStore } from "../store/useStore";

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const {
    currentAudio,
    isPlaying,
    volume,
    playbackSpeed,
    setCurrentAudio, // NEW: Function to reset audio when closing
    setIsPlaying,
    setVolume,
    setPlaybackSpeed,
  } = useStore();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (currentAudio) {
      setIsVisible(true);
      if (audioRef.current) {
        audioRef.current.src = currentAudio.audio_url;
        audioRef.current.load();
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  }, [currentAudio]);

  const handleClose = () => {
    setIsVisible(false);
    setCurrentAudio(null); // 🔥 Reset current audio to trigger reloading
    setIsPlaying(false);
  };

  if (!currentAudio || !isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[700px] 
      bg-gradient-to-r from-blue-600/30 to-blue-400/20 backdrop-blur-xl shadow-lg 
      border border-blue-400/40 rounded-2xl p-4 flex items-center justify-between transition-all duration-300">
      
      {/* Left: Cover Image & Details */}
      <div className="flex items-center space-x-4">
        <img
          src={currentAudio.cover_image}
          alt={currentAudio.title}
          className="h-14 w-14 rounded-lg shadow-md"
        />
        <div>
          <h3 className="font-medium text-white">{currentAudio.title}</h3>
          <p className="text-sm text-gray-300">
            {currentAudio.type === "audiobook" ? "Audiobook" : "Podcast"}
          </p>
        </div>
      </div>

      {/* Middle: Controls */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-white/20 transition">
          <SkipBack className="h-5 w-5 text-white" />
        </button>
        <button
          onClick={() => {
            if (audioRef.current) {
              if (isPlaying) {
                audioRef.current.pause();
              } else {
                audioRef.current.play();
              }
            }
            setIsPlaying(!isPlaying);
          }}
          className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition"
        >
          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
        </button>
        <button className="p-2 rounded-full hover:bg-white/20 transition">
          <SkipForward className="h-5 w-5 text-white" />
        </button>
      </div>

      {/* Right: Volume & Speed */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Volume2 className="h-5 w-5 text-white" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-20 accent-blue-500"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Settings className="h-5 w-5 text-white" />
          <select
            value={playbackSpeed}
            onChange={(e) => setPlaybackSpeed(parseFloat(e.target.value))}
            className="bg-transparent text-white focus:outline-none"
          >
            <option value="0.5">0.5x</option>
            <option value="1">1x</option>
            <option value="1.5">1.5x</option>
            <option value="2">2x</option>
          </select>
        </div>
      </div>

      {/* Close Button */}
      <button onClick={handleClose} className="absolute top-2 right-2 p-2 text-white hover:text-gray-300">
        <X className="h-5 w-5" />
      </button>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
}
