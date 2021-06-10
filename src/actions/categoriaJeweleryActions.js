
import { 
    CATEGORIA_JEWELERY
} from '../types';
import axios from 'axios'

export const categoriaJeweleryActions = ()=> async(dispatch, getState)=>{
    try{
        const res = await axios.get(`https://fakestoreapi.com/products/category/jewelery`)
        console.log(res.data)
        dispatch({
            type:CATEGORIA_JEWELERY,
            payload: res.data
        })
    }catch(error){
        console.log(error)
    }
    
    }
///Categorias
   // const res = await axios.get(`https://fakestoreapi.com/products/categories`)
//    0: "electronics"
//    1: "jewelery"
//    2: "men's clothing"
//    3: "women's clothing"