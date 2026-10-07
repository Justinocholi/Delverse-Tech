import React from "react";
import {
  Brain,
  Globe,
  Smartphone,
  Database,
  User,
  Shield,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
} from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-12 h-12 text-blue-600" />,
      title: "AI-Powered Solutions",
      desc: "Transform your business with intelligent automation, machine learning models, and AI-driven insights.",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
      ],
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "Website Development",
      desc: "Create stunning, responsive websites with modern design principles and cutting-edge technologies.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "CMS Integration",
        "E-commerce Solutions",
      ],
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: "Mobile App Development",
      desc: "Build powerful native and cross-platform mobile applications with seamless user experiences.",
      features: [
        "Native iOS & Android",
        "Cross-platform Development",
        "UI/UX Design",
        "App Store Optimization",
      ],
    },
    {
      icon: <Database className="w-12 h-12 text-blue-600" />,
      title: "Data Analytics",
      desc: "Transform raw data into actionable insights with advanced analytics, BI, and visualization solutions.",
      features: [
        "Business Intelligence",
        "Data Visualization",
        "Reporting Dashboards",
        "Predictive Modeling",
      ],
    },
    {
      icon: <User className="w-12 h-12 text-blue-600" />,
      title: "IT Support",
      desc: "Protect your digital assets with comprehensive security solutions and reliable IT support.",
      features: [
        "Security Audits & Assessment",
        "Network Security Implementation",
        "Data Protection & Backup",
        "24/7 IT Support",
        "Compliance Management",
      ],
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Business Consulting",
      desc: "Strategic technology consulting to optimize operations and accelerate transformation.",
      features: [
        "Digital Transformation Strategy",
        "Technology Assessment",
        "Process Optimization",
        "Change Management",
        "Technology Roadmapping",
      ],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Discovery & Planning",
      desc: "We analyze your needs, understand goals, and create a project roadmap.",
    },
    {
      step: "2",
      title: "Design & Development",
      desc: "Our team brings your vision to life with cutting-edge technology.",
    },
    {
      step: "3",
      title: "Testing & QA",
      desc: "Rigorous testing ensures your solution performs flawlessly.",
    },
    {
      step: "4",
      title: "Launch & Support",
      desc: "We deploy your solution and provide ongoing support for success.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-28 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl opacity-90">
            Comprehensive technology solutions to drive your business forward
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">{srv.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{srv.title}</h3>
              <p className="text-gray-600 mb-6">{srv.desc}</p>
              <ul className="space-y-2">
                {srv.features.map((f, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-600 mb-12">
            How we deliver exceptional results for our clients
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl font-bold text-blue-600 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us today and let's discuss how we can help you achieve your
            digital goals.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </a>
            <a
              href="/services"
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <img
                src="/logo.png"
                alt="Delverse Logo"
                className="w-16 h-16 mb-4"
              />
              <p className="text-gray-400 mb-4 leading-relaxed">
                Delverse Technologies is a remote consulting firm specializing
                in AI-based solutions. We empower businesses with tailored
                digital products that drive growth.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/company/delverse-technologies-limited"
                  className="text-gray-400 hover:text-white"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://x.com/delverse_tech"
                  className="text-gray-400 hover:text-white"
                >
                  <Twitter />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/services" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/portfolio" className="hover:text-white">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="/technologies" className="hover:text-white">
                    Technologies
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" /> delversetech@gmail.com
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" /> +234 806 930 5155
                </li>
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5" /> Plot 2542, Hassan
                  Usman Katsina Street, Asokoro, Abuja, Nigeria
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
    </div>
  );
};

export default Services;
