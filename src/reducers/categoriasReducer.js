import { 
    CATEGORIAS_API
} from '../types'

//Cada reducer tiene su propio state

const initialState = {
    categorias: [],
}

export default function (state = initialState, action){
    switch(action.type){
        case CATEGORIAS_API:
            return {
                ...state,
                categorias: action.payload
            }
            default:
                 return state;

    }
}