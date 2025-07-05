
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

const TestimonialCard = ({ name, role, content, rating, avatar }: TestimonialCardProps) => {
  return (
    <motion.div 
      className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 min-w-[350px] max-w-[350px]"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-6">
        {/* Rating */}
        <div className="flex space-x-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        
        {/* Content */}
        <p className="text-gray-700 text-lg leading-relaxed">
          "{content}"
        </p>
        
        {/* Author */}
        <div className="flex items-center space-x-4">
          <img 
            src={avatar} 
            alt={name}
            className="w-12 h-12 rounded-full object-cover bg-gray-200"
          />
          <div>
            <h4 className="font-semibold text-gray-900 text-lg">{name}</h4>
            <p className="text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
