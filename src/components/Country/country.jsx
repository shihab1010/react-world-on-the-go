import React, { useState } from "react";
import Countries from "../countries/countries";
import "./country.css";

const Country = ({ country, handleVisitedCountry }) => {
  // console.log(country);
  const [visited, setVisited] = useState(false);
  // console.log(handleVisitedCountry);

  const handleVisited = () => {
    if (visited) {
      setVisited(false);
    } else {
      setVisited(true);
    }
    handleVisitedCountry(country);
  };

  return (
    <div className={`country  ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt="" />
      <h4>Name: {country.name.common} </h4>
      <h5>Population: {country.population.population}</h5>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
