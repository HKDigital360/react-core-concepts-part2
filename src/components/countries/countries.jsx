

import React, { use } from 'react';

const Countries = ({countriesPromise}) => {
    const countriesData= use(countriesPromise);
    const allCountries =countriesData.countries;
    console.log(allCountries);

    return (
        <div>
            <h1>in the countries : {allCountries.length} </h1>
        </div>
    );
};

export default Countries;