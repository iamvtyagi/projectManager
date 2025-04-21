import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiMail, FiLinkedin, FiHeart } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/80 backdrop-blur-md border-t border-neon-cyan/20 py-8 mt-auto shadow-lg shadow-neon-cyan/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-black rounded-md flex items-center justify-center text-white font-bold mr-2 shadow-lg shadow-neon-cyan/30 overflow-hidden border border-neon-cyan/50">
                <img
                  src="/logo-neon.svg"
                  alt="ProjectTaskr Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-white">ProjectTaskr</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              A comprehensive solution for managing projects and tasks with
              role-based access control.
            </p>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://github.com/iamvtyagi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-cyan hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href="mailto:vanshjii021@gmail.com"
                className="text-neon-cyan hover:text-white transition-colors"
                title="Email Me"
              >
                <FiMail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/iamvtyagi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-cyan hover:text-white transition-colors"
                title="LinkedIn Profile"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-neon-cyan transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-gray-300 hover:text-neon-cyan transition-colors text-sm"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-neon-cyan transition-colors text-sm"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-gray-300 hover:text-neon-cyan transition-colors text-sm"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">
              Contact Us
            </h3>
            <p className="text-gray-300 text-sm mb-2">
              Have questions or feedback?
            </p>
            <a
              href="mailto:vanshjii021@gmail.com"
              className="inline-flex items-center px-4 py-2 bg-black hover:bg-black/70 text-neon-cyan hover:text-white rounded-md transition-colors text-sm mt-2 border border-neon-cyan/50 shadow-sm shadow-neon-cyan/20 neon-button"
            >
              <FiMail className="mr-2" /> Contact Support
            </a>
          </div>
        </div>

        <div className="border-t border-neon-cyan/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} ProjectTaskr by Vansh Tyagi. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
