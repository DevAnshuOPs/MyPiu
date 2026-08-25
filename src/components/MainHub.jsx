import React, { useMemo } from 'react';
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

  const backgroundFlowers = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      type: Math.random() > 0.5 ? '🌷' : '🪷',
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      animationDuration: `${10 + Math.random() * 20}s`,
      animationDelay: `${Math.random() * -20}s`,
      size: `${1.5 + Math.random() * 3}rem`,
      opacity: 0.1 + Math.random() * 0.15
    }));
  }, []);

  return (
    <div className="hub-container">
      {backgroundFlowers.map(f => (
        <div
          key={f.id}
          style={{
            position: 'fixed',
            left: f.left,
            top: f.top,
            fontSize: f.size,
            opacity: f.opacity,
            pointerEvents: 'none',
            zIndex: 0,
            animation: `float ${f.animationDuration} infinite ease-in-out ${f.animationDelay}`
          }}
        >
          {f.type}
        </div>
      ))}

      <motion.div 
        className="hub-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="cursive">For My Piu 🪷</h1>
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
    </div>
  );
};

export default MainHub;
