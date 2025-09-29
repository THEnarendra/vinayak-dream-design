// src/components/ProjectDetail.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Ruler, Download, Share2 } from "lucide-react";
import { getProjectByRoute } from "../data/projectsData";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Get project data
  const project = getProjectByRoute(projectId);

  // Auto-slide effect
  useEffect(() => {
    if (!project || !autoPlay) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [project, autoPlay]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">🏗️</div>
          <h1 className="text-2xl font-bold text-darkGray mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-6">The project you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/projects')}
            className="bg-primaryBrown text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    setAutoPlay(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    setAutoPlay(false);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
    setAutoPlay(false);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const imageHover = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      {/* <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/projects')}
            className="flex items-center gap-2 text-darkGray hover:text-primaryBrown transition-colors duration-300 text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            Back to Projects
          </button>
        </div>
      </motion.header> */}

      {/* Main Image Slider */}
      <section className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] bg-gray-900 pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.images[currentImageIndex].url})` }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 z-10"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 z-10"
        >
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {project.images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? "bg-primaryBrown scale-125" : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>

        {/* Project Title & Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent pt-20 pb-6 sm:pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              {project.title}
            </motion.h1>
            
            <motion.div 
              className="flex flex-wrap items-center gap-4 text-gray-200 text-sm sm:text-base"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {project.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {project.year}
              </span>
              <span className="flex items-center gap-1">
                <Ruler className="w-4 h-4" />
                {project.area}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                project.status === "Completed" ? "bg-green-500 text-white" :
                project.status === "Ongoing" ? "bg-blue-500 text-white" :
                "bg-yellow-500 text-white"
              }`}>
                {project.status}
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkGray mb-4 md:mb-6">Project Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
                    {project.fullDescription}
                  </p>
                  
                  {/* Features List */}
                  <div className="mt-6 md:mt-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-darkGray mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={fadeIn}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-primaryBrown rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              className="lg:col-span-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-darkGray mb-4">Project Details</h3>
                <div className="space-y-4 text-sm sm:text-base">
                  <div>
                    <span className="text-gray-600 block">Category:</span>
                    <span className="font-medium text-darkGray capitalize">{project.category}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 block">Type:</span>
                    <span className="font-medium text-darkGray">{project.type}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 block">Status:</span>
                    <span className="font-medium text-darkGray">{project.status}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 block">Client:</span>
                    <span className="font-medium text-darkGray">{project.client}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 block">Duration:</span>
                    <span className="font-medium text-darkGray">{project.duration}</span>
                  </div>
                </div>

                {/* <div className="flex gap-3 mt-6">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-primaryBrown text-white py-2 px-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors text-sm">
                    <Download className="w-4 h-4" />
                    Brochure
                  </button>
                  <button className="flex items-center justify-center gap-2 border border-primaryBrown text-primaryBrown py-2 px-4 rounded-lg font-medium hover:bg-primaryBrown hover:text-white transition-colors text-sm">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div> */}

                {/* <div className="flex gap-3 mt-6">
  <button 
    onClick={() => navigate('/contact?type=site-visit')}
    className="flex-1 flex items-center justify-center gap-2 bg-primaryBrown text-white py-2 px-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors text-sm"
  >
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    Schedule Site Visit
  </button>
  <button className="flex items-center justify-center gap-2 border border-primaryBrown text-primaryBrown py-2 px-4 rounded-lg font-medium hover:bg-primaryBrown hover:text-white transition-colors text-sm">
    <Share2 className="w-4 h-4" />
  </button>
</div> */}

                <div className="space-y-3 mt-6">
  <button 
    onClick={() => navigate('/contact')}
    className="w-full flex items-center justify-center gap-2 bg-primaryBrown text-white py-3 px-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors text-sm"
  >
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
    Contact for Project Details
  </button>
  <div className="flex gap-2">
    <button 
      onClick={() => navigate('/projects')}
      className="flex-1 flex items-center justify-center gap-2 border border-primaryBrown text-primaryBrown py-2 px-4 rounded-lg font-medium hover:bg-primaryBrown hover:text-white transition-colors text-sm"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      View All Projects
    </button>
    <button className="flex items-center justify-center gap-2 border border-primaryBrown text-primaryBrown py-2 px-4 rounded-lg font-medium hover:bg-primaryBrown hover:text-white transition-colors text-sm">
      <Share2 className="w-4 h-4" />
    </button>
  </div>
</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkGray mb-3 md:mb-4">Project Gallery</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Explore the detailed visuals of this architectural masterpiece
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerChildren}
          >
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                className="group relative cursor-pointer rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeIn}
                whileHover="hover"
                onClick={() => goToImage(index)}
              >
                <div className="aspect-square relative overflow-hidden">
                  <motion.img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    variants={imageHover}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                      <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                        {image.description}
                      </p>
                      <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                        <span className="text-primaryBrown text-sm font-medium">Click to view larger</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkGray mb-6 md:mb-8 text-center">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {Object.entries(project.specifications).map(([key, value], index) => (
                <motion.div
                  key={key}
                  className="bg-gray-50 rounded-lg p-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-primaryBrown mb-4 capitalize">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </h3>
                  {Array.isArray(value) ? (
                    <ul className="space-y-2">
                      {value.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-primaryBrown rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700 leading-relaxed">{value}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}