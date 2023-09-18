import React, { useState } from 'react';
import './Chatbox.css';
import axios from 'axios';

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isContinued, setIsContinued] = useState(false);
  const [lastQuestion, setLastQuestion]  = useState('');
  

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const userMessage = { text: newMessage, isBot: false };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setNewMessage('');

    const messageBody = {
        senderName: "user",
        content: userMessage.text
    };

    
        let botResponse = 'This is a bot response.';
        console.log("check if it is true before 2nd quesiton" + isContinued);
        
        //check if there is a continuation in the chat or not
        if(isContinued){
            setIsContinued(false);
            const param = newMessage.trim();
            if(lastQuestion ==="Enter your id number"){
                axios.get(`http://localhost:8080/chatbot/questionmanager/${param}`).then(
                (response)=>{
                    console.log(response.data);
                    const {content,senderName} = response.data;
                    // botResponse = content;
                    const botMessage = { text: content, isBot: true };
                    setMessages((prevMessages) => [...prevMessages, botMessage]);
                }
               )
               .catch(
                (error)=>{
                    console.log(error)
                }
               )
               //on the basis of last question next api will call
            }else if(lastQuestion === "Enter your location"){
                axios.get(`http://localhost:8080/chatbot/questionithelp/${param}`).then(
                    (response)=>{
                        console.log(response.data);
                        const {content,senderName} = response.data;
                       // botResponse = content;
                        const botMessage = { text: content, isBot: true };
                        setMessages((prevMessages) => [...prevMessages, botMessage]);
                        
                    }
                   )
                   .catch(
                    (error)=>{
                        console.log(error)
                    }
                   )
            }
        }
        
        //post request for initiating chat
        if(!isContinued){
        axios.post('http://localhost:8080/chatbot/question',messageBody, {
            headers: {
                'Content-Type': 'application/json',
              },
        }
        ).then(
            (response)=>{
                console.log(response.data);
                //Get request for getting the response back
                    axios.get('http://localhost:8080/chatbot/questionresponse').then(
                    (response)=>{
                        console.log(response.data);
                        const {content,senderName} = response.data;
                       // console.log(content,senderName);
                       // botResponse = content;
                         //binding the response of the bot
                    const botMessage = { text: content, isBot: true };
                    setMessages((prevMessages) => [...prevMessages, botMessage]);

                    if(content === "Sorry... not able to get your prompt")
                    {
                        return;
                    }
                    
                    setIsContinued(true);
                    setLastQuestion(content);
                    console.log("check is continue is true after 1st question" + isContinued);
                    return ;
                    }
                )
            }
        ).catch((error) => {
            console.error('Error sending message:', error);
            if (error.response) {
                console.error('Response Data:', error.response.data);
              }
          });
        }
  };

  return (
    <div className="chat-box">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.isBot ? 'bot' : 'user'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatBox;

