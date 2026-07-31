import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Mic, Music, Image as ImageIcon, HeartPulse, MessageSquareHeart, MessageCircleHeart } from 'lucide-react';
import './CouponBook.css';
import confetti from 'canvas-confetti';

const CouponBook = ({ onBack }) => {
  const [redeemed, setRedeemed] = useState({});
  const [lastRedeemedDate, setLastRedeemedDate] = useState(null);
  const [alertMsg, setAlertMsg] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem('redeemedCoupons');
    if (saved) {
      setRedeemed(JSON.parse(saved));
    }
    const lastDate = localStorage.getItem('lastRedeemedDate');
    if (lastDate) {
      setLastRedeemedDate(lastDate);
    }
  }, []);

  const coupons = [
    { id: 1, title: 'A Voice Note', icon: <Mic />, desc: 'Redeem for a special voice note just for you.' },
    { id: 2, title: 'A Song', icon: <Music />, desc: 'A song dedicated to my beautiful Piu.' },
    { id: 3, title: 'A Pic', icon: <ImageIcon />, desc: 'A cute picture sent your way.' },
    { id: 4, title: 'Love Bombing VN', icon: <HeartPulse />, desc: 'Prepare to be showered with love.' },
    { id: 5, title: 'Kisses', icon: <MessageSquareHeart />, desc: 'Infinite virtual kisses.' },
    { id: 6, title: 'Custom Message', icon: <MessageCircleHeart />, desc: 'A special, handwritten message.' },
  ];

  const handleRedeem = (id) => {
    if (redeemed[id]) return;

    const today = new Date().toDateString();
    if (lastRedeemedDate === today) {
      setAlertMsg("Baby, you can only redeem one coupon per day! Save some for tomorrow. ❤️");
      setTimeout(() => setAlertMsg(""), 4000);
      return;
    }

    const updatedRedeemed = { ...redeemed, [id]: new Date().toISOString() };
    setRedeemed(updatedRedeemed);
    setLastRedeemedDate(today);

    localStorage.setItem('redeemedCoupons', JSON.stringify(updatedRedeemed));
    localStorage.setItem('lastRedeemedDate', today);
    
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f43f5e', '#fb7185', '#fecdd3', '#ffffff']
    });
  };

  return (
    <div className="coupons-page">
      <button className="back-btn glass-panel" onClick={onBack}>
        <ArrowLeft size={24} />
        <span>Back</span>
      </button>

      <div className="coupons-header">
        <h1 className="cursive">Love Coupons for My Baby 👑</h1>
        <p>Tap a coupon to redeem it (Limit: 1 per day!)</p>
      </div>

      <AnimatePresence>
        {alertMsg && (
          <motion.div 
            className="alert-msg glass-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {alertMsg}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="coupons-grid">
        <AnimatePresence>
          {coupons.map((coupon) => (
            <motion.div 
              key={coupon.id}
              layout
              className={`coupon-card ${redeemed[coupon.id] ? 'redeemed' : 'glass-panel'}`}
              onClick={() => handleRedeem(coupon.id)}
              whileHover={!redeemed[coupon.id] ? { scale: 1.05, rotate: -2 } : {}}
              whileTap={!redeemed[coupon.id] ? { scale: 0.95 } : {}}
            >
              <div className="coupon-edge left"></div>
              <div className="coupon-content">
                <div className="coupon-icon">{coupon.icon}</div>
                <h2>{coupon.title}</h2>
                <p>{coupon.desc}</p>
                
                {redeemed[coupon.id] ? (
                  <div className="redeemed-stamp cursive">Redeemed</div>
                ) : (
                  <div className="click-to-redeem">Click to Redeem</div>
                )}
              </div>
              <div className="coupon-edge right"></div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CouponBook;
