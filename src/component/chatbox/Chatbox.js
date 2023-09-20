import React, { useState } from 'react';
import './Chatbox.css';
import axios from 'axios';

function ChatBox() {
  
  //state to store all the message - prompt and response
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  //isContinued -->false for 1st promt ; True ---> for contiuation to previous question
  const [isContinued, setIsContinued] = useState(false);
  const [lastQuestion, setLastQuestion]  = useState('');

  //for voice chat
 // const [transcript, setTranscript] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [recognition, setRecognition] = useState(null);

  // Function to start voice recording
  const handleStartRecording = () => {
    setIsRecording(true);

    // Initialize the SpeechRecognition API for voice-to-text
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognitionInstance = new SpeechRecognition();
    recognitionInstance.lang = 'en-US';

    // Event handlers for voice recognition
    recognitionInstance.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
     // setTranscript(transcript);
      setNewMessage(transcript);
    };

    recognitionInstance.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };

    recognitionInstance.onend = () => {
      setIsRecording(false);
    };

    setRecognition(recognitionInstance);
    recognitionInstance.start();
  };

  const handleStopRecording = () => {
    if (recognition) {
      recognition.stop();
    }
    setIsRecording(false);
  };
 

  // Function to send a user message
  //Summary - multiple API calling 
  // API - calling sequence
  //1st promt-  post('http://localhost:8080/chatbot/question')
  //To get response of 1st promt - get('http://localhost:8080/chatbot/questionresponse')
  //
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    //to remove '.' from message
    if(newMessage.includes('.')){
      setNewMessage(newMessage.slice(0, -1));
    }
    //set userMessage and add newMessage to message array
    const userMessage = { text: newMessage, isBot: false };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setNewMessage('');

    //messageBody format should match the backend api format
    const messageBody = {
        senderName: "user",
        content: userMessage.text.toLowerCase()
    };
        
        //check if there is a continuation in the chat or not
        if(isContinued){
            setIsContinued(false);
            let param = newMessage.trim();
            //remove "." from param
            if(param.includes('.')){
              param = param.slice(0, -1);
            }
            //continuation for manager prompt
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
            }else if(lastQuestion === "Confirm if you want to exit"){
              if(userMessage.text.toLowerCase().includes("yes")) { 
              const email = localStorage.getItem('user_email');
              console.log("user email obtained: "+email);
              axios.get(`http://localhost:8080/chatbot/chattranscript/${email}`).then(
                    (response)=>{
                        const botMessage = { text: response.data, isBot: true };
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
                        //destructoring response.data or fetching (message) content from response
                        const {content} = response.data;
                       
                    //binding the response of the bot 
                    const botMessage = { text: content, isBot: true };
                    //updating bot response to final message array(sequence of message)
                    setMessages((prevMessages) => [...prevMessages, botMessage]);
                    
                    //if bot doesn't reconise the prompt it will return null to complete the sequence
                    if(content === "Sorry... not able to get your prompt")
                    {
                        return;
                    }
                    //if bot recognise the prompt then it will ask for another input and to get another input 
                    //isContinue must be true
                    setIsContinued(true);
                    setLastQuestion(content);
                    return ;
                    //for continuity code will continue from handleSentMessage
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
          onChange={(e) => setNewMessage(e.target.value.toLowerCase)}
        />
         <button className ="mx-3" onClick={isRecording ? handleStopRecording : handleStartRecording}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatBox;

