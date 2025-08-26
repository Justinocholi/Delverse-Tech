import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Star, Users, Code, Globe, Shield, Brain, Smartphone, Database, Cloud, Lock, Link, Award, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import '../src/style.css'; // ✅ Tailwind CSS file



// Main App Component
const DelverseApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pages = {
    home: 'Home',
    services: 'Services',
    technologies: 'Technologies',
    portfolio: 'Portfolio',
    about: 'About Us',
    contact: 'Contact Us'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        pages={pages}
      />
      <main className="mt-20">
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'technologies' && <TechnologiesPage />}
        {currentPage === 'portfolio' && <PortfolioPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

// Header Component
type HeaderProps = {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  pages: { [key: string]: string };
};

const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  mobileMenuOpen,
  setMobileMenuOpen,
  pages,
}) => {

  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="w-16 h-16 relative">
                      <img 
                        src="/logo.png" 
                        alt="Delverse Logo" 
                        className="object-contain w-16 h-16"
                          />
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {Object.entries(pages).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setCurrentPage(key)}
                className={`font-medium transition-colors ${
                  currentPage === key 
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Get a Quote
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {Object.entries(pages).map(([key, label]) => (
              <button
                key={key}
                onClick={() => {
                  setCurrentPage(key);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-4 rounded ${
                  currentPage === key 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

// Home Page Component
type HomePageProps = {
  setCurrentPage: (page: string) => void;
};

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Transform Your Business with",
      highlight: "Cutting-Edge Technology",
      description: "From web development to AI implementation, we deliver comprehensive solutions that streamline operations and accelerate digital transformation for forward-thinking companies.",
      image: "Tech workspace"
    },
    {
      title: "Delverse Solutions: Your Partner in",
      highlight: "Digital Transformation",
      description: "We stand at the core of international networks to advance your strategic interests. Our mission is to craft innovative, tailored solutions that drive meaningful business growth.",
      image: "Digital transformation"
    },
    {
      title: "Innovative",
      highlight: "AI Solutions",
      description: "Leverage cutting-edge artificial intelligence to transform your business processes and drive meaningful business growth with our comprehensive technology solutions.",
      image: "AI technology"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center min-h-96">
            <div className="lg:w-1/2 lg:pr-8">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                {slides[currentSlide].title} <span className="text-yellow-400">{slides[currentSlide].highlight}</span>
              </h1>
              <p className="text-lg mb-8 opacity-90">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setCurrentPage('services')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Our Services
                </button>
                <button 
                  onClick={() => setCurrentPage('about')}
                  className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-blue-900 transition-colors"
                >
                  About Us
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain size={64} className="text-white" />
                </div>
                <p className="text-lg">{slides[currentSlide].image}</p>
              </div>
            </div>
          </div>
          
          {/* Slide indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8 h-80 flex items-center justify-center">
                <Users size={120} className="text-blue-600" />
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <h2 className="text-3xl font-bold mb-6">
                Delverse Solutions: Your Partner in <span className="text-blue-600">Digital Transformation</span>
              </h2>
              <p className="text-gray-600 mb-6">
                We stand at the core of international networks to advance your strategic interests. Our mission is to craft innovative, tailored solutions that drive meaningful business growth.
              </p>
              <ul className="space-y-4 mb-8">
                <li><strong>Vision:</strong> Global leader in AI-driven solutions</li>
                <li><strong>Mission:</strong> Crafting innovative, tailored solutions for growth</li>
                <li><strong>Values:</strong> Driven by Innovation, Collaboration, and Precision</li>
              </ul>
              <button 
                onClick={() => setCurrentPage('about')}
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
            <p className="text-gray-600">Transforming your business with cutting-edge technology</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Brain size={40} />, title: "AI-Powered Solutions", desc: "Leverage cutting-edge artificial intelligence to transform your business processes and decision-making." },
              { icon: <Globe size={40} />, title: "Website Development", desc: "Create stunning, responsive websites that engage users and drive conversions." },
              { icon: <Smartphone size={40} />, title: "Web & Mobile App Development", desc: "Build powerful applications for web and mobile platforms with seamless user experiences." },
              { icon: <Database size={40} />, title: "Data Analytics", desc: "Transform raw data into actionable insights that drive strategic business decisions." },
              { icon: <Shield size={40} />, title: "IT Support & Cybersecurity", desc: "Protect your digital assets with comprehensive security solutions and reliable IT support." },
              { icon: <Users size={40} />, title: "Business Consulting", desc: "Strategic technology consulting to optimize operations and accelerate digital transformation." }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technologies We Master</h2>
            <p className="text-gray-600">Built on a foundation of excellence with cutting-edge technologies</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Flutter', 'Node.js', 'Python', 'Django', 'TensorFlow', 'PyTorch', 'AWS', 'Google Cloud', 'Docker', 'Kubernetes'].map((tech, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">Trusted by leading companies across various industries</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                stars: 5,
                text: "Delverse Technologies transformed our digital presence completely. Their team delivered a comprehensive website solution that not only looks professional but also significantly improved our operational efficiency.",
                author: "Engr. Yakubu Samaila",
                position: "Managing Director/CEO",
                company: "MECA GROUP"
              },
              {
                stars: 5,
                text: "Working with Delverse was a game-changer for our consultancy firm. They understood our complex requirements and delivered a sophisticated platform that perfectly aligns with our business needs.",
                author: "Dr. I.B. Gashinbaki",
                position: "Group Country Director",
                company: "DCP"
              },
              {
                stars: 5,
                text: "The educational platform Delverse developed for us exceeded all expectations. Their innovative approach to user experience design and robust backend architecture created a learning environment that both educators and students love.",
                author: "Michael Adebayo",
                position: "Director, Products",
                company: "Learnly App"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                  <p className="text-sm text-blue-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 opacity-90">Contact us today and let's discuss how we can help you achieve your digital transformation goals.</p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};


// Services Page Component
// Services Page Component
// Services Page Component
const ServicesPage = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl opacity-90">Comprehensive technology solutions to drive your business forward</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: <Brain size={60} />,
                title: "AI-Powered Solutions",
                description: "Transform your business with intelligent automation, machine learning models, and AI-driven insights that enhance decision-making and operational efficiency.",
                features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
              },
              {
                icon: <Globe size={60} />,
                title: "Website Development",
                description: "Create stunning, responsive websites that engage users and drive conversions with modern design principles and cutting-edge technologies.",
                features: ["Responsive Design", "SEO Optimization", "CMS Integration", "E-commerce Solutions"]
              },
              {
                icon: <Smartphone size={60} />,
                title: "Mobile App Development",
                description: "Build powerful native and cross-platform mobile applications that provide seamless user experiences across all devices.",
                features: ["Native iOS & Android", "Cross-platform Development", "UI/UX Design", "App Store Optimization"]
              },
              {
                icon: <Database size={60} />,
                title: "Data Analytics",
                description: "Transform raw data into actionable insights with advanced analytics, business intelligence, and data visualization solutions.",
                features: ["Business Intelligence", "Data Visualization", "Reporting Dashboards", "Predictive Modeling"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle size={16} className="text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Services Page Component
// Services Page Component
// Services Page Component



// Technologies Page Component
// Technologies Page Component
// Technologies Page Component
const TechnologiesPage = () => {
  const techCategories = [
    {
      icon: <Code size={40} />,
      title: "Frontend Development",
      description: "Modern frontend technologies for creating exceptional user experiences",
      technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Material-UI"]
    },
    {
      icon: <Database size={40} />,
      title: "Backend Development", 
      description: "Robust backend solutions for scalable and secure applications",
      technologies: ["Node.js", "Python", "Django", "Express.js", "FastAPI", "GraphQL"]
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile Development",
      description: "Cross-platform and native mobile applications",
      technologies: ["Flutter", "React Native", "iOS (Swift)", "Android (Kotlin)", "Ionic", "Xamarin"]
    },
    {
      icon: <Cloud size={40} />,
      title: "Cloud & DevOps",
      description: "Cloud infrastructure and deployment automation",
      technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform"]
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Technologies We Master</h1>
          <p className="text-xl opacity-90">Leveraging cutting-edge technologies to build scalable, secure, and innovative solutions</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {techCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-blue-600 mr-4">{category.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Technologies Page Component
// Technologies Page Component
// Technologies Page Component




// Portfolio Page Component
// Portfolio Page Component
// Portfolio Page Component  
const PortfolioPage = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "AbisGroup Africa",
      category: "ecommerce",
      description: "A comprehensive livestock processing company and marketplace platform connecting farmers, processors, and consumers in the livestock value chain.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      features: ["Livestock Marketplace", "Processing Management", "Supply Chain Tracking", "Payment Integration"],
      link: "https://www.abisgroup.africa/"
    },
    {
      id: 2,
      title: "MECA Group Company Website",
      category: "website",
      description: "Complete rebranding and redevelopment of MECA Group company website with modern design and enhanced user experience.",
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      features: ["Modern Design", "Mobile Responsive", "SEO Optimized", "Fast Loading"],
      link: "https://www.mecagroup.com.ng/"
    },
    {
      id: 3,
      title: "LearnlyApp Educational Platform",
      category: "education",
      description: "Interactive learning platform with uploadify features for educational content management and student engagement.",
      technologies: ["React", "Next.js", "Firebase", "Vercel"],
      features: ["Course Management", "File Upload", "Student Progress", "Interactive Content"],
      link: "https://uploadify-learning.vercel.app/"
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl opacity-90">Explore our successful projects and see how we've helped businesses achieve their digital transformation goals</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-4">
              {[
                { key: 'all', label: 'All' },
                { key: 'website', label: 'Website Development' },
                { key: 'ecommerce', label: 'E-commerce' },
                { key: 'education', label: 'Education' }
              ].map((filterBtn) => (
                <button
                  key={filterBtn.key}
                  onClick={() => setFilter(filterBtn.key)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    filter === filterBtn.key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {filterBtn.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold">{project.title.charAt(0)}</div>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    View Project <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Portfolio Page Component
// Portfolio Page Component
// Portfolio Page Component




// About Page Component
// About Page Component
// About Page Component


const AboutPage = () => {
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const team = [
    {
      name: "David Ocholi",
      role: "Founder & Team Lead",
      description: "A seasoned IT professional and visionary leader, David brings a wealth of experience in steering complex IT projects from concept to completion."
    },
    {
      name: "Tomiwa Amodemaja", 
      role: "Co-Founder & Lead Product Manager",
      description: "With a sharp eye for market needs and a passion for crafting exceptional user experiences, Tomiwa is the driving force behind our product vision."
    },
    {
      name: "Joshua Ocholi",
      role: "Co-Founder & Lead Developer", 
      description: "A true coding maestro, Joshua is the technical architect responsible for turning innovative ideas into robust, scalable software."
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Delverse Technologies</h1>
          <p className="text-xl opacity-90">Your trusted partner in digital transformation, delivering innovative AI-driven solutions</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8 h-80 flex items-center justify-center">
                <Users size={120} className="text-blue-600" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded with a vision to bridge the gap between cutting-edge technology and practical business solutions, Delverse Technologies has emerged as a leading remote consulting firm specializing in AI-driven software development.
              </p>
              <p className="text-gray-600 mb-4">
                We understand that in today's rapidly evolving digital landscape, businesses need more than just technology – they need strategic partners who can navigate complexity and deliver solutions that drive real results.
              </p>
              <p className="text-gray-600">
                Our team of experienced professionals combines deep technical expertise with industry knowledge to create tailored solutions that not only meet current needs but also position our clients for future growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">👁️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the global leader in AI-driven solutions, empowering businesses worldwide to achieve unprecedented growth through innovative technology and strategic digital transformation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center border-2 border-blue-600">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To craft innovative, tailored technology solutions that drive meaningful business growth, while building lasting partnerships based on trust, excellence, and shared success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600">Meet the talented professionals behind Delverse Technologies</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                <div className="text-blue-600 font-medium mb-4">{member.role}</div>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="opacity-90">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🎯", title: "Innovation", desc: "We continuously push the boundaries of technology to deliver cutting-edge solutions." },
              { icon: "👥", title: "Collaboration", desc: "We believe in the power of partnership and work closely with our clients." },
              { icon: "🏆", title: "Precision", desc: "Every detail matters. We maintain the highest standards of quality in all deliverables." },
              { icon: "💎", title: "Integrity", desc: "We operate with transparency, honesty, and ethical practices in all relationships." }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="opacity-90 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// About Page Component
// About Page Component
// About Page Component




// Contact Page Component
// Contact Page Component
// Contact Page Component

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({ fullName: '', email: '', subject: '', message: '' });
  };

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90">Ready to transform your business? We are here to answer your questions and help you with your digital needs.</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600">We'd love to hear from you. Choose the method that works best for you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <Mail size={30} />,
                title: "Email Address",
                highlight: "delversetech@gmail.com",
                subtitle: "Send us an email anytime!"
              },
              {
                icon: <Phone size={30} />,
                title: "Phone Number", 
                highlight: "+234 806 930 5155",
                subtitle: "Mon-Fri from 8am to 5pm"
              },
              {
                icon: <MapPin size={30} />,
                title: "Office Address",
                highlight: "Plot 2542, Hassan Usman Katsina Street, Asokoro, Abuja, Nigeria",
                subtitle: "Come visit our office"
              },
              {
                icon: <Clock size={30} />,
                title: "Working Hours",
                highlight: "Mon - Fri: 8:00 AM - 5:00 PM",
                subtitle: "Response time: 1-2 hours"
              }
            ].map((contact, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-blue-600 flex justify-center mb-4">{contact.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-1">{contact.highlight}</p>
                <p className="text-gray-600 text-sm">{contact.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Contact Form and Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-blue-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-blue-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry, consultation, etc."
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-blue-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your project requirements, goals, and any specific needs..."
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-blue-600 focus:outline-none transition-colors resize-vertical"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  ✈️ Send Message
                </button>
              </form>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Why Choose Delverse?</h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <span className="text-xl">💬</span>,
                    title: "Free Consultation",
                    desc: "Get expert advice on your project at no cost."
                  },
                  {
                    icon: <span className="text-xl">⚡</span>,
                    title: "Quick Response", 
                    desc: "We respond to all inquiries within 24 hours."
                  },
                  {
                    icon: <span className="text-xl">📞</span>,
                    title: "Direct Communication",
                    desc: "Work directly with our experienced team."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">Quick Quote</h3>
                <p className="text-gray-600 text-sm">
                  For urgent inquiries, call us directly at{' '}
                  <a href="tel:+2348069305155" className="text-blue-600 font-medium">
                    +234 806 930 5155
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Contact Page Component
// Contact Page Component
// Contact Page Component



// Footer Component
// Footer Component
// Footer Component

type FooterProps = {
  setCurrentPage: (page: string) => void;
};

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">
              D
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Delverse Technologies is a remote, technology-driven consulting firm specializing in AI-based software solutions. We empower businesses with tailored digital products that drive growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                📱
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { key: 'services', label: 'Services' },
                { key: 'about', label: 'About Us' },
                { key: 'portfolio', label: 'Portfolio' },
                { key: 'technologies', label: 'Technologies' }
              ].map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => setCurrentPage(link.key)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                delversetech@gmail.com
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                +234 806 930 5155
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                <span>Plot 2542, Hassan Usman Katsina Street, Asokoro, Abuja, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Delverse Technologies Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Footer Component
// Footer Component


export default DelverseApp;