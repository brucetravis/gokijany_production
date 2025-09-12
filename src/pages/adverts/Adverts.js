import React from "react";
import "./Adverts.css";
import ProductsOne from "../../components/cards/products/productsone/ProductsOne";
import ProductsTwo from "../../components/cards/products/productstwo/ProductsTwo";
import ProductsThree from "../../components/cards/products/productsthree/ProductsThree";
import BigAdvert from "../../components/cards/bigadvert/BigAdvert";

export default function Adverts() {
  return (
    <main className="adverts-page">
      <section className="adverts-wrapper">

        {/* TOP ROW: big left hero (ProductsOne) + stacked right cards (ProductsTwo, ProductsThree) */}
        <div className="adverts-top-row">
          <div className="ad-left">
            <ProductsOne />
          </div>

          <div className="ad-right-stack">
            <ProductsTwo />
            <ProductsThree />
          </div>
        </div>

        {/* CATEGORY ROW (4 small cards) - replace contents as needed */}
        <div className="ad-category-row">
          <div className="category-card one"><p>Household goods</p></div>
          <div className="category-card two"><p>Household goods</p></div>
          <div className="category-card three"><p>Household goods</p></div>
          <div className="category-card four"><p>Household goods</p></div>
        </div>


        {/* div card that takes the the whole page */}
        <div
          className="advert-card"
        >
          <BigAdvert />
        </div>

         {/* NEW ROW: 3 cards */}
        <div className="three-card-row">
          <div className="card">Card 1</div>
          <div className="card">Card 2</div>
          <div className="card">Card 3</div>
        </div>

        {/* NEW ROW: 4 cards */}
        <div className="four-card-row">
          <div className="card">Card A</div>
          <div className="card">Card B</div>
          <div className="card">Card C</div>
          <div className="card">Card D</div>
        </div>

         {/* 4 narrow cards row */}
        <div className="four-narrow-row">
          <div className="narrow-card">Narrow 1</div>
          <div className="narrow-card">Narrow 2</div>
          <div className="narrow-card">Narrow 3</div>
          <div className="narrow-card">Narrow 4</div>
        </div>

        {/* Medium big card */}
        <div className="medium-card">
          Community Biogas
        </div>

      </section>
    </main>
  );
}
