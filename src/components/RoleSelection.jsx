import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck } from 'lucide-react';
import './RoleSelection.css';

const RoleSelection = ({ onSelectRole }) => {
  return (
    <div className="role-selection-page">
      <motion.div 
        className="role-container glass-panel"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="cursive">Tell me, who are you?</h1>
        <p>Are you my beautiful Piu, or are you Anshu?</p>
        
        <div className="role-buttons">
          <button className="role-btn piu-btn" onClick={() => onSelectRole('piu')}>
            <Heart size={24} />
            <span>I am Piu 🌷</span>
          </button>
          
          <button className="role-btn anshu-btn" onClick={() => onSelectRole('anshu')}>
            <ShieldCheck size={24} />
            <span>I am Anshu 👑</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default RoleSelection;
