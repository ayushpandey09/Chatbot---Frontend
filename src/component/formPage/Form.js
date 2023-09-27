import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './Form.css'; // Import the CSS file
import axios from 'axios';

function ChatStartPage() {
  const [formData, setFormData] = useState({
    name: '',
    empEmail: '',
    phone: '',
    
  });
  const [phoneError, setPhoneError] = useState('');

  const navigate = useNavigate();
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validatePhone = (phone) => {
    // regex pattern for a 10-digit phone number 
    const phonePattern = /^\d{10}$/;

    return phonePattern.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { phone, empName , empEmail} = formData;

    if (!validatePhone(phone)) {
      setPhoneError('Invalid phone number format. Phone number must be 10 digits');
      return;
    }

    
    axios.post('http://localhost:8080/user',{
        id: "", empName, empEmail, phone
    }).then((res)=>{
        console.log(res.data);
    }).catch((err)=>console.log(err));

    localStorage.setItem('user_email',empEmail);
    localStorage.setItem('isFormFilled',true);

    const path = `/chatbot`; 
    navigate(path);
    console.log('Submitted Data:', formData);
  };

  return (
    <div className="chat-start-container">
      <h1>Start a Chat</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name<span className="required">*</span>:</label>
          <input
            type="text"
            id="name"
            name="empName"
            value={formData.empName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email<span className="required">*</span>:</label>
          <input
            type="email"
            id="email"
            name="empEmail"
            value={formData.empEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {phoneError && (!validatePhone(formData.phone))  && <p className="error-message">{phoneError}</p>}
        </div>
        <button type="submit">Start Chat</button>
      </form>
    </div>
  );
}

export default ChatStartPage;
