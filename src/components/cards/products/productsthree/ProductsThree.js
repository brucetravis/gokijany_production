import React from 'react'
import './ProductsThree.css'
import { useNavigate } from 'react-router-dom'

export default function ProductsThree() {
  
  const navigate = useNavigate()

  return (
    <div
      className='products-three'
      onClick={() => navigate('/team')}
    >
      <p>Team</p>
    </div>
  )
}
