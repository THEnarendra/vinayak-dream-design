// src/components/ServicesPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
    DraftingCompass, 
    Palette, 
    Box, 
    ClipboardList, 
    MessageCircle, 
    Hammer,
    ArrowRight,
    CheckCircle,
    Award,
    Users,
    Clock
} from "lucide-react";

export default function ServicesPage() {
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            id: 1,
            icon: DraftingCompass,
            title: "Architectural Design",
            shortDesc: "Innovative architectural solutions that blend form and function",
            description: "Our architectural design service creates spaces that inspire and endure. We combine creative vision with technical expertise to deliver designs that are not only aesthetically pleasing but also functional, sustainable, and tailored to your specific needs. From conceptual sketches to detailed blueprints, we guide your project from vision to reality.",
            features: [
                "Conceptual Design & Development",
                "Space Planning & Optimization",
                "Sustainable Design Solutions",
                "Building Code Compliance",
                "Construction Documentation",
                "Site Analysis & Planning"
            ],
            image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            stats: { projects: 150, satisfaction: 98, experience: 24 }
        },
        {
            id: 2,
            icon: Palette,
            title: "Interior Design",
            shortDesc: "Transform your spaces with bespoke interior solutions",
            description: "Create interiors that reflect your personality and enhance your lifestyle. Our interior design service focuses on creating harmonious spaces that balance beauty, comfort, and functionality. We carefully select materials, colors, and furnishings to create environments that inspire and delight.",
            features: [
                "Space Planning & Layout Design",
                "Color Scheme & Material Selection",
                "Furniture & Fixture Specification",
                "Lighting Design & Planning",
                "Custom Millwork & Cabinetry",
                "Interior Detailing & Styling"
            ],
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            stats: { projects: 120, satisfaction: 97, experience: 20 }
        },
        {
            id: 3,
            icon: Box,
            title: "3D Visualization",
            shortDesc: "Bring your ideas to life with photorealistic 3D renderings",
            description: "Visualize your project before construction begins. Our 3D visualization service creates stunning, photorealistic renderings and walkthroughs that help you understand the design intent and make informed decisions. Experience your future space in incredible detail.",
            features: [
                "Photorealistic 3D Renderings",
                "Virtual Reality Walkthroughs",
                "Animation & Fly-through Videos",
                "Material & Lighting Studies",
                "Interactive 3D Models",
                "Augmented Reality Previews"
            ],
            image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            stats: { projects: 200, satisfaction: 99, experience: 18 }
        },
        {
            id: 4,
            icon: ClipboardList,
            title: "Project Management",
            shortDesc: "Seamless project execution from concept to completion",
            description: "Ensure your project stays on track, on budget, and exceeds expectations. Our project management service provides comprehensive oversight, coordinating all aspects of your project to deliver quality results efficiently and effectively.",
            features: [
                "Budget Planning & Control",
                "Schedule Management",
                "Contractor Coordination",
                "Quality Assurance",
                "Risk Management",
                "Stakeholder Communication"
            ],
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            stats: { projects: 180, satisfaction: 96, experience: 22 }
        },
        {
            id: 5,
            icon: MessageCircle,
            title: "Consultation",
            shortDesc: "Expert guidance for your architectural needs",
            description: "Get professional advice tailored to your specific requirements. Our consultation service provides expert guidance on design feasibility, regulatory compliance, material selection, and project planning to help you make informed decisions.",
            features: [
                "Design Feasibility Studies",
                "Site Evaluation & Analysis",
                "Regulatory Compliance Guidance",
                "Material & Technology Advice",
                "Cost Estimation & Budgeting",
                "Project Planning Strategies"
            ],
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            stats: { projects: 300, satisfaction: 99, experience: 24 }
        },
        {
            id: 6,
            icon: Hammer,
            title: "Renovation",
            shortDesc: "Transform existing spaces with innovative renovation solutions",
            description: "Breathe new life into your existing spaces. Our renovation service combines creative design with practical solutions to transform outdated or underutilized spaces into functional, beautiful environments that meet modern standards and your specific needs.",
            features: [
                "Space Reconfiguration",
                "Structural Modifications",
                "Systems Upgrades (MEP)",
                "Energy Efficiency Improvements",
                "Heritage Building Restoration",
                "Adaptive Reuse Solutions"
            ],
            image: "https://images.unsplash.com/photo-1540638349517-3abd5afc5847?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            stats: { projects: 140, satisfaction: 95, experience: 19 }
        }
    ];

    // Get current service for cleaner code
    const currentService = services[activeService];

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

    const slideInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const cardHover = {
        hover: {
            y: -5,
            scale: 1.02,
            transition: {
                duration: 0.3,
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
                                Our Services
                            </motion.h1>
                            <motion.p 
                                className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4"
                                variants={fadeIn}
                            >
                                Comprehensive architectural solutions tailored to bring your vision to life with excellence and innovation
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkGray mb-4">
                            Our Architectural Services
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                            From concept to completion, we offer a comprehensive range of services to meet all your architectural needs
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerChildren}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                className={`group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 ${
                                    activeService === index 
                                        ? "border-primaryBrown" 
                                        : "border-transparent hover:border-primaryBrown/30"
                                }`}
                                variants={fadeIn}
                                whileHover="hover"
                                onClick={() => setActiveService(index)}
                            >
                                <div className="p-6 md:p-8">
                                    {/* Service Icon */}
                                    <div className="w-16 h-16 bg-primaryBrown rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>
                                    
                                    {/* Service Title */}
                                    <h3 className="text-xl md:text-2xl font-bold text-darkGray mb-3 group-hover:text-primaryBrown transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    
                                    {/* Short Description */}
                                    <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                                        {service.shortDesc}
                                    </p>
                                    
                                    {/* Features Preview */}
                                    <div className="space-y-2 mb-4">
                                        {service.features.slice(0, 3).map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <CheckCircle className="w-4 h-4 text-primaryBrown flex-shrink-0" />
                                                <span className="text-gray-700 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                        {service.features.length > 3 && (
                                            <div className="text-primaryBrown text-sm font-medium">
                                                +{service.features.length - 3} more features
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Stats */}
                                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                                        <div className="text-center">
                                            <div className="font-bold text-darkGray text-lg">{service.stats.projects}+</div>
                                            <div className="text-gray-500 text-xs">Projects</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="font-bold text-darkGray text-lg">{service.stats.satisfaction}%</div>
                                            <div className="text-gray-500 text-xs">Satisfaction</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="font-bold text-darkGray text-lg">{service.stats.experience}+</div>
                                            <div className="text-gray-500 text-xs">Years</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Detailed Service View */}
            <section className="py-12 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Content */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideInLeft}
                        >
                            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-primaryBrown rounded-xl flex items-center justify-center">
                                        <currentService.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-darkGray">
                                        {currentService.title}
                                    </h2>
                                </div>
                                
                                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                                    {currentService.description}
                                </p>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    {currentService.features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            variants={fadeIn}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <CheckCircle className="w-5 h-5 text-primaryBrown flex-shrink-0" />
                                            <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                
                                <motion.button
                                    className="w-full bg-primaryBrown text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Get Started with {currentService.title}
                                    <ArrowRight className="w-4 h-4" />
                                </motion.button>
                            </div>
                        </motion.div>
                        
                        {/* Image */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideInRight}
                            className="relative"
                        >
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <img 
                                    src={currentService.image}
                                    alt={currentService.title}
                                    className="w-full h-64 md:h-96 object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-primaryBrown text-white p-4 rounded-xl shadow-lg">
                                <div className="text-center">
                                    <div className="text-2xl font-bold">{currentService.stats.projects}+</div>
                                    <div className="text-sm">Successful Projects</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkGray mb-4">
                            Why Choose Our Services
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                            We are committed to delivering exceptional architectural services that exceed expectations
                        </p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerChildren}
                    >
                        {[
                            { 
                                icon: Award, 
                                title: "Award-Winning Quality", 
                                desc: "Recognized for excellence in architectural design and innovation" 
                            },
                            { 
                                icon: Users, 
                                title: "Client-Centric Approach", 
                                desc: "Your vision and satisfaction are at the heart of everything we do" 
                            },
                            { 
                                icon: Clock, 
                                title: "Timely Delivery", 
                                desc: "We respect your time and deliver projects within agreed timelines" 
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-6"
                                variants={fadeIn}
                            >
                                <div className="w-16 h-16 bg-primaryBrown rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-darkGray mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-20 bg-primaryBrown text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-gray-200 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can bring your architectural vision to life with our expert services
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                className="px-6 py-3 bg-white text-primaryBrown rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get Free Consultation
                            </motion.button>
                            <motion.button
                                className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primaryBrown transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Our Portfolio
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}