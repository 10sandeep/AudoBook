import React from 'react';
import { AudioCard } from './AudioCard';
import { AudioContent } from '../types';

interface AudioGridProps {
  title: string;
  contents: AudioContent[];
}

export function AudioGrid({ title, contents }: AudioGridProps) {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {contents.map((content) => (
            <AudioCard key={content.id} content={content} />
          ))}
        </div>
      </div>
    </section>
  );
}