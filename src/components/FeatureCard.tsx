
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div 
      className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <Icon className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
