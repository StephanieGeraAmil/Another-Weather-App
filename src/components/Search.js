import React, {useState, useContext} from 'react'
import { FaSearch } from "react-icons/fa";
import axios from 'axios'
import { GlobalContext } from '../context/GlobalState'


export const Search = () => {
    const {addCity}=useContext(GlobalContext)
    const {cities}=useContext(GlobalContext)
    const {startLoad}=useContext(GlobalContext)
    const {stopLoad}=useContext(GlobalContext)
    const [city,setCity]=useState('')
      

    const fetchData= async()=>{
        try{

            startLoad()
            const data= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`)
        
            const cityWithFormat={
                id: data.data.id,
                name: data.data.name,
                max: data.data.main.temp_max,
                min: data.data.main.temp_min,
                main: data.data.weather[0].main,
                description: data.data.weather[0].description,
                location: `${data.data.coord.lat.toFixed(2)}  ${data.data.coord.lon.toFixed(2)}`      
            }
            
            addCity(cityWithFormat)
            stopLoad()
        
        }catch(error){ 
             if (error.response.status==404) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            console.log("city not found")
            }else{
                console.error(error);
            }
         }
    }

    const onSubmitfn=(e)=>{
        e.preventDefault();
    
        if(city!="" && cities.find(item=>item.name.toLowerCase()==city.toLowerCase())===undefined){     
        fetchData(); 
        }  
    }
    return (
        <form onSubmit={onSubmitfn}>
            <input type="text"  placeholder="City..." onChange={(e)=>{setCity(e.target.value)}}  value={city}/> 
            <button className='magnifier'  type="submit"><FaSearch/></button>
        </form>
    )
}
