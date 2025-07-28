"use client";

import React from 'react';
import Image from 'next/image';

interface Instructor {
  name?: string;
  image?: string;
  short_description?: string;
  description?: string; // now used as qualification list
  has_instructor_page?: boolean;
  slug?: string;
}

interface InstructorSectionProps {
  name?: string;
  instructors?: Instructor[];
}

const InstructorSection: React.FC<InstructorSectionProps> = ({ name, instructors = [] }) => {
  if (instructors.length === 0) return null;

  return (
    <section className="p-8 border border-white/20 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl mb-8 hover:shadow-2xl transition-all duration-300">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">{name || 'Meet Your Instructors'}</h2>
      <ul className="space-y-6">
        {instructors.map((instructor, idx) => {
          const instructorName = instructor.name || 'Unnamed Instructor';

          const content = (
            <div className="flex items-start space-x-6 p-6 rounded-xl bg-gradient-to-r from-blue-50/50 to-indigo-50/50 hover:from-blue-100/60 hover:to-indigo-100/60 transition-all duration-300 border border-blue-100/50 hover:border-blue-200/60 hover:shadow-lg group">
              <div className="flex-shrink-0 relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 overflow-hidden border-2 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                {instructor.image ? (
                  <Image
                    src={instructor.image}
                    alt={`Photo of ${instructorName}`}
                    width={80}
                    height={80}
                    className="object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/placeholder-profile.png';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{instructorName}</h3>

                {instructor.short_description && (
                  <p className="text-gray-600 mb-3 leading-relaxed">{instructor.short_description}</p>
                )}

                {instructor.description && (
                  <div 
                    className="text-sm text-gray-600 leading-relaxed [&>*]:font-inherit [&>*]:text-current [&>p]:mb-2 [&>p]:last:mb-0"
                    dangerouslySetInnerHTML={{ __html: instructor.description }}
                  />
                )}
              </div>
            </div>
          );

          return (
            <li key={instructor.slug ?? idx}>
              <div className="focus:outline-none">
                {content}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default InstructorSection;
