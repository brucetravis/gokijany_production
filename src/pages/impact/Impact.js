import React from 'react'
import './Impact.css'
import { motion } from 'framer-motion'
import ImpactStats from '../../sections/impactstats/ImpactStats'
import Testimonies from '../../sections/testimonies/Testimonies'
// import KenyanMap from '../../components/animations/kenyanMap'
import ImpactHero from '../../sections/impacthero/ImpactHero'
import Stories from '../../sections/stories/Stories'
import CeoOP from '../../sections/stories/ceoop/CeoOP'
// import Reports from '../../sections/reports/Reports'

export default function Impact() {


  return (
    <motion.div 
        initial={{ x: "-100vw", opacity: 0}}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut"}}
        className=' impact-page'
    >
        <div className="col-12">
            <ImpactHero />
        </div>
        <div className='container p-5'>
            <h2 className='text-center mb-4'>
                Join us, as We trasform the world One tree, One Credit, One step at a time.
            </h2>
            <p className='text-center fs-6 impact-page-text'>
                Every step we take leaves a footprint of change. At Gokijany, our mission goes beyond 
                words—we create tangible, lasting impact in the lives of individuals and communities. 
                Through our dedication, innovation, and service, we’ve touched thousands, driven transformation, 
                and inspired hope. This page tells the story of our journey so far—the numbers, the lives, and the 
                moments that define our purpose.
            </p>
        </div>
        
        <div className="col-12">
            <Testimonies />
        </div>

        <div className="col-12">
            <CeoOP />
        </div>

        <div className="col-12">
            <Stories />
        </div>
        
        {/* <div className="col-12" >
            <Reports />
        </div> */}
        
        <div className="col-12" >
            <ImpactStats />
        </div>
    </motion.div>
  )
}
