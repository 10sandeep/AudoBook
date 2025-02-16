import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AudioPlayer } from './components/AudioPlayer';
import { AudioGrid } from './components/AudioGrid';
import { useStore } from './store/useStore';

// Sample data for demonstration
const sampleContents = [
  {
    id: '1',
    title: 'The Psychology of Money',
    description: 'Timeless lessons on wealth, greed, and happiness. Learn how to better manage your money and make smarter financial decisions.',
    cover_image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500',
    audio_url: 'https://example.com/audio1.mp3',
    duration: 7200, // 2 hours
    creator_id: 'creator1',
    category: 'finance',
    type: 'audiobook',
    created_at: '2024-02-28T12:00:00Z',
    updated_at: '2024-02-28T12:00:00Z'
  },
  {
    id: '2',
    title: 'Mindfulness Meditation',
    description: 'Daily guided meditation sessions to help you reduce stress, improve focus, and find inner peace.',
    cover_image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500',
    audio_url: 'https://example.com/audio2.mp3',
    duration: 1800, // 30 minutes
    creator_id: 'creator2',
    category: 'meditation',
    type: 'podcast',
    created_at: '2024-02-28T12:00:00Z',
    updated_at: '2024-02-28T12:00:00Z'
  },
  {
    id: '3',
    title: 'The Art of Leadership',
    description: 'Learn essential leadership skills from top executives and management experts around the world.',
    cover_image: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=500',
    audio_url: 'https://example.com/audio3.mp3',
    duration: 5400, // 1.5 hours
    creator_id: 'creator3',
    category: 'business',
    type: 'audiobook',
    created_at: '2024-02-28T12:00:00Z',
    updated_at: '2024-02-28T12:00:00Z'
  },
  {
    id: '4',
    title: 'Tech Talk Weekly',
    description: 'Stay up to date with the latest technology trends, news, and innovations in the tech industry.',
    cover_image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500',
    audio_url: 'https://example.com/audio4.mp3',
    duration: 3600, // 1 hour
    creator_id: 'creator4',
    category: 'technology',
    type: 'podcast',
    created_at: '2024-02-28T12:00:00Z',
    updated_at: '2024-02-28T12:00:00Z'
  },
  {
    id: '5',
    title: 'Healthy Living Guide',
    description: 'Expert advice on nutrition, exercise, and maintaining a healthy lifestyle for optimal wellbeing.',
    cover_image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500',
    audio_url: 'https://example.com/audio5.mp3',
    duration: 4500, // 1.25 hours
    creator_id: 'creator5',
    category: 'health',
    type: 'audiobook',
    created_at: '2024-02-28T12:00:00Z',
    updated_at: '2024-02-28T12:00:00Z'
  }
];

function App() {
  const { darkMode } = useStore();

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
          <Navbar />
          <main className="pt-16 pb-24">
            <AudioGrid title="Featured Audiobooks & Podcasts" contents={sampleContents} />
            <AudioGrid title="Featured Audiobooks & Podcasts" contents={sampleContents} />
            <AudioGrid title="Featured Audiobooks & Podcasts" contents={sampleContents} />
            <AudioGrid title="Featured Audiobooks & Podcasts" contents={sampleContents} />
            <AudioGrid title="Featured Audiobooks & Podcasts" contents={sampleContents} />
            <AudioGrid title="Featured Audiobooks & Podcasts" contents={sampleContents} />
          </main>
        
          <AudioPlayer />
        </div>
      </div>
    </Router>
  );
}

export default App;