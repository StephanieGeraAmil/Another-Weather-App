import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState'

const City = ({city}) => {
    

const {removeCity}=useContext(GlobalContext)
// const {getForecast}=useContext(GlobalContext)
    return ( 
        <>
            
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
                        {/* <button className='forecastCity' onClick={()=>getForecast(city.id)}>X</button> */}
                   
                    </div>

                    </div>
           
        </>
       
    )
};
export default City;
