import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Progress from './Progress';
import SurveyPage from '../survey/SurveyPage';

const UserProgressStatus = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];

  const completeStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const resetProgress = () => {
    setCurrentStep(0);
  };

  return (
    
      <div className="container mt-5">
        <h1 className="mb-4">Onboarding Application</h1>
        <Progress steps={steps} currentStep={currentStep} />
        <div className="mt-4">
          <button className="btn btn-primary mr-3" onClick={completeStep}>
            Complete Step
          </button>
          <button className="btn btn-danger" onClick={resetProgress}>
            Reset Progress
          </button>
        </div>

        <hr />

        <h2 className="mt-4">Tasks to Complete:</h2>
        <ul>
          <li>
            <Link to="/survey">Complete Survey</Link>
          </li>
          {/* Add more tasks here */}
        </ul>

        
      </div>
    
  );
};

export default UserProgressStatus;
