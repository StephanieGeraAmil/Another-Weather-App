
export default(state, action)=>{
   
    switch(action.type){
       case 'START_LOAD':
        return{
        ...state,
      loading: true
        }
        case 'STOP_LOAD':
        return{
        ...state,
       loading: false
        }
        case 'ADD_CITY':
        return{
        ...state,
       cities: [ ...state.cities, action.payload]
        }
        case 'REMOVE_CITY':
        return{
        ...state,
       cities: state.cities.filter(item=>item.id!==action.payload)
        }
        case 'ADD_CITY_FORECAST':
        return{
        ...state,
       forecast: action.payload
        }
        default:  return state
    }
}

// how a state changes in response of an action