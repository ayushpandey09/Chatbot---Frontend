import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Styles.css' 
function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
    {/* Header */}
    {/* <header className="header">
        <div className="logo">
          <img src="your-logo.png" alt="Chatbot Logo" />
        </div>
        <nav className="navigation-menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">FAQ</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </nav>
      </header> */}

    {/* Hero Section */}
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Your Chatbot</h1>
        <p>Chat with us and get instant assistance!</p>
        <button onClick={()=>{ navigate("/form") }} className="cta-button">Get Started</button>
      </div>
    </section>

    {/* About Section */}
    <section className="about">
      <div className="about-content">
        <h2>About Us</h2>
        <p>Brief description about chatbot and its features.</p>
      </div>
    </section>

    {/* How It Works Section */}
    {/* <section className="how-it-works">
      <div className="steps">
        
        <div className="step">
          <div className="step-icon">Step 1 Icon</div>
          <p>Step 1: Describe the first step here.</p>
        </div>
        
        <div className="step">
          <div className="step-icon">Step 2 Icon</div>
          <p>Step 2: Describe the second step here.</p>
        </div>
        
        <div className="step">
          <div className="step-icon">Step 3 Icon</div>
          <p>Step 3: Describe the third step here.</p>
        </div>
      </div>
    </section> */}

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

