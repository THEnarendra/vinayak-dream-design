// src/components/ProjectsSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ProjectsSection() {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([
    {
      id: 1,
      youtubeId: "uJQeEL5npOw", // Example video ID - replace with your actual IDs
      title: "Luxury Villa Design",
      description: "Modern architectural design with sustainable materials"
    },
    {
      id: 2,
      youtubeId: "zuUJIZZFsiA", // Example video ID - replace with your actual IDs
      title: "Commercial Complex",
      description: "Mixed-use development in urban setting"
    },
    {
      id: 3,
      youtubeId: "bcY5dDVgqeQ", // Example video ID - replace with your actual IDs
      title: "Interior Transformation",
      description: "Complete home renovation with custom finishes"
    }
  ]);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.05
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Split text into letters for animation
  const titleText = "Our Projects";
  const titleLetters = titleText.split("");

  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24 bg-primaryBrown/95 flex flex-col items-center justify-center overflow-hidden">
      {/* Enhanced Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primaryBrown/90 to-primaryBrown/80"></div>
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMSI+PHBhdGggZD0iTTAgMGw2MCA2ME02MCAwTDAgNjAiLz48L2c+PC9zdmc+')]"></div>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-10 left-5 md:left-10 w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/5"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-5 md:right-10 w-10 h-10 md:w-16 md:h-16 rounded-lg bg-white/5"
          animate={{
            y: [0, 12, 0],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/3"
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Section Heading with Consistent Line Widths */}
      <motion.div 
        className="text-center mb-12 md:mb-16 lg:mb-20 z-10 w-full px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Top Accent Line - ORIGINAL WIDTH */}
        <motion.div 
          className="w-16 h-1 bg-white mx-auto mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Animated Main Heading */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex justify-center flex-wrap">
            {titleLetters.map((letter, index) => (
              <motion.span 
                key={index} 
                variants={letterVariants}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
        </motion.h2>

        {/* Bottom Underline Line - ORIGINAL WIDTH */}
        <motion.div 
          className="w-24 h-1 bg-white mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        {/* Animated Subheading */}
        <motion.p 
          className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto px-2 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Explore our portfolio of exceptional architectural designs and transformations that bring visions to life
        </motion.p>
      </motion.div>

      {/* Enhanced Video Gallery */}
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8 z-10">
        {videos.map((video, idx) => (
          <motion.div
            key={video.id}
            className="group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl border border-gray-100"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ 
              duration: 0.6, 
              delay: idx * 0.15,
              ease: "easeOut"
            }}
            whileHover={{ 
              y: -6,
              transition: { duration: 0.3 }
            }}
          >
            {/* YouTube Video Player - ORIGINAL WORKING CODE */}
            <div className="relative pt-[56.25%] overflow-hidden"> {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.youtubeId}?modestbranding=1&rel=0`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Enhanced Video Info */}
            <div className="p-5 sm:p-6 md:p-7">
              <motion.h3 
                className="text-lg sm:text-xl md:text-2xl font-bold text-primaryBrown mb-2 md:mb-3 line-clamp-2 group-hover:text-primaryBrown/90 transition-colors duration-300"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                {video.title}
              </motion.h3>
              <p className="text-darkGray text-sm sm:text-base leading-relaxed md:leading-loose line-clamp-3">
                {video.description}
              </p>
              
              {/* View Project Indicator */}
              {/* <motion.div 
                className="flex items-center gap-2 mt-4 text-primaryBrown/70 text-sm font-medium"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1, x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <span>View Project</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.div> */}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Call to Action Section */}
      <motion.div 
        className="mt-12 md:mt-16 lg:mt-20 z-10 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.p 
          className="text-white/90 text-base md:text-lg mb-6 md:mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Ready to bring your architectural vision to life?
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          <motion.button 
            onClick={() => navigate('/projects')}
            className="px-8 py-3 bg-white text-primaryBrown rounded-md font-medium hover:bg-opacity-90 transition-colors duration-300 shadow-md flex items-center gap-3 text-sm md:text-base min-w-[200px] justify-center"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View All Projects
          </motion.button>
          
          <motion.button 
            className="px-8 py-3 bg-transparent border border-white text-white rounded-md font-medium hover:bg-white hover:text-primaryBrown transition-all duration-300 flex items-center gap-3 text-sm md:text-base min-w-[200px] justify-center"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Get Consultation
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}