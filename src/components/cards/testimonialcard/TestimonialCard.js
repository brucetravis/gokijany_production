import React from 'react'
// import './TestimonialCard.css'
import './TestimonialCard.css'

export default function StoriesCard({ test, testImage}) {
  return (
    <div
      className='testimonial-card d-flex '
    >
      <div className='testimonial-text'>
        {test}
      </div>

      <div className='testimonial-image'>
        <img 
            src={testImage} 
            alt='Testimonial'
            className='img-fluid' 
        />
      </div>
    </div>
  )
}
