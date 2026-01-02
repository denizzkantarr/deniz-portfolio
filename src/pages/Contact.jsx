import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub,
  FaPaperPlane,
  FaCheckCircle 
} from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const contactInfo = (t('contact.contactInfo', { returnObjects: true }) || []).map((info) => {
    const iconMap = {
      mail: <FaEnvelope />,
      phone: <FaPhone />,
      map: <FaMapMarkerAlt />,
    };
    return { ...info, icon: iconMap[info.icon] || <FaEnvelope /> };
  });

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/denizkantar/',
      color: 'hover:text-blue-600',
      bgColor: 'from-blue-600 to-blue-700',
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/denizkant',
      color: 'hover:text-gray-800',
      bgColor: 'from-gray-700 to-gray-900',
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                {t('contact.heroTitle')}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('contact.heroDescription')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="p-8 relative z-10 flex items-center gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-white text-2xl shadow-md`}>
                      {info.icon}
                    </div>
                    <div className="flex flex-col items-start">
                      <h3 className="text-lg font-bold text-gray-800 mb-1">{info.title}</h3>
                      <p className="text-gray-600 text-sm">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-12">
              {/* Info & Social */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-8"
              >
                {/* About */}
                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-xl p-8 text-white">
                  <h2 className="text-3xl font-bold mb-4">
                    {t('contact.aboutTitle')}
                  </h2>
                  <p className="text-white/90 leading-relaxed mb-6">
                    {t('contact.aboutText')}
                  </p>
                  <div className="space-y-3">
                    {(t('contact.aboutBullets', { returnObjects: true }) || []).map((bullet, idx) => (
                      <div className="flex items-center gap-3" key={idx}>
                        <FaCheckCircle className="text-xl" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {t('contact.socialTitle')}
                  </h3>
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: 10 }}
                        className={`flex items-center gap-4 bg-gradient-to-r ${social.bgColor} text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all`}
                      >
                        <div className="text-3xl">
                          {social.icon}
                        </div>
                        <div>
                          <p className="font-semibold">{social.name}</p>
                          <p className="text-sm text-white/80">{t('contact.socialView')}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {t('contact.availabilityTitle')}
                  </h3>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-700 font-semibold">{t('contact.availabilityStatus')}</span>
                  </div>
                  <p className="text-gray-600">
                    {t('contact.availabilityText')}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section (Optional) */}
        <section className="px-4 sm:px-6 lg:px-8 mt-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-4 overflow-hidden"
            >
              <iframe
                title="Ankara Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.0234661357445!2d32.85425431571658!3d39.92077937942241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;