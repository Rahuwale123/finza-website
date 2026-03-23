import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="py-24 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-finza-black mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Start for free, upgrade when you need advanced AI insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-finza-black mb-2">Basic</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-finza-black">₹0</span>
                <span className="text-gray-500 font-medium">/forever</span>
              </div>
              <p className="text-gray-600 mt-4">Essential tools to track your daily expenses.</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {[
                'Unlimited SMS tracking',
                'Basic monthly breakdown',
                'Manual transaction entry',
                'Standard categories'
              ].map((feature, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <button className="w-full py-4 rounded-xl bg-gray-100 text-finza-black font-bold hover:bg-gray-200 transition-colors">
              Get Started Free
            </button>
          </motion.div>

          {/* Premium Tier */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-finza-black rounded-[2rem] p-8 shadow-xl border border-gray-800 flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-finza-primary/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="absolute top-6 right-6 bg-finza-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>

            <div className="mb-8 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">₹30</span>
                <span className="text-gray-400 font-medium">/month</span>
              </div>
              <p className="text-gray-400 mt-4">Advanced AI insights and automation.</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1 relative z-10">
              {[
                'Everything in Basic',
                'Unlimited Gemini AI coaching',
                'Automated subscription detection',
                'Advanced export (CSV/PDF)',
                'Custom categories & tags',
                'Priority support'
              ].map((feature, i) => (
                <li key={i} className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-finza-accent mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <button className="w-full py-4 rounded-xl bg-finza-primary text-white font-bold hover:bg-finza-primary/90 transition-colors shadow-lg shadow-finza-primary/20 relative z-10">
              Upgrade to Premium
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
