
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form'
import './Styles.css'


function OnBoardPage({ checkedItems , progress}) {
  //const [checkedItems, setCheckedItems] = useState([]);
  const navigate = useNavigate();

  const items = [
    { id: 1, name: 'Onboarding Feedback Survey' },
    { id: 2, name: 'Bootcamp Feedback Survey' },
  ];

  return (
    <div className='background'>
      <div className ="onboardContainer " style={{ width: "700px" }}>
        <h2 >
          {/* {" "} */}
          Overall Onboarding Progress :
        </h2>
        {progress===100?<h2 style={{color:'green'}}>Completed</h2> : <h2 style={{color:'red'}}>Pending</h2> }
        <div className="mainDiv d-flex">
          <div className="childDiv" style={{ width: `${progress}%` }}>
            <span></span>
            <p className='percent-text'>{parseInt(progress)}% </p>
          </div>
          
        </div>
      </div>

      <div className="checkbox-wrapper my-5 mx-5">
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
                    if(item.id === 2){
                      navigate('/onboard/bootcampform');
                    }else{
                      navigate(`/onboard/form/${item.id}`)
                    }
                    
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