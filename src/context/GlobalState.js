import React,{createContext, useReducer } from "react"
import AppReducer from './AppReducer.js'
import cityWeather from '../city-weather';
//initial state
 const initialstate={
    loading:false,
    city:{
            name: cityWeather[0].name,
            max: cityWeather[0].main.temp_max,
            min: cityWeather[0].main.temp_max,
            main: cityWeather[0].weather[0].main,
            description: cityWeather[0].weather[0].description,
            location: `${cityWeather[0].coord.lat}  ${cityWeather[0].coord.lon}`      
          }}

//create context
export const GlobalContext = createContext(initialstate)




//provider component
export const GlobalProvider = ({children})=>{ 
    const [state, dispatch]= useReducer(AppReducer, initialstate)
  

    //actions
     const startLoad=()=>{
            dispatch({
            type: 'START_LOAD'
            });
        }
    const stopLoad=()=>{
        dispatch({
        type: 'STOP_LOAD'
        });
    }
    const changeCity=(city)=>{

        dispatch({
            type: 'CHANGE_CITY',
            payload: city
            });
           
    }

    return(
        <GlobalContext.Provider value={{
            city: state.city,loading:state.loading,startLoad,stopLoad,changeCity}}>
            {children}
        </GlobalContext.Provider>
    )
}
