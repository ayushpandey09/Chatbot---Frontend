import React from 'react';

function SurveyResultCard({ data }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Survey Result</h5>
        <ul className="list-group list-group-flush">
          {data.map((item, index) => (
            <li key={index} className="list-group-item">
              <strong>{item.label}:</strong> {item.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SurveyResultCard;
