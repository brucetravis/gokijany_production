import React from 'react'
import './Careers.css'
import Table from '../../components/table/Table';


export default function Careers() {

  return (
    <section 
      className='careers-section'
    >
      <div className='container-fluid'>
        <h3>Careers</h3>
        <div className='intro mb-5'>
          <p className='text-center'>
            At GoKijany, we’re more than just a climate-fintech marketplace — we’re a movement. By empowering individuals and businesses to offset and monetize carbon through verified trading, sustainable shopping, and eco-conscious innovation, we’re redefining how climate action meets financial opportunity.
            We believe real change happens when people of all ages come together with purpose. That’s why we’re building a diverse team of forward-thinkers, creators, and change-makers who are passionate about making the planet a more habitable, sustainable place for all.
            If you’re ready to work on solutions that matter and be part of something bigger than yourself, then you're ready for GoKijany.
          </p>
        </div>

        <Table />
      </div>
    </section>
  )
}
