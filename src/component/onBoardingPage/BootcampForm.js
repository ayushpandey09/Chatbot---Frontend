import React, { useState } from 'react';
import SurveyResultCard from './SurveyResultCard';
import './Styles.css'

function FeedbackSurvey({onFormSubmit}) {
  const [formData, setFormData] = useState({
    satisfaction: '',
    feedback: '',
    improvements: '',
    relevanceRating: '', // New field for rating
    caseStudyRating: '',
  });

const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the data to a server
    console.log(formData);
    onFormSubmit(parseInt(2));
    // Reset the form

    // setFormData({
    //   satisfaction: '',
    //   feedback: '',
    //   improvements: '',
    //   relevanceRating: '',
    //   caseStudyRating: '',
    // });

    setSubmitted(true);
  };

  const resultData = [
    { label: 'Overall Satisfaction', value: formData.satisfaction },
    { label: 'Feedback', value: formData.feedback },
    { label: 'Suggestions for Improvements', value: formData.improvements },
    { label: 'Relevance Rating', value: formData.relevanceRating },
  ];

  return (
    <div className="container mt-5">
      <h2>Feedback Survey</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group my-4">
          <label>How Relevant Was the Course To Your Domain</label>
          <div className="d-flex">
            {[1, 2, 3, 4, 5].map((rating) => (
              <label key={rating} className="mx-2" style={{verticalAlign:`middle`}}>
                <input
                  type="radio"
                  name="relevanceRating"
                  value={rating}
                  onChange={handleChange}
                  checked={formData.relevanceRating === String(rating)}
                />
                {rating}
              </label>
            ))}
          </div>
        </div>
        <div className="form-group my-4">
          <label>How Useful Was the Case-Study To Understand The Topics Taught In The Bootcamp? </label>
          <div className="d-flex">
            {[1, 2, 3, 4, 5].map((rating) => (
              <label key={rating} className="mx-2" style={{verticalAlign:`middle`}}>
                <input
                  type="radio"
                  name="caseStudyRating"
                  value={rating}
                  onChange={handleChange}
                  checked={formData.caseStudyRating === String(rating)}
                />
                {rating}
              </label>
            ))}
          </div>
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
        <div className="form-group">
          <label>Overall Satisfaction</label>
          <select
            className="form-control"
            name="satisfaction"
            value={formData.satisfaction}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="very-satisfied">Very Satisfied</option>
            <option value="satisfied">Satisfied</option>
            <option value="neutral">Neutral</option>
            <option value="dissatisfied">Dissatisfied</option>
            <option value="very-dissatisfied">Very Dissatisfied</option>
          </select>
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

export default FeedbackSurvey;

// import SurveyResultCard from './SurveyResultCard'; // Import the result card component

// function FeedbackSurvey() {
//   const [formData, setFormData] = useState({
//     satisfaction: '',
//     feedback: '',
//     improvements: '',
//     relevanceRating: '',
//   });
//   const [submitted, setSubmitted] = useState(false); // Track form submission

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send the data to a server
//     console.log(formData);
//     // Reset the form
//     setFormData({
//       satisfaction: '',
//       feedback: '',
//       improvements: '',
//       relevanceRating: '',
//     });
//     // Mark the form as submitted
//     setSubmitted(true);
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Feedback Survey</h2>
//       <form onSubmit={handleSubmit}>
//         {/* ... (Form fields) */}
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
      
//       {/* Conditionally render the result card when the form is submitted */}
//       {submitted && <SurveyResultCard formData={formData} />}
//     </div>
//   );
// }

// export default FeedbackSurvey;

