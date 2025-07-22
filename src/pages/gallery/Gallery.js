import React, { useEffect, useState } from 'react';
import './Gallery.css';
import Preloader from '../../components/common/preloader/Preloader';
import eventsData from '../../data/eventsdata/EventsData';

export default function Gallery() {
  /*----------------------------------------------
  | STATE                                         |
  ----------------------------------------------*/
  // User‑typed search term
  const [searchTerm, setSearchTerm] = useState('');
  // Filtered list rendered in the UI
  const [filteredResults, setFilteredResults] = useState(eventsData);
  // Controls the splash/loader
  const [loading, setLoading] = useState(true);

  /*----------------------------------------------
  | HANDLERS                                      |
  ----------------------------------------------*/
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase().trim();
    setSearchTerm(term);

    // Filter the *array* (eventsData), not a non‑existent eventsData.image
    const results = eventsData.filter((item) =>
      item.location.toLowerCase().includes(term)
    );

    setFilteredResults(results);
  };

  /*----------------------------------------------
  | EFFECTS                                       |
  ----------------------------------------------*/
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  /*----------------------------------------------
  | RENDER                                        |
  ----------------------------------------------*/
  if (loading) return <Preloader />;

  return (
    <div
      className={`gallery-section container-fluid ${
        filteredResults.length === 0 ? 'min-vh-100' : 'h-auto'
      }`}
    >
      <div className="title">
        <h3 className="text-warning text-center">GALLERY</h3>
      </div>

      {/* Search box */}
      <div className="search-div mb-3">
        <i className="fas fa-search search-icon" />
        <input
          type="text"
          name="event-image"
          placeholder="Search Image"
          className="form-control event-search-box"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Images grid */}
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        {filteredResults.length > 0 ? (
          filteredResults.map((item) => (
            <div
              key={item.id}
              className="p-3 d-flex align-items-center flex-column gap-2"
            >
              <img
                src={item.image}
                alt="Gokijany Gallery"
                className="img-fluid"
                loading="lazy"
              />
              <p className="text-white fs-4 location">{item.location}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-light fs-4 pb-4 location-results">
            No Results Found
          </p>
        )}
      </div>
    </div>
  );
}
