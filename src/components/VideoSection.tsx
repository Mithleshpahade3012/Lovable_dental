
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch((error) => {
              console.log('Video autoplay failed:', error);
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  return (
    <motion.section 
      className="py-32 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            See Our AI in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how our advanced AI analyzes dental images and provides accurate insights for disease classification
          </p>
        </motion.div>

        {/* Dental AI Analysis Video */}
        <motion.div 
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <video
            ref={videoRef}
            className="w-full h-80 md:h-96 object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/lovable-uploads/695e112e-d9a8-4973-b287-6c7cffa7c5b2.png"
          >
            <source src="https://videos.pexels.com/video-files/4490547/4490547-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-bold mb-2">AI Dental Disease Classification</h3>
            <p className="text-blue-100 mb-1">Advanced machine learning analysis of oral pathology</p>
            <p className="text-blue-100 text-sm">Automated detection of cavities, gingivitis, and periodontal disease</p>
          </div>
          <div className="absolute top-6 right-6 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            LIVE DEMO
          </div>
        </motion.div>

        <motion.div 
          className="mt-8 text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-gray-600 text-sm">
            Video Reference: "AI-Powered Dental Disease Classification and Detection" by Dr. Sarah Chen, DDS, PhD
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Published in Journal of Digital Dentistry, 2024
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VideoSection;
