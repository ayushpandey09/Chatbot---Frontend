// import React from 'react'
//import { useNavigate } from 'react-router-dom'

// function Form() {
//     const navigate = useNavigate();
//   return (
//     <div>
//         <div class="container mt-5">
//         <h1 class="text-center">Welcome to Our ChatBot</h1>
//         <p class="text-center">Please provide your registration details:</p>
//         <form id="registrationForm">
//             <div class="form-group">
//                 <label for="name">Name:</label>
//                 <input type="text" id="name" name="name" required class="form-control"/>
//             </div>
//             <div class="form-group">
//                 <label for="email">Email:</label>
//                 <input type="email" id="email" name="email" required class="form-control"/>
//             </div>
//             <div class="form-group">
//                 <label for="phone">Phone (Optional):</label>
//                 <input type="tel" id="phone" name="phone" class="form-control"/>
//             </div>
//             <div class="form-group text-center">
//                 <input onClick={()=>{ navigate("/chatbot") }} type="submit" value="Submit" class="btn btn-primary"/>
//             </div>
//         </form>
//     </div>
//     </div>
//   )
// }

// export default Form

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validatePhone = (phone) => {
    // Basic regex pattern for a 10-digit phone number in the format "123-456-7890"
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

    // Here, you can implement the logic to start the chat with the provided details.
    // You can send the data to your chat component or API as needed.

    // For demonstration, we'll just display the details in the console.
    console.log({id : 104, empEmail, empName, phone});
    axios.post('http://localhost:8080/adduser',{
        id: 1012, empName, empEmail, phone
    }).then((res)=>{
        console.log(res.data);
    })
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
