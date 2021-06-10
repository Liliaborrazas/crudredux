import { 
    CATEGORIAS_API
} from '../types';
import axios from 'axios'

export const categoriasActions = ()=> async(dispatch, getState)=>{
    try{
        const res = await axios.get(`https://fakestoreapi.com/products/categories`)
        console.log(res.data)
        dispatch({
            type:CATEGORIAS_API,
            payload: res.data
        })
    }catch(error){
        console.log(error)
    }
    
    }
    
    ///Nosoros hacemos acciones, esas acciones se procesan en el reducer con los casos, que podemos tener varios
    //y eso va a retornar una accion que va a modificar nuestro estado


///Categorias
   // const res = await axios.get(`https://fakestoreapi.com/products/categories`)
//    0: "electronics"
//    1: "jewelery"
//    2: "men's clothing"
//    3: "women's clothing"