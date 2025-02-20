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
    setCurrentAudio,
    setIsPlaying,
    setVolume,
    setPlaybackSpeed,
    darkMode,
  } = useStore();

  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

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

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setProgress(newTime);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setCurrentAudio(null);
    setIsPlaying(false);
  };

  if (!currentAudio || !isVisible) return null;

  return (
    <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[700px] 
      bg-gradient-to-r from-blue-600/30 to-blue-400/20 backdrop-blur-xl shadow-lg 
      border border-blue-400/40 rounded-2xl p-4 flex flex-col items-center transition-all duration-300`}>
      
      {/* Audio Info */}
      <div className="flex w-full items-center justify-between">
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

        {/* Close Button */}
        <button onClick={handleClose} className="p-2 text-white hover:text-gray-300">
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full mt-4">
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={progress}
          onChange={handleSeek}
          className="w-full accent-blue-500"
        />
        <div className="flex justify-between text-xs text-gray-300 mt-1">
          <span>{formatTime(progress)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center space-x-4 mt-3">
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

      {/* Volume & Speed */}
      <div className="flex items-center space-x-4 mt-3">
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

        {/* Playback Speed Dropdown */}
        <div className="flex items-center space-x-2">
          <Settings className="h-5 w-5 text-white" />
          <select
            value={playbackSpeed}
            onChange={(e) => setPlaybackSpeed(parseFloat(e.target.value))}
            className={`bg-transparent text-black border-gray-600 focus:outline-none p-1 rounded-md border ${
              darkMode ? "bg-gray-800 border-gray-600" : "bg-white border-gray-300 text-black"
            }`}
          >
            <option className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"}`} value="0.5">0.5x</option>
            <option className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"}`} value="1">1x</option>
            <option className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"}`} value="1.5">1.5x</option>
            <option className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"}`} value="2">2x</option>
          </select>
        </div>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
      />
    </div>
  );
}

// Format time helper function
const formatTime = (time: number) => {
  if (isNaN(time)) return "00:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
