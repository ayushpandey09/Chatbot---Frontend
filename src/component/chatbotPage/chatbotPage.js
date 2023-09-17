import React, { useState } from 'react';
import './ChatbotFrame.css';

const ChatbotPage = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Add user's message to the conversation
//     setMessages([...messages, { text: inputValue, user: true }]);
    
//     // Simulate chatbot response (you can replace this with your chatbot logic)
//     setTimeout(() => {
//       setMessages([...messages, { text: 'This is a chatbot response.', user: false }]);
//     }, 1000);

//     setInputValue('');
 // };

  return (
    <div className="chat-container">
    <div className="chatbox-container">
        <div className="chat-body" id="chat-body">
           
        </div>
        <div className="chat-footer">
            <input type="text" id="user-input" placeholder="Type your query"/>
            <button id="send-button">Send</button>
        </div>
    </div>
</div>
  );
};

export default ChatbotPage

