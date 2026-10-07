import React from "react";
import { Mail, Phone, MapPin, Code, Database, Smartphone, Cloud, Brain, Shield, Users } from "lucide-react";

const Technologies: React.FC = () => {
  const techSections = [
    {
      icon: <Code className="w-10 h-10 text-blue-600" />,
      title: "Frontend Development",
      desc: "Modern frontend technologies for creating exceptional user experiences",
      tags: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Material-UI"],
    },
    {
      icon: <Database className="w-10 h-10 text-blue-600" />,
      title: "Backend Development",
      desc: "Robust backend solutions for scalable and secure applications",
      tags: ["Node.js", "Python", "Django", "Express.js", "FastAPI", "GraphQL"],
    },
    {
      icon: <Smartphone className="w-10 h-10 text-blue-600" />,
      title: "Mobile Development",
      desc: "Cross-platform and native mobile applications",
      tags: ["Flutter", "React Native", "iOS (Swift)", "Android (Kotlin)", "Ionic", "Xamarin"],
    },
    {
      icon: <Cloud className="w-10 h-10 text-blue-600" />,
      title: "Cloud & DevOps",
      desc: "Cloud infrastructure and deployment automation",
      tags: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform"],
    },
    {
      icon: <Brain className="w-10 h-10 text-blue-600" />,
      title: "AI & Machine Learning",
      desc: "Cutting-edge AI and ML technologies",
      tags: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face", "LangChain"],
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      title: "Security & Testing",
      desc: "Comprehensive security and quality assurance",
      tags: ["OAuth 2.0", "JWT", "SSL/TLS", "Jest", "Cypress", "Penetration Testing"],
    },
    {
      icon: <Database className="w-10 h-10 text-blue-600" />,
      title: "Database & Storage",
      desc: "Efficient data management and storage solutions",
      tags: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch", "Firebase"],
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: "Integration & APIs",
      desc: "Seamless system integration and API development",
      tags: ["REST APIs", "GraphQL", "Webhooks", "Microservices", "API Gateway", "Message Queues"],
    },
  ];

  const approach = [
    {
      title: "Agile Methodology",
      desc: "Iterative development with continuous feedback and rapid deployment cycles.",
      points: ["Sprint Planning", "Daily Standups", "Continuous Integration", "Regular Reviews"],
    },
    {
      title: "Quality Assurance",
      desc: "Comprehensive testing strategies to ensure reliable and bug-free applications.",
      points: ["Unit Testing", "Integration Testing", "Performance Testing", "Security Audits"],
    },
    {
      title: "DevOps & Deployment",
      desc: "Automated deployment pipelines and infrastructure management.",
      points: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging", "Auto Scaling"],
    },
  ];

  const benefits = [
    { icon: "🛡️", title: "Enterprise-Grade Security", desc: "Industry-standard security practices and technologies to protect your data and applications." },
    { icon: "📈", title: "Scalable Architecture", desc: "Technologies that grow with your business, handling increased load and complexity." },
    { icon: "🚀", title: "Future-Ready", desc: "Cutting-edge technologies that prepare your business for tomorrow's challenges." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-28 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Technologies We Master</h1>
          <p className="text-xl opacity-90">
            Leveraging cutting-edge technologies to build scalable, secure, and innovative solutions
          </p>
        </div>
      </section>

      {/* Tech Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {techSections.map((tech, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="mr-4">{tech.icon}</div>
                <div>
                  <h3 className="text-xl font-bold">{tech.title}</h3>
                  <p className="text-gray-600 text-sm">{tech.desc}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {tech.tags.map((tag, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Development Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Development Approach</h2>
          <p className="text-gray-600 mb-12">Modern development practices ensuring quality, scalability, and maintainability</p>
          <div className="grid md:grid-cols-3 gap-8">
            {approach.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  {item.points.map((p, i) => (
                    <li key={i}>• {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Our Technology Stack?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((b, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{b.icon}</div>
                <h4 className="text-xl font-bold mb-2">{b.title}</h4>
                <p className="text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us today and let's discuss how we can help you achieve your digital transformation goals.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </a>
            <a href="/services" className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
