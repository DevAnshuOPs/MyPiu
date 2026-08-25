import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Map, Ticket, HeartHandshake, Sparkles } from 'lucide-react';
import './MainHub.css';

const LilyIcon = ({ className = "", style = {} }) => (
  <svg 
    width="1em" 
    height="1em" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    style={{ color: '#ff4d85', display: 'inline-block', ...style }}
  >
    <path d="M12 22v-7" stroke="#4ade80" strokeWidth="2" />
    <path d="M12 15c-2 0-5-2-5-5 0-3 2-6 5-8 3 2 5 5 5 8 0 3-3 5-5 5z" fill="#ffb3c6" stroke="#ff4d85" />
    <path d="M12 15c-3 1-6 0-8-3 2-2 6-2 8 3z" fill="#ff85a1" stroke="#ff4d85" />
    <path d="M12 15c3 1 6 0 8-3-2-2-6-2-8 3z" fill="#ff85a1" stroke="#ff4d85" />
    <circle cx="12" cy="10" r="1.5" fill="#fff" stroke="none" />
  </svg>
);

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

  const gardenFlowers = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      isTulip: Math.random() > 0.5,
      size: `${2.5 + Math.random() * 2}rem`,
      animationDelay: `-${Math.random() * 4}s`,
      animationDuration: `${3 + Math.random() * 2}s`
    }));
  }, []);

  return (
    <div className="hub-container">
      <div className="garden">
        {gardenFlowers.map(f => (
          <div
            key={f.id}
            className="garden-flower"
            style={{
              fontSize: f.size,
              animationDelay: f.animationDelay,
              animationDuration: f.animationDuration
            }}
          >
            {f.isTulip ? '🌷' : <LilyIcon />}
          </div>
        ))}
      </div>

      <motion.div 
        className="hub-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="cursive">
          For My Piu <LilyIcon style={{ verticalAlign: 'middle', marginLeft: '5px' }} />
        </h1>
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
