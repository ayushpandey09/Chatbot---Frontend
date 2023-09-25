
import './App.css';
import WelcomePage from './component/welcomePage/WelcomePage';
import Header from './component/navbar/Header'
import Form from './component/formPage/Form';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Chatbox from './component/chatbox/Chatbox'
import SurveyPage from './component/survey/SurveyPage';
import OnboardLayout from './component/onBoardingPage/OnBoardLayout';
import GeneralInformation from './component/generalinformation/GeneralInformation';
import Faq from './component/faqs/Faq';
import Policies from './component/policies/Policies';



function App() {
  return (
    <Router>
    <div>
    <Header/>
    <Routes>
      <Route path = "/"  element={<WelcomePage/> }/>
      <Route path = "/chatbot" element={<Chatbox/>}/>
      <Route path = "/form" element={<Form/>}/>
      <Route path = "/generalinfo" element = {<GeneralInformation/>}/>
      <Route path = "/faqs" element = {<Faq/>}/>
      <Route path = "/generalpolicies" element = {<Policies/>}/>
      <Route path = '/survey' element={<SurveyPage/>}/>
      <Route path = '/onboard/*' element={<OnboardLayout/>}/>
      {/* <Route path = '/progressbar' element={<CheckboxList/>}/> */}
      
    </Routes>
    
    </div>
    </Router>
    
    
  );
}

export default App;
