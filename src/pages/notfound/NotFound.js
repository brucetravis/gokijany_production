import React from 'react'
import './NotFound.css'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {

    // useNavigate to navigate to the home page
    const navigate = useNavigate()

  return (
    <section
        className='not-found-page'
    >
        <h2>404</h2>
        <p>Page Not Found</p>
        <p>Sorry, the page you are looking for does not exist.</p>
        <button
            className='not-found-btn'
            onClick={() => navigate('/')}
        >
            Back to Home page
        </button>
    </section>
  )
}
