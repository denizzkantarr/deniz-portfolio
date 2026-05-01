import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const contactInfo = (t('contact.contactInfo', { returnObjects: true }) || []).map((info) => {
    const iconMap = { mail: <FaEnvelope />, map: <FaMapMarkerAlt /> };
    return { ...info, icon: iconMap[info.icon] || <FaEnvelope /> };
  });

  const socialLinks = [
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/denizkantar/', description: '/in/denizkantar' },
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/denizkant', description: '/denizkant' },
    { name: 'GitHub (2)', icon: <FaGithub />, url: 'https://github.com/denizzkantarr', description: '/denizzkantarr' },
  ];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(`Ad: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    const subject = encodeURIComponent(form.subject || 'Portfolio İletişim');
    window.open(`mailto:kantar.deniz.83@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = {
    width: '100%',
    background: 'var(--surface-2, #18182a)',
    border: '1px solid var(--border)',
    borderRadius: 10,
    padding: '0.75rem 1rem',
    color: 'var(--text)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color var(--transition)',
    boxSizing: 'border-box',
  };

  return (
    <PageTransition>
      <div style={{ minHeight: '100vh', paddingTop: '5rem', paddingBottom: '4rem', position: 'relative', zIndex: 1 }}>

        {/* ── Hero ── */}
        <section style={{ padding: '3rem 2rem 2.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: '33%', width: 280, height: 280, background: 'radial-gradient(circle, rgba(124,106,247,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>
                {t('contact.heroTitle')}
              </p>
              <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--text)', marginBottom: '1rem' }}>
                {t('contact.heroTitle')}
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.75, maxWidth: '520px', margin: '0 auto' }}>
                {t('contact.heroDescription')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Contact info cards ── */}
        <section style={{ padding: '0 2rem 2rem' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.875rem',
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)', padding: '1.25rem',
                  textDecoration: 'none', transition: 'border-color var(--transition), box-shadow var(--transition)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(124,106,247,0.12)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div className={`bg-gradient-to-br ${info.color}`} style={{ width: 44, height: 44, flexShrink: 0, borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.1rem' }}>
                  {info.icon}
                </div>
                <div>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.15rem' }}>{info.title}</p>
                  <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.875rem' }}>{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* ── Main grid ── */}
        <section style={{ padding: '0 2rem 3rem' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.25rem' }}>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.75rem' }}
            >
              <h3 style={{ fontWeight: 800, color: 'var(--text)', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                {t('contact.aboutTitle')}
              </h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {t('i18n.language') === 'tr' ? 'Ad Soyad' : 'Full Name'}
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Adınız"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="ornek@mail.com"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {t('i18n.language') === 'tr' ? 'Konu' : 'Subject'}
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Proje teklifi, işbirliği..."
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {t('i18n.language') === 'tr' ? 'Mesaj' : 'Message'}
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Mesajınızı buraya yazın..."
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                >
                  {sent
                    ? <><FaCheckCircle /> {t('i18n.language') === 'tr' ? 'Gönderildi!' : 'Sent!'}</>
                    : <><FaPaperPlane /> {t('i18n.language') === 'tr' ? 'Gönder' : 'Send Message'}</>
                  }
                </button>
              </form>
            </motion.div>

            {/* Info column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

              {/* About card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: 150, height: 150, background: 'radial-gradient(circle, rgba(124,106,247,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1rem' }}>{t('contact.aboutText')}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {(t('contact.aboutBullets', { returnObjects: true }) || []).map((bullet, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <FaCheckCircle style={{ color: 'var(--accent-3, #3de8c8)', flexShrink: 0, fontSize: '0.85rem' }} />
                      <span style={{ color: 'var(--text)', fontSize: '0.875rem', fontWeight: 500 }}>{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.5rem' }}
              >
                <h3 style={{ fontWeight: 700, color: 'var(--text)', fontSize: '0.9rem', marginBottom: '1rem' }}>{t('contact.socialTitle')}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.75rem',
                        padding: '0.75rem', borderRadius: 10,
                        border: '1px solid var(--border)', textDecoration: 'none',
                        transition: 'border-color var(--transition), background var(--transition)',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'rgba(124,106,247,0.06)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent'; }}
                    >
                      <div style={{ width: 36, height: 36, flexShrink: 0, background: 'var(--surface-2, #18182a)', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', fontSize: '1rem' }}>
                        {social.icon}
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.85rem' }}>{social.name}</p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{social.description}</p>
                      </div>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{t('contact.socialView')} →</span>
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.25rem 1.5rem' }}
              >
                <h3 style={{ fontWeight: 700, color: 'var(--text)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>{t('contact.availabilityTitle')}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <div style={{ width: 10, height: 10, background: '#3de8c8', borderRadius: '50%', animation: 'dotPulse 1.4s ease-in-out infinite', boxShadow: '0 0 8px rgba(61,232,200,0.5)' }} />
                  <span style={{ color: '#3de8c8', fontWeight: 600, fontSize: '0.875rem' }}>{t('contact.availabilityStatus')}</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.65 }}>{t('contact.availabilityText')}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Map ── */}
        <section style={{ padding: '0 2rem 2rem' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border)' }}
            >
              <iframe
                title="Ankara Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.0234661357445!2d32.85425431571658!3d39.92077937942241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str"
                width="100%"
                height="300"
                style={{ border: 0, display: 'block', filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default Contact;
