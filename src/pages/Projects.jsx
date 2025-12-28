import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Park24',
      category: 'Mobile App',
      description: 'Comprehensive parking management mobile application. Independently managed release, updates, and maintenance. Built with Flutter and Firebase ecosystem.',
      technologies: ['Flutter', 'Firebase', 'Google Cloud Platform', 'OneSignal', 'Provider'],
      image: '📱',
      links: [
        { type: 'website', url: 'https://park24.org/' },
      ],
      color: 'from-blue-500 to-cyan-500',
      featured: true,
    },
    {
      title: 'OBSOLIX',
      category: 'Web App',
      description: 'Cybersecurity product dashboard developed with React.js. Led the frontend team and managed development processes.',
      technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'REST API'],
      image: '🔐',
      links: [
        { type: 'website', url: 'https://obsolix.com/' },
      ],
      color: 'from-purple-500 to-pink-500',
      featured: true,
    },
    {
      title: 'AnkaTur',
      category: 'Mobile App',
      description: 'Mobile application for tourism and transportation services. Developed with Flutter and integrated with backend services.',
      technologies: ['Flutter', 'Firebase', 'Google Maps API', 'BLoC'],
      image: '🚌',
      links: [],
      color: 'from-green-500 to-teal-500',
      featured: false,
    },
    {
      title: 'Dakik - Remote Patient Monitoring',
      category: 'Mobile App',
      description: 'Healthcare app for patient follow-ups. Ensured compliance with healthcare standards and enhanced accessibility.',
      technologies: ['Flutter', 'Firebase', 'Healthcare APIs', 'Provider'],
      image: '🏥',
      links: [
        { type: 'website', url: 'https://dakik.app' },
      ],
      color: 'from-red-500 to-orange-500',
      featured: true,
    },
    {
      title: 'Pepteam, Parently, Yuppy',
      category: 'Mobile App',
      description: 'Multiple iOS and Android mobile app projects. Enhanced user flows and enabled offline-first data support.',
      technologies: ['Flutter', 'Firebase', 'Hive', 'BLoC'],
      image: '📲',
      links: [
        { type: 'website', url: 'https://pepteam.com.tr/' },
      ],
      color: 'from-yellow-500 to-orange-500',
      featured: false,
    },
    {
      title: 'Home Automation System (IoT)',
      category: 'IoT Project',
      description: 'Smart home system using ESP8266 microcontroller. Won 3rd place in Çankaya University R&D Project Market. Features gas and temperature sensors, LCD interface, and remote access.',
      technologies: ['C++', 'ESP8266', 'Arduino', 'Blynk', 'IoT'],
      image: '🏠',
      links: [],
      color: 'from-indigo-500 to-purple-500',
      featured: true,
    },
    {
      title: 'Writing to Display',
      category: 'Embedded Systems',
      description: 'Assembly language project to write text on Nokia 5110 using Arm Cortex development board.',
      technologies: ['Assembly', 'Arm Cortex', 'Embedded C'],
      image: '💻',
      links: [],
      color: 'from-gray-500 to-gray-700',
      featured: false,
    },
  ];

  const categories = ['All', 'Mobile App', 'Web App', 'IoT Project', 'Embedded Systems'];

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
                Projelerim
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Üzerinde çalıştığım mobil uygulamalar, web projeleri ve IoT sistemleri
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
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    filter === category
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-800 mb-8"
            >
              Öne Çıkan Projeler
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects
                .filter(project => project.featured)
                .map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
                  >
                    {/* Project Header */}
                    <div className={`bg-gradient-to-r ${project.color} p-8 text-white`}>
                      <div className="text-6xl mb-4">{project.image}</div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Teknolojiler:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-3 py-1 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      {project.links.length > 0 && (
                        <div className="flex gap-3">
                          {project.links.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold"
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

        {/* Other Projects */}
        {filteredProjects.filter(project => !project.featured).length > 0 && (
          <section className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-800 mb-8"
              >
                Diğer Projeler
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects
                  .filter(project => !project.featured)
                  .map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center text-4xl mb-4`}>
                        {project.image}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {project.title}
                      </h3>
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
                        {project.category}
                      </span>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.links.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          {project.links.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-secondary transition-colors text-sm font-semibold flex items-center gap-1"
                            >
                              <FaExternalLinkAlt />
                              View Project
                            </a>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
              </div>
            </div>
          </section>
        )}

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
              <h2 className="text-3xl font-bold mb-4">GitHub'da Daha Fazla Proje</h2>
              <p className="text-gray-300 mb-6">
                Diğer açık kaynak projelerim ve kod örneklerim için GitHub profilimi ziyaret edin
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="https://github.com/denizkant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2"
                >
                  <FaGithub />
                  denizkant
                </a>
                <a
                  href="https://github.com/denizzkantarr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2"
                >
                  <FaGithub />
                  denizzkantarr
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Projects;