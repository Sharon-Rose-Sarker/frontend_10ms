"use client";

import React from 'react';

interface Feature {
  id?: string | number;
  title?: string;
  subtitle?: string;
  icon?: string;
}

interface CourseLayoutSectionProps {
  name?: string;
  values?: Feature[];
}

const CourseLayoutSection: React.FC<CourseLayoutSectionProps> = ({ name = 'Course Layout', values = [] }) => {
  const validItems = values.filter((item) => item?.title || item?.subtitle);
  if (validItems.length === 0) return null;

  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 pb-2">
        {name}
      </h2>
      <ul className="space-y-6">
        {validItems.map((feature, i) => (
          <li
            key={feature.id ?? i}
            className="p-5 border rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center space-x-5"
          >
            {feature.icon?.trim() ? (
              <img
                src={feature.icon}
                alt={feature.title || 'Feature icon'}
                className="w-14 h-14 object-contain flex-shrink-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder-icon.svg';
                }}
              />
            ) : (
              <img
                src="/placeholder-icon.svg"
                alt="Placeholder icon"
                className="w-14 h-14 object-contain opacity-50 flex-shrink-0"
              />
            )}
            <div>
              <h3 className="font-semibold text-lg">{feature.title ?? 'Untitled Feature'}</h3>
              {feature.subtitle && (
                <p className="text-gray-700 mt-1">{feature.subtitle}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CourseLayoutSection;
