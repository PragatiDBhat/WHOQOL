import React from 'react'
import Explore from './Explore'
import About from './About'
import {NavLink} from 'react-router-dom';

export default function Home() {
  return (
    <div>
      
    <section id="home">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 mt-5">
            <h1 className="display-4 fw-bolder mb-4 text-center text-white">WHO Quality Of Life</h1>
            <p className="lead text-center fs-4 mb-5 mx-auto text-white">
            WHOQOL, developed by the World Health Organization (WHO), assesses individual quality of life across cultures. It measures subjective well-being and health-related quality of life, considering diverse perspectives. The assessment covers physical health, psychological well-being, social relationships, and the environment.            </p>
            <div className="buttons d-flex justify-content-center">
                <NavLink to='/login'className="btn btn-light me-4 rounded-pill px-4 py-2">Test your QOL</NavLink>
                <NavLink to='/explore' className="btn btn-outline-light rounded-pill px-4 py-2">Know more</NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <About />
    <Explore />
  </div>
  
  )
}
