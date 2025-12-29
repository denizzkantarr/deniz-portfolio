import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();

  const experiences = t('experience.experiences', { returnObjects: true }) || [];
  const internships = t('experience.internships', { returnObjects: true }) || [];

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
                {t('experience.heroTitle')}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('experience.heroDescription')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-800 mb-12 flex items-center"
            >
              <FaBriefcase className="mr-3 text-primary" />
              {t('experience.professionalTitle')}
            </motion.h2>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${exp.color} p-6 text-white`}>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-xl font-semibold mb-3">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center">
                        <FaCalendar className="mr-2" />
                        {exp.period}
                      </span>
                      <span className="flex items-center">
                        <FaMapMarkerAlt className="mr-2" />
                        {exp.location}
                      </span>
                      <span className="bg-white/20 px-3 py-1 rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Links */}
                    {exp.links && exp.links.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">{t('experience.linksLabel')}</h4>
                        <div className="flex flex-wrap gap-3">
                          {exp.links.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-secondary transition-colors flex items-center gap-1"
                            >
                              <FaExternalLinkAlt className="text-sm" />
                              {link.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Apps */}
                    {exp.apps && exp.apps.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">{t('experience.appsLabel')}</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.apps.map((app, idx) => (
                            <span
                              key={idx}
                              className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Internships */}
        <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white py-16">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-800 mb-12 flex items-center"
            >
              <FaBriefcase className="mr-3 text-primary" />
              {t('experience.internshipTitle')}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {internships.map((intern, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${intern.color} rounded-lg flex items-center justify-center text-white text-2xl mb-4`}>
                    <FaBriefcase />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {intern.title}
                  </h3>
                  <p className="text-primary font-semibold mb-2">
                    {intern.company}
                  </p>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <FaCalendar className="mr-2" />
                    {intern.period}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {intern.description.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={intern.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors flex items-center gap-1 text-sm"
                  >
                    <FaExternalLinkAlt />
                    {t('experience.visitWebsite')}
                  </a>
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