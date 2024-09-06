'use client'
import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {

  const appImage = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ['start end', 'end end'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [.5, 1])

  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  const titleOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <div className="container">
        
      <motion.h2
        className="text-center text-6xl sm:text-7xl font-bold tracking-tighter"
        style={{ opacity: titleOpacity }}
      >
        Diseños Modernos y Inteligentes
      </motion.h2>
        
        <div className="max-w-xl xl:max-w-5xl mx-auto">
          <p className="text-xl md:text-2xl xl:text-3xl text-center text-white/70 mt-5 xl:mt-10">
          Dale vida a tus ideas con una <span className="text-purple-500"> interfaz diseñada para potenciar tu negocio.</span> Desde la personalización hasta la optimización, nuestra plataforma hace que crear y gestionar tu presencia digital sea fácil y eficiente.          
          </p>
        </div>
      
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            scale: scale,
            transformPerspective: "800px",
          }}
        >
          <Image 
            src={appScreen}
            alt="The Product Screenshot" 
            className="mt-14 mx-auto w-full max-w-sm sm:max-w-lg md:max-w-5xl xl:max-w-7xl"
            ref={appImage}
          />
        </motion.div>

      </div>
    </div>
  )
};
