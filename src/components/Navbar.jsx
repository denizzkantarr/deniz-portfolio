import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/logo.png';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.experience'), path: '/experience' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const handleLangChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <img src={logo} alt="Logo" className="h-10 w-10 object-contain rounded-lg" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Deniz Kantar
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group"
              >
                <span
                  className={`text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : scrolled
                      ? 'text-gray-700 hover:text-primary'
                      : 'text-gray-800 hover:text-primary'
                  }`}
                >
                  {item.name}
                </span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-primary bottom-[-4px]"
                  />
                )}
              </Link>
            ))}
            <div className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1.5 bg-white shadow-sm">
              <button
                onClick={() => handleLangChange('tr')}
                className={`text-sm font-semibold ${
                  i18n.language === 'tr' ? 'text-primary' : 'text-gray-500'
                }`}
              >
                TR
              </button>
              <span className="text-gray-300">/</span>
              <button
                onClick={() => handleLangChange('en')}
                className={`text-sm font-semibold ${
                  i18n.language === 'en' ? 'text-primary' : 'text-gray-500'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 space-y-3"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-2 bg-white shadow-sm">
              <button
                onClick={() => handleLangChange('tr')}
                className={`text-sm font-semibold ${
                  i18n.language === 'tr' ? 'text-primary' : 'text-gray-500'
                }`}
              >
                TR
              </button>
              <span className="text-gray-300">/</span>
              <button
                onClick={() => handleLangChange('en')}
                className={`text-sm font-semibold ${
                  i18n.language === 'en' ? 'text-primary' : 'text-gray-500'
                }`}
              >
                EN
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;