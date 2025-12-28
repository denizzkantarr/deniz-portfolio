import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode, FaMobile, FaCloud } from 'react-icons/fa';
import PageTransition from '../components/PageTransition';

const Home = () => {
  const skills = [
    {
      icon: <FaMobile className="text-4xl" />,
      title: 'Mobile Development',
      description: 'Flutter & Dart ile cross-platform mobil uygulamalar',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FaCode className="text-4xl" />,
      title: 'Frontend Development',
      description: 'React.js ile modern web uygulamaları',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FaCloud className="text-4xl" />,
      title: 'Cloud & Backend',
      description: 'Firebase & GCP ile backend çözümleri',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const stats = [
    { number: '2+', label: 'Yıl Deneyim' },
    { number: '5+', label: 'Tamamlanan Proje' },
    { number: '3', label: 'Şirket Deneyimi' },
    { number: '10+', label: 'Teknoloji' },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Merhaba, Ben{' '}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Deniz Kantar
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-gray-600 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Software Developer & Flutter Specialist
                </motion.p>

                <motion.p
                  className="text-lg text-gray-600 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  2 yıllık deneyime sahip Flutter Developer olarak iOS ve Android platformları için
                  production-ready mobil uygulamalar geliştiriyorum. Modern teknolojiler ve
                  clean architecture prensipleriyle kullanıcı odaklı çözümler üretiyorum.
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
                      Projelerimi İncele
                      <FaArrowRight />
                    </motion.button>
                  </Link>

                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all"
                    >
                      İletişime Geç
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Content - Image Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-3xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <FaMobile className="text-8xl text-primary mx-auto mb-4 opacity-50" />
                      <p className="text-gray-600 font-semibold">
                        [Profil Fotoğrafınızı Buraya Ekleyebilirsiniz]
                      </p>
                    </div>
                  </div>
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
                Uzmanlık Alanlarım
              </h2>
              <p className="text-xl text-gray-600">
                Üzerinde çalıştığım teknolojiler ve yeteneklerim
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
                Bir Proje mi Düşünüyorsunuz?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Hayalinizdeki mobil veya web uygulamasını birlikte hayata geçirelim!
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  Hemen İletişime Geç
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