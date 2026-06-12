import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, Sparkles, CheckCircle, Star } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Shield,
      title: "U.S. Privacy Law Informed",
      description: "Informed by U.S. privacy law and AI governance principles, providing a foundation for responsible recognition."
    },
    {
      icon: Award,
      title: "AI Governance Best Practices",
      description: "Highlights AI applications that show evidence of adopting protections for accountability and transparency."
    },
    {
      icon: CheckCircle,
      title: "Independent Review Process",
      description: "Applies a structured review process informed by recognized principles and best practices."
    }
  ];

  return (
    <section ref={heroRef} className="relative py-10 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 !pt-32 !mb-10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-20"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full opacity-30"
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
            x: [0, -25, 0],
            y: [0, 15, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full opacity-25"
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full opacity-20"
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1],
            x: [0, -15, 0],
            y: [0, 25, 0]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-full text-sm font-medium mb-8 border border-blue-200"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Star className="w-4 h-4 mr-2" />
          First-of-its-kind Trust Mark
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent">
            The First Privacy & AI Governance (PAG) Seal
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          A pioneering independent trust mark for AI applications that show evidence of adopting privacy protections and governance best practices.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg transform hover:scale-105 border border-blue-500/20 hover:shadow-blue-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply for Pilot Certification (Recognition Program)
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <motion.button
            className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg border-2 border-blue-200 hover:border-blue-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
            <Sparkles className="w-5 h-5 text-blue-600" />
          </motion.button>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-6 mx-auto border border-blue-200"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-8 h-8 text-blue-600" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
