"use client";

import React from 'react';
import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
  icon?: string;
}

interface Props {
  features: Feature[];
}

const CourseExclusiveFeatures: React.FC<Props> = ({ features }) => (
  <section className="my-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300">
    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">Course Exclusive Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-rose-50/50 to-pink-50/50 border border-rose-100/50 hover:border-rose-200/60 p-6 rounded-2xl flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
        >
          {feature.icon && (
            <div className="mb-4 w-16 h-16 relative bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={32}
                height={32}
                className="object-contain filter brightness-0 invert"
                priority={index < 3}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder-icon.svg';
                }}
              />
            </div>
          )}
          <h3 className="text-lg font-bold mb-3 text-gray-900">{feature.title}</h3>
          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default CourseExclusiveFeatures;