import React, { useState, useEffect, useRef } from "react";
import { Shield, Users, Award, Sparkles } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Shield,
      title: "Privacy Protection",
      description:
        "Comprehensive privacy safeguards ensuring your AI applications meet U.S. privacy law standards.",
      color: "text-gray-700",
      bgColor: "bg-gray-50",
    },
    {
      icon: Users,
      title: "AI Governance",
      description:
        "Robust governance frameworks that establish accountability and transparency in AI systems.",
      color: "text-gray-700",
      bgColor: "bg-gray-50",
    },
    {
      icon: Award,
      title: "Independent Review",
      description:
        "Streamlined validation process that reviews AI applications against trusted standards.",
      color: "text-gray-700",
      bgColor: "bg-gray-50",
    },
    {
      icon: Sparkles,
      title: "Trust Assurance",
      description:
        "Seal of readiness that signals to investors, regulators, and customers that your AI is trustworthy.",
      color: "text-gray-700",
      bgColor: "bg-gray-50",
    },
  ];

  return (
    <section ref={aboutRef} id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Mission Section */}
        <div
          className={`text-center mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gray-50 text-gray-700 rounded-full text-sm font-medium mb-8 border border-gray-200">
            <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
            Our Mission
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Independent Trust Mark for AI
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The PAG Seal is an independent trust mark, grounded in U.S. privacy
            law and AI governance best practices, recognizing AI applications
            that demonstrate essential privacy protections and governance
            assurance.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Left Column - Mission Details */}
          <div className="space-y-8">
            <div
              className={`bg-gray-50 rounded-2xl p-8 border border-gray-100 transition-all duration-700 hover:shadow-lg hover:shadow-gray-200/50 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Sparkles className="w-6 h-6 text-blue-500 mr-3" />
                Our Approach
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Using our proprietary privacy and AI governance model, we review
                how organizations design, manage, and deploy their AI
                applications. Instead of lengthy audits, our streamlined process
                validates alignment with trusted standards.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The outcome is a seal of readiness that signals to investors,
                regulators, and customers that your AI is trustworthy,
                responsible, and prepared for rollout.
              </p>
            </div>

            <div
              className={`bg-gray-50 rounded-2xl p-8 border border-gray-100 transition-all duration-700 hover:shadow-lg hover:shadow-gray-200/50 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Award className="w-6 h-6 text-blue-500 mr-3" />
                Our Expertise
              </h3>
              <p className="text-gray-700 leading-relaxed">
                At PAG Seal, we specialize in privacy and AI governance. Our
                framework supports organizations in demonstrating that their AI
                applications are built with trust, accountability, and
                transparency. By establishing privacy and governance baselines
                drawn from leading laws, regulations, and best-practice
                frameworks, we provide a clear and structured path toward
                earning the PAG Seal.
              </p>
            </div>
          </div>

          {/* Right Column - Team & Certification */}
          <div className="space-y-8">
            <div
              className={`bg-gray-50 rounded-2xl p-8 border border-gray-100 transition-all duration-700 hover:shadow-lg hover:shadow-gray-200/50 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Users className="w-6 h-6 text-blue-500 mr-3" />
                Our Team
              </h3>
              <p className="text-gray-700 leading-relaxed">
                PAG Seal is led by its founder, a GRC and Privacy Engineer and
                Doctoral Candidate in AI and ML, holding FIP, CIPM, and CIPP/US
                certifications with expertise in cybersecurity, privacy law, and
                artificial intelligence.
              </p>
            </div>

            <div
              className={`bg-gray-50 rounded-2xl p-8 border border-gray-100 transition-all duration-700 hover:shadow-lg hover:shadow-gray-200/50 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-blue-500 mr-3" />
                Pilot Certification
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pilot Certification gives organizations an early opportunity to
                demonstrate that their AI applications meet privacy and
                governance readiness standards.
              </p>
              <p className="text-gray-700 leading-relaxed">
                It delivers recognition today while positioning them to
                seamlessly transition into the PAG Seal, giving early adopters a
                visible edge with regulators, investors, and customers.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid - What We Offer */}
        <div className="mb-24">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h3>
            <p className="text-gray-600 text-lg">
              Comprehensive privacy and AI governance solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`text-center p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-lg group bg-white hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${800 + index * 100}ms`,
                }}
              >
                <div
                  className={`inline-flex p-4 rounded-2xl ${service.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100`}
                >
                  <service.icon
                    className={`w-8 h-8 ${service.color} group-hover:text-blue-500 transition-colors duration-300`}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-center text-white transition-all duration-700 hover:shadow-2xl hover:shadow-gray-900/50 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "1200ms" }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Earn Your PAG Seal?
          </h3>
          <p className="text-xl mb-8 text-gray-300">
            Join organizations that are leading the way in trustworthy AI
          </p>
          <button className="bg-white text-gray-900 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-200 hover:shadow-gray-200/25">
            Apply For Pilot Certification
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
