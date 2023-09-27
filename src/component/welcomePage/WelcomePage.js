import React from 'react'
import './Styles.css' 
import { useNavigate } from 'react-router-dom'
//const { useNavigate } = require('react-router-dom');

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Chatbot</h1>
        <p>Chat with us and get instant assistance!</p>
        <button onClick={()=>{ 
          const isFormFilled = localStorage.getItem('isFormFilled');

          if(isFormFilled === "true"){
            console.log('isformfiled'+ isFormFilled);
            navigate('/chatbot');
          }else{
            console.log('isformfiledelse'+ isFormFilled);
            navigate("/form");
          }
          
          }} className="cta-button">Get Started</button>
      </div>
    </section>

    {/* About Section */}
    <section className="about">
      <div className="about-content">
        <h2>About Us</h2>
        <p>Welcome to our intelligent onboarding chatbot,
         your trusted companion in making the onboarding experience seamless and efficient for our new joiners. </p>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="testimonials">
      <div className="testimonial">
        <p>"Great chatbot! It helped me a lot."</p>
        <p>- Satisfied User</p>
      </div>
    </section>

    {/* Contact Section */}
    <section className="contact">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>If you have questions, feel free to reach out:</p>
        <p>Email: contact@example.com</p>
      </div>
    </section>

    {/* Footer */}
    <footer className="footer">
      <div className="footer-links">
        <a href="/">Privacy Policy</a>
        <a href="/">Terms of Service</a>
      </div>
      <div className="social-media-icons">
        {/* Add social media icons here */}
      </div>
    </footer>
  </div>
  )
}

export default WelcomePage

