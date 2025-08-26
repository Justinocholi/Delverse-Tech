import React, { useState } from "react";
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
} from "lucide-react";

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("all");

  const filterProjects = (category: string) => {
    setFilter(category);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <a href="/">
            <img
              src="/logo.png"
              alt="Delverse Logo"
              className="w-16 h-16 object-contain"
            />
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="nav-link text-gray-600 hover:text-blue-600">
              Home
            </a>
            <a
              href="/services"
              className="nav-link text-gray-600 hover:text-blue-600"
            >
              Services
            </a>
            <a
              href="/technologies"
              className="nav-link text-gray-600 hover:text-blue-600"
            >
              Technologies
            </a>
            <a href="/portfolio" className="nav-link text-blue-600 font-medium">
              Portfolio
            </a>
            <a
              href="/about"
              className="nav-link text-gray-600 hover:text-blue-600"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="nav-link text-gray-600 hover:text-blue-600"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      {/* Hero / Services */}
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
          {/* Example card */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 mb-6">
              <Brain className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold mb-4">AI-Powered Solutions</h3>
            <p className="text-gray-600 mb-6">
              Transform your business with intelligent automation, ML models,
              and AI-driven insights.
            </p>
            <ul className="space-y-2">
              {[
                "Machine Learning Models",
                "Natural Language Processing",
                "Computer Vision",
                "Predictive Analytics",
              ].map((item) => (
                <li key={item} className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Repeat for Website Development, Mobile Apps, etc. */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 mb-6">
              <Globe className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Website Development</h3>
            <p className="text-gray-600 mb-6">
              Create responsive websites that engage users and drive
              conversions.
            </p>
            <ul className="space-y-2">
              {[
                "Responsive Design",
                "SEO Optimization",
                "CMS Integration",
                "E-commerce Solutions",
              ].map((item) => (
                <li key={item} className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Add Smartphone, Database, User, Shield sections similarly */}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-600 mb-12">
            How we deliver exceptional results for our clients
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discovery & Planning",
                desc: "We analyze your needs and create a project roadmap.",
              },
              {
                step: "2",
                title: "Design & Development",
                desc: "Our team brings your vision to life with best practices.",
              },
              {
                step: "3",
                title: "Testing & QA",
                desc: "Rigorous testing ensures flawless performance.",
              },
              {
                step: "4",
                title: "Launch & Support",
                desc: "We deploy and support your solution post-launch.",
              },
            ].map((s) => (
              <div key={s.step} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 text-3xl font-bold mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
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
            Contact us today and let's discuss your digital transformation
            goals.
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
      <footer className="bg-blue-900 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src="/logo.png"
              alt="Delverse Logo"
              className="w-16 h-16 mb-4"
            />
            <p className="text-gray-400">
              Delverse Technologies is a consulting firm specializing in AI
              solutions and digital transformation.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/technologies"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Technologies
                </a>
              </li>
            </ul>
          </div>
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
                <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                Plot 2542, Hassan Usman Katsina Street, Asokoro, Abuja, Nigeria
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          © 2025 Delverse Technologies Limited. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
