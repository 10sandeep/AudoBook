import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Play } from "lucide-react";
import { useStore } from "../store/useStore";

export function AudioDetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setCurrentAudio, setIsPlaying } = useStore();
  const content = location.state?.content;

  if (!content) {
    return (
      <div className="flex items-center justify-center h-screen text-xl text-gray-600">
        Content not found
      </div>
    );
  }

  // Sample episodes data
  const episodes = [
    {
      id: "ep1",
      title: "Episode 1 - Introduction",
      description: "An overview of the book's key themes and takeaways.",
      audio_url: "https://example.com/ep1.mp3",
      image: content.cover_image,
    },
    {
      id: "ep2",
      title: "Episode 2 - The Psychology of Money",
      description: "Diving deeper into financial behavior and decision-making.",
      audio_url: "https://example.com/ep2.mp3",
      image: content.cover_image,
    },
    {
      id: "ep3",
      title: "Episode 3 - Investing Strategies",
      description: "Exploring different investment approaches.",
      audio_url: "https://example.com/ep3.mp3",
      image: content.cover_image,
    },
  ];

  const handlePlay = (episode: any) => {
    setCurrentAudio({ ...content, audio_url: episode.audio_url });
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-3xl mx-auto py-10 px-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition mb-6"
        >
          ← Back
        </button>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img src={content.cover_image} alt={content.title} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h1 className="text-2xl font-bold">{content.title}</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{content.description}</p>
          </div>
        </div>

        {/* Episodes List */}
        <h2 className="text-xl font-semibold mt-8">Episodes</h2>
        <div className="mt-4 space-y-4">
          {episodes.map((episode) => (
            <div
              key={episode.id}
              className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
              onClick={() => handlePlay(episode)}
            >
              <img src={episode.image} alt={episode.title} className="w-16 h-16 rounded-lg object-cover" />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-medium">{episode.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{episode.description}</p>
              </div>
              <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition">
                <Play size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
