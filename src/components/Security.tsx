import { motion } from 'motion/react';
import { Shield, Lock, Database, Smartphone } from 'lucide-react';

export default function Security() {
  return (
    <section className="py-24 bg-finza-black text-white relative overflow-hidden" id="security">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-finza-primary/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-finza-accent/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Your Money. Your Data.<br />
              <span className="text-finza-accent">Safely Guarded.</span>
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              Peace of mind comes standard. We use bank-level security protocols to ensure your financial data remains private and secure.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                  <Smartphone className="w-6 h-6 text-finza-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">On-Device Processing</h3>
                  <p className="text-gray-400">SMS parsing happens locally on your device. Your raw messages never leave your phone.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                  <Lock className="w-6 h-6 text-finza-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">AES-256 Encryption</h3>
                  <p className="text-gray-400">All synced data is protected with bank-level AES-256 encryption in transit and at rest.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                  <Database className="w-6 h-6 text-finza-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Zero Storage Policy</h3>
                  <p className="text-gray-400">We never store your credit card numbers, CVVs, or bank login credentials. Period.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src="/unnamed (2).jpg" 
              alt="Finza Security and Trust" 
              className="w-full max-w-md mx-auto rounded-[2rem] shadow-2xl border border-white/10 object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            
            {/* Security Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-finza-primary/90 backdrop-blur-md rounded-full flex flex-col items-center justify-center border-4 border-finza-black shadow-2xl">
              <Shield className="w-10 h-10 text-white mb-1" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Secure</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
