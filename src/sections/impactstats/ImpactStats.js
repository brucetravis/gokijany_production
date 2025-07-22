import React, { useEffect, useState } from 'react'
import './ImpactStats.css'
import { motion } from 'framer-motion'

export default function ImpactStats() {

    // Counter component to fill in with arguments later 
    const Counter = ({ target, duration }) => {

        // state in order to watch out for changes
        const [ count, setCount ] = useState(0) // intial state is 0

        // useEffect to watch out for state chenges
        useEffect(() => {
            
            // keep track of the incerements
            let start = 0

            // Incrementing logic
            const increments = target / (duration / 10)

            // execute an interval after every 10 seconds
            const interval = setInterval(() => {
                
                // update the start with the increment
                start += increments


                // if the increments is greater than the target value
                if (start >= target) {
                    // Update the start with the target value to ensure precision
                    start = target
                    // Clear the interval to stop the interval function
                    clearInterval(interval)
                }

                // Update the count state with the latest value
                setCount(Math.floor(start))

            }, 10) // update the state after every 10 seconds
            
        }, [target, duration])

        // toLocaleString() = Format the numbers with commas or localized digit group
        return <span>{count.toLocaleString()}</span>
    }


  return (
    <motion.div
        initial={{ x: "100vw", opacity: 0}}
        animate={{ x: 0, opacity: 1}}
        transition={{ duration: 2, ease: "easeOut"}}
        className='impact-stats-container '
    >
        <div className='container shadow rounded '>
            <h2 className='text-center display-6 fw-bold'>Our Impact in Numbers</h2>
            <div className='row text-center'>
                <div className='col-md-4 mb-4'>
                    <p className='fs-1 fw-bold text-warning'>
                        <Counter target={3500} duration={1000} />
                    </p>
                    <p className='lead'>Projects Completed</p>
                </div>

                <div className='col-md-4'>
                    <p className='fs-1 fw-bold text-warning'>
                        <Counter target={2500} duration={1000} />
                    </p>
                    <p className='lead'>Trees Planted</p>
                </div>

                <div className='col-md-4 mb-4'>
                    <p className='fs-1 fw-bold text-warning'>
                        <Counter target={24} duration={1000} />
                    </p>
                    <p className='lead'>Communities Reached</p>
                </div>

                <div className='col-md-4'>
                    <p className='fs-1 fw-bold text-warning'>
                        <Counter target={5000} duration={1000} />
                    </p>
                    <p className='lead'>Lives Impacted</p>
                </div>

                <div className='col-md-4'>
                    <p className='fs-1 fw-bold text-warning'>
                        <Counter target={100000} duration={1000} />
                    </p>
                    <p className='lead'>Carbon Credits offset</p>
                </div>

                <div className='col-md-4'>
                    <p className='fs-1 fw-bold text-warning'>
                        <Counter target={100} duration={1000} />
                    </p>
                    <p className='lead'>Job Opportunities</p>
                </div>
            </div>
        </div>      
    </motion.div>
  )
}
