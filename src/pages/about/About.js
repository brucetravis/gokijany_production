import React from 'react'
import './About.css'
import Conservation from './sections/conservation/Conservation';
import Newsletter from './sections/newsletter/Newsletter';
import Secure from './sections/secure/Secure';


export default function About() {
  return (
    <section>
      <div className='about-hero-div'>
        <p>About Us</p>
      </div>
      
      <Conservation/>
      <Secure/>
      <Newsletter/>
     
    </section>
  )
}
