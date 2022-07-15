import axios from "axios";
import { useState, useEffect } from "react";
import ResultFilter from "./components/ResultFilter";

const App = () => {
  const [searchFilter, setSearchFilter] = useState("");
  const [countries, setCountries] = useState([]);

  document.title = "test app";
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      const countryData = response.data;
      setCountries(countryData);
    });
  }, []);

  const filteredCountries = countries.filter((country) =>
  country.name.common.toLowerCase().includes(searchFilter.toLowerCase())
);

  return (
    <div>
      Find countries:
      <input
        placeholder="type here"
        value={searchFilter}
        onChange={(e) => setSearchFilter(e.target.value)}
      />
      <ResultFilter filteredCountries={filteredCountries} setSearchFilter={setSearchFilter}/>
    </div>
  );
};

export default App;
