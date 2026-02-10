import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { companyInfo } from '../mock/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="https://customer-assets.emergentagent.com/job_7e581e08-03ab-4361-a9a2-08be5db6d298/artifacts/7befedf2_Picture1%20-%20Edited%20%281%29.png"
              alt="RedPillar Compliance"
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-gray-400">
              {companyInfo.tagline}
            </p>
            <p className="text-sm text-gray-400">
              {companyInfo.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-red-500 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-red-500 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-red-500 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm hover:text-red-500 transition-colors duration-200">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-red-500 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm hover:text-red-500 transition-colors duration-200 cursor-pointer">
                Compliance Officer Services
              </li>
              <li className="text-sm hover:text-red-500 transition-colors duration-200 cursor-pointer">
                Risk Management
              </li>
              <li className="text-sm hover:text-red-500 transition-colors duration-200 cursor-pointer">
                Compliance Monitoring
              </li>
              <li className="text-sm hover:text-red-500 transition-colors duration-200 cursor-pointer">
                Mentorship Program
              </li>
              <li className="text-sm hover:text-red-500 transition-colors duration-200 cursor-pointer">
                Compliance Training
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <Mail className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-red-500 transition-colors duration-200">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Phone className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>{companyInfo.phone}</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>{companyInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} RedPillar Compliance. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-red-500 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-red-500 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
