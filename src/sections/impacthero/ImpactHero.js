import React from 'react'
import './ImpactHero.css'
import { motion } from 'framer-motion'

export default function ImpactHero() {
  return (
    <motion.div
        initial={{ y: '-100', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeIn'}}
        className='impact-hero'
    >
        <h4 className='text-hero fs-3'>OUR IMPACT </h4>

    </motion.div>
  )
}
