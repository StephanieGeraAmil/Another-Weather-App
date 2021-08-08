import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState'

const City = ({city}) => {
    
const {loading}=useContext(GlobalContext)
const {removeCity}=useContext(GlobalContext)
    return ( 
        <>
            {!loading &&
                <div className="cityCard">
                    <div>
                            <h2>{city.name}</h2>
                            <h3> {city.main}</h3>
                            <p className="info">{city.description}</p>
                            <p>Min : {city.min}</p>
                            <p>Max :{city.max}</p>
                            <p>Location :{city.location}</p>
                            </div>
                    
                    <div>
                        <button className='deleteCityButon' onClick={()=>removeCity(city.id)}>X</button>
                    </div>
                    </div>
                        }
            {loading&& <h4>Loading...</h4>}
        </>
       
    )
};
export default City;
