import React from 'react'
import './Styles.css'


export default function Faq() {
    const faqData = [
        {
          section: 'Company Details',
          questions: [
            {
              question: 'What is the history of our company?',
              answer: 'Our company was founded in 2005 and has since been dedicated to delivering innovative technology solutions to clients worldwide.'
            },
            {
              question: 'What is the mission of our company?',
              answer: 'Our mission is to empower clients with cutting-edge technology and exceptional service.'
            },
          ],
        },
        {
          section: 'Career Prospects',
          questions: [
            {
              question: 'How can I apply for a job at your company?',
              answer: 'Visit our Careers page to view and apply for current job openings.'
            },
            {
              question: 'What is the company culture like?',
              answer: 'Our company values collaboration, innovation, and excellence. We foster a dynamic and inclusive work environment.'
            },
          ],
        },
        {
          section: 'Vacations',
          questions: [
            {
              question: 'How many vacation days do employees receive?',
              answer: 'Employees receive 20 paid vacation days per year, in addition to public holidays.'
            },
            {
              question: 'Is there a policy for remote work or flexible hours?',
              answer: 'Yes, we offer flexible work arrangements to promote work-life balance.'
            },
          ],
        },
        {
          section: 'Available Infrastructure',
          questions: [
            {
              question: 'What infrastructure does the company provide for employees?',
              answer: 'We provide modern office facilities, high-speed internet, and necessary equipment to support your work.'
            },
            {
              question: 'Is there on-site parking available?',
              answer: 'Yes, we have on-site parking for employees.'
            },
          ],
        },
      ];
    
      return (
        <div className="faq-container"> {/* Use the custom class for the FAQ container */}
          <h1 className="faq-heading">Frequently Asked Questions</h1> {/* Use custom class for FAQ heading */}
          {faqData.map((section, index) => (
            <div key={index} className="faq-section"> {/* Use custom class for FAQ section */}
              <h2 className="section-heading">{section.section}</h2> {/* Use custom class for section heading */}
              <ul className="faq-list"> {/* Use custom class for FAQ list */}
                {section.questions.map((qa, i) => (
                  <li key={i} className="faq-item"> {/* Use custom class for FAQ list items */}
                    <h3 className="question-heading">{qa.question}</h3> {/* Use custom class for question headings */}
                    <p className="answer-paragraph">{qa.answer}</p> {/* Use custom class for answer paragraphs */}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
}
