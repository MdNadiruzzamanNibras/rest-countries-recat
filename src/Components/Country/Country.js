import React from 'react';
import './Country.css';
const Country = (props) => {
 const {area, name, population, flags}=props.country

    return (
        
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>Country name:{name.common}</h2>
            <p>Population:{population}</p>
            <p><small>Area:{area}</small></p>
        </div>
    );
};

export default Country;