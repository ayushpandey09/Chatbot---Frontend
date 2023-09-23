import { chipClasses } from '@mui/material';
import React, { useState } from 'react';
import { Route, Routes, useNavigate, Link } from 'react-router-dom';
import Form from './Form'
import './Styles.css'

function OnBoardPage({ checkedItems , progress}) {
  //const [checkedItems, setCheckedItems] = useState([]);
  const navigate = useNavigate();

  const items = [
    { id: 1, name: 'Onboarding Feedback Survey' },
    { id: 2, name: 'Bootcamp Feedback Survey' },
    { id: 3, name: 'Task 3' },
  ];

  return (
    <div>
      <div style={{ width: "700px" }}>
        <h2>
          {" "}
          Onboarding Progress :
        </h2>
        <div className="mainDiv">
          <div className="childDiv" style={{ width: `${progress}%` }}>
            <span> </span>
          </div>
        </div>
      </div>

      <div className="checkbox-wrapper">
        <h2>Tasks :</h2>
        <ul>
          {items.map((item) => (
            <div className='checklist-item' key={item.id}>
              <label className='checklist-text'>
                <input className={checkedItems.includes(item.id) ? 'checked' : ''}
                  type="checkbox"
                  checked={checkedItems.includes(item.id)}
                  readOnly
                  onClick={() => {
                    //handleItemCheck(item.id);
                    navigate(`/onboard/form/${item.id}`)
                  }}
                />
                {item.name}
              </label>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default OnBoardPage