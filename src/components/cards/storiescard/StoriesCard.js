import React from 'react'
import './StoriesCard.css'
// import useNavigate to naviagte to a different route
import { useNavigate } from 'react-router-dom'

export default function StoriesCard({ storyImage, storyHeadline, story, storyId }) {

  // Initialize useNavigate
  const navigate = useNavigate()
  
  // function to hanlde the navigation
  const handleNavigate = () => {
    navigate(`/storiesdetails/${storyId}`)
  }

  return (
    <div
      className='stories-card'
      onClick={() => handleNavigate}
    >
        <img 
            src={storyImage} 
            alt={storyHeadline}
            className='img-fluid' 
        />
        <p className='stories-headline'>
          {storyHeadline}
        </p>
        <p className='story-content'>
          {story}
        </p>
    </div>
  )
}
