"use client"
import Image from "next/image";
import ArrowWIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import { motion } from 'framer-motion'
import "./gradients.css";

export const Hero = () => {
  return (
    <div className="bg-black text-white custom-bg-gradient py-[72px] sm:py-24 xl:py-36 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] circle-gradient top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
        <div className="container relative">

          <div className="flex items-center justify-center">
            <a
              href="#"
              className="text-sm sm:text-base flex sm:inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
            >
              <span className="text-gradient text-transparent bg-clip-text [-webkit-background-clip:text]">
                {" "}
                SOFTWARE A TU NECESIDAD{" "}
              </span>
              <span className="inline-flex items-center gap-1">
                <span>¿como te puede beneficiar?</span>
                <ArrowWIcon />
              </span>
            </a>
          </div>

          <div className="flex justify-center mt-8">
            <div className="inline-flex relative">
              
              <h1 className="text-6xl sm:text-7xl font-bold tracking-tighter text-center inline-flex">
                Soluciones Tecnológicas <br />
                A otro nivel...
              </h1>
             
              <motion.div
                drag
                dragSnapToOrigin 
                className="absolute right-[596px] top-[108px] hidden sm:inline"
              >
                <Image 
                  src={cursorImage} 
                  alt="" 
                  height="200" 
                  width="200" 
                  className="max-w-none"
                  draggable="false" 
                />
              </motion.div>
              
              <motion.div
                drag
                dragSnapToOrigin
                className="absolute top-[76px] left-[618px] hidden sm:inline"
              >
              <Image 
                src={messageImage} 
                alt="" 
                height="200" 
                width="200" 
                className="max-w-none" 
                draggable="false"
              />
              </motion.div>
            
            </div>
          </div>

          <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            <span className="text-purple-400">Creamos</span> aplicaciones personalizadas que impulsan el crecimiento y potencial de tu negocio.
          </p>
          </div>

          <div className="flex justify-center mt-8">
          <button className="border-2 border-purple-500/70 bg-gradient-to-r from-purple-600 to-purple-500 text-white py-3 px-5 rounded-lg font-medium hover:scale-105 transition-transform">
            ¡Trabaja con Nosotros!
          </button>
          </div>

        </div>
    </div>
  );
};
