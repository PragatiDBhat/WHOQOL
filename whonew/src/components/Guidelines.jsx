import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Guidelines() {
  return (
    <div>
        <div className="container shadow my-5" style={{ maxWidth: '800px' }}>
        <div className="row justify-content-end d-flex flex-column align-items-center text-white justify-content-center 
          form ">
            <h1 className='display-4 fw-bolder mb-5 text-center mh-10'>Test Your QOL</h1>
            <ol className='lead text-center'>
                <li>There are 26 questions in total</li>
                <li>You are not allowed to go to next question without answering the current question</li>
                <li>Each question has 5 options.Answer accordingly</li>
            </ol>
            <form id='form'>
              <NavLink to='/questions' type="submit" className="btn btn-outline-light mx-auto d-block mt-5 rounded-pill mb-5 pb-2 w-50">
                Start
              </NavLink>
            </form>
            </div>
        </div>
        </div>
  )
}
