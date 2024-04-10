import React from 'react'
import { NavLink } from 'react-router-dom';

export default function About() {
  return (
    <div>
        <section id="about">
            <div className='container my-5 py-5'>
                <div className="row">
                    <img src="about1.jpg" alt="About" className='w-75 mt-5'/>
                </div>
                <div className='col-md-6'>
                    <h3 className='fs-5 mb-0'>About Us</h3>
                    <h1 className='display-6 mb-2'>Who <b>We</b> Are</h1>
                    <hr className='w-50'/>
                    <p className='lead mb-4'>At WHOQOL, we are dedicated to assessing and enhancing individuals' quality of life worldwide. Developed by the World Health Organization (WHO), our generic instruments aim to measure subjective well-being and health-related quality of life across diverse cultural settings and health conditions.</p>
                    <NavLink to='/login' className="btn btn-primary rounded-pill px-4 py-2">Get Started</NavLink>
                </div>
            </div>
        </section>
    </div>
  )
}
