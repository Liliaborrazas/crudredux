import { 
    AGREGAR_PRODUCTO ,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    LISTA_API
} from '../types';
import axios from 'axios'

//Crear nuevos productos

export function crearNuevoProductoAction () {
    return () => {
        console.log('desde action')
    }
}

//Actions
//Las acciones van a consumir la api por ejemplo.Esta lista de datos se le pasa al reducer
//En la primera funcion de flecha, recibo los parametros que necesitamos enviar en la funcion 
// "obtenerListApiAction" hay funciones q no necesitan estos primeros parametros, esta no los necesita
// la segunda funcion flecha si necesita los parametros, estos son dispatch y getState.
//Con el dispatch nosotros activamos el reducer (ShopingReducer) y con el getState vamos a poder
//obtener la dataInicial(el estado inicial, la informacion q se esté amacenando en ese estado).
//Como vamos a llamar a api, vamos a hacer un async await
export const obtenerListApiAction = ()=> async(dispatch, getState)=>{
    try{
        const res = await axios.get(`https://fakestoreapi.com/products`)
        console.log(res.data)
        dispatch({
            type:LISTA_API,
            payload: res.data
        })
    
    }catch(error){
        console.log(error)
    }
    
    }
    
    ///Nosoros hacemos acciones, esas acciones se procesan en e reducer con los casos, que podemos tener varios
    //y eso va a retornar una accion que va a modificar nuestro estado