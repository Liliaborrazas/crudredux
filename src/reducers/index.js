import { combineReducers } from 'redux'
import productosReducer from './productosReducer';
import categoriasReducer from './categoriasReducer'

export default combineReducers({
    productos: productosReducer,
    categorias:categoriasReducer
});