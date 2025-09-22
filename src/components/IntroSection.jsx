// src/components/IntroSection.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function IntroSection() {
  // Counter states
  const [projects, setProjects] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    const projectsTarget = 1400;
    const experienceTarget = 24;

    let pCounter = 0, eCounter = 0;

    const interval = setInterval(() => {
      if (pCounter < projectsTarget) { 
        pCounter += projectsTarget > 1000 ? 20 : 2; 
        setProjects(pCounter); 
      }
      if (eCounter < experienceTarget) { 
        eCounter += 1; 
        setExperience(eCounter); 
      }

      if (pCounter >= projectsTarget && eCounter >= experienceTarget) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  // Cities for the scrolling marquee
  const cities = [
    "Vaishali Nagar", "Mansarovar", "Jagatpura", "Civil Lines", "Dhawas", "Kalwar"
  ];

  return (
    <section className="relative w-full py-16 bg-white flex flex-col items-center justify-center overflow-hidden">
      {/* Stats Section */}
      <div className="max-w-7xl w-full flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24 text-center mb-20">
        {/* Projects */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <span className="text-7xl md:text-8xl font-bold text-primaryBrown">{projects}+</span>
            <div className="absolute -top-4 -right-6 text-lg font-normal text-primaryBrown">+</div>
          </div>
          <div className="mt-4 text-lg md:text-xl font-light text-darkGray tracking-widest uppercase">
            <div>Executed</div>
            <div>over</div>
            <div className="mt-2 font-medium">Projects</div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-7xl md:text-8xl font-bold text-primaryBrown">{experience}+</span>
          <div className="mt-4 text-lg md:text-xl font-light text-darkGray tracking-widest uppercase">
            <div>Years</div>
            <div className="mt-2 font-medium">Experience</div>
          </div>
        </motion.div>
      </div>

      {/* Scrolling Cities Marquee */}
      <div className="w-full overflow-hidden py-6 border-t border-b border-gray-200">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear"
            }
          }}
        >
          {[...cities, ...cities].map((city, index) => (
            <div key={index} className="inline-block mx-8 text-xl md:text-2xl font-light text-primaryBrown tracking-wider">
              {city}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}