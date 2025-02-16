import { create } from 'zustand';
import { AudioContent, User } from '../types';

interface Store {
  user: User | null;
  currentAudio: AudioContent | null;
  isPlaying: boolean;
  volume: number;
  playbackSpeed: number;
  darkMode: boolean;
  setUser: (user: User | null) => void;
  setCurrentAudio: (audio: AudioContent | null) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setVolume: (volume: number) => void;
  setPlaybackSpeed: (speed: number) => void;
  toggleDarkMode: () => void;
}

export const useStore = create<Store>((set) => ({
  user: null,
  currentAudio: null,
  isPlaying: false,
  volume: 1,
  playbackSpeed: 1,
  darkMode: false,
  setUser: (user) => set({ user }),
  setCurrentAudio: (audio) => set({ currentAudio: audio }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setVolume: (volume) => set({ volume }),
  setPlaybackSpeed: (speed) => set({ playbackSpeed: speed }),
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));