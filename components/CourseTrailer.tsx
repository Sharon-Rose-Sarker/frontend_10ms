"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface MediaItem {
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
  name?: string;
}

interface CourseTrailerProps {
  media?: MediaItem[];
}

const CourseTrailer: React.FC<CourseTrailerProps> = ({ media = [] }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  const videoMedia = media.find(m => m?.resource_type === 'video' && m?.resource_value);
  const videoId = videoMedia?.resource_value?.trim();
  const thumbnailUrl = videoMedia?.thumbnail_url;
  const videoTitle = videoMedia?.name || 'Course Trailer';

  if (!videoId) {
    return (
      <section className="my-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Course Trailer</h2>
        <div className="flex items-center justify-center p-8 bg-gray-100 border border-gray-200 rounded-lg text-gray-500">
          <p>No trailer video available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">Course Trailer</h2>
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200/50 group-hover:shadow-3xl transition-all duration-300">
        {isLoading && thumbnailUrl && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={thumbnailUrl}
              alt={`${videoTitle} thumbnail`}
              fill
              className="object-cover"
              onLoadingComplete={() => setIsLoading(false)}
              onError={() => setIsLoading(false)}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center backdrop-blur-[1px]">
              <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        )}
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=${isLoading ? 0 : 1}`}
          title={videoTitle}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={`absolute top-0 left-0 w-full h-full ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default CourseTrailer;