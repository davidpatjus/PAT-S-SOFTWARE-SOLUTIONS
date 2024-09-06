"use client"
import Image from "next/image";
import ArrowWIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import { motion } from 'framer-motion'
import "./gradients.css";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="bg-black text-white custom-bg-gradient py-[72px] sm:py-24 xl:py-36 relative overflow-clip overflow-x-hidden">
      <div className="absolute h-[375px] w-[1000px] sm:w-[1536px] sm:h[768px] lg:w-[3165px] lg:h-[700px] xl:h-[500px] lg:mt-8 xl:mt-4 rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] circle-gradient top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
        <div className="container relative">

          <div className="flex items-center justify-center">
            <Link
              href="#Services"
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
            </Link>
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
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={'https://api.whatsapp.com/send?phone=573146200770&text=%F0%9F%91%BE%20Hi%20David%2C%20how%20are%20you%3F%20I%20am%20interested%20in%20your%20services.%20%F0%9F%91%BE%20'} 
            className="border-2 border-purple-500/70 bg-gradient-to-r from-purple-600 to-purple-500 text-white py-3 px-5 rounded-lg font-medium hover:scale-105 transition-transform"
          >
            ¡Trabaja con Nosotros!
          </Link>
          </div>

        </div>
    </div>
  );
};
