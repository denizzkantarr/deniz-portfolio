import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.experience'), path: '/experience' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} style={{ zIndex: 100 }}>
      <div className="nav-inner">
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" style={{ height: 64, width: 'auto', objectFit: 'contain' }} />
        </Link>

        {/* Desktop links */}
        <div className="nav-links hidden md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                color: location.pathname === item.path ? 'var(--accent)' : 'var(--text-muted)',
                fontWeight: location.pathname === item.path ? 600 : 400,
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'color var(--transition)',
                padding: '0.25rem 0',
                borderBottom: location.pathname === item.path
                  ? '1px solid var(--accent)'
                  : '1px solid transparent',
              }}
              onMouseEnter={(e) => { if (location.pathname !== item.path) e.currentTarget.style.color = 'var(--text)'; }}
              onMouseLeave={(e) => { if (location.pathname !== item.path) e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Lang toggle + mobile button */}
        <div className="flex items-center gap-3">
          <div className="lang-toggle hidden md:flex">
            {['tr', 'en'].map((lng) => (
              <button
                key={lng}
                onClick={() => i18n.changeLanguage(lng)}
                className={`lang-btn${i18n.language === lng ? ' active' : ''}`}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            className="md:hidden"
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '1.2rem' }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            style={{
              background: 'var(--surface)',
              borderTop: '1px solid var(--border)',
              padding: '1rem 2rem 1.5rem',
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  display: 'block',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid var(--border)',
                  color: location.pathname === item.path ? 'var(--accent)' : 'var(--text-muted)',
                  textDecoration: 'none',
                  fontWeight: location.pathname === item.path ? 600 : 400,
                  fontSize: '0.95rem',
                }}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex gap-2 mt-4">
              {['tr', 'en'].map((lng) => (
                <button
                  key={lng}
                  onClick={() => i18n.changeLanguage(lng)}
                  style={{
                    padding: '0.3rem 0.8rem',
                    borderRadius: '6px',
                    border: `1px solid ${i18n.language === lng ? 'var(--accent)' : 'var(--border)'}`,
                    background: i18n.language === lng ? 'var(--accent)' : 'transparent',
                    color: i18n.language === lng ? '#fff' : 'var(--text-muted)',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                  }}
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
