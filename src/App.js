
import './App.css';
import WelcomePage from './component/welcomePage/WelcomePage';
import Header from './component/navbar/Header'
import ChatbotPage from './component/chatbotPage/chatbotPage';
import Form from './component/formPage/Form';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Chatbox from './component/chatbox/Chatbox'
import GeneralInfo from './component/generalPolices/GeneralInfo';

function App() {
  return (
    <Router>
    <div>
    <Header/>
    <Routes>
      <Route path = "/" exact element={<WelcomePage/> }/>
      <Route path = "/chatbot" element={<Chatbox/>}/>
      <Route path = "/form" element={<Form/>}/>
      <Route path = "/generalInfo" element = {<GeneralInfo/>}/>
    </Routes>
    
    </div>
    </Router>
    
    
  );
}

export default App;
