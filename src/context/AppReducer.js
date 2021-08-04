
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
        case 'CHANGE_CITY':
        return{
        ...state,
       city: action.payload
        }
        default:  return state
    }
}

// how a state changes in response of an action