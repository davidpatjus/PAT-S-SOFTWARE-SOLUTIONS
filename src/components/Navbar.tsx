'use client'
import { useState } from 'react';
import Image from 'next/image';
import logoImage from '@/assets/images/logosaas.png';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export const Navbar = () => {
  // Estado para el menú desplegable
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          {/* Logo y Branding */}
          <div className="relative flex items-center">
            <div className="absolute w-full top-2 bottom-0 bg-custom-gradient blur-md"></div>
            <Image src={logoImage} alt="Nav Logo" className="h-12 w-12 relative" />
            <h2 className="text-purple-500/80 font-bold text-sm sm:text-lg md:text-xl px-2">
              PAT&apos;S SOFTWARE SOLUTIONS
            </h2>
          </div>

          {/* Icono del menú para dispositivos móviles */}
          <div className="sm:hidden">
            <button
              aria-label="Toggle menu"
              onClick={toggleMenu}
              className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg"
            >
              {isOpen ? <AiOutlineClose className="text-white h-6 w-6" /> : <AiOutlineMenu className="text-white h-6 w-6" />}
            </button>
          </div>

          {/* Enlaces de navegación para dispositivos de escritorio */}
          <nav className="gap-6 items-center hidden sm:flex">
            <Link href="#Services" className="text-opacity-60 text-white hover:text-opacity-100 transition">Servicios</Link>
            <Link href="#Planes" className="text-opacity-60 text-white hover:text-opacity-100 transition">Planes</Link>
            <Link href="#FAQ" className="text-opacity-60 text-white hover:text-opacity-100 transition">Preguntas Frecuentes</Link>
            <Link href="#Contact" className="text-opacity-60 text-white hover:text-opacity-100 transition">Contacto</Link>
            <Link
              className="bg-white py-2 px-4 rounded-lg hover:scale-105 hover:bg-purple-500 hover:text-white transition"
              href={'https://api.whatsapp.com/send?phone=573146200770&text=%F0%9F%91%BE%20Hi%20David%2C%20how%20are%20you%3F%20I%20am%20interested%20in%20your%20services.%20%F0%9F%91%BE%20'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicita una Consultoría
            </Link>
          </nav>

          {/* Menú desplegable para móviles */}
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center gap-6 sm:hidden"
            >
              {/* Botón para cerrar el menú */}
              <button
                onClick={toggleMenu}
                aria-label="Close menu"
                className="absolute top-16 right-16 text-white text-3xl"
              >
                <AiOutlineClose />
              </button>

              <Link href="#Services" className="text-white text-lg hover:scale-105 transition-transform duration-200" onClick={toggleMenu}>Servicios</Link>
              <Link href="#Planes" className="text-white text-lg hover:scale-105 transition-transform duration-200" onClick={toggleMenu}>Planes</Link>
              <Link href="#FAQ" className="text-white text-lg hover:scale-105 transition-transform duration-200" onClick={toggleMenu}>Preguntas Frecuentes</Link>
              <Link href="#Contact" className="text-white text-lg hover:scale-105 transition-transform duration-200" onClick={toggleMenu}>Contacto</Link>
              <Link
                className="bg-white py-2 px-4 rounded-lg text-black hover:scale-105 hover:bg-purple-500 hover:text-white transition-transform duration-200"
                href={'https://api.whatsapp.com/send?phone=573146200770&text=%F0%9F%91%BE%20Hi%20David%2C%20how%20are%20you%3F%20I%20am%20interested%20in%20your%20services.%20%F0%9F%91%BE%20'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicita una Consultoría
              </Link>
            </motion.nav>
          )}
        </div>
      </div>
    </div>
  );
};
