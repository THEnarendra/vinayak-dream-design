// src/components/PortfolioGrid.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const portfolioItems = [
    {
      id: 1,
      title: "Modern Villa Design",
      category: "residential",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Luxury residential villa with sustainable design elements"
    },
    {
      id: 2,
      title: "Commercial Complex",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Mixed-use development in urban center"
    },
    {
      id: 3,
      title: "Heritage Restoration",
      category: "institutional",
      image: "https://images.unsplash.com/photo-1542310503-ff8da9c02372?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Historic building preservation and adaptive reuse"
    },
    {
      id: 4,
      title: "Interior Transformation",
      category: "residential",
      image: "https://images.unsplash.com/photo-1540638349517-3abd5afc5847?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Complete home renovation with custom finishes"
    },
    {
      id: 5,
      title: "Office Tower",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "30-story commercial office building"
    },
    {
      id: 6,
      title: "Community Center",
      category: "institutional",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Public space for community gatherings and events"
    }
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "institutional", name: "Institutional" }
  ];

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="relative w-full py-20 bg-gray-50 flex flex-col items-center justify-center overflow-hidden">
      {/* New Distinct Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primaryBrown to-lightBeige"></div>
      </div>
      
      {/* Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blueprint-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#blueprint-grid)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-16 h-16 rounded-lg bg-primaryBrown opacity-5"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-lightBeige opacity-5"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-darkGray opacity-5"
          animate={{
            y: [0, 10, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Section Heading */}
      <motion.div 
        className="text-center mb-16 z-10 w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="w-16 h-1 bg-primaryBrown mx-auto mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        
        <h2 className="text-4xl md:text-5xl font-bold text-primaryBrown mb-4">
          Featured Portfolio
        </h2>
        
        <motion.div 
          className="w-24 h-1 bg-primaryBrown mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        
        <p className="mt-6 text-lg md:text-xl text-darkGray max-w-2xl mx-auto px-4">
          A curated selection of our most distinguished architectural projects
        </p>
      </motion.div>

      {/* Category Filters */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-12 z-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-primaryBrown text-white shadow-md"
                : "bg-white text-darkGray shadow-sm hover:bg-primaryBrown hover:text-white hover:shadow-md"
            }`}
          >
            {category.name}
          </button>
        ))}
      </motion.div>

      {/* Portfolio Grid */}
      <motion.div 
        className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="group relative overflow-hidden rounded-lg cursor-pointer bg-white shadow-md hover:shadow-xl transition-all duration-300"
            whileHover="hover"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-t-lg h-80">
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-primaryBrown to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end"
                initial={false}
              >
                {/* Content that appears on hover */}
                <motion.div 
                  className="p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500"
                  initial={false}
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.description}
                  </p>
                  <motion.button 
                    className="mt-4 px-4 py-2 bg-white text-primaryBrown text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom Info Bar (Always visible) */}
            <div className="p-4 bg-white">
              <h3 className="text-lg font-medium text-darkGray">{item.title}</h3>
              <p className="text-sm text-gray-500 capitalize">{item.category}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="mt-16 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <button className="px-8 py-3 bg-primaryBrown text-white rounded-md font-medium hover:bg-opacity-90 transition-colors duration-300 shadow-md flex items-center group">
          Explore Full Portfolio
          <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </motion.div>
    </section>
  );
}