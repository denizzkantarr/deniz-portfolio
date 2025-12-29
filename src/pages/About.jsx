import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaLanguage, FaAward } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const education = (t('about.education', { returnObjects: true }) || []).map((edu) => ({
    ...edu,
    icon: <FaGraduationCap />,
  }));

  const skills = t('about.skills', { returnObjects: true }) || {};

  const languages = t('about.languages', { returnObjects: true }) || [];

  const achievements = (t('about.achievements', { returnObjects: true }) || []).map((item) => ({
    ...item,
    icon: <FaAward />,
  }));

  const hobbies = t('about.hobbies', { returnObjects: true }) || [];

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                {t('about.heroTitle')}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t('about.heroDescription')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-800 mb-12 text-center"
            >
              <FaGraduationCap className="inline-block mr-3 text-primary" />
              {t('about.educationTitle')}
            </motion.h2>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0">
                      {edu.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-primary font-semibold mb-1">
                        {edu.school}
                      </p>
                      <p className="text-gray-600">{edu.period}</p>
                      {edu.grade && (
                        <p className="text-gray-600 mt-1">{edu.grade}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-white py-16">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-800 mb-12 text-center"
            >
              <FaCode className="inline-block mr-3 text-primary" />
              {t('about.skillsTitle')}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-primary">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {items.map((skill, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-800 mb-12 text-center"
            >
              <FaLanguage className="inline-block mr-3 text-primary" />
              {t('about.languagesTitle')}
            </motion.h2>

            <div className="space-y-6">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{lang.name}</h3>
                    <span className="text-primary font-semibold">{lang.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-800 mb-12 text-center"
            >
              {t('about.achievementsTitle')}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-primary font-semibold mb-2">
                        {achievement.organization}
                      </p>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-800 mb-12 text-center"
            >
              {t('about.hobbiesTitle')}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
                >
                  <div className="text-5xl mb-4">{hobby.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {hobby.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {hobby.description}
                  </p>
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