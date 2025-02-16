export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  created_at: string;
}

export interface AudioContent {
  id: string;
  title: string;
  description: string;
  cover_image: string;
  audio_url: string;
  duration: number;
  creator_id: string;
  category: string;
  type: 'audiobook' | 'podcast';
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
}