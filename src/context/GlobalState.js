import React,{createContext, useReducer } from "react"
import AppReducer from './AppReducer.js'
import cityWeather from '../city-weather';
//initial state
    const city={
            name: cityWeather[0].name,
            max: cityWeather[0].main.temp_max,
            min: cityWeather[0].main.temp_max,
            main: cityWeather[0].weather[0].main,
            description: cityWeather[0].weather[0].description,
            location: `${cityWeather[0].coord.lat}  ${cityWeather[0].coord.lon}`      
          }
 const initialstate={
    loading:false,
    cities: [city]
    }

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
    const addCity=(city)=>{

        dispatch({
            type: 'ADD_CITY',
            payload: city
            });
           
    }
    const removeCity=(id)=>{

        dispatch({
            type: 'REMOVE_CITY',
            payload: id
            });
           
    }

    return(
        <GlobalContext.Provider value={{
            cities: state.cities,loading:state.loading,startLoad,stopLoad,addCity, removeCity}}>
            {children}
        </GlobalContext.Provider>
    )
}
