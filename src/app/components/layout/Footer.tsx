// src/components/layout/Footer.tsx
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la empresa */}
          <div>
            <h3 className="text-xl font-bold mb-4">Jungle Breezes</h3>
            <p className="mb-4">Vive la aventura en la naturaleza con nuestras emocionantes actividades de canopy, puentes colgantes y paintball.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                <Instagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/activities/canopy" className="hover:text-green-400">Canopy</Link></li>
              <li><Link href="/activities/bridges" className="hover:text-green-400">Puentes Colgantes</Link></li>
              <li><Link href="/activities/paintball" className="hover:text-green-400">Paintball</Link></li>
              <li><Link href="/restaurant" className="hover:text-green-400">Restaurante</Link></li>
              <li><Link href="/book" className="hover:text-green-400">Reservaciones</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>+123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>info@junglebreezes.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1" />
                <span>Bosque Nacional, Carretera a las Montañas, Km 15, Costa Rica</span>
              </li>
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horarios</h3>
            <ul className="space-y-2">
              <li>Lunes - Viernes: 8:00 AM - 5:00 PM</li>
              <li>Sábado - Domingo: 7:00 AM - 6:00 PM</li>
              <li className="font-semibold mt-4">Restaurante</li>
              <li>Todos los días: 11:00 AM - 8:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Jungle Breezes. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;