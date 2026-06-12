import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ChevronDown, ChevronUp, Sparkles, Shield, Users, Target, Star } from 'lucide-react';

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const faqRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "What is the PAG Seal?",
      answer: "A first-of-its-kind independent trust mark for AI applications, informed by U.S. privacy law and AI governance principles. The PAG Seal provides recognition for organizations that show evidence of adopting privacy protections and governance best practices.",
      icon: Shield
    },
    {
      question: "What is Pilot Certification?",
      answer: "Pilot Certification is an early recognition program that allows organizations to participate in the first phase of the PAG Seal initiative. It highlights AI applications that engage with privacy and governance best practices.",
      icon: Target
    },
    {
      question: "What expertise does PAG Seal have?",
      answer: "PAG Seal is led by its founder, a GRC and Privacy Engineer and Doctoral Candidate in AI and ML, holding FIP, CIPM, and CIPP/US trust marks with expertise in cybersecurity, privacy law, and artificial intelligence.",
      icon: Users
    },
    {
      question: "What are the benefits of the PAG Seal?",
      answer: "The PAG Seal provides organizations with a visible mark of recognition for responsible AI. It helps build trust with stakeholders, demonstrates alignment with privacy and governance best practices, and positions organizations as early leaders in AI accountability.",
      icon: Award
    },
    {
      question: "How does the certification process work?",
      answer: "The PAG Seal uses its first-of-its-kind review framework to evaluate how AI applications are designed and governed. The process highlights privacy, governance, and accountability practices, resulting in recognition for responsible approaches.",
      icon: Star
    },
    {
      question: "How is PAG Seal different from other trust marks?",
      answer: "Unlike traditional trust marks, the PAG Seal is a first-of-its-kind trust mark focused on recognition. It highlights evidence of responsible governance and privacy practices without requiring lengthy audits.",
      icon: Sparkles
    },
    {
      question: "What standards does PAG Seal follow?",
      answer: "The PAG Seal framework is informed by U.S. privacy law, AI governance principles, and emerging best practices. It is designed to evolve alongside advancements in AI accountability while maintaining independence as a recognition framework.",
      icon: Shield
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={faqRef} className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-full text-sm font-medium mb-6 border border-blue-200">
            <Award className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Common Questions About PAG Seal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to the most frequently asked questions about our recognition program and framework.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.01,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.1)"
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-blue-100/50 transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center border border-blue-200"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <faq.icon className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-blue-600" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <div className="border-t border-blue-200 pt-6">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Be part of the first wave of trusted AI
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              With the first-of-its-kind PAG Seal, organizations can gain recognition for responsible AI practices that resonate with stakeholders. Start your journey toward visible trust today.
            </p>
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg border border-blue-500/20 hover:shadow-blue-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply For Pilot Certification
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-10"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -15, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full opacity-10"
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
            x: [0, -15, 0],
            y: [0, 20, 0]
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
            x: [0, 10, 0],
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

export default FAQ;
