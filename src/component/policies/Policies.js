import React from 'react'
import './Policies.css'

export default function Policies() {
  return (
    <div className="company-policies">
    <h2>Company Policies</h2>
    <div className="core-values">
      <h3>Our Core Values</h3>
      <ul>
        <li>We are changemakers</li>
        <li>We are better together</li>
        <li>We care</li>
        <li>We make it simple</li>
      </ul>
    </div>
    <div className="privacy-policy">
      <h3>Privacy Policy</h3>
      <p>
      This policy describes how Telstra Health collects, handles and protects the personal information of any individuals (referred to as ‘you’ or ‘your’) who:
        <br></br>
      <ul>
        <li>are, or are employed or engaged by, one of our business customers (for example, a visiting medical officer, health practitioner or other employee or contractor of a business that acquires our products and services);</li>
        <li>are a patient of, or receive health services from, a health professional, business or organisation that uses our products and services and in doing so shares your information with us; or </li>
        <li>we otherwise deal with in the course of operating our business (for example, users of our website, job applicants, or independent contractors).</li>
      </ul>
      </p>
    </div>

    <div className="privacy-statement">
      <h3>Privacy Statement</h3>
      <p>
      Privacy matters to us and we know it matters to you. We are committed to protecting your privacy, keeping your personal information safe and ensuring the security of your data in accordance with applicable data protection laws. 
This Privacy Statement applies to the processing of personal information relating to customers of Telstra Enterprise International businesses by the entities listed here (“we”, “us” or “our” in this Privacy Statement), excluding Pacific Business Solutions (China), Telstra PBS Limited and Digicel Pacific. Telstra Enterprise International is the global arm of Telstra’s business providing enterprise solutions outside of Australia. If you need to give us personal information about other individuals in relation to our international enterprise products and services, this Privacy Statement will also apply. 
This Privacy Statement explains how we collect, store, use and share (“process”) your personal information when you use our products and services, or interact with us when we provide our international enterprise services.
      </p>
    </div>
    

  </div>
  );
}
