'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguajeContext';

const ActivityCards = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  useEffect(() => {
    setCurrentSlide(0);
  }, [cardsPerView]);

  const greenTheme = {
    taglineBg: '#4169E1',
    taglineFold: '#2c4a9e',
    priceColor: '#4CAF50',
    buttonColor: '#2D6A4F',
    buttonHover: '#1f4930',
  };

  const packages = [
    {
      id: 'scenic',
      price: '$99',
      image: '/images/activities/bridges.jpg',
      activityTags: [
        { name: 'treetram', color: '#FF8C42' },
        { name: 'skywalk', color: '#4CAF50' },
      ],
    },
    {
      id: 'explorer',
      price: '$129',
      image: '/images/activities/canopy.jpg',
      activityTags: [
        { name: 'treetram', color: '#FF8C42' },
        { name: 'skytrek', color: '#E74C3C' },
        { name: 'skywalk', color: '#4CAF50' },
      ],
    },
    {
      id: 'adventure',
      price: '$139',
      image: '/images/activities/canopy.jpg',
      activityTags: [
        { name: 'skytrek', color: '#E74C3C' },
        { name: 'arboreal', color: '#9B59B6' },
      ],
    },
    {
      id: 'extreme',
      price: '$169',
      image: '/images/activities/paintball.jpg',
      activityTags: [
        { name: 'skytrek', color: '#E74C3C' },
        { name: 'skywalk', color: '#4CAF50' },
        { name: 'arboreal', color: '#9B59B6' },
      ],
    },
  ];

  const maxSlide = packages.length - cardsPerView;
  const totalDots = maxSlide + 1;

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  
  const visiblePackages = packages.slice(currentSlide, currentSlide + cardsPerView);

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto px-4 max-w-[1400px]">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t('packages.sectionTitle')}
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            {t('packages.sectionSubtitle')}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Prev Button */}
          {currentSlide > 0 && (
            <button
              onClick={prevSlide}
              className="absolute -left-5 lg:-left-10 top-1/2 -translate-y-1/2 z-30 bg-transparent scale-130 hover:scale-165 text-green-800 rounded-full p-3 transition-all duration-200 focus:outline-none"
              aria-label="Previous package"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          
          {currentSlide < maxSlide && (
            <button
              onClick={nextSlide}
              className="absolute -right-5 lg:-right-10 top-1/2 -translate-y-1/2 z-30 bg-transparent scale-130 hover:scale-165 text-green-800 rounded-full p-3 transition-all duration-200 focus:outline-none"
              aria-label="Next package"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          
          <div
            key={currentSlide}
            className="flex justify-center gap-6"
            style={{ animation: 'fadeSlide 0.4s ease-out both' }}
          >
            {visiblePackages.map((pkg) => (
              <div
                key={pkg.id}
                className="flex-shrink-0 w-full"
                style={{
                  maxWidth:
                    cardsPerView === 1
                      ? '480px'
                      : cardsPerView === 2
                      ? 'calc(50% - 12px)'
                      : 'calc(33.333% - 16px)',
                }}
              >
                {/* Card */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out flex flex-col h-[600px]">

                  {/* Image Section */}
                  <div className="relative h-[280px] flex-shrink-0">
                    <Image
                      src={pkg.image}
                      alt={t(`packages.${pkg.id}.title`) as string}
                      fill
                      className="object-cover rounded-t-xl"
                    />

                    {/* Ribbon que sobresale por la izquierda */}
                    <div className="absolute top-5 z-10" style={{ left: '-10px' }}>

                      {/* triangulo del doblez */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '-8px',
                          left: 1,
                          width: 0,
                          height: 0,
                          borderRight: `10px solid ${greenTheme.taglineFold}`,
                          borderBottom: '8px solid transparent',
                        }}
                      />

                      {/* Barra del listón */}
                      <div
                        className="px-4 py-1.5 shadow-md"
                        style={{ backgroundColor: greenTheme.taglineBg }}
                      >
                        <p className="text-white font-normal text-xs whitespace-nowrap">
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
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-xl font-black text-gray-900 mb-2 tracking-wide text-center">
                      {t(`packages.${pkg.id}.title`)}
                    </h3>

                    <div className="text-center mb-3">
                      <span className="text-2xl font-bold" style={{ color: greenTheme.priceColor }}>
                        {pkg.price}
                      </span>
                      <span className="text-gray-500 text-sm ml-1">{t('packages.perPerson')}</span>
                    </div>

                    <p className="text-gray-600 text-xs leading-relaxed mb-3">
                      {t(`packages.${pkg.id}.description`)}
                    </p>

                    <div className="mb-4 flex-1">
                      <h4 className="text-xs font-bold text-gray-900 mb-2 flex items-center">
                        <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {t('packages.includes')}
                      </h4>
                      <div className="grid grid-cols-2 gap-1.5">
                        {(t(`packages.${pkg.id}.inclusions`) as unknown as string[]).map((item: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-1.5">
                            <div className="flex-shrink-0 w-3 h-3 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                              <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-gray-700 text-xs leading-tight">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center mt-auto">
                      <button
                        className=" text-white font-bold py-3 px-20 rounded-full text-xs shadow-md hover:shadow-lg transition-all duration-200 uppercase tracking-wider"
                        style={{ backgroundColor: greenTheme.buttonColor }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = greenTheme.buttonHover; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = greenTheme.buttonColor; }}
                      >
                        {t('packages.bookNow')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? 'w-8 h-2 bg-green-800'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-base text-gray-600 mb-3">{t('packages.customPackageText')}</p>
          <Link
            href="/contacto"
            className="inline-flex items-center text-gray-800 font-semibold text-base hover:text-green-700 transition-colors duration-200"
          >
            {t('packages.contactUs')}
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Fade animation keyframe — add this to your global CSS instead if preferred */}
      <style jsx>{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ActivityCards;