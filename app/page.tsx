import React from 'react';
import { getProductData } from '../services/productService';
import type { ProductData } from '../types/product';
import InstructorSection from '../components/InstructorSection';
import CourseTrailer from '../components/CourseTrailer';
import CtaSection from '../components/CtaSection';
import ChecklistSection from '../components/ChecklistSection';
import PointersSection from '../components/PointersSection';
import FeaturesSection from '../components/FeaturesSection';
import FeatureExplanationsSection from '../components/FeatureExplanationsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import CourseExclusiveFeatures from '../components/CourseExclusiveFeatures';
import { Metadata } from 'next';

interface PageProps {
  searchParams: {
    lang?: 'en' | 'bn';
  };
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const lang = resolvedSearchParams.lang || 'en';
  const product = (await getProductData(lang)) as ProductData;
  
  return {
    title: product?.seo?.title || product?.title || 'Product',
    description: product?.seo?.description || product?.description || 'Product description',
  };
}

export default async function ProductPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const lang = resolvedSearchParams.lang || 'en';
  let product: ProductData | null = null;
  let error: string | null = null;

  try {
    product = (await getProductData(lang)) as ProductData;
    if (!product) {
      throw new Error('Product not found');
    }
  } catch (err) {
    error = err instanceof Error ? err.message : 'An unknown error occurred';
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 text-red-600">
        Error: {error}
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 text-gray-700">
        Product not found
      </div>
    );
  }

  const getSection = (type: string) => {
    return product.sections?.find((s) => s.type === type);
  };

  const instructorSection = getSection('instructors');
  const layoutFeaturesSection = getSection('features');
  const pointersSection = getSection('pointers');
  const featureExplanationsSection = getSection('feature_explanations');
  const exclusiveFeaturesSection = getSection('course_exclusive_features');
  const testimonialsSection = getSection('testimonials');
  const faqSection = getSection('faq');
  const aboutSection = getSection('about');
  const requirementsSection = getSection('requirements');

  const courseDetailsName = aboutSection?.name || requirementsSection?.name || 'Course details';
  const courseDetailsDescription = [
    aboutSection?.description,
    requirementsSection?.description
  ].filter(Boolean).join('<br/><br/>');

  const media = product.media ?? [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-10 hover:shadow-2xl transition-all duration-300 mb-10">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight">{product.title}</h1>
          <div
            className="prose prose-lg text-gray-700 mb-8 leading-relaxed [&>*]:font-inherit [&>p]:text-current [&>p]:mb-4 [&>p]:last:mb-0"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <main className="flex-1 lg:w-3/4 space-y-10">

            {instructorSection && (
              <InstructorSection
                name={instructorSection.name}
                instructors={instructorSection.values as any}
              />
            )}

            {layoutFeaturesSection && (
              <FeaturesSection
                name={layoutFeaturesSection.name}
                values={layoutFeaturesSection.values as any}
              />
            )}

            {pointersSection && (
              <PointersSection
                name={pointersSection.name}
                values={pointersSection.values as any}
              />
            )}

            {featureExplanationsSection && (
              <FeatureExplanationsSection
                name={featureExplanationsSection.name}
                values={featureExplanationsSection.values as any}
              />
            )}

            {exclusiveFeaturesSection && (
              <CourseExclusiveFeatures features={exclusiveFeaturesSection.values as any ?? []} />
            )}

            {testimonialsSection && (
              <TestimonialsSection
                name={testimonialsSection.name}
                description={testimonialsSection.description}
                values={testimonialsSection.values as any}
              />
            )}

            {faqSection && (
              <FAQSection name={faqSection.name} values={faqSection.values as any} />
            )}

            {courseDetailsDescription && (
              <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">{courseDetailsName}</h2>
                <div
                  className="prose prose-lg max-w-none text-gray-700 leading-relaxed [&>*]:font-inherit [&>p]:text-current [&>p]:mb-4 [&>p]:last:mb-0"
                  dangerouslySetInnerHTML={{ __html: courseDetailsDescription }}
                />
              </section>
            )}
          </main>

          <aside className="lg:w-1/4 lg:sticky lg:top-6 lg:self-start space-y-8">
            {media.length > 0 && (
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <CourseTrailer media={media} />
              </div>
            )}
            {product.cta_text && (
              <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-2xl shadow-xl p-8 border border-blue-500/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <CtaSection cta={product.cta_text} price={1000} />
              </div>
            )}
            {product.checklist && (
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <ChecklistSection checklist={product.checklist} />
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
