import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';

const Experience = () => {
  const experiences = [
    {
      title: 'Mobile & Frontend Developer',
      company: 'Korsis Bilisim Technology',
      location: 'Ankara, Turkey',
      period: '07/2024 - 09/2025',
      type: 'Full-time',
      description: [
        'Developed and published Park24, independently managing release, updates, and maintenance.',
        'Built scalable mobile applications using Flutter (Provider) and Firebase ecosystem (Firestore, Realtime Database, Auth, Cloud Functions, Cloud Storage).',
        'Integrated backend services on Google Cloud Platform (GCP), including serverless solutions.',
        'Implemented push notifications with OneSignal, increasing user engagement through targeted and scheduled campaigns.',
        'Designed and refined UI/UX with Figma, creating interactive prototypes, wireframes, and user flows for both web and mobile.',
        'Developed web applications with React.js, including the Park24 website and the cybersecurity product dashboard of the project OBSOLIX, while also leading the frontend team and managing development processes.',
      ],
      links: [
        { name: 'Company Website', url: 'https://www.korsisteknoloji.com/' },
        { name: 'Park24', url: 'https://park24.org/' },
        { name: 'OBSOLIX', url: 'https://obsolix.com/' },
      ],
      apps: ['AnkaTur', 'Park24 (App Store and Google Play Store)'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Mobile Application Developer',
      company: 'Pepteam Bilisim Inc.',
      location: 'Remote',
      period: '04/2024 - 07/2024',
      type: 'Full-time',
      description: [
        'Contributed to iOS and Android mobile app projects built with Flutter.',
        'Enhanced user flows by supporting design reviews and providing developer feedback.',
        'Enabled offline-first data support by integrating Firebase with Hive.',
        'Performed functional and usability testing, ensuring app stability and performance before release.',
      ],
      links: [
        { name: 'Company Website', url: 'https://pepteam.com.tr/' },
      ],
      apps: ['Pepteam', 'Parently', 'Yuppy'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Mobile Application Developer',
      company: 'Map2heal Information Technologies and Software Inc.',
      location: 'Remote',
      period: '10/2023 - 04/2024',
      type: 'Full-time',
      description: [
        'Contributed to the Remote Patient Monitoring System (Dakik), a Flutter-based healthcare app for patient follow-ups.',
        'Ensured compliance with healthcare standards by validating features and debugging issues.',
        'Collaborated with cross-functional teams to deliver user-centric features, enhancing accessibility and patient engagement.',
      ],
      links: [
        { name: 'Dakik Website', url: 'https://dakik.app' },
      ],
      apps: ['Remote Patient Monitoring Systems (Dakik)'],
      color: 'from-green-500 to-teal-500',
    },
  ];

  const internships = [
    {
      title: 'Intern Programmer',
      company: 'TURKISH AEROSPACE INDUSTRIES (TAI)',
      period: '06/2022 - 07/2022',
      description: [
        'Researched OSI Layers and UDP',
        'Learned basic C# with Visual Studio',
        'Socket Programmed with UDP using C#',
        'Created GUI and integrated it with Sockets',
      ],
      website: 'https://www.tusas.com/',
      color: 'from-red-500 to-orange-500',
    },
    {
      title: 'Intern Programmer',
      company: 'LINKAS TECHNOLOGY INC.',
      period: '06/2021 - 07/2021',
      description: [
        'Worked C code algorithms with UML charts.',
        'Examined parameters for CAN bus from Excel.',
        'Researched CAN bus and LIN bus.',
        'Studied LIN bus parameters for MCU (Motor Control Unit).',
        'Wrote a C code using parameters, and ran it on the electric construction machine.',
      ],
      website: 'https://www.linkas.com.tr/',
      color: 'from-yellow-500 to-orange-500',
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
                İş Deneyimlerim
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Profesyonel kariyerim boyunca edindiğim deneyimler ve katkıda bulunduğum projeler
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
              Profesyonel Deneyimler
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
                        <h4 className="font-semibold text-gray-800 mb-2">Links:</h4>
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
                        <h4 className="font-semibold text-gray-800 mb-2">Published Apps:</h4>
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
              Staj Deneyimleri
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
                    Visit Website
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* References */}
        <section className="px-4 sm:px-6 lg:px-8 mt-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center"
            >
              <h2 className="text-3xl font-bold mb-4">Referanslar</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2">Murat Yılmaz</h3>
                  <p className="mb-2">Manager at TAI</p>
                  <p className="text-sm">muratyilmaz.metu@gmail.com</p>
                  <p className="text-sm">+90 543 343 5359</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2">Tufan Kesen</h3>
                  <p className="mb-2">Manager at Linkas</p>
                  <p className="text-sm">+90 555 638 0799</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Experience;