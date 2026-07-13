import React from 'react';
import './country.css';
const Country = ({country}) => {
    console.log(country.area.area)
       
    const handleVisited = () => {
        console.log("Button Click")
    }




    return (
        <div className='country'>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
             <h2>Name: {country.name.common} </h2>
             <p>Population: {country.population.population}</p>
             <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
             <button onClick={handleVisited}>Not Visited</button>
        </div>
    );
};

export default Country;




/**
 * 1. Inline csss (Style object)
 * 2. Componet Noraml use css
 */