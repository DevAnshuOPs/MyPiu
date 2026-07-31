import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Mail, Heart } from 'lucide-react';
import './RomanticQuiz.css';
import confetti from 'canvas-confetti';

const RomanticQuiz = ({ onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  
  // Track positions for evasive buttons
  const [evasionPos, setEvasionPos] = useState({});

  const questions = [
    {
      questionText: "Where did we first meet?",
      answerOptions: [
        { id: 'q1_1', answerText: "At a coffee shop", isCorrect: false },
        { id: 'q1_2', answerText: "Through friends", isCorrect: false },
        { id: 'q1_3', answerText: "[Your correct answer here]", isCorrect: true },
        { id: 'q1_4', answerText: "At work/school", isCorrect: false },
      ],
    },
    {
      questionText: "What is my favorite nickname for you?",
      answerOptions: [
        { id: 'q2_1', answerText: "Piu", isCorrect: false },
        { id: 'q2_2', answerText: "Princess", isCorrect: false },
        { id: 'q2_3', answerText: "Cutie", isCorrect: false },
        { id: 'q2_4', answerText: "[Your favorite nickname]", isCorrect: true },
      ],
    },
    {
      questionText: "What was the first movie we watched together?",
      answerOptions: [
        { id: 'q3_1', answerText: "[Movie 1]", isCorrect: false },
        { id: 'q3_2', answerText: "[Correct Movie]", isCorrect: true },
        { id: 'q3_3', answerText: "[Movie 3]", isCorrect: false },
        { id: 'q3_4', answerText: "[Movie 4]", isCorrect: false },
      ],
    },
    {
      questionText: "Who said 'I love you' first?",
      answerOptions: [
        { id: 'q4_1', answerText: "You did!", isCorrect: false },
        { id: 'q4_2', answerText: "I did!", isCorrect: true },
        { id: 'q4_3', answerText: "We said it at the same time", isCorrect: false },
      ],
    },
    {
      questionText: "How much do I love you?",
      answerOptions: [
        { id: 'q5_1', answerText: "A lot", isCorrect: false },
        { id: 'q5_2', answerText: "To the moon", isCorrect: false },
        { id: 'q5_3', answerText: "Infinitely", isCorrect: true },
        { id: 'q5_4', answerText: "Very much", isCorrect: false },
      ],
    }
  ];

  const handleEvade = (id, isCorrect) => {
    if (isCorrect) return; // Correct answer doesn't move

    // Generate random offset that is far away (between 300 and 600 pixels away)
    const signX = Math.random() > 0.5 ? 1 : -1;
    const signY = Math.random() > 0.5 ? 1 : -1;
    const x = (Math.floor(Math.random() * 300) + 300) * signX;
    const y = (Math.floor(Math.random() * 300) + 300) * signY;
    
    setEvasionPos(prev => ({ ...prev, [id]: { x, y } }));
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setEvasionPos({});
      } else {
        setShowScore(true);
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handleOpenEnvelope = () => {
    setEnvelopeOpen(true);
  };

  return (
    <div className="quiz-page">
      <button className="back-btn glass-panel" onClick={onBack}>
        <ArrowLeft size={24} />
        <span>Back</span>
      </button>

      <div className="quiz-container glass-panel">
        <AnimatePresence mode="wait">
          {showScore ? (
            <motion.div 
              key="score"
              className="score-section"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {!envelopeOpen ? (
                <div className="envelope-reveal">
                  <h2 className="cursive">You did it, Princess! 🌷</h2>
                  <p>You know us perfectly. I have something for you...</p>
                  
                  <motion.div 
                    className="reward-envelope"
                    onClick={handleOpenEnvelope}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail size={80} color="#b76e79" />
                    <Heart size={24} color="#f43f5e" className="reward-heart" />
                    <span className="tap-text">Tap to open</span>
                  </motion.div>
                </div>
              ) : (
                <motion.div 
                  className="letter-reveal"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="cursive">My handwritten letter to you...</p>
                  <div className="letter-image-placeholder">
                    {/* The user will put letter.jpg in public/assets */}
                    <img src="/assets/letter.jpg" alt="Handwritten Letter" onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }} />
                    <div className="missing-image-fallback" style={{ display: 'none' }}>
                      <p>Placeholder for letter.jpg</p>
                      <small>(Place your letter image in public/assets/letter.jpg)</small>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div 
              key="question"
              className="question-section"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">{questions[currentQuestion].questionText}</div>
              
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map((answerOption) => {
                  const pos = evasionPos[answerOption.id] || { x: 0, y: 0 };
                  
                  return (
                    <motion.button 
                      key={answerOption.id}
                      className={`answer-btn ${answerOption.isCorrect ? 'correct-target' : ''}`}
                      onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                      onHoverStart={() => handleEvade(answerOption.id, answerOption.isCorrect)}
                      onMouseEnter={() => handleEvade(answerOption.id, answerOption.isCorrect)} // For non-framer fallback
                      animate={{ x: pos.x, y: pos.y }}
                      transition={{ type: 'spring', stiffness: 500, damping: 10, mass: 0.5 }}
                      style={{ position: 'relative', zIndex: pos.x !== 0 ? 10 : 1 }}
                    >
                      <span>{answerOption.answerText}</span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RomanticQuiz;
