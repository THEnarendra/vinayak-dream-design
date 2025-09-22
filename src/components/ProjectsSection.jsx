// src/components/ProjectsSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectsSection() {
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
    <section className="relative w-full py-20 bg-white flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMSI+PHBhdGggZD0iTTAgMGw2MCA2ME02MCAwTDAgNjAiLz48L2c+PC9zdmc+')]"></div>
      </div>

      {/* Section Heading with Enhanced Animation */}
      <motion.div 
        className="text-center mb-16 z-10 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Subtle Top Accent */}
        <motion.div 
          className="w-16 h-1 bg-primaryBrown mx-auto mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Animated Main Heading - FIXED */}
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-primaryBrown mb-4"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            {titleLetters.map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
        </motion.h2>

        {/* Animated Underline */}
        <motion.div 
          className="w-24 h-1 bg-primaryBrown mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        {/* Animated Subheading */}
        <motion.p 
          className="mt-6 text-lg md:text-xl text-darkGray max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Explore our portfolio of exceptional architectural designs and transformations
        </motion.p>
      </motion.div>

      {/* Video Gallery */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-4 z-10">
        {videos.map((video, idx) => (
          <motion.div
            key={video.id}
            className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl border border-gray-100"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3 }
            }}
          >
            {/* YouTube Video Player */}
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
            
            {/* Video Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-primaryBrown mb-2">{video.title}</h3>
              <p className="text-darkGray">{video.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Animated Call to Action Button */}
      <motion.div 
        className="mt-16 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
      >
        <button className="px-8 py-3 bg-primaryBrown text-white rounded-md font-medium hover:bg-opacity-90 transition-colors duration-300 shadow-md">
          View More Projects
        </button>
      </motion.div>
    </section>
  );
}