
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Enhanced gradient background with darker shades */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/80 to-gray-100" />
      
      {/* Floating elements with enhanced motion and darker tones */}
      <motion.div 
        className="absolute top-20 left-10"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-20 h-20 bg-gradient-to-r from-blue-300/40 to-cyan-300/40 rounded-full opacity-60 blur-sm" />
      </motion.div>
      
      <motion.div 
        className="absolute top-40 right-20"
        animate={{ 
          y: [0, 15, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-300/40 to-blue-300/40 rounded-2xl opacity-70 blur-sm rotate-45" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-32 left-1/4"
        animate={{ 
          y: [0, -25, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-12 h-12 bg-gradient-to-r from-blue-400/50 to-cyan-400/50 rounded-full opacity-50 blur-sm" />
      </motion.div>
      
      <motion.div 
        className="absolute top-1/3 right-1/3"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-24 h-24 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 rounded-full opacity-40 blur-md" />
      </motion.div>

      {/* Additional darker accent elements */}
      <motion.div 
        className="absolute top-60 left-1/2"
        animate={{ 
          x: [0, 20, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-14 h-14 bg-gradient-to-r from-gray-300/30 to-blue-300/30 rounded-lg opacity-40 blur-sm rotate-12" />
      </motion.div>
    </div>
  );
};

export default AnimatedBackground;
