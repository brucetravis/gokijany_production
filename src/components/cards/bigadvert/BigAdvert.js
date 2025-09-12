import React from 'react'
import './BigAdvert.css'

export default function BigAdvert() {
  return (
    <section className="big-advert">
      <div className="big-advert-text">
        <h2>Exclusive Mega Deal</h2>
        <p>Save up to 50% on selected electronics</p>
        <button className="shop-btn">Shop Now</button>
      </div>

      <div className="big-advert-image">
        {/* Replace with your product image */}
        <img src="https://via.placeholder.com/400x250" alt="Promo" />
      </div>
    </section>
  )
}
