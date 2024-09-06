import { FaArrowRight } from 'react-icons/fa';
import './gradients.css'
import Link from 'next/link';

export const Banner = () => {
  return (
    <div className="py-3 text-center bg-rainbow-gradient">
      <div className="container">
        <p className="font-medium text-lg text-black">
          <span className="hidden sm:inline">
            Potencia la eficiencia en tu MARCA / NEGOCIO -{" "}
          </span>
          <Link 
            href="https://api.whatsapp.com/send?phone=573146200770&text=%F0%9F%91%BE%20Hi%20David%2C%20how%20are%20you%3F%20I%20am%20interested%20in%20your%20services.%20%F0%9F%91%BE%20" 
            className="underline underline-offset-4 font-bold text-black hover:text-purple-600 transition inline-flex items-center gap-1"
            >
            AGENDA TU CITA 
            <FaArrowRight className="h-5 w-5" />
          </Link>
        </p>
      </div>
    </div>
  );
};
