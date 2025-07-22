import React from 'react'
import './Values.css'

export default function Values({icon, text}) {
  return (
    <section className='values-section d-flex align-items-center flex-column'>
        <p className='value-icon'>{icon}</p>
        <p className='text-white'>{text}</p>
    </section>
  )
}
