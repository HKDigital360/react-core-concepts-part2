import React, { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountry  }) => {
    // const currencies = country.currencies.currencies;
    // console.log(country);
    const [visited, setVisited] = useState(false);
    const handelVisited = ()=>{
    //    setVisited(true)
    if(visited){
        setVisited(false)
    }
    else{
        setVisited(true )
    }
    handleVisitedCountry(country)
    }
    // console.log(country.currencies.currencies)
    return (
        <div className={`country  ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.common}</h3>
            <p>Population : {country.population.population}</p>
            <p>Region : {country.region.region} </p>
            <p>Currencies Name : {(Object.values(country?.currencies?.currencies)?.[0]?.name)}  </p>
            <p>Currencies Symbol : {(Object.values(country?.currencies?.currencies)?.[0]?.symbol)}  </p>
            <p>Area : {country.area.area} {country.area.area > 30000 ? "big country" : "small country"} </p>
            <button onClick={handelVisited}>
               {visited? "Visited" : "Not Visited"}  </button>



        </div>
    );
};

export default Country;