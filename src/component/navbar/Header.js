import React from 'react'
import chatBotImg from '../../Chatbot.png';
import './Styles.css'
export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a href='/'>
    <img className='chatbot' src={chatBotImg}  alt="Chabot" />
    </a>
    
    {/* <a className="navbar-brand" href="/"></a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link" href="/onboard">Onboard</a>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/generalInfo">General Information</a></li>
            <li><a className="dropdown-item" href="/generalpolicies">Company Policies</a></li>
          </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/faqs">FAQ</a>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Download
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="https://drive.google.com/u/0/uc?id=13lTGaNyN7QZLEv5N-LRjUxPfBSeWeREi&export=download">Code of conduct</a></li>
            <li><a className="dropdown-item" href="https://drive.google.com/u/0/uc?id=1LhGUrrI1HgWq3WTWqyEHfIk-na59qksS&export=download">Job Description</a></li>
            {/* <li><hr className="dropdown-divider"/></li> */}
          </ul>
        </li>
        
        
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
