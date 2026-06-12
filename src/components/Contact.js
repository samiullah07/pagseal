import React, { useState, useEffect, useRef } from 'react';
import { Mail, Send, Shield, Sparkles, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const contactRef = useRef(null);

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const payload = {
        accountId: "63ee73c3-763f-11f0-86a8-7cd30acd3d4e",
        domainName: "pagseal.com",
        formData: [
          { label: "Name", value: formData.name, keyName: "name" },
          { label: "Email", value: formData.email, keyName: "email" },
          { label: "Company", value: formData.company, keyName: "company" },
          { label: "Message", value: formData.message, keyName: "message" }
        ],
        locale: "en-US",
        metadata: {
          formIdentifier: "CONTACT_US",
          pathName: "/",
          deviceType: "desktop",
          deviceOs: "Windows"
        },
        optedToSubscribe: false,
        pageId: "a988b1fc-165d-4070-9a97-6aa1e3c2db71",
        websiteId: "ba1e086c-9ba8-4615-b0d8-90fba023ba4e",
        widgetId: "6d7c2bfe-83a2-445e-a300-0752b4205924"
      };

      const response = await fetch('https://contact.apps-api.instantpage.secureserver.net/v3/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
          'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
          'Origin': 'https://pagseal.com',
          'Referer': 'https://pagseal.com/',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36'
        },
        body: JSON.stringify(payload)
      });

      const responseData = await response.json();

      if (response.ok && responseData.messageId) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
        setShowSuccessModal(true);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <>
      <section ref={contactRef} id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-full text-sm font-medium mb-6 border border-blue-200">
              <Sparkles className="w-4 h-4 mr-2" />
              Get Started
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Apply For Pilot Certification
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The PAG Seal is pioneering recognition for AI applications that highlight privacy and governance best practices. Contact us to secure your place among the first recognized.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-700 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '200ms'}}>
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  Contact Us
                </h3>
              </div>
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600">Sorry, there was an error sending your message. Please try again.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 hover:border-blue-400"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Work Email *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 hover:border-blue-400"
                    placeholder="Enter your work email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 hover:border-blue-400"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 hover:border-blue-400 resize-none"
                    placeholder="Tell us about your AI application and privacy governance needs..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg transform hover:scale-105 border border-blue-500/20 hover:shadow-blue-500/25"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Application
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className={`flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border-2 border-blue-200 hover:border-blue-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '400ms'}}>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-200">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-gray-600">info@pagseal.com</p>
                    <p className="text-sm text-gray-500">Get in touch with our team</p>
                  </div>
                </div>

                <div className={`flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border-2 border-blue-200 hover:border-blue-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '500ms'}}>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-200">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Pilot Program</h4>
                    <p className="text-gray-600">Early adoption opportunity</p>
                    <p className="text-sm text-gray-500">Gain recognition today</p>
                  </div>
                </div>

                <div className={`flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border-2 border-blue-200 hover:border-blue-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '600ms'}}>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-200">
                    <Sparkles className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Independent Review</h4>
                    <p className="text-gray-600">Streamlined validation process</p>
                    <p className="text-sm text-gray-500">No lengthy audits required</p>
                  </div>
                </div>
              </div>

              <div className={`bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 text-gray-900 border-2 border-blue-200 transition-all duration-700 hover:shadow-xl hover:border-blue-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '700ms'}}>
                <h4 className="text-lg font-semibold mb-3">
                  Ready to Get Started?
                </h4>
                <p className="text-gray-600 mb-4">
                  Join organizations that are leading the way in trustworthy AI governance and privacy protection.
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg border border-blue-500/20 hover:shadow-blue-500/25 transform hover:scale-105">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full border-2 border-blue-200 shadow-2xl animate-scale-in">
            <div className="text-center">
              {/* Success Animation */}
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce border-2 border-green-200">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Message Sent Successfully!
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Thank you for your inquiry! We will get back to you within 48 hours.
              </p>
              
              <button
                onClick={closeSuccessModal}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 border border-blue-500/20"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
