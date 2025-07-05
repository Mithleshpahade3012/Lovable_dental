import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Award, Sparkles, Zap, Brain, Play, Star, MessageCircle, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import AnimatedBackground from '../components/AnimatedBackground';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import VideoSection from '../components/VideoSection';
import DentalReferenceSection from '../components/DentalReferenceSection';
import FloatingChatWidget from '../components/FloatingChatWidget';
import Footer from '../components/Footer';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your dental images are processed securely and never stored without permission.",
      delay: 200,
    },
    {
      icon: Clock,
      title: "Instant Results",
      description: "Get immediate analysis and recommendations for your oral health.",
      delay: 400,
    },
    {
      icon: Award,
      title: "Expert System",
      description: "Powered by advanced AI trained on thousands of dental images.",
      delay: 600,
    },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Dental Specialist",
      content: "This AI analysis tool has revolutionized how I provide initial assessments to my patients.",
      rating: 5,
      avatar: "/placeholder.svg"
    },
    {
      name: "Mike Chen",
      role: "Patient",
      content: "Amazing accuracy! Helped me identify issues early and get proper treatment.",
      rating: 5,
      avatar: "/placeholder.svg"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Orthodontist",
      content: "The AI insights are incredibly detailed and help with treatment planning.",
      rating: 5,
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AnimatedBackground />
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div 
              className="mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                AI-Powered
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Dental Analysis
                </span>
              </h1>
            </motion.div>

            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Get instant insights about your oral health using our advanced AI technology. 
              Upload a photo and receive <span className="text-blue-500 font-semibold">personalized recommendations</span> in seconds.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/analysis"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-5 rounded-2xl text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <Brain className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
                <span>Try Analysis Now</span>
                <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Video Section */}
      <VideoSection />

      {/* Features Section */}
      <motion.section 
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our AI Analysis?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of dental health with cutting-edge technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="py-24 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by thousands of users worldwide
            </p>
          </motion.div>

          <div className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Dental Reference Section */}
      <DentalReferenceSection />

      {/* CTA Section */}
      <motion.section 
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-cyan-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Analyze Your Dental Health?
          </motion.h3>
          <motion.p 
            className="text-xl text-blue-100 mb-8"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join thousands of users who trust our AI-powered analysis
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/analysis"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <span>Start Free Analysis</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
      <FloatingChatWidget />
    </div>
  );
};

export default Index;
