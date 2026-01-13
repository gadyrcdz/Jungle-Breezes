// src/components/layout/Footer.tsx
'use client'
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguajeContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la empresa */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.companyName')}</h3>
            <p className="mb-4">{t('footer.description')}</p>
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
            <h3 className="text-xl font-bold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link href="/activities/canopy" className="hover:text-green-400">{t('footer.canopy')}</Link></li>
              <li><Link href="/activities/bridges" className="hover:text-green-400">{t('footer.bridges')}</Link></li>
              <li><Link href="/activities/paintball" className="hover:text-green-400">{t('footer.paintball')}</Link></li>
              <li><Link href="/restaurant" className="hover:text-green-400">{t('footer.restaurant')}</Link></li>
              <li><Link href="/book" className="hover:text-green-400">{t('footer.reservations')}</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.contact')}</h3>
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
                <span>{t('footer.address')}</span>
              </li>
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.hours')}</h3>
            <ul className="space-y-2">
              <li>{t('footer.weekdays')}</li>
              <li>{t('footer.weekends')}</li>
              <li className="font-semibold mt-4">{t('footer.restaurant')}</li>
              <li>{t('footer.restaurantHours')}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} {t('footer.companyName')}. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;