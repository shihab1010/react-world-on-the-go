import React from "react";
import Countries from "../countries/countries";
import "./country.css";

const Country = ({ country }) => {
  console.log(country);

  return (
    <div className="country">
      <img src={country.flags.flags.png} alt="" />
      <h4>Name: {country.name.common} </h4>
      <h5>Population: {country.population.population}</h5>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
    </div>
  );
};

export default Country;
