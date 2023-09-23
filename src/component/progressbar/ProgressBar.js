import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ totalItems, selectedItems }) => {
  const percentage = (selectedItems.length / totalItems) * 100;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div className="filler" style={{ width: `${percentage}%` }}>
          <span className="label">{percentage.toFixed(0)}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
