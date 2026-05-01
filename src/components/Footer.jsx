import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const socialLinks = [
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/denizkantar/' },
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/denizkant' },
    { name: 'GitHub 2', icon: <FaGithub />, url: 'https://github.com/denizzkantarr' },
    { name: 'Email', icon: <FaEnvelope />, url: 'mailto:kantar.deniz.83@gmail.com' },
  ];

  const quickLinks = [
    { label: t('footer.links.home'), to: '/' },
    { label: t('footer.links.about'), to: '/about' },
    { label: t('nav.experience'), to: '/experience' },
    { label: t('footer.links.projects'), to: '/projects' },
    { label: t('footer.links.contact'), to: '/contact' },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3.5rem 2rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>
          {/* Brand */}
          <div>
            <div className="footer-name">
              Deniz<span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              {t('footer.role')}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
              <FaMapMarkerAlt style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <span>{t('footer.location')}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              {t('footer.quickLinks')}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color var(--transition)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connections */}
          <div>
            <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              {t('footer.connections')}
            </h3>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                  style={{ color: 'var(--text-muted)', fontSize: '1.2rem', transition: 'color var(--transition)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <a
              href="mailto:kantar.deniz.83@gmail.com"
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.82rem', textDecoration: 'none', transition: 'color var(--transition)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <FaEnvelope style={{ color: 'var(--accent)' }} />
              kantar.deniz.83@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>
            {t('footer.rights', { year: new Date().getFullYear() })}
          </p>
          <button
            onClick={scrollToTop}
            style={{ background: 'none', border: '1px solid var(--border)', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', padding: '0.4rem 0.8rem', borderRadius: '6px', transition: 'all var(--transition)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
          >
            <FaArrowUp />
            {i18n.language === 'tr' ? 'Yukarı Çık' : 'Back to top'}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
