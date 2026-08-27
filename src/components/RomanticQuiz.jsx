import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, PenTool, Mail } from 'lucide-react';
import './RomanticQuiz.css';

const RomanticQuiz = ({ onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Grouped into two main sections
  const sections = [
    {
      id: 'poems',
      type: 'Poems',
      icon: <PenTool size={16} />,
      header: "The poems that I wrote for you before but still once again feel them",
      items: [
        { 
          title: "Ocean In Your Eyes", 
          content: `Your eyes I see the beauty in it
The beauty that cannot be described
Perhaps can just be felt
Not by others, not by many
But Just by me
The ocean that they hold
The urge to carelessly drown in them
Or swim in it forever
Just drown slowly
Till every ounce of breath in me becomes a part of that ocean
Till the ocean bed hugs my cold lifeless body deep within its warmth
Till I completely become a part of you
Forever` 
        },
        { 
          title: "Through My Eyes", 
          content: `Look at her through my eyes
Look at her through my eyes and you'll only see her
You'll only see her even though I've never met her 
You'll see her shilloette even though I've never known her shape
You'll see her smile even though I've never touched those lips
You'll see her hands even though I've never felt her warmth
Look at her through my eyes and You'll not see your world, but mine, mine alone` 
        }
      ]
    },
    {
      id: 'letters',
      type: 'Letter',
      icon: <Mail size={16} />,
      header: "Letter straight from my heart",
      items: [
        { 
          title: "Happy Birthday PIU", 
          content: (
            <>
              {`Wish You a Very Very Happy Birthday My Baby, I know it would be better if i could be there and wish you face to face, but how do i explain, its the essence of the slightest belief that you are real, essence of protectiveness and safety that i want to make you feel, a sense of belonging, how do i explain that i want to hold you close to me, to my heart when you feel sad or upset, i want to hold your head in my palms, a sense of my entire world in my palms, i want to take your hands and kiss your palms, as if i was yearning for decades, i want to kiss your feet, as that is where I belong, i want to pull you closer to me as I'm scared to death even an inch apart from you feels like i lost a piece of myself, i want to put your head on my chest, to show you that it only beats for you, i want to kiss your eyes, as if I'm trying to take away all your tears, i want to kiss your forehead, as if I'm trying to ease your mind, i want to kiss your cheeks, as if I'm trying to show you that i accept you and love you as you are, i want to kiss your lips, as if thats how I'm trying to express my love for you, i want to hold your hand, to show that even if the entire world is against you, I'll stand with you, stand proud with you, i want to carry you in my arms, to show you that you dont have to carry the pain alone, i want to wake up next to you, as if I'm making sure that you slept well, so yes i wanna hold you tight to show you that yes girl you matter, you matter to me the most, so never forget that, and always be happy about yourself cuz you make someone else very happy with your existence, and that someone else is ME, I love you PIU, and again wish you a Very Happy Birthday Baby...`}
              <br /><br />
              <h2 className="cursive" style={{ textAlign: 'center', color: 'var(--color-primary)', marginTop: '20px', fontSize: '2.5rem', lineHeight: '1.4' }}>
                Always Be Happy My Baby, No Matter What, Thats all this Man Wants
              </h2>
            </>
          )
        }
      ]
    }
  ];

  const handleNext = () => {
    if (currentIndex < sections.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentSection = sections[currentIndex];

  return (
    <div className="letters-page">
      <button className="back-btn glass-panel" onClick={onBack}>
        <ArrowLeft size={24} />
        <span>Back to Hub</span>
      </button>

      <div className="letters-header">
        <h1 className="cursive">Poems & Letters 🌸</h1>
        <p>Words written just for you...</p>
      </div>

      <div className="letters-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="letter-paper glass-panel"
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -90 }}
            transition={{ duration: 0.6 }}
          >
            <div className="letter-type-badge">
              {currentSection.icon}
              <span>{currentSection.type}</span>
            </div>
            
            <h2 className="letter-title cursive">{currentSection.header}</h2>
            
            <div className="scrollable-content">
              {currentSection.items.map((item, idx) => (
                <div key={idx} className="writing-item">
                  <h3 className="writing-title">{item.title}</h3>
                  <div className="writing-body">{item.content}</div>
                  {idx < currentSection.items.length - 1 && <div className="writing-divider"></div>}
                </div>
              ))}
            </div>

            <div className="letter-footer">
              <p className="cursive">With all my love,</p>
              <p className="cursive signature">Your Anshu</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="navigation-controls">
          <button 
            className="nav-btn glass-panel" 
            onClick={handlePrev} 
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={24} />
            <span>Poems</span>
          </button>
          
          <span className="page-indicator">
            {currentIndex + 1} / {sections.length}
          </span>
          
          <button 
            className="nav-btn glass-panel" 
            onClick={handleNext} 
            disabled={currentIndex === sections.length - 1}
          >
            <span>Letters</span>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RomanticQuiz;
