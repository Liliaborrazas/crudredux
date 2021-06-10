import { 
    CATEGORIA_JEWELERY
} from '../types'

//Cada reducer tiene su propio state

const initialState = {
    categoriaJewelery: [],
}

export default function (state = initialState, action){
    switch(action.type){
        case CATEGORIA_JEWELERY:
            return {
                ...state,
                categorias: action.payload
            }
            default:
                 return state;

    }
}