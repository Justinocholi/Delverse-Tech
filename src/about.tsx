import React from "react";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const About: React.FC = () => {
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
            <a
              href="/portfolio"
              className="nav-link text-gray-600 hover:text-blue-600"
            >
              Portfolio
            </a>
            <a
              href="/about"
              className="nav-link text-blue-600 font-medium"
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

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-28 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            About Delverse Technologies
          </h1>
          <p className="text-xl opacity-90">
            Your trusted partner in digital transformation, delivering innovative AI-driven solutions
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { num: "50+", label: "Projects Completed" },
            { num: "30+", label: "Happy Clients" },
            { num: "5+", label: "Years Experience" },
            { num: "24/7", label: "Support Available" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.num}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8 h-80 flex items-center justify-center">
            <img src="/image3.jpg" alt="Our Story" className="w-30 h-30 object-contain" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded with a vision to bridge the gap between cutting-edge technology and practical business solutions...
            </p>
            <p className="text-gray-600 mb-4">
              We understand that in today's rapidly evolving digital landscape...
            </p>
            <p className="text-gray-600">
              Our team of experienced professionals combines deep technical expertise...
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">👁️</div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the global leader in AI-driven solutions, empowering businesses worldwide...
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To craft innovative, tailored technology solutions that drive meaningful growth...
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-gray-600 mb-12">The principles that guide everything we do</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "🎯", title: "Innovation", text: "We continuously push boundaries..." },
              { icon: "👥", title: "Collaboration", text: "We believe in the power of partnership..." },
              { icon: "🏆", title: "Precision", text: "Every detail matters..." },
              { icon: "💎", title: "Integrity", text: "We operate with transparency..." },
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{val.icon}</div>
                <h4 className="text-xl font-bold mb-2">{val.title}</h4>
                <p className="text-gray-600">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600">Meet the talented professionals behind Delverse Technologies</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Map over team members if you want DRY code */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-bold mb-2">David Ocholi</h4>
              <div className="text-blue-600 font-medium mb-4">Founder & Team Lead</div>
              <p className="text-gray-600 text-sm">A seasoned IT professional...</p>
            </div>
            {/* Repeat for other members */}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Delverse?</h2>
          <p className="text-gray-600 mb-12">What sets us apart in the technology consulting landscape</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🌐", title: "Remote-First Approach", text: "Access to global talent..." },
              { icon: "👨‍💼", title: "Expert Team", text: "Skilled professionals with deep expertise..." },
              { icon: "🏅", title: "Proven Results", text: "Track record of successful projects..." },
            ].map((why, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{why.icon}</div>
                <h4 className="text-xl font-bold mb-2">{why.title}</h4>
                <p className="text-gray-600">{why.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 opacity-90">Contact us today and let's discuss your goals.</p>
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
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img src="/logo.png" alt="Delverse Logo" className="w-16 h-16 mb-4" />
            <p className="text-gray-400 mb-4">
              Delverse Technologies is a remote, technology-driven consulting firm specializing in AI-based solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/portfolio" className="text-gray-400 hover:text-white">Portfolio</a></li>
              <li><a href="/technologies" className="text-gray-400 hover:text-white">Technologies</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> delversetech@gmail.com</li>
              <li className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +234 806 930 5155</li>
              <li className="flex items-start"><MapPin className="w-4 h-4 mr-2 mt-0.5" /> Plot 2542, Hassan Usman Katsina Street, Asokoro, Abuja, Nigeria</li>
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

export default About;
