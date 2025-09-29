import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" }
  ];

  const services = [
    "Architectural Design",
    "Interior Design",
    "3D Visualization",
    "Project Management",
    "Consultation",
    "Renovation"
  ];

  const socialLinks = [
    { icon: Facebook, url: "#", name: "Facebook" },
    { icon: Instagram, url: "#", name: "Instagram" },
    { icon: Linkedin, url: "#", name: "LinkedIn" },
    { icon: Twitter, url: "#", name: "Twitter" }
  ];

  return (
    <footer className="bg-darkGray text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-primaryBrown mb-6">Vinayak Dream Design</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creating your Dreams into Reality
              We transform visions into reality with innovative designs and 
              meticulous attention to detail.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-primaryBrown flex items-center justify-center transition-all duration-300 hover:bg-lightBeige hover:text-darkGray"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-lightBeige">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primaryBrown transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primaryBrown rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-lightBeige">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-primaryBrown transition-colors duration-300 flex items-center group cursor-pointer">
                    <span className="w-2 h-2 bg-primaryBrown rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-lightBeige">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primaryBrown mr-4 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Govindam Tower, Govindpura, Jaipur, Rajasthan
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primaryBrown mr-4 flex-shrink-0" />
                <a href="tel:+919660225994" className="text-gray-300 hover:text-primaryBrown transition-colors duration-300">
                  +91 96602 25994
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primaryBrown mr-4 flex-shrink-0" />
                <a href="mailto:vinayakdreamdesign22@gmail.com" className="text-gray-300 hover:text-primaryBrown transition-colors duration-300">
                  vinayakdreamdesign22@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-6 p-4 bg-primaryBrown/10 rounded-lg border border-primaryBrown/20">
              <p className="text-sm text-gray-300 mb-3">Have a project in mind?</p>
              <a
                href="https://wa.me/919660225994"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primaryBrown text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all duration-300"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {currentYear} Vinayak Dream Design. All rights reserved.
          </div>
          {/* <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-primaryBrown transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-primaryBrown transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-primaryBrown transition-colors duration-300">Cookie Policy</a>
          </div> */}
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 w-12 h-12 bg-primaryBrown text-white rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-90 transition-all duration-300 z-40"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
}