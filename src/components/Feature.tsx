'use client'
import { useEffect, useRef } from "react";
import PriceImage from "../assets/images/dollar.png";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import  CheckIcon  from "../assets/images/check.png"; 
import Image from "next/image";


function Feature({
	title,
	description,
	price,
	features
}: {
  title: string;
  description: string;
	price: string;
	features: string[];
}) {

	const offsetX = useMotionValue(0);
	const offsetY = useMotionValue(0);

	const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

	const border = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const updateMousePosition = (e: MouseEvent) =>{
			if (!border.current) return;
			const borderRect = border.current?.getBoundingClientRect();
			offsetX.set(e.x - borderRect.x);
			offsetY.set(e.y - borderRect.y);
		}

		window.addEventListener('mousemove', updateMousePosition);
		return () => {
			window.removeEventListener('mousemove', updateMousePosition);
		}
	}, [offsetX, offsetY]);

  return (
    <div className="border h-max border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative">
      
			<motion.div 
      className="absolute inset-0 border-2 border-purple-400 rounded-xl" 
			style={{ 
			WebkitMaskImage: maskImage,
			maskImage: maskImage 
			}}
			ref={border}
			>
      </motion.div>
      
			<div className="inline-flex h-14 w-14 lg:h-16 lg:w-16 bg-white text-black justify-center items-center rounded-lg">
        <Image src={PriceImage} alt="PriceImage" className="px-2"  />
      </div>
      
			<h3 className="mt-6 font-bold text-4xl">{title}</h3>
    	<p className="mt-2 text-white/70 text-sm md:text-base xl:text-lg py-1">{description}</p>
    	<p className="mt-2 text-2xl font-bold">{price}</p>
    	
      {/* Lista de características con iconos y efectos */}
      <ul className="mt-4 space-y-2 text-left">
        {features.map((feature, index) => (
          <li 
            key={index} 
            className="flex items-center text-sm md:text-base xl:text-lg my-2 xl:my-4 text-white/70 transition-transform hover:scale-105 hover:text-white mx-auto"
          >
            {/* Icono de check */}
            <Image src={CheckIcon} alt="check" className="h-5 w-5 text-purple-500 mr-2 invert" />
            {feature}
          </li>
        ))}
      </ul>

    	<button className="mt-6 bg-purple-500 text-white py-2 px-4 rounded-lg transition-transform hover:scale-105">
      	Comprar
    	</button>
    
		</div>
  );
}

export default Feature;
