import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRobot, FaMobile, FaEye, FaGlobe, FaMicrochip, FaThLarge } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import TiltCard from '../components/TiltCard';
import { useTranslation } from 'react-i18next';

const categoryIcons = {
  All: <FaThLarge />,
  Flutter: <FaMobile />,
  'AI/ML': <FaRobot />,
  'Image Processing': <FaEye />,
  'Web App': <FaGlobe />,
  IoT: <FaMicrochip />,
};

const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('All');

  const projects = t('projects.projects', { returnObjects: true }) || [];
  const categories = t('projects.categories', { returnObjects: true }) || [];
  const filteredProjects = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <PageTransition>
      <div style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '4rem', position: 'relative', zIndex: 1 }}>

        {/* ── Hero ── */}
        <section style={{ padding: '3rem 2rem 2.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: '25%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(124,106,247,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
                {t('projects.heroTitle')}
              </p>
              <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--text)', marginBottom: '1rem' }}>
                {t('projects.heroTitle')}
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.75 }}>{t('projects.heroSubtitle')}</p>
            </motion.div>
          </div>
        </section>

        {/* ── Filter bar ── */}
        <section style={{ padding: '0 2rem 2.5rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div className="filter-bar">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setFilter(cat.key)}
                  className={`filter-pill${filter === cat.key ? ' active' : ''}`}
                >
                  <span style={{ fontSize: '0.75rem' }}>{categoryIcons[cat.key]}</span>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Grid ── */}
        <section style={{ padding: '0 2rem 3rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <AnimatePresence mode="popLayout">
              {filteredProjects.length === 0 ? (
                <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--text-muted)' }}>
                  Bu kategoride henüz proje yok.
                </motion.div>
              ) : (
                <motion.div
                  key="grid"
                  layout
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: '1.25rem' }}
                >
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <TiltCard className="project-card" style={{ height: '100%' }}>
                        {/* Header */}
                        <div className={`bg-gradient-to-r ${project.color}`} style={{ padding: '1.25rem', borderRadius: 'calc(var(--radius) - 1px) calc(var(--radius) - 1px) 0 0' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '2rem' }}>{project.image}</span>
                            <span style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', fontSize: '0.7rem', fontWeight: 600, padding: '0.2rem 0.6rem', borderRadius: 20 }}>
                              {project.category}
                            </span>
                          </div>
                          <h3 style={{ fontWeight: 700, color: '#fff', fontSize: '1rem', lineHeight: 1.3 }}>{project.title}</h3>
                        </div>

                        {/* Body */}
                        <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '0.875rem' }}>
                          <p style={{ color: 'var(--text-muted)', fontSize: '0.845rem', lineHeight: 1.65, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                            {project.description}
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                            {project.technologies.map((tech, idx) => (
                              <span key={idx} className="tag">{tech}</span>
                            ))}
                          </div>
                          {project.links?.length > 0 && (
                            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid var(--border)' }}>
                              {project.links.map((link, idx) => (
                                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer"
                                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', textDecoration: 'none', transition: 'color var(--transition)' }}
                                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
                                  {link.type === 'github'
                                    ? <><FaGithub style={{ fontSize: '0.9rem' }} /> GitHub</>
                                    : <><FaExternalLinkAlt style={{ fontSize: '0.75rem' }} /> Website</>}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </TiltCard>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* ── GitHub CTA ── */}
        <section style={{ padding: '0 2rem 2rem' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '2.5rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(124,106,247,0.07), rgba(240,106,171,0.07))', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <FaGithub style={{ fontSize: '2.5rem', color: 'var(--text-muted)', margin: '0 auto 1rem', display: 'block' }} />
                <h2 style={{ fontWeight: 800, color: 'var(--text)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>{t('projects.ctaTitle')}</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1.5rem', maxWidth: 480, margin: '0 auto 1.5rem' }}>
                  {t('projects.ctaDescription')}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
                  {(t('projects.profiles', { returnObjects: true }) || []).map((profile) => (
                    <a
                      key={profile.url}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontSize: '0.875rem' }}
                    >
                      <FaGithub />{profile.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default Projects;
