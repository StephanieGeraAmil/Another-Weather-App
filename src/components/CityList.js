import React ,{useContext} from 'react';
import City from './City.js'
import { GlobalContext } from '../context/GlobalState'
const CityList = () => {
const {cities}=useContext(GlobalContext)
const {loading}=useContext(GlobalContext)

    return (<div>
         
        {!loading &&
        <ul>
            {cities.map((item) => {
                return (

                    <li key={item.name} className="itemlist">
                        < City key={item.name} city={item} />
                    </li>
                )

            })}
        </ul>
                     }
        {loading&& <h4>Loading...</h4>}
       

    </div >)
};
export default CityList;
