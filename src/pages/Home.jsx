import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode, FaMobile, FaCloud } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import denizImg from '../assets/images/deniz.png';
import logo from '../assets/images/logo.png';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();

  const titleLines = t('home.titleLines', { returnObjects: true });
  const fullText = titleLines.join('\n');
  const nameText = t('home.nameText');
  const nameStart = fullText.indexOf(nameText);
  const nameEnd = nameStart + nameText.length;

  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedText((prev) => {
        if (prev.length >= fullText.length) {
          clearInterval(interval);
          return prev;
        }
        return fullText.slice(0, prev.length + 1);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [fullText]);

  const beforeName = typedText.slice(0, Math.min(nameStart, typedText.length));
  const namePart = typedText.slice(
    Math.min(nameStart, typedText.length),
    Math.min(nameEnd, typedText.length)
  );
  const afterName = typedText.slice(Math.min(nameEnd, typedText.length));

  const translatedSkills = t('home.skills', { returnObjects: true });
  const skills = translatedSkills.map((skill, idx) => {
    const icons = [<FaMobile className="text-4xl" />, <FaCode className="text-4xl" />, <FaCloud className="text-4xl" />];
    return { ...skill, icon: icons[idx] || <FaCode className="text-4xl" /> };
  });

  const stats = t('home.stats', { returnObjects: true });

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-24 bottom-0 flex items-center justify-center opacity-5">
            <img
              src={logo}
              alt="Background Logo"
              className="w-[70vw] max-w-[900px] object-contain"
            />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                className="lg:col-span-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {beforeName}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {namePart}
                  </span>
                  {afterName}
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-gray-600 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {t('home.role')}
                </motion.p>

                <motion.p
                  className="text-lg text-gray-600 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {t('home.description')}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Link to="/projects">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                    >
                      {t('home.ctaPrimary')}
                      <FaArrowRight />
                    </motion.button>
                  </Link>

                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all"
                    >
                      {t('home.ctaSecondary')}
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Content - Image Placeholder */}
              <motion.div
                className="lg:col-span-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-full flex items-center justify-end">
                  <img
                    src={denizImg}
                    alt="Deniz Kantar"
                    className="h-80 w-auto object-cover rounded-3xl shadow-xl -translate-x-8"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {t('home.skillsTitle')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('home.skillsSubtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-white mb-6`}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t('home.ctaSectionTitle')}
              </h2>
              <p className="text-xl text-white/90 mb-8">
                {t('home.ctaSectionText')}
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  {t('home.ctaSectionButton')}
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;