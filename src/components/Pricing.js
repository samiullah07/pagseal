import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: "Free",
      price: { monthly: 0, annually: 0 },
      description: "Perfect for getting started",
      features: [
        "100 leads / month",
        "275+ million leads available",
        "Multichannel outreach",
        "AI-powered messaging",
        "Basic integrations",
        "Email templates"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: { monthly: 99, annually: 990 },
      description: "For growing sales teams",
      features: [
        "1,000 contacted leads / month",
        "AI-powered with ORBIT",
        "16 addresses included",
        "275+ million leads available",
        "Seamless integrations",
        "Upload leads via API/Zapier",
        "Personalized video landing pages",
        "Custom development support"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Ultimate",
      price: { monthly: 1250, annually: 12500 },
      description: "Save 10 FTE",
      features: [
        "5,000 contacted leads / month",
        "AI-powered with ORBIT",
        "30 addresses included",
        "275+ million leads available",
        "Seamless integrations",
        "Upload leads via API/Zapier",
        "Personalized video landing pages",
        "Custom development support",
        "Shared credits - no extra fee per seat"
      ],
      cta: "Get Started",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            PagSeal outperforms human salespeople at 1/10th the cost
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your business needs and start generating more meetings today.
          </p>

          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annually' : 'monthly')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                billingCycle === 'annually' ? 'bg-primary-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'annually' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'annually' ? 'text-gray-900' : 'text-gray-500'}`}>
              Annually
              {billingCycle === 'annually' && <span className="text-primary-600 ml-1">(2 months off)</span>}
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-primary-50 to-blue-50 border-2 border-primary-200 shadow-xl' 
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.annually}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-gray-600">/{billingCycle === 'monthly' ? 'mo' : 'year'}</span>
                  )}
                </div>

                {plan.price.monthly > 0 && (
                  <p className="text-sm text-gray-600 mb-6">
                    {billingCycle === 'monthly' ? 'Billed monthly' : 'Billed annually'}
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg'
                    : 'bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">
            All plans include our core features and 24/7 support
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>Trusted by 10,000+ companies worldwide</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
