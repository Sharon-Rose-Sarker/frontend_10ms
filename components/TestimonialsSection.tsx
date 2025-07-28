"use client";

import React from 'react';

interface Testimonial {
  id?: string;
  name?: string;
  description?: string;
  testimonial?: string;
  profile_image?: string;
}

interface TestimonialsSectionProps {
  name?: string;
  description?: string;
  values?: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  name,
  description,
  values = [],
}) => {
  if (!values.length) return null;

  return (
    <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300" aria-label={name ?? 'Testimonials'}>
      <div className="mb-8">
        {name && <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">{name}</h2>}
        {description && <p className="text-gray-600 text-lg leading-relaxed">{description}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((t, index) => (
          <div
            key={t.id ?? index}
            className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100/50 hover:border-amber-200/60 shadow-lg hover:shadow-xl rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] group"
            tabIndex={0}
          >
            <div className="flex items-start gap-4 mb-4">
              <img
                src={t.profile_image}
                alt={t.name ?? 'Profile image'}
                className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder-profile.png';
                }}
              />
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-lg text-gray-900">{t.name}</h3>
                {t.description && (
                  <p className="text-sm text-gray-600 mt-1">{t.description}</p>
                )}
              </div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <blockquote className="text-gray-700 leading-relaxed italic">
              "{t.testimonial}"
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
