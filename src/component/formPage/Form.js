import React from 'react'
import { useNavigate } from 'react-router-dom'

function Form() {
    const navigate = useNavigate();
  return (
    <div>
        <div class="container mt-5">
        <h1 class="text-center">Welcome to Our ChatBot</h1>
        <p class="text-center">Please provide your registration details:</p>
        <form id="registrationForm">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required class="form-control"/>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required class="form-control"/>
            </div>
            <div class="form-group">
                <label for="phone">Phone (Optional):</label>
                <input type="tel" id="phone" name="phone" class="form-control"/>
            </div>
            <div class="form-group text-center">
                <input onClick={()=>{ navigate("/chatbot") }} type="submit" value="Submit" class="btn btn-primary"/>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Form