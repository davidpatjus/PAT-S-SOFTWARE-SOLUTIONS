"use client"
import Image from "next/image";
import webDevIcon from "../assets/images/domain.png";
import consultingIcon from "../assets/images/consultant-services.png";
import mobileDevIcon from "../assets/images/app-development.png";
import supportIcon from "../assets/images/support-services.png";
import designIcon from "../assets/images/illustration.png";
import seoIcon from "../assets/images/seo.png";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import './animations.css'

const services = [
  { src: webDevIcon, alt: "Desarrollo Web", text: "Desarrollo Web" },
  { src: consultingIcon, alt: "Consultoría Técnica", text: "Consultoría Técnica" },
  { src: mobileDevIcon, alt: "Desarrollo Móvil", text: "Desarrollo Móvil" },
  { src: supportIcon, alt: "Soporte Técnico", text: "Soporte Técnico" },
  { src: designIcon, alt: "Diseño UI/UX", text: "Diseño UI/UX" },
  { src: seoIcon, alt: "SEO y Optimización", text: "SEO y Optimización" },
];

export const LogoTicker = () => {
  
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      translateX: "-50%",
      transition: {
        duration: 15,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <div id="Services" className="bg-black text-white py-[50px] sm:py-24">
      <div className="container">
        <h2 className="text-xl md:text-2xl xl:text-4xl text-center text-white/70">
          Servicios que ofrecemos para maximizar tu éxito
        </h2>
          <div className="flex overflow-hidden mt-9 md:mt-12 xl:mt-16 before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-gradient-to-r before:from-black before:to-transparent after:bg-gradient-to-l after:from-black after:to-transparent">
          <motion.div
            animate={controls}
            onMouseEnter={() => controls.stop()}  
            onMouseLeave={() => controls.start({
              translateX: "-50%",
              transition: {
                duration: 12,
                ease: "linear",
                repeat: Infinity,
              },
            })}  // Reiniciar la animación cuando se sale del hover
            className="flex mt-4 gap-10 md:gap-20 xl:gap-24 flex-none pr-16"
          >
                {services.map((service, index) => (
                  <div key={index} className="flex-none text-center service-card" aria-label={service.text}>
                    <Image
                      src={service.src}
                      alt={service.alt}
                      width={200}
                      height={200}
                      className="flex-none h-16 w-auto mx-auto sm:h-24 xl:h-28 invert py-1"
                    />
                    <p className="mt-4 text-sm md:text-lg xl:text-xl text-white/80">{service.text}</p>
                  </div>
                ))}
                {services.map((service, index) => (
                  <div key={index} className="flex-none text-center service-card" aria-label={service.text}>
                    <Image
                      src={service.src}
                      alt={service.alt}
                      width={200}
                      height={200}
                      className="flex-none h-16 w-auto mx-auto sm:h-24 xl:h-28 invert py-1"
                    />
                    <p className="mt-4 text-sm md:text-lg xl:text-xl text-white/80">{service.text}</p>
                  </div>
                ))}
            </motion.div>
        </div>
      </div>
    </div>
  )
};
