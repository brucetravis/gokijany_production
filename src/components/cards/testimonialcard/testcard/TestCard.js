import React from 'react'
import './TestCard.css'

export default function TestCard({ testText}) {
  return (
    <div className='test-text text-center'>
        {testText}
    </div>
  )
}
