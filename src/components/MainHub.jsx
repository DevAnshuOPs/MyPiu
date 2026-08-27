import React from 'react';
import { motion } from 'framer-motion';
import { Map, Ticket, HeartHandshake, Sparkles } from 'lucide-react';
import './MainHub.css';

const MainHub = ({ onNavigate }) => {
  const features = [
    { id: 'timeline', title: 'Our Journey', icon: <Map size={32} />, desc: 'A stroll down memory lane', nickname: 'My Piu' },
    { id: 'coupons', title: 'Love Coupons', icon: <Ticket size={32} />, desc: 'Redeemable for hugs & more', nickname: 'My Princess' },
    { id: 'reasons', title: 'Why I Love You', icon: <HeartHandshake size={32} />, desc: 'A little reminder', nickname: 'My Baby' },
    { id: 'quiz', title: 'Poems and Letters for Piu', icon: <Sparkles size={32} />, desc: 'A collection of my feelings', nickname: 'My Cupcake' }
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

  const blendedFlowers = [
    { id: 1, emoji: '🌸', top: '10%', left: '5%', size: '4rem', rotation: '-15deg', opacity: 0.2 },
    { id: 2, emoji: '🌷', top: '15%', left: '15%', size: '3.5rem', rotation: '10deg', opacity: 0.2 },
    { id: 3, emoji: '🌸', top: '12%', left: '85%', size: '4rem', rotation: '20deg', opacity: 0.2 },
    { id: 4, emoji: '🌷', top: '8%', left: '75%', size: '3.5rem', rotation: '-10deg', opacity: 0.2 },
    { id: 5, emoji: '🌸', top: '45%', left: '8%', size: '3.5rem', rotation: '5deg', opacity: 0.2 },
    { id: 6, emoji: '🌷', top: '55%', left: '4%', size: '4rem', rotation: '-20deg', opacity: 0.2 },
    { id: 7, emoji: '🌸', top: '50%', left: '90%', size: '4rem', rotation: '-10deg', opacity: 0.2 },
    { id: 8, emoji: '🌷', top: '40%', left: '82%', size: '3.5rem', rotation: '15deg', opacity: 0.2 },
    { id: 9, emoji: '🌸', top: '85%', left: '10%', size: '4rem', rotation: '25deg', opacity: 0.2 },
    { id: 10, emoji: '🌷', top: '75%', left: '6%', size: '3.5rem', rotation: '-5deg', opacity: 0.2 },
    { id: 11, emoji: '🌸', top: '80%', left: '80%', size: '3.5rem', rotation: '-15deg', opacity: 0.2 },
    { id: 12, emoji: '🌷', top: '88%', left: '88%', size: '4rem', rotation: '10deg', opacity: 0.2 },
  ];

  return (
    <div className="hub-container">
      {/* Blended background flowers */}
      {blendedFlowers.map(f => (
        <div
          key={f.id}
          style={{
            position: 'absolute',
            top: f.top,
            left: f.left,
            fontSize: f.size,
            transform: `rotate(${f.rotation})`,
            opacity: f.opacity,
            pointerEvents: 'none',
            zIndex: 0
          }}
        >
          {f.emoji}
        </div>
      ))}

      <motion.div 
        className="hub-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ zIndex: 1, position: 'relative' }}
      >
        <h1 className="cursive">For My Piu 🌸</h1>
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
