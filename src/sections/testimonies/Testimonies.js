import React from 'react'
import './Testimonies.css'
import { motion } from 'framer-motion'
import TestimonialCard from '../../components/cards/testimonialcard/TestimonialCard'
import TestCard from '../../components/cards/testimonialcard/testcard/TestCard'
import { Link } from 'react-router-dom'
import teamData from '../../data/teamdata/TeamData'

export default function Testimonies() {
  return (
    <motion.div
        initial={{ x: "100", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeIn' }}
        className='testimonies-container'
    >
      <div className='container'>
        <div className='row'>
          <TestimonialCard 
            test="Before Gokijany, I didn’t think much about carbon emissions. I was just focused on making ends meet. But when a friend told me I could track my fuel use and actually earn from reducing my carbon footprint, I was shocked. Through the Gokijany app, I learned how to ride smarter, save fuel, and earn carbon credits every month. Now I make an extra Ksh 2,000 just by doing what I already do — riding my bike." 
            testImage={teamData[1].image} 
          
          />

          <TestimonialCard 
            test="As an environmental student, I’ve always known about climate change, but I never thought I could actually do something impactful from my phone. Gokijany changed that. Now I can calculate my carbon footprint, offset my emissions from travel and electricity, and even invest in green projects around Africa. It feels amazing to be part of a solution that doesn’t just talk — it acts. Plus, the rewards I earn go straight into my digital wallet. Climate action finally feels real and personal." 
            testImage={teamData[4].image} 
          
          />

          <TestimonialCard 
            test="Gokijany made it easy for me to track my emissions and earn from going green. It’s like saving the planet with every choice I make. It’s like saving the planet with every choice I make. — Daniel, Kisumu" 
            testImage={teamData[1].image} 
          
          />

          <TestCard
            testText="Gokijany made it easy for me to track my emissions and earn from going green. It’s like saving the planet with every choice I make.  — Daniel, Kisumu" 
          />
              
          <TestimonialCard 
            test="Before Gokijany, I didn’t think much about carbon emissions. I was just focused on making ends meet. But when a friend told me I could track my fuel use and actually earn from reducing my carbon footprint, I was shocked. Through the Gokijany app, I learned how to ride smarter, save fuel, and earn carbon credits every month. Now I make an extra Ksh 2,000 just by doing what I already do — riding my bike." 
            testImage={teamData[1].image} 
          
          />
              
          <TestimonialCard 
            test="As an environmental student, I’ve always known about climate change, but I never thought I could actually do something impactful from my phone. Gokijany changed that. Now I can calculate my carbon footprint, offset my emissions from travel and electricity, and even invest in green projects around Africa. It feels amazing to be part of a solution that doesn’t just talk — it acts. Plus, the rewards I earn go straight into my digital wallet. Climate action finally feels real and personal." 
            testImage={teamData[4].image} 
          
          />
        </div>

        {/* <div className='d-flex align-items-center justify-content-center mt-5'>
            <Link className='text-center testimonials-btn'>
                More Testimonials
            </Link>
        </div> */}
      </div>

    </motion.div>
  )
}


