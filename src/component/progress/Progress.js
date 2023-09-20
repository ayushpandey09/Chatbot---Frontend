import React from 'react';

const Progress = ({ steps, currentStep }) => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">User Progress</h2>
      <div className="progress">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`progress-bar ${
              index < currentStep ? 'bg-success' : 'bg-secondary'
            }`}
            role="progressbar"
            style={{ width: `${(index + 1) * (100 / steps.length)}%` }}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
