import Image from 'next/image';
import logoImage from '@/assets/images/logosaas.png';
import MenuIcon from '@/assets/icons/menu.svg';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          
          {/* Logo and Branding */}
          <div className="relative flex items-center">
            {/* Gradient Blur Behind Logo */}
            <div className="absolute w-full top-2 bottom-0 bg-custom-gradient blur-md"></div>
            <Image src={logoImage} alt="Nav Logo" className="h-12 w-12 relative" />
            <h2 className="text-purple-500/80 font-bold text-sm sm:text-lg md:text-xl px-2">
              PAT&apos;S SOFTWARE SOLUTIONS
            </h2>
          </div>

          {/* Mobile Menu Icon */}
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </div>

          {/* Navigation Links */}
          <nav className="gap-6 items-center hidden sm:flex">
            <Link href="#Services" className="text-opacity-60 text-white hover:text-opacity-100 transition">
              Servicios
            </Link>
            <Link href="#Planes" className="text-opacity-60 text-white hover:text-opacity-100 transition">
              Planes
            </Link>
            <Link href="#FAQ" className="text-opacity-60 text-white hover:text-opacity-100 transition">
              Preguntas Frecuentes
            </Link>
            <Link href="#Contact" className="text-opacity-60 text-white hover:text-opacity-100 transition">
              Contacto
            </Link>
            <Link  
              className="bg-white py-2 px-4 rounded-lg hover:scale-105 hover:bg-purple-500 hover:text-white transition" 
              href={'https://api.whatsapp.com/send?phone=573146200770&text=%F0%9F%91%BE%20Hi%20David%2C%20how%20are%20you%3F%20I%20am%20interested%20in%20your%20services.%20%F0%9F%91%BE%20'} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Solicita una Consultoría
            </Link>
          </nav>

        </div>
      </div>
    </div>
  );
};
