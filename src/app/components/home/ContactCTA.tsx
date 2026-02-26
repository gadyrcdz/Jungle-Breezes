// src/components/home/ContactCTA.tsx
'use client'
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguajeContext';


const ContactCTA = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 relative">
      {/* Fondo con efecto parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-fixed bg-center" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hero/nature-background.jpg')",
        }}
      ></div>
      
      {/* Contenido */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6"> {t('contact.title')}</h2>
          <p className="text-xl mb-8">
            {t('contact.subtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">{t('contact.bookinTitle')}</h3>
              <p className="mb-4">{t('contact.textBookin')}</p>
              <Link 
                href="/book" 
                className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-6 rounded-full transition-colors"
              >
                {t('contact.bookin')}
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">{t('contact.contactUs')}</h3>
              <p className="mb-4">{t('contact.textContact')}</p>
              <Link 
                href="/contacto" 
                className="inline-block bg-transparent hover:bg-white/30 text-white border-2 border-white font-bold py-2 px-6 rounded-full transition-colors"
              >
                {t('contact.contactButton')}
              </Link>
            </div>
          </div>
          
          <div className="text-lg">
            <p> {t('contact.callText')}</p>
            <p className="text-2xl font-bold mt-2">+506 8599 4094</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;