"use client";

import React from 'react';

interface ChecklistItem {
  id?: string;
  text?: string;
  icon?: string;
  color?: string;
  list_page_visibility?: boolean;
}

interface ChecklistSectionProps {
  checklist?: ChecklistItem[];
}

const ChecklistSection: React.FC<ChecklistSectionProps> = ({ checklist = [] }) => {
  
  const validItems = checklist;



  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent border-b border-gray-200/50 pb-4">What You'll Get</h2>
      <ul className="space-y-5">
        {validItems.map(({ id, text, icon }, index) => (
          <li
            key={id ?? text ?? index}
            className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100/50 hover:from-green-100 hover:to-emerald-100 hover:border-green-200/50 transition-all duration-300 hover:shadow-md group"
          >
            {icon?.trim() ? (
              <img
                src={icon}
                alt={text}
                className="w-6 h-6 object-contain flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder-icon.svg';
                }}
              />
            ) : (
              <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            <span className="font-medium text-gray-800 leading-relaxed">{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ChecklistSection;
