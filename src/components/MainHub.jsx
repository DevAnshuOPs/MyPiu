import React from 'react';
import { motion } from 'framer-motion';
import { Map, Ticket, HeartHandshake, Sparkles } from 'lucide-react';
import './MainHub.css';

const MainHub = ({ onNavigate }) => {
  const features = [
    { id: 'timeline', title: 'Our Journey', icon: <Map size={32} />, desc: 'A stroll down memory lane', nickname: 'My Piu' },
    { id: 'coupons', title: 'Love Coupons', icon: <Ticket size={32} />, desc: 'Redeemable for hugs & more', nickname: 'My Princess' },
    { id: 'reasons', title: 'Why I Love You', icon: <HeartHandshake size={32} />, desc: 'A little reminder', nickname: 'My Baby' },
    { id: 'quiz', title: 'The Piu Quiz', icon: <Sparkles size={32} />, desc: 'How well do we know us?', nickname: 'My Cupcake' }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="hub-container">
      <motion.div 
        className="hub-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="cursive">For My Piu 🌷</h1>
        <p>Pick an adventure, Sweetheart!</p>
      </motion.div>

      <motion.div 
        className="hub-grid"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {features.map((feature) => (
          <motion.div 
            key={feature.id} 
            className="hub-card glass-panel"
            variants={item}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate(feature.id)}
          >
            <div className="card-icon">{feature.icon}</div>
            <h2>{feature.title}</h2>
            <p>{feature.desc}</p>
            <span className="card-nickname cursive">- for {feature.nickname} -</span>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="floral-decoration bottom-left">🌸</div>
      <div className="floral-decoration top-right">🌷</div>
    </div>
  );
};

export default MainHub;
