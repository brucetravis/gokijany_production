import React from "react";
import "./Secure.css";
import { Link } from 'react-router-dom'

export default function Secure() {
  return (
    <section id="secure">
      <div className="section-title text-center">
        <h2>Securing Our Planet for Future Generations</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2">
            <p className="p-3">
              Kenya has demonstrated significant potential in the carbon market,
              issuing more carbon credits than any other African country,
              accounting for approximately 20% of the continent's total. In
              2022, Kenya received 11 million voluntary carbon market credits,
              reflecting the country's active participation in carbon offset
              initiatives. With carbon credit prices varying globally—from $46
              per metric ton in California to over $60 per metric ton in the
              European Union—there is substantial financial potential for
              participants in regions with active carbon markets.
            </p>
            <p className="p-3">
              Gokijany aims to engage 2.2 billion users globally, collectively
              offsetting 37.4 billion metric tons of CO₂ emissions, with each
              user averaging an offset of 17 metric tons annually. Given the
              projected growth of the carbon credit market and the increasing
              emphasis on sustainable practices, early adopters of Gokijany
              stand to benefit financially while contributing to global
              environmental goals. By integrating financial incentives with
              environmental responsibility, Gokijany offers a platform where
              sustainable living is both economically rewarding and impactful.
              Users can actively participate in carbon offset projects, trade
              carbon credits, and utilize Goshilingy in various transactions,
              all within a transparent and reliable ecosystem. This approach not
              only promotes individual financial growth but also supports global
              efforts toward achieving net-zero emissions.
            </p>
            
            <Link 
              to="/team"
              className="section_btn scrollto"
            >
              Team
            </Link>
          </div>
          <div className="col-lg-6 order-2 order-lg-1"></div>
        </div>
      </div>
    </section>
  );
}
