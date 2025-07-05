
import { useState } from 'react';
import { Heart, Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            className="space-y-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Dental Health AI</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Revolutionary AI-powered dental analysis for better oral health outcomes.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">support@dentalhealthai.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">San Francisco, CA</span>
              </div>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div 
            className="space-y-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {['About Us', 'How It Works', 'Privacy Policy', 'Terms of Service'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            className="space-y-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold">Newsletter</h3>
            <p className="text-gray-400">Stay updated with our latest features and health tips.</p>
            <form onSubmit={handleNewsletterSignup} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-400">
            © 2024 Dental Health AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {[Facebook, Instagram, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
