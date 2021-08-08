import React ,{useContext} from 'react';
import City from './City.js'
import { GlobalContext } from '../context/GlobalState'
const CityList = () => {
const {cities}=useContext(GlobalContext)

    return (<div>
        <ul>
            {cities.map((item) => {
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
