import React from 'react';

interface CtaText {
  name?: string;
  value?: string;
}

interface CtaSectionProps {
  cta?: CtaText;
  isLoading?: boolean;
  price?: number;
}

const CtaSection: React.FC<CtaSectionProps> = ({ cta, isLoading = false, price = 1000 }) => {
  const label = cta?.name?.trim();
  const isDisabled = !cta?.value || isLoading;

  if (!label) return null;

  return (
    <div className="text-center space-y-4">
      <div className="mb-6">
        <div className="text-3xl font-bold text-white mb-2">৳{price.toLocaleString()}</div>
        <div className="text-blue-100 text-sm">One-time payment • Lifetime access</div>
      </div>
      <button
        type="button"
        disabled={isDisabled}
        className={`w-full px-8 py-5 text-xl font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 transform
          ${isDisabled
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-white text-blue-700 hover:bg-blue-50 focus:ring-white/50 hover:scale-[1.02] shadow-lg hover:shadow-xl border-2 border-white/20 hover:border-white/40'
          }`}
        aria-disabled={isDisabled}
        aria-label={label}
        aria-busy={isLoading}
      >
        {isLoading ? (
          <span className="inline-flex items-center">
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : (
          label
        )}
      </button>
    </div>
  );
};

export default CtaSection;