// src/components/home/ActivityCards.tsx
'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguajeContext';

const ActivityCards = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setCardsPerView(3);  
      } else if (window.innerWidth >= 1024) {
        setCardsPerView(2);  
      } else if (window.innerWidth >= 768) {
        setCardsPerView(1);  
      } else {
        setCardsPerView(1);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const greenTheme = {
    taglineBg: '#4169E1',
    taglineFold: '#2c4a9e',
    priceColor: '#4CAF50',
    buttonColor: '#2D6A4F',
    buttonHover: '#1f4930'
  };
  
  const packages = [
    {
      id: 'scenic',
      price: '$99',
      image: '/images/activities/bridges.jpg',
      activityTags: [
        { name: 'treetram', color: '#FF8C42' },
        { name: 'skywalk', color: '#4CAF50' }
      ]
    },
    {
      id: 'explorer',
      price: '$129',
      image: '/images/activities/canopy.jpg',
      activityTags: [
        { name: 'treetram', color: '#FF8C42' },
        { name: 'skytrek', color: '#E74C3C' },
        { name: 'skywalk', color: '#4CAF50' }
      ]
    },
    {
      id: 'adventure',
      price: '$139',
      image: '/images/activities/canopy.jpg',
      activityTags: [
        { name: 'skytrek', color: '#E74C3C' },
        { name: 'arboreal', color: '#9B59B6' }
      ]
    },
    {
      id: 'extreme',
      price: '$169',
      image: '/images/activities/paintball.jpg',
      activityTags: [
        { name: 'skytrek', color: '#E74C3C' },
        { name: 'skywalk', color: '#4CAF50' },
        { name: 'arboreal', color: '#9B59B6' }
      ]
    }
  ];

  const maxSlide = packages.length - cardsPerView;

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const totalDots = Math.ceil(packages.length - cardsPerView + 1);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[1600px] ">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('packages.sectionTitle')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('packages.sectionSubtitle')}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative px-8">
          {/* Navigation Buttons */}
          {currentSlide > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-30 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-3 shadow-lg transition-all duration-200 focus:outline-none"
              aria-label="Previous package"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {currentSlide < maxSlide && (
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-30 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-3 shadow-lg transition-all duration-200 focus:outline-none"
              aria-label="Next package"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Cards Container */}
          <div className="relative ">
            <div className="overflow-hidden pl-3">
              <div 
                className="flex gap-6 transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * (105 / cardsPerView)}%)`,
                }}
              >
                {packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="relative flex-shrink-0"
                    style={{ width: `${100 / cardsPerView}%` }}
                  >
                    <div className="bg-white rounded-t-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col" style={{ overflow: 'visible', minHeight: '715px' }}>
                      {/* Image Section */}
                      <div className="relative h-[340px]" style={{ overflow: 'visible', borderTopLeftRadius: '0.75rem', borderTopRightRadius: '0.75rem' }}>
                        <Image
                          src={pkg.image}
                          alt={t(`packages.${pkg.id}.title`) as string}
                          fill
                          className="object-cover"
                        />
                        
                        {/* Tagline con triángulo de doblez */}
                        <div className="absolute top-4 z-10" style={{ left: '-28.5px' }}>
                          <div 
                            className="absolute left-0 z-0"
                            style={{
                              bottom: '-8px', 
                              left: 15.8,
                              width: 0,
                              height: 0,
                              borderLeft: '13px solid transparent',
                              borderRight: '0px solid transparent',
                              borderTop: `8px solid ${greenTheme.taglineFold}`,
                            }}
                          />
                          
                          <div 
                            className="relative z-10 px-3 py-1.5 shadow-md"
                            style={{ 
                              backgroundColor: greenTheme.taglineBg,
                              marginLeft: '16px'
                            }}
                          >
                            <p className="text-white font-normal text-xs">
                              {t(`packages.${pkg.id}.tagline`)}
                            </p>
                          </div>
                        </div>

                        {/* Activity Tags Bar */}
                        <div 
                          className="absolute bottom-0 left-0 right-0 py-2.5 px-4"
                          style={{ backgroundColor: '#4169E1' }}
                        >
                          <div className="flex items-center justify-center gap-2 text-sm font-bold">
                            {pkg.activityTags.map((tag, idx) => (
                              <span key={idx} className="flex items-center">
                                <span style={{ color: tag.color }}>{tag.name}</span>
                                {idx < pkg.activityTags.length - 1 && (
                                  <span className="text-white mx-1.5">+</span>
                                )}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 flex-1 flex flex-col">
                        {/* Title */}
                        <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-wide text-center">
                          {t(`packages.${pkg.id}.title`)}
                        </h3>

                        {/* Price */}
                        <div className="text-center mb-4">
                          <span 
                            className="text-3xl font-bold"
                            style={{ color: greenTheme.priceColor }}
                          >
                            {pkg.price}
                          </span>
                          <span className="text-gray-500 text-sm ml-1">
                            {t('packages.perPerson')}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                          {t(`packages.${pkg.id}.description`)}
                        </p>

                        {/* Inclusions */}
                        <div className="mb-6 flex-1">
                          <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                            <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            {t('packages.includes')}
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {(t(`packages.${pkg.id}.inclusions`) as unknown as string[]).map((item: string, idx: number) => (
                              <div 
                                key={idx}
                                className="flex items-start gap-2"
                              >
                                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                  </svg>
                                </div>
                                <span className="text-gray-700 text-sm leading-tight">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-row gap-3 mt-auto">
                          <button
                            className="flex-1 text-white font-bold py-3 px-4 rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-200 uppercase tracking-wider"
                            style={{ 
                              backgroundColor: greenTheme.buttonColor,
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = greenTheme.buttonHover;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = greenTheme.buttonColor;
                            }}
                          >
                            {t('packages.bookNow')}
                          </button>
                          <Link 
                            href={`/packages/${pkg.id}`}
                            className="flex-1 bg-white text-gray-900 font-bold py-3 px-4 rounded-full text-center text-sm hover:bg-gray-50 transition-all duration-200 uppercase tracking-wider underline"
                          >
                            {t('packages.moreInfo')}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-10 gap-2">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? 'w-8 h-2 bg-gray-800'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-base text-gray-600 mb-3">
            {t('packages.customPackageText')}
          </p>
          <Link 
            href="/contacto"
            className="inline-flex items-center text-gray-800 font-semibold text-base hover:text-gray-600 transition-colors duration-200"
          >
            {t('packages.contactUs')}
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ActivityCards;