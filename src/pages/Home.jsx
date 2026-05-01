import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaMobile, FaCode, FaRobot, FaGithub, FaLinkedin } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import TiltCard from '../components/TiltCard';
import denizImg from '../assets/images/deniz.png';
import { useTranslation } from 'react-i18next';

const ROLES = [
  'Flutter Developer',
  'Mobile App Engineer',
  'Front-End Developer',
  'Software Developer',
];

const TypewriterRoles = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = ROLES[roleIndex];
    if (paused) {
      timeoutRef.current = setTimeout(() => { setPaused(false); setDeleting(true); }, 1600);
      return () => clearTimeout(timeoutRef.current);
    }
    if (!deleting) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        setPaused(true);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
      } else {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, paused, roleIndex]);

  return (
    <span className="typewriter-word">
      {displayed}<span style={{ opacity: 0.7 }}>|</span>
    </span>
  );
};

const Home = () => {
  const { t } = useTranslation();
  const stats = t('home.stats', { returnObjects: true });
  const translatedSkills = t('home.skills', { returnObjects: true });
  const icons = [<FaMobile />, <FaCode />, <FaRobot />];
  const skills = translatedSkills.map((skill, idx) => ({ ...skill, icon: icons[idx] || <FaCode /> }));

  return (
    <PageTransition>
      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Hero ── */}
        <section className="hero" style={{ paddingTop: '5rem' }}>
          {/* Blob */}
          <div className="blob" style={{ top: '-120px', right: '-80px' }} />

          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}
            className="hero-grid">

            {/* Left */}
            <div>
              {/* Badge */}
              <div className="hero-badge">
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3de8c8', display: 'inline-block', animation: 'dotPulse 1.4s ease-in-out infinite' }} />
                {t('home.availableBadge')}
              </div>

              <h1 className="hero-title" style={{ marginTop: '1.25rem' }}>
                {(() => {
                  const lines = t('home.titleLines', { returnObjects: true });
                  const nameText = t('home.nameText');
                  const secondLine = lines[1];
                  const nameIdx = secondLine.indexOf(nameText);
                  const prefix = nameIdx > 0 ? secondLine.slice(0, nameIdx) : '';
                  return (
                    <>
                      {lines[0]}{' '}
                      {prefix}<span className="highlight">{nameText}</span>
                    </>
                  );
                })()}
              </h1>

              <p style={{ fontSize: '1.1rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem' }}>
                <TypewriterRoles />
              </p>

              <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: '480px', fontSize: '0.95rem' }}>
                {t('home.description')}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <Link to="/projects" style={{ textDecoration: 'none' }}>
                  <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {t('home.ctaPrimary')} <FaArrowRight />
                  </button>
                </Link>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <button className="btn-outline">{t('home.ctaSecondary')}</button>
                </Link>
              </div>

              {/* Socials */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {t('i18n.language') === 'tr' ? 'Sosyal' : 'Social'}
                </span>
                <div style={{ width: 32, height: 1, background: 'var(--border)' }} />
                <a href="https://github.com/denizkant" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text-muted)', transition: 'color var(--transition)', fontSize: '1.1rem' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/denizkantar/" target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text-muted)', transition: 'color var(--transition)', fontSize: '1.1rem' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
                  <FaLinkedin />
                </a>
                <a href="mailto:kantar.deniz.83@gmail.com"
                  style={{ color: 'var(--text-muted)', fontSize: '0.8rem', transition: 'color var(--transition)', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
                  kantar.deniz.83@gmail.com
                </a>
              </div>
            </div>

            {/* Right — photo */}
            <div style={{ position: 'relative', flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
              {/* Glow behind photo */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(124,106,247,0.35), rgba(240,106,171,0.25))', borderRadius: 24, filter: 'blur(32px)', transform: 'scale(1.08)', zIndex: 0 }} />
              <img
                src={denizImg}
                alt="Deniz Kantar"
                style={{
                  position: 'relative', zIndex: 1,
                  height: '380px', width: 'auto',
                  objectFit: 'cover',
                  borderRadius: 20,
                  border: '2px solid rgba(124,106,247,0.35)',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
                }}
              />
              {/* Floating badges */}
              <div className="stat-card" style={{ position: 'absolute', bottom: '-12px', left: '-20px', zIndex: 2, padding: '0.6rem 1rem' }}>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Açık kaynak</div>
                <div style={{ fontWeight: 700, color: 'var(--accent)', fontSize: '0.88rem' }}>GitHub ✓</div>
              </div>
              <div className="stat-card" style={{ position: 'absolute', top: '-12px', right: '-20px', zIndex: 2, padding: '0.6rem 1rem' }}>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Deneyim</div>
                <div style={{ fontWeight: 700, color: 'var(--accent-soft, #a89ef9)', fontSize: '0.88rem' }}>2+ Yıl</div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={{ textAlign: 'center', paddingBottom: '2rem', paddingTop: '2rem' }}>
            <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, var(--accent))', margin: '0 auto', borderRadius: 4 }} />
          </div>
        </section>

        {/* ── Stats ── */}
        <section style={{ padding: '4rem 2rem', background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}
            className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, background: 'linear-gradient(135deg, var(--accent), var(--accent-2, #f06aab))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {stat.number}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '0.25rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Skills ── */}
        <section style={{ padding: '5rem 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>
                {t('home.skillsSubtitle')}
              </p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--text)' }}>
                {t('home.skillsTitle')}
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {skills.map((skill, index) => (
                <TiltCard key={index}>
                  <div style={{ padding: '2rem' }}>
                    <div style={{
                      width: 52, height: 52,
                      borderRadius: 14,
                      background: index === 0 ? 'linear-gradient(135deg, #3b82f6, #06b6d4)' : index === 1 ? 'linear-gradient(135deg, var(--accent), var(--accent-2, #f06aab))' : 'linear-gradient(135deg, #06b6d4, #10b981)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', fontSize: '1.4rem', marginBottom: '1.25rem',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                    }}>
                      {skill.icon}
                    </div>
                    <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)', marginBottom: '0.5rem' }}>{skill.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.65 }}>{skill.description}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: '5rem 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{
              background: 'linear-gradient(135deg, var(--surface), var(--surface-2, #18182a))',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '3.5rem 2.5rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Glow */}
              <div style={{ position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', width: 300, height: 200, background: 'radial-gradient(ellipse, rgba(124,106,247,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: 'var(--text)', marginBottom: '0.75rem' }}>
                  {t('home.ctaSectionTitle')}
                </h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {t('home.ctaSectionText')}
                </p>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <button className="btn-primary" style={{ fontSize: '1rem', padding: '0.85rem 2.5rem' }}>
                    {t('home.ctaSectionButton')}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default Home;
