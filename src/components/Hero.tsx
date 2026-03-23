import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-finza-black leading-[1.1] mb-6">
              Your Finances.<br />
              <span className="gradient-text">Organized. Instantly.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Finza’s secure SMS automation turns transaction alerts into a powerful, insightful dashboard. No manual entry, just instant clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-finza-primary text-white font-semibold text-lg hover:bg-finza-primary/90 transition-colors shadow-lg shadow-finza-primary/30 group">
                Download on Google Play
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white text-finza-black font-semibold text-lg hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm">
                <Play className="mr-2 w-5 h-5 text-finza-primary" />
                Watch Demo
              </button>
            </div>
            <div className="mt-10 flex items-center gap-4 text-sm text-gray-500 font-medium">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                ))}
              </div>
              <p>Trusted by 10,000+ users in India</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            {/* Decorative background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-finza-primary/20 to-finza-accent/20 rounded-full blur-3xl -z-10" />
            
            <img 
              src="/herosection.png" 
              alt="Finza AI Expense Tracker Dashboard" 
              className="w-full max-w-2xl mx-auto rounded-[2.5rem] shadow-2xl border-8 border-white/50 glass-panel object-cover"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 -left-10 glass-panel p-4 rounded-2xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">₹</div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Salary Credited</p>
                <p className="text-sm font-bold text-finza-black">+₹85,000</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -right-8 glass-panel p-4 rounded-2xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-finza-primary/10 flex items-center justify-center text-finza-primary">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">AI Insight</p>
                <p className="text-sm font-bold text-finza-black">Spending is optimal</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
