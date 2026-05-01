import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaLanguage, FaAward, FaHeart } from 'react-icons/fa';
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

const About = () => {
  const { t } = useTranslation();

  const education = (t('about.education', { returnObjects: true }) || []);
  const skills = t('about.skills', { returnObjects: true }) || {};
  const languages = t('about.languages', { returnObjects: true }) || [];
  const achievements = (t('about.achievements', { returnObjects: true }) || []);
  const hobbies = t('about.hobbies', { returnObjects: true }) || [];

  const accentColors = [
    'linear-gradient(135deg, #3b82f6, #06b6d4)',
    'linear-gradient(135deg, var(--accent), var(--accent-2, #f06aab))',
    'linear-gradient(135deg, #06b6d4, #10b981)',
    'linear-gradient(135deg, #f59e0b, #f97316)',
    'linear-gradient(135deg, #ec4899, #f43f5e)',
    'linear-gradient(135deg, #8b5cf6, #7c3aed)',
  ];

  return (
    <PageTransition>
      <div style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '4rem', position: 'relative', zIndex: 1 }}>

        {/* ── Hero ── */}
        <section style={{ padding: '3rem 2rem 3rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
              Portfolio
            </p>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--text)', marginBottom: '1rem' }}>
              {t('about.heroTitle')}
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.75 }}>{t('about.heroDescription')}</p>
          </div>
        </section>

        {/* ── Education ── */}
        <section style={{ padding: '2rem 2rem 3rem' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <SectionTitle icon={<FaGraduationCap />} title={t('about.educationTitle')} />
            <div className="timeline">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="timeline-dot">
                    <div className="dot-pulse" />
                  </div>
                  <div className="timeline-content">
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.4rem' }}>
                      <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>{edu.degree}</h3>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', background: 'var(--surface-2, #18182a)', border: '1px solid var(--border)', padding: '0.2rem 0.7rem', borderRadius: 20, whiteSpace: 'nowrap' }}>
                        {edu.period}
                      </span>
                    </div>
                    <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.2rem' }}>{edu.school}</p>
                    {edu.grade && <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{edu.grade}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section style={{ padding: '3rem 2rem', background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <SectionTitle icon={<FaCode />} title={t('about.skillsTitle')} />
            <div className="skills-grid">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  className="skill-category"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                >
                  <div style={{ width: 4, height: 32, background: accentColors[index % accentColors.length], borderRadius: 4, marginBottom: '0.75rem', flexShrink: 0 }} />
                  <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                    {category}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {items.map((skill, idx) => (
                      <span key={idx} className="tag">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Languages ── */}
        <section style={{ padding: '3rem 2rem' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <SectionTitle icon={<FaLanguage />} title={t('about.languagesTitle')} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.25rem 1.5rem' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <h3 style={{ fontWeight: 700, color: 'var(--text)', fontSize: '0.95rem' }}>{lang.name}</h3>
                    <span style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.82rem', background: 'rgba(124,106,247,0.12)', border: '1px solid rgba(124,106,247,0.25)', padding: '0.2rem 0.7rem', borderRadius: 20 }}>
                      {lang.level}
                    </span>
                  </div>
                  <div style={{ width: '100%', background: 'var(--border)', borderRadius: 10, height: 5, overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                      style={{ height: '100%', borderRadius: 10, background: 'linear-gradient(to right, var(--accent), var(--accent-2, #f06aab))' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Achievements ── */}
        <section style={{ padding: '3rem 2rem', background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <SectionTitle icon={<FaAward />} title={t('about.achievementsTitle')} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}
                >
                  <div style={{ width: 44, height: 44, flexShrink: 0, background: 'linear-gradient(135deg, #f59e0b, #f97316)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.2rem', boxShadow: '0 4px 16px rgba(245,158,11,0.3)' }}>
                    <FaAward />
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, color: 'var(--text)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{item.title}</h3>
                    <p style={{ color: 'var(--accent)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.4rem' }}>{item.organization}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.6 }}>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Hobbies ── */}
        <section style={{ padding: '3rem 2rem 4rem' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <SectionTitle icon={<FaHeart />} title={t('about.hobbiesTitle')} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -4 }}
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.75rem', transition: 'border-color var(--transition), box-shadow var(--transition)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(124,106,247,0.12)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{hobby.icon}</div>
                  <h3 style={{ fontWeight: 700, color: 'var(--text)', fontSize: '1rem', marginBottom: '0.5rem' }}>{hobby.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.65 }}>{hobby.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default About;
