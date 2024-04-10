import React from 'react'
import { NavLink } from 'react-router-dom'
import Explore from './Explore'
export default function Dashboard() {
  return (
    <div>
  
      <section id='dashboard'>
              <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 mt-5">
            <h1 className="display-4 fw-bolder mb-4 text-center text-black">WHO Quality Of Life</h1>
            <p className="lead text-center fs-4 mb-5 mx-auto text-black">
            WHOQOL, developed by the World Health Organization (WHO), assesses individual quality of life across cultures. It measures subjective well-being and health-related quality of life, considering diverse perspectives. The assessment covers physical health, psychological well-being, social relationships, and the environment.            </p>
            <div className="buttons d-flex justify-content-center">
                <NavLink to='/guidelines'className="btn btn-light me-4 rounded-pill px-4 py-2">Test your QOL</NavLink>
            </div>
          </div>
        </div>
      </div>
      </section>
      <Explore />
    </div>
  )
}
