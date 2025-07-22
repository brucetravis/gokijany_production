import React, { useEffect, useState } from 'react'
import './Team.css'
import { AnimatePresence, motion } from 'framer-motion'
import Preloader from '../../components/common/preloader/Preloader'
import teamData from '../../data/teamdata/TeamData'

export default function Gallery() {


  // state to update the UI when the buttons are clicked 
  const [ currentIndex, setCurrentIndex ] = useState(0) // initial state is the first index
  // state to handle the loading of a page
  const [ loading, setLoading ] = useState(true) // Initial state is true


  // useEffect to change the images periodically
  useEffect(() => {
      
      // store the interval in a variabe in order to clear it later
      const imageInterval = setInterval(() => {
        // Update the state using the state function
        setCurrentIndex((prevIndex) => (prevIndex + 1) % teamData.length)

      }, 10000) //images will change and render after every 10 seconds
    
      // clear the interval when the component unmounts
      return () => clearInterval(imageInterval)

  }, []) // empty dependency array


  // useEffect to handle the loading of a page
  useEffect(() => {
    // function to handle the loading of a page
    const timer = setTimeout(() => {
      // After 2 seconds, update setLoading to false
      setLoading(false)
    }, 2000)
    
    // clear the tieout
    return () => clearTimeout(timer)
  }, []) // Empty dependency array, nothing to watch for


  // If the page is loading, which is true
  if (loading) {
    return <Preloader />
  }

  let absoluteImages = [ 3, 5, 7 ]


  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className='image-section'
    >
      {/* <h4 className='fs-1 text-danger'>GALLERY</h4> */}
      <div className='carousel'>
        
        <AnimatePresence
          mode='wait' //wait for the current image to exit before showing the next image
        >
          <motion.div 
            key={teamData[currentIndex].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img 
              src={teamData[currentIndex].image}
              alt={teamData[currentIndex].title}
              className= "active main-image img-fluid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.8 }}
              transition={{ duration: 0.8 }}
              style={ (absoluteImages.includes(teamData[currentIndex].id)  && window.innerWidth > 980) && { position: "absolute" } }
            />

            <div className='image-texts'>
              <p className='image-title'>{teamData[currentIndex].title}</p>
              <p className='image-type'>{teamData[currentIndex].type}</p>
              <p className='image-desc' style={{ whiteSpace: 'pre-line'  }}>
                {teamData[currentIndex].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>


        <div className='thumbnails'>
          {teamData.map((slide, index) => (
            <img 
              key={slide.id}
              src={slide.image}
              alt={slide.title}

              className={`img-fluid thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)} // when the thumbail image is clicked render the picture of that image
            />
          ))}
        </div>
          
        
        <button 
          className="prev"
          onClick={() => setCurrentIndex((prev) => (prev - 1 + teamData.length) % teamData.length)}
        >
          ❮ Prev
        </button>
        <button 
          className="next"
          onClick={() => setCurrentIndex((prev) => (prev + 1) % teamData.length)}
        >
          Next ❯
        </button>
      </div>
    </motion.div>
  )
}
