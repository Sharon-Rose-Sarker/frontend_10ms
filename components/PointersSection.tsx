"use client";

import React from 'react';

interface Pointer {
  id?: string;
  text?: string;
  icon?: string;
  color?: string;
}

interface PointersSectionProps {
  name?: string;
  values?: Pointer[];
}

const PointersSection: React.FC<PointersSectionProps> = ({ name, values = [] }) => {
  const validValues = values.filter(p => p.text?.trim());

  if (!validValues.length) return null;

  return (
    <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300" aria-label={name || 'What you will learn'}>
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">{name || 'What You\'ll Learn'}</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {validValues.map(({ id, text, icon, color }, index) => (
          <div
            key={id ?? index}
            className="p-5 bg-gradient-to-r from-teal-50/50 to-cyan-50/50 hover:from-teal-100/60 hover:to-cyan-100/60 rounded-xl border border-teal-100/50 hover:border-teal-200/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group flex items-center space-x-4"
            tabIndex={0}
            style={color ? { color: color } : undefined}
          >
            {icon && icon !== '0' ? (
              <img
                src={icon}
                alt=""
                aria-hidden="true"
                className="w-8 h-8 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
                onError={e => {
                  (e.target as HTMLImageElement).src = '/placeholder-icon.png';
                }}
              />
            ) : (
              <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full text-white font-bold select-none group-hover:scale-110 transition-transform duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            <p className="m-0 font-medium text-gray-800 leading-relaxed">{text?.trim()}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PointersSection;
