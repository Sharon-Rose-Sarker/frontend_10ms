"use client";

import React from 'react';

interface FeatureExplanation {
  id?: string;
  file_type?: string;
  file_url?: string;
  title?: string;
  checklist?: string[];
  video_thumbnail?: string;
}

interface FeatureExplanationsSectionProps {
  name?: string;
  values?: FeatureExplanation[];
}

const FeatureExplanationsSection: React.FC<FeatureExplanationsSectionProps> = ({ name, values = [] }) => {
  if (!values.length) return null;

  return (
    <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
        {name?.trim() || 'Course Features Explained'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map(({ id, file_url, title, checklist }) => {
          const fallbackTitle = title?.trim() || 'Course feature';

          return (
            <div
              key={id || fallbackTitle}
              className="bg-gradient-to-br from-indigo-50/50 to-purple-50/50 border border-indigo-100/50 hover:border-indigo-200/60 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group overflow-hidden"
              tabIndex={0}
            >
              {file_url ? (
                <div className="relative overflow-hidden">
                  <img
                    src={file_url}
                    alt={fallbackTitle}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/placeholder.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ) : (
                <div className="w-full h-48 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-400 border-b border-indigo-100/50">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              )}

              <div className="p-6">
                <h3 className="font-bold text-xl mb-4 text-gray-900">{fallbackTitle}</h3>

                {checklist?.length ? (
                  <ul className="space-y-3">
                    {checklist.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-gray-700">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 italic">No additional details provided.</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureExplanationsSection;
