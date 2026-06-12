import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Sparkles, Shield, CheckCircle, Users } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      text: "The Pagseal is an independent trust mark, informed by U.S. privacy law and AI governance principles, recognizing AI applications that show evidence of adopting privacy protections and governance best practices.",
      icon: Shield,
      color: "from-blue-500 to-cyan-500"
    },
    {
      text: "The Seal of Readiness provides visible recognition that organizations are preparing their AI responsibly, helping to signal accountability to investors, regulators, and customers.",
      icon: Award,
      color: "from-cyan-500 to-blue-600"
    },
    {
      text: "Pagseal is led by its founder, a GRC and Privacy Engineer and Doctoral Candidate in AI and ML, holding FIP, CIPM, and CIPP/US certifications with expertise in cybersecurity, privacy law, and artificial intelligence.",
      icon: Users,
      color: "from-blue-600 to-indigo-600"
    },
    {
      text: "Pilot Certification gives organizations an early opportunity to show evidence that their AI applications are engaging with privacy and governance best practices. It delivers recognition that highlights accountability.",
      icon: CheckCircle,
      color: "from-indigo-500 to-purple-500"
    },
    {
      text: "Pagseal helps shape benchmarks for trustworthy AI, offering recognition that signals accountability to investors, regulators, and customers.",
      icon: Star,
      color: "from-purple-500 to-pink-500"
    },
    {
      text: "The first of its kind Pagseal review framework for AI examines how organizations design their AI applications and apply governance practices. Unlike traditional, lengthy audits, this streamlined process provides recognition informed by governance best practices.",
      icon: Sparkles,
      color: "from-pink-500 to-rose-500"
    }
  ];

  // Split testimonials into 3 columns
  const column1 = testimonials.slice(0, 2);
  const column2 = testimonials.slice(2, 4);
  const column3 = testimonials.slice(4, 6);

  return (
    <section ref={testimonialsRef} className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-full text-sm font-medium mb-6 border border-blue-200">
            <Award className="w-4 h-4 mr-2" />
            Recognition Program
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Helping Organizations Earn Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how Pagseal highlights AI applications that demonstrate privacy and governance readiness.
          </p>
        </div>

        {/* Testimonials Grid - 3 Columns with offset */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="space-y-8">
            {column1.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2
                }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <testimonial.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1 h-1 bg-blue-400 rounded-full mr-1"
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: i * 0.2 
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {testimonial.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Column 2 - Offset down */}
          <div className="space-y-8 mt-16">
            {column2.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-300 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2
                }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <testimonial.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1 h-1 bg-blue-400 rounded-full mr-1"
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: i * 0.2 
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {testimonial.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-8">
            {column3.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: (index + 4) * 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2
                }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <testimonial.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1 h-1 bg-blue-400 rounded-full mr-1"
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: i * 0.2 
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {testimonial.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-10"
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
          className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full opacity-10"
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
          className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full opacity-10"
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </section>
  );
};

export default Testimonials;
