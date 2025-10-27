'use client'
import React, { createContext, useState, useContext, useEffect } from 'react';

type Language = 'es' | 'en';

// Definición recursiva para permitir múltiples niveles de anidamiento
interface TranslationValue {
  [key: string]: string | TranslationValue;
}

interface TranslationSection {
  [key: string]: string | TranslationValue;
}

interface TranslationLanguage {
  es: TranslationSection;
  en: TranslationSection;
}

interface TranslationsType {
  [section: string]: TranslationLanguage;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: TranslationsType;
  t: (key: string) => string;
}

const translations: TranslationsType = {
  navbar: {
    es: {
      name: 'Brisas de la Jungla',
      home: 'Inicio',
      services: 'Servicios',
      aboutUs: 'Sobre Nosotros',
      contact: 'Contacto',
      language: 'EN'
    },
    en: {
      name: 'Jungle Breezes',
      home: 'Home',
      services: 'Services',
      aboutUs: 'About Us',
      contact: 'Contact',
      language: 'ES'
    }
  },
  hero: {
    es: {
      title: 'Aventura y Adrenalina en Plena Naturaleza',
      subtitle: 'Descubre la emoción del canopy, los puentes colgantes y el paintball en un entorno natural incomparable.',
      seeActivities: 'Ver Actividades',
      bookin: 'Reservar ahora',
      language: 'EN'
    },
    en: {
      title: 'Adventure and Adrenaline in Full Nature',
      subtitle: 'Discover the thrill of canopy, hanging bridges and paintball in an incomparable natural environment.',
      seeActivities: 'See Activities',
      bookin: 'Book Now',
      language: 'ES'
    }
  },
  activities: {
    es: {
      sectionTitle: "Nuestras Actividades",
      sectionSubtitle: "Descubre todas las experiencias que tenemos preparadas para ti y tu familia en Jungle Breezes.",
      readMore: "Saber más",
      canopy: {
        title: "Canopy",
        description: "Deslízate entre los árboles y siente la adrenalina de volar sobre el bosque a gran velocidad con nuestras tirolesas."
      },
      bridges: {
        title: "Puentes Colgantes",
        description: "Recorre nuestros puentes suspendidos y admira la fauna y flora desde las alturas en un recorrido inolvidable."
      },
      paintball: {
        title: "Paintball",
        description: "Diviértete con amigos o familiares en nuestros campos de paintball diseñados para una experiencia única."
      },
      restaurant: {
        title: "Restaurante",
        description: "Disfruta de la mejor gastronomía local en nuestro restaurante con vistas panorámicas al bosque."
      }
    },
    en: {
      sectionTitle: "Our Activities",
      sectionSubtitle: "Discover all the experiences we have prepared for you and your family at Jungle Breezes.",
      readMore: "Learn more",
      canopy: {
        title: "Canopy",
        description: "Slide between trees and feel the adrenaline of flying over the forest at high speed with our zip lines."
      },
      bridges: {
        title: "Hanging Bridges",
        description: "Walk through our suspended bridges and admire the fauna and flora from above in an unforgettable journey."
      },
      paintball: {
        title: "Paintball",
        description: "Have fun with friends or family in our paintball fields designed for a unique experience."
      },
      restaurant: {
        title: "Restaurant",
        description: "Enjoy the best local cuisine in our restaurant with panoramic views of the forest."
      }
    }
  },
  testimonials: {
    es: {
      sectionTitle: "Lo que dicen nuestros visitantes",
      sectionSubtitle: "Más de 1,000 visitantes satisfechos han disfrutado de nuestras actividades y servicios.",
      viewMore: "Ver más testimonios",
      testimonial1: {
        name: "María Rodríguez",
        location: "San José, Costa Rica",
        quote: "Una experiencia increíble con mi familia. El canopy fue emocionante y los guías muy profesionales. ¡Volveremos pronto!"
      },
      testimonial2: {
        name: "Carlos Mendoza",
        location: "Alajuela, Costa Rica",
        quote: "Los puentes colgantes ofrecen vistas impresionantes. El restaurante tiene comida deliciosa y el personal es muy amable."
      },
      testimonial3: {
        name: "Ana Fernández",
        location: "Heredia, Costa Rica",
        quote: "Vinimos por el paintball y nos quedamos por el ambiente. Un lugar perfecto para escapar de la rutina y conectar con la naturaleza."
      }
    },
    en: {
      sectionTitle: "What Our Visitors Say",
      sectionSubtitle: "Over 1,000 satisfied visitors have enjoyed our activities and services.",
      viewMore: "View more testimonials",
      testimonial1: {
        name: "Maria Rodriguez",
        location: "San Jose, Costa Rica",
        quote: "An incredible experience with my family. The canopy was exciting and the guides very professional. We'll be back soon!"
      },
      testimonial2: {
        name: "Carlos Mendoza",
        location: "Alajuela, Costa Rica",
        quote: "The hanging bridges offer impressive views. The restaurant has delicious food and the staff is very friendly."
      },
      testimonial3: {
        name: "Ana Fernandez",
        location: "Heredia, Costa Rica",
        quote: "We came for the paintball and stayed for the atmosphere. A perfect place to escape the routine and connect with nature."
      }
    }
  },
  contact: {
    es: {
      title: '¿Listo para vivir la aventura?',
      subtitle: 'Contacta con nosotros para reservar tu próxima experiencia o resolver cualquier duda que tengas.',
      bookinTitle: 'Reservaciones',
      textBookin: 'Asegura tu lugar y disfruta de la mejor aventura con amigos y familia.',
      bookin: 'Reservar Ahora',
      contactUs: 'Contáctanos',
      textContact: '¿Tienes preguntas? Nuestro equipo está listo para ayudarte.',
      contactButton: 'Contactar',
      callText: '¿Prefieres llamarnos? Estamos disponibles en el',
      language: 'EN'
    },
    en: {
      title: 'Ready to live the adventure?',
      subtitle: 'Contact us to book your next experience or resolve any questions you may have.',
      bookinTitle: 'Reservations',
      textBookin: 'Secure your spot and enjoy the best adventure with friends and family.',
      bookin: 'Book Now',
      contactUs: 'Contact us',
      textContact: 'Do you have questions? Our team is ready to help you.',
      contactButton: 'Contact',
      callText: 'Would you rather call us? We are available at',
      language: 'ES' 
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('es');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    if (keys.length < 2) return key; // Al menos necesitamos section.key
    
    const section = keys[0];
    const restKeys = keys.slice(1);
    
    // Verificar si existe la sección
    if (!translations[section] || !translations[section][language]) {
      return key; // Fallback si no existe la sección o el idioma
    }
    
    // Comenzar desde la sección y el idioma actual
    let current: any = translations[section][language];
    
    // Navegar por las claves restantes
    for (const nestedKey of restKeys) {
      if (current[nestedKey] === undefined) {
        return key; // Fallback si no se encuentra la clave en algún nivel
      }
      
      current = current[nestedKey];
    }
    
    // Si el resultado final es un string, devuélvelo
    if (typeof current === 'string') {
      return current;
    }
    
    // Si llegamos a un objeto y no a un string, devolver la clave original
    return key;
  };

  const value = {
    language,
    setLanguage,
    translations,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};