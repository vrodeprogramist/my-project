"use client";

interface HeroProps {
  title?: string;
  description?: string;
  primaryButton?: {
    text: string;
    onClick: () => void;
  };
  secondaryButton?: {
    text: string;
    onClick: () => void;
  };
}

export default function Hero({ 
  title = "Архитектурное бюро", 
  description, 
  primaryButton 
}: HeroProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="flex flex-col items-start gap-6 sm:gap-8">
        {title && (
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {title}
          </h1>
        )}
        
        {description && (
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
        
        {primaryButton && (
          <button
            onClick={primaryButton.onClick}
            className="px-8 py-3 bg-red-950 hover:bg-red-900 text-white font-medium rounded-lg transition-colors text-base mt-6"
          >
            {primaryButton.text}
          </button>
        )}
      </div>
    </section>
  );
}
