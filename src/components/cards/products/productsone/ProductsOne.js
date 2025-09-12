import React from 'react'
import './ProductsOne.css'
import { useNavigate } from 'react-router-dom'

export default function ProductsOne() {

  const navigate = useNavigate()
  
  return (
    <div
      className='products-one'
      onClick={() => navigate('/')}
    >
      <p>Gokijany</p>
    </div>
  )
}
