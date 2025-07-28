import React from 'react';
import InstructorSection from './InstructorSection';
import FeaturesSection from './FeaturesSection';
import PointersSection from './PointersSection';
import TestimonialsSection from './TestimonialsSection';
import FAQSection from './FAQSection';
import FeatureExplanationsSection from './FeatureExplanationsSection';

interface Section {
  type: string;
  name?: string;
  description?: string;
  values?: unknown[];
}

interface SectionRendererProps {
  section: Section;
}

const SectionRenderer: React.FC<SectionRendererProps> = ({ section }) => {
  switch (section.type) {
    case 'instructors':
      return <InstructorSection name={section.name} instructors={section.values as any} />;
    case 'features':
      return <FeaturesSection name={section.name} values={section.values as any} />;
    case 'pointers':
      return <PointersSection name={section.name} values={section.values as any} />;
    case 'testimonials':
      return <TestimonialsSection name={section.name} description={section.description} values={section.values as any} />;
    case 'faq':
      return <FAQSection name={section.name} values={section.values as any} />;
    case 'feature_explanations':
      return <FeatureExplanationsSection name={section.name} values={section.values as any} />;
    default:
      return null;
  }
};

export default SectionRenderer;
