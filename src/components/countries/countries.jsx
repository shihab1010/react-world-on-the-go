import React, { use, useState } from "react";
import Country from "../Country/country";
import "./countries.css";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  const [visitedCountries, setVisitedCountry] = useState([]);

  const handleVisitedCountry = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountry(newVisitedCountries);
  };

  return (
    <div>
      <h1>Countries: {countries.length}</h1>
      <h2>Total Country Visited: {visitedCountries.length}</h2>
      <ol>
        {visitedCountries.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
