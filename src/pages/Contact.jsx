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

const Contact = () => {
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
    // Form gönderme işlemi burada yapılacak
    // EmailJS, Firebase, veya backend API kullanabilirsiniz
    console.log('Form Data:', formData);
    setIsSubmitted(true);
    
    // 3 saniye sonra formu sıfırla
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

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'kantar.deniz.83@gmail.com',
      link: 'mailto:kantar.deniz.83@gmail.com',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: <FaPhone />,
      title: 'Telefon',
      value: '+90 534 010 2240',
      link: 'tel:+905340102240',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Konum',
      value: 'Ankara, Turkey',
      link: 'https://www.google.com/maps/place/Ankara',
      color: 'from-blue-500 to-cyan-500',
    },
  ];

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
                İletişime Geçin
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Projeleriniz veya işbirliği fırsatları için benimle iletişime geçmekten çekinmeyin!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-white text-3xl mx-auto mb-4`}>
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-600">
                    {info.value}
                  </p>
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
                    Birlikte Çalışalım!
                  </h2>
                  <p className="text-white/90 leading-relaxed mb-6">
                    Mobil uygulama geliştirme, web projeleri veya IoT sistemleri konusunda 
                    profesyonel çözümler arıyorsanız, doğru yerdesiniz. Flutter, React.js ve 
                    modern teknolojilerle projelerinizi hayata geçirebilirim.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="text-xl" />
                      <span>2+ yıl profesyonel deneyim</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="text-xl" />
                      <span>Production-ready uygulamalar</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="text-xl" />
                      <span>Clean code & best practices</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Sosyal Medya
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
                          <p className="text-sm text-white/80">Profili Görüntüle</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Müsaitlik
                  </h3>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-700 font-semibold">Yeni projeler için uygun</span>
                  </div>
                  <p className="text-gray-600">
                    Freelance projeler ve part-time işbirlikleri için açığım. 
                    Projenizi konuşmak için iletişime geçin!
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