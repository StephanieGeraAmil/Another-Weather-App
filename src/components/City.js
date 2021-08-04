import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState'

const City = () => {
     const {city}=useContext(GlobalContext)
const {loading}=useContext(GlobalContext)
    return ( 
        <>
            {!loading &&
                <div className="cityCard">
                            <h2>{city.name}</h2>
                            <h3> {city.main}</h3>
                            <p className="info">{city.description}</p>
                            <p>Min : {city.min}</p>
                            <p>Max :{city.max}</p>
                            <p>Location :{city.location}</p>
                            </div>
                        }
            {loading&& <h4>Loading...</h4>}
        </>
       
    )
};
export default City;
