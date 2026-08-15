"use client";

interface HeroProps {
  title?: string;
  description?: string;
}

export default function Hero({ 
  title = "Архитектурное бюро", 
  description 
}: HeroProps) {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col items-start gap-4 sm:gap-6">
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
      </div>
    </section>
  );
}
