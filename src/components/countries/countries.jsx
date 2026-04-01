

import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({countriesPromise}) => {
    const [visitedCountry, SetVisitedCountry]=useState([]);
    const handleVisitedCountry=(country)=>{
        console.log("country visited", country);
        const newVisitedCountry=[...visitedCountry, country];
        SetVisitedCountry(newVisitedCountry)
    }
    const countriesData= use(countriesPromise);
    const allCountries =countriesData.countries;
    // console.log(allCountries);

    return (
        <div>
            <h1>in the countries : {allCountries.length} </h1>
            <h2>Total Country Visited : {visitedCountry.length}</h2>
        <div className='countries'>
             {
            allCountries.map(country=> <Country
                key={country.cca3.cca3} country={country} handleVisitedCountry={handleVisitedCountry}></Country>)
         }
        </div>
        </div>
    );
};

export default Countries;