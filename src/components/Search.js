import React, {useState, useContext} from 'react'
import { FaSearch } from "react-icons/fa";
import axios from 'axios'
import { GlobalContext } from '../context/GlobalState'


export const Search = () => {
    const {addCity}=useContext(GlobalContext)
        const {startLoad}=useContext(GlobalContext)
            const {stopLoad}=useContext(GlobalContext)
    const [city,setCity]=useState('')
      

    const fetchData= async()=>{
        try{

        startLoad()
        const data= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`)
       console.log(data)
        const cityWithFormat={
            id: data.data.id,
            name: data.data.name,
            max: data.data.main.temp_max,
            min: data.data.main.temp_min,
            main: data.data.weather[0].main,
            description: data.data.weather[0].description,
            location: `${data.data.coord.lat}  ${data.data.coord.lon}`      
          }
         

        addCity(cityWithFormat)
       stopLoad()
        
        }catch(error){ console.error(error);}
    }
    const onSubmitfn=(e)=>{
        e.preventDefault();
        if(city!=""){
        fetchData(); 
        }  
    }
    return (
        <form onSubmit={onSubmitfn}>
            <input type="text"  placeholder="City..." onChange={(e)=>{setCity(e.target.value)}}  value={city}/> 
            <button className='magnifier'><FaSearch/></button>
        </form>
    )
}
