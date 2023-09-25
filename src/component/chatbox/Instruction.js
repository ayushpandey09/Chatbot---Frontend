import React from 'react'
import './Chatbox.css';

function Instruction() {
  return (
    <div className='instruction-box'>
    Instruction :
     <p className='instruction-text'>* You can ask question like "Who is my manager?" or "What is Hotline for IT help?"</p>
     <p className='instruction-text'>* To complete the conversation you can type "Exit."</p>
  </div>
  )
}

export default Instruction