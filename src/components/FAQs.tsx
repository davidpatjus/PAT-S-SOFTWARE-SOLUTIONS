"use client"
import { useState } from 'react';
import PlusIcon from '../assets/icons/plus.svg';
import MinusIcon from '../assets/icons/minus.svg';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  {
    question: "¿Qué necesito para comenzar con mi proyecto?",
    answer:
      "Para comenzar, simplemente necesitamos algunos detalles sobre tu negocio, objetivos y preferencias de diseño. Luego, trabajaremos contigo para desarrollar un plan detallado y asegurar que el resultado final sea exactamente lo que necesitas.",
  },
  {
    question: "¿Cómo gestionan los plazos de entrega?",
    answer:
      "Nuestros plazos de entrega varían según la complejidad del proyecto. Para una landing page básica, el tiempo estimado es de 1-2 semanas. Proyectos más personalizados pueden tardar entre 4 a 8 semanas.",
  },
  {
    question: "¿Cómo se maneja la propiedad del sitio web una vez completado el proyecto?",
    answer:
      "Una vez finalizado el proyecto y realizado el pago completo, serás el propietario total de tu sitio web, incluido el código fuente, imágenes y contenido que hayamos desarrollado para ti.",
  },
  {
    question: "¿Puedo solicitar modificaciones después del lanzamiento?",
    answer:
      "Sí, ofrecemos soporte técnico continuo después del lanzamiento para solucionar problemas, realizar actualizaciones y mejorar el rendimiento de tu sitio web. Dependiendo del plan que elijas, el soporte puede incluir desde correcciones menores hasta nuevas implementaciones.",
  },
  {
    question: "¿Mi sitio web será compatible con dispositivos móviles?",
    answer:
      "Sí, La mayoría de nuestros desarrollos son 100% responsivos, lo que garantiza que tu sitio web se vea y funcione perfectamente en cualquier dispositivo, desde teléfonos móviles hasta pantallas grandes (dependiendo del plan).",
  },
  {
    question: "¿Puedo integrar mi sitio web con otras plataformas o herramientas?",
    answer:
      "Sí, podemos integrar tu sitio web con una amplia variedad de herramientas y plataformas como CRM, sistemas de pago, herramientas de marketing, y más. Cuéntanos qué necesitas y nos encargaremos de hacerlo posible.",
  },
  {
    question: "¿Qué tan escalable es la solución que ofrecen?",
    answer:
      "Nuestras soluciones están diseñadas para ser escalables, lo que significa que tu sitio web puede crecer y adaptarse a nuevas funcionalidades o un mayor tráfico sin problemas. Te ofrecemos una infraestructura que puede evolucionar junto con tu negocio.",
  },
  {
    question: "¿Cómo gestionan la privacidad y la protección de datos?",
    answer:
      "Cumplimos con las normativas más estrictas en términos de protección de datos. Implementamos medidas de seguridad avanzadas para proteger toda la información personal y de usuario que se recopile en tu sitio web.",
  },
];

const AccordionItem = ({ 
  question, 
  answer,
}: { 
  question: string; 
  answer: string;
} ) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      aria-expanded={isOpen}
      className='py-6 border-b border-white/30 cursor-pointer transition-all duration-300' 
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className='flex items-center justify-between'>
        <span className='flex-1 text-xl md:text-2xl xl:text-3xl font-semibold'>{question}</span>
        <motion.div 
          initial={{ rotate: 0 }} 
          animate={{ rotate: isOpen ? 180 : 0 }} 
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
              marginTop: '16px',
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <p className='text-white/70 mt-2 text-base md:text-lg xl:text-xl'>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export const FAQs = () => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedItems = showAll ? items : items.slice(0, 4);

  return (
    <div id='FAQ' className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-16 sm:py-24">
      <div className="container mx-auto px-6 sm:px-8">
        
        <h2 className='text-center text-6xl sm:text-7xl font-bold tracking-tight'>
          Preguntas Frecuentes
        </h2>
        
        <p className='mt-4 max-w-2xl px-2 xl:max-w-4xl mx-auto text-center text-white/70 text-xl md:text-2xl xl:text-3xl'>
          Aquí tienes algunas de las preguntas más comunes que recibimos sobre nuestros servicios personalizados. Si tienes más dudas, ¡no dudes en contactarnos!
        </p>

        <div className='mt-10 max-w-2xl mx-auto'>
          {displayedItems.map(({ question, answer }, index) => (
            <AccordionItem key={index} question={question} answer={answer} />
          ))}
        </div>
        
        {items.length > 4 && (
          <div className='mt-6 text-center'>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='text-lg font-bold text-white/90 bg-purple-500 py-2 px-6 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300'
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Mostrar menos' : 'Mostrar más'}
          </motion.button>
          </div>
        )}
      
      </div>
    </div>
  )
};