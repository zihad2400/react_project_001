import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css';

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    
    const [visitedFlags, setVisitedFlags] = useState([]);




    const handleVisitedCountries = (country) => {
         console.log("Handle Visited Country Click", country);
        // visitedCountries.push(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);

    }
      

    const handleVisitedFlags = (flag) => {
        console.log("Flag need to be added", flag)
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }









    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries)
    
    return (
        <div>
            <h1>In The Countries: {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length} </h3>
            <h3>Total Flags Visited: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>
                        {country.name.common}</li>)
                }
            </ol>




   <div className="flags">
  {visitedFlags.map((flag, index) => (
    <img
      key={index}
      src={flag}
      alt={`Flag ${index + 1}`}
      className="flag-img"
    />
  ))}
</div>








           <div className='countries'>
                {
                countries.map(country => <Country
                    key={country.cca3.cca3} country={country}
                handleVisitedCountries = {handleVisitedCountries}
                handleVisitedFlags = {handleVisitedFlags}
                ></Country>)
                
            }
           </div>
        </div>
    );
};

export default Countries;