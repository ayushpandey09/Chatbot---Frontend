// import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SurveyResultCard from './SurveyResultCard';
import './Styles.css'


import React, { useState } from 'react';

function Form({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    satisfaction: '',
    feedback: '',
    improvements: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams('id');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resultData = [
    { label: 'Overall Satisfaction', value: formData.satisfaction },
    { label: 'Feedback', value: formData.feedback },
    { label: 'Suggestions for Improvements', value: formData.improvements },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the data to a server
    console.log(formData);
    onFormSubmit(parseInt(id));
   // Reset the form
    // setFormData({
    //   satisfaction: '',
    //   feedback: '',
    //   improvements: '',
    // });
    setSubmitted(true);
   // navigate('/onboard');
  };

  

  return (
    <div className="container mt-5">
      <h2>Feedback Survey</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Overall Satisfaction</label>
          <select
            className="form-control"
            name="satisfaction"
            value={formData.satisfaction}
            onChange={handleChange}
            required // Make the field required
          >
            <option value="">Select</option>
            <option value="very-satisfied">Very Satisfied</option>
            <option value="satisfied">Satisfied</option>
            <option value="neutral">Neutral</option>
            <option value="dissatisfied">Dissatisfied</option>
            <option value="very-dissatisfied">Very Dissatisfied</option>
          </select>
        </div>
        <div className="form-group">
          <label>Feedback</label>
          <textarea
            className="form-control"
            rows="3"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Suggestions for Improvements</label>
          <textarea
            className="form-control"
            rows="3"
            name="improvements"
            value={formData.improvements}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {submitted && (
        <div className="overlay">
          <div className="result-card">
            <SurveyResultCard data={resultData} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
