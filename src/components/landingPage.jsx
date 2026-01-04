import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Mail, MapPin, Paintbrush, FileText } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      easing: 'ease-out',
    });
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-slate-50 overflow-x-hidden">
      {/* Header */}
      <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/98 shadow-lg shadow-blue-500/10' : 'bg-white/98'
      }`}>
        <nav className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent cursor-pointer">
            Creativo
          </div>
          
          <ul className="hidden md:flex items-center gap-8 text-lg">
            {['home', 'product', 'services', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="text-slate-600 hover:text-blue-500 font-medium transition-colors relative group"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-0.5 bg-blue-500 transition-all duration-300"></span>
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-600 hover:text-blue-500 transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-xl shadow-lg">
            <ul className="flex flex-col p-8 gap-4">
              {['home', 'product', 'services', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-slate-600 hover:text-blue-500 font-medium transition-colors w-full text-left"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-500 to-blue-800 overflow-hidden pt-20">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/10 w-48 h-48 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-3/5 right-1/10 w-36 h-36 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/5 left-3/5 w-24 h-24 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Creativo
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Wujudkan ide kreatif Anda dengan produk custom berkualitas dan layanan digital profesional. Dari desain hingga eksekusi, kami hadir untuk memenuhi kebutuhan kreatif Anda.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('order')}
                className="bg-white text-blue-500 px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                Pesan Sekarang
              </button>
              <button
                onClick={() => scrollToSection('product')}
                className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                Lihat Produk
              </button>
            </div>
          </div>

          <div className="flex justify-center" data-aos="fade-up" data-aos-delay="200">
            <img
              src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Creative Design"
              className="w-full max-w-md rounded-xl shadow-2xl animate-float"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="product" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
              Produk Custom Kami
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></span>
            </h2>
            <p className="text-slate-600 text-lg mt-8 max-w-3xl mx-auto">
              Berbagai produk custom berkualitas tinggi dengan desain sesuai keinginan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                img: 'img/mug.jpg',
                title: 'Mug Custom',
                desc: 'Mug berkualitas tinggi dengan desain sesuai keinginan Anda. Cocok untuk hadiah, merchandise, atau koleksi pribadi.',
                price: 'Mulai 23K'
              },
              {
                img: 'img/ganci.jpg',
                title: 'Gantungan Kunci Custom',
                desc: 'Gantungan kunci unik dengan desain sesuai permintaan. Cocok untuk hadiah, merchandise, atau koleksi pribadi.',
                price: 'Mulai 9K'
              }
            ].map((product, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-white rounded-xl overflow-hidden shadow-lg shadow-blue-500/10 border border-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">{product.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{product.desc}</p>
                  <span className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold">
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
              Layanan Digital
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></span>
            </h2>
            <p className="text-slate-600 text-lg mt-8 max-w-3xl mx-auto">
              Layanan profesional untuk kebutuhan digital dan dokumen Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                icon: <Paintbrush className="w-6 h-6" />,
                title: 'Jasa Desain Canva',
                desc: 'Layanan desain profesional menggunakan Canva untuk berbagai kebutuhan visual Anda.',
                features: ['Desain social media post', 'Poster dan flyer', 'Presentasi menarik', 'Logo dan branding', 'Infografis'],
                price: 'Mulai 5K'
              },
              {
                img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                icon: <FileText className="w-6 h-6" />,
                title: 'Edit Dokumen Office',
                desc: 'Layanan editing dan formatting dokumen Word, Excel, dan PowerPoint yang rapi dan profesional.',
                features: ['Formatting dokumen Word', 'Pembuatan spreadsheet Excel', 'Desain presentasi PowerPoint', 'Template dokumen bisnis', 'Data entry dan analisis'],
                price: 'Mulai 5K'
              }
            ].map((service, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-white rounded-xl overflow-hidden shadow-lg shadow-blue-500/10 border border-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-500 flex items-center gap-3">
                    {service.icon}
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600">
                        <span className="text-blue-500 font-bold mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold">
                    {service.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Channels */}
      <section id="order" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="bg-white rounded-xl shadow-lg shadow-blue-500/10 border border-blue-500/10 p-12 text-center" data-aos="zoom-in">
            <h3 className="text-3xl font-bold mb-8">Pesan Melalui</h3>
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="https://instagram.com/creative_voo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Instagram className="w-6 h-6" />
                Instagram
              </a>
            </div>
            <p className="mt-6 text-slate-600">Kami siap membantu Anda 7 hari seminggu</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div data-aos="fade-up" data-aos-delay="0">
              <h3 className="text-2xl font-bold mb-6">Creativo</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Solusi kreatif untuk kebutuhan custom dan digital Anda. Kualitas terbaik, harga terjangkau.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/creative_voo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="mailto:creativoconnectin@gmail.com"
                  className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-semibold mb-6">Kontak</h3>
              <div className="space-y-4">
                <a
                  href="https://instagram.com/creative_voo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-blue-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  @creative_voo
                </a>
                <a
                  href="mailto:creativoconnectin@gmail.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-blue-500 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  creativoconnectin@gmail.com
                </a>
                <p className="flex items-center gap-3 text-slate-400">
                  <MapPin className="w-5 h-5" />
                  Jakarta, Indonesia
                </p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-semibold mb-6">Layanan</h3>
              <div className="space-y-3">
                {[
                  { label: 'Produk Custom', id: 'product' },
                  { label: 'Jasa Desain', id: 'services' },
                  { label: 'Edit Dokumen', id: 'services' },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-slate-400 hover:text-blue-500 hover:translate-x-1 transition-all duration-300 text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Creativo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;