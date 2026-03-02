

import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({countriesPromise}) => {
    const countriesData= use(countriesPromise);
    const allCountries =countriesData.countries;
    // console.log(allCountries);

    return (
        <div>
            <h1>in the countries : {allCountries.length} </h1>
        <div className='countries'>
             {
            allCountries.map(country=> <Country
                key={country.cca3.cca3} country={country}></Country>)
         }
        </div>
        </div>
    );
};

export default Countries;