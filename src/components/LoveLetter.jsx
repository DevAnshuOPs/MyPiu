import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import './LoveLetter.css';

const LoveLetter = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="letter-container">
      <motion.div 
        className={`envelope ${isOpen ? 'open' : ''}`}
        onClick={handleOpen}
        whileHover={!isOpen ? { scale: 1.02 } : {}}
        whileTap={!isOpen ? { scale: 0.98 } : {}}
      >
        <div className="envelope-flap"></div>
        <div className="envelope-body">
          <div className="envelope-front">
            <Heart className="wax-seal" size={48} fill="#f43f5e" color="#b76e79" />
            <p className="cursive to-piu">For my beautiful Piu 🌷</p>
          </div>
          
          <motion.div 
            className="letter"
            initial={{ y: 0, opacity: 0 }}
            animate={isOpen ? { y: -150, opacity: 1, zIndex: 10 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1 className="cursive">Happy Birthday My Love!</h1>
            <p>My dearest Piu,</p>
            <p>I wanted to make something special just for you. You make my everyday brighter.</p>
            <p>There is way more waiting for you... ❤️</p>
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {!isOpen && (
          <motion.p 
            className="hint-text"
            exit={{ opacity: 0 }}
          >
            Tap the envelope to open
          </motion.p>
        )}
        
        {isOpen && (
          <motion.button
            className="move-forward-btn glass-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            onClick={onOpen}
          >
            <span>Move Forward</span>
            <ArrowRight size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoveLetter;
