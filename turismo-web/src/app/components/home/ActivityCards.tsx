// src/components/home/ActivityCards.tsx
import Link from 'next/link';
import Image from 'next/image';

const activities = [
  {
    id: 'canopy',
    title: 'Canopy',
    description: 'Deslízate entre los árboles y siente la adrenalina de volar sobre el bosque a gran velocidad con nuestras tirolesas.',
    image: '/images/activities/canopy.jpg',
    link: '/activities/canopy'
  },
  {
    id: 'bridges',
    title: 'Puentes Colgantes',
    description: 'Recorre nuestros puentes suspendidos y admira la fauna y flora desde las alturas en un recorrido inolvidable.',
    image: '/images/activities/bridges.jpg',
    link: '/activities/bridges'
  },
  {
    id: 'paintball',
    title: 'Paintball',
    description: 'Diviértete con amigos o familiares en nuestros campos de paintball diseñados para una experiencia única.',
    image: '/images/activities/paintball.jpg',
    link: '/activities/paintball'
  },
  {
    id: 'restaurant',
    title: 'Restaurante',
    description: 'Disfruta de la mejor gastronomía local en nuestro restaurante con vistas panorámicas al bosque.',
    image: '/images/restaurant/restaurant.jpg',
    link: '/restaurant'
  }
];

const ActivityCards = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Nuestras Actividades</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Descubre todas las experiencias que tenemos preparadas para ti y tu familia en Jungle Breezes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity) => (
            <Link key={activity.id} href={activity.link} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                <div className="relative h-64">
                  {/* Usa un div con estilo en lugar de Image hasta que tengas las imágenes */}
                  <div 
                    className="w-full h-full bg-gray-300"
                    style={{
                      backgroundImage: `url('${activity.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                  {/* Cuando tengas las imágenes, usa esto: 
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                  */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-2">{activity.title}</h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  <div className="text-green-600 font-semibold flex items-center group-hover:text-green-800">
                    Saber más
                    <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityCards;