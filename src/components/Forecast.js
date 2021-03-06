import React,{useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { AreaChart, CartesianGrid, XAxis,YAxis,Tooltip,Area} from 'recharts';
import axios from 'axios'
import { Link, useParams, useHistory } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
export const Forecast = () => {
    const {id}=useParams()
    const {forecast}=useContext(GlobalContext)
    const {addForecast}=useContext(GlobalContext)
    const {cities}=useContext(GlobalContext)
    const history = useHistory()
    useEffect(() => {
        const city =cities.find(item=>item.id.toString()===id.toString())
        fetchData(city.name)
    
        
    }, [])
    const fetchData= async(name)=>{
        try{
            
            const data= await axios.get(` http://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${ process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`)
           
            const forecast = data.data.list.map(item=>{
                const frcst = {};
                frcst.date= item.dt_txt;
                frcst.temp =item.main.temp-273.5;
                return frcst;
            })
        
           
            addForecast(forecast)
           
        }catch(error){ 
             if (error.response.status==404) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            console.log("forecast not found")
            }else{
                console.error(error);
            }
         }
    }
    

//onClick={()=>getForecast(city.name)}
    return (
        <div>
           
                <button className='retunButton' onClick={()=>{history.goBack()}}><FaArrowLeft/></button>
           
            <AreaChart
                width={900}
                height={400}
                data={forecast}
                margin={{ top: 80, right: 30, left: 0, bottom: 0 }}
                >
                    <XAxis dataKey="date" />
                    <YAxis dataKey="temp" />
                    <Tooltip />
                    <Area
                    type='monotone'
                    dataKey='temp'
                    stroke='#e065c5'
                    fill='#e065c5'
                />
            </AreaChart>
         
    
        </div>
    )
}
