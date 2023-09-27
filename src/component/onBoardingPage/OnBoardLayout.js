// OnboardLayout.js
import React,{useState} from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import OnBoardPage from './OnBoardPage';
import Form from './Form';
import CheckboxList from '../progressbar/CheckBoxList';
import BootcampForm from './BootcampForm';


function OnboardLayout() {
    const [checkedItems, setCheckedItems] = useState([]);
    const [progress , setProgress] = useState(0);
    const totalItems = 2;
      const handleFormSubmit = (itemId) => {
        // Add the item ID to the checkedItems array
        setCheckedItems((prevCheckedItems) => [...prevCheckedItems, itemId]);
        console.log("after update" + checkedItems);
        const res = ((checkedItems.length+1)/totalItems) * 100;
        console.log("res  : "+ res);
        setProgress(res);
      };
  return (
    <div>
      <Routes>
        <Route path="/" element={<OnBoardPage checkedItems={checkedItems} progress = {progress}/>} />
        <Route path="/form/:id" element={<Form onFormSubmit={handleFormSubmit}/>} />
        <Route path="bootcampform" element={<BootcampForm onFormSubmit ={handleFormSubmit}/>}/>
      </Routes>
     
    </div>
  );
}

export default OnboardLayout;
