// src/components/PortfolioCollage.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { elevationImages } from "../assets/ProjectImages";

export default function PortfolioGrid() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const portfolioItems = [
    {
      id: 1,
      title: "Luxury Villa Design",
      type: "Residential",
      image: elevationImages.E1,
      description: "Modern architecture meets traditional elegance"
    },
    {
      id: 2,
      title: "Corporate Hub",
      type: "Commercial Building",
      image: elevationImages.E2,
      description: "Innovative workspace design for tech companies"
    },
    {
      id: 3,
      title: "Small Townhouse",
      type: "Residential",
      image: elevationImages.E3,
      description: "Efficient and stylish urban living solution"
    },
    {
      id: 4,
      title: "Urban Apartments",
      type: "Residential",
      image: elevationImages.E4,
      description: "Contemporary living in the heart of the city"
    },
    {
      id: 5,
      title: "Big Apartments",
      type: "Residential",
      image: elevationImages.E5,
      description: "Spacious designs for modern families"
    },
    {
      id: 6,
      title: "Corner House",
      type: "Residential",
      image: elevationImages.E6,
      description: ""
    },
    {
      id: 7,
      title: "Hotel Resort",
      type: "Commercial",
      image: elevationImages.E7,
      description: "Luxury hospitality with sustainable design"
    }
  ];

  const handleImageClick = (item) => {
    setSelectedImage(item);
    setIsModalOpen(true);
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Re-enable body scroll
    document.body.style.overflow = 'unset';
    setTimeout(() => setSelectedImage(null), 300);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 20 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.5
      }
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  return (
    <>
      <section className="relative w-full py-12 md:py-20 bg-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
          </div>
          
          {/* Floating shapes - Hidden on mobile */}
          <motion.div 
            className="hidden md:block absolute top-10 left-10 w-16 h-16 bg-primaryBrown opacity-5 rounded-full"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="hidden md:block absolute bottom-20 right-10 w-12 h-12 bg-lightBeige opacity-5 rotate-45"
            animate={{
              y: [0, 12, 0],
              rotate: [45, 90, 45],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16 relative z-10 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={textVariants}
        >
          <motion.div 
            className="w-12 md:w-16 h-1 bg-primaryBrown mx-auto mb-4 md:mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ maxWidth: '64px' }}
          />
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primaryBrown mb-3 md:mb-4 leading-tight">
            Architectural Portfolio
          </h2>
          
          <motion.div 
            className="w-16 md:w-24 h-1 bg-primaryBrown mx-auto mb-4 md:mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ maxWidth: '96px' }}
          />
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A visual journey through our signature architectural creations
          </p>
        </motion.div>

        {/* Image Collage Grid - FIXED LAYOUT */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* First item - spans 2 columns on medium+ screens */}
            <motion.div 
              className="sm:col-span-2 lg:col-span-2 relative group cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
              onClick={() => handleImageClick(portfolioItems[0])}
            >
              <div className="aspect-[4/3] sm:aspect-[16/9] relative overflow-hidden rounded-xl md:rounded-2xl">
                <motion.img
                  src={portfolioItems[0].image}
                  alt={portfolioItems[0].title}
                  className="w-full h-full object-cover"
                  variants={hoverVariants}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-xs sm:text-sm text-primaryBrown font-medium">{portfolioItems[0].type}</span>
                    <h3 className="text-sm sm:text-base md:text-xl font-bold mt-1 leading-tight">{portfolioItems[0].title}</h3>
                    <p className="text-gray-200 text-xs sm:text-sm mt-1 md:mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 leading-relaxed">
                      {portfolioItems[0].description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Second item */}
            <motion.div 
              className="relative group cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
              onClick={() => handleImageClick(portfolioItems[1])}
            >
              <div className="aspect-square relative overflow-hidden rounded-xl md:rounded-2xl">
                <motion.img
                  src={portfolioItems[1].image}
                  alt={portfolioItems[1].title}
                  className="w-full h-full object-cover"
                  variants={hoverVariants}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-xs sm:text-sm text-primaryBrown font-medium">{portfolioItems[1].type}</span>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mt-1 leading-tight">{portfolioItems[1].title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Third item */}
            <motion.div 
              className="relative group cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
              onClick={() => handleImageClick(portfolioItems[2])}
            >
              <div className="aspect-square relative overflow-hidden rounded-xl md:rounded-2xl">
                <motion.img
                  src={portfolioItems[2].image}
                  alt={portfolioItems[2].title}
                  className="w-full h-full object-cover"
                  variants={hoverVariants}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-xs sm:text-sm text-primaryBrown font-medium">{portfolioItems[2].type}</span>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mt-1 leading-tight">{portfolioItems[2].title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Fourth item */}
            <motion.div 
              className="relative group cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
              onClick={() => handleImageClick(portfolioItems[3])}
            >
              <div className="aspect-square relative overflow-hidden rounded-xl md:rounded-2xl">
                <motion.img
                  src={portfolioItems[3].image}
                  alt={portfolioItems[3].title}
                  className="w-full h-full object-cover"
                  variants={hoverVariants}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-xs sm:text-sm text-primaryBrown font-medium">{portfolioItems[3].type}</span>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mt-1 leading-tight">{portfolioItems[3].title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Fifth item - spans 2 columns */}
            <motion.div 
              className="sm:col-span-2 lg:col-span-2 relative group cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
              onClick={() => handleImageClick(portfolioItems[4])}
            >
              <div className="aspect-[4/3] sm:aspect-[16/7] relative overflow-hidden rounded-xl md:rounded-2xl">
                <motion.img
                  src={portfolioItems[4].image}
                  alt={portfolioItems[4].title}
                  className="w-full h-full object-cover"
                  variants={hoverVariants}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-xs sm:text-sm text-primaryBrown font-medium">{portfolioItems[4].type}</span>
                    <h3 className="text-sm sm:text-base md:text-xl font-bold mt-1 leading-tight">{portfolioItems[4].title}</h3>
                    <p className="text-gray-200 text-xs sm:text-sm mt-1 md:mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 leading-relaxed">
                      {portfolioItems[4].description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sixth item - spans full width */}
            <motion.div 
              className="col-span-1 sm:col-span-2 lg:col-span-3 relative group cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
              onClick={() => handleImageClick(portfolioItems[5])}
            >
              <div className="aspect-[4/3] sm:aspect-[21/9] relative overflow-hidden rounded-xl md:rounded-2xl">
                <motion.img
                  src={portfolioItems[5].image}
                  alt={portfolioItems[5].title}
                  className="w-full h-full object-cover"
                  variants={hoverVariants}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-xs sm:text-sm text-primaryBrown font-medium">{portfolioItems[5].type}</span>
                    <h3 className="text-sm sm:text-base md:text-2xl font-bold mt-1 leading-tight">{portfolioItems[5].title}</h3>
                    <p className="text-gray-200 text-xs sm:text-sm mt-1 md:mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 leading-relaxed">
                      {portfolioItems[5].description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12 md:mt-16 relative z-10 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <motion.button 
            className="px-6 py-3 sm:px-8 sm:py-3 bg-primaryBrown text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300 shadow-lg inline-flex items-center gap-2 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Complete Portfolio
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </motion.div>
      </section>

      {/* Modal for enlarged image */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute -top-12 right-0 z-10 text-white hover:text-primaryBrown transition-colors duration-200"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative rounded-lg overflow-hidden bg-white">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <span className="text-primaryBrown font-medium text-sm">{selectedImage.type}</span>
                  <h3 className="text-xl font-bold mt-1">{selectedImage.title}</h3>
                  <p className="text-gray-200 text-sm mt-2">{selectedImage.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}