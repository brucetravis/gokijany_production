import React from 'react'
import './Stories.css'
import StoriesCard from '../../components/cards/storiescard/StoriesCard'
import storiesData from '../../data/storiesdata/StoriesData'

export default function Stories() {
    

  return (
    <div
        className='stories-container'
    >
        <h3 className='text-dark fw-bold fs-1 mb-3 text-center'>Stories</h3>
        <div className='stories-div'>
            {storiesData.map((item, index) => (
                <StoriesCard 
                    key={index}
                    storyImage={item.image}
                    storyHeadline={item.title}
                    story={item.summary}
                    storyId={item.id}
                />
            ))}
        </div>
    </div>
  )
}
