import React, { Fragment, useCallback, useEffect, useState } from "react";

import "./App.css";
import Heading from "./components/Heading";
import Search from "./components/Search";

function App() {
  const [countries, setCountries] = useState([]);

  const fetchCountriesHandler = useCallback(async () => {
    try {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/states"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const countriesData = data.data;

      const loadedCountries = [];

      for (const key in countriesData) {
        loadedCountries.push({
          id: key,
          name: countriesData[key].name,
        });
      }

      setCountries(loadedCountries);
    } catch (error) {
      return;
    }
  }, []);

  useEffect(() => {
    fetchCountriesHandler();
  }, [fetchCountriesHandler]);
  console.log(countries);

  return (
    <Fragment>
      <Heading />
      <Search />
      <ul className="centered">
        {countries.map((country) => (
          <li>{country.name}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default App;
