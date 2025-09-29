import React, { useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star, ArrowLeft, ArrowRight, Play } from "lucide-react";

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      client: "Rajesh & Meera Patel",
      project: "Modern Villa Design",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      text: "Vinayak Dream Design transformed our vision into a breathtaking reality. Their attention to detail and innovative approach exceeded our expectations. The entire process was smooth and professional.",
      rating: 5,
      category: "residential"
    },
    {
      id: 2,
      client: "TechInnovate Solutions",
      project: "Corporate Office Design",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      text: "Working with Vinayak's team was a game-changer for our workspace. They created an environment that boosts productivity and reflects our company culture perfectly.",
      rating: 5,
      category: "commercial"
    },
    {
      id: 3,
      client: "Heritage Trust Foundation",
      project: "Historical Building Restoration",
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      text: "Their expertise in preserving historical elements while incorporating modern functionality was impressive. They respected the building's heritage while making it relevant for today.",
      rating: 5,
      category: "institutional"
    },
    {
      id: 4,
      client: "Aarav & Sunita Singh",
      project: "Luxury Apartment Interior",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      text: "The interior design work completely transformed our living space. The team understood our lifestyle needs and created a home that's both beautiful and functional.",
      rating: 5,
      category: "residential"
    },
    {
      id: 5,
      client: "UrbanEats Restaurant Chain",
      project: "Restaurant Interior Design",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      text: "They created an ambiance that perfectly captures our brand identity. Our customers love the atmosphere, and it has significantly improved our dining experience.",
      rating: 4,
      category: "commercial"
    },
    {
      id: 6,
      client: "Green Valley School",
      project: "Campus Expansion Project",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      text: "The new campus buildings are not only aesthetically pleasing but also highly functional for educational purposes. The sustainable design elements were particularly impressive.",
      rating: 5,
      category: "institutional"
    }
  ];

  const categories = [
    { id: "all", name: "All Testimonials" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "institutional", name: "Institutional" }
  ];

  const filteredTestimonials = activeCategory === "all" 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === activeCategory);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardHover = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-3 h-3 sm:w-4 sm:h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} 
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner with Dark Gray Background - Mobile Optimized */}
      <section className="relative h-64 sm:h-80 md:h-96 bg-darkGray">
        <div className="absolute inset-0 bg-gradient-to-r from-darkGray to-gray-800 opacity-95" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              className="text-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <motion.div 
                className="w-12 sm:w-16 h-1 bg-primaryBrown mx-auto mb-4 sm:mb-6"
                variants={fadeIn}
              />
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2"
                variants={fadeIn}
              >
                Client Testimonials
              </motion.h1>
              <motion.p 
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed"
                variants={fadeIn}
              >
                Hear what our clients have to say about their experience working with Vinayak Dream Design
              </motion.p>
            </motion.div>
          </div>
        </div>
        
        {/* Breadcrumb Navigation - Mobile Optimized */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-10">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-gray-300">
            <a href="/" className="hover:text-primaryBrown transition-colors">Home</a>
            <span className="text-gray-400">/</span>
            <span className="text-primaryBrown">Testimonials</span>
          </nav>
        </div>
      </section>

      {/* Testimonial Filters - Mobile Optimized */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-wrap justify-center gap-2 sm:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeCategory === category.id
                    ? "bg-primaryBrown text-white shadow-md"
                    : "bg-white text-darkGray shadow-sm hover:bg-primaryBrown hover:text-white"
                }`}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {filteredTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                variants={fadeIn}
                whileHover={{ y: -8 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="p-4 sm:p-6 md:p-8 relative">
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primaryBrown opacity-20 absolute top-4 sm:top-6 right-4 sm:right-6" />
                  
                  {/* Rating */}
                  <div className="mb-4 sm:mb-6">
                    <StarRating rating={testimonial.rating} />
                  </div>
                  
                  {/* Testimonial text */}
                  <p className="text-gray-600 italic text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Client info */}
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.client} - ${testimonial.project}`}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover mr-3 sm:mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-darkGray text-sm sm:text-base">{testimonial.client}</h4>
                      <p className="text-primaryBrown text-xs sm:text-sm">{testimonial.project}</p>
                    </div>
                  </div>
                </div>
                
                {/* Category badge */}
                <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6">
                  <span className="inline-block px-2 py-1 bg-lightBeige text-primaryBrown text-xs font-medium rounded-full capitalize">
                    {testimonial.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 bg-primaryBrown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeIn} className="p-4">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">150+</div>
              <div className="text-gray-200 text-xs sm:text-sm">Happy Clients</div>
            </motion.div>
            <motion.div variants={fadeIn} className="p-4">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">98%</div>
              <div className="text-gray-200 text-xs sm:text-sm">Satisfaction Rate</div>
            </motion.div>
            <motion.div variants={fadeIn} className="p-4">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">24+</div>
              <div className="text-gray-200 text-xs sm:text-sm">Years Experience</div>
            </motion.div>
            <motion.div variants={fadeIn} className="p-4">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">27</div>
              <div className="text-gray-200 text-xs sm:text-sm">Awards Won</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-darkGray mb-4 sm:mb-6 leading-tight px-2">
              Ready to Share Your Experience?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 px-2 leading-relaxed">
              Join our growing list of satisfied clients and let us bring your architectural vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-primaryBrown text-white rounded-md font-semibold hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.a>
              <motion.a
                href="/projects"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border border-primaryBrown text-primaryBrown rounded-md font-semibold hover:bg-primaryBrown hover:text-white transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}      