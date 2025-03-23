// src/app/components/common/Navbar.tsx
'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-green-800 text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo y nombre de la empresa */}
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 relative">
            {/* Reemplaza "/logo.png" con la ruta correcta a tu logo */}
            <Image 
              src="/images/logos/logo1.jpg" 
              alt="Logo de la empresa" 
              layout="fill" 
              objectFit="contain"
              className="rounded-full"
            />
          </div>
          <Link href="/" className="text-2xl font-bold tracking-tight bg-gradient-to-r from-green-50 to-white bg-clip-text text-transparent hover:opacity-80 transition duration-300">
            NombreEmpresa
          </Link>
        </div>
        
        {/* Menú desktop */}
        <div className="hidden md:flex space-x-5">
          <Link href="/">
            <span className="inline-block px-4 py-2 font-medium border-2 border-green-600 hover:border-green-50 rounded-lg hover:bg-green-700 transition duration-300">
              Inicio
            </span>
          </Link>
          <Link href="/servicios">
            <span className="inline-block px-4 py-2 font-medium border-2 border-green-600 hover:border-green-50 rounded-lg hover:bg-green-700 transition duration-300">
              Servicios
            </span>
          </Link>
          <Link href="/sobre-nosotros">
            <span className="inline-block px-4 py-2 font-medium border-2 border-green-600 hover:border-green-50 rounded-lg hover:bg-green-700 transition duration-300">
              Sobre Nosotros
            </span>
          </Link>
          <Link href="/contacto">
            <span className="inline-block px-4 py-2 font-medium border-2 border-green-600 hover:border-green-50 rounded-lg hover:bg-green-700 transition duration-300">
              Contacto
            </span>
          </Link>
        </div>
        
        {/* Botón hamburguesa */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="focus:outline-none focus:ring-2 focus:ring-green-50 rounded p-1 hover:bg-green-700 transition duration-300"
            aria-label="Menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-700 border-t border-green-600">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="block py-2 px-4 border-2 border-green-600 hover:border-green-50 rounded-lg hover:bg-green-600 transition duration-300">
                  Inicio
                </span>
              </Link>
              <Link 
                href="/servicios" 
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="block py-2 px-4 border-2 border-green-600 hover:border-green-50 rounded-lg hover:bg-green-600 transition duration-300">
                  Servicios
                </span>
              </Link>
              <Link 
                href="/sobre-nosotros" 
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="block py-2 px-4 border-2 border-green-600 hover:border-green-50 rounded-lg hover:bg-green-600 transition duration-300">
                  Sobre Nosotros
                </span>
              </Link>
              <Link 
                href="/contacto" 
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="block py-2 px-4 border-2 border-green-600 hover:border-green-50 rounded-lg hover:bg-green-600 transition duration-300">
                  Contacto
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;