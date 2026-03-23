import { motion } from 'motion/react';
import { Target, ArrowRight } from 'lucide-react';

export default function Goals() {
  return (
    <section className="py-24 bg-gray-50" id="goals">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-finza-primary/10 to-finza-accent/10 rounded-[3rem] blur-xl -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800&h=600" 
              alt="Finza Goal Tracking" 
              className="w-full rounded-[2rem] shadow-2xl border border-white/50 object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            
            {/* Floating Goal Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">🚗</div>
                <div>
                  <p className="text-sm font-bold text-finza-black">New Car Fund</p>
                  <p className="text-xs text-gray-500">₹3,50,000 Goal</p>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                <div className="bg-finza-primary h-2 rounded-full" style={{ width: '65%' }} />
              </div>
              <p className="text-xs font-medium text-finza-primary text-right">65% Achieved</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="w-12 h-12 rounded-2xl bg-finza-primary/10 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-finza-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-finza-black mb-6">
              Set Your Goals.<br />We'll Show You the Path.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Finza helps you save for big milestones like cars, homes, or vacations by optimizing your small daily spends. Turn your savings targets into real-world achievements.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                'Create custom savings goals with deadlines',
                'Get AI-powered recommendations to save faster',
                'Track progress automatically with every transaction'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </li>
              ))}
            </ul>

            <button className="inline-flex items-center text-finza-primary font-semibold hover:text-finza-secondary transition-colors group">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
