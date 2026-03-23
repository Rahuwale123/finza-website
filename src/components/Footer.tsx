import { Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <a href="#" className="text-2xl font-bold text-finza-black flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-finza-primary to-finza-secondary flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              Finza
            </a>
            <p className="text-gray-500 mb-6">
              Your finances, organized instantly. The smart expense tracker powered by AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-finza-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-finza-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-finza-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-finza-black mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-500 hover:text-finza-primary transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-500 hover:text-finza-primary transition-colors">Pricing</a></li>
              <li><a href="#security" className="text-gray-500 hover:text-finza-primary transition-colors">Security</a></li>
              <li><a href="#" className="text-gray-500 hover:text-finza-primary transition-colors">Download App</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-finza-black mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-finza-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-finza-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-finza-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-finza-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-finza-black mb-4">Contact Support</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-500">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:wales.ai015@gmail.com" className="hover:text-finza-primary transition-colors">wales.ai015@gmail.com</a>
              </li>
              <li className="flex items-center text-gray-500">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+919356853041" className="hover:text-finza-primary transition-colors">+91 9356853041</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Finza. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            Made with <span className="text-red-500">♥</span> in India
          </div>
        </div>
      </div>
    </footer>
  );
}
