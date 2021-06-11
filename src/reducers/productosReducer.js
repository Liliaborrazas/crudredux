import { 
    LISTA_API
} from '../types'

//Cada reducer tiene su propio state

const initialState = {
    productos: [],
  
}

export default function (state = initialState, action){
    switch(action.type){
        case LISTA_API:
            return {
                ...state,
                productos: action.payload
                // productos:[...state.productos, action.payload]
            }
            default:
                 return state;

    }
}