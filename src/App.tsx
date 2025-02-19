import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AudioPlayer } from './components/AudioPlayer';
import { AudioGrid } from './components/AudioGrid';
import { useStore } from './store/useStore';
import Image1 from './components/assets/image1.png'
import Image2 from './components/assets/image2.png'
import Image3 from './components/assets/image3.png'
import Image4 from './components/assets/image4.png'
import Image5 from './components/assets/image5.png'
import Image6 from './components/assets/image6.png'
import Image7 from './components/assets/image7.png'
import InfiniteScrollGallery from './components/InfiniteScrollGallery';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';


// Sample data for demonstration
const sampleContents = [
  {
    id: '1',
    title: 'The Psychology of Money',
    description: 'Timeless lessons on wealth, greed, and happiness. Learn how to better manage your money and make smarter financial decisions.',
    cover_image: Image4,
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
    title: 'Rich Dad Poor Dad',
    description: 'Daily guided meditation sessions to help you reduce stress, improve focus, and find inner peace.',
    cover_image: Image7,
    audio_url: 'https://example.com/audio2.mp3',
    duration: 1800, // 30 minutes
    creator_id: 'creator2',
    category: 'Finance',
    type: 'podcast',
    created_at: '2024-02-28T12:00:00Z',
    updated_at: '2024-02-28T12:00:00Z'
  },
  {
    id: '3',
    title: 'The Wings Of Fire',
    description: 'Learn essential leadership skills from top executives and management experts around the world.',
    cover_image: Image6,
    audio_url: 'https://example.com/audio3.mp3',
    duration: 5400, // 1.5 hours
    creator_id: 'creator3',
    category: 'Auto-Biography',
    type: 'audiobook',
    created_at: '2024-02-28T12:00:00Z',
    updated_at: '2024-02-28T12:00:00Z'
  },
  {
    id: '4',
    title: 'Why I Am An Atheist',
    description: 'Stay up to date with the latest technology trends, news, and innovations in the tech industry.',
    cover_image: Image5,
    audio_url: 'https://example.com/audio4.mp3',
    duration: 3600, // 1 hour
    creator_id: 'creator4',
    category: 'Biography',
    type: 'podcast',
    created_at: '2024-02-28T12:00:00Z',
    updated_at: '2024-02-28T12:00:00Z'
  },
  {
    id: '5',
    title: 'Metamorphosis',
    description: 'Expert advice on nutrition, exercise, and maintaining a healthy lifestyle for optimal wellbeing.',
    cover_image: Image2,
    audio_url: 'https://example.com/audio5.mp3',
    duration: 4500, // 1.25 hours
    creator_id: 'creator5',
    category: 'novel',
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
        <div className="bg-gray-50 dark:bg-black min-h-screen">
          <Navbar />
          <Routes>
            
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <div className="pt-20">
  <InfiniteScrollGallery />
</div>

          <main className="font-poppins  pt-10 pb-6 mt-[-10px]">
            <AudioGrid title="Featured Audiobooks & Podcasts" contents={sampleContents} />
            <AudioGrid title="Featured Audiobooks & Podcasts" contents={sampleContents} />
            <AudioGrid title="Featured Audiobooks & Podcasts" contents={sampleContents} />
            <Banner/>
            <AudioGrid title="Featured Audiobooks & Podcasts" contents={sampleContents} />
            <AudioGrid title="Featured Audiobooks & Podcasts" contents={sampleContents} />
            <AudioGrid title="Featured Audiobooks & Podcasts" contents={sampleContents} />
          </main>
       
          <AudioPlayer />
          <Footer/>
        </div>
      </div>
      
    </Router>
    
  );
}

export default App;