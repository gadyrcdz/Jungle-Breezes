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

  return (
    <section className="py-16 bg-green-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('testimonials.sectionTitle')}
          </h2>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            {t('testimonials.sectionSubtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-green-700 rounded-lg p-6 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                     key={i}
                     className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-green-600'}`}
                     fill="currentColor"
                     viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
              
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-green-200 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
             href="#"
             className="inline-block border-2 border-white hover:bg-white hover:text-green-800 font-bold py-3 px-8 rounded-full transition-colors"
          >
            {t('testimonials.viewMore')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;