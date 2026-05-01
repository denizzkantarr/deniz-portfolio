import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaExternalLinkAlt, FaGraduationCap } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import { useTranslation } from 'react-i18next';

const SectionTitle = ({ icon, title }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
    <div style={{
      width: 40, height: 40, borderRadius: 10,
      background: 'linear-gradient(135deg, var(--accent), var(--accent-2, #f06aab))',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff', flexShrink: 0, boxShadow: '0 4px 16px rgba(124,106,247,0.3)',
    }}>
      {icon}
    </div>
    <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 800, color: 'var(--text)' }}>{title}</h2>
    <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, var(--border), transparent)', marginLeft: '0.5rem' }} />
  </div>
);

const Experience = () => {
  const { t } = useTranslation();
  const experiences = t('experience.experiences', { returnObjects: true }) || [];
  const internships = t('experience.internships', { returnObjects: true }) || [];

  return (
    <PageTransition>
      <div style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '4rem', position: 'relative', zIndex: 1 }}>

        {/* ── Hero ── */}
        <section style={{ padding: '3rem 2rem 3rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
              {t('experience.heroTitle')}
            </p>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--text)', marginBottom: '1rem' }}>
              {t('experience.heroTitle')}
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.75, maxWidth: '540px', margin: '0 auto' }}>
              {t('experience.heroDescription')}
            </p>
          </div>
        </section>

        {/* ── Professional Experience ── */}
        <section style={{ padding: '2rem 2rem 3rem' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <SectionTitle icon={<FaBriefcase />} title={t('experience.professionalTitle')} />
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="timeline-dot">
                    <div className="dot-pulse" />
                  </div>

                  <div className="timeline-content" style={{ padding: 0, overflow: 'hidden' }}>
                    {/* Header band */}
                    <div className={`bg-gradient-to-r ${exp.color}`} style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <div>
                          <h3 style={{ fontWeight: 800, fontSize: '1.05rem', color: '#fff', marginBottom: '0.2rem' }}>{exp.title}</h3>
                          <p style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600, fontSize: '0.9rem' }}>{exp.company}</p>
                        </div>
                        <span style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', fontSize: '0.72rem', fontWeight: 600, padding: '0.25rem 0.7rem', borderRadius: 20, whiteSpace: 'nowrap' }}>
                          {exp.type}
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><FaCalendar style={{ fontSize: '0.7rem' }} />{exp.period}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><FaMapMarkerAlt style={{ fontSize: '0.7rem' }} />{exp.location}</span>
                      </div>
                    </div>

                    {/* Body */}
                    <div style={{ padding: '1.25rem 1.5rem' }}>
                      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {exp.description.map((item, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                            <span style={{ marginTop: '0.45rem', width: 5, height: 5, flexShrink: 0, background: 'var(--accent)', borderRadius: '50%' }} />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {exp.links?.length > 0 && (
                        <div style={{ marginBottom: '0.75rem' }}>
                          <p style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                            {t('experience.linksLabel')}
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {exp.links.map((link, idx) => (
                              <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: 'var(--accent)', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none', transition: 'opacity var(--transition)' }}
                                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
                                <FaExternalLinkAlt style={{ fontSize: '0.7rem' }} />{link.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {exp.apps?.length > 0 && (
                        <div>
                          <p style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                            {t('experience.appsLabel')}
                          </p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                            {exp.apps.map((app, idx) => (
                              <span key={idx} className="tag">{app}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Internships ── */}
        <section style={{ padding: '3rem 2rem 4rem', background: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <SectionTitle icon={<FaGraduationCap />} title={t('experience.internshipTitle')} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
              {internships.map((intern, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -4 }}
                  style={{
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)', overflow: 'hidden',
                    transition: 'border-color var(--transition), box-shadow var(--transition)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(124,106,247,0.12)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div className={`bg-gradient-to-r ${intern.color}`} style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: 40, height: 40, background: 'rgba(255,255,255,0.15)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                      <FaBriefcase />
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem' }}>{intern.title}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.78rem' }}>{intern.company}</p>
                    </div>
                  </div>
                  <div style={{ padding: '1.25rem' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.78rem', marginBottom: '0.75rem' }}>
                      <FaCalendar style={{ fontSize: '0.7rem' }} />{intern.period}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {intern.description.map((item, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.55 }}>
                          <span style={{ marginTop: '0.4rem', width: 4, height: 4, flexShrink: 0, background: 'var(--border)', borderRadius: '50%' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a href={intern.website} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--accent)', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none' }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
                      <FaExternalLinkAlt style={{ fontSize: '0.7rem' }} />{t('experience.visitWebsite')}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default Experience;
