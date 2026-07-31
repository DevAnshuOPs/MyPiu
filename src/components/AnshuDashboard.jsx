import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, RefreshCw, CheckCircle } from 'lucide-react';
import './AnshuDashboard.css';

const AnshuDashboard = ({ onBack }) => {
  const [redeemedCoupons, setRedeemedCoupons] = useState({});

  useEffect(() => {
    loadRedeemed();
  }, []);

  const loadRedeemed = () => {
    const data = localStorage.getItem('redeemedCoupons');
    if (data) {
      setRedeemedCoupons(JSON.parse(data));
    }
  };

  const clearData = () => {
    if (window.confirm("Are you sure you want to reset all coupon data?")) {
      localStorage.removeItem('redeemedCoupons');
      localStorage.removeItem('lastRedeemedDate');
      setRedeemedCoupons({});
    }
  };

  return (
    <div className="admin-page">
      <button className="back-btn glass-panel" onClick={onBack}>
        <ArrowLeft size={24} />
        <span>Back to Start</span>
      </button>

      <div className="admin-header">
        <h1 className="cursive">Welcome, King 👑</h1>
        <p>Here is what Piu has claimed so far.</p>
      </div>

      <div className="admin-content glass-panel">
        <div className="admin-actions">
          <h2>Redeemed Coupons</h2>
          <button className="refresh-btn" onClick={loadRedeemed}>
            <RefreshCw size={18} /> Refresh
          </button>
        </div>

        {Object.keys(redeemedCoupons).length === 0 ? (
          <p className="no-data">She hasn't redeemed anything yet!</p>
        ) : (
          <ul className="redeemed-list">
            {Object.entries(redeemedCoupons).map(([id, dateStr]) => {
              const date = new Date(dateStr);
              return (
                <li key={id} className="redeemed-item">
                  <div className="item-info">
                    <CheckCircle size={20} color="#22c55e" />
                    <span>Coupon #{id}</span>
                  </div>
                  <span className="item-date">{date.toLocaleDateString()} at {date.toLocaleTimeString()}</span>
                </li>
              );
            })}
          </ul>
        )}

        <div className="admin-footer">
          <button className="clear-btn" onClick={clearData}>Reset All Coupon Data</button>
        </div>
      </div>
    </div>
  );
};

export default AnshuDashboard;
