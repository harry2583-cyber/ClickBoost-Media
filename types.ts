
import React from 'react';

export type Page = 'Home' | 'About' | 'Services' | 'Portfolio' | 'Contact' | 'Blog';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export type PortfolioCategory = 'All' | 'Posts' | 'Reels' | 'Banners' | 'Websites';

export interface PortfolioItem {
  id: number;
  imageUrl: string;
  category: PortfolioCategory;
  title: string;
  description: string;
}

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    imageUrl: string;
}

export interface Testimonial {
    id: number;
    quote: string;
    author: string;
    company: string;
    avatarUrl: string;
}
