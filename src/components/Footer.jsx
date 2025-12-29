import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/denizkantar/',
      color: 'hover:text-blue-600',
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/denizkant',
      color: 'hover:text-gray-800',
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:kantar.deniz.83@gmail.com',
      color: 'hover:text-red-600',
    },
    {
      name: 'Phone',
      icon: <FaPhone />,
      url: 'tel:+905340102240',
      color: 'hover:text-green-600',
    },
  ];

  const quickLinks = [
    { label: t('footer.links.home'), href: '/' },
    { label: t('footer.links.about'), href: '/about' },
    { label: t('footer.links.projects'), href: '/projects' },
    { label: t('footer.links.contact'), href: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-r from-dark to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Deniz Kantar
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {t('footer.role')}
            </p>
            <p className="text-gray-400 mt-2">
              {t('footer.location')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.connections')}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-2xl text-gray-400 transition-colors ${link.color}`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-gray-400 text-sm">
                <FaEnvelope className="inline mr-2" />
                kantar.deniz.83@gmail.com
              </p>
              <p className="text-gray-400 text-sm mt-2">
                <FaPhone className="inline mr-2" />
                +90 534 010 2240
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t('footer.rights', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;