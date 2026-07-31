import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Heart, Sparkles } from 'lucide-react';
import './ReasonsGenerator.css';
import confetti from 'canvas-confetti';

const ReasonsGenerator = ({ onBack }) => {
  const [currentReasonIndex, setCurrentReasonIndex] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);

  const reasons = [
    "How kind and soft you are.",
    "How mature you are.",
    "How our good nights take longer than 10 minutes but still feel less.",
    "How easily you understand me.",
    "How much you take care of my heart.",
    "How you made me realize it's okay to be vulnerable to you.",
    "How you brought out the kid in me whom I had locked up forever.",
    "How you always bring out the best in me.",
    "How you make me eager to be successful for US fast.",
    "How just a single pic of your smile, eyes, lips, hair, are enough to make my entire day.",
    "How I stare at our text thinking they were not texts but words from your lips.",
    "And infinitely many more..."
  ];

  const generateReason = () => {
    if (isAnimating) return;
    
    // If we reached the end, reset or just stay there? 
    // Let's just let it cycle or stay at the end. The user wants the last one to be the grand finale.
    if (currentReasonIndex >= reasons.length - 1) {
       // Fire confetti again if they keep clicking the heart at the end
       triggerHeartConfetti();
       return;
    }

    setIsAnimating(true);
    
    setTimeout(() => {
      const nextIndex = currentReasonIndex + 1;
      setCurrentReasonIndex(nextIndex);
      setIsAnimating(false);

      if (nextIndex === reasons.length - 1) {
        triggerHeartConfetti();
      }
    }, 400); // reduced timeout for better feel
  };

  const triggerHeartConfetti = () => {
    const end = Date.now() + 3 * 1000;
    const colors = ['#f43f5e', '#fb7185', '#e11d48'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  return (
    <div className="reasons-page">
      <button className="back-btn glass-panel" onClick={onBack}>
        <ArrowLeft size={24} />
        <span>Back</span>
      </button>

      <div className="reasons-header">
        <h1 className="cursive">Why I Love You, My Cupcake 🌸</h1>
        <p className="intro-text">
          First of all I don't need any reason to love you, but there are infinite reasons that make me love you even more...
        </p>
      </div>

      <div className="generator-container">
        <motion.button 
          className="generate-btn"
          onClick={generateReason}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={isAnimating}
        >
          <Heart size={64} fill="#f43f5e" color="#f43f5e" />
          <Sparkles className="sparkle-icon" size={24} color="#fecdd3" />
        </motion.button>

        <div className="reason-display-area">
          <AnimatePresence mode="wait">
            {currentReasonIndex >= 0 ? (
              <motion.div 
                key={currentReasonIndex}
                className="reason-card glass-panel"
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0, y: -50, scale: 0.8 }}
                transition={{ duration: 0.5, type: 'spring' }}
              >
                <p className="cursive">"{reasons[currentReasonIndex]}"</p>
                <div className="signature">- I love you, Piu -</div>
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                className="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p>Tap the heart to draw a note...</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ReasonsGenerator;
