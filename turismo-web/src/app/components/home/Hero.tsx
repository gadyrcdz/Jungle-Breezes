// src/components/home/Hero.tsx
import Link from 'next/link';

const Hero = () => {
  return (
    
    <div className="relative h-screen">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hero/adventure-hero.jpg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      
      {/* Contenido del hero */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Aventura y Adrenalina en Plena Naturaleza
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Descubre la emoción del canopy, los puentes colgantes y el paintball 
            en un entorno natural incomparable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/activities" 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
            >
              Ver Actividades
            </Link>
            <Link 
              href="/book" 
              className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
            >
              Reservar Ahora
            </Link>
          </div>
        </div>
      </div>
      
      {/* Flecha de scroll down */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;