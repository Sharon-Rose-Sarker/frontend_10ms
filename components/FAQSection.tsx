import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
  id?: string;
}

interface FAQSectionProps {
  name?: string;
  values?: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ name, values }) => {
  if (!values || values.length === 0) return null;

  return (
    <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20 hover:shadow-2xl transition-all duration-300">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
        {name?.trim() || 'Frequently Asked Questions'}
      </h2>

      <div className="space-y-8">
        {values.map(({ question, answer, id }) => {
          const q = question?.trim();
          const a = answer?.trim();
          if (!q || !a) return null;

          return (
            <div key={id ?? q} className="bg-gradient-to-r from-purple-50/50 to-pink-50/50 border border-purple-100/50 hover:border-purple-200/60 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <h3 className="text-xl font-bold text-purple-700 mb-4 group-hover:text-purple-800 transition-colors duration-300 flex items-start">
                <span className="text-purple-500 mr-3 text-2xl">Q.</span>
                {q}
              </h3>
              <div
                className="faq-content text-gray-700 leading-relaxed pl-8 border-l-4 border-purple-200 ml-4 [&>*]:font-inherit [&>*]:text-current [&>p]:mb-3 [&>p]:last:mb-0"
                dangerouslySetInnerHTML={{ __html: a }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
