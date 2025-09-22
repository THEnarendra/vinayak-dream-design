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
      {/* Hero Banner with Transparent Overlay */}
      <section className="relative h-96 md:h-[500px] bg-gray-900">
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
                className="w-16 h-1 bg-primaryBrown mx-auto mb-6"
                variants={fadeIn}
              />
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                variants={fadeIn}
              >
                About Vinayak Dream Design
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-200 max-w-3xl mx-auto"
                variants={fadeIn}
              >
                Crafting architectural excellence since 1999. We transform visions into spaces that inspire and endure.
              </motion.p>
            </motion.div>
          </div>
        </div>
        
        {/* Breadcrumb Navigation */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
          <nav className="flex items-center space-x-2 text-sm text-white">
            <a href="/" className="hover:text-primaryBrown transition-colors">Home</a>
            <span className="text-gray-300">/</span>
            <span className="text-primaryBrown">About Us</span>
          </nav>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-darkGray mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
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
                alt="Our studio" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primaryBrown rounded-lg z-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-lightBeige rounded-lg z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center p-6"
                variants={fadeIn}
              >
                <stat.icon className="w-12 h-12 text-primaryBrown mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-darkGray mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-darkGray mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Talented professionals dedicated to bringing your architectural dreams to life
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                variants={fadeIn}
                whileHover={{ y: -10 }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-darkGray mb-2">{member.name}</h3>
                  <p className="text-primaryBrown mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-primaryBrown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Philosophy</h2>
              <div className="space-y-4">
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
              className="bg-white p-8 rounded-lg text-darkGray"
            >
              <h3 className="text-2xl font-bold mb-6">Our Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primaryBrown rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Discover</h4>
                    <p className="text-gray-600">Understanding client needs and project requirements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primaryBrown rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Design</h4>
                    <p className="text-gray-600">Creating innovative and sustainable design solutions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primaryBrown rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Deliver</h4>
                    <p className="text-gray-600">Executing projects with precision and excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-darkGray mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can bring your architectural vision to life
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primaryBrown text-white rounded-md font-semibold hover:bg-opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}