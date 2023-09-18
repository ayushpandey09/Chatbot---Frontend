import React from 'react';
import './GeneralInfo.css'; // Import the CSS file

function GeneralInfo() {
  return (
    <div className="company-general-info">
      <h2>Company General Information</h2>
      <p>Welcome to our company's general information page. Here, you can find detailed information about our organization.</p>
      
      <h3>About Us</h3>
      <p>
        ABC Corporation is a leading global technology company that specializes in innovative solutions for various industries.
        We were founded on January 1, 2000, with a commitment to excellence and a passion for innovation.
        Our headquarters are located in the heart of Silicon Valley, and we have offices in major cities worldwide.
      </p>

      <h3>Our Values</h3>
      <ul>
        <li>Customer-Centric: We prioritize the needs and satisfaction of our customers.</li>
        <li>Innovation: We continuously seek innovative solutions to solve complex problems.</li>
        <li>Teamwork: Collaboration and teamwork are at the heart of our success.</li>
        <li>Integrity: We uphold the highest ethical standards in all our interactions.</li>
        <li>Quality: We are committed to delivering high-quality products and services.</li>
        <li>Community: We actively engage with and support the communities where we operate.</li>
      </ul>

      <h3>Leadership Team</h3>
      <div className="leadership-team">
        <p>Meet our leadership team, dedicated to guiding our company to new heights:</p>
        <ul>
          <li>CEO: John Doe</li>
          <li>CTO: Jane Smith</li>
          <li>CFO: Mark Johnson</li>
          <li>COO: Emily Brown</li>
          <li>CMO: Michael Lee</li>
        </ul>
      </div>

      <h3>Global Presence</h3>
      <p>
        With a strong global presence, we operate in over 30 countries and serve customers worldwide.
        Our international teams work together to provide innovative solutions tailored to local markets.
      </p>

      <h3>Career Opportunities</h3>
      <p>
        We believe in fostering talent and offer a range of career opportunities for professionals at all levels.
        If you're passionate about technology and innovation, consider joining our team.
      </p>

      <a href="/" className="cta-button">Learn More</a>
    </div>
  );
}

export default GeneralInfo;
