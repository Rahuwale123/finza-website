import { motion } from 'motion/react';
import { Sparkles, PieChart, BellRing, Smartphone, Zap, ShieldCheck } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-finza-black mb-4">
            The Magic Behind Finza
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to take control of your financial life, packed into one intelligent dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature A: Auto-Tracking (Spans 2 columns on large screens) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-gray-50 rounded-[2rem] p-8 relative overflow-hidden group border border-gray-100"
          >
            <div className="relative z-10 w-full md:w-1/2">
              <div className="w-12 h-12 rounded-2xl bg-finza-primary/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-finza-primary" />
              </div>
              <h3 className="text-2xl font-bold text-finza-black mb-3">Auto-Tracking Magic</h3>
              <p className="text-gray-600 mb-6">
                We securely parse your bank SMS alerts and automatically categorize them. No more manual entry or messy spreadsheets.
              </p>
              <ul className="space-y-3">
                {['Instant categorization', 'Smart merchant recognition', 'Offline processing'].map((item, i) => (
                  <li key={i} className="flex items-center text-sm font-medium text-gray-700">
                    <ShieldCheck className="w-4 h-4 text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Decorative UI element */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 md:translate-x-0 w-64 h-80 bg-white rounded-l-3xl shadow-xl border border-gray-100 p-4 hidden sm:block transition-transform group-hover:-translate-x-4">
              <div className="space-y-4">
                <div className="h-4 w-24 bg-gray-200 rounded-full mb-6" />
                {[
                  { name: 'Swiggy', amount: '₹350', cat: 'Food', color: 'bg-orange-100 text-orange-600' },
                  { name: 'Uber', amount: '₹240', cat: 'Transport', color: 'bg-blue-100 text-blue-600' },
                  { name: 'Amazon', amount: '₹1,200', cat: 'Shopping', color: 'bg-purple-100 text-purple-600' }
                ].map((tx, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${tx.color}`}>
                        {tx.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-finza-black">{tx.name}</p>
                        <p className="text-xs text-gray-500">{tx.cat}</p>
                      </div>
                    </div>
                    <p className="text-sm font-bold text-finza-black">{tx.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Feature B: AI Advisor */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-finza-primary to-finza-secondary rounded-[2rem] p-8 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6 backdrop-blur-sm">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">AI Advisor</h3>
            <p className="text-white/80 mb-6">
              Powered by Google Gemini AI. Get personalized insights, ask questions about your spending, and receive actionable advice.
            </p>
            <div className="mb-6 rounded-2xl overflow-hidden border border-white/20 shadow-lg">
              <img src="/unnamed.jpg" alt="Finza AI Advisor" className="w-full h-40 object-cover" />
            </div>
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
              <p className="text-sm italic">"You spent 20% more on dining this week. Want me to set a budget?"</p>
            </div>
          </motion.div>

          {/* Feature C: Subscriptions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100"
          >
            <div className="w-12 h-12 rounded-2xl bg-finza-accent/10 flex items-center justify-center mb-6">
              <BellRing className="w-6 h-6 text-finza-accent" />
            </div>
            <h3 className="text-2xl font-bold text-finza-black mb-3">Subscription Alerts</h3>
            <p className="text-gray-600 mb-6">
              Never pay for an unused subscription again. We detect recurring payments and alert you before they renew.
            </p>
            <div className="space-y-3">
              {[
                { name: 'Netflix', date: 'Tomorrow', amount: '₹649' },
                { name: 'Spotify', date: 'In 3 days', amount: '₹119' },
              ].map((sub, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold">
                      {sub.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-finza-black">{sub.name}</p>
                      <p className="text-xs text-red-500 font-medium">Renews {sub.date}</p>
                    </div>
                  </div>
                  <p className="text-sm font-bold text-finza-black">{sub.amount}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Feature D: Analytics */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 bg-gray-50 rounded-[2rem] p-8 border border-gray-100 flex flex-col md:flex-row items-center gap-8"
          >
             <div className="flex-1">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center mb-6">
                <PieChart className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-finza-black mb-3">Beautiful Analytics</h3>
              <p className="text-gray-600">
                Visualize your spending habits with interactive charts. Understand where your money goes and find opportunities to save more every month.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-48 bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-end justify-between gap-2">
              {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                <div key={i} className="w-full bg-finza-primary/20 rounded-t-md relative group">
                  <div 
                    className="absolute bottom-0 w-full bg-finza-primary rounded-t-md transition-all duration-500 group-hover:bg-finza-secondary" 
                    style={{ height: `${h}%` }} 
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
