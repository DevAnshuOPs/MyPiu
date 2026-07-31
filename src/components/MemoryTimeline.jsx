import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import './MemoryTimeline.css';

const MemoryTimeline = ({ onBack }) => {
  // Placeholders for the user to fill out later
  const memories = [
    { id: 1, date: '23/06/2026', title: 'The Day It All Began', desc: 'Add a little description about how you met or your first date here.', img: '' },
    { id: 2, date: '09/07/2026', title: 'The Day We Finally Made It Official', desc: 'Write about a fun adventure you had together.', img: '' },
    { id: 3, date: 'DD/MM/YYYY', title: 'A Funny Moment', desc: 'Share an inside joke or something that always makes you both laugh.', img: '' },
    { id: 4, date: 'Today!', title: 'Happy Birthday!', desc: 'Happy Birthday to my beautiful Piu! Here is to many more memories.', img: '' },
  ];

  return (
    <div className="timeline-page">
      <button className="back-btn glass-panel" onClick={onBack}>
        <ArrowLeft size={24} />
        <span>Back to Hub</span>
      </button>

      <div className="timeline-header">
        <h1 className="cursive">Our Journey, My Love 🌸</h1>
        <p>Some of my favorite moments with you...</p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {memories.map((memory, index) => (
          <motion.div 
            key={memory.id}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <span className="timeline-date">{memory.date}</span>
              <h2>{memory.title}</h2>
              <p>{memory.desc}</p>
              
              {/* Image Placeholder */}
              <div className="timeline-image-placeholder">
                {memory.img ? (
                  <img src={memory.img} alt={memory.title} />
                ) : (
                  <div className="placeholder-box">
                    <ImageIcon size={40} color="#b76e79" />
                    <span>Your Photo Here</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="timeline-footer">
        <p className="cursive">One day we will replace these screenshots with actual pictures of us. ❤️</p>
      </div>
    </div>
  );
};

export default MemoryTimeline;
