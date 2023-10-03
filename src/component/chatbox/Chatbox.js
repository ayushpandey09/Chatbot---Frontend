import React, { useState , useRef, useEffect } from 'react';
import './Chatbox.css';
import axios from 'axios';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import Instruction from './Instruction';
import Voice from './Voice'
import { ThreeDots } from 'react-loader-spinner';

function ChatBox() {

  //state to store all the message - prompt and response
  const [messages, setMessages] = useState([{ text: "Hi There! How can I assist you?", isBot: true }]);
  const [newMessage, setNewMessage] = useState('');
  //isContinued -->false for 1st promt ; True ---> for continuation to previous question
  const [isContinued, setIsContinued] = useState(false);
  const [lastQuestion, setLastQuestion] = useState('');
  const [empId, setEmpId] = useState();
  const [loading, setLoading] = useState(true);
  const chatboxRef = useRef(null);


  //for voice chat
  // const [transcript, setTranscript] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    // Scroll to the bottom of the chatbox when messages change
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  }, [messages]);

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

  const handleKey = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      handleSendMessage();
    }
  }

  // Simulate loading and then set the response text
const simulateChatbotResponse = () => {
  setLoading(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500); // Set the delay time in milliseconds (e.g., 2000ms = 2 seconds)
};


  // Function to send a user message
  //Summary - multiple API calling 
  // API - calling sequence
  //1st promt-  post('http://localhost:8080/chatbot/question')
  //To get response of 1st promt - get('http://localhost:8080/chatbot/questionresponse')
  //
  const handleSendMessage = () => {
    simulateChatbotResponse();
    if (newMessage.trim() === '') return;
    //to remove '.' from message
    // if (newMessage.includes('.')) {
    //   setNewMessage(newMessage.slice(0, -1));
    // }
    

    //set userMessage and add newMessage to message array
    const userMessage = {
      text: lastQuestion === "Enter your employee id" ? "Employee ID: "
        + newMessage :lastQuestion === "Enter your employee ID" ? "Employee ID: "
        + newMessage: lastQuestion === "Enter your location" ? "Location: " + newMessage : newMessage, isBot: false
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setNewMessage('');

    if (userMessage.text.includes('.')) {
      userMessage.text = userMessage.text.replace(/\./g, '');
    }

    if (userMessage.text.includes('?')) {
      userMessage.text = userMessage.text.replace(/\?/g, '');
    }

    //messageBody format should match the backend api format
    const messageBody = {
      senderName: "user",
      content: userMessage.text.toLowerCase()
    };

    //check if there is a continuation in the chat or not
    if (isContinued) {
      setIsContinued(false);
      setLastQuestion("");
      let param = newMessage.trim();
      //remove "." from param
      if (param.includes('.')) {
        param = param.slice(0, -1);
      }
      if (param.includes('?')) {
        param = param.replace(/\?/g, '');
      }
      //continuation for manager prompt
      if (lastQuestion === "Enter your employee id") {
        if(!empId){
          setEmpId(param);
        }
        
        axios.get(`http://localhost:8080/chatbot/questionmanager/${param}`).then(
          (response) => {
            console.log(response.data);
            const { content, senderName } = response.data;
            // botResponse = content;
            console.log(content + "check");
            const botMessage = { text: content, isBot: true };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
          }
        )
          .catch(
            (error) => {
              console.log(error)
            }
          )
        //on the basis of last question next api will call
      } else if (lastQuestion === "Enter your location") {

        axios.get(`http://localhost:8080/chatbot/questionithelp/${param}`).then(
          (response) => {
            console.log(response.data);
            const { content, senderName } = response.data;
            // botResponse = content;
            const botMessage = { text: content, isBot: true };
            setMessages((prevMessages) => [...prevMessages, botMessage]);

          }
        )
          .catch(
            (error) => {
              console.log(error)
            }
          )
      }else if (lastQuestion === "Enter your employee ID") {

        if(!empId){
          setEmpId(param);
        }
        axios.get(`http://localhost:8080/chatbot/questionnwa/${param}`).then(
          (response) => {
            console.log(response.data);
            const { content, senderName } = response.data;
            // botResponse = content;
            const botMessage = { text: content, isBot: true };
            setMessages((prevMessages) => [...prevMessages, botMessage]);

          }
        )
          .catch(
            (error) => {
              console.log(error)
            }
          )
      }
       else if (lastQuestion === "Confirm if you want to exit") {
        if (userMessage.text.toLowerCase().includes("yes")) {
          const email = localStorage.getItem('user_email');
          console.log("user email obtained: " + email);
          axios.get(`http://localhost:8080/chatbot/chattranscript/${email}`).then(
            (response) => {
              const botMessage = { text: response.data, isBot: true };
              setMessages((prevMessages) => [...prevMessages, botMessage]);
            }
          )
            .catch(
              (error) => {
                console.log(error)
              }
            )
        }
      }
    }
    //post request for initiating chat
    if (!isContinued) {
      console.log("check186");
      axios.post('http://localhost:8080/chatbot/question', messageBody, {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      ).then(
        (response) => {
          console.log(response.data);
          
          //Get request for getting the response back
          axios.get('http://localhost:8080/chatbot/questionresponse').then(
            (response) => {
              console.log(response.data);
              //destructoring response.data or fetching (message) content from response
              const { content } = response.data;

              //binding the response of the bot 
              const botMessage = { text: content, isBot: true };
              //updating bot response to final message array(sequence of message)
              if (content === "Enter your employee ID"){
              if(!empId){
                setMessages((prevMessages) => [...prevMessages, botMessage]);
                //if bot recognise the prompt then it will ask for another input and to get another input 
              //isContinue must be true
              setIsContinued(true);
              setLastQuestion(content);
              return;
              //for continuity code will continue from handleSentMessage
              }else{
                
                  axios.get(`http://localhost:8080/chatbot/questionnwa/${empId}`).then(
                    (response) => {
                      console.log(response.data);
                      const { content } = response.data;
                      // botResponse = content;
                      const botMessage = { text: content, isBot: true };
                      setMessages((prevMessages) => [...prevMessages, botMessage]);
                    }
                  ).catch((err)=>console.log(err));
  
                  console.log("Call directly" + empId);
                }
                
              }else if(content === "Enter your location")
              {
                setMessages((prevMessages) => [...prevMessages, botMessage]);
                //if bot recognise the prompt then it will ask for another input and to get another input 
              //isContinue must be true
              setIsContinued(true);
              setLastQuestion(content);
              return;
              //for continuity code will continue from handleSentMessage
              }else{
                setMessages((prevMessages) => [...prevMessages, botMessage]);
                //if bot recognise the prompt then it will ask for another input and to get another input 
              //isContinue must be true
              setIsContinued(true);
              setLastQuestion(content);
              return;
              }

              
              //if bot doesn't reconise the prompt it will return null to complete the sequence
              if (content === "Sorry... not able to get your prompt") {
                return;
              }
              
              
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
    <div className='chatboxBackground'>
    <div className="chat-box">
      <div className="chat-messages"  ref={chatboxRef}>
           <Instruction/>
            {
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`message ${message.isBot ? 'bot ' : 'user'}`}
                >
                  <p >
                    {loading?
                      (index === messages.length-1 && message.isBot && index >= 2)?
                      <ThreeDots 
                        height="30" 
                        width="30" 
                        radius="7"
                        color="#4fa94d" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                      /> :
                        message.text
                      :
                      message.text}
                  {}
                  </p>
                  
                </div>
              ))
        }


      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKey}
        />
        <button className="mx-3" onClick={isRecording ? handleStopRecording : handleStartRecording}>
          {isRecording ? <MicOffIcon /> : <MicIcon />}
        </button>
        <button onClick={handleSendMessage}>Send</button>
        <Voice text={messages}/>
      </div>
    </div>
    </div>
  );
}

export default ChatBox;

