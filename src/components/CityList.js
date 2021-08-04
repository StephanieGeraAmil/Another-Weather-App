import React from 'react';
import City from './City.js'
const CityList = ({ cities }) => {


    return (<div>
        <ul>
            {cities.map((item, index) => {
                return (

                    <li key={item.name} className="itemlist">
                        < City key={item.name} city={item} />
                    </li>
                )

            })}
        </ul>

    </div >)
};
export default CityList;
