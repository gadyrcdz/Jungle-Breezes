'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguajeContext';
import './Navbar.css';

// Ancho mínimo en px donde el navbar completo cabe bien
const NAVBAR_BREAKPOINT = 1024;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const checkScreen = () => {
      const mobile = window.innerWidth < NAVBAR_BREAKPOINT;
      setIsMobile(mobile);
      if (mobile) {
        setIsHovered(false);
        setIsScrolled(false);
      }
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) return;
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setIsMenuOpen(false);
        setIsHovered(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es');

  const navLinks = [
    { href: '/', label: t('navbar.home') },
    { href: '/servicios', label: t('navbar.services') },
    { href: '/sobre-nosotros', label: t('navbar.aboutUs') },
    { href: '/contacto', label: t('navbar.contact') },
  ];

  // ── MODO MÓVIL / PANTALLA PEQUEÑA ──────────────────────────
  if (isMobile) {
    return (
      <div className="floating-menu-mobile">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="floating-hamburger"
          aria-label="Menu"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>

        {isMenuOpen && (
          <div className="floating-dropdown">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="floating-dropdown-link">
                {link.label}
              </Link>
            ))}
            <div className="floating-dropdown-divider" />
            <button
              onClick={() => { toggleLanguage(); setIsMenuOpen(false); }}
              className="floating-dropdown-lang"
            >
              <Image
                src={language === 'es' ? '/images/flags/usa.svg' : '/images/flags/spain.svg'}
                alt={language === 'es' ? 'English' : 'Español'}
                width={20} height={14} className="flag-icon"
              />
              <span>{t('navbar.language')}</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  // ── MODO DESKTOP ────────────────────────────────────────────
  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-hidden' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-brand">
            <div className="navbar-logo">
              <Image src="/images/logos/logo1.jpg" alt="Logo de la empresa"
                fill style={{ objectFit: 'cover' }} className="rounded-full" />
            </div>
            <Link href="/" className="navbar-title">{t('navbar.name')}</Link>
          </div>

          <div className="navbar-menu-desktop">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="navbar-link">
                {link.label}
              </Link>
            ))}
            <button onClick={toggleLanguage} className="navbar-language-btn"
              title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}>
              <Image
                src={language === 'es' ? '/images/flags/usa.svg' : '/images/flags/spain.svg'}
                alt={language === 'es' ? 'English' : 'Español'}
                width={24} height={16} className="flag-icon"
              />
              <span>{t('navbar.language')}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hamburger flotantel */}
      {isScrolled && (
        <div
          className="floating-hover-zone"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button className="floating-hamburger" aria-label="Menu">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className={`floating-expanded-desktop ${isHovered ? 'visible' : ''}`}>
            <div className="floating-expanded-inner">
              <div className="floating-expanded-brand">
                <div className="floating-expanded-logo">
                  <Image src="/images/logos/logo1.jpg" alt="Logo"
                    fill style={{ objectFit: 'cover' }} className="rounded-full" />
                </div>
                <Link href="/" className="floating-expanded-title">{t('navbar.name')}</Link>
              </div>

              <div className="floating-expanded-links">
                {navLinks.map(link => (
                  <Link key={link.href} href={link.href} className="floating-expanded-link">
                    {link.label}
                  </Link>
                ))}
              </div>

              <button onClick={toggleLanguage} className="floating-expanded-lang">
                <Image
                  src={language === 'es' ? '/images/flags/usa.svg' : '/images/flags/spain.svg'}
                  alt={language === 'es' ? 'English' : 'Español'}
                  width={24} height={16} className="flag-icon"
                />
                <span>{t('navbar.language')}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;