// src/components/ProjectsPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Filter, MapPin, Calendar, Ruler, ArrowRight } from "lucide-react";
import { projectsData, getCategories, getProjectsByCategory } from "../data/projectsData";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const navigate = useNavigate();

  const categories = getCategories();
  const filteredProjects = getProjectsByCategory(activeCategory);

  const handleProjectClick = (projectRoute) => {
    navigate(`/project/${projectRoute}`);
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

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardHover = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageHover = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative h-64 md:h-96 bg-darkGray">
        <div className="absolute inset-0 bg-gradient-to-r from-darkGray to-gray-800 opacity-95" />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <motion.div 
                className="w-12 md:w-16 h-1 bg-primaryBrown mx-auto mb-4 md:mb-6"
                variants={fadeIn}
              />
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight"
                variants={fadeIn}
              >
                Our Projects
              </motion.h1>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4"
                variants={fadeIn}
              >
                Discover our portfolio of architectural excellence and innovative design solutions
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 md:py-12 bg-gray-50 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-wrap justify-center gap-2 md:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerChildren}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 text-xs md:text-sm ${
                  activeCategory === category.id
                    ? "bg-primaryBrown text-white shadow-md"
                    : "bg-white text-darkGray shadow-sm hover:bg-primaryBrown hover:text-white"
                }`}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="w-3 h-3 md:w-4 md:h-4" />
                {category.name}
                <span className="bg-white bg-opacity-20 px-1.5 py-0.5 md:px-2 md:py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <motion.div 
            className="text-center mb-8 md:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkGray mb-3 md:mb-4">
              {activeCategory === 'all' ? 'All Projects' : `${categories.find(cat => cat.id === activeCategory)?.name} Projects`}
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Showing {filteredProjects.length} of {projectsData.length} projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <motion.div 
              className="text-center py-16 md:py-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="text-5xl md:text-6xl mb-4">🏗️</div>
              <h3 className="text-xl md:text-2xl font-bold text-darkGray mb-2">No projects found</h3>
              <p className="text-gray-600 text-sm md:text-base">No projects match the current filter criteria.</p>
            </motion.div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerChildren}
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                  variants={fadeIn}
                  whileHover="hover"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover"
                      variants={imageHover}
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === "Completed" ? "bg-green-100 text-green-800" :
                        project.status === "Ongoing" ? "bg-blue-100 text-blue-800" :
                        "bg-yellow-100 text-yellow-800"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500 flex items-center justify-center">
                      <motion.div 
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                      >
                        <div className="bg-white bg-opacity-20 rounded-full p-2 md:p-3 inline-block mb-2">
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                        <p className="text-sm md:text-base font-medium">View Project Details</p>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-darkGray mb-2 md:mb-3 group-hover:text-primaryBrown transition-colors duration-300 line-clamp-1">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>
                    
                    {/* Project Details */}
                    <div className="space-y-2 text-xs md:text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        <span>{project.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Ruler className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        <span>{project.area}</span>
                      </div>
                    </div>
                    
                    {/* Category and Type */}
                    <div className="flex justify-between items-center mt-3 md:mt-4">
                      <span className="inline-block px-2 py-1 bg-lightBeige text-primaryBrown text-xs font-medium rounded-full capitalize">
                        {project.category}
                      </span>
                      <span className="text-xs md:text-sm text-gray-500 text-right">
                        {project.type}
                      </span>
                    </div>

                    {/* View Button */}
                    <motion.button 
                      className="w-full mt-3 md:mt-4 py-2 text-primaryBrown border border-primaryBrown rounded-lg font-medium hover:bg-primaryBrown hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project.route);
                      }}
                    >
                      View Project
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Load More Section (for future pagination) */}
          <motion.div 
            className="text-center mt-12 md:mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="text-gray-600 text-sm md:text-base mb-4">
              Interested in seeing more of our work?
            </p>
            <motion.button 
              className="px-6 py-3 bg-primaryBrown text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300 inline-flex items-center gap-2 text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Projects
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkGray mb-4 md:mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your architectural vision to life with our expertise and innovative design approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => navigate('/contact')}
                className="px-6 py-3 bg-primaryBrown text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
              <motion.button
                onClick={() => navigate('/about')}
                className="px-6 py-3 border border-primaryBrown text-primaryBrown rounded-lg font-semibold hover:bg-primaryBrown hover:text-white transition-all duration-300 text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn About Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}