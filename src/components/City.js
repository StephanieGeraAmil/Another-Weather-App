import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState'
import { Link } from 'react-router-dom';
import {FaTimes} from "react-icons/fa";
import {FaPlus} from "react-icons/fa";


const City = ({city}) => {
    

const {removeCity}=useContext(GlobalContext)


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
                    
                    <div className='buttons'>
                        <button className='deleteCityButon' onClick={()=>removeCity(city.id)}><FaTimes/></button>
                     <Link to={`/forecast/${city.id}`}>
                        <button className='forecastCity'><FaPlus/></button>
                    </Link>
                    </div>

                </div>
           
        </>
       
    )
};
export default City;
