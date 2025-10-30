import React, { useState, useEffect } from 'react';
import { Building2, Wrench, Hammer, HardHat, Crane, PaintBucket, Zap, Phone, Mail, MapPin, Clock, Menu, X, MessageCircle, ChevronLeft, ChevronRight, XIcon, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { mockData } from '../utils/mockData';
import { useIntersectionObserver, useCounter } from '../hooks/useIntersectionObserver';
import ScrollProgressBar from '../components/ScrollProgressBar';
import FadeInSection from '../components/FadeInSection';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [formValidation, setFormValidation] = useState({ name: false, email: false, message: false });

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicos', 'portfolio', 'testemunhos', 'faq', 'sobre', 'contactos'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Validate form fields
  const validateField = (field, value) => {
    if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    }
    return value.trim().length > 0;
  };

  // Handle form changes with validation
  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setFormValidation({ ...formValidation, [field]: validateField(field, value) });
  };

  // Handle form submission with Web3Forms
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append('access_key', '13c50548-837d-47a3-a340-ca829ddd6e8e');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone || 'Não fornecido');
    formDataToSend.append('message', formData.message);
    formDataToSend.append('from_name', 'Website Somar Distâncias');
    formDataToSend.append('subject', 'Nova Mensagem do Website - Somar Distâncias');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      const data = await response.json();

      if (data.success) {
        alert('✅ Mensagem enviada com sucesso! Entraremos em contacto em breve.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('❌ Erro ao enviar mensagem. Por favor, tente novamente ou contacte-nos diretamente.');
        console.error('Erro Web3Forms:', data);
      }
    } catch (error) {
      alert('❌ Erro ao enviar mensagem. Por favor, tente novamente ou contacte-nos diretamente.');
      console.error('Erro ao enviar:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animated Stats Component
  const AnimatedStats = () => {
    const [ref, isVisible] = useIntersectionObserver();
    const years = useCounter(13, 2000, isVisible);
    const projects = useCounter(200, 2000, isVisible);
    const clients = useCounter(150, 2000, isVisible);

    return (
      <div ref={ref} className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg text-center transform transition-all duration-700 hover:scale-105">
          <div className="text-4xl font-bold text-orange-600 mb-2">{years}+</div>
          <div className="text-gray-600">Anos de Experiência</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center transform transition-all duration-700 hover:scale-105">
          <div className="text-4xl font-bold text-blue-600 mb-2">{projects}+</div>
          <div className="text-gray-600">Projetos Realizados</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center transform transition-all duration-700 hover:scale-105">
          <div className="text-4xl font-bold text-green-600 mb-2">{clients}+</div>
          <div className="text-gray-600">Clientes Satisfeitos</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center transform transition-all duration-700 hover:scale-105">
          <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
          <div className="text-gray-600">Compromisso</div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('inicio')} 
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer"
              aria-label="Ir para o início"
            >
              <img 
                src="https://customer-assets.emergentagent.com/job_somarconst/artifacts/mdrgrfh2_LOGO%20SOMAR%20DISTANCIAS.png" 
                alt="Somar Distâncias Logo" 
                className="h-12 w-auto"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {mockData.navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                    activeSection === item.id ? 'text-orange-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contactos')} 
                className="bg-orange-600 hover:bg-orange-700 text-white"
              >
                Contacte-nos
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 space-y-2 border-t pt-4">
              {mockData.navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    activeSection === item.id 
                      ? 'bg-orange-50 text-orange-600' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 relative overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-blue-50 to-green-50 opacity-50"></div>
        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                13 Anos de Experiência
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Empresa de Construção Civil em <span className="text-orange-600">Lisboa</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Construção de edifícios, moradias e remodelações em Lisboa e arredores. 
                13 anos de experiência em obras de construção civil. Da fundação ao acabamento, 
                transformamos os seus projetos em realidade com qualidade e compromisso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('contactos')}
                  className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6"
                >
                  Solicite Orçamento
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => scrollToSection('servicos')}
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-8 py-6"
                >
                  Ver Serviços
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <a href="tel:+351961313663" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <Phone className="text-orange-600" size={20} />
                  <span className="text-sm font-medium text-gray-700">+351 961 313 663</span>
                </a>
                <a href="mailto:somardistancias8.geral@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <Mail className="text-blue-600" size={20} />
                  <span className="text-sm font-medium text-gray-700">somardistancias8.geral@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1599995903128-531fc7fb694b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMHNpdGV8ZW58MHx8fHwxNzYxMjI4MDYxfDA&ixlib=rb-4.1.0&q=85"
                  alt="Obra de Construção Profissional"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchpriority="high"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="text-3xl font-bold text-orange-600">13+</div>
                <div className="text-sm text-gray-600">Anos no Mercado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                Os Nossos <span className="text-orange-600">Serviços</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Oferecemos uma gama completa de serviços de construção para empresas e particulares
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockData.services.map((service, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <Card 
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white h-full"
                >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
                    index % 3 === 0 ? 'bg-orange-100' : index % 3 === 1 ? 'bg-blue-100' : 'bg-green-100'
                  }`}>
                    <service.icon className={`${
                      index % 3 === 0 ? 'text-orange-600' : index % 3 === 1 ? 'text-blue-600' : 'text-green-600'
                    }`} size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Os Nossos <span className="text-orange-600">Projetos</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Exemplos do nosso trabalho e compromisso com a excelência
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.portfolio.map((project, index) => (
              <div key={index} className="group cursor-pointer" onClick={() => { setSelectedProject(project); setSelectedImageIndex(0); }}>
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  {/* Status Badge */}
                  {project.status && (
                    <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Concluído' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-orange-500 text-white'
                    }`}>
                      {project.status}
                    </div>
                  )}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-200">{project.description}</p>
                      {project.images && project.images.length > 1 && (
                        <p className="text-xs mt-2 text-orange-300">📷 {project.images.length} fotos</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{project.location}</p>
                  {project.client && (
                    <p className="text-xs text-blue-600 mt-1">Cliente: {project.client}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors z-10"
          >
            <X size={32} />
          </button>
          
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Main Image */}
            <div className="relative">
              <img
                src={selectedProject.images ? selectedProject.images[selectedImageIndex] : selectedProject.image}
                alt={`${selectedProject.title} - Imagem ${selectedImageIndex + 1}`}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                loading="lazy"
                decoding="async"
              />
              
              {/* Navigation Arrows */}
              {selectedProject.images && selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImageIndex((selectedImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
                  >
                    <ChevronLeft size={28} />
                  </button>
                  <button
                    onClick={() => setSelectedImageIndex((selectedImageIndex + 1) % selectedProject.images.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
                  >
                    <ChevronRight size={28} />
                  </button>
                </>
              )}
            </div>
            
            {/* Project Info */}
            <div className="mt-6 text-white text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                {selectedProject.status && (
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    selectedProject.status === 'Concluído' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-orange-500 text-white'
                  }`}>
                    {selectedProject.status}
                  </span>
                )}
              </div>
              <p className="text-orange-400 mb-2">{selectedProject.location}</p>
              {selectedProject.client && (
                <p className="text-blue-300 text-sm mb-2">Cliente: {selectedProject.client}</p>
              )}
              <p className="text-gray-300">{selectedProject.description}</p>
              {selectedProject.images && selectedProject.images.length > 1 && (
                <p className="text-sm text-gray-400 mt-2">Imagem {selectedImageIndex + 1} de {selectedProject.images.length}</p>
              )}
            </div>
            
            {/* Thumbnail Gallery */}
            {selectedProject.images && selectedProject.images.length > 1 && (
              <div className="flex gap-3 mt-6 overflow-x-auto pb-2 justify-center">
                {selectedProject.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Miniatura ${idx + 1}`}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`h-20 w-28 object-cover rounded-lg cursor-pointer transition-all ${
                      idx === selectedImageIndex 
                        ? 'ring-4 ring-orange-500 opacity-100' 
                        : 'opacity-50 hover:opacity-75'
                    }`}
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <section id="testemunhos" className="py-20 bg-gradient-to-br from-orange-50 via-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              O Que Dizem os Nossos <span className="text-orange-600">Clientes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A satisfação dos nossos clientes é a nossa maior conquista
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-orange-500 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Perguntas <span className="text-orange-600">Frequentes</span>
            </h2>
            <p className="text-lg text-gray-600">
              Respostas às questões mais comuns sobre os nossos serviços
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {mockData.faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-orange-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Sobre a <span className="text-orange-600">Somar Distâncias</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Com <strong>13 anos de experiência em construção civil</strong>, a Somar Distâncias, Lda. 
                  é uma <strong>empresa de construção em Lisboa</strong> especializada em{' '}
                  <strong>construção de edifícios, moradias e remodelações</strong>.{' '}
                  Estabelecemo-nos como referência em qualidade e profissionalismo na Grande Lisboa.
                </p>
                <p>
                  A nossa missão é transformar os sonhos dos nossos clientes em realidade, oferecendo{' '}
                  <strong>soluções completas em construção civil</strong> desde a fundação até aos acabamentos finais.{' '}
                  Trabalhamos com empresas e particulares em <strong>Lisboa e arredores</strong>, 
                  garantindo sempre a excelência em cada projeto de construção.
                </p>
                <p>
                  <strong>Os nossos valores:</strong>
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span><strong>Qualidade:</strong> Utilizamos os melhores materiais e técnicas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span><strong>Compromisso:</strong> Cumprimos prazos e orçamentos acordados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span><strong>Profissionalismo:</strong> Equipa experiente e qualificada</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span><strong>Transparência:</strong> Comunicação clara em todas as etapas</span>
                  </li>
                </ul>
              </div>
            </div>
            <AnimatedStats />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contactos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Entre em <span className="text-orange-600">Contacto</span>
            </h2>
            <p className="text-lg text-gray-600">
              Estamos prontos para dar vida ao seu projeto
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie-nos uma Mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field for spam protection */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                  <div className="relative">
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleFormChange('name', e.target.value)}
                      placeholder="O seu nome"
                      className="w-full pr-10"
                    />
                    {formValidation.name && formData.name && (
                      <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" size={20} />
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <div className="relative">
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleFormChange('email', e.target.value)}
                      placeholder="seuemail@exemplo.com"
                      className="w-full pr-10"
                    />
                    {formValidation.email && formData.email && (
                      <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" size={20} />
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+351 XXX XXX XXX"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem *</label>
                  <div className="relative">
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => handleFormChange('message', e.target.value)}
                      placeholder="Descreva o seu projeto..."
                      rows={5}
                      className="w-full pr-10"
                    />
                    {formValidation.message && formData.message && (
                      <CheckCircle2 className="absolute right-3 top-3 text-green-500" size={20} />
                    )}
                  </div>
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 text-lg"
                >
                  {isSubmitting ? 'A enviar...' : 'Enviar Mensagem'}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-orange-600" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Morada</p>
                      <p className="text-gray-600">Estrada de Santa Eulália, Horta Preta<br />Casal das Oliveiras<br />2670-351 Loures, Portugal</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Telefone</p>
                      <p className="text-gray-600">
                        <a href="tel:+351961313663" className="hover:text-orange-600 transition-colors">
                          +351 961 313 663
                        </a>
                      </p>
                      <p className="text-gray-600">
                        <a href="tel:+351960120888" className="hover:text-orange-600 transition-colors">
                          +351 960 120 888
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-green-600" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">
                        <a href="mailto:somardistancias8.geral@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">
                          somardistancias8.geral@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-orange-600" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Horário de Funcionamento</p>
                      <p className="text-gray-600">Segunda a Sexta: 09:00 - 17:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-lg h-64">
                <iframe
                  title="Localização Somar Distâncias"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.8!2d-9.166!3d38.833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQ5JzU4LjgiTiA5wrAwOSc1Ny42Ilc!5e0!3m2!1spt-PT!2spt!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img 
                src="https://customer-assets.emergentagent.com/job_somarconst/artifacts/mdrgrfh2_LOGO%20SOMAR%20DISTANCIAS.png" 
                alt="Somar Distâncias Logo" 
                className="h-16 mb-4"
                loading="lazy"
                decoding="async"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                Construindo o futuro com qualidade e compromisso há mais de 13 anos.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                {mockData.navigation.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="tel:+351961313663" className="hover:text-orange-400 transition-colors">
                    +351 961 313 663
                  </a>
                </li>
                <li>
                  <a href="tel:+351960120888" className="hover:text-orange-400 transition-colors">
                    +351 960 120 888
                  </a>
                </li>
                <li>
                  <a href="mailto:somardistancias8.geral@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                    somardistancias8.geral@gmail.com
                  </a>
                </li>
                <li>2670-351 Loures, Portugal</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Somar Distâncias, Lda. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/351961313663"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Contacte-nos via WhatsApp"
      >
        <MessageCircle className="text-white" size={28} />
      </a>
    </div>
  );
};

export default Home;