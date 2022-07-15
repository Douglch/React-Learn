const ResultFilter = ({ filteredCountries, setSearchFilter }) => {
  if (filteredCountries.length === 1) {
    const country = filteredCountries[0];
    return (
      <div>
        <h1>{country.name.common}</h1>
        <div>capital {country.capital}</div>
        <div>population {country.population}</div>
        <h1>languages</h1>
        <ul>
          {country.languages.map((language) => (
            <li key={language.name.common}>{language.name.common}</li>
          ))}
        </ul>
        <img src={country.flag} alt={country.name} width="20%" />
        {/* <ShowWeather country={country} /> */}
      </div>
    );
  }
  if (filteredCountries.length > 10)
    return <div>Too many matches, specify another filter</div>;
  return filteredCountries.map((country) => {
    return (
      <div key={country.name}>
        {country.name}{" "}
        <button
          value={country.name}
          onClick={(e) => setSearchFilter(e.target.value)}
        >
          show
        </button>
      </div>
    );
  });
};

export default ResultFilter;
