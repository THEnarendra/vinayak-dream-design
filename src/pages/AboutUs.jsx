import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Clock, Heart, ArrowRight } from "lucide-react";

export default function AboutUs() {
  // Team members data
  const teamMembers = [
    {
      name: "Vinayak Sharma",
      role: "Principal Architect",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "With over 15 years of experience, Vinayak specializes in sustainable design and innovative architectural solutions."
    },
    {
      name: "Priya Mehta",
      role: "Senior Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Priya brings creativity and precision to every project, with expertise in residential and commercial spaces."
    },
    {
      name: "Rahul Kapoor",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Rahul ensures projects are delivered on time and exceed client expectations with his meticulous planning."
    }
  ];

  // Stats data
  const stats = [
    { icon: Award, number: "27", label: "Awards Won" },
    { icon: Users, number: "150+", label: "Happy Clients" },
    { icon: Clock, number: "24+", label: "Years Experience" },
    { icon: Heart, number: "98%", label: "Client Satisfaction" }
  ];

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
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner with Transparent Overlay - Mobile Optimized */}
      <section className="relative h-64 sm:h-80 md:h-[500px] bg-gray-900">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80')"
          }}
        />
        
        {/* Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40" />
        
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
                About Vinayak Dream Design
              </motion.h1>
              <motion.p 
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed"
                variants={fadeIn}
              >
                Crafting architectural excellence since 1999. We transform visions into spaces that inspire and endure.
              </motion.p>
            </motion.div>
          </div>
        </div>
        
        {/* Breadcrumb Navigation - Mobile Optimized */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-10">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-white">
            <a href="/" className="hover:text-primaryBrown transition-colors">Home</a>
            <span className="text-gray-300">/</span>
            <span className="text-primaryBrown">About Us</span>
          </nav>
        </div>
      </section>

      {/* Story Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-darkGray mb-4 sm:mb-6 leading-tight">
                Our Story
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Founded in 1999, Vinayak Dream Design began as a small studio with a big vision: to create 
                  architecture that harmonizes with its environment while pushing the boundaries of design 
                  innovation.
                </p>
                <p>
                  Over the past two decades, we've grown into a multidisciplinary firm known for our 
                  commitment to excellence, sustainability, and client satisfaction. Each project is 
                  approached with fresh eyes and a deep understanding of our clients' needs.
                </p>
                <p>
                  Our philosophy is simple: great design should be accessible, sustainable, and timeless. 
                  We believe that architecture has the power to transform lives and communities.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Vinayak Dream Design studio and team" 
                className="rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl w-full"
              />
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-6 md:-left-6 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-primaryBrown rounded-lg z-10"></div>
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-lightBeige rounded-lg z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={fadeIn}
              >
                <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primaryBrown mx-auto mb-3 sm:mb-4" />
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-darkGray mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-darkGray mb-4 sm:mb-6 leading-tight">
              Meet Our Team
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-2 leading-relaxed">
              Talented professionals dedicated to bringing your architectural dreams to life
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                variants={fadeIn}
                whileHover={{ y: -8 }}
              >
                <img 
                  src={member.image} 
                  alt={`${member.name} - ${member.role} at Vinayak Dream Design`}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-darkGray mb-2 leading-tight">{member.name}</h3>
                  <p className="text-primaryBrown text-sm sm:text-base mb-3 sm:mb-4">{member.role}</p>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 bg-primaryBrown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                Our Philosophy
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  We believe that architecture is more than just buildings—it's about creating spaces 
                  that enhance lives and communities. Our approach combines innovative design with 
                  practical functionality.
                </p>
                <p>
                  Sustainability is at the core of everything we do. We strive to minimize environmental 
                  impact while maximizing beauty and efficiency in every project.
                </p>
                <p>
                  Collaboration is key. We work closely with our clients, listening to their needs and 
                  visions to create spaces that truly reflect their aspirations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl text-darkGray"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 leading-tight">Our Approach</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-primaryBrown rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-xs sm:text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Discover</h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Understanding client needs and project requirements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-primaryBrown rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-xs sm:text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Design</h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Creating innovative and sustainable design solutions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-primaryBrown rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-xs sm:text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Deliver</h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Executing projects with precision and excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 px-2 leading-relaxed">
              Let's discuss how we can bring your architectural vision to life
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-primaryBrown text-white rounded-md font-semibold hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}