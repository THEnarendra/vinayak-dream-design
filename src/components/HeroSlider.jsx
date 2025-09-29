import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowDown } from "lucide-react";
import project1 from "../assets/project1.JPG";
import project2 from "../assets/project2.JPG";
import project3 from "../assets/project3.jpeg";
import heroBg from "../assets/hero-bg.jpeg";

export default function HeroSection() {
  const slides = [project1, project2, project3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Text animation variants
  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: `url(${heroBg})`, zIndex: 0 }}></div>
      {slides.map((img, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 w-full h-full bg-center bg-cover ${index === current ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${img})`, zIndex: 1 }}
          initial={false}
          animate={{ opacity: index === current ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        ></motion.div>
      ))}
      
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-20 font-sans pt-16 pb-24">
        {/* Logo/Brand Name */}
        <motion.div 
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {/* <h2 className="text-xl sm:text-2xl md:text-3xl text-lightBeige font-light tracking-wider">Vinayak Dream Design</h2> */}
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl mx-auto text-white leading-snug"
        >
          <div className="overflow-hidden py-1">
            <motion.span 
              className="block text-white font-medium"
              custom={0}
              variants={textReveal}
              initial="hidden"
              animate="visible"
            >
              Crafting
            </motion.span>
          </div>
          <div className="overflow-hidden py-1">
            <motion.span 
              className="block text-primaryBrown font-semibold"
              custom={1}
              variants={textReveal}
              initial="hidden"
              animate="visible"
            >
              Inspiring Spaces.
            </motion.span>
          </div>
          <div className="overflow-hidden py-1">
            <motion.span 
              className="block text-white font-medium"
              custom={2}
              variants={textReveal}
              initial="hidden"
              animate="visible"
            >
              Transforming
            </motion.span>
          </div>
          <div className="overflow-hidden py-1">
            <motion.span 
              className="block text-lightBeige font-semibold"
              custom={3}
              variants={textReveal}
              initial="hidden"
              animate="visible"
            >
              Dreams into Reality.
            </motion.span>
          </div>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6 sm:mb-8 mt-4 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Premier architectural firm creating innovative designs that stand the test of time
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 justify-center w-full sm:w-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.a 
            href="tel:+919660225994" 
            className="px-5 py-3 sm:px-6 sm:py-3 bg-primaryBrown text-white font-medium rounded-md flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all duration-300 shadow-lg group"
            whileHover={{ scale: 1.03, y: -2 }} 
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" /> 
            <span className="text-sm sm:text-base">Call Us Now</span>
          </motion.a>
          
          <motion.a 
            href="https://wa.me/919660225994" 
            target="_blank" 
            rel="noreferrer" 
            className="px-5 py-3 sm:px-6 sm:py-3 bg-white text-primaryBrown font-medium rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-300 shadow-lg group"
            whileHover={{ scale: 1.03, y: -2 }} 
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" /> 
            <span className="text-sm sm:text-base">WhatsApp Us</span>
          </motion.a>
        </motion.div>

        {/* Scroll indicator - positioned with more space */}
        <motion.div 
          className="absolute bottom-8 sm:bottom-10 flex flex-col items-center text-white" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <motion.span 
            className="text-xs tracking-wide mb-2"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            SCROLL TO EXPLORE
          </motion.span>
          <motion.div 
            animate={{ y: [0, 6, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 sm:bottom-6 w-full flex justify-center gap-2 z-20">
        {slides.map((_, idx) => (
          <motion.button
            key={idx}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${idx === current ? "bg-primaryBrown scale-110" : "bg-white/50"}`}
            onClick={() => setCurrent(idx)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <motion.div 
        className="absolute top-6 left-6 sm:top-10 sm:left-10 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primaryBrown opacity-20"
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-16 right-6 sm:bottom-20 sm:right-10 w-4 h-4 sm:w-6 sm:h-6 rounded-lg bg-lightBeige opacity-20"
        animate={{
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}