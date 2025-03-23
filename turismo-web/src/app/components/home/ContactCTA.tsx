// src/components/home/ContactCTA.tsx
import Link from 'next/link';

const ContactCTA = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para vivir la aventura?</h2>
          <p className="text-xl mb-8">
            Contacta con nosotros para reservar tu próxima experiencia o resolver cualquier duda que tengas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Reservaciones</h3>
              <p className="mb-4">Asegura tu lugar y disfruta de la mejor aventura con amigos y familia.</p>
              <Link 
                href="/book" 
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition-colors"
              >
                Reservar Ahora
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Contáctanos</h3>
              <p className="mb-4">¿Tienes preguntas? Nuestro equipo está listo para ayudarte.</p>
              <Link 
                href="/contact" 
                className="inline-block bg-white hover:bg-gray-100 text-green-800 font-bold py-2 px-6 rounded-full transition-colors"
              >
                Contactar
              </Link>
            </div>
          </div>
          
          <div className="text-lg">
            <p>¿Prefieres llamarnos? Estamos disponibles en el</p>
            <p className="text-2xl font-bold mt-2">+123 456 7890</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;