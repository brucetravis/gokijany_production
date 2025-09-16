import React, { useEffect } from 'react'
import './StoriesDetails.css'
// import useParams to read dynamic values from the url
import { useParams } from 'react-router-dom'
import storiesData from '../../data/storiesdata/StoriesData'

export default function TestNews() {
  
  // extract the id from useParams
  const { storyId } = useParams()

  // Find one (find) that matches the item.id
  const story = storiesData.find((item) => item.id === storyId)

  // Always run useEffect before a return statement
  // watch out for the id and sctoll to the top whan a user visits the details page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [storyId])
  

  // if none of the stories match
  if (!story) {
    // return a html tag stating that None of the storuies match
    return <h2 className='text-center'>Story not Found</h2>
  }
  
  
  return (
    <div
        className='story-details'
    >
      <div>
        <img 
          src={story.image}
          alt={story.title}
          className='img-fluid'
        />
      </div>

      <div className='mt-3'>
        <div>
          <p className='fs-5'><span className='text-warning fs-5 fw-bold'>Name</span>: {story.name}</p>
          <p className='fs-5'><span className='text-warning fs-5 fw-bold'>Location</span>: {story.location}</p>
          <p className='fs-5'><span className='text-warning fs-5 fw-bold'>Profession</span>: {story.profession}</p>
        </div>
        <h4 className='text-dark'>
          {story.title}
        </h4>
        <div>
          <p className='fs-5'>
            {story.content}
          </p>
        </div>
      </div>      
    </div>
  )
}
