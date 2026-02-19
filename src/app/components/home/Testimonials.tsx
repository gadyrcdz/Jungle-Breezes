// src/components/home/Testimonials.tsx
'use client'
import React from 'react';
import { useLanguage } from '@/contexts/LanguajeContext';

const Testimonials = () => {
  const { t } = useLanguage();
  
  // Los testimonios ahora vendrán de las traducciones
  const testimonials = [
    {
      id: 1,
      name: t('testimonials.testimonial1.name'),
      location: t('testimonials.testimonial1.location'),
      quote: t('testimonials.testimonial1.quote'),
      rating: 5,
    },
    {
      id: 2,
      name: t('testimonials.testimonial2.name'),
      location: t('testimonials.testimonial2.location'),
      quote: t('testimonials.testimonial2.quote'),
      rating: 5,
    },
    {
      id: 3,
      name: t('testimonials.testimonial3.name'),
      location: t('testimonials.testimonial3.location'),
      quote: t('testimonials.testimonial3.quote'),
      rating: 4,
    },
  ];

  // Duplicar testimonios para el efecto de carrusel infinito
  const doubledTestimonials = [...testimonials, ...testimonials];

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="bg-green-700 rounded-lg p-4 shadow-lg min-w-[280px] max-w-[320px] mx-3">
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-green-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      <p className="text-sm italic mb-3 line-clamp-3">"{testimonial.quote}"</p>
      
      <div>
        <p className="font-bold text-sm">{testimonial.name}</p>
        <p className="text-green-200 text-xs">{testimonial.location}</p>
      </div>
    </div>
  );

  return (
    <section className="py-8 bg-green-800 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {t('testimonials.sectionTitle')}
          </h2>
          <p className="text-base text-green-100 max-w-2xl mx-auto">
            {t('testimonials.sectionSubtitle')}
          </p>
        </div>
        
        {/* Carrusel flotante - Fila superior (izquierda a derecha) */}
        <div className="relative mb-4">
          <div className="flex animate-scroll-left">
            {doubledTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`top-${testimonial.id}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Carrusel flotante - Fila inferior (derecha a izquierda) */}
        <div className="relative mb-4">
          <div className="flex animate-scroll-right">
            {doubledTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`bottom-${testimonial.id}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <a
             href="#"
             className="inline-block border-2 border-white hover:bg-white hover:text-green-800 font-bold py-2 px-6 rounded-full transition-colors text-sm"
          >
            {t('testimonials.viewMore')}
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
