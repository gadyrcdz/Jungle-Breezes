// src/app/components/common/Navbar.tsx
'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguajeContext';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo y nombre de la empresa */}
        <div className="navbar-brand">
          <div className="navbar-logo">
            <Image 
              src="/images/logos/logo1.jpg" 
              alt="Logo de la empresa" 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-full"
            />
          </div>
          <Link href="/" className="navbar-title">
            {t('navbar.name')}
          </Link>
        </div>
        
        {/* Menú desktop */}
        <div className="navbar-menu-desktop">
          <Link href="/" className="navbar-link">
            {t('navbar.home')}
          </Link>
          <Link href="/servicios" className="navbar-link">
            {t('navbar.services')}
          </Link>
          <Link href="/sobre-nosotros" className="navbar-link">
            {t('navbar.aboutUs')}
          </Link>
          <Link href="/contacto" className="navbar-link">
            {t('navbar.contact')}
          </Link>
          
          {/* Selector de idioma */}
          <button 
            onClick={toggleLanguage}
            className="navbar-language-btn"
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <Image 
              src={language === 'es' ? '/images/flags/usa.svg' : '/images/flags/spain.svg'} 
              alt={language === 'es' ? 'English' : 'Español'} 
              width={24}
              height={16}
              className="flag-icon"
            />
            <span>{t('navbar.language')}</span>
          </button>
        </div>
        
        {/* Botón hamburguesa */}
        <div className="navbar-mobile-controls">
          {/* Selector de idioma móvil */}
          <button 
            onClick={toggleLanguage}
            className="navbar-language-btn-mobile"
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <Image 
              src={language === 'es' ? '/images/flags/usa.svg' : '/images/flags/spain.svg'} 
              alt={language === 'es' ? 'English' : 'Español'} 
              width={20}
              height={14}
              className="flag-icon"
            />
            <span>{t('navbar.language')}</span>
          </button>
          
          <button 
            onClick={toggleMenu} 
            className="navbar-hamburger"
            aria-label="Menu"
          >
            <svg className="navbar-hamburger svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="navbar-menu-mobile">
          <div className="navbar-menu-mobile-container">
            <div className="navbar-menu-mobile-list">
              <Link 
                href="/" 
                onClick={() => setIsMenuOpen(false)}
                className="navbar-link-mobile"
              >
                {t('navbar.home')}
              </Link>
              <Link 
                href="/servicios" 
                onClick={() => setIsMenuOpen(false)}
                className="navbar-link-mobile"
              >
                {t('navbar.services')}
              </Link>
              <Link 
                href="/sobre-nosotros" 
                onClick={() => setIsMenuOpen(false)}
                className="navbar-link-mobile"
              >
                {t('navbar.aboutUs')}
              </Link>
              <Link 
                href="/contacto" 
                onClick={() => setIsMenuOpen(false)}
                className="navbar-link-mobile"
              >
                {t('navbar.contact')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;