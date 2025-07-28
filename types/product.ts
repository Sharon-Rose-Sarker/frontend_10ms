
export interface CourseData {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  old_info: OldInfo;
  start_at: string;
  media: MediaItem[];
  checklist: ChecklistItem[];
  seo: SEO;
  cta_text: CtaText;
  sections: Section[];
  is_cohort_based_course: boolean;
  secondary_cta_group: any[];
  delivery_method: string;
}

interface OldInfo {
  cat_id: number;
  course_id: number;
  platform: string;
  skills_cat_id: number;
  slug: string;
}

interface MediaItem {
  name: string;
  resource_type: 'video' | 'image';
  resource_value: string;
  thumbnail_url?: string;
}

interface ChecklistItem {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

interface SEO {
  defaultMeta: SEOItem[];
  description: string;
  keywords: string[];
  schema: SEOSchema[];
  title: string;
}

interface SEOItem {
  content: string;
  type: 'property' | 'name';
  value: string;
}

interface SEOSchema {
  meta_name: string;
  meta_value: string;
  type: string;
}

interface CtaText {
  name: string;
  value: string;
}

interface Instructor {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
}

interface FeatureItem {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
}

interface GroupJoinEngagement {
  background: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta: {
    clicked_url: string;
    color: string;
    text: string;
  };
  description: string;
  description_color: string;
  id: string;
  thumbnail: string;
  title: string;
  title_color: string;
  top_left_icon_img: string;
}

interface Pointer {
  color: string;
  icon: string;
  id: string;
  text: string;
}

interface AboutItem {
  description: string;
  icon: string;
  id: string;
  title: string;
}

interface FeatureExplanation {
  checklist: string[];
  file_type: string;
  file_url: string;
  id: string;
  title: string;
  video_thumbnail: string;
}

interface Testimonial {
  description: string;
  id: string;
  name: string;
  profile_image: string;
  testimonial: string;
  thumb?: string;
  video_type?: string;
  video_url?: string;
}

interface FAQItem {
  answer: string;
  id: string;
  question: string;
}

export interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: any[];
}

export type ProductData = CourseData;
