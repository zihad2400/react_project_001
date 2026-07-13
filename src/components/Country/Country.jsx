import React, { useState } from 'react';
import './country.css';
const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    //console.log(country.area.area)

      const[visited, setVisited] = useState(false);

      // console.log(handleVisitedCountries);
    const handleVisited = () => {
       // console.log("Button Click")
       //setVisited(true)



    //    if (visited){
    //     setVisited (false)
    //    }
    //    else{
    //     setVisited(true)
    //    }


    // setVisited(visited ? false : true);

          setVisited(!visited);
          handleVisitedCountries(country, );

    }




    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
             <h2>Name: {country.name.common} </h2>
             <p>Population: {country.population.population}</p>
             <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
             <button onClick={handleVisited}>

                {
                    visited ? "Visited" : "Not Visited"
                }

             </button>
             <button onClick={() => {handleVisitedFlags(country?.flags?.flags?.png)}}>
                Add Visited Flag
             </button>
        </div>
    );
};

export default Country;




/**
 * 1. Inline csss (Style object)
 * 2. Componet Noraml use css
 */