import React, { useState, useEffect, useRef } from 'react';
import portfolioData from '../../data/Portfolio';
import mixitup from 'mixitup';

function Portfolio() {
  const [mixer, setMixer] = useState(null);
  const containerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    if (containerRef.current) {
      const mixerInstance = mixitup(containerRef.current, {
        selectors: { target: ".work__card" },
        animation: { duration: 300 },
      });
      setMixer(mixerInstance);
    }
  }, []);

  const handleFilterClick = (event) => {
    const filter = event.target.dataset.filter;
    setActiveFilter(filter);
    mixer.filter(filter);
  };

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">My Portfolio</h2>
      <span className="section__subtitle">Recent Works</span>

      <div className="work__filters">
        {["all", "design", "web", "certification", "others"].map((cat) => {
          let label;
          switch (cat) {
            case "web":
              label = "Website";
              break;
            case "design":
              label = "Website Design";
              break;
            case "certification":
              label = "Certification";
              break;
            case "others":
              label = "Social Media Graphics";
              break;
            default:
              label = "All";
          }

          // Precompute className and data-filter
          const filterClass = `work__item ${activeFilter === (cat === "all" ? "all" : "." + cat) ? "active-work" : ""}`;
          const filterData = cat === "all" ? "all" : "." + cat;

          return (
            <span
              key={cat}
              className={filterClass}
              data-filter={filterData}
              onClick={handleFilterClick}
            >
              {label}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid" ref={containerRef}>
        {portfolioData.map((item) => (
          <div key={item.name} className={`work__card mix ${item.category}`}>
            <img src={item.image} alt={item.name} loading="lazy" className="work__img" />
            <h3 className="work__title">{item.title}</h3>
            <a
              href={item.url || item.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="work__button"
            >
              View<i className="bx bx-caret-right work__icon"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;