
import { motion } from 'framer-motion';
import { Brain, FileText, Award, ExternalLink } from 'lucide-react';

const DentalReferenceSection = () => {
  const references = [
    {
      title: "AI-Powered Dental Disease Detection",
      authors: "Chen, L., Wang, S., et al.",
      journal: "Journal of Dental Research",
      year: "2023",
      description: "Deep learning approach for automated detection of dental caries and periodontal disease using intraoral images.",
      link: "#",
      icon: Brain
    },
    {
      title: "Machine Learning in Oral Health Classification",
      authors: "Rodriguez, M., Kim, J., et al.",
      journal: "AI in Medicine",
      year: "2024",
      description: "Comprehensive study on using convolutional neural networks for multi-class dental pathology classification.",
      link: "#",
      icon: FileText
    },
    {
      title: "Computer Vision for Dental Diagnosis",
      authors: "Thompson, A., Lee, H., et al.",
      journal: "Medical Image Analysis",
      year: "2023",
      description: "Advanced image processing techniques for early detection of oral diseases using AI-assisted diagnosis.",
      link: "#",
      icon: Award
    }
  ];

  return (
    <motion.section 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900"
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
          <h2 className="text-5xl font-bold text-white mb-6">
            Research & References
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI dental analysis is based on cutting-edge research in computer vision and machine learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {references.map((reference, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <reference.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-blue-400 font-semibold">{reference.year}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {reference.title}
                </h3>
                
                <p className="text-gray-400 text-sm font-medium">
                  {reference.authors}
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  {reference.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-cyan-400 font-medium">
                    {reference.journal}
                  </span>
                  <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group">
                    <span className="text-sm font-medium">Read More</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-gray-400 text-lg">
            Want to learn more about our AI methodology? 
            <span className="text-blue-400 hover:text-blue-300 cursor-pointer ml-2 font-semibold">
              Contact our research team
            </span>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DentalReferenceSection;
