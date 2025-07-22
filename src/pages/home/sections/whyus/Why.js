import React from "react";
import "./Why.css";

export default function Why() {
  return (
    <section className="why-page" id="whyus">
      {/* text */}
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="why-texts col-lg-6">
            <div className="why-titles">
              {/* h1 */}
              <h2>Gokijany</h2>
              {/* h2 */}
              <p className="why-p">Why Gokijany</p>
            </div>
            <div className="why-p-texts">
              {/* p */}
              <p>
                The world is at a tipping point where financial markets and
                environmental responsibility are no longer separate
                conversations, they are deeply interconnected. The carbon market
                is expanding rapidly, already valued in the hundreds of
                billions, with carbon prices ranging from $46 per metric ton in
                California to over $60 in the European Union. Africa, holding
                vast carbon offset potential, is uniquely positioned to
                capitalize on this shift.
              </p>
              <p>
                For too long, sustainability has been framed as an obligation
                rather than an opportunity. This is where we bring change.
                Gokijany is not just a platform, it’s a financial system where
                users don’t just contribute to the planet but also build wealth
                while doing so. Our carbon-backed digital currency, Goshilingy,
                unlocks new economic pathways, enabling seamless transactions,
                investments, and trading opportunities comparable to leading
                cryptocurrencies.
              </p>
              <p>
                Timing is everything. As governments enforce stricter carbon
                regulations, businesses seek compliance, and individuals look
                for profitable sustainability solutions, the demand for a
                transparent, decentralized, and accessible carbon economy has
                never been higher. With a projected 2.2 billion users globally
                offsetting 37.4 billion metric tons of CO₂, early adopters have
                the chance to be at the forefront of a movement that will
                reshape both climate action and financial markets. This is not
                just another green initiative, it is the evolution of a new
                financial era, and now is the moment to be part of it.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.electrixitaty.gokijany&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </div>
          </div>
          {/* image */}
          <div className="why-image col-lg-5">
            <img
              src={require("../../../../data/images/gokijany_flier.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
