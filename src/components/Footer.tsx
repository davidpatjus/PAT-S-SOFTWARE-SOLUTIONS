'use client'
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className='py-8 bg-gradient-to-tl from-purple-950/80 via-gray-950 to-black text-white/80 border-t border-white/20'>
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-6">

          <div className="text-center text-sm md:text-base xl:text-lg">
            © 2024 PAT&apos;S Software Solutions, Inc. All rights reserved.
          </div>

          {/* Redes Sociales */}
          <ul className="flex justify-center gap-4">
            <motion.li whileHover={{ scale: 1.2 }}>
              <a href="https://github.com/davidpatjus" target="_blank" rel="noopener noreferrer">
                <FaGithub  className="text-2xl hover:text-purple-400 transition-all" />
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }}>
              <a href="https://www.instagram.com/david.juspian/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-pink-500 transition-all" />
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }}>
              <a href="https://www.linkedin.com/in/david-esteban-patino-juspian-561861317/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin  className="text-2xl hover:text-blue-500 transition-all" />
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }}>
              <a href="https://api.whatsapp.com/send?phone=573146200770&text=%F0%9F%91%BE%20Hi%20David%2C%20how%20are%20you%3F%20I%20am%20interested%20in%20your%20services.%20%F0%9F%91%BE%20" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-2xl hover:text-green-500 transition-all" />
              </a>
            </motion.li>
          </ul>

        </div>
      </div>
    </footer>
  );
};
