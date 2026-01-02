import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('All');

  const projects = t('projects.projects', { returnObjects: true }) || [];
  const categories = t('projects.categories', { returnObjects: true }) || [];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

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
                {t('projects.heroTitle')}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('projects.heroSubtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-3 flex-wrap"
            >
              <FaFilter className="text-primary text-xl" />
              {categories.map((category) => (
                <motion.button
                  key={category.key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(category.key)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    filter === category.key
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                  }`}
                >
                  {category.label}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* All Projects in one grid */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all h-full flex flex-col"
                >
                  <div className={`bg-gradient-to-r ${project.color} p-5 text-white`}>
                    <div className="text-4xl mb-2">{project.image}</div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col gap-3">
                    <p className="text-gray-700 leading-relaxed text-sm line-clamp-3">
                      {project.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-xs uppercase tracking-wide">
                        {t('projects.techLabel')}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-3 py-1 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {project.links.length > 0 && (
                      <div className="flex gap-3 mt-auto">
                        {project.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold text-xs"
                          >
                            <FaExternalLinkAlt />
                            {link.type === 'github' ? 'GitHub' : 'Website'}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* GitHub CTA */}
        <section className="px-4 sm:px-6 lg:px-8 mt-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white text-center"
            >
              <FaGithub className="text-6xl mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">{t('projects.ctaTitle')}</h2>
              <p className="text-gray-300 mb-6">
                {t('projects.ctaDescription')}
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                {t('projects.profiles', { returnObjects: true }).map((profile) => (
                  <a
                    key={profile.url}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2"
                  >
                    <FaGithub />
                    {profile.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Projects;