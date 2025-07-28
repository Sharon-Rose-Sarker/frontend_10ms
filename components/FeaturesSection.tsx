"use client";

import React from 'react';

interface Feature {
  id?: string;
  icon?: string;
  title?: string;
  subtitle?: string;
}

interface FeaturesSectionProps {
  name?: string;
  values?: Feature[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ name, values = [] }) => {
  if (!values.length) return null;

  return (
    <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
        {name?.trim() || 'Key Features'}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {values.map(({ id, icon, title, subtitle }) => {
          const fallbackTitle = title?.trim() || 'Feature';
          const fallbackAlt = `${fallbackTitle} icon`;

          return (
            <div
              key={id || fallbackTitle}
              className="flex items-start p-6 space-x-5 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 hover:from-blue-100/60 hover:to-indigo-100/60 border border-blue-100/50 hover:border-blue-200/60 rounded-xl transition-all duration-300 hover:shadow-lg group"
              tabIndex={0}
            >
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                {icon ? (
                  <img
                    src={icon}
                    alt={fallbackAlt}
                    className="w-8 h-8 object-contain filter brightness-0 invert"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/placeholder-icon.svg';
                      (e.target as HTMLImageElement).className = 'w-8 h-8 object-contain opacity-50';
                    }}
                  />
                ) : (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{fallbackTitle}</h3>
                {subtitle?.trim() && (
                  <p className="text-gray-600 leading-relaxed">{subtitle}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;